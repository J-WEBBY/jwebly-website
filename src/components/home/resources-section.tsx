"use client";

import { motion } from "framer-motion";
import { FileText, Download, ArrowRight } from "lucide-react";
import Link from "next/link";

const RESOURCES = [
  {
    type: "Case Study",
    title: "How Agency X Saved 15 Hours Per Week",
    description: "A complete breakdown of implementation and results",
    link: "/case-studies/agency-x",
    icon: FileText,
  },
  {
    type: "Case Study",
    title: "Scaling CV Screening with AI",
    description: "From 50 to 500 CVs weekly without new hires",
    link: "/case-studies/cv-screening",
    icon: FileText,
  },
  {
    type: "Resource",
    title: "Guide to AI Automation for Agencies",
    description: "Everything you need to know before getting started",
    link: "/resources/ai-guide",
    icon: Download,
  },
];

export function ResourcesSection() {
  return (
    <section className="bg-black py-32">
      <div className="container max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-normal text-white">
            Case Studies & Resources
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {RESOURCES.map((resource, index) => {
            const Icon = resource.icon;
            
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={resource.link}
                  className="block h-full p-8 border border-gray-900 rounded-xl hover:border-accent hover:bg-background-elevated transition-all group"
                >
                  <div className="text-xs font-semibold text-gray-600 mb-3 tracking-widest">
                    {resource.type.toUpperCase()}
                  </div>

                  <Icon className="w-12 h-12 text-gray-800 mb-4 group-hover:text-accent transition-colors" />

                  <h3 className="text-xl font-normal text-white mb-3">
                    {resource.title}
                  </h3>

                  <p className="text-gray-400 mb-6">
                    {resource.description}
                  </p>

                  <div className="flex items-center gap-2 text-accent">
                    <span className="text-sm font-semibold">
                      {resource.type === "Resource" ? "Download" : "Read more"}
                    </span>
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

