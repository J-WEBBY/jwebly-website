"use client";

import { motion } from "framer-motion";
import { Heart, Eye, Rocket, Shield } from "lucide-react";

const VALUES = [
  {
    icon: Heart,
    title: "Client-First",
    description: "Your success is our success. We measure our value by the ROI you achieve, not the hours we bill.",
    color: "#E5527B",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "No hidden costs, no surprises. Fixed pricing, clear timelines, and honest communication throughout.",
    color: "#3B82F6",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We stay at the cutting edge of AI capabilities, always exploring how new models can solve real business problems.",
    color: "#10B981",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Enterprise-grade infrastructure with 99.9% uptime. Your automation runs when you need it, every time.",
    color: "#8B5CF6",
  },
];

export function AboutValues() {
  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {VALUES.map((value, index) => {
            const Icon = value.icon;
            
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-gray-900 rounded-2xl bg-gradient-to-br from-background-elevated to-black hover:border-accent/30 transition-all"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: value.color }} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {value.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

