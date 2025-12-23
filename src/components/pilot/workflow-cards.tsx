"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, Calendar, MessageSquare, Receipt, FileCheck, 
  BarChart3, Search, Clock, TrendingUp, Home, Users, Sparkles 
} from "lucide-react";
import { INDUSTRY_WORKFLOWS, type IndustryId } from "@/lib/constants/pilot-data";
import { CustomWorkflowGenerator } from "./custom-workflow-generator";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText, Calendar, MessageSquare, Receipt, FileCheck, 
  BarChart3, Search, Clock, TrendingUp, Home, Users, Sparkles,
};

interface WorkflowCardsProps {
  // No props needed - component manages its own state
}

export function WorkflowCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryId | null>(null);
  const [customWorkflows, setCustomWorkflows] = useState<any[] | null>(null);
  const [showForm, setShowForm] = useState(true); // Show form by default

  // Determine which workflows to display
  const workflows = customWorkflows 
    ? customWorkflows.map((w, i) => ({
        id: `custom-${i}`,
        title: w.title,
        icon: "Sparkles",
        shortDescription: w.description.split('.')[0] + '.',
        fullDescription: w.description,
        howItWorks: w.howItWorks,
        timeSaved: w.timeSaved,
        accuracy: w.accuracy,
      }))
    : selectedIndustry 
    ? INDUSTRY_WORKFLOWS[selectedIndustry] || []
    : [];

  const handleIndustrySelect = (industry: IndustryId) => {
    setSelectedIndustry(industry);
    setCustomWorkflows(null);
    setShowForm(false); // Hide form when industry selected
  };

  const handleWorkflowsGenerated = (generatedWorkflows: any[]) => {
    setCustomWorkflows(generatedWorkflows);
    setSelectedIndustry(null);
    setShowForm(false); // Hide form after generation
  };

  const handleResetToForm = () => {
    setCustomWorkflows(null);
    setSelectedIndustry(null);
    setShowForm(true);
  };

  return (
    <section id="workflows" className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What You Get
          </h2>
          <p className="text-xl text-gray-400 mb-2">
            See what's possible for YOUR business
          </p>
          <p className="text-sm text-gray-600">
            These are examples—we'll audit YOUR specific operations during discovery
          </p>
        </motion.div>

        {/* AI Generator Form OR Industry Selector */}
        <AnimatePresence mode="wait">
          {showForm ? (
            <motion.div
              key="generator-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-12"
            >
              <CustomWorkflowGenerator
                onWorkflowsGenerated={handleWorkflowsGenerated}
              />

              {/* Quick browse option below form */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 text-center"
              >
                <p className="text-gray-600 text-sm mb-4">
                  Or browse examples from these industries:
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {(["recruitment", "accounting", "legal", "marketing", "estate"] as IndustryId[]).map((industry) => (
                    <button
                      key={industry}
                      onClick={() => handleIndustrySelect(industry)}
                      className="px-5 py-2 rounded-full text-sm font-medium bg-background-elevated text-gray-400 hover:text-white border border-gray-900 hover:border-gray-800 transition-all"
                    >
                      {industry === "recruitment" && "Recruitment"}
                      {industry === "accounting" && "Accounting"}
                      {industry === "legal" && "Legal"}
                      {industry === "marketing" && "Marketing"}
                      {industry === "estate" && "Real Estate"}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="back-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 text-center"
            >
              <button
                onClick={handleResetToForm}
                className="text-accent hover:text-accent/80 text-sm font-semibold inline-flex items-center gap-2 transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                Generate for Different Industry
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Workflow Cards - Only show when workflows exist */}
        <AnimatePresence mode="wait">
          {workflows.length > 0 && (
            <motion.div
              key="workflow-cards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {workflows.map((workflow: any, index: number) => {
                const Icon = ICONS[workflow.icon as keyof typeof ICONS] || Sparkles;
                const isHovered = hoveredCard === workflow.id;
                const isOtherHovered = hoveredCard && hoveredCard !== workflow.id;

                return (
                  <motion.div
                    key={workflow.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredCard(workflow.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="relative"
                  >
                    <motion.div
                      animate={{
                        borderColor: isHovered ? "#E5527B" : "#171717",
                        backgroundColor: isHovered ? "#0A0A0A" : "#000000",
                        opacity: isOtherHovered ? 0.5 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`
                        border rounded-2xl p-8 
                        ${isHovered ? "h-auto" : "h-[400px]"}
                        transition-all duration-300
                      `}
                    >
                      {/* Icon */}
                      <div className={`
                        w-16 h-16 rounded-xl mb-6 flex items-center justify-center
                        ${isHovered ? "bg-accent" : "bg-gray-900"}
                        transition-colors duration-300
                      `}>
                        <Icon className={`w-8 h-8 ${isHovered ? "text-white" : "text-gray-600"}`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {workflow.title}
                      </h3>

                      {/* Short description */}
                      <p className="text-gray-400 mb-6">
                        {workflow.shortDescription || workflow.description?.split('.')[0]}
                      </p>

                      {/* Expanded content */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: isHovered ? "auto" : 0,
                          opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {workflow.fullDescription || workflow.description}
                        </p>

                        <div className="mb-4">
                          <div className="text-sm font-semibold text-white mb-2">
                            How it works:
                          </div>
                          <ol className="space-y-2">
                            {workflow.howItWorks?.map((step: string, i: number) => (
                              <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                <span className="text-accent shrink-0">{i + 1}.</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>

                        <div className="pt-4 border-t border-gray-900">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs text-gray-600">Saves</div>
                              <div className="text-lg font-bold text-accent">
                                {workflow.timeSaved}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-600">Accuracy</div>
                              <div className="text-lg font-bold text-white">
                                {workflow.accuracy}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Hover prompt */}
                      {!isHovered && (
                        <div className="absolute bottom-8 left-8 right-8 text-center">
                          <p className="text-sm text-gray-600">
                            Hover to see how it works
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Disclaimer for custom workflows */}
        {customWorkflows && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 p-6 border border-gray-900 rounded-xl bg-background-elevated text-center"
          >
            <p className="text-gray-400 leading-relaxed">
              <span className="text-white font-semibold">AI-Generated Example:</span> These 
              workflows were generated by Claude AI based on your industry description. Your 
              actual pilot will be customized after we audit YOUR specific operations during 
              the Week 1 discovery phase.
            </p>
          </motion.div>
        )}

        {/* Disclaimer for pre-selected industries */}
        {selectedIndustry && !customWorkflows && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 p-6 border border-gray-900 rounded-xl bg-background-elevated text-center"
          >
            <p className="text-gray-400 leading-relaxed">
              <span className="text-white font-semibold">Important:</span> These workflow 
              examples are illustrations based on common {selectedIndustry} patterns. Your 
              actual pilot will be customized after we audit YOUR specific operations, pain 
              points, and business logic during the Week 1 discovery phase.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
