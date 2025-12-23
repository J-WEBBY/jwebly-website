"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, TrendingUp, Brain, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DECISION_DOMAINS } from "@/lib/constants/agent-data";

type IndustryId = "recruitment" | "accounting" | "legal" | "marketing" | "estate";

export function AgentBuilder() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryId>("recruitment");
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [showJoeMessage, setShowJoeMessage] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [customScenario, setCustomScenario] = useState("");
  const [generatedExample, setGeneratedExample] = useState<any>(null);

  // Filter domains by industry
  const availableDomains = DECISION_DOMAINS.filter(
    (domain) => domain.industry.includes(selectedIndustry) || domain.industry.includes("all")
  );

  const toggleDomain = (id: string) => {
    setSelectedDomains((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  // Calculate metrics
  const totalDecisions = selectedDomains.reduce((sum, id) => {
    const domain = DECISION_DOMAINS.find((d) => d.id === id);
    return sum + (domain?.weeklyDecisions || 0);
  }, 0);

  const autonomyLevel = Math.min(95, 45 + selectedDomains.length * 8);
  const estimatedCost = 7000 + selectedDomains.length * 800;
  const annualROI = Math.round(totalDecisions * 0.3 * 52 * 50); // 30% of decisions, 52 weeks, £50/hour

  // Show Joe message when 3+ domains selected
  useEffect(() => {
    if (selectedDomains.length >= 3) {
      setShowJoeMessage(true);
    } else {
      setShowJoeMessage(false);
    }
  }, [selectedDomains.length]);

  const generateCustomExample = async () => {
    if (!customScenario.trim() || selectedDomains.length === 0) return;
    
    setIsGenerating(true);
    setGeneratedExample(null);
    
    try {
      const response = await fetch("/api/generate-agent-example", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          industry: selectedIndustry,
          scenario: customScenario,
          selectedDomains: selectedDomains.map(id => 
            DECISION_DOMAINS.find(d => d.id === id)?.title
          ).filter(Boolean),
        }),
      });

      if (!response.ok) throw new Error("Failed to generate");

      const data = await response.json();
      setGeneratedExample(data.example);
      setShowJoeMessage(true);
      
    } catch (error) {
      console.error("Generation error:", error);
      alert("Failed to generate example. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="agent-builder" className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4">
            <Brain className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Design Your Agent
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Select your industry, then choose decision domains
          </p>

          {/* Industry Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "recruitment", label: "Recruitment" },
              { id: "accounting", label: "Accounting" },
              { id: "legal", label: "Legal" },
              { id: "marketing", label: "Marketing" },
              { id: "estate", label: "Real Estate" },
            ].map((industry) => (
              <button
                key={industry.id}
                onClick={() => {
                  setSelectedIndustry(industry.id as IndustryId);
                  setSelectedDomains([]); // Reset when industry changes
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
          
          {/* Left: Domain Selection */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">
                What decisions should your agent make?
              </h3>
              <p className="text-gray-400 text-sm">
                Select 3-8 decision domains for optimal autonomy
              </p>
            </div>

            <div className="space-y-3">
              {availableDomains.map((domain, index) => {
                const isSelected = selectedDomains.includes(domain.id);
                
                return (
                  <motion.button
                    key={domain.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => toggleDomain(domain.id)}
                    className={`
                      w-full p-5 rounded-xl border transition-all text-left
                      ${isSelected 
                        ? "border-accent bg-accent/10" 
                        : "border-gray-900 hover:border-gray-800 bg-black"
                      }
                    `}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div className={`
                          w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors shrink-0 mt-0.5
                          ${isSelected ? "border-accent bg-accent" : "border-gray-800"}
                        `}>
                          {isSelected && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-semibold mb-1">
                            {domain.title}
                          </div>
                          <div className="text-sm text-gray-400 mb-2">
                            {domain.description}
                          </div>
                          <div className="flex items-center gap-4 text-xs">
                            <div className="text-gray-600">
                              ~{domain.weeklyDecisions} decisions/week
                            </div>
                            <div className={`
                              px-2 py-1 rounded-full
                              ${domain.complexity === "high" ? "bg-red-500/10 text-red-400" : ""}
                              ${domain.complexity === "medium" ? "bg-yellow-500/10 text-yellow-400" : ""}
                              ${domain.complexity === "low" ? "bg-green-500/10 text-green-400" : ""}
                            `}>
                              {domain.complexity} complexity
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* AI Example Generator */}
            <div className="mt-8 p-6 border border-gray-900 rounded-xl bg-background-elevated">
              <h4 className="text-sm font-semibold text-white mb-3">
                Generate Custom Example with AI
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                Describe a specific decision scenario in your business, and we'll show you how 
                the agent would handle it.
              </p>
              
              <div className="flex gap-3">
                <input
                  type="text"
                  value={customScenario}
                  onChange={(e) => setCustomScenario(e.target.value)}
                  placeholder={`e.g., "Invoice arrives with £8,500 value and 2 pricing discrepancies"`}
                  className="flex-1 px-4 py-3 bg-black border border-gray-900 rounded-xl text-white placeholder-gray-600 focus:border-accent focus:outline-none text-sm"
                  disabled={isGenerating}
                />
                <Button
                  onClick={generateCustomExample}
                  disabled={!customScenario.trim() || isGenerating || selectedDomains.length === 0}
                  className="bg-accent hover:bg-accent/90 h-12 px-6 whitespace-nowrap"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate Example
                    </>
                  )}
                </Button>
              </div>
              
              {selectedDomains.length === 0 && (
                <p className="text-xs text-gray-600 mt-2">
                  Select at least one decision domain to generate examples
                </p>
              )}
            </div>
          </div>

          {/* Right: Agent Preview & Metrics */}
          <div className="space-y-6">
            
            {/* Decision Tree Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="border border-gray-900 rounded-2xl p-8 bg-background-elevated min-h-[400px] flex items-center justify-center"
            >
              {selectedDomains.length === 0 ? (
                <div className="text-center">
                  <div className="text-gray-600 mb-2">👈</div>
                  <p className="text-gray-600">
                    Select decision domains to see your agent take shape
                  </p>
                </div>
              ) : (
                <div className="w-full">
                  <div className="text-center mb-6">
                    <div className="text-sm text-gray-600 mb-2">Your Agent</div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {autonomyLevel}% Autonomous
                    </div>
                    <div className="text-sm text-gray-600">
                      {selectedDomains.length} decision domains
                    </div>
                  </div>

                  {/* Simplified decision tree */}
                  <div className="space-y-3">
                    {selectedDomains.slice(0, 5).map((domainId, i) => {
                      const domain = DECISION_DOMAINS.find((d) => d.id === domainId);
                      if (!domain) return null;

                      return (
                        <motion.div
                          key={domainId}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                            className="w-3 h-3 rounded-full bg-accent"
                          />
                          <div className="flex-1 p-3 bg-black border border-gray-900 rounded-lg">
                            <div className="text-sm text-white font-semibold">
                              {domain.title}
                            </div>
                            <div className="text-xs text-gray-600">
                              ~{domain.weeklyDecisions} decisions/week
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                    {selectedDomains.length > 5 && (
                      <div className="text-center text-sm text-gray-600">
                        +{selectedDomains.length - 5} more domains
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Metrics */}
            <AnimatePresence mode="wait">
              {selectedDomains.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="border border-accent rounded-xl p-6 bg-accent/5"
                >
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-4 bg-black rounded-xl border border-gray-900">
                      <div className="text-sm text-gray-600 mb-1">Weekly Decisions</div>
                      <div className="text-2xl font-bold text-white">
                        ~{totalDecisions}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-black rounded-xl border border-gray-900">
                      <div className="text-sm text-gray-600 mb-1">Autonomy Level</div>
                      <div className="text-2xl font-bold text-accent">
                        {autonomyLevel}%
                      </div>
                    </div>
                    <div className="text-center p-4 bg-black rounded-xl border border-gray-900">
                      <div className="text-sm text-gray-600 mb-1">Est. Cost</div>
                      <div className="text-2xl font-bold text-white">
                        £{estimatedCost.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-black rounded-xl border border-gray-900">
                      <div className="text-sm text-gray-600 mb-1">Annual ROI</div>
                      <div className="text-2xl font-bold text-accent">
                        £{annualROI.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-900">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <span>
                        Agent makes ~{Math.round(totalDecisions * autonomyLevel / 100)} autonomous 
                        decisions/week, saving ~{Math.round(totalDecisions * autonomyLevel / 100 * 0.3)} hours
                      </span>
                    </div>
                  </div>
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
                      
                      {/* Generated Example */}
                      {generatedExample ? (
                        <div className="space-y-4">
                          <div>
                            <div className="text-xs text-gray-500 mb-2">Generated Example:</div>
                            <div className="text-sm font-semibold text-white mb-3">
                              Scenario: {generatedExample.scenario}
                            </div>
                            
                            <div className="space-y-2 mb-4">
                              <div className="text-xs text-gray-500">Agent's Thinking Process:</div>
                              {generatedExample.agentThinking?.map((thought: string, i: number) => (
                                <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                  <span className="text-accent shrink-0 mt-1">•</span>
                                  <span>{thought}</span>
                                </div>
                              ))}
                            </div>
                            
                            <div className="p-3 bg-black rounded-lg border border-accent mb-3">
                              <div className="text-xs text-gray-500 mb-1">Decision:</div>
                              <div className="text-sm text-white font-semibold mb-2">
                                {generatedExample.decision}
                              </div>
                              <div className="text-xs text-gray-400">
                                Confidence: {generatedExample.confidence}%
                              </div>
                            </div>
                            
                            <div className="text-xs text-gray-400 mb-4">
                              {generatedExample.reasoning}
                            </div>
                            
                            {generatedExample.alternativesConsidered && (
                              <div className="text-xs text-gray-500">
                                Alternatives considered: {generatedExample.alternativesConsidered.join(", ")}
                              </div>
                            )}
                          </div>
                          
                          <div className="flex gap-3 pt-3 border-t border-gray-900">
                            <button
                              onClick={() => {
                                setGeneratedExample(null);
                                setCustomScenario("");
                              }}
                              className="text-sm text-accent hover:text-accent/80 font-semibold"
                            >
                              Generate Another
                            </button>
                            <button 
                              onClick={() => setShowJoeMessage(false)}
                              className="text-sm text-gray-600 hover:text-gray-400"
                            >
                              Dismiss
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <p className="text-sm text-gray-300 leading-relaxed mb-4">
                            {selectedDomains.length >= 5
                              ? `Excellent! With ${selectedDomains.length} decision domains, you're building a highly autonomous agent. At ${autonomyLevel}% autonomy, this agent will handle ~${Math.round(totalDecisions * autonomyLevel / 100)} decisions/week, saving your team significant time.`
                              : `Good start with ${selectedDomains.length} domains! For optimal autonomy (70%+), I'd recommend adding 2-3 more decision domains. This increases the agent's scope while maintaining high confidence.`
                            }
                          </p>
                          {selectedIndustry === "recruitment" && !selectedDomains.includes("priority-routing") && (
                            <p className="text-sm text-gray-300 leading-relaxed mb-4">
                              Consider adding Priority Routing—it helps the agent intelligently distribute 
                              tasks across your team based on workload, expertise, and urgency.
                            </p>
                          )}
                          <div className="flex gap-3">
                            <a
                              href="#joe-designer"
                              className="text-sm text-accent hover:text-accent/80 font-semibold"
                            >
                              Design full agent with me
                            </a>
                            <button 
                              onClick={() => setShowJoeMessage(false)}
                              className="text-sm text-gray-600 hover:text-gray-400"
                            >
                              Dismiss
                            </button>
                          </div>
                        </>
                      )}
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

