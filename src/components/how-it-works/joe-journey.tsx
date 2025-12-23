"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MessageSquare, CheckCircle } from "lucide-react";

const JOE_MESSAGES = [
  {
    phase: "Discovery",
    message: "Hi! I'm Joe. I'll be with you throughout your entire journey. Let's start by understanding your business, decision patterns, and automation goals. I'll help design the perfect solution.",
    avatar: "👋",
  },
  {
    phase: "Design",
    message: "Based on our discovery session, I've designed your custom workflows. I'll walk you through each one, explain the logic, and show you exactly how they'll work together.",
    avatar: "🎨",
  },
  {
    phase: "Build",
    message: "Your system is being built! I'll keep you updated on progress, share previews, and make sure everything aligns with your approval. You'll see it come to life step by step.",
    avatar: "⚡",
  },
  {
    phase: "Deploy",
    message: "Time to go live! I'll guide your team through training, handle the deployment, and monitor everything closely in the first few weeks. I'm here for any questions or adjustments.",
    avatar: "🚀",
  },
  {
    phase: "Optimize",
    message: "Now I'm learning from your system's performance. I'll identify optimization opportunities, suggest improvements, and help you scale when you're ready. This is where the magic compounds.",
    avatar: "📈",
  },
];

export function JoeJourney() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section className="bg-black py-32 border-t border-gray-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Meet Your AI Guide</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Joe Guides Your Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Not just a chatbot. Joe is your AI implementation partner who stays 
            with you from discovery to deployment and beyond.
          </p>
        </motion.div>

        {/* Interactive Joe conversation */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Phase selector */}
          <div className="space-y-4">
            {JOE_MESSAGES.map((item, index) => (
              <motion.button
                key={item.phase}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActivePhase(index)}
                className={`
                  w-full p-6 rounded-xl border-2 transition-all text-left
                  ${activePhase === index 
                    ? "border-accent bg-accent/5 shadow-lg shadow-accent/10" 
                    : "border-gray-900 bg-black hover:border-gray-800"
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0
                    ${activePhase === index ? "bg-accent/10" : "bg-gray-900"}
                  `}>
                    {item.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white">
                        {index + 1}. {item.phase}
                      </h3>
                      {activePhase > index && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600">
                      Click to see Joe&apos;s guidance
                    </p>
                  </div>
                  {activePhase === index && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-3 h-3 rounded-full bg-accent"
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right: Joe's message */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -30, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="border border-accent rounded-2xl p-8 bg-gradient-to-br from-accent/10 to-black relative"
            >
              {/* Joe avatar */}
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold text-accent">
                    Joe (AI Implementation Partner)
                  </span>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {JOE_MESSAGES[activePhase].message}
                </p>

                {/* Typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                      className="w-2 h-2 rounded-full bg-accent"
                    />
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                      className="w-2 h-2 rounded-full bg-accent"
                    />
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                      className="w-2 h-2 rounded-full bg-accent"
                    />
                  </div>
                  <span>Joe is always available for questions</span>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Joe availability note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-6 border border-gray-900 rounded-xl bg-background-elevated"
        >
          <p className="text-gray-400 leading-relaxed">
            <span className="text-white font-semibold">Joe is available 24/7</span> throughout your 
            implementation and beyond. Ask questions, request updates, or get clarification anytime. 
            Think of Joe as your always-on implementation partner.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

