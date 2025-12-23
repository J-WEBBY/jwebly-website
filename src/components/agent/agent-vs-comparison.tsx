"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, User, Cpu, Brain } from "lucide-react";

export function AgentVsComparison() {
  const [hoveredWeek, setHoveredWeek] = useState<number | null>(null);
  const [hoveredLine, setHoveredLine] = useState<"human" | "system" | "agent" | null>(null);

  // Decision accuracy over 52 weeks
  const weeks = Array.from({ length: 52 }, (_, i) => i + 1);
  const humanAccuracy = weeks.map(() => 85); // Flat at 85%
  const systemAccuracy = weeks.map(() => 90); // Flat at 90%
  const agentAccuracy = weeks.map((week) => {
    // Agent starts at 90% and improves to 97%
    const improvement = Math.min(7, (week / 52) * 7);
    return 90 + improvement;
  });

  const maxAccuracy = 100;
  const chartHeight = 300;

  const exampleDecisions = {
    1: {
      human: "Manual CV review taking 15 min/candidate. Accuracy ~85% due to fatigue.",
      system: "Rule-based CV screening. Fast but misses nuanced candidates. 90% accuracy.",
      agent: "Learning phase. Makes suggestions, you approve. Starting at 90% accuracy.",
    },
    13: {
      human: "Still manual, same accuracy. No improvement over time.",
      system: "Same rules, same accuracy. Can't adapt to new patterns.",
      agent: "Agent has seen 1,000+ decisions. Now 92% accurate. Handles edge cases better.",
    },
    26: {
      human: "Consistent but limited. Can't scale without hiring.",
      system: "Reliable but rigid. Can't learn from outcomes.",
      agent: "Agent at 94% accuracy. Learned from 2,500+ decisions. Adapts to market changes.",
    },
    52: {
      human: "Same 85% accuracy. Experience helps but capacity limited.",
      system: "Same 90% accuracy. No learning mechanism.",
      agent: "97% accuracy. Learned from 5,000+ decisions. Near-expert level judgment.",
    },
  };

  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Decision Quality Over Time
          </h2>
          <p className="text-xl text-gray-400">
            The agent learns. Systems and humans don't.
          </p>
        </motion.div>

        {/* Interactive Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-gray-900 rounded-2xl p-8 bg-background-elevated mb-12"
        >
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <button
              onMouseEnter={() => setHoveredLine("human")}
              onMouseLeave={() => setHoveredLine(null)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className={`w-3 h-3 rounded-full transition-all ${
                hoveredLine === "human" || hoveredLine === null ? "bg-gray-600" : "bg-gray-800"
              }`} />
              <span className={`text-sm transition-colors ${
                hoveredLine === "human" || hoveredLine === null ? "text-gray-400" : "text-gray-600"
              }`}>
                Human (85%)
              </span>
            </button>
            <button
              onMouseEnter={() => setHoveredLine("system")}
              onMouseLeave={() => setHoveredLine(null)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className={`w-3 h-3 rounded-full transition-all ${
                hoveredLine === "system" || hoveredLine === null ? "bg-blue-500" : "bg-blue-900"
              }`} />
              <span className={`text-sm transition-colors ${
                hoveredLine === "system" || hoveredLine === null ? "text-gray-400" : "text-gray-600"
              }`}>
                System (90%)
              </span>
            </button>
            <button
              onMouseEnter={() => setHoveredLine("agent")}
              onMouseLeave={() => setHoveredLine(null)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className={`w-3 h-3 rounded-full transition-all ${
                hoveredLine === "agent" || hoveredLine === null ? "bg-accent" : "bg-accent/30"
              }`} />
              <span className={`text-sm transition-colors ${
                hoveredLine === "agent" || hoveredLine === null ? "text-gray-400" : "text-gray-600"
              }`}>
                Agent (90% → 97%)
              </span>
            </button>
          </div>

          {/* Chart */}
          <div 
            className="relative" 
            style={{ height: chartHeight }}
            onMouseLeave={() => setHoveredWeek(null)}
          >
            <svg className="w-full h-full">
              {/* Grid lines */}
              {[100, 95, 90, 85, 80].map((value) => {
                const y = chartHeight - ((value - 80) / 20) * chartHeight;
                return (
                  <g key={value}>
                    <line
                      x1="0"
                      y1={y}
                      x2="100%"
                      y2={y}
                      stroke="#262626"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                    />
                    <text
                      x="0"
                      y={y - 5}
                      fill="#666"
                      fontSize="12"
                    >
                      {value}%
                    </text>
                  </g>
                );
              })}

              {/* Human line */}
              <motion.polyline
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                points={humanAccuracy.map((acc, i) => {
                  const x = (i / 51) * 100;
                  const y = chartHeight - ((acc - 80) / 20) * chartHeight;
                  return `${x}%,${y}`;
                }).join(" ")}
                fill="none"
                stroke={hoveredLine === "human" || hoveredLine === null ? "#666" : "#333"}
                strokeWidth={hoveredLine === "human" ? "3" : "2"}
                style={{ transition: "all 0.3s" }}
              />

              {/* System line */}
              <motion.polyline
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                points={systemAccuracy.map((acc, i) => {
                  const x = (i / 51) * 100;
                  const y = chartHeight - ((acc - 80) / 20) * chartHeight;
                  return `${x}%,${y}`;
                }).join(" ")}
                fill="none"
                stroke={hoveredLine === "system" || hoveredLine === null ? "#3B82F6" : "#1e3a8a"}
                strokeWidth={hoveredLine === "system" ? "3" : "2"}
                style={{ transition: "all 0.3s" }}
              />

              {/* Agent line (curved) */}
              <motion.polyline
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
                points={agentAccuracy.map((acc, i) => {
                  const x = (i / 51) * 100;
                  const y = chartHeight - ((acc - 80) / 20) * chartHeight;
                  return `${x}%,${y}`;
                }).join(" ")}
                fill="none"
                stroke={hoveredLine === "agent" || hoveredLine === null ? "#E5527B" : "#7a2d46"}
                strokeWidth={hoveredLine === "agent" ? "4" : "3"}
                style={{ transition: "all 0.3s" }}
              />

              {/* Interactive hover areas (vertical slices) */}
              {Array.from({ length: 52 }, (_, i) => {
                const week = i + 1;
                const x = (i / 51) * 100;
                
                return (
                  <rect
                    key={week}
                    x={`${x - 1}%`}
                    y="0"
                    width="2%"
                    height="100%"
                    fill="transparent"
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredWeek(week)}
                  />
                );
              })}

              {/* Hover indicator line */}
              {hoveredWeek && (
                <motion.line
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  x1={`${((hoveredWeek - 1) / 51) * 100}%`}
                  y1="0"
                  x2={`${((hoveredWeek - 1) / 51) * 100}%`}
                  y2={chartHeight}
                  stroke="#E5527B"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              )}

              {/* Key week markers */}
              {[1, 13, 26, 52].map((week) => {
                const x = ((week - 1) / 51) * 100;
                const yAgent = chartHeight - ((agentAccuracy[week - 1] - 80) / 20) * chartHeight;
                
                return (
                  <g key={week}>
                    <circle
                      cx={`${x}%`}
                      cy={yAgent}
                      r="6"
                      fill="#E5527B"
                      stroke="#fff"
                      strokeWidth="2"
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredWeek(week)}
                    />
                    {hoveredWeek === week && (
                      <motion.circle
                        initial={{ r: 6 }}
                        animate={{ r: 10 }}
                        cx={`${x}%`}
                        cy={yAgent}
                        fill="none"
                        stroke="#E5527B"
                        strokeWidth="2"
                        opacity="0.5"
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* X-axis labels */}
            <div className="flex justify-between mt-4 text-sm text-gray-600">
              <span>Week 1</span>
              <span>Week 13</span>
              <span>Week 26</span>
              <span>Week 39</span>
              <span>Week 52</span>
            </div>

            {/* Hover tooltip */}
            {hoveredWeek && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black border border-accent rounded-lg p-4 pointer-events-none z-10"
                style={{ left: `${((hoveredWeek - 1) / 51) * 100}%` }}
              >
                <div className="text-center">
                  <div className="text-sm font-semibold text-accent mb-2">Week {hoveredWeek}</div>
                  <div className="space-y-1 text-xs">
                    <div className="text-gray-400">Human: 85%</div>
                    <div className="text-blue-400">System: 90%</div>
                    <div className="text-accent">Agent: {Math.round(agentAccuracy[hoveredWeek - 1])}%</div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Hover details for key weeks */}
          {hoveredWeek && [1, 13, 26, 52].includes(hoveredWeek) && exampleDecisions[hoveredWeek as keyof typeof exampleDecisions] && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 grid md:grid-cols-3 gap-4"
            >
              <div className="p-4 bg-black rounded-xl border border-gray-900">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-gray-600" />
                  <div className="text-sm font-semibold text-gray-400">Human</div>
                </div>
                <p className="text-sm text-gray-500">
                  {exampleDecisions[hoveredWeek as keyof typeof exampleDecisions].human}
                </p>
              </div>

              <div className="p-4 bg-black rounded-xl border border-blue-500/50">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4 text-blue-500" />
                  <div className="text-sm font-semibold text-blue-400">System</div>
                </div>
                <p className="text-sm text-gray-400">
                  {exampleDecisions[hoveredWeek as keyof typeof exampleDecisions].system}
                </p>
              </div>

              <div className="p-4 bg-black rounded-xl border border-accent">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-4 h-4 text-accent" />
                  <div className="text-sm font-semibold text-accent">Agent</div>
                </div>
                <p className="text-sm text-gray-300">
                  {exampleDecisions[hoveredWeek as keyof typeof exampleDecisions].agent}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 border border-accent rounded-2xl bg-accent/5"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-accent" />
            <h3 className="text-2xl font-bold text-white">The Key Difference</h3>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Human accuracy is limited by capacity and fatigue. Systems are reliable but rigid. 
            <span className="text-white font-semibold"> Agents improve with every decision</span>, 
            learning from outcomes and adapting to new patterns. After one year, your agent has 
            expert-level judgment across thousands of scenarios.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

