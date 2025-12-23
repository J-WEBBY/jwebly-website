"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SYSTEM_TIMELINE } from "@/lib/constants/system-data";

export function SystemTimeline() {
  const [selectedWeek, setSelectedWeek] = useState<string | null>(null);

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
            Your 6-8 Week Journey
          </h2>
          <p className="text-xl text-gray-400">
            From discovery to deployed system
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-12">
          {/* Progress line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-900 hidden md:block" />
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.3 }}
            className="absolute top-8 left-0 h-0.5 bg-accent hidden md:block"
          />

          {/* Week nodes */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
            {SYSTEM_TIMELINE.map((phase, index) => (
              <motion.button
                key={phase.weeks}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.5 }}
                onClick={() => setSelectedWeek(selectedWeek === phase.weeks ? null : phase.weeks)}
                className="flex flex-col items-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`
                    w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4
                    transition-colors cursor-pointer
                    ${selectedWeek === phase.weeks 
                      ? "border-accent bg-accent text-white" 
                      : "border-gray-900 bg-black text-gray-600 group-hover:border-accent"
                    }
                  `}
                >
                  <span className="font-bold text-sm">{phase.weeks}</span>
                </motion.div>
                
                <div className={`
                  text-sm font-semibold text-center
                  ${selectedWeek === phase.weeks ? "text-accent" : "text-gray-600"}
                `}>
                  {phase.title}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Week details */}
        <AnimatePresence mode="wait">
          {selectedWeek ? (
            <motion.div
              key={selectedWeek}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="border border-accent rounded-2xl p-8 bg-background-elevated"
            >
              {SYSTEM_TIMELINE.filter((p) => p.weeks === selectedWeek).map((phase) => (
                <div key={phase.weeks}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Week {phase.weeks}: {phase.title}
                    </h3>
                    <p className="text-gray-400">{phase.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <div className="text-sm font-semibold text-gray-400 mb-3">
                        What we do:
                      </div>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                            <span className="text-accent shrink-0">→</span>
                            <span className="text-sm">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="space-y-4">
                        <div>
                          <div className="text-sm text-gray-600">Your time investment</div>
                          <div className="text-xl font-bold text-white">{phase.yourTime}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Our time investment</div>
                          <div className="text-xl font-bold text-accent">{phase.ourTime}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center text-gray-600 text-sm">
              Click any phase to see details
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

