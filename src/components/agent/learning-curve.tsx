"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Calendar } from "lucide-react";

export function LearningCurve() {
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);

  const milestones = [
    {
      week: 1,
      autonomy: 60,
      phase: "Learning Phase",
      description: "Agent observes your decisions and learns patterns. Makes suggestions for approval.",
      decisions: "~200 decisions analyzed",
      accuracy: "85% (supervised)",
    },
    {
      week: 4,
      autonomy: 68,
      phase: "Pattern Recognition",
      description: "Agent identifies common decision patterns and edge cases. Confidence increasing.",
      decisions: "~800 decisions analyzed",
      accuracy: "89% (supervised)",
    },
    {
      week: 12,
      autonomy: 78,
      phase: "High Confidence",
      description: "Agent handles most routine decisions autonomously. Escalates edge cases.",
      decisions: "~2,400 decisions analyzed",
      accuracy: "92% (semi-autonomous)",
    },
    {
      week: 26,
      autonomy: 84,
      phase: "Mature Agent",
      description: "Agent has seen diverse scenarios. Makes nuanced decisions with high confidence.",
      decisions: "~5,200 decisions analyzed",
      accuracy: "95% (autonomous)",
    },
    {
      week: 52,
      autonomy: 89,
      phase: "Expert-Level",
      description: "Agent performance rivals senior team members. Handles complex edge cases autonomously.",
      decisions: "~10,400 decisions analyzed",
      accuracy: "97% (autonomous)",
    },
  ];

  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4">
            <TrendingUp className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Agent's First Year
          </h2>
          <p className="text-xl text-gray-400">
            Watch autonomy and accuracy improve over 52 weeks
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-gray-900 rounded-2xl p-8 md:p-12 bg-background-elevated mb-12"
        >
          {/* Progress bar */}
          <div className="relative mb-16">
            {/* Background line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gray-900" />
            
            {/* Progress line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.3 }}
              className="absolute top-8 left-0 h-1 bg-accent"
            />

            {/* Milestone nodes */}
            <div className="relative flex justify-between">
              {milestones.map((milestone, index) => (
                <motion.button
                  key={milestone.week}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  onClick={() => setSelectedWeek(selectedWeek === milestone.week ? null : milestone.week)}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`
                      w-16 h-16 rounded-full border-4 flex items-center justify-center mb-4
                      transition-colors
                      ${selectedWeek === milestone.week 
                        ? "border-accent bg-accent shadow-lg shadow-accent/50" 
                        : "border-gray-900 bg-black group-hover:border-accent"
                      }
                    `}
                  >
                    <div className="text-center">
                      <div className={`
                        text-xs font-bold
                        ${selectedWeek === milestone.week ? "text-white" : "text-gray-600 group-hover:text-accent"}
                      `}>
                        WK
                      </div>
                      <div className={`
                        text-sm font-bold
                        ${selectedWeek === milestone.week ? "text-white" : "text-gray-400 group-hover:text-white"}
                      `}>
                        {milestone.week}
                      </div>
                    </div>
                  </motion.div>
                  
                  <div className={`
                    text-sm font-semibold text-center transition-colors
                    ${selectedWeek === milestone.week ? "text-accent" : "text-gray-600 group-hover:text-white"}
                  `}>
                    {milestone.autonomy}%
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    {milestone.phase}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Selected milestone details */}
          <AnimatePresence mode="wait">
            {selectedWeek ? (
              <motion.div
                key={selectedWeek}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="border border-accent rounded-xl p-8 bg-accent/5"
              >
                {milestones.filter((m) => m.week === selectedWeek).map((milestone) => (
                  <div key={milestone.week}>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Week {milestone.week}: {milestone.phase}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-black rounded-xl border border-gray-900">
                        <div className="text-sm text-gray-600 mb-1">Autonomy Level</div>
                        <div className="text-2xl font-bold text-accent">
                          {milestone.autonomy}%
                        </div>
                      </div>
                      <div className="p-4 bg-black rounded-xl border border-gray-900">
                        <div className="text-sm text-gray-600 mb-1">Decisions Analyzed</div>
                        <div className="text-2xl font-bold text-white">
                          {milestone.decisions}
                        </div>
                      </div>
                      <div className="p-4 bg-black rounded-xl border border-gray-900">
                        <div className="text-sm text-gray-600 mb-1">Accuracy Rate</div>
                        <div className="text-2xl font-bold text-accent">
                          {milestone.accuracy}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center text-gray-600 text-sm py-8">
                Click any milestone to see details
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 border border-accent rounded-2xl bg-accent/5 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Continuous Improvement
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Your agent doesn't plateau. Every decision—successful or not—becomes training data. 
            By week 52, your agent has analyzed 10,000+ decisions and achieved expert-level 
            judgment across thousands of scenarios. <span className="text-accent font-semibold">This is the 
            compounding effect of AI learning.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

