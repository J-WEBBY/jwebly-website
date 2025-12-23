"use client";

import { motion } from "framer-motion";

const PAIN_POINTS = [
  "You're drowning in manual work.",
  "10-15 hours per week on repetitive tasks.",
  "3-5 days of back-and-forth coordination.",
  "Endless client chasing eating your time.",
  "Whether that's document processing, scheduling, client communication, or reporting—your team is stuck in operational quicksand.",
  "You've looked at Zapier, Make, even hiring VAs.",
  "But you need something that actually thinks, not just executes tasks.",
  "There's a better way.",
];

export function ProblemSection() {
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
              ${index === 0 ? "text-4xl md:text-5xl font-bold text-white" : ""}
              ${index > 0 && index < PAIN_POINTS.length - 1 ? "text-2xl md:text-3xl text-gray-400" : ""}
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

