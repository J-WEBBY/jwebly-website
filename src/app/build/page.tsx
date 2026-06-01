import type { Metadata } from "next";
import { Workflow, Layers, Check, type LucideIcon } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Pill } from "@/components/pill";
import { Reveal } from "@/components/reveal";
import { BUILD } from "@/lib/content";

export const metadata: Metadata = {
  title: "What we build — custom AI agents & workflow automation",
  description:
    "Bespoke AI agents and workflow automation built around your tools, for teams in any high-stakes field. Custom builds and a focused 5–7 workflow plan, owned end to end.",
  alternates: { canonical: "/build" },
  keywords: [
    "custom AI agent",
    "workflow automation",
    "AI automation for business",
    "bespoke AI",
    "AI agent development",
  ],
};

const ICONS: Record<string, LucideIcon> = { Workflow, Layers };

export default function BuildPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            style={{
              background:
                "radial-gradient(60% 50% at 50% -10%, var(--accent-glow), transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-page px-6 py-24 sm:px-8 sm:py-28">
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              <span aria-hidden className="h-px w-6 bg-faint" />
              {BUILD.kicker}
            </p>
            <h1 className="mt-6 max-w-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[clamp(40px,6vw,72px)]">
              {BUILD.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {BUILD.sub}
            </p>
            <div className="mt-9">
              <Pill
                href={BUILD.primaryCta.href}
                label={BUILD.primaryCta.label}
                size="lg"
                arrowCircle
              />
            </div>
          </div>
        </section>

        {/* Two services, expanded */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-page px-6 py-24 sm:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              {BUILD.services.map((svc, i) => {
                const Icon = ICONS[svc.icon];
                return (
                  <Reveal key={svc.title} delay={i * 0.08}>
                    <div className="dotted-grid fold-corner relative flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-surface p-8">
                      <div className="icon-glow flex h-14 w-14 items-center justify-center rounded-[var(--radius)] border border-border bg-surface-2">
                        <Icon size={22} className="relative text-accent" aria-hidden />
                      </div>
                      <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                        {svc.tag}
                      </p>
                      <h2 className="mt-2 text-2xl font-medium tracking-[-0.02em]">
                        {svc.title}
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-muted">
                        {svc.body}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {svc.points.map((pt) => (
                          <li key={pt} className="flex gap-3 text-sm text-foreground">
                            <Check
                              size={17}
                              className="mt-0.5 shrink-0 text-accent"
                              aria-hidden
                            />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 border-t border-border pt-5 text-sm text-muted">
                        {svc.forWho}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-page px-6 py-24 sm:px-8">
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                <span aria-hidden className="h-px w-6 bg-faint" />
                HOW AN ENGAGEMENT RUNS
              </p>
              <h2 className="mt-6 max-w-3xl font-semibold tracking-[-0.03em] text-[clamp(32px,4vw,52px)]">
                Led from first call to live — and kept running.
              </h2>
            </Reveal>
            <div className="mt-16 grid gap-px border-t border-border sm:grid-cols-2">
              {BUILD.steps.map((step, i) => (
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

        {/* Closer CTA */}
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
              <h2 className="font-semibold tracking-[-0.03em] text-[clamp(32px,4vw,52px)]">
                {BUILD.closer.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
                {BUILD.closer.sub}
              </p>
              <div className="mt-9 flex justify-center">
                <Pill
                  href={BUILD.primaryCta.href}
                  label={BUILD.primaryCta.label}
                  size="lg"
                  arrowCircle
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
