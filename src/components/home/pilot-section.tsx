"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Calendar, MessageSquare } from "lucide-react";

const PILOT_FEATURES = [
  {
    id: "screening",
    number: "01",
    title: "CV Screening Automation",
    description: "AI reads and scores CVs like your best recruiter",
    icon: FileText,
    graphic: (
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded bg-gray-900 flex items-center justify-center">
            <FileText className="w-6 h-6 text-gray-600" />
          </div>
          <div className="text-accent">→</div>
          <div className="w-12 h-12 rounded bg-accent/20 flex items-center justify-center">
            <span className="text-accent font-normal">AI</span>
          </div>
          <div className="text-accent">→</div>
          <div className="px-4 py-2 rounded bg-accent text-white text-sm font-semibold">
            Score: 85%
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    id: "scheduling",
    number: "02",
    title: "Interview Scheduling",
    description: "Automated calendar management and booking",
    icon: Calendar,
    graphic: (
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 28 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.02 }}
            className={`aspect-square rounded ${
              i % 7 === 3 || i % 7 === 5
                ? "bg-accent"
                : "bg-gray-900"
            }`}
          />
        ))}
      </div>
    ),
  },
  {
    id: "communication",
    number: "03",
    title: "Candidate Communication",
    description: "Smart follow-ups and status updates",
    icon: MessageSquare,
    graphic: (
      <div className="space-y-3">
        {["Hi! Your interview is confirmed", "Reminder: Tomorrow at 2pm", "Thanks for attending!"].map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.3 }}
            className="bg-gray-900 border border-accent/30 rounded-lg p-3 text-sm text-gray-400"
          >
            {msg}
          </motion.div>
        ))}
      </div>
    ),
  },
];

export function PilotSection() {
  const [activeFeature, setActiveFeature] = useState(PILOT_FEATURES[0].id);

  const currentFeature = PILOT_FEATURES.find((f) => f.id === activeFeature) || PILOT_FEATURES[0];

  return (
    <section className="bg-black py-32">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-xs font-semibold text-gray-600 mb-4 tracking-widest">
            IMPLEMENTATION PILOT
          </div>
          <h2 className="text-5xl md:text-6xl font-normal text-white mb-4">
            What You Get
          </h2>
          <p className="text-xl text-gray-400">
            A working automation system in 4-6 weeks
          </p>
        </motion.div>

        {/* Interactive Grid */}
        <div className="grid md:grid-cols-[40fr,60fr] gap-16 items-start">
          
          {/* Left: Feature List */}
          <div className="space-y-4">
            {PILOT_FEATURES.map((feature) => {
              const Icon = feature.icon;
              const isActive = activeFeature === feature.id;

              return (
                <motion.button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  whileHover={{ x: 4 }}
                  className={`w-full text-left p-6 border rounded-xl transition-all ${
                    isActive
                      ? "border-accent bg-background-elevated"
                      : "border-gray-900 hover:border-gray-800"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive ? "bg-accent" : "bg-gray-900"
                    }`}>
                      <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-gray-600"}`} />
                    </div>

                    <div>
                      <div className={`text-sm font-semibold mb-1 ${
                        isActive ? "text-accent" : "text-gray-600"
                      }`}>
                        {feature.number}
                      </div>
                      <h3 className="text-xl font-normal text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Graphic */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-background-elevated border border-gray-900 rounded-2xl p-12 min-h-[400px] flex items-center justify-center"
          >
            {currentFeature.graphic}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

