"use client";

import { motion } from "framer-motion";

const PAIN_POINTS = [
  "You've automated individual tasks.",
  "But they don't talk to each other.",
  "One workflow completes, but the next doesn't know. Your clients get 3 separate notifications instead of one coordinated update.",
  "Disconnected automation creates disconnected experiences.",
  "You need a system, not scattered tools.",
];

export function ProblemScale() {
  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        {PAIN_POINTS.map((point, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`
              mb-8 leading-relaxed
              ${index < 2 ? "text-4xl md:text-5xl font-bold text-white" : ""}
              ${index >= 2 && index < PAIN_POINTS.length - 1 ? "text-xl md:text-2xl text-gray-400" : ""}
              ${index === PAIN_POINTS.length - 1 ? "text-3xl md:text-4xl font-bold text-white relative inline-block" : ""}
            `}
          >
            {point}
            {index === PAIN_POINTS.length - 1 && (
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-0 left-0 h-1 bg-accent"
              />
            )}
          </motion.p>
        ))}
      </div>
    </section>
  );
}

