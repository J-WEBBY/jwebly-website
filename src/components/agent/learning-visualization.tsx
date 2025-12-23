"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Brain, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LearningVisualization() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const learningSteps = [
    {
      step: 1,
      title: "Observes Decision",
      description: "New ad campaign request: £15K budget, B2B software product, target: CTOs",
      icon: "📊",
      color: "#E5527B",
    },
    {
      step: 2,
      title: "Analyzes Context",
      description: "Checks historical data: Similar B2B campaigns averaged 2.8% CTR, £42 CPA",
      icon: "🔍",
      color: "#E5527B",
    },
    {
      step: 3,
      title: "Predicts Outcome",
      description: "Calculates: LinkedIn ads perform 3.2x better for CTO targeting vs Google",
      icon: "📈",
      color: "#E5527B",
    },
    {
      step: 4,
      title: "Makes Decision",
      description: "Action: Allocate 70% to LinkedIn, 30% to Google (92% confidence)",
      icon: "✅",
      color: "#E5527B",
    },
    {
      step: 5,
      title: "Learns from Result",
      description: "Outcome: Campaign achieved 3.4% CTR, £38 CPA. Exceeded projections.",
      icon: "🎯",
      color: "#10b981",
    },
    {
      step: 6,
      title: "Updates Model",
      description: "Learning: B2B software → LinkedIn priority strengthened. Confidence for similar campaigns now 94%.",
      icon: "🧠",
      color: "#E5527B",
    },
  ];

  const playExample = () => {
    setIsPlaying(true);
    setCurrentStep(0);

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= learningSteps.length - 1) {
          clearInterval(interval);
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
  };

  return (
    <section id="how-agent-learns" className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-6xl mx-auto px-6">
        
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
            How Your Agent Learns
          </h2>
          <p className="text-xl text-gray-400">
            Watch the agent think through a marketing decision and learn from the outcome
          </p>
        </motion.div>

        {/* Decision Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-gray-900 rounded-2xl p-8 md:p-12 bg-background-elevated mb-8"
        >
          {/* Visual Flow */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {learningSteps.slice(0, 3).map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: currentStep >= idx ? 1 : 0.3,
                    scale: currentStep >= idx ? 1 : 0.9,
                  }}
                  className="relative"
                >
                  <div className={`
                    p-6 rounded-xl border-2 transition-all
                    ${currentStep >= idx 
                      ? "border-accent bg-accent/5 shadow-lg shadow-accent/10" 
                      : "border-gray-900 bg-black"
                    }
                  `}>
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <div className="text-sm font-semibold text-accent mb-2">
                      Step {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className={`w-8 h-8 ${
                        currentStep > idx ? "text-accent" : "text-gray-800"
                      }`} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {learningSteps.slice(3, 6).map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: currentStep >= idx + 3 ? 1 : 0.3,
                    scale: currentStep >= idx + 3 ? 1 : 0.9,
                  }}
                  className="relative"
                >
                  <div className={`
                    p-6 rounded-xl border-2 transition-all
                    ${currentStep >= idx + 3
                      ? step.step === 5 
                        ? "border-green-500 bg-green-500/5 shadow-lg shadow-green-500/10"
                        : "border-accent bg-accent/5 shadow-lg shadow-accent/10"
                      : "border-gray-900 bg-black"
                    }
                  `}>
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <div className={`text-sm font-semibold mb-2 ${
                      step.step === 5 ? "text-green-500" : "text-accent"
                    }`}>
                      Step {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className={`w-8 h-8 ${
                        currentStep > idx + 3 ? "text-accent" : "text-gray-800"
                      }`} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Play Button */}
          <div className="text-center">
            <Button
              onClick={playExample}
              disabled={isPlaying}
              size="lg"
              className="bg-accent hover:bg-accent/90 h-14 px-8"
            >
              <Play className="mr-2 w-5 h-5" />
              {isPlaying ? "Playing..." : "Play Example Decision"}
            </Button>
          </div>
        </motion.div>

        {/* Key Insights */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 border border-gray-900 rounded-xl bg-background-elevated"
          >
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Pattern Recognition
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  The agent doesn't just execute rules—it recognizes patterns across thousands 
                  of decisions. "B2B software + CTO targeting = LinkedIn priority" becomes 
                  learned knowledge, not a hardcoded rule.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 border border-gray-900 rounded-xl bg-background-elevated"
          >
            <div className="flex items-start gap-3">
              <TrendingUp className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Continuous Improvement
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Every outcome—success or failure—updates the model. When this campaign 
                  exceeded projections, the agent strengthened its confidence in LinkedIn 
                  for B2B. Next time, it starts at 94% confidence instead of 92%.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-8 border border-accent rounded-2xl bg-accent/5 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            The Learning Cycle Repeats
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            This 6-step cycle happens for <span className="text-accent font-semibold">every decision</span>. 
            Over time, the agent's neural pathways strengthen, confidence increases, and accuracy 
            improves. After 5,000+ decisions, your agent has expert-level judgment across 
            thousands of marketing scenarios.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
