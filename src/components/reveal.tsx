"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.2, 0.7, 0.2, 1] as const;

const TAGS = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
} as const;

/**
 * Scroll-reveal wrapper: fade-up once on enter. Respects prefers-reduced-motion
 * (opacity only, no transform) and reserves space so reveals never cause CLS.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof typeof TAGS;
}) {
  const reduce = useReducedMotion();
  const MotionTag = TAGS[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}
