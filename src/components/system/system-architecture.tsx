"use client";

import { motion } from "framer-motion";
import { Database, Brain, Network, BarChart3 } from "lucide-react";

const ARCHITECTURE_LAYERS = [
  {
    icon: Database,
    title: "Unified Data Layer",
    description: "All workflows share context—no siloed data. Every automation has access to the complete operational picture.",
    specs: [
      "Cross-workflow memory retention",
      "Real-time state synchronization",
      "Automated conflict resolution",
    ],
  },
  {
    icon: Network,
    title: "Orchestration Layer",
    description: "Intelligent routing between workflows. The system decides which workflow should handle each task based on priority, dependencies, and current load.",
    specs: [
      "Priority-based queue management",
      "Automated dependency handling",
      "Parallel execution optimization",
    ],
  },
  {
    icon: Brain,
    title: "Intelligence Layer",
    description: "Learns from cross-workflow patterns. The more workflows you connect, the smarter the system becomes at coordinating them.",
    specs: [
      "Multi-workflow decision-making",
      "Predictive task routing",
      "Continuous optimization loops",
    ],
  },
  {
    icon: BarChart3,
    title: "Monitoring Layer",
    description: "Real-time performance tracking across the entire system. See which workflows are bottlenecks, where handoffs fail, and what's working best.",
    specs: [
      "Sub-second latency tracking",
      "Workflow dependency mapping",
      "Automated performance alerts",
    ],
  },
];

export function SystemArchitecture() {
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
              System Architecture
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built for Scale,
              <br />
              Not Silos
            </h2>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Your system runs on enterprise-grade infrastructure designed 
              for intelligent coordination, not just task execution.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <div className="text-white font-semibold mb-1">
                    Foundation Models
                  </div>
                  <div className="text-gray-600 text-sm">
                    Claude Sonnet 4, GPT-4 Turbo with multi-modal reasoning
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
                    Custom n8n workflows with intelligent routing
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
                    Vector databases with semantic search
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
                    Real-time accuracy, latency, and throughput metrics
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Architecture Cards */}
          <div className="space-y-6">
            {ARCHITECTURE_LAYERS.map((layer, index) => {
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

            {/* Performance Metric Callout */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 p-6 border border-gray-900 rounded-xl bg-background-elevated"
            >
              <div className="text-center">
                <div className="text-sm font-semibold text-white mb-3">
                  Cross-Workflow Latency
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="text-xs text-gray-600 font-mono">
                    Workflow A
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-900 via-accent to-gray-900" />
                  <div className="text-2xl font-bold text-accent">
                    &lt;3s
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-900 via-accent to-gray-900" />
                  <div className="text-xs text-gray-600 font-mono">
                    Workflow B
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  Average handoff time between connected workflows
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

