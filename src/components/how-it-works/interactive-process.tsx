"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROCESS_NODES = [
  { id: 1, x: 20, y: 50, label: "Discovery", phase: "Input", color: "#3B82F6" },
  { id: 2, x: 35, y: 30, label: "Design", phase: "Analysis", color: "#8B5CF6" },
  { id: 3, x: 50, y: 50, label: "Build", phase: "Creation", color: "#EC4899" },
  { id: 4, x: 65, y: 30, label: "Deploy", phase: "Launch", color: "#E5527B" },
  { id: 5, x: 80, y: 50, label: "Optimize", phase: "Growth", color: "#10B981" },
];

const CONNECTIONS = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 4, to: 5 },
  { from: 5, to: 1 },
];

export function InteractiveProcess() {
  const [activeNode, setActiveNode] = useState<number | null>(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-animate through nodes
  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setActiveNode((prev) => {
        if (prev === null) return 1;
        return prev >= PROCESS_NODES.length ? 1 : prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section className="bg-black py-32 border-t border-gray-900 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Interactive Process Flow
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch how each phase connects in our continuous improvement cycle
          </p>
        </motion.div>

        <div className="border border-gray-900 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-background-elevated to-black relative">
          {/* Process nodes */}
          <div className="relative aspect-[2/1] mb-8">
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full">
              {CONNECTIONS.map((conn, i) => {
                const fromNode = PROCESS_NODES.find((n) => n.id === conn.from);
                const toNode = PROCESS_NODES.find((n) => n.id === conn.to);
                if (!fromNode || !toNode) return null;

                const isActive = activeNode === conn.from || activeNode === conn.to;

                return (
                  <motion.line
                    key={i}
                    x1={`${fromNode.x}%`}
                    y1={`${fromNode.y}%`}
                    x2={`${toNode.x}%`}
                    y2={`${toNode.y}%`}
                    stroke={isActive ? "#E5527B" : "#262626"}
                    strokeWidth={isActive ? "3" : "2"}
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                  />
                );
              })}
            </svg>

            {/* Nodes */}
            {PROCESS_NODES.map((node, index) => {
              const isActive = activeNode === node.id;

              return (
                <motion.button
                  key={node.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    setActiveNode(node.id);
                    setIsAnimating(false);
                  }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <motion.div
                    animate={{
                      scale: isActive ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                    className={`
                      w-24 h-24 rounded-2xl flex flex-col items-center justify-center border-2 transition-all
                      ${isActive 
                        ? "bg-opacity-20 backdrop-blur-sm" 
                        : "bg-black border-gray-900 group-hover:border-gray-700"
                      }
                    `}
                    style={{
                      borderColor: isActive ? node.color : undefined,
                      backgroundColor: isActive ? `${node.color}20` : undefined,
                      boxShadow: isActive ? `0 0 30px ${node.color}40` : undefined,
                    }}
                  >
                    <div 
                      className="text-3xl font-bold mb-1"
                      style={{ color: isActive ? node.color : "#666" }}
                    >
                      {node.id}
                    </div>
                    <div 
                      className="text-xs font-semibold text-center"
                      style={{ color: isActive ? "#fff" : "#666" }}
                    >
                      {node.label}
                    </div>
                  </motion.div>

                  {/* Phase label */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <div className="text-xs text-gray-600">{node.phase}</div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 pt-8 border-t border-gray-900">
            <Button
              onClick={() => setIsAnimating(!isAnimating)}
              variant="outline"
              className="border-gray-900 hover:bg-gray-950"
            >
              {isAnimating ? (
                <>
                  <Pause className="w-4 h-4 mr-2" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Auto-play
                </>
              )}
            </Button>

            <Button
              onClick={() => {
                setActiveNode(1);
                setIsAnimating(false);
              }}
              variant="outline"
              className="border-gray-900 hover:bg-gray-950"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Active node details */}
          <AnimatePresence mode="wait">
            {activeNode && (
              <motion.div
                key={activeNode}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-8 p-6 bg-accent/5 rounded-xl border border-accent/20"
              >
                {(() => {
                  const node = PROCESS_NODES.find((n) => n.id === activeNode);
                  if (!node) return null;

                  const descriptions: Record<number, string> = {
                    1: "Discovery phase: We map your processes, identify bottlenecks, and define success metrics. Joe conducts research and creates detailed assessment documents.",
                    2: "Design phase: Custom workflow/system/agent design tailored to your business. Complete specifications, architecture diagrams, and fixed pricing.",
                    3: "Build phase: We develop your automation while you run your business. Weekly updates from Joe, progress previews, and complete transparency.",
                    4: "Deploy phase: Go live with team training, documentation, and monitoring dashboards. Joe provides hands-on support throughout deployment.",
                    5: "Optimize phase: Continuous monitoring, performance reports, and proactive improvements. Joe identifies opportunities and suggests scaling strategies.",
                  };

                  return (
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold shrink-0"
                        style={{ 
                          backgroundColor: `${node.color}20`,
                          color: node.color,
                        }}
                      >
                        {node.id}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {node.label} Phase
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {descriptions[activeNode]}
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

