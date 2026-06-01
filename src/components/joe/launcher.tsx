"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { JoePanel } from "@/components/joe/panel";
import { JoeOrb } from "@/components/joe/orb";
import { JOE } from "@/lib/content";

/**
 * Joe's floating launcher (JOE.md §5), mounted globally in layout. Dark pill with
 * a faint teal glow + the white orb; collapses to just the orb on mobile. Opens
 * the centered chat overlay. The panel (and its API calls) only mount once opened.
 */
export function JoeLauncher() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && <JoePanel onClose={() => setOpen(false)} />}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ask Joe"
        aria-expanded={open}
        className="orb-glow fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 rounded-[var(--pill)] border border-border bg-surface px-3.5 py-3 text-sm font-medium text-foreground shadow-lg transition-all duration-200 hover:border-border-strong hover:-translate-y-px"
      >
        <JoeOrb size={22} />
        <span className="hidden sm:inline">{JOE.label}</span>
      </button>
    </>
  );
}
