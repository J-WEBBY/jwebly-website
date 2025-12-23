"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, TrendingUp, Zap, Brain } from "lucide-react";
import Link from "next/link";

const RESEARCH_TOPICS = [
  {
    icon: FileText,
    title: "How AI Transforms Recruitment",
    description: "Deep dive into AI applications in modern recruitment",
  },
  {
    icon: TrendingUp,
    title: "ROI of Automation in SMEs",
    description: "Measuring real business impact of AI automation",
  },
  {
    icon: Zap,
    title: "Future of Operations",
    description: "Where recruitment operations are headed",
  },
  {
    icon: Brain,
    title: "AI Agent Evolution",
    description: "Understanding the next generation of AI systems",
  },
];

export function ResearchSection() {
  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-xs font-semibold text-gray-600 mb-4 tracking-widest">
            INSIGHTS
          </div>
          <h2 className="text-5xl md:text-6xl font-normal text-white">
            AI in Business Research
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {RESEARCH_TOPICS.map((topic, index) => {
            const Icon = topic.icon;
            
            return (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href="/research"
                  className="block h-full p-6 border border-gray-900 rounded-xl hover:border-accent hover:bg-background-elevated transition-all group"
                >
                  <div className="w-12 h-12 mb-4 rounded-lg bg-gray-900 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-lg font-normal text-white mb-2 group-hover:text-accent transition-colors">
                    {topic.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-4">
                    {topic.description}
                  </p>

                  <div className="flex items-center gap-2 text-gray-600 group-hover:text-accent transition-colors">
                    <span className="text-sm font-semibold">Read more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

