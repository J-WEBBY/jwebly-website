"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PhoneCall, 
  FileText, 
  Code, 
  Rocket, 
  TrendingUp,
  ChevronDown,
  Clock,
  Users,
  CheckCircle,
} from "lucide-react";

const TIMELINE_PHASES = [
  {
    id: 1,
    title: "Discovery Call",
    duration: "1 hour",
    icon: PhoneCall,
    description: "Deep dive into your business, processes, and automation goals",
    steps: [
      "Understand your decision patterns and workflow bottlenecks",
      "Map current processes and identify automation opportunities",
      "Define success metrics and ROI expectations",
      "Determine optimal tier (Pilot, System, or Agent)",
    ],
    deliverables: [
      "Process assessment document",
      "Tier recommendation with rationale",
      "Preliminary timeline and pricing",
    ],
    yourTime: "1 hour",
    ourTime: "3-4 hours (including prep)",
    joeRole: "Joe conducts pre-call research, joins the call, and creates the assessment document.",
  },
  {
    id: 2,
    title: "Design & Approval",
    duration: "1-2 weeks",
    icon: FileText,
    description: "Custom workflow/system/agent design tailored to your business",
    steps: [
      "Joe designs workflows based on your processes",
      "Create detailed workflow diagrams and logic documentation",
      "Define data flows, integrations, and error handling",
      "Present design for your review and approval",
    ],
    deliverables: [
      "Complete workflow specifications",
      "Architecture diagrams",
      "Integration requirements document",
      "Fixed-price proposal",
    ],
    yourTime: "3-5 hours (review meetings)",
    ourTime: "20-40 hours (design work)",
    joeRole: "Joe creates all design documents, explains technical decisions, and incorporates your feedback.",
  },
  {
    id: 3,
    title: "Build & Development",
    duration: "2-8 weeks",
    icon: Code,
    description: "We build your automation while you run your business",
    steps: [
      "Develop workflows/systems/agents according to approved design",
      "Set up integrations with your existing tools",
      "Build testing environments and quality assurance",
      "Weekly progress updates from Joe",
    ],
    deliverables: [
      "Fully functional automation system",
      "Integration connections established",
      "Testing environment for your review",
      "Technical documentation",
    ],
    yourTime: "2-4 hours (weekly check-ins)",
    ourTime: "80-200 hours (development)",
    joeRole: "Joe provides weekly updates, shares previews, and answers technical questions throughout the build.",
  },
  {
    id: 4,
    title: "Deployment & Training",
    duration: "1-2 weeks",
    icon: Rocket,
    description: "Go live with comprehensive team training and support",
    steps: [
      "Deploy to production environment",
      "Train your team on using and monitoring the system",
      "Establish monitoring dashboards and alert systems",
      "Document processes and create team guides",
    ],
    deliverables: [
      "Live production system",
      "Team training sessions (recorded)",
      "User guides and documentation",
      "Monitoring dashboards",
    ],
    yourTime: "4-6 hours (training sessions)",
    ourTime: "20-30 hours (deployment + training)",
    joeRole: "Joe leads training sessions, creates documentation, and provides hands-on deployment support.",
  },
  {
    id: 5,
    title: "Optimization & Support",
    duration: "Ongoing",
    icon: TrendingUp,
    description: "Continuous improvement, monitoring, and expansion",
    steps: [
      "Monitor system performance and accuracy",
      "Identify optimization opportunities",
      "Address any issues or edge cases",
      "Plan scaling and additional workflows",
    ],
    deliverables: [
      "Monthly performance reports",
      "Optimization recommendations",
      "Priority support (4-hour response time)",
      "Free updates and improvements",
    ],
    yourTime: "1-2 hours/month (reviews)",
    ourTime: "Ongoing monitoring + support",
    joeRole: "Joe proactively monitors performance, flags issues, and suggests improvements. Always available for questions.",
  },
];

export function ProcessTimeline() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(1);

  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-5xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Complete Process
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From first call to ongoing optimization. Every phase designed for clarity and collaboration.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-900" />
          
          {/* Progress line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute left-8 top-0 w-0.5 bg-accent"
          />

          <div className="space-y-8">
            {TIMELINE_PHASES.map((phase, index) => {
              const Icon = phase.icon;
              const isExpanded = expandedPhase === phase.id;
              
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Phase icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute left-0 top-6 w-16 h-16 rounded-xl bg-accent/10 border-2 border-accent flex items-center justify-center cursor-pointer"
                    onClick={() => setExpandedPhase(isExpanded ? null : phase.id)}
                  >
                    <Icon className="w-8 h-8 text-accent" />
                  </motion.div>

                  {/* Phase content */}
                  <button
                    onClick={() => setExpandedPhase(isExpanded ? null : phase.id)}
                    className="w-full text-left"
                  >
                    <div className={`
                      border-2 rounded-xl p-6 transition-all
                      ${isExpanded 
                        ? "border-accent bg-accent/5" 
                        : "border-gray-900 bg-black hover:border-gray-800"
                      }
                    `}>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-white">
                              {phase.id}. {phase.title}
                            </h3>
                            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-background-elevated border border-gray-900">
                              <Clock className="w-3 h-3 text-gray-600" />
                              <span className="text-xs text-gray-600">{phase.duration}</span>
                            </div>
                          </div>
                          <p className="text-gray-400">
                            {phase.description}
                          </p>
                        </div>
                        <ChevronDown 
                          className={`w-6 h-6 text-gray-600 transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 border-t border-gray-900 space-y-6">
                              {/* Steps */}
                              <div>
                                <h4 className="text-sm font-semibold text-white mb-3">
                                  What Happens:
                                </h4>
                                <ul className="space-y-2">
                                  {phase.steps.map((step, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                      <span>{step}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Deliverables */}
                              <div>
                                <h4 className="text-sm font-semibold text-white mb-3">
                                  Deliverables:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {phase.deliverables.map((item, i) => (
                                    <div key={i} className="px-3 py-1.5 rounded-full bg-black border border-gray-900 text-xs text-gray-400">
                                      {item}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Time investment */}
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 bg-black rounded-xl border border-gray-900">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Users className="w-4 h-4 text-accent" />
                                    <div className="text-xs text-gray-600">Your Time</div>
                                  </div>
                                  <div className="text-lg font-bold text-white">
                                    {phase.yourTime}
                                  </div>
                                </div>
                                <div className="p-4 bg-black rounded-xl border border-gray-900">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Clock className="w-4 h-4 text-accent" />
                                    <div className="text-xs text-gray-600">Our Time</div>
                                  </div>
                                  <div className="text-lg font-bold text-white">
                                    {phase.ourTime}
                                  </div>
                                </div>
                              </div>

                              {/* Joe's role */}
                              <div className="p-4 bg-accent/5 rounded-xl border border-accent/20">
                                <div className="flex items-start gap-3">
                                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                                    <span className="text-white text-sm">J</span>
                                  </div>
                                  <div>
                                    <div className="text-xs font-semibold text-accent mb-1">
                                      Joe&apos;s Role:
                                    </div>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                      {phase.joeRole}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

