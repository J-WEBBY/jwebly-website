import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PRODUCT } from "@/lib/content";

export function ProductFeature() {
  return (
    <section id="healthos" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-page px-6 py-24 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left: copy */}
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              <span aria-hidden className="h-px w-6 bg-faint" />
              {PRODUCT.kicker}
            </p>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
              {PRODUCT.badge}
            </span>

            <h2 className="mt-5 font-semibold tracking-[-0.03em] text-[clamp(32px,4vw,52px)]">
              {PRODUCT.name}
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              {PRODUCT.body}
            </p>

            <ul className="mt-10 space-y-px border-t border-border">
              {PRODUCT.values.map((v) => (
                <li key={v.n} className="flex gap-5 border-b border-border py-5">
                  <span className="font-mono text-sm text-faint">{v.n}</span>
                  <div>
                    <p className="font-medium text-foreground">{v.title}</p>
                    <p className="mt-1 text-sm text-muted">{v.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href={PRODUCT.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <span className="border-b-2 border-accent pb-0.5">
                {PRODUCT.link.label}
              </span>
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>

          {/* Right: clinic chat exchange */}
          <Reveal delay={0.1}>
            <ChatExchange />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ChatExchange() {
  return (
    <div className="overflow-hidden rounded-[var(--radius)] border border-border bg-surface">
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
        <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
        <span className="font-mono text-xs text-muted">patient ↔ healthos</span>
      </div>
      <div className="space-y-3 p-5">
        {PRODUCT.chat.map((msg, i) => {
          const isBot = msg.from === "healthos";
          return (
            <div
              key={i}
              className={`flex ${isBot ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] rounded-[var(--radius)] px-3.5 py-2.5 text-sm leading-relaxed ${
                  isBot
                    ? "border border-accent/25 bg-accent/10 text-accent"
                    : "border border-border bg-surface-2 text-foreground"
                }`}
              >
                {msg.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
