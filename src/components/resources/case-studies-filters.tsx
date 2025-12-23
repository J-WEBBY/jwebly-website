"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const FILTERS = [
  "All Projects",
  "Client Portfolio",
  "Demos & Simulations",
  "Industry Studies",
];

const INDUSTRIES = [
  "All Industries",
  "Recruitment",
  "Accounting",
  "Legal",
  "Marketing",
  "Real Estate",
];

export function CaseStudiesFilters() {
  const [selectedType, setSelectedType] = useState("All Projects");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");

  return (
    <section className="bg-black py-8 border-b border-gray-900 sticky top-0 z-40 backdrop-blur-xl bg-black/80">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="space-y-4">
          {/* Project type */}
          <div>
            <div className="text-xs text-gray-600 mb-2 uppercase tracking-wider">Type</div>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((filter, index) => (
                <motion.button
                  key={filter}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedType(filter)}
                  className={`
                    px-4 py-2 rounded-full font-medium text-sm transition-all
                    ${selectedType === filter
                      ? "bg-accent text-white"
                      : "bg-background-elevated text-gray-400 hover:text-white border border-gray-900"
                    }
                  `}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Industry */}
          <div>
            <div className="text-xs text-gray-600 mb-2 uppercase tracking-wider">Industry</div>
            <div className="flex flex-wrap gap-2">
              {INDUSTRIES.map((industry, index) => (
                <motion.button
                  key={industry}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`
                    px-4 py-2 rounded-full text-sm transition-all
                    ${selectedIndustry === industry
                      ? "bg-accent/10 text-accent border border-accent"
                      : "bg-background-elevated text-gray-400 hover:text-white border border-gray-900"
                    }
                  `}
                >
                  {industry}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

