"use client";

import { motion } from "framer-motion";
import { TrendingUp, Brain, Zap } from "lucide-react";

export function ResearchHero() {
  return (
    <section className="bg-black min-h-[60vh] flex items-center relative overflow-hidden border-b border-gray-900">
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(229, 82, 123, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(229, 82, 123, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
        </div>
        
        {/* Floating orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
            className="absolute w-64 h-64 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, rgba(229, 82, 123, 0.15), transparent)`,
              top: `${20 + i * 30}%`,
              left: `${10 + i * 40}%`,
            }}
          />
        ))}
      </div>

      <div className="container max-w-6xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 mb-6 border border-accent/20"
          >
            <Brain className="w-10 h-10 text-accent" />
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Research & Insights
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Deep dives into AI automation, system design patterns, and autonomous decision-making. 
            Data-driven insights for technical decision-makers.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background-elevated border border-gray-900">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-gray-400">Weekly updates</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background-elevated border border-gray-900">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-gray-400">Technical depth</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background-elevated border border-gray-900">
              <Brain className="w-4 h-4 text-accent" />
              <span className="text-gray-400">Implementation focus</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

