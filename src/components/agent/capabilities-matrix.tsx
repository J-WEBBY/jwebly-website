"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Info } from "lucide-react";
import { CAPABILITIES_COMPARISON } from "@/lib/constants/agent-data";

export function CapabilitiesMatrix() {
  const [hoveredCapability, setHoveredCapability] = useState<string | null>(null);

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
            What Can Your Agent Do?
          </h2>
          <p className="text-xl text-gray-400">
            Compare capabilities across all three tiers
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-gray-900 rounded-2xl overflow-hidden bg-background-elevated"
        >
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 p-6 border-b border-gray-900 bg-black">
            <div className="text-sm font-semibold text-gray-600">
              Capability
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-400">Pilot</div>
              <div className="text-xs text-gray-600">£1.5K-2K</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-400">System</div>
              <div className="text-xs text-gray-600">£3K-5K</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-accent">Agent</div>
              <div className="text-xs text-accent">£7K-12K</div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="divide-y divide-gray-900">
            {CAPABILITIES_COMPARISON.map((item, index) => (
              <motion.div
                key={item.capability}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onMouseEnter={() => setHoveredCapability(item.capability)}
                onMouseLeave={() => setHoveredCapability(null)}
                className={`
                  grid grid-cols-4 gap-4 p-6 transition-colors cursor-pointer
                  ${hoveredCapability === item.capability ? "bg-gray-900/50" : ""}
                `}
              >
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">{item.capability}</span>
                  <Info className="w-4 h-4 text-gray-600" />
                </div>
                
                <div className="flex justify-center">
                  {item.pilot ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <X className="w-5 h-5 text-gray-700" />
                  )}
                </div>
                
                <div className="flex justify-center">
                  {item.system ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <X className="w-5 h-5 text-gray-700" />
                  )}
                </div>
                
                <div className="flex justify-center">
                  {item.agent ? (
                    <Check className="w-5 h-5 text-accent" />
                  ) : (
                    <X className="w-5 h-5 text-gray-700" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hover description */}
          <AnimatePresence mode="wait">
            {hoveredCapability && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-gray-900 p-6 bg-black"
              >
                <p className="text-sm text-gray-400 leading-relaxed">
                  {CAPABILITIES_COMPARISON.find((c) => c.capability === hoveredCapability)?.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-8 border border-accent rounded-2xl bg-accent/5"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            The Agent Advantage
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Pilot executes. System coordinates. <span className="text-accent font-semibold">Agent thinks</span>. 
            Only agents can make autonomous decisions, learn from outcomes, and improve over time. 
            It's the difference between automation and intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

