"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type IndustryId = "recruitment" | "accounting" | "legal" | "marketing" | "estate";

const examples = {
  recruitment: {
    title: "Recruitment Pipeline",
    without: [
      "1. CV arrives → Manual screening → Send to hiring manager",
      "2. Hiring manager approves → Manual scheduling email",
      "3. Interview scheduled → Manual calendar invite",
      "4. Interview complete → Manual follow-up email",
      "5. Offer ready → Manual offer letter",
    ],
    withSystem: [
      "1. CV arrives → Auto-score → If 85%+, auto-schedule interview",
      "2. Interview scheduled → Auto-send prep materials + calendar invite",
      "3. Interview complete → Auto-collect feedback → Update all stakeholders",
      "4. Offer approved → Auto-generate offer → Send for signature",
      "5. Signed → Auto-trigger onboarding workflow",
    ],
    stats: {
      without: "5 manual steps, 3-5 hours, prone to delays",
      with: "0 manual steps, 15 minutes, instant coordination",
    },
  },
  accounting: {
    title: "Invoice Processing",
    without: [
      "1. Invoice received → Manual data entry → Route for approval",
      "2. Approved → Manual payment scheduling",
      "3. Payment made → Manual reconciliation",
      "4. Month end → Manual report generation",
      "5. Report → Manual client email",
    ],
    withSystem: [
      "1. Invoice received → Auto-extract data → Auto-categorize → Route to approver",
      "2. Approved → Auto-schedule payment → Update cash flow forecast",
      "3. Payment made → Auto-reconcile → Flag anomalies",
      "4. Month end → Auto-generate reports with insights",
      "5. Reports → Auto-send to clients with commentary",
    ],
    stats: {
      without: "5 manual steps, 4-6 hours, error-prone",
      with: "0 manual steps, 20 minutes, 92%+ accuracy",
    },
  },
  legal: {
    title: "Contract Management",
    without: [
      "1. Contract arrives → Manual review → Identify key terms",
      "2. Issues found → Manual research → Draft response",
      "3. Response → Manual client communication",
      "4. Deadline → Manual calendar entry",
      "5. Matter update → Manual time entry",
    ],
    withSystem: [
      "1. Contract arrives → Auto-extract key terms → Flag risks",
      "2. Issues found → Auto-search precedents → Draft response",
      "3. Response → Auto-send to client with explanations",
      "4. Deadline → Auto-track → Alert team before due date",
      "5. Matter update → Auto-log time → Update billing",
    ],
    stats: {
      without: "5 manual steps, 5-7 hours, missed deadlines risk",
      with: "0 manual steps, 30 minutes, zero missed deadlines",
    },
  },
  marketing: {
    title: "Campaign Management",
    without: [
      "1. Campaign data → Manual aggregation from platforms",
      "2. Data → Manual analysis → Find insights",
      "3. Insights → Manual budget adjustments",
      "4. Budget → Manual reallocation across channels",
      "5. Results → Manual client report",
    ],
    withSystem: [
      "1. Campaign data → Auto-aggregate from all platforms",
      "2. Data → Auto-analyze → Identify optimization opportunities",
      "3. Insights → Auto-recommend budget shifts",
      "4. Budget → Auto-reallocate based on performance",
      "5. Results → Auto-generate client report with insights",
    ],
    stats: {
      without: "5 manual steps, 6-8 hours, delayed optimization",
      with: "0 manual steps, 30 minutes, real-time optimization",
    },
  },
  estate: {
    title: "Property Management",
    without: [
      "1. Property listed → Manual buyer matching",
      "2. Matches found → Manual notification emails",
      "3. Interest → Manual viewing coordination",
      "4. Viewing → Manual follow-up",
      "5. Offer → Manual documentation",
    ],
    withSystem: [
      "1. Property listed → Auto-match to buyer preferences",
      "2. Matches found → Auto-send personalized alerts",
      "3. Interest → Auto-coordinate viewing across all parties",
      "4. Viewing → Auto-collect feedback → Update pipeline",
      "5. Offer → Auto-generate documents → Track negotiation",
    ],
    stats: {
      without: "5 manual steps, 4-6 hours, slow response time",
      with: "0 manual steps, 20 minutes, instant response",
    },
  },
};

