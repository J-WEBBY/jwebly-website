"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INDUSTRIES } from "@/lib/constants/pilot-data";

interface IndustrySelectorProps {
  selectedIndustry: string;
  onIndustryChange: (industryId: string) => void;
}

export function IndustrySelector({ selectedIndustry, onIndustryChange }: IndustrySelectorProps) {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
          See How It Works in Your Industry
        </h3>
        <p className="text-lg text-gray-400">
          Select your industry to see relevant workflow examples
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3">
        {INDUSTRIES.map((industry) => (
          <motion.button
            key={industry.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onIndustryChange(industry.id)}
            className={`
              px-6 py-3 rounded-full font-semibold text-sm transition-all
              ${selectedIndustry === industry.id
                ? "bg-accent text-white border-2 border-accent"
                : "bg-background-elevated text-gray-400 border-2 border-gray-900 hover:border-gray-800"
              }
            `}
          >
            {industry.name}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {INDUSTRIES.find(i => i.id === selectedIndustry) && (
          <motion.div
            key={selectedIndustry}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-6 text-center"
          >
            <p className="text-gray-400">
              {INDUSTRIES.find(i => i.id === selectedIndustry)?.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

