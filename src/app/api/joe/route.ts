import Anthropic from "@anthropic-ai/sdk";
import { JOE_SYSTEM_PROMPT } from "@/lib/joe-prompt";
import { checkRateLimit } from "@/lib/joe-ratelimit";

/**
 * Joe's server route (JOE.md §1-3). The Anthropic key NEVER reaches the browser:
 * the client POSTs { messages } here, we validate → rate-limit → call Anthropic
 * with streaming, and relay only the text tokens back as a plain-text stream.
 *
 * Node runtime (not edge) so the SDK + in-memory rate-limit fallback are simple
 * and robust; switch to edge later if low-latency streaming matters more.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL = "claude-haiku-4-5";
const MAX_TOKENS = 512; // hard output cap (cost guard)
const MAX_INPUT_CHARS = 1500; // reject any single message longer than this
const MAX_HISTORY = 12; // only forward the last N messages

type Msg = { role: "user" | "assistant"; content: string };

function getIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function isValid(body: unknown): body is { messages: Msg[] } {
  if (!body || typeof body !== "object") return false;
  const m = (body as { messages?: unknown }).messages;
  if (!Array.isArray(m) || m.length === 0) return false;
  return m.every(
    (x) =>
      x &&
      typeof x === "object" &&
      (x.role === "user" || x.role === "assistant") &&
      typeof x.content === "string"
  );
}

function json(status: number, data: unknown) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });
}

export async function POST(req: Request) {
  // Rate limit per IP FIRST (20/10min, 100/day) — protect against abuse even if
  // the route is misconfigured.
  const ip = getIp(req);
  const limit = await checkRateLimit(ip);
  if (!limit.ok) {
    return json(429, {
      error:
        "Joe's taking a breather — book a call and a human will jump in.",
      retryAfterSec: limit.retryAfterSec,
    });
  }

  // Parse + validate the body shape. Never trust the client.
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json(400, { error: "Invalid request." });
  }
  if (!isValid(body)) {
    return json(400, { error: "Invalid request." });
  }

  // Input cap: reject any single oversized message before calling Anthropic.
  if (body.messages.some((m) => m.content.length > MAX_INPUT_CHARS)) {
    return json(400, {
      error: "That message is a bit long — try trimming it down.",
    });
  }

  // Key check — only needed now that the request is well-formed.
  if (!process.env.ANTHROPIC_API_KEY) {
    return json(500, { error: "Joe isn't configured yet." });
  }

  // Trim to the last N messages (bounds cost, stops context-stuffing). Ignore any
  // client-supplied system field — the system prompt lives only here.
  const messages = body.messages.slice(-MAX_HISTORY);

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      let sent = false;
      try {
        const ai = await client.messages.create({
          model: MODEL,
          max_tokens: MAX_TOKENS,
          system: JOE_SYSTEM_PROMPT,
          messages,
          stream: true,
        });
        for await (const event of ai) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(event.delta.text));
            sent = true;
          }
        }
        controller.close();
      } catch (err) {
        // Log the real cause server-side (visible in dev.log / Vercel logs).
        console.error("[joe] stream error:", err);
        // Only show the fallback if we haven't already streamed real text —
        // never corrupt a partial answer by appending onto it.
        if (!sent) {
          controller.enqueue(
            encoder.encode("Joe hit a snag — you can still book a call.")
          );
        }
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
