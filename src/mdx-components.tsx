import type { MDXComponents } from "mdx/types";

/**
 * Global MDX element mapping — gives resource articles the house typography
 * (dark theme) without per-file styling. Required by @next/mdx in App Router.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-semibold tracking-[-0.03em] text-[clamp(32px,4vw,52px)]">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 text-2xl font-medium tracking-[-0.02em] text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-lg font-medium text-foreground">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mt-5 text-lg leading-relaxed text-muted">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-relaxed text-muted">
        {children}
      </ul>
    ),
    li: ({ children }) => <li>{children}</li>,
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-foreground underline decoration-accent decoration-2 underline-offset-4"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-medium text-foreground">{children}</strong>
    ),
    ...components,
  };
}
