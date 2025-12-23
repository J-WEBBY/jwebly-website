"use client";

import { motion } from "framer-motion";
import { Brain, Database, Zap, BarChart3 } from "lucide-react";

const TECH_LAYERS = [
  {
    icon: Database,
    title: "Proprietary Data Layer",
    description: "Your historical workflows, decision patterns, and business logic form the training foundation.",
    specs: [
      "Vectorized process memory",
      "Secure data isolation",
      "Real-time context retrieval",
    ],
  },
  {
    icon: Brain,
    title: "Intelligence Layer",
    description: "Claude 4 and GPT-4 foundation models fine-tuned on your specific operational patterns.",
    specs: [
      "Multi-modal reasoning",
      "Chain-of-thought decision-making",
      "Adaptive learning loops",
    ],
  },
  {
    icon: Zap,
    title: "Execution Layer",
    description: "Production-grade orchestration connecting your systems with intelligent routing and error handling.",
    specs: [
      "Zero-downtime deployments",
      "Async workflow processing",
      "Automated rollback on anomaly",
    ],
  },
  {
    icon: BarChart3,
    title: "Monitoring Layer",
    description: "Real-time performance tracking with accuracy metrics, time savings, and continuous optimization.",
    specs: [
      "Sub-second latency tracking",
      "Precision/recall dashboards",
      "Automated A/B testing",
    ],
  },
];

export function TechStackSection() {
  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left: Title & Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:sticky md:top-32"
          >
            <div className="text-xs font-semibold text-accent mb-4 tracking-widest uppercase">
              The Engine
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built for Production,
              <br />
              Not Prototypes
            </h2>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Your pilot runs on enterprise-grade infrastructure with 
              intelligent decision-making, not just task automation.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <div className="text-white font-semibold mb-1">
                    Foundation Models
                  </div>
                  <div className="text-gray-600 text-sm">
                    Claude Sonnet 4, GPT-4 Turbo
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <div className="text-white font-semibold mb-1">
                    Orchestration
                  </div>
                  <div className="text-gray-600 text-sm">
                    Custom n8n/Make workflows
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <div className="text-white font-semibold mb-1">
                    Data Infrastructure
                  </div>
                  <div className="text-gray-600 text-sm">
                    Vector databases, secure APIs
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <div className="text-white font-semibold mb-1">
                    Performance Tracking
                  </div>
                  <div className="text-gray-600 text-sm">
                    Real-time accuracy & latency metrics
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Architecture Layers */}
          <div className="space-y-6">
            {TECH_LAYERS.map((layer, index) => {
              const Icon = layer.icon;
              
              return (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <motion.div
                    whileHover={{ 
                      borderColor: "#E5527B",
                      backgroundColor: "#0A0A0A",
                    }}
                    transition={{ duration: 0.3 }}
                    className="border border-gray-900 rounded-xl p-6 bg-black hover:shadow-lg hover:shadow-accent/5 transition-all group"
                  >
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center group-hover:bg-accent/10 transition-colors shrink-0">
                        <Icon className="w-6 h-6 text-gray-600 group-hover:text-accent transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">
                          {layer.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {layer.description}
                        </p>
                      </div>
                    </div>

                    {/* Technical Specs */}
                    <div className="pl-16 space-y-2">
                      {layer.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-accent/50" />
                          <span className="text-xs text-gray-600 font-mono">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Data Flow Visualization */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 p-6 border border-gray-900 rounded-xl bg-background-elevated"
            >
              <div className="text-center">
                <div className="text-sm font-semibold text-white mb-3">
                  End-to-End Latency
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="text-xs text-gray-600 font-mono">
                    Input
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-900 via-accent to-gray-900" />
                  <div className="text-2xl font-bold text-accent">
                    &lt;2s
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-900 via-accent to-gray-900" />
                  <div className="text-xs text-gray-600 font-mono">
                    Decision
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  Average response time from trigger to intelligent action
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
