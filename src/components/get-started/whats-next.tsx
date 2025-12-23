"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const NEXT_STEPS = [
  {
    step: 1,
    title: "Book Your Slot",
    description: "Choose a convenient time from our calendar. You'll receive instant confirmation with Google Meet link.",
  },
  {
    step: 2,
    title: "Discovery Call (1 Hour)",
    description: "We'll explore your business, map processes, and identify automation opportunities. Joe (AI) joins and takes notes.",
  },
  {
    step: 3,
    title: "Custom Proposal (48 Hours)",
    description: "We'll send a detailed proposal with workflow designs, timeline, and fixed pricing. No surprises.",
  },
  {
    step: 4,
    title: "Decision Time",
    description: "Take your time reviewing. No pressure. If you approve, we start design work within 1 week.",
  },
];

export function WhatsNext() {
  return (
    <section className="bg-black py-32">
      <div className="container max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Happens Next?
          </h2>
          <p className="text-lg text-gray-400">
            Clear process from booking to deployment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {NEXT_STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="p-6 border border-gray-900 rounded-xl bg-gradient-to-br from-background-elevated to-black h-full">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 border-2 border-accent">
                  <span className="text-xl font-bold text-accent">{item.step}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {index < NEXT_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-gray-800" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 border border-accent/20 rounded-2xl bg-accent/5 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            Check our{" "}
            <Link href="/how-it-works" className="text-accent hover:underline">
              How It Works
            </Link>{" "}
            page for the complete process, or{" "}
            <Link href="/contact" className="text-accent hover:underline">
              contact us
            </Link>{" "}
            with specific questions.
          </p>
          <div className="text-sm text-gray-600">
            Average response time: 4 hours during business hours
          </div>
        </motion.div>
      </div>
    </section>
  );
}