export function SystemComparison() {
  const [activeView, setActiveView] = useState<"without" | "with">("with");
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryId>("recruitment");

  const currentExample = examples[selectedIndustry];

  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Disconnected vs Connected
          </h2>
          <p className="text-xl text-gray-400">
            See the difference system coordination makes
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 p-2 bg-background-elevated border border-gray-900 rounded-full">
            <button
              onClick={() => setActiveView("without")}
              className={`
                px-6 py-3 rounded-full font-semibold transition-all
                ${activeView === "without" 
                  ? "bg-white text-black" 
                  : "text-gray-600 hover:text-gray-400"
                }
              `}
            >
              Disconnected Workflows
            </button>
            <button
              onClick={() => setActiveView("with")}
              className={`
                px-6 py-3 rounded-full font-semibold transition-all
                ${activeView === "with" 
                  ? "bg-accent text-white" 
                  : "text-gray-600 hover:text-gray-400"
                }
              `}
            >
              Connected System
            </button>
          </div>
        </div>

        {/* Visual Comparison */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Left: Visual */}
            <div className="border border-gray-900 rounded-2xl p-8 bg-background-elevated">
              {activeView === "without" ? (
                <div className="space-y-6">
                  <div className="text-center text-gray-600 mb-8">
                    Isolated Workflows
                  </div>
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 border border-gray-900 rounded-xl bg-black"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-3 h-3 rounded-full bg-gray-600"
                        />
                        <div className="text-white font-semibold">
                          Workflow {String.fromCharCode(64 + i)}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        Operates independently
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center text-accent mb-8">
                    Unified System
                  </div>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="relative">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 border border-accent rounded-xl bg-accent/5"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                            className="w-3 h-3 rounded-full bg-accent"
                          />
                          <div className="text-white font-semibold">
                            Workflow {String.fromCharCode(64 + i)}
                          </div>
                        </div>
                        <div className="text-sm text-gray-400">
                          Shares context with system
                        </div>
                      </motion.div>
                      
                      {i < 3 && (
                        <div className="flex justify-center py-2">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 + 0.3 }}
                            className="text-accent text-2xl"
                          >
                            ↓
                          </motion.div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Comparison Text */}
            <div className="flex flex-col justify-center space-y-6">
              {activeView === "without" ? (
                <>
                  <div className="flex items-start gap-3">
                    <div className="text-red-500 text-2xl shrink-0">✗</div>
                    <div>
                      <div className="text-white font-semibold mb-1">
                        3 Separate Actions
                      </div>
                      <div className="text-gray-400 text-sm">
                        Each workflow operates independently, creating duplicate work
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-red-500 text-2xl shrink-0">✗</div>
                    <div>
                      <div className="text-white font-semibold mb-1">
                        Manual Handoffs
                      </div>
                      <div className="text-gray-400 text-sm">
                        Data must be manually transferred between workflows
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-red-500 text-2xl shrink-0">✗</div>
                    <div>
                      <div className="text-white font-semibold mb-1">
                        Data Re-entry
                      </div>
                      <div className="text-gray-400 text-sm">
                        Same information entered multiple times across tools
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-red-500 text-2xl shrink-0">✗</div>
                    <div>
                      <div className="text-white font-semibold mb-1">
                        Disconnected Experience
                      </div>
                      <div className="text-gray-400 text-sm">
                        Candidates/clients receive multiple uncoordinated communications
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-3">
                    <div className="text-green-500 text-2xl shrink-0">✓</div>
                    <div>
                      <div className="text-white font-semibold mb-1">
                        1 Coordinated Action
                      </div>
                      <div className="text-gray-400 text-sm">
                        All workflows act as one unified system
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-green-500 text-2xl shrink-0">✓</div>
                    <div>
                      <div className="text-white font-semibold mb-1">
                        Automated Flow
                      </div>
                      <div className="text-gray-400 text-sm">
                        Data flows automatically between workflows
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-green-500 text-2xl shrink-0">✓</div>
                    <div>
                      <div className="text-white font-semibold mb-1">
                        Shared Context
                      </div>
                      <div className="text-gray-400 text-sm">
                        Every workflow has access to complete operational picture
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-green-500 text-2xl shrink-0">✓</div>
                    <div>
                      <div className="text-white font-semibold mb-1">
                        Seamless Experience
                      </div>
                      <div className="text-gray-400 text-sm">
                        Single coordinated message instead of 3 separate emails
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Real Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 border border-gray-900 rounded-2xl bg-background-elevated"
        >
          <div className="text-center mb-6">
            <div className="text-sm font-semibold text-white mb-2">
              Real Example: {currentExample.title}
            </div>
            <p className="text-gray-400 text-sm">
              How the system coordinates multiple workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-sm font-semibold text-gray-600 mb-3">
                WITHOUT SYSTEM:
              </div>
              <ol className="space-y-2 text-sm text-gray-400">
                {currentExample.without.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
              <div className="mt-4 text-sm text-gray-600">
                Total: {currentExample.stats.without}
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-accent mb-3">
                WITH SYSTEM:
              </div>
              <ol className="space-y-2 text-sm text-gray-300">
                {currentExample.withSystem.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
              <div className="mt-4 text-sm text-accent">
                Total: {currentExample.stats.with}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Industry Selector - Moved to bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-600 mb-4">
            View examples for different industries:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: "recruitment" as IndustryId, label: "Recruitment" },
              { id: "accounting" as IndustryId, label: "Accounting" },
              { id: "legal" as IndustryId, label: "Legal" },
              { id: "marketing" as IndustryId, label: "Marketing" },
              { id: "estate" as IndustryId, label: "Real Estate" },
            ].map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`
                  px-4 py-2 rounded-full text-sm font-semibold transition-all
                  ${selectedIndustry === industry.id
                    ? "bg-accent text-white"
                    : "bg-background-elevated text-gray-400 hover:text-white border border-gray-900"
                  }
                `}
              >
                {industry.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
