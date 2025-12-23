"use client";

import { motion } from "framer-motion";
import { Briefcase, TrendingUp } from "lucide-react";

export function CaseStudiesHero() {
  return (
    <section className="bg-black min-h-[60vh] flex items-center relative overflow-hidden border-b border-gray-900">
      {/* 3D floating cards background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              delay: i * 2,
            }}
            className="absolute w-32 h-32 border border-accent/10 rounded-xl backdrop-blur-sm"
            style={{
              background: "linear-gradient(135deg, rgba(229, 82, 123, 0.05), transparent)",
              top: `${10 + i * 15}%`,
              left: `${5 + i * 15}%`,
              transform: `perspective(1000px) rotateY(${i * 30}deg)`,
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
            initial={{ scale: 0, rotateY: 0 }}
            animate={{ scale: 1, rotateY: 360 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 mb-6 border border-accent/20"
          >
            <Briefcase className="w-10 h-10 text-accent" />
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Case Studies
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Real implementations, measurable results, and lessons learned. 
            Client portfolios, demos, and industry case studies.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 rounded-full bg-background-elevated border border-gray-900">
              <div className="text-2xl font-bold text-accent mb-1">47</div>
              <div className="text-xs text-gray-600">Client projects</div>
            </div>
            <div className="px-6 py-3 rounded-full bg-background-elevated border border-gray-900">
              <div className="text-2xl font-bold text-accent mb-1">£2.4M</div>
              <div className="text-xs text-gray-600">Combined value saved</div>
            </div>
            <div className="px-6 py-3 rounded-full bg-background-elevated border border-gray-900">
              <div className="text-2xl font-bold text-accent mb-1">94%</div>
              <div className="text-xs text-gray-600">Client satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

