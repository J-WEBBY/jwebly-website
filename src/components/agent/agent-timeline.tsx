"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AGENT_TIMELINE } from "@/lib/constants/agent-data";

export function AgentTimeline() {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);

  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your 8-12 Week Journey
          </h2>
          <p className="text-xl text-gray-400">
            From training to full autonomy
          </p>
        </motion.div>

        {/* Timeline phases */}
        <div className="space-y-4">
          {AGENT_TIMELINE.map((phase, index) => (
            <motion.div
              key={phase.weeks}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setSelectedPhase(selectedPhase === phase.weeks ? null : phase.weeks)}
                className="w-full text-left p-6 border border-gray-900 rounded-xl hover:border-gray-800 transition-colors bg-background-elevated"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="text-sm font-semibold text-accent">
                        Week {phase.weeks}
                      </div>
                      <div className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent">
                        {phase.autonomyLevel}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-gray-400">
                      {phase.description}
                    </p>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-600 shrink-0 transition-transform mt-1 ${
                      selectedPhase === phase.weeks ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {selectedPhase === phase.weeks && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-gray-900">
                        <div className="grid md:grid-cols-2 gap-8 mb-6">
                          <div>
                            <div className="text-sm font-semibold text-white mb-3">
                              What we do:
                            </div>
                            <ul className="space-y-2">
                              {phase.tasks.map((task, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-400">
                                  <span className="text-accent shrink-0 mt-1">→</span>
                                  <span className="text-sm">{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div className="space-y-4">
                              <div className="p-4 bg-black rounded-xl border border-gray-900">
                                <div className="text-sm text-gray-600 mb-1">Your time investment</div>
                                <div className="text-xl font-bold text-white">{phase.yourTime}</div>
                              </div>
                              <div className="p-4 bg-black rounded-xl border border-gray-900">
                                <div className="text-sm text-gray-600 mb-1">Our time investment</div>
                                <div className="text-xl font-bold text-accent">{phase.ourTime}</div>
                              </div>
                              <div className="p-4 bg-black rounded-xl border border-accent">
                                <div className="text-sm text-gray-600 mb-1">Autonomy level</div>
                                <div className="text-xl font-bold text-accent">{phase.autonomyLevel}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 border border-gray-900 rounded-2xl bg-background-elevated text-center"
        >
          <p className="text-gray-400 leading-relaxed">
            <span className="text-white font-semibold">Important:</span> Your agent continues 
            learning after deployment. Week 12+ is full operation with ongoing optimization. 
            The more decisions it makes, the smarter it becomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

