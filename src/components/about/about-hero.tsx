"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function AboutHero() {
  return (
    <section className="bg-black min-h-screen flex items-center relative overflow-hidden">
      {/* Animated constellation background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Connecting lines between some stars */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="#E5527B"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: i * 0.2 }}
            />
          ))}
        </svg>
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
            <Sparkles className="w-10 h-10 text-accent" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-2xl border border-accent opacity-20"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            AI Automation for
            <br />
            <span className="text-accent">Every Business</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We&apos;re on a mission to democratize autonomous AI. Making enterprise-grade 
            automation accessible, affordable, and genuinely intelligent for SMEs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="px-6 py-4 rounded-xl bg-background-elevated border border-gray-900">
              <div className="text-3xl font-bold text-accent mb-1">2024</div>
              <div className="text-sm text-gray-600">Founded</div>
            </div>
            <div className="px-6 py-4 rounded-xl bg-background-elevated border border-gray-900">
              <div className="text-3xl font-bold text-accent mb-1">47+</div>
              <div className="text-sm text-gray-600">Clients served</div>
            </div>
            <div className="px-6 py-4 rounded-xl bg-background-elevated border border-gray-900">
              <div className="text-3xl font-bold text-accent mb-1">£2.4M</div>
              <div className="text-sm text-gray-600">Value delivered</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

