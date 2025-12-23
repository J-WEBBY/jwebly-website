"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { PRICING_TIERS } from "@/lib/constants/system-data";

export function PricingCalculator() {
  const [workflows, setWorkflows] = useState<5 | 6 | 7>(6);
  const [integrations, setIntegrations] = useState<"2-3" | "4-5" | "6+">("4-5");
  const [reporting, setReporting] = useState<"none" | "basic" | "advanced">("basic");

  const calculatePrice = () => {
    const tier = PRICING_TIERS.find((t) => t.workflows === workflows);
    if (!tier) return 4000;

    let price = tier.basePrice;

    // Integration complexity
    if (integrations === "6+") price += 500;

    // Reporting complexity
    if (reporting === "advanced") price += 300;
    else if (reporting === "basic") price += 150;

    return Math.min(price, tier.maxPrice);
  };

  const estimatedPrice = calculatePrice();

  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-5xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400">
            Customize your system and see the cost
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-gray-900 rounded-2xl p-8 md:p-12 bg-background-elevated"
        >
          {/* Calculator */}
          <div className="space-y-8 mb-8">
            {/* Workflows */}
            <div>
              <label className="block text-sm font-semibold text-white mb-4">
                How many workflows?
              </label>
              <div className="grid grid-cols-3 gap-3">
                {([5, 6, 7] as const).map((num) => (
                  <button
                    key={num}
                    onClick={() => setWorkflows(num)}
                    className={`
                      p-4 rounded-xl border-2 transition-all
                      ${workflows === num
                        ? "border-accent bg-accent/10"
                        : "border-gray-900 hover:border-gray-800"
                      }
                    `}
                  >
                    <div className="text-2xl font-bold text-white mb-1">{num}</div>
                    <div className="text-xs text-gray-600">workflows</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Integrations */}
            <div>
              <label className="block text-sm font-semibold text-white mb-4">
                How many system integrations?
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(["2-3", "4-5", "6+"] as const).map((range) => (
                  <button
                    key={range}
                    onClick={() => setIntegrations(range)}
                    className={`
                      p-4 rounded-xl border-2 transition-all
                      ${integrations === range
                        ? "border-accent bg-accent/10"
                        : "border-gray-900 hover:border-gray-800"
                      }
                    `}
                  >
                    <div className="text-lg font-bold text-white mb-1">{range}</div>
                    <div className="text-xs text-gray-600">systems</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Reporting */}
            <div>
              <label className="block text-sm font-semibold text-white mb-4">
                Custom reporting & dashboards?
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(["none", "basic", "advanced"] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setReporting(level)}
                    className={`
                      p-4 rounded-xl border-2 transition-all
                      ${reporting === level
                        ? "border-accent bg-accent/10"
                        : "border-gray-900 hover:border-gray-800"
                      }
                    `}
                  >
                    <div className="text-lg font-bold text-white mb-1 capitalize">{level}</div>
                    <div className="text-xs text-gray-600">
                      {level === "none" ? "Use existing" : level === "basic" ? "Standard" : "Custom"}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Estimated Price */}
          <motion.div
            key={estimatedPrice}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="border border-accent rounded-xl p-8 bg-accent/5 text-center"
          >
            <div className="text-sm font-semibold text-gray-400 mb-2">
              Estimated System Cost
            </div>
            <div className="text-6xl font-bold text-accent mb-4">
              £{estimatedPrice.toLocaleString()}
            </div>
            <p className="text-sm text-gray-400">
              Final price determined after discovery audit
            </p>
          </motion.div>

          {/* What's Included */}
          <div className="mt-8 pt-8 border-t border-gray-900">
            <div className="text-sm font-semibold text-white mb-4">
              What's Included:
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Complete system design & architecture",
                `${workflows} interconnected workflows`,
                "All system integrations & API setup",
                "60-day optimization period",
                "Team training & documentation",
                "Real-time performance monitoring",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pricing Context */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-600">
            Pricing based on workflow complexity, integration requirements, and customization needs. 
            All systems include lifetime updates and priority support.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

