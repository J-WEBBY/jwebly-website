"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function AgentPricing() {
  const [weeklyDecisions, setWeeklyDecisions] = useState<"100-300" | "300-600" | "600+">("300-600");
  const [complexity, setComplexity] = useState<"low" | "medium" | "high">("medium");
  const [historicalData, setHistoricalData] = useState<"<3mo" | "3-6mo" | "6mo+">("3-6mo");
  const [customFineTuning, setCustomFineTuning] = useState<boolean>(false);

  // Calculate price
  const calculatePrice = () => {
    let basePrice = 7000;

    // Decision volume
    if (weeklyDecisions === "600+") basePrice += 1500;
    else if (weeklyDecisions === "300-600") basePrice += 800;

    // Complexity
    if (complexity === "high") basePrice += 2000;
    else if (complexity === "medium") basePrice += 1000;

    // Historical data (less data = more manual training)
    if (historicalData === "<3mo") basePrice += 1500;
    else if (historicalData === "3-6mo") basePrice += 500;

    // Custom fine-tuning
    if (customFineTuning) basePrice += 1200;

    return Math.min(basePrice, 12000); // Cap at £12K
  };

  const estimatedPrice = calculatePrice();

  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-5xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Investment Calculator
          </h2>
          <p className="text-xl text-gray-400">
            Customize parameters to see your agent cost
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-gray-900 rounded-2xl p-8 md:p-12 bg-background-elevated"
        >
          {/* Inputs */}
          <div className="space-y-8 mb-12">
            
            {/* Weekly decisions */}
            <div>
              <label className="block text-sm font-semibold text-white mb-4">
                Weekly decisions to automate
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "100-300", label: "100-300", subtitle: "Small volume" },
                  { value: "300-600", label: "300-600", subtitle: "Medium volume" },
                  { value: "600+", label: "600+", subtitle: "High volume" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setWeeklyDecisions(option.value as any)}
                    className={`
                      p-4 rounded-xl border-2 transition-all text-center
                      ${weeklyDecisions === option.value
                        ? "border-accent bg-accent/10"
                        : "border-gray-900 hover:border-gray-800"
                      }
                    `}
                  >
                    <div className="text-lg font-bold text-white mb-1">{option.label}</div>
                    <div className="text-xs text-gray-600">{option.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Decision complexity */}
            <div>
              <label className="block text-sm font-semibold text-white mb-4">
                Decision complexity
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "low", label: "Low", subtitle: "Clear patterns" },
                  { value: "medium", label: "Medium", subtitle: "Some judgment" },
                  { value: "high", label: "High", subtitle: "Complex logic" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setComplexity(option.value as any)}
                    className={`
                      p-4 rounded-xl border-2 transition-all text-center
                      ${complexity === option.value
                        ? "border-accent bg-accent/10"
                        : "border-gray-900 hover:border-gray-800"
                      }
                    `}
                  >
                    <div className="text-lg font-bold text-white mb-1 capitalize">{option.label}</div>
                    <div className="text-xs text-gray-600">{option.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Historical data */}
            <div>
              <label className="block text-sm font-semibold text-white mb-4">
                Historical decision data available
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "<3mo", label: "<3 months", subtitle: "Minimum data" },
                  { value: "3-6mo", label: "3-6 months", subtitle: "Good data" },
                  { value: "6mo+", label: "6+ months", subtitle: "Ideal data" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setHistoricalData(option.value as any)}
                    className={`
                      p-4 rounded-xl border-2 transition-all text-center
                      ${historicalData === option.value
                        ? "border-accent bg-accent/10"
                        : "border-gray-900 hover:border-gray-800"
                      }
                    `}
                  >
                    <div className="text-lg font-bold text-white mb-1">{option.label}</div>
                    <div className="text-xs text-gray-600">{option.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom fine-tuning */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={customFineTuning}
                  onChange={(e) => setCustomFineTuning(e.target.checked)}
                  className="mt-1 w-5 h-5 rounded border-gray-800 text-accent focus:ring-accent focus:ring-offset-0"
                />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white mb-1">
                    Custom model fine-tuning
                  </div>
                  <div className="text-xs text-gray-400">
                    Train a custom model on your specific decision framework (+£1,200)
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Estimated price */}
          <motion.div
            key={estimatedPrice}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="border border-accent rounded-xl p-8 bg-accent/5"
          >
            <div className="text-center mb-6">
              <div className="text-sm font-semibold text-accent mb-2">
                ESTIMATED INVESTMENT
              </div>
              <div className="text-6xl font-bold text-accent mb-2">
                £{estimatedPrice.toLocaleString()}
              </div>
              <p className="text-sm text-gray-400">
                Final price confirmed after discovery audit
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-black rounded-xl border border-gray-900">
                <div className="text-sm text-gray-600 mb-1">Timeline</div>
                <div className="text-xl font-bold text-white">
                  {historicalData === "<3mo" ? "10-12" : historicalData === "3-6mo" ? "9-11" : "8-10"} weeks
                </div>
              </div>
              <div className="text-center p-4 bg-black rounded-xl border border-gray-900">
                <div className="text-sm text-gray-600 mb-1">Expected Autonomy</div>
                <div className="text-xl font-bold text-accent">
                  {complexity === "low" ? "80-85%" : complexity === "medium" ? "75-80%" : "70-75%"}
                </div>
              </div>
            </div>

            {/* What's included */}
            <div className="pt-6 border-t border-gray-900">
              <div className="text-sm font-semibold text-white mb-4">
                What's Included:
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Complete agent training on your data",
                  "Foundation model fine-tuning",
                  "Decision confidence scoring system",
                  "90-day supervised learning period",
                  "Performance monitoring dashboards",
                  "Automated model retraining",
                  "Full audit trail & explainability",
                  "Ongoing optimization support",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Context */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-600">
            Investment based on decision volume, complexity, and customization requirements. 
            All agents include lifetime model updates and priority support.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

