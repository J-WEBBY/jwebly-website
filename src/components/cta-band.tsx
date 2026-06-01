import { Reveal } from "@/components/reveal";
import { Pill } from "@/components/pill";
import { CTA } from "@/lib/content";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 110%, var(--accent-glow), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-page px-6 py-28 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            <span aria-hidden className="h-px w-6 bg-faint" />
            {CTA.kicker}
          </p>
          <h2 className="mt-6 font-semibold tracking-[-0.03em] text-[clamp(32px,4vw,52px)]">
            {CTA.headingLead}{" "}
            <span className="italic">{CTA.headingEmphasis}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {CTA.sub}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Pill
              href={CTA.primaryCta.href}
              label={CTA.primaryCta.label}
              size="lg"
              arrowCircle
            />
            <Pill
              href={CTA.secondaryCta.href}
              label={CTA.secondaryCta.label}
              variant="secondary"
              size="lg"
              external
              arrow={false}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
