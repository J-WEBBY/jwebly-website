"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";

const STATS = [
  {
    icon: TrendingUp,
    value: "412%",
    label: "Average ROI",
    description: "Median first-year return on investment",
  },
  {
    icon: Clock,
    value: "14.3 weeks",
    label: "Avg Payback",
    description: "Time to positive ROI",
  },
  {
    icon: DollarSign,
    value: "£84K",
    label: "Annual Value",
    description: "Average value saved per client",
  },
  {
    icon: Users,
    value: "94%",
    label: "Satisfaction",
    description: "Would recommend to peers",
  },
];

export function ReviewsStats() {
  return (
    <section className="bg-black py-20 border-b border-gray-900">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Aggregated Results Across 47 Clients
          </h2>
          <p className="text-gray-400">
            Real data from real implementations. No cherry-picking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 border border-gray-900 rounded-xl bg-gradient-to-br from-background-elevated to-black hover:border-accent/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 border border-accent/20">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-600 leading-relaxed">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

