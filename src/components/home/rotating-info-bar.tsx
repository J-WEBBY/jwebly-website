"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INDUSTRY_INFO = {
  jwebly: {
    description: "Birmingham-based AI agency partnering with West Midlands and UK agencies",
    metrics: "Building Q1 2026 portfolio | 4-5 pilot spots available",
    results: "Trusted locally | Currently working with agencies across Birmingham & West Midlands",
  },
  recruitment: {
    description: "We partner with agencies handling 50-500 CVs weekly",
    metrics: "10+ hours saved per week | 80%+ accuracy rate | 4-6 weeks delivery",
    results: "Proven results: 12+ hours saved weekly | CV screening transformed efficiency",
  },
  accounting: {
    description: "We work with firms processing 100-1000 invoices monthly",
    metrics: "15+ hours saved per week | 90%+ accuracy | Automated expense categorization",
    results: "Proven results: Invoice processing time reduced by 75% | Real-time financial insights",
  },
  legal: {
    description: "We support practices managing 20-200 cases monthly",
    metrics: "8+ hours saved per week | Document review accuracy 85%+ | Faster case research",
    results: "Proven results: Client intake time reduced by 60% | Deadline tracking automated",
  },
  more: {
    description: "We also work with estate agents, private healthcare, and marketing agencies",
    metrics: "Custom solutions for each industry | 10+ hours saved weekly | 4-6 weeks delivery",
    results: "Proven results: Operational efficiency increased across all sectors",
  },
};

const INDUSTRIES = ["jwebly", "recruitment", "accounting", "legal", "more"];

export function RotatingInfoBar() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("jwebly");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const currentIndex = INDUSTRIES.indexOf(selectedIndustry);
    const nextIndex = (currentIndex + 1) % INDUSTRIES.length;
    
    // Reset progress
    setProgress(0);

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 2; // Increment by 2% every 100ms = 5 seconds total
      });
    }, 100);

    // Auto-advance after 5 seconds
    const advanceInterval = setTimeout(() => {
      setSelectedIndustry(INDUSTRIES[nextIndex]);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(advanceInterval);
    };
  }, [selectedIndustry]);

  const handleIndustryClick = (industry: string) => {
    setSelectedIndustry(industry);
    setProgress(0);
  };

  const currentInfo = INDUSTRY_INFO[selectedIndustry as keyof typeof INDUSTRY_INFO];

  return (
    <section className="bg-black py-20">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl text-white">
            <button
              onClick={() => handleIndustryClick("jwebly")}
              className="relative inline-block"
            >
              <span className="text-white">
                Jwebly
              </span>
              {selectedIndustry === "jwebly" && (
                <motion.span
                  className="absolute bottom-1 left-0 h-0.5 bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: progress / 100 }}
                  transition={{ duration: 0.1, ease: "linear" }}
                  style={{ width: "100%" }}
                />
              )}
            </button>
            {" works with "}
            <button
              onClick={() => handleIndustryClick("recruitment")}
              className="relative inline-block"
            >
              <span className="text-white">
                recruitment agencies
              </span>
              {selectedIndustry === "recruitment" && (
                <motion.span
                  className="absolute bottom-1 left-0 h-0.5 bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: progress / 100 }}
                  transition={{ duration: 0.1, ease: "linear" }}
                  style={{ width: "100%" }}
                />
              )}
            </button>
            {", "}
            <button
              onClick={() => handleIndustryClick("accounting")}
              className="relative inline-block"
            >
              <span className="text-white">
                accounting firms
              </span>
              {selectedIndustry === "accounting" && (
                <motion.span
                  className="absolute bottom-1 left-0 h-0.5 bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: progress / 100 }}
                  transition={{ duration: 0.1, ease: "linear" }}
                  style={{ width: "100%" }}
                />
              )}
            </button>
            {", "}
            <button
              onClick={() => handleIndustryClick("legal")}
              className="relative inline-block"
            >
              <span className="text-white">
                law firms
              </span>
              {selectedIndustry === "legal" && (
                <motion.span
                  className="absolute bottom-1 left-0 h-0.5 bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: progress / 100 }}
                  transition={{ duration: 0.1, ease: "linear" }}
                  style={{ width: "100%" }}
                />
              )}
            </button>
            {", and "}
            <button
              onClick={() => handleIndustryClick("more")}
              className="relative inline-block"
            >
              <span className="text-white">
                more
              </span>
              {selectedIndustry === "more" && (
                <motion.span
                  className="absolute bottom-1 left-0 h-0.5 bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: progress / 100 }}
                  transition={{ duration: 0.1, ease: "linear" }}
                  style={{ width: "100%" }}
                />
              )}
            </button>
            .
          </p>

          {/* Dynamic description with results */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndustry}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="mt-8"
            >
              <p className="text-base md:text-lg text-gray-400">
                {currentInfo.description}
              </p>
              <p className="text-sm text-gray-500 mt-3">
                {currentInfo.results}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

