import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

/**
 * Shared shell for simple content pages (about, legal, careers): nav + a prose
 * column + footer. Keeps these pages consistent and light.
 */
export function PageShell({
  kicker,
  title,
  intro,
  children,
}: {
  kicker: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-3xl px-6 py-24 sm:px-8">
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              <span aria-hidden className="h-px w-6 bg-faint" />
              {kicker}
            </p>
            <h1 className="mt-6 font-semibold tracking-[-0.03em] text-[clamp(32px,4.5vw,56px)]">
              {title}
            </h1>
            {intro && (
              <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>
            )}
            <div className="mt-10 space-y-6">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/** A titled prose block for use inside PageShell. */
export function Block({
  heading,
  children,
}: {
  heading?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      {heading && (
        <h2 className="mb-2 text-lg font-medium text-foreground">{heading}</h2>
      )}
      <div className="space-y-4 leading-relaxed text-muted">{children}</div>
    </div>
  );
}
