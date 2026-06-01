"use client";

import { useCallback, useRef, useState } from "react";

export type ChatMsg = { role: "user" | "assistant"; content: string };

const STORAGE_KEY = "joe-conversation";

function loadStored(): ChatMsg[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ChatMsg[]) : [];
  } catch {
    return [];
  }
}

/**
 * Joe's client hook (JOE.md §7.3): owns message state, POSTs to /api/joe, parses
 * the streamed plain-text response token-by-token, and exposes loading / error /
 * rate-limit states. Conversation persists in sessionStorage for the visit only.
 */
export function useJoe() {
  const [messages, setMessages] = useState<ChatMsg[]>(loadStored);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const persist = useCallback((next: ChatMsg[]) => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* sessionStorage unavailable — fine, session-only state still works */
    }
  }, []);

  const send = useCallback(
    async (text: string) => {
      const content = text.trim();
      if (!content || isStreaming) return;
      setError(null);

      const history = [...messages, { role: "user", content } as ChatMsg];
      // Add the user message + an empty assistant message we stream into.
      setMessages([...history, { role: "assistant", content: "" }]);
      setIsStreaming(true);

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const res = await fetch("/api/joe", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ messages: history }),
          signal: controller.signal,
        });

        if (!res.ok) {
          let msg = "Joe hit a snag — you can still book a call.";
          try {
            const data = await res.json();
            if (data?.error) msg = data.error;
          } catch {
            /* non-JSON error body */
          }
          setError(msg);
          // Drop the empty assistant placeholder.
          setMessages((m) => {
            const next = m.slice(0, -1);
            persist(next);
            return next;
          });
          return;
        }

        const reader = res.body?.getReader();
        if (!reader) throw new Error("no stream");
        const decoder = new TextDecoder();
        let acc = "";

        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          setMessages((m) => {
            const next = [...m];
            next[next.length - 1] = { role: "assistant", content: acc };
            return next;
          });
        }

        setMessages((m) => {
          persist(m);
          return m;
        });
      } catch (e) {
        if ((e as Error)?.name === "AbortError") return;
        setError("Joe hit a snag — you can still book a call.");
        setMessages((m) => {
          const next = m.slice(0, -1);
          persist(next);
          return next;
        });
      } finally {
        setIsStreaming(false);
        abortRef.current = null;
      }
    },
    [messages, isStreaming, persist]
  );

  return { messages, send, isStreaming, error };
}
