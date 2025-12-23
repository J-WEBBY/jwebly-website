"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const WORKFLOW_STATES = ["waiting", "processing", "complete"] as const;

interface Workflow {
  id: number;
  title: string;
  status: typeof WORKFLOW_STATES[number];
}

export function HeroSection() {
  const [workflows, setWorkflows] = useState<Workflow[]>([
    { id: 1, title: "Document Processing", status: "processing" },
    { id: 2, title: "Scheduling & Coordination", status: "waiting" },
    { id: 3, title: "Communication & Follow-up", status: "waiting" },
  ]);

  const [daysElapsed, setDaysElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWorkflows((prev) => {
        const newWorkflows = [...prev];
        const currentProcessing = newWorkflows.findIndex((w) => w.status === "processing");
        
        if (currentProcessing !== -1) {
          // Complete current workflow
          newWorkflows[currentProcessing].status = "complete";
          
          // Start next workflow if exists
          if (currentProcessing + 1 < newWorkflows.length) {
            newWorkflows[currentProcessing + 1].status = "processing";
          } else {
            // Reset animation
            setTimeout(() => {
              setWorkflows([
                { id: 1, title: "Document Processing", status: "processing" },
                { id: 2, title: "Scheduling & Coordination", status: "waiting" },
                { id: 3, title: "Communication & Follow-up", status: "waiting" },
              ]);
              setDaysElapsed(0);
            }, 2000);
          }
        }
        
        return newWorkflows;
      });
      
      setDaysElapsed((prev) => prev + 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black min-h-screen flex items-center">
      <div className="container max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs font-semibold text-gray-600 mb-4 tracking-widest uppercase">
              Implementation Pilot
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Test AI Automation
              <br />
              Without the Risk
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Get a working automation system deployed in your operations in 2-3 weeks. 
              We diagnose your workflows, then deliver tailored solutions—not generic templates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-100 h-14 px-8"
              >
                <Link href="/contact">
                  Book Discovery Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-900 hover:bg-gray-950 h-14 px-8"
              >
                <a href="#workflows">
                  See Pilot in Action
                  <Play className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-sm text-gray-600 mb-1">Price</div>
                <div className="text-2xl font-bold text-white">£1,500-2,000</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Timeline</div>
                <div className="text-2xl font-bold text-white">2-3 weeks</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Workflows</div>
                <div className="text-2xl font-bold text-white">2-3 automated</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Animated Workflow Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-background-elevated border border-gray-900 rounded-2xl p-8">
              <div className="space-y-4">
                {workflows.map((workflow, index) => (
                  <motion.div
                    key={workflow.id}
                    layout
                    className={`
                      p-6 rounded-xl border transition-all duration-500
                      ${workflow.status === "processing" 
                        ? "border-accent bg-accent/10" 
                        : workflow.status === "complete"
                        ? "border-green-500/50 bg-green-500/5"
                        : "border-gray-900 bg-black"
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`
                          w-3 h-3 rounded-full
                          ${workflow.status === "processing" ? "bg-accent animate-pulse" : ""}
                          ${workflow.status === "complete" ? "bg-green-500" : ""}
                          ${workflow.status === "waiting" ? "bg-gray-800" : ""}
                        `} />
                        
                        <div>
                          <div className="text-white font-semibold">
                            {workflow.title}
                          </div>
                          <div className="text-sm text-gray-600">
                            {workflow.status === "processing" && "Processing..."}
                            {workflow.status === "complete" && "Complete"}
                            {workflow.status === "waiting" && "Waiting"}
                          </div>
                        </div>
                      </div>

                      {workflow.status === "complete" && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-green-500"
                        >
                          ✓
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-900 text-center">
                <div className="text-sm text-gray-600">Deployment Progress</div>
                <div className="text-lg font-semibold text-white mt-1">
                  2 weeks {daysElapsed > 0 ? `${Math.min(daysElapsed, 4)} days` : ""}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

