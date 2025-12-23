"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="bg-black min-h-[60vh] flex items-center justify-center">
      <div className="container max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs font-semibold text-gray-600 mb-4 tracking-widest uppercase">
            Services
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Choose Your Solution
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            AI systems designed for every stage of growth—from testing 
            the waters to building your AI workforce.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


