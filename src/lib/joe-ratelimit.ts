/**
 * IP rate limiting for the Joe endpoint (JOE.md §3). A public chatbot wired to a
 * paid API is a standing cost liability, so this is non-negotiable.
 *
 * Uses Upstash Redis when configured (works across serverless instances); falls
 * back to a per-instance in-memory store otherwise. The in-memory fallback is
 * weak on serverless (each instance has its own map) — set UPSTASH_* in prod.
 *
 * Limits: 20 messages / 10 min AND 100 / day, per IP.
 */

const SHORT = { windowMs: 10 * 60 * 1000, max: 20 };
const DAY = { windowMs: 24 * 60 * 60 * 1000, max: 100 };

export type RateResult = { ok: boolean; retryAfterSec?: number };

// ---- In-memory fallback (per instance) -------------------------------------

type Hit = { count: number; resetAt: number };
const store = new Map<string, Hit>();

function hitMemory(key: string, windowMs: number, max: number, now: number) {
  const cur = store.get(key);
  if (!cur || now >= cur.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { exceeded: false, resetAt: now + windowMs };
  }
  cur.count += 1;
  return { exceeded: cur.count > max, resetAt: cur.resetAt };
}

// Opportunistic cleanup so the map can't grow unbounded.
function sweep(now: number) {
  if (store.size < 5000) return;
  for (const [k, v] of store) if (now >= v.resetAt) store.delete(k);
}

// ---- Upstash REST (optional) -----------------------------------------------

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const useUpstash = Boolean(UPSTASH_URL && UPSTASH_TOKEN);

async function hitUpstash(key: string, windowSec: number, max: number) {
  // INCR then set expiry on first hit. Two round-trips kept simple via pipeline.
  const res = await fetch(`${UPSTASH_URL}/pipeline`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${UPSTASH_TOKEN}`,
      "content-type": "application/json",
    },
    body: JSON.stringify([
      ["INCR", key],
      ["EXPIRE", key, String(windowSec), "NX"],
      ["TTL", key],
    ]),
  });
  if (!res.ok) throw new Error(`upstash ${res.status}`);
  const out = (await res.json()) as { result: unknown }[];
  const count = Number(out[0]?.result ?? 0);
  const ttl = Number(out[2]?.result ?? windowSec);
  return { exceeded: count > max, retryAfterSec: ttl > 0 ? ttl : windowSec };
}

// ---- Public API ------------------------------------------------------------

export async function checkRateLimit(ip: string): Promise<RateResult> {
  const now = Date.now();

  if (useUpstash) {
    try {
      const [s, d] = await Promise.all([
        hitUpstash(`joe:s:${ip}`, SHORT.windowMs / 1000, SHORT.max),
        hitUpstash(`joe:d:${ip}`, DAY.windowMs / 1000, DAY.max),
      ]);
      if (s.exceeded) return { ok: false, retryAfterSec: s.retryAfterSec };
      if (d.exceeded) return { ok: false, retryAfterSec: d.retryAfterSec };
      return { ok: true };
    } catch {
      // Fall through to in-memory if the store is unreachable.
    }
  }

  sweep(now);
  const s = hitMemory(`joe:s:${ip}`, SHORT.windowMs, SHORT.max, now);
  const d = hitMemory(`joe:d:${ip}`, DAY.windowMs, DAY.max, now);
  if (s.exceeded)
    return { ok: false, retryAfterSec: Math.ceil((s.resetAt - now) / 1000) };
  if (d.exceeded)
    return { ok: false, retryAfterSec: Math.ceil((d.resetAt - now) / 1000) };
  return { ok: true };
}
