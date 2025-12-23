"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, ChevronRight, TrendingUp } from "lucide-react";
import { INDUSTRY_AGENTS } from "@/lib/constants/agent-data";

type IndustryId = "recruitment" | "accounting" | "legal" | "marketing" | "estate";

export function IndustryExamples() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryId>("recruitment");
  const [expandedDecision, setExpandedDecision] = useState<number | null>(null);

  const agent = INDUSTRY_AGENTS[selectedIndustry];

  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Agent Examples by Industry
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            See how agents think through real decisions in your industry
          </p>

          {/* Industry Selector */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: "recruitment", label: "Recruitment" },
              { id: "accounting", label: "Accounting" },
              { id: "legal", label: "Legal" },
              { id: "marketing", label: "Marketing" },
              { id: "estate", label: "Real Estate" },
            ].map((industry) => (
              <button
                key={industry.id}
                onClick={() => {
                  setSelectedIndustry(industry.id as IndustryId);
                  setExpandedDecision(null);
                }}
                className={`
                  px-6 py-3 rounded-full font-semibold transition-all
                  ${selectedIndustry === industry.id
                    ? "bg-accent text-white"
                    : "bg-background-elevated text-gray-400 hover:text-white border border-gray-900 hover:border-gray-800"
                  }
                `}
              >
                {industry.label}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Agent Overview */}
            <div className="mb-12 p-8 border border-gray-900 rounded-2xl bg-background-elevated">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {agent.name}
                  </h3>
                  <p className="text-gray-400">
                    {agent.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-black rounded-xl border border-gray-900">
                  <div className="text-sm text-gray-600 mb-1">Weekly Decisions</div>
                  <div className="text-2xl font-bold text-white">
                    {agent.autonomyMetrics.weeklyDecisions}
                  </div>
                </div>
                <div className="text-center p-4 bg-black rounded-xl border border-gray-900">
                  <div className="text-sm text-gray-600 mb-1">Autonomy</div>
                  <div className="text-2xl font-bold text-accent">
                    {agent.autonomyMetrics.autonomousPercentage}%
                  </div>
                </div>
                <div className="text-center p-4 bg-black rounded-xl border border-gray-900">
                  <div className="text-sm text-gray-600 mb-1">Time Saved</div>
                  <div className="text-2xl font-bold text-white">
                    {agent.autonomyMetrics.timeSaved}
                  </div>
                </div>
                <div className="text-center p-4 bg-black rounded-xl border border-gray-900">
                  <div className="text-sm text-gray-600 mb-1">Accuracy</div>
                  <div className="text-2xl font-bold text-accent">
                    {agent.autonomyMetrics.accuracyRate}
                  </div>
                </div>
              </div>
            </div>

            {/* Decision Examples */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">
                Real Decision Examples
              </h3>

              {agent.decisions.map((decision, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-900 rounded-2xl overflow-hidden bg-background-elevated"
                >
                  {/* Decision Header */}
                  <button
                    onClick={() => setExpandedDecision(expandedDecision === index ? null : index)}
                    className="w-full p-6 text-left hover:bg-gray-900/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-sm font-semibold text-accent">
                            {decision.type}
                          </div>
                          <div className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                            {decision.confidence}% confidence
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">
                          {decision.scenario}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="text-sm text-white font-semibold">
                            Decision: {decision.decision}
                          </div>
                        </div>
                      </div>
                      <ChevronRight 
                        className={`w-5 h-5 text-gray-600 shrink-0 transition-transform ${
                          expandedDecision === index ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Agent Thinking Process */}
                  <AnimatePresence>
                    {expandedDecision === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-gray-900"
                      >
                        <div className="p-6 bg-black">
                          <div className="mb-4">
                            <div className="text-sm font-semibold text-white mb-3">
                              Agent's Thinking Process:
                            </div>
                            <div className="space-y-2">
                              {decision.agentThinking.map((thought, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-3"
                                >
                                  <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ 
                                      duration: 1.5, 
                                      repeat: Infinity,
                                      delay: i * 0.2 
                                    }}
                                    className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"
                                  />
                                  <p className="text-sm text-gray-400 leading-relaxed">
                                    {thought}
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 border-t border-gray-900">
                            <div className="text-sm font-semibold text-white mb-2">
                              Reasoning:
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed">
                              {decision.reasoning}
                            </p>
                          </div>

                          <div className="mt-4 p-4 bg-accent/5 rounded-xl border border-accent">
                            <div className="flex items-start gap-2">
                              <TrendingUp className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                              <div className="text-sm text-gray-400">
                                This decision was made autonomously in ~2 seconds. A human would 
                                take 5-10 minutes to gather the same context and make the same decision.
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 border border-gray-900 rounded-xl bg-background-elevated text-center"
            >
              <p className="text-gray-400 leading-relaxed">
                <span className="text-white font-semibold">Important:</span> These are example 
                decisions based on common {selectedIndustry} patterns. Your agent will be trained 
                on YOUR historical decisions, learning YOUR judgment framework and business logic.
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

