"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { BOOKING_REASONS, BOOK, SITE } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * The /book-a-call form. Posts to /api/contact, which validates, rate-limits and
 * emails the Jwebly inbox via Resend. Shows an inline success state on completion;
 * falls back to the email address on error.
 */
export function BookForm({ defaultReason = "general" }: { defaultReason?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      reason: String(data.get("reason") || "general"),
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        let msg = "Something went wrong — please try again.";
        try {
          const d = await res.json();
          if (d?.error) msg = d.error;
        } catch {
          /* non-JSON */
        }
        setError(msg);
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setError("Network error — please try again.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface-2">
          <Check className="text-accent" size={22} aria-hidden />
        </div>
        <h2 className="mt-5 text-2xl font-medium tracking-[-0.02em]">
          {BOOK.success.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted">{BOOK.success.sub}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={120}
            className={inputCls}
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={200}
            className={inputCls}
          />
        </Field>
      </div>

      <Field label="Company" htmlFor="company" optional>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          maxLength={160}
          className={inputCls}
        />
      </Field>

      <Field label="What's this about?" htmlFor="reason">
        <select
          id="reason"
          name="reason"
          defaultValue={defaultReason}
          className={`${inputCls} appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a1a1a1' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
          }}
        >
          {BOOKING_REASONS.map((r) => (
            <option key={r.value} value={r.value} className="bg-surface text-foreground">
              {r.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Anything we should know?" htmlFor="message" optional>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={2000}
          placeholder="A line or two on what you're trying to fix helps us make the call useful."
          className={`${inputCls} resize-none`}
        />
      </Field>

      {status === "error" && error && (
        <p className="text-sm text-muted">
          {error}{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-foreground underline decoration-accent decoration-2 underline-offset-4"
          >
            {SITE.email}
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex h-12 items-center gap-2 rounded-[var(--pill)] bg-foreground px-6 text-[15px] font-medium text-background transition-all duration-200 hover:-translate-y-px disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send request"}
        {status !== "sending" && (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-background/10">
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        )}
      </button>

      <p className="text-xs text-faint">
        Prefer email? Reach us at{" "}
        <a href={`mailto:${SITE.email}`} className="text-muted underline underline-offset-4">
          {SITE.email}
        </a>
        .
      </p>
    </form>
  );
}

const inputCls =
  "w-full rounded-[var(--radius)] border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-faint focus:border-border-strong";

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
        {label}
        {optional && <span className="text-xs font-normal text-faint">optional</span>}
      </span>
      {children}
    </label>
  );
}
