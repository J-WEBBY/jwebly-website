"use client";

import { motion } from "framer-motion";
import { Package, Zap, Rocket, CheckCircle } from "lucide-react";

const DELIVERY_TIERS = [
  {
    tier: "Implementation Pilot",
    duration: "4-6 weeks",
    icon: Package,
    investment: "£1,500-2,000",
    deliverables: [
      "2-3 isolated workflows",
      "Quick wins in 4-6 weeks",
      "Proof of concept with measurable ROI",
      "Foundation for scaling",
    ],
    process: [
      { week: "1", task: "Discovery & design" },
      { week: "2-4", task: "Build & test workflows" },
      { week: "5", task: "Deploy & train team" },
      { week: "6", task: "Monitor & optimize" },
    ],
    color: "#3B82F6",
  },
  {
    tier: "Intelligent System",
    duration: "6-8 weeks",
    icon: Zap,
    investment: "£3,000-5,000",
    deliverables: [
      "5-7 interconnected workflows",
      "Full end-to-end automation",
      "Data flows between workflows",
      "Intelligent coordination logic",
    ],
    process: [
      { week: "1-2", task: "Discovery & system design" },
      { week: "3-6", task: "Build & integrate workflows" },
      { week: "7", task: "Deploy & comprehensive training" },
      { week: "8", task: "Performance monitoring" },
    ],
    color: "#E5527B",
  },
  {
    tier: "Autonomous Agent",
    duration: "8-12 weeks",
    icon: Rocket,
    investment: "£7,000-12,000",
    deliverables: [
      "Autonomous decision-making AI",
      "Learns from every decision",
      "70-85% autonomy at maturity",
      "Continuous improvement loops",
    ],
    process: [
      { week: "1-3", task: "Training on historical data" },
      { week: "4-6", task: "Supervised learning phase" },
      { week: "7-9", task: "Semi-autonomous operation" },
      { week: "10-12", task: "Full autonomous deployment" },
    ],
    color: "#10B981",
  },
];

export function DeliveryPhases() {
  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Delivery by Tier
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Each tier has a tailored delivery process optimized for complexity and results
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {DELIVERY_TIERS.map((tier, index) => {
            const Icon = tier.icon;
            
            return (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="border border-gray-900 rounded-2xl p-8 bg-gradient-to-br from-background-elevated to-black hover:border-accent/30 transition-all"
              >
                {/* Header */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${tier.color}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: tier.color }} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {tier.tier}
                </h3>

                <div className="flex items-center gap-4 mb-6 text-sm">
                  <div className="text-gray-600">{tier.duration}</div>
                  <div className="text-accent font-semibold">{tier.investment}</div>
                </div>

                {/* Deliverables */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-white mb-3">
                    What You Get:
                  </div>
                  <ul className="space-y-2">
                    {tier.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: tier.color }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process timeline */}
                <div className="pt-6 border-t border-gray-900">
                  <div className="text-sm font-semibold text-white mb-4">
                    Delivery Timeline:
                  </div>
                  <div className="space-y-3">
                    {tier.process.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                          style={{ 
                            backgroundColor: `${tier.color}20`,
                            color: tier.color,
                          }}
                        >
                          {step.week}
                        </div>
                        <div className="flex-1 pt-1">
                          <div className="text-sm text-gray-400">{step.task}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

