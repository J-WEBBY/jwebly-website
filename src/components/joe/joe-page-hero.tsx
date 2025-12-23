"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageSquare, Brain, Zap } from "lucide-react";

export function JoePageHero() {
  return (
    <section className="bg-black min-h-[70vh] flex items-center relative overflow-hidden border-b border-gray-900">
      {/* Animated atom structure */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="relative w-96 h-96">
          {/* Nucleus */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-accent"
          />

          {/* Electron orbits */}
          {[0, 60, 120].map((rotation, i) => (
            <motion.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: i * 2 }}
              className="absolute inset-0"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <svg className="w-full h-full" viewBox="0 0 384 384">
                <ellipse
                  cx="192"
                  cy="192"
                  rx="180"
                  ry="60"
                  fill="none"
                  stroke="#E5527B"
                  strokeWidth="2"
                />
              </svg>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: i * 2 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-accent"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container max-w-5xl mx-auto px-6 py-20 relative z-10">
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
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-accent to-pink-600 mb-8 relative"
          >
            <Sparkles className="w-12 h-12 text-white" />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-accent rounded-full blur-2xl -z-10"
            />
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Meet Joe
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your AI implementation partner. Available 24/7 to guide you from 
            discovery to deployment and beyond.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: MessageSquare, title: "Always Available", desc: "24/7 access" },
              { icon: Brain, title: "Genuinely Intelligent", desc: "Powered by Claude AI" },
              { icon: Zap, title: "Implementation Expert", desc: "Guides entire journey" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-6 border border-gray-900 rounded-xl bg-background-elevated"
                >
                  <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-lg font-bold text-white mb-1">{item.title}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

