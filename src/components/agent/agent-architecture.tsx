"use client";

import { motion } from "framer-motion";
import { Database, Brain, Zap, BarChart3, Lock, RefreshCw } from "lucide-react";

const ARCHITECTURE_LAYERS = [
  {
    icon: Database,
    title: "Training Data Layer",
    description: "Your historical decisions become the agent's knowledge base",
    specs: [
      "10,000+ decisions vectorized and indexed",
      "Pattern recognition across decision types",
      "Context understanding and entity extraction",
    ],
  },
  {
    icon: Brain,
    title: "Intelligence Layer",
    description: "Foundation models fine-tuned on your decision-making framework",
    specs: [
      "Claude Sonnet 4 + GPT-4 Turbo multi-agent reasoning",
      "Chain-of-thought decision processing",
      "Continuous learning loops from outcomes",
    ],
  },
  {
    icon: Zap,
    title: "Decision Engine",
    description: "Confidence scoring, risk assessment, and autonomous execution",
    specs: [
      "Probabilistic decision-making with confidence scores",
      "Configurable confidence thresholds (80-95%)",
      "Automated execution with rollback capability",
    ],
  },
  {
    icon: BarChart3,
    title: "Monitoring & Learning",
    description: "Outcome tracking drives model updates and optimization",
    specs: [
      "Real-time accuracy and confidence tracking",
      "Automated model retraining on new data",
      "Performance dashboards with drill-down analytics",
    ],
  },
];

export function AgentArchitecture() {
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
            Built on Foundation Models
          </h2>
          <p className="text-xl text-gray-400">
            Enterprise-grade AI infrastructure for autonomous decision-making
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          
          {/* Left: Architecture layers */}
          <div className="space-y-6">
            {ARCHITECTURE_LAYERS.map((layer, index) => {
              const Icon = layer.icon;
              
              return (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
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

                    <div className="pl-16 space-y-2">
                      {layer.specs.map((spec, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-accent/50 mt-2 shrink-0" />
                          <span className="text-xs text-gray-600 font-mono leading-relaxed">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Additional features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="md:sticky md:top-32 space-y-6">
              
              <div className="border border-gray-900 rounded-2xl p-8 bg-background-elevated">
                <h3 className="text-xl font-bold text-white mb-6">
                  Security & Compliance
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <div className="text-white font-semibold mb-1">
                        Data Isolation
                      </div>
                      <div className="text-sm text-gray-400">
                        Your training data is siloed. No data sharing between clients.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <div className="text-white font-semibold mb-1">
                        Audit Trails
                      </div>
                      <div className="text-sm text-gray-400">
                        Every decision logged with reasoning and confidence score.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <div className="text-white font-semibold mb-1">
                        GDPR Compliant
                      </div>
                      <div className="text-sm text-gray-400">
                        Full data deletion and portability on request.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-900 rounded-2xl p-8 bg-background-elevated">
                <h3 className="text-xl font-bold text-white mb-6">
                  Continuous Learning
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <RefreshCw className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <div className="text-white font-semibold mb-1">
                        Automated Retraining
                      </div>
                      <div className="text-sm text-gray-400">
                        Model updates weekly based on new decisions and outcomes.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <RefreshCw className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <div className="text-white font-semibold mb-1">
                        Outcome Tracking
                      </div>
                      <div className="text-sm text-gray-400">
                        Every decision tracked to outcome. Successes strengthen model.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <RefreshCw className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <div className="text-white font-semibold mb-1">
                        Human Feedback Loop
                      </div>
                      <div className="text-sm text-gray-400">
                        Override any decision. Agent learns from corrections immediately.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance metric */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="p-6 border border-gray-900 rounded-xl bg-background-elevated"
              >
                <div className="text-center">
                  <div className="text-sm font-semibold text-white mb-3">
                    Average Decision Latency
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="text-xs text-gray-600 font-mono">
                      Context Loaded
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-900 via-accent to-gray-900" />
                    <div className="text-3xl font-bold text-accent">
                      &lt;2s
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-900 via-accent to-gray-900" />
                    <div className="text-xs text-gray-600 font-mono">
                      Decision Made
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    Includes context retrieval, inference, and confidence scoring
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Foundation models */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-accent rounded-2xl p-8 bg-accent/5 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Powered by the Best AI Models
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
            Your agent runs on Claude Sonnet 4 and GPT-4 Turbo, the most advanced reasoning 
            models available. We fine-tune these models on your specific decision-making 
            framework, creating an AI that thinks like your best team member.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="px-4 py-2 bg-black rounded-full border border-gray-900">
              Claude Sonnet 4 (reasoning)
            </div>
            <div className="px-4 py-2 bg-black rounded-full border border-gray-900">
              GPT-4 Turbo (inference)
            </div>
            <div className="px-4 py-2 bg-black rounded-full border border-gray-900">
              Pinecone (vector database)
            </div>
            <div className="px-4 py-2 bg-black rounded-full border border-gray-900">
              Custom fine-tuning
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

