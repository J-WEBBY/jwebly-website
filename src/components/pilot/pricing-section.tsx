"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle } from "lucide-react";
import { PRICING_FAQS } from "@/lib/constants/pilot-data";

export function PricingSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-4xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400">
            No hidden fees. No surprises. Just clear, upfront pricing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-accent rounded-2xl p-8 md:p-12 bg-background-elevated mb-8"
        >
          <div className="text-center mb-8">
            <div className="text-5xl md:text-6xl font-bold text-white mb-4">
              £1,500 - £2,000
            </div>
            <p className="text-xl text-gray-400">
              Implementation Pilot
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span>2-3 automated workflows</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span>2-3 system integrations</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span>30-day monitoring period</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span>Detailed ROI report</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span>Expansion roadmap</span>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-900">
            <div className="mb-4 p-4 bg-accent/10 border border-accent/30 rounded-lg">
              <div className="text-sm font-semibold text-accent mb-1">
                💡 Upgrade Path
              </div>
              <p className="text-sm text-gray-300">
                Upgrade to Intelligent Automation System or Custom AI Agent within 60 days 
                and your pilot fee (£1,500-2,000) is <span className="text-white font-semibold">fully credited</span>.
              </p>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">
                Q1 2026 Portfolio Pricing
              </div>
              <p className="text-gray-400">
                First 4-5 clients: £1,500-2,000<br />
                <span className="text-accent">After Q1: £2,500-3,500</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Expandable FAQs */}
        <div className="space-y-4">
          {PRICING_FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full text-left p-6 border border-gray-900 rounded-xl hover:border-gray-800 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-600 shrink-0 transition-transform ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {openFAQ === index && (
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

