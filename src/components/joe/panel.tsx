"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { X, ArrowUp } from "lucide-react";
import { useJoe } from "@/components/joe/use-joe";
import { JOE, SITE } from "@/lib/content";

/**
 * Joe's chat overlay — a large, rectangular, minimalist DARK modal: near-black
 * spotlight panel over the dimmed site, name top-left with a green online dot,
 * a clean "Ask anything…" composer, and a circular send button. Monochrome (no
 * accent colour anywhere, incl. the composer focus state). Soft spring entrance;
 * full a11y (role=dialog, aria-live, Esc/backdrop close, focus, scroll lock);
 * respects prefers-reduced-motion.
 */
export function JoePanel({ onClose }: { onClose: () => void }) {
  const { messages, send, isStreaming, error } = useJoe();
  const [input, setInput] = useState("");
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: reduce ? "auto" : "smooth",
    });
  }, [messages, reduce]);

  useEffect(() => {
    inputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const submit = () => {
    const text = input.trim();
    if (!text || isStreaming) return;
    setInput("");
    void send(text);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  const empty = messages.length === 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Chat with Joe"
      className="fixed inset-0 z-[60] flex items-stretch justify-center p-0 sm:items-center sm:p-6"
    >
      {/* Backdrop */}
      <motion.button
        type="button"
        aria-label="Close chat"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* Panel — large rectangular dark spotlight */}
      <motion.div
        className="relative flex h-full w-full flex-col overflow-hidden bg-neutral-950 text-white shadow-2xl sm:h-[640px] sm:max-h-[88vh] sm:w-[min(900px,94vw)] sm:rounded-2xl sm:border sm:border-white/10"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 340, damping: 30 }}
      >
        {/* Header — name left, minimal close right */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-base font-medium tracking-[-0.01em] text-white">
              {JOE.headerName}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-neutral-500">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              online
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close chat"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div
          ref={listRef}
          aria-live="polite"
          className="scrollbar-subtle flex-1 space-y-4 overflow-y-auto px-6 py-2"
        >
          <Bubble role="assistant" text={JOE.greeting} />

          {empty && (
            <div className="flex flex-wrap gap-2 pt-1">
              {JOE.suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => void send(s)}
                  className="rounded-full bg-white/5 px-4 py-2 text-left text-sm text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {messages.map((m, i) => {
            const isLast = i === messages.length - 1;
            if (m.role === "user") {
              return <Bubble key={i} role="user" text={m.content} />;
            }
            const streamingEmpty = isLast && isStreaming && m.content === "";
            return (
              <div key={i} className="flex flex-col items-start gap-2">
                {streamingEmpty ? <TypingDots /> : <Bubble role="assistant" text={m.content} />}
                {invitesBooking(m.content) && (
                  <a
                    href={SITE.bookCallHref}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-transform hover:-translate-y-px"
                  >
                    Book a call →
                  </a>
                )}
              </div>
            );
          })}

          {error && (
            <div className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-neutral-300">
              {error}{" "}
              <a
                href={SITE.bookCallHref}
                className="font-medium text-white underline underline-offset-4"
              >
                Book a call
              </a>
            </div>
          )}
        </div>

        {/* Composer */}
        <div className="px-6 pb-6 pt-3">
          <div className="flex items-end gap-2 rounded-2xl bg-white/5 px-4 py-3 transition-colors focus-within:bg-white/10">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              rows={1}
              maxLength={1500}
              placeholder="Ask anything…"
              className="max-h-28 flex-1 resize-none border-0 bg-transparent py-1 text-sm text-white outline-none focus:outline-none focus-visible:outline-none placeholder:text-neutral-500"
              style={{ outline: "none", boxShadow: "none" }}
            />
            <button
              type="button"
              onClick={submit}
              disabled={!input.trim() || isStreaming}
              aria-label="Send message"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-neutral-900 transition-all hover:opacity-90 disabled:opacity-20"
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/** Joe routes to "book a call" — surface the inline pill when his reply does. */
function invitesBooking(text: string) {
  return /book a call/i.test(text);
}

/**
 * Chat bubble on the dark panel. Assistant (Joe) = elevated dark surface, white
 * text, left-aligned. User = white, dark text, right-aligned (the human stands out).
 */
function Bubble({ role, text }: { role: "user" | "assistant"; text: string }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[78%] whitespace-pre-wrap px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "rounded-2xl rounded-br-md bg-white text-neutral-900"
            : "rounded-2xl rounded-bl-md bg-white/10 text-white"
        }`}
      >
        {normalizeNewlines(text)}
      </div>
    </div>
  );
}

/**
 * Haiku sometimes emits literal "\\n" escape sequences instead of real newlines.
 * Convert them so paragraphs render as breaks, and collapse 3+ blanks to one gap.
 */
function normalizeNewlines(text: string) {
  return text.replace(/\\n/g, "\n").replace(/\n{3,}/g, "\n\n");
}

function TypingDots() {
  return (
    <div className="flex justify-start">
      <div
        className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-white/10 px-4 py-3"
        aria-label="Joe is typing"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="pulse-dot h-1.5 w-1.5 rounded-full bg-white/60"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
}
