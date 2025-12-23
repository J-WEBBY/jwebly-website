"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPARISON_DATA } from "@/lib/constants/pilot-data";

export function ComparisonSection() {
  const [activeView, setActiveView] = useState<"without" | "with">("with");

  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-5xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Before & After
          </h2>
          <p className="text-xl text-gray-400">
            See the difference a pilot makes
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 p-2 bg-background-elevated border border-gray-900 rounded-full">
            <button
              onClick={() => setActiveView("without")}
              className={`
                px-6 py-3 rounded-full font-semibold transition-all
                ${activeView === "without" 
                  ? "bg-white text-black" 
                  : "text-gray-600 hover:text-gray-400"
                }
              `}
            >
              Without Pilot
            </button>
            <button
              onClick={() => setActiveView("with")}
              className={`
                px-6 py-3 rounded-full font-semibold transition-all
                ${activeView === "with" 
                  ? "bg-accent text-white" 
                  : "text-gray-600 hover:text-gray-400"
                }
              `}
            >
              With Pilot
            </button>
          </div>
        </div>

        {/* Comparison Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="border border-gray-900 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              {activeView === "without" ? COMPARISON_DATA.without.title : COMPARISON_DATA.with.title}
            </h3>

            <div className="space-y-6">
              {(activeView === "without" ? COMPARISON_DATA.without.points : COMPARISON_DATA.with.points).map((point, index) => (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-background-elevated transition-colors"
                >
                  <span className="text-3xl shrink-0">{point.icon}</span>
                  <div>
                    <div className="text-xl font-semibold text-white mb-1">
                      {point.label}
                    </div>
                    <div className="text-gray-400">
                      {point.detail}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}


