"use client";

import { motion } from "framer-motion";
import { FileText, Users, Target, TrendingUp } from "lucide-react";

const PREPARATION_ITEMS = [
  {
    icon: FileText,
    title: "Current Processes",
    description: "Think about workflows that take the most time or have the most errors. We'll map these during the call.",
  },
  {
    icon: Users,
    title: "Team Context",
    description: "Team size, roles, and who spends time on repetitive decisions. Helps us understand capacity constraints.",
  },
  {
    icon: Target,
    title: "Goals & Priorities",
    description: "What would success look like? Time saved? Error reduction? Scaling capacity? Be as specific as possible.",
  },
  {
    icon: TrendingUp,
    title: "Decision Patterns",
    description: "What decisions does your team make daily? Which follow patterns? Which require judgment? This guides our design.",
  },
];

export function CallPreparation() {
  return (
    <section className="bg-black py-20 border-b border-gray-900">
      <div className="container max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How to Prepare
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            No formal prep required, but thinking about these topics beforehand makes 
            the call more productive
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {PREPARATION_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-gray-900 rounded-xl bg-gradient-to-br from-background-elevated to-black"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 border border-accent/20">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 border border-accent/20 rounded-xl bg-accent/5 text-center"
        >
          <p className="text-gray-300 leading-relaxed">
            <span className="text-white font-semibold">Don't worry if you're not sure about everything.</span> The 
            discovery call is exploratory. We'll ask questions to help you clarify goals and identify 
            opportunities you might not have considered.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

