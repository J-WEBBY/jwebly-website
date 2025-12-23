"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check } from "lucide-react";
import { INDUSTRY_SYSTEMS, type Workflow } from "@/lib/constants/system-data";

type IndustryId = "recruitment" | "accounting" | "legal" | "marketing" | "estate";

export function WorkflowBuilder() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryId>("recruitment");
  const [selectedWorkflows, setSelectedWorkflows] = useState<string[]>([]);
  const [showJoeMessage, setShowJoeMessage] = useState(false);

  // Get workflows for selected industry
  const availableWorkflows = INDUSTRY_SYSTEMS[selectedIndustry] || [];

  const toggleWorkflow = (id: string) => {
    setSelectedWorkflows((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );
  };

  // Reset selections when industry changes
  useEffect(() => {
    setSelectedWorkflows([]);
    setShowJoeMessage(false);
  }, [selectedIndustry]);

  // Calculate totals
  const totalTimeSaved = selectedWorkflows.reduce((sum, id) => {
    const workflow = availableWorkflows.find((w) => w.id === id);
    if (!workflow) return sum;
    const timeRange = workflow.timeSaved.replace(" hours/week", "");
    const [min, max] = timeRange.split("-").map(Number);
    const avg = (min + max) / 2;
    return sum + avg;
  }, 0);

  const estimatedCost = 
    selectedWorkflows.length === 5 ? 3250 :
    selectedWorkflows.length === 6 ? 3750 :
    selectedWorkflows.length === 7 ? 4500 :
    selectedWorkflows.length > 7 ? 5000 :
    selectedWorkflows.length * 600;

  // Show Joe message when 5+ workflows selected
  useEffect(() => {
    if (selectedWorkflows.length >= 5) {
      setShowJoeMessage(true);
    } else {
      setShowJoeMessage(false);
    }
  }, [selectedWorkflows.length]);

  // Get industry-specific recommendation
  const getIndustryRecommendation = () => {
    if (selectedIndustry === "recruitment" && !selectedWorkflows.includes("pipeline-reporting")) {
      return "I'd recommend adding Pipeline Analytics—it ties everything together with real-time analytics.";
    }
    if (selectedIndustry === "accounting" && !selectedWorkflows.includes("financial-reporting")) {
      return "I'd recommend adding Financial Dashboards—it gives you real-time visibility across all workflows.";
    }
    if (selectedIndustry === "legal" && !selectedWorkflows.includes("case-management")) {
      return "I'd recommend adding Matter Tracking—it coordinates all your workflows with automated deadlines.";
    }
    if (selectedIndustry === "marketing" && !selectedWorkflows.includes("client-reporting")) {
      return "I'd recommend adding Client Dashboards—it shows performance across all campaigns.";
    }
    if (selectedIndustry === "estate" && !selectedWorkflows.includes("pipeline-management")) {
      return "I'd recommend adding Deal Pipeline—it tracks opportunities across all your workflows.";
    }
    return "";
  };

  const industryLabels = {
    recruitment: "recruitment agencies",
    accounting: "accounting firms",
    legal: "law firms",
    marketing: "marketing agencies",
    estate: "real estate agencies",
  };

  return (
    <section id="workflow-builder" className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Design Your System
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Select your industry, then choose workflows to see how they connect
          </p>

          {/* Industry Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "recruitment" as IndustryId, label: "Recruitment" },
              { id: "accounting" as IndustryId, label: "Accounting" },
              { id: "legal" as IndustryId, label: "Legal" },
              { id: "marketing" as IndustryId, label: "Marketing" },
              { id: "estate" as IndustryId, label: "Real Estate" },
            ].map((industry) => (
              <button
                key={industry.id}
                onClick={() => {
                  setSelectedIndustry(industry.id);
                  setSelectedWorkflows([]);
                }}
                className={`
                  px-6 py-3 rounded-full font-semibold transition-all
                  ${selectedIndustry === industry.id
                    ? "bg-accent text-white"
                    : "bg-background-elevated text-gray-400 hover:text-white border border-gray-900 hover:border-gray-800"
                  }
                `}
              >
                {industry.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left: Workflow Selection */}
          <div>
            <div className="space-y-3">
              {availableWorkflows.map((workflow, index) => {
                const isSelected = selectedWorkflows.includes(workflow.id);
                
                return (
                  <motion.button
                    key={workflow.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => toggleWorkflow(workflow.id)}
                    className={`
                      w-full p-4 rounded-xl border transition-all text-left
                      ${isSelected 
                        ? "border-accent bg-accent/10" 
                        : "border-gray-900 hover:border-gray-800 bg-black"
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`
                          w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors
                          ${isSelected ? "border-accent bg-accent" : "border-gray-800"}
                        `}>
                          {isSelected && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <div>
                          <div className="text-white font-semibold">
                            {workflow.title}
                          </div>
                          <div className="text-sm text-gray-600">
                            Saves {workflow.timeSaved}
                          </div>
                        </div>
                      </div>
                      
                      <div className={`
                        text-xs px-2 py-1 rounded-full
                        ${workflow.category === "input" ? "bg-blue-500/10 text-blue-400" : ""}
                        ${workflow.category === "processing" ? "bg-purple-500/10 text-purple-400" : ""}
                        ${workflow.category === "output" ? "bg-green-500/10 text-green-400" : ""}
                        ${workflow.category === "coordination" ? "bg-yellow-500/10 text-yellow-400" : ""}
                      `}>
                        {workflow.category}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Helper text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 p-4 border border-gray-900 rounded-xl bg-background-elevated"
            >
              <p className="text-sm text-gray-400">
                Select 5-7 workflows for a complete system. Each workflow connects 
                intelligently with others to create coordinated automation.
              </p>
            </motion.div>
          </div>

          {/* Right: Visual Network + Stats */}
          <div className="space-y-6">
            
            {/* Network Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="border border-gray-900 rounded-2xl p-8 bg-background-elevated min-h-[400px] flex items-center justify-center"
            >
              {selectedWorkflows.length === 0 ? (
                <div className="text-center">
                  <div className="text-gray-600 mb-2">👈</div>
                  <p className="text-gray-600">
                    Select workflows to see them connect
                  </p>
                </div>
              ) : (
                <div className="relative w-full h-[400px]">
                  {/* Simple network visualization */}
                  <svg className="w-full h-full">
                    {/* Connections */}
                    {selectedWorkflows.map((id, i) => {
                      if (i === selectedWorkflows.length - 1) return null;
                      const x1 = 50 + (i % 3) * 150;
                      const y1 = 50 + Math.floor(i / 3) * 150;
                      const x2 = 50 + ((i + 1) % 3) * 150;
                      const y2 = 50 + Math.floor((i + 1) / 3) * 150;
                      
                      return (
                        <motion.line
                          key={`line-${i}`}
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.5 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="#E5527B"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                        />
                      );
                    })}

                    {/* Nodes */}
                    {selectedWorkflows.map((id, i) => {
                      const workflow = availableWorkflows.find((w) => w.id === id);
                      const x = 50 + (i % 3) * 150;
                      const y = 50 + Math.floor(i / 3) * 150;
                      
                      return (
                        <g key={id}>
                          <motion.circle
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            cx={x}
                            cy={y}
                            r="30"
                            fill="#0A0A0A"
                            stroke="#E5527B"
                            strokeWidth="2"
                          />
                          <motion.circle
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.1 + 0.2 }}
                            cx={x}
                            cy={y}
                            r="8"
                            fill="#E5527B"
                          />
                          <motion.text
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 + 0.3 }}
                            x={x}
                            y={y + 50}
                            textAnchor="middle"
                            fill="#666"
                            fontSize="12"
                          >
                            {workflow?.title.split(" ")[0]}
                          </motion.text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              )}
            </motion.div>

            {/* Stats */}
            <AnimatePresence mode="wait">
              {selectedWorkflows.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="border border-accent rounded-xl p-6 bg-background-elevated"
                >
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Time Saved</div>
                      <div className="text-3xl font-bold text-accent">
                        {Math.round(totalTimeSaved)} hrs/week
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Est. Cost</div>
                      <div className="text-3xl font-bold text-white">
                        £{estimatedCost.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Annual Value</div>
                      <div className="text-2xl font-bold text-white">
                        £{Math.round(totalTimeSaved * 52 * 50).toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Workflows</div>
                      <div className="text-2xl font-bold text-white">
                        {selectedWorkflows.length} selected
                      </div>
                    </div>
                  </div>

                  {selectedWorkflows.length >= 5 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-6 pt-6 border-t border-gray-900"
                    >
                      <div className="text-sm text-gray-400">
                        ✓ System complete - {selectedWorkflows.length} workflows interconnected
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Joe Message */}
            <AnimatePresence>
              {showJoeMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="border border-accent rounded-xl p-6 bg-accent/5"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white mb-2">
                        💬 Joe (AI)
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed mb-4">
                        Great selection! For {industryLabels[selectedIndustry]}, these {selectedWorkflows.length} workflows 
                        create a powerful system. {getIndustryRecommendation()}
                      </p>
                      <div className="flex gap-3">
                        <a href="#joe-chat" className="text-sm text-accent hover:text-accent/80 font-semibold">
                          Tell me more
                        </a>
                        <button 
                          onClick={() => setShowJoeMessage(false)}
                          className="text-sm text-gray-600 hover:text-gray-400"
                        >
                          No thanks
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
