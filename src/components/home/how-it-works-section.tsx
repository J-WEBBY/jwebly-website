"use client";

import { motion } from "framer-motion";
import { Brain, Database, TrendingUp } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Brain,
    title: "Custom Training",
    description: "Trained on your specific workflows and processes",
  },
  {
    icon: Database,
    title: "Your Data",
    description: "Uses your company's specific data and context",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    description: "Improves with every interaction and feedback",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-black py-32">
      <div className="container max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-6 max-w-3xl mx-auto leading-tight">
            We build AI systems that think like your team, not replace them.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRINCIPLES.map((principle, index) => {
            const Icon = principle.icon;
            
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-900 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-gray-600" />
                </div>
                
                <h3 className="text-2xl font-normal text-white mb-3">
                  {principle.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

