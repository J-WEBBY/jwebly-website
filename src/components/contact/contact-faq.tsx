"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "What happens during a discovery call?",
    answer: "We spend 1 hour understanding your business, mapping current processes, identifying automation opportunities, and defining success metrics. Joe (our AI) joins the call and creates a detailed assessment document afterward. No pressure, no sales pitch - just a genuine exploration of how automation could help your business.",
  },
  {
    question: "How quickly can we get started?",
    answer: "After the discovery call, we typically deliver your custom proposal within 48 hours. Once approved, we can begin design work within 1 week. Total timeline from first contact to deployment: 4-12 weeks depending on complexity (Pilot: 4-6 weeks, System: 6-8 weeks, Agent: 8-12 weeks).",
  },
  {
    question: "Do you offer custom pricing or payment plans?",
    answer: "Yes to both. Our listed prices are starting points. Complex requirements, additional integrations, or specific customizations may adjust pricing. We offer flexible payment terms: 50% upfront, 50% on delivery for projects under £5K. For larger projects (£5K+), we can structure milestone-based payments. Ask about payment plans during your discovery call.",
  },
  {
    question: "What if I'm not sure which tier I need?",
    answer: "That's exactly what the discovery call is for. Most clients aren't sure initially. We'll analyze your processes, decision patterns, and goals to recommend the optimal tier. Many start with a Pilot to prove ROI, then scale to System or Agent. No commitment required during the discovery call.",
  },
  {
    question: "Can I see examples of your work before committing?",
    answer: "Absolutely. Check our Case Studies page for real client projects with detailed results. We also have interactive demos showing exactly how our systems work. During the discovery call, we can show you examples specific to your industry. Happy to provide references from similar clients.",
  },
  {
    question: "What happens after deployment?",
    answer: "You get ongoing support, monitoring, and optimization. We provide monthly performance reports, priority support (4-hour response time), free updates, and proactive optimization suggestions. Think of it as having an AI operations team on retainer. See our 'How It Works' page for details on the ongoing phase.",
  },
];

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-4xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Before You Reach Out
          </h2>
          <p className="text-lg text-gray-400">
            Quick answers to common questions
          </p>
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
                className="w-full text-left p-6 border border-gray-900 rounded-xl hover:border-gray-800 transition-colors bg-background-elevated"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-600 shrink-0 transition-transform mt-1 ${
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

