import Link from "next/link";
import { Workflow, Layers, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Tile } from "@/components/tile";
import { WHAT_WE_BUILD } from "@/lib/content";

// Map the icon names stored in content.ts to lucide components.
const ICONS: Record<string, LucideIcon> = { Workflow, Layers };

/**
 * The secondary services (CLAUDE.md §5). Visibly secondary to the HealthOS
 * feature above — two tiles, smaller — but real, each linking to /build.
 */
export function WhatWeBuild() {
  return (
    <section id="what-we-build" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-page px-6 py-24 sm:px-8">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            <span aria-hidden className="h-px w-6 bg-faint" />
            {WHAT_WE_BUILD.kicker}
          </p>
          <h2 className="mt-6 max-w-3xl font-semibold tracking-[-0.03em] text-[clamp(32px,4vw,52px)]">
            {WHAT_WE_BUILD.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {WHAT_WE_BUILD.sub}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {WHAT_WE_BUILD.tiles.map((tile, i) => (
            <Reveal key={tile.title} delay={i * 0.08}>
              <Tile
                icon={ICONS[tile.icon]}
                title={tile.title}
                body={tile.body}
                href={tile.href}
                cta={tile.cta}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-sm text-muted">
            {WHAT_WE_BUILD.footerLine.lead}{" "}
            <Link
              href={WHAT_WE_BUILD.footerLine.cta.href}
              className="font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4"
            >
              {WHAT_WE_BUILD.footerLine.cta.label}
            </Link>{" "}
            {WHAT_WE_BUILD.footerLine.tail}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
