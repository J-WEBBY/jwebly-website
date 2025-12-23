"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PILLARS = [
  {
    id: "training",
    headline: "Enterprise Data Foundation",
    description: "Your operational data—workflows, decisions, client interactions—becomes the training foundation. We build a proprietary knowledge base from your historical processes, enabling AI that understands your specific business context, not generic templates.",
  },
  {
    id: "integration",
    headline: "Custom Models & Integration",
    description: "Foundation models fine-tuned on your data and integrated with your tech stack via production-grade APIs. Connects to CRM, practice management, and communication platforms with real-time bidirectional sync and enterprise reliability.",
  },
  {
    id: "orchestration",
    headline: "Workflow & Automation",
    description: "Intelligent orchestration of 3-5 interconnected workflows executing end-to-end processes autonomously. Handles exceptions, optimizes task sequencing, and scales operations without manual intervention or additional headcount.",
  },
];

export function IntelligentAutomationSection() {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);

  return (
    <section className="bg-black py-20">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Top Section - Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 leading-tight">
                Intelligent Automation System
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
                Multi-workflow automation with AI decision-making. 3-5 interconnected workflows that handle end-to-end processes—from data intake to decision-making to action—without human intervention.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-100 h-12 px-6 text-base font-medium"
              >
                <Link href="/contact">
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left: Three Pillars */}
          <div className="space-y-6 pt-0">
            {PILLARS.map((pillar, index) => {
              const isHovered = hoveredPillar === pillar.id;
              return (
                <motion.div
                  key={pillar.id}
                  onMouseEnter={() => setHoveredPillar(pillar.id)}
                  onMouseLeave={() => setHoveredPillar(null)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ x: 4 }}
                  className="w-full text-left group cursor-pointer relative"
                >
                  <h3 className={`text-xl md:text-2xl font-normal mb-2 transition-colors ${
                    isHovered ? "text-white" : "text-gray-400 group-hover:text-gray-300"
                  }`}>
                    <span className="relative inline-block">
                      {pillar.headline}
                      {isHovered && (
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-white origin-left block"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ width: "100%" }}
                        />
                      )}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right: 3D Isometric Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="bg-gray-900 rounded-2xl flex items-start border border-gray-800 h-full">
              {/* Unified Isometric 3D Stack Visualization */}
              <div className="relative w-full p-6 pt-4">
                <svg viewBox="0 0 500 400" className="w-full h-[500px]" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="pinkCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF0080" />
                      <stop offset="100%" stopColor="#00D9FF" />
                    </linearGradient>
                  </defs>

                  {/* Base Layer - Enterprise Data - Highlighted on Training Hover */}
                  <g>
                    {/* Top face - More 3D depth */}
                    <polygon 
                      points="75,360 425,360 420,340 80,340" 
                      fill="#1a1a1a" 
                      stroke={hoveredPillar === "training" ? "#FF0080" : "#333"} 
                      strokeWidth={hoveredPillar === "training" ? "3" : "2"}
                      style={hoveredPillar === "training" ? {
                        filter: "drop-shadow(0 0 12px rgba(255, 0, 128, 0.6))",
                      } : {}}
                    />
                    {/* Front face - Deeper 3D */}
                    <polygon 
                      points="80,340 420,340 415,320 85,320" 
                      fill={hoveredPillar === "training" ? "#2a2a2a" : "#262626"} 
                      stroke={hoveredPillar === "training" ? "#FF0080" : "#333"} 
                      strokeWidth={hoveredPillar === "training" ? "3" : "2"}
                      style={hoveredPillar === "training" ? {
                        filter: "drop-shadow(0 0 12px rgba(255, 0, 128, 0.6))",
                      } : {}}
                    />
                    {/* Right side face for 3D effect - Enhanced depth */}
                    <polygon 
                      points="425,360 420,340 415,320 420,340" 
                      fill="#0f0f0f" 
                      stroke={hoveredPillar === "training" ? "#FF0080" : "#222"} 
                      strokeWidth={hoveredPillar === "training" ? "3" : "2"}
                      style={hoveredPillar === "training" ? {
                        filter: "drop-shadow(0 0 12px rgba(255, 0, 128, 0.6))",
                      } : {}}
                    />
                    {/* Label - Fits within bounds */}
                    <text 
                      x="250" 
                      y="355" 
                      textAnchor="middle" 
                      fontSize="14" 
                      fill={hoveredPillar === "training" ? "#FF0080" : "#737373"} 
                      fontWeight="600" 
                      letterSpacing="0.08em"
                      style={hoveredPillar === "training" ? {
                        filter: "drop-shadow(0 0 8px rgba(255, 0, 128, 0.8))",
                      } : {}}
                    >
                      ENTERPRISE DATA
                    </text>
                  </g>

                  {/* Middle Layer - Custom Integration Platform - Highlighted ONLY on Integration Hover */}
                  <g>
                    {/* Glow effect when Integration is hovered - work in progress */}
                    {hoveredPillar === "integration" && (
                      <motion.rect
                        x="95"
                        y="235"
                        width="310"
                        height="30"
                        fill="url(#pinkCyan)"
                        opacity={0.2}
                        rx="4"
                        animate={{
                          opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        style={{
                          filter: "blur(8px)",
                        }}
                      />
                    )}
                    {/* Top face - sits on base layer with more separation - More 3D */}
                    <polygon 
                      points="100,260 400,260 395,240 105,240" 
                      fill="#2a2a2a" 
                      stroke={hoveredPillar === "integration" ? "#00D9FF" : "#444"} 
                      strokeWidth={hoveredPillar === "integration" ? "3" : "2"}
                      style={hoveredPillar === "integration" ? {
                        filter: "drop-shadow(0 0 12px rgba(0, 217, 255, 0.6))",
                      } : {}}
                    />
                    {/* Front face - Deeper 3D */}
                    <polygon 
                      points="105,240 395,240 390,220 110,220" 
                      fill={hoveredPillar === "integration" ? "#3a3a3a" : "#333"} 
                      stroke={hoveredPillar === "integration" ? "#00D9FF" : "#444"} 
                      strokeWidth={hoveredPillar === "integration" ? "3" : "2"}
                      style={hoveredPillar === "integration" ? {
                        filter: "drop-shadow(0 0 12px rgba(0, 217, 255, 0.6))",
                      } : {}}
                    />
                    {/* Right side face for 3D effect - Enhanced depth */}
                    <polygon 
                      points="400,260 395,240 390,220 395,240" 
                      fill="#1f1f1f" 
                      stroke={hoveredPillar === "integration" ? "#00D9FF" : "#333"} 
                      strokeWidth={hoveredPillar === "integration" ? "3" : "2"}
                      style={hoveredPillar === "integration" ? {
                        filter: "drop-shadow(0 0 12px rgba(0, 217, 255, 0.6))",
                      } : {}}
                    />
                    {/* Label - Fits within bounds */}
                    <text 
                      x="250" 
                      y="255" 
                      textAnchor="middle" 
                      fontSize="14" 
                      fill={hoveredPillar === "integration" ? "#00D9FF" : "#a3a3a3"} 
                      fontWeight="600" 
                      letterSpacing="0.08em"
                      style={hoveredPillar === "integration" ? {
                        filter: "drop-shadow(0 0 8px rgba(0, 217, 255, 0.8))",
                      } : {}}
                    >
                      CUSTOM INTEGRATION
                    </text>
                  </g>

                  {/* Top Layer - Workflow Bars - Highlighted ONLY on Orchestration Hover - Sits on Middle Layer with More Separation */}
                  <g>
                    {[
                      { x: 150, height: 70, label: "WF1" },
                      { x: 210, height: 90, label: "WF2" },
                      { x: 270, height: 110, label: "WF3" },
                      { x: 330, height: 80, label: "WF4" },
                    ].map((wf, i) => {
                      const baseY = 180; // Sits on top of middle layer with more separation (similar to Enterprise Data to Custom Integration gap)
                      return (
                        <g key={`workflow-${i}`}>
                          {/* Top face - Enhanced 3D effect */}
                          <polygon
                            points={`${wf.x},${baseY - wf.height} ${wf.x + 40},${baseY - wf.height} ${wf.x + 44},${baseY - wf.height + 4} ${wf.x + 4},${baseY - wf.height + 4}`}
                            fill={hoveredPillar === "orchestration" ? "url(#pinkCyan)" : "#4a4a4a"}
                            opacity={hoveredPillar === "orchestration" ? "0.3" : "0.2"}
                          />
                          {/* Front face - Larger bars */}
                          <rect
                            x={wf.x}
                            y={baseY - wf.height}
                            width={40}
                            height={wf.height}
                            fill={hoveredPillar === "orchestration" ? "url(#pinkCyan)" : "#4a4a4a"}
                            opacity={hoveredPillar === "orchestration" ? "0.4" : "0.3"}
                            stroke={hoveredPillar === "orchestration" ? "#FF0080" : "#555"}
                            strokeWidth={hoveredPillar === "orchestration" ? "2.5" : "2"}
                            style={hoveredPillar === "orchestration" ? {
                              filter: "drop-shadow(0 0 12px rgba(255, 0, 128, 0.6))",
                            } : {}}
                          />
                          {/* Right side face for 3D effect - Enhanced depth */}
                          <polygon
                            points={`${wf.x + 40},${baseY - wf.height} ${wf.x + 44},${baseY - wf.height + 4} ${wf.x + 44},${baseY + 4} ${wf.x + 40},${baseY}`}
                            fill={hoveredPillar === "orchestration" ? "#3a3a3a" : "#2a2a2a"}
                            opacity={hoveredPillar === "orchestration" ? "0.5" : "0.3"}
                            stroke={hoveredPillar === "orchestration" ? "#FF0080" : "#444"}
                            strokeWidth={hoveredPillar === "orchestration" ? "2.5" : "2"}
                          />
                          {/* Label - Fits within bar */}
                          <text
                            x={wf.x + 20}
                            y={baseY - wf.height / 2}
                            textAnchor="middle"
                            fontSize="10"
                            fill={hoveredPillar === "orchestration" ? "#ffffff" : "#a3a3a3"}
                            fontWeight="600"
                            transform={`rotate(-90 ${wf.x + 20} ${baseY - wf.height / 2})`}
                            style={hoveredPillar === "orchestration" ? {
                              filter: "drop-shadow(0 0 6px rgba(255, 0, 128, 0.8))",
                            } : {}}
                          >
                            {wf.label}
                          </text>
                        </g>
                      );
                    })}
                  </g>

                </svg>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

