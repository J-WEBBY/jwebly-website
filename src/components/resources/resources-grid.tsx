"use client";

import { motion } from "framer-motion";
import { FileText, Briefcase, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const RESOURCE_SECTIONS = [
  {
    title: "Research & Insights",
    description: "Deep dives into AI automation, system design, ROI analysis, and implementation strategies. Data-driven insights for technical decision-makers.",
    icon: FileText,
    link: "/resources/research",
    stats: [
      { label: "Articles", value: "24+" },
      { label: "Updated", value: "Weekly" },
      { label: "Read time", value: "10-20 min" },
    ],
    color: "#3B82F6",
    highlights: [
      "Economics of AI Automation: 2025 ROI Analysis",
      "Autonomous Agents vs Traditional RPA",
      "System Integration Patterns",
    ],
  },
  {
    title: "Case Studies",
    description: "Real client projects, demos, simulations, and industry studies. See measurable results from actual implementations across multiple sectors.",
    icon: Briefcase,
    link: "/resources/case-studies",
    stats: [
      { label: "Projects", value: "47" },
      { label: "Industries", value: "5+" },
      { label: "Avg ROI", value: "412%" },
    ],
    color: "#E5527B",
    highlights: [
      "TalentFlow: 78% reduction in manual screening",
      "Precision Accounts: End-to-end automation",
      "Marketing Agency adoption analysis",
    ],
  },
  {
    title: "Client Reviews",
    description: "Verified testimonials with detailed results, satisfaction ratings, and honest feedback from companies that deployed our solutions.",
    icon: Star,
    link: "/resources/reviews",
    stats: [
      { label: "Reviews", value: "47" },
      { label: "Rating", value: "4.9/5" },
      { label: "Verified", value: "100%" },
    ],
    color: "#10B981",
    highlights: [
      "94% would recommend to peers",
      "Average 14.3 week payback period",
      "£84K average annual value saved",
    ],
  },
];

export function ResourcesGrid() {
  return (
    <section className="bg-black py-32">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="space-y-8">
          {RESOURCE_SECTIONS.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={section.link}>
                  <div className="border border-gray-900 rounded-2xl p-8 bg-gradient-to-br from-background-elevated to-black hover:border-accent/50 transition-all">
                    <div className="grid md:grid-cols-3 gap-8">
                      
                      {/* Left: Main content */}
                      <div className="md:col-span-2">
                        <div className="flex items-start gap-4 mb-6">
                          <div 
                            className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `${section.color}15` }}
                          >
                            <Icon className="w-7 h-7" style={{ color: section.color }} />
                          </div>
                          <div className="flex-1">
                            <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                              {section.title}
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                              {section.description}
                            </p>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="space-y-2 mb-6">
                          {section.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                              <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                          <span>Explore {section.title.toLowerCase()}</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Right: Stats */}
                      <div className="space-y-4">
                        {section.stats.map((stat, i) => (
                          <div key={i} className="p-4 bg-black rounded-xl border border-gray-900">
                            <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                            <div className="text-2xl font-bold" style={{ color: section.color }}>
                              {stat.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

