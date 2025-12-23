"use client";

import { motion } from "framer-motion";
import { Download, FileText, Presentation, BookOpen, ArrowDown } from "lucide-react";

const DOWNLOADABLE_RESOURCES = [
  {
    title: "AI Automation ROI Calculator",
    description: "Interactive spreadsheet to calculate potential ROI for your business",
    type: "Spreadsheet",
    icon: FileText,
    size: "2.4 MB",
    format: "XLSX",
    downloadUrl: "#",
  },
  {
    title: "Implementation Guide: Pilot to System",
    description: "Step-by-step guide for scaling from pilot to full system deployment",
    type: "PDF Guide",
    icon: BookOpen,
    size: "5.1 MB",
    format: "PDF",
    downloadUrl: "#",
  },
  {
    title: "Case Study Portfolio 2024",
    description: "Complete collection of client case studies with detailed metrics",
    type: "Portfolio",
    icon: Presentation,
    size: "12.8 MB",
    format: "PDF",
    downloadUrl: "#",
  },
  {
    title: "Workflow Automation Checklist",
    description: "Comprehensive checklist for identifying automation opportunities",
    type: "Checklist",
    icon: FileText,
    size: "1.2 MB",
    format: "PDF",
    downloadUrl: "#",
  },
];

export function DownloadResources() {
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
            <Download className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Download Resources
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Free tools, guides, and templates to help you plan your automation journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {DOWNLOADABLE_RESOURCES.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.a
                key={resource.title}
                href={resource.downloadUrl}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 border border-gray-900 rounded-xl bg-gradient-to-br from-background-elevated to-black hover:border-accent/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                        {resource.title}
                      </h3>
                      <span className="px-2 py-1 rounded text-xs font-semibold bg-background-elevated text-gray-400 border border-gray-900">
                        {resource.format}
                      </span>
                    </div>

                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-600">
                        <span>{resource.type}</span>
                        <span>•</span>
                        <span>{resource.size}</span>
                      </div>
                      <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
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
            <span className="text-white font-semibold">More resources coming soon.</span>{" "}
            Subscribe to our newsletter to be notified when new downloads are available.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

