"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const CATEGORIES = [
  "All Topics",
  "AI Automation",
  "System Design",
  "Autonomous Agents",
  "ROI Analysis",
  "Implementation",
  "Industry Trends",
];

export function ResearchFilters() {
  const [selectedCategory, setSelectedCategory] = useState("All Topics");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="bg-black py-12 border-b border-gray-900 sticky top-0 z-40 backdrop-blur-xl bg-black/80">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research articles..."
              className="w-full pl-12 pr-4 py-4 bg-background-elevated border border-gray-900 rounded-xl text-white placeholder-gray-600 focus:border-accent focus:outline-none"
            />
          </div>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 rounded-full font-medium text-sm transition-all
                ${selectedCategory === category
                  ? "bg-accent text-white"
                  : "bg-background-elevated text-gray-400 hover:text-white border border-gray-900 hover:border-gray-800"
                }
              `}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

