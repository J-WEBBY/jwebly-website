import { Reveal } from "@/components/reveal";
import { HOW } from "@/lib/content";

/**
 * Slightly lighter --surface band for rhythm (CLAUDE.md §3 — Vercel alternates
 * subtle dark values rather than going light). This section carries the
 * boutique/custom truth — framed as premium service, never "not self-serve."
 */
export function HowItWorks() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-page px-6 py-24 sm:px-8">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            <span aria-hidden className="h-px w-6 bg-faint" />
            {HOW.kicker}
          </p>
          <h2 className="mt-6 max-w-3xl font-semibold tracking-[-0.03em] text-[clamp(32px,4vw,52px)]">
            {HOW.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {HOW.sub}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px border-t border-border sm:grid-cols-2">
          {HOW.steps.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 0.06}
              className="border-b border-border py-8 sm:px-8 sm:odd:pl-0 sm:even:border-l sm:even:border-border"
            >
              <span className="font-mono text-sm text-accent">{step.n}</span>
              <h3 className="mt-3 text-xl font-medium">{step.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
