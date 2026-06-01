import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * Prose container for MDX articles. Lives in a route group so it does NOT wrap
 * the /resources index (which needs full-width cards). URLs stay /resources/<slug>.
 */
export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="border-b border-border">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8">
        <Link
          href="/resources"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-faint transition-colors hover:text-foreground"
        >
          <ArrowLeft
            size={14}
            className="transition-transform duration-200 group-hover:-translate-x-0.5"
          />
          Resources
        </Link>
        <div className="mt-10">{children}</div>
      </div>
    </article>
  );
}
