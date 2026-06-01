import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { RESOURCES } from "@/lib/content";

export function ResourcesTeaser() {
  return (
    <section id="resources" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-page px-6 py-24 sm:px-8">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            <span aria-hidden className="h-px w-6 bg-faint" />
            {RESOURCES.kicker}
          </p>
          <h2 className="mt-6 max-w-3xl font-semibold tracking-[-0.03em] text-[clamp(32px,4vw,52px)]">
            {RESOURCES.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {RESOURCES.cards.map((card, i) => (
            <Reveal key={card.href} delay={i * 0.06}>
              <Link
                href={card.href}
                className="group dotted-grid relative flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-surface p-6 transition-all duration-200 hover:border-border-strong hover:-translate-y-0.5"
              >
                <ArrowUpRight
                  size={18}
                  className="text-faint transition-colors group-hover:text-accent"
                />
                <h3 className="mt-6 text-lg font-medium leading-snug text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {card.blurb}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
