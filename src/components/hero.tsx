"use client";

import { motion, useReducedMotion } from "motion/react";
import { Pill } from "@/components/pill";
import { HERO } from "@/lib/content";

const EASE = [0.2, 0.7, 0.2, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  // One orchestrated page load: staggered fade-up across hero elements.
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Faint line-art atmosphere behind the hero (CLAUDE.md §6) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% -10%, var(--accent-glow), transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-page px-6 pb-20 pt-20 sm:px-8 sm:pt-28"
      >
        <motion.p
          variants={item}
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-faint"
        >
          <span aria-hidden className="h-px w-6 bg-faint" />
          {HERO.kicker}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 max-w-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[clamp(48px,7vw,96px)]"
        >
          {HERO.headlineLead}{" "}
          <span className="relative italic">
            {HERO.headlineEmphasis}
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 h-[3px] w-full bg-accent"
            />
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-muted"
        >
          {HERO.lede}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
          <Pill
            href={HERO.primaryCta.href}
            label={HERO.primaryCta.label}
            size="lg"
            arrowCircle
          />
          <Pill
            href={HERO.secondaryCta.href}
            label={HERO.secondaryCta.label}
            variant="secondary"
            size="lg"
            arrow={false}
          />
        </motion.div>

        <motion.div variants={item} className="mt-16">
          <DemoCard />
        </motion.div>
      </motion.div>
    </section>
  );
}

function DemoCard() {
  const reduce = useReducedMotion();

  return (
    <figure className="mx-auto max-w-2xl overflow-hidden rounded-[var(--radius)] border border-border bg-surface">
      {/* Title bar */}
      <figcaption className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        </span>
        <span className="ml-2 font-mono text-xs text-muted">
          {HERO.demo.title}
        </span>
      </figcaption>

      {/* Lines animate in sequentially to feel live */}
      <div className="space-y-2.5 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {HERO.demo.lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: reduce ? 0 : 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              ease: EASE,
              delay: reduce ? 0 : 0.5 + i * 0.7,
            }}
            className="flex flex-wrap items-center gap-x-2"
          >
            <span className="text-faint">{line.time}</span>
            <span className="text-faint">[{line.tag}]</span>
            <span className="text-foreground">{line.text}</span>
            {"pulse" in line && (line as { pulse?: boolean }).pulse && (
              <span
                aria-label="live"
                className="pulse-dot ml-0.5 inline-block h-2 w-2 rounded-full bg-accent"
              />
            )}
          </motion.p>
        ))}
      </div>
    </figure>
  );
}
