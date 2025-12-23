"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageSquare, Clock, TrendingUp } from "lucide-react";

export function AboutJoe() {
  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4 border border-accent/20">
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Joe
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your AI implementation partner, not just a chatbot
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Joe description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-8 border border-accent rounded-2xl bg-accent/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Joe</h3>
                  <p className="text-gray-400">AI Implementation Partner</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Joe is our AI co-pilot that guides you through every phase of your automation journey. 
                Built on Claude and fine-tuned on thousands of implementation conversations, Joe 
                understands your business context, answers technical questions, and provides 
                strategic guidance.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Joe isn&apos;t a generic chatbot. Joe has deep knowledge of our implementation 
                methodology, your specific project details, and industry best practices. Think of 
                Joe as having an AI implementation expert available 24/7.
              </p>
            </div>
          </motion.div>

          {/* Right: Joe capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                icon: MessageSquare,
                title: "Always Available",
                description: "24/7 access to Joe. Ask questions, get updates, or request clarifications anytime.",
              },
              {
                icon: Clock,
                title: "Project-Aware",
                description: "Joe knows your project details, workflows, and progress. Context-aware responses, not generic answers.",
              },
              {
                icon: TrendingUp,
                title: "Strategic Guidance",
                description: "Beyond technical support. Joe provides optimization suggestions and scaling recommendations.",
              },
            ].map((capability, i) => {
              const Icon = capability.icon;
              
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 border border-gray-900 rounded-xl bg-background-elevated"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {capability.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Joe availability note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 border border-gray-900 rounded-xl bg-background-elevated"
        >
          <p className="text-gray-300 leading-relaxed">
            <span className="text-white font-semibold">Joe is included with every project.</span>{" "}
            No additional cost, no time limits. Joe stays with you throughout your automation journey 
            and beyond, helping you optimize, scale, and get the most value from your investment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

