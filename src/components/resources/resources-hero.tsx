"use client";

import { motion } from "framer-motion";
import { BookOpen, TrendingUp } from "lucide-react";

export function ResourcesHero() {
  return (
    <section className="bg-black min-h-[60vh] flex items-center relative overflow-hidden border-b border-gray-900">
      {/* Floating resource cards */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute w-24 h-32 border border-accent/20 rounded-lg"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 90}%`,
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
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 mb-6 border border-accent/20"
          >
            <BookOpen className="w-10 h-10 text-accent" />
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Resources
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Research insights, real case studies, and verified client reviews. 
            Everything you need to make an informed decision.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 rounded-full bg-background-elevated border border-gray-900">
              <div className="text-2xl font-bold text-accent mb-1">24+</div>
              <div className="text-xs text-gray-600">Research articles</div>
            </div>
            <div className="px-6 py-3 rounded-full bg-background-elevated border border-gray-900">
              <div className="text-2xl font-bold text-accent mb-1">47</div>
              <div className="text-xs text-gray-600">Case studies</div>
            </div>
            <div className="px-6 py-3 rounded-full bg-background-elevated border border-gray-900">
              <div className="text-2xl font-bold text-accent mb-1">4.9/5</div>
              <div className="text-xs text-gray-600">Client rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

