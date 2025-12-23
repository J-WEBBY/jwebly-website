"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Can I start with a Pilot and upgrade later?",
    answer: "Yes! The pilot fee is fully credited toward the full service if you upgrade within 60 days. This allows you to test our approach with minimal risk before committing to a larger implementation.",
  },
  {
    question: "What's the difference between System and Agent?",
    answer: "The Intelligent Automation System handles 5-7 interconnected workflows with defined logic. A Custom AI Agent is a bespoke entity that learns your business deeply and can reason through novel situations autonomously. Think System for process automation, Agent for decision intelligence.",
  },
  {
    question: "Do I need technical knowledge to work with Jwebly?",
    answer: "No. We handle all technical implementation. You provide business context and workflow knowledge, we build and deploy the AI systems. Our team manages integrations, training, and ongoing optimization.",
  },
  {
    question: "How long until I see ROI?",
    answer: "Most clients see measurable ROI within 8-12 weeks of deployment. Pilots typically show time savings within the first 30 days. We provide detailed ROI tracking and reports throughout the engagement.",
  },
  {
    question: "What if it doesn't work for my specific use case?",
    answer: "During the discovery call, we assess fit before taking on any project. If we don't believe we can deliver value, we'll tell you upfront. For pilots, we include a 30-day monitoring period to validate results before discussing expansion.",
  },
];

export function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-3xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Common Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 border border-gray-900 rounded-xl hover:border-gray-800 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-600 shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

