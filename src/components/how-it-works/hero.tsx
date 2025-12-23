"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CircleDot } from "lucide-react";

export function HowItWorksHero() {
  return (
    <section className="bg-black min-h-screen flex items-center relative overflow-hidden">
      {/* Animated pathway background */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E5527B" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#E5527B" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 50 50 Q 200 100, 350 50 T 650 50 Q 800 100, 950 50"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </svg>

        {/* Flowing particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 200, 300, 400, 500, 600, 700],
              y: [100, 150, 100, 150, 100, 150, 100, 150],
              opacity: [0, 1, 1, 1, 1, 1, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1,
              ease: "linear",
            }}
            className="absolute w-2 h-2 rounded-full bg-accent blur-sm"
            style={{ left: "-20px", top: `${20 + i * 10}%` }}
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
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 mb-6 border border-accent/20 relative"
          >
            <CircleDot className="w-10 h-10 text-accent" />
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-2xl border-2 border-accent"
            />
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Your Journey to
            <br />
            <span className="text-accent">Autonomous AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            From discovery call to delivery, retention, and ongoing optimization. 
            Every step guided by Joe, your AI implementation partner.
          </p>

          {/* Journey stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="px-6 py-4 rounded-xl bg-background-elevated border border-gray-900"
            >
              <div className="text-3xl font-bold text-accent mb-1">5 Phases</div>
              <div className="text-sm text-gray-600">Complete process</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-6 py-4 rounded-xl bg-background-elevated border border-gray-900"
            >
              <div className="text-3xl font-bold text-accent mb-1">4-12 weeks</div>
              <div className="text-sm text-gray-600">Time to deployment</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="px-6 py-4 rounded-xl bg-background-elevated border border-gray-900"
            >
              <div className="text-3xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-gray-600">Transparent process</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-2 text-gray-600"
          >
            <Sparkles className="w-5 h-5 text-accent" />
            <span>Joe guides you through every step</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-sm">Scroll to explore</span>
        <ArrowRight className="w-5 h-5 rotate-90" />
      </motion.div>
    </section>
  );
}

