"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const CAPABILITIES = [
  {
    title: "Discovery Phase",
    items: [
      "Conducts pre-call research on your business",
      "Joins discovery calls and takes detailed notes",
      "Creates assessment documents and recommendations",
      "Helps determine optimal tier (Pilot, System, Agent)",
    ],
  },
  {
    title: "Design Phase",
    items: [
      "Designs custom workflows based on your processes",
      "Creates technical specifications and diagrams",
      "Explains design decisions in plain language",
      "Incorporates your feedback iteratively",
    ],
  },
  {
    title: "Build Phase",
    items: [
      "Provides weekly progress updates",
      "Shares previews of work in progress",
      "Answers technical questions instantly",
      "Keeps you informed without overwhelming you",
    ],
  },
  {
    title: "Deploy Phase",
    items: [
      "Leads team training sessions",
      "Creates user documentation and guides",
      "Provides hands-on deployment support",
      "Available for questions during go-live",
    ],
  },
  {
    title: "Optimize Phase",
    items: [
      "Monitors system performance proactively",
      "Identifies optimization opportunities",
      "Suggests scaling strategies",
      "Available 24/7 for questions or issues",
    ],
  },
  {
    title: "General Support",
    items: [
      "Explains pricing and what's included",
      "Provides case study examples",
      "Compares tiers and helps with decisions",
      "Connects you with human team when needed",
    ],
  },
];

export function JoeCapabilities() {
  return (
    <section className="bg-black py-32 border-b border-gray-900">
      <div className="container max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Joe Can Do
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Joe is with you through every phase of your automation journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-gray-900 rounded-xl bg-gradient-to-br from-background-elevated to-black"
            >
              <h3 className="text-lg font-bold text-white mb-4">
                {capability.title}
              </h3>
              <ul className="space-y-3">
                {capability.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 border border-accent/20 rounded-2xl bg-accent/5 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Not Just a Chatbot
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Joe is a genuine AI implementation partner powered by Claude Sonnet 4. 
            He understands context, remembers your previous conversations, and provides 
            genuinely intelligent guidance. Think of Joe as your always-on automation consultant.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

