"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

const RESEARCH_ARTICLES = [
  {
    id: 1,
    title: "The Economics of AI Automation: 2025 ROI Analysis",
    excerpt: "Comprehensive analysis of 247 SMEs implementing AI automation. Average payback period: 14.3 weeks. Median ROI: 412% in year one.",
    category: "ROI Analysis",
    readTime: "12 min read",
    date: "Dec 15, 2024",
    featured: true,
    metrics: {
      companies: "247 SMEs",
      payback: "14.3 weeks",
      roi: "412%",
    },
  },
  {
    id: 2,
    title: "Autonomous Agents vs Traditional RPA: Performance Comparison",
    excerpt: "Side-by-side testing of autonomous agents and rule-based RPA across 8 decision domains. Agents handle 73% more edge cases autonomously.",
    category: "Autonomous Agents",
    readTime: "18 min read",
    date: "Dec 10, 2024",
    featured: true,
    metrics: {
      domains: "8 tested",
      improvement: "73%",
      accuracy: "94.2%",
    },
  },
  {
    id: 3,
    title: "System Integration Patterns for Connected Workflows",
    excerpt: "Architecture patterns for integrating 5-7 workflows into unified systems. Analysis of API strategies, data flow, and error handling.",
    category: "System Design",
    readTime: "15 min read",
    date: "Dec 5, 2024",
    featured: false,
    metrics: null,
  },
  {
    id: 4,
    title: "Decision Confidence Thresholds: Finding the Optimal Balance",
    excerpt: "Statistical analysis of 12,000+ agent decisions. How confidence thresholds (80-95%) impact autonomy rates and accuracy.",
    category: "Autonomous Agents",
    readTime: "10 min read",
    date: "Nov 28, 2024",
    featured: false,
    metrics: null,
  },
  {
    id: 5,
    title: "Recruitment Agency Automation: 6-Month Longitudinal Study",
    excerpt: "Real-world data from 15 recruitment agencies. Time saved, placement rates, and candidate satisfaction metrics.",
    category: "Industry Trends",
    readTime: "20 min read",
    date: "Nov 20, 2024",
    featured: false,
    metrics: null,
  },
  {
    id: 6,
    title: "The Learning Curve: How AI Agents Improve Over Time",
    excerpt: "Tracking agent performance across 52 weeks. Accuracy improvements, pattern recognition, and decision confidence evolution.",
    category: "Autonomous Agents",
    readTime: "14 min read",
    date: "Nov 12, 2024",
    featured: false,
    metrics: null,
  },
];

export function ResearchGrid() {
  return (
    <section className="bg-black py-20">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Featured articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Research</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {RESEARCH_ARTICLES.filter(a => a.featured).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={`/resources/research/${article.id}`}>
                  <div className="border border-gray-900 rounded-2xl p-8 bg-gradient-to-br from-background-elevated to-black hover:border-accent/50 transition-all h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-600">Featured</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                      {article.excerpt}
                    </p>

                    {article.metrics && (
                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-black rounded-xl border border-gray-900">
                        {Object.entries(article.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-accent mb-1">{value}</div>
                            <div className="text-xs text-gray-600 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        {/* All articles */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">All Research</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {RESEARCH_ARTICLES.filter(a => !a.featured).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={`/resources/research/${article.id}`}>
                  <div className="border border-gray-900 rounded-xl p-6 bg-black hover:border-accent/50 transition-all h-full flex flex-col">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-background-elevated text-gray-400 border border-gray-900 mb-4 inline-block">
                      {article.category}
                    </span>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-600 pt-4 border-t border-gray-900">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

