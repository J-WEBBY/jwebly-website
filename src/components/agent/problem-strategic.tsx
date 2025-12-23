"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Brain } from "lucide-react";

export function ProblemStrategic() {
  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-5xl mx-auto px-6">
        
        {/* Main message */}
        <div className="text-center space-y-8 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            You've built a system.
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-400"
          >
            But it can't think.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto"
          >
            Your automation handles the expected. But when something unexpected 
            happens, it escalates to you.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            What if your automation could <span className="text-white font-semibold">reason</span> through 
            edge cases? Make <span className="text-white font-semibold">judgment calls</span>? 
            Learn from <span className="text-white font-semibold">outcomes</span>?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="relative inline-block"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              That's not a system. That's an agent.
            </h3>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-0 left-0 h-1 bg-accent"
            />
          </motion.div>
        </div>

        {/* Visual comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mt-16"
        >
          {/* System limitation */}
          <div className="border border-gray-900 rounded-2xl p-8 bg-background-elevated">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-white">System Stops Here</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-black rounded-xl border border-gray-900">
                <div className="text-sm text-gray-400 mb-2">Scenario:</div>
                <div className="text-white mb-3">
                  Campaign A: 2.1x ROAS, Campaign B: 0.8x ROAS, £5K budget available
                </div>
                
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-red-400 mb-1">
                      System Response:
                    </div>
                    <div className="text-sm text-gray-400">
                      "Campaign B underperforming. Requires manual budget reallocation decision."
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-600">
                Result: You manually analyze performance data and reallocate budgets. Every underperforming 
                campaign needs human review, even when the answer is obvious from the data.
              </div>
            </div>
          </div>

          {/* Agent capability */}
          <div className="border border-accent rounded-2xl p-8 bg-accent/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white">Agent Reasons Through It</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-black rounded-xl border border-accent">
                <div className="text-sm text-gray-400 mb-2">Same Scenario:</div>
                <div className="text-white mb-3">
                  Campaign A: 2.1x ROAS, Campaign B: 0.8x ROAS, £5K budget available
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    <div className="text-sm text-gray-400">
                      Analyzing: Campaign A outperforming by 163% (2.1x vs 0.8x)
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    <div className="text-sm text-gray-400">
                      Checking: Historical data shows A scales well up to £10K/week
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    <div className="text-sm text-gray-400">
                      Evaluating: B underperforming for 3 consecutive weeks (structural issue likely)
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-accent mb-1">
                        Agent Decision (91% confidence):
                      </div>
                      <div className="text-sm text-gray-300">
                        "Shift £3K from B to A immediately. Pause B temporarily to gather performance floor 
                        data. A has headroom to scale and will maximize ROI while B is analyzed."
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-400">
                Result: Budget reallocated in 2 seconds. Agent handles routine optimization autonomously, 
                only escalating when patterns are unclear or strategic decisions needed.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

