import { Resend } from "resend";
import { checkRateLimit } from "@/lib/joe-ratelimit";
import { BOOKING_REASONS } from "@/lib/content";

/**
 * Contact / "Book a call" form handler. Validates → rate-limits → sends a
 * notification email via Resend to the Jwebly inbox (with the visitor's address
 * as reply-to). Keys are server-side only.
 *
 * Env:
 *   RESEND_API_KEY    — Resend API key (required to actually send)
 *   CONTACT_TO        — inbox to notify (default hello@jwebly.co.uk)
 *   CONTACT_FROM      — verified Resend sender (default onboarding@resend.dev for dev)
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO = process.env.CONTACT_TO || "hello@jwebly.co.uk";
const FROM = process.env.CONTACT_FROM || "Jwebly <onboarding@resend.dev>";

const REASON_VALUES = new Set<string>(BOOKING_REASONS.map((r) => r.value));
const REASON_LABEL = new Map<string, string>(
  BOOKING_REASONS.map((r) => [r.value, r.label])
);

const MAX = { name: 120, email: 200, company: 160, message: 2000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Body = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  reason?: unknown;
  message?: unknown;
};

function getIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function json(status: number, data: unknown) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  // Rate limit per IP (shared limiter: 20/10min, 100/day).
  const limit = await checkRateLimit(getIp(req));
  if (!limit.ok) {
    return json(429, {
      error: "Too many requests just now — please try again shortly.",
    });
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return json(400, { error: "Invalid request." });
  }

  // Validate + normalise.
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const reason =
    typeof body.reason === "string" && REASON_VALUES.has(body.reason)
      ? body.reason
      : "general";

  if (!name || name.length > MAX.name) {
    return json(400, { error: "Please enter your name." });
  }
  if (!email || !EMAIL_RE.test(email) || email.length > MAX.email) {
    return json(400, { error: "Please enter a valid email address." });
  }
  if (company.length > MAX.company || message.length > MAX.message) {
    return json(400, { error: "That's a bit long — please trim it down." });
  }

  const reasonLabel = REASON_LABEL.get(reason) ?? "General enquiry";

  // If Resend isn't configured, accept gracefully (don't 500 the visitor) but
  // make it loud in the server logs so the human notices in dev.
  if (!process.env.RESEND_API_KEY) {
    console.warn(
      "[contact] RESEND_API_KEY not set — submission received but no email sent:",
      { name, email, company, reason, message }
    );
    return json(200, { ok: true, delivered: false });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = `
    <h2>New booking request — ${esc(reasonLabel)}</h2>
    <p><strong>Name:</strong> ${esc(name)}</p>
    <p><strong>Email:</strong> ${esc(email)}</p>
    ${company ? `<p><strong>Company:</strong> ${esc(company)}</p>` : ""}
    <p><strong>About:</strong> ${esc(reasonLabel)}</p>
    ${message ? `<p><strong>Message:</strong></p><p>${esc(message).replace(/\n/g, "<br>")}</p>` : ""}
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Booking request — ${reasonLabel} — ${name}`,
      html,
    });
    if (error) {
      console.error("[contact] resend error:", error);
      return json(502, {
        error: "Couldn't send right now — please email us directly.",
      });
    }
    return json(200, { ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] send threw:", err);
    return json(502, {
      error: "Couldn't send right now — please email us directly.",
    });
  }
}
