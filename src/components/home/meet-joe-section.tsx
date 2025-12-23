"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const QUESTIONS = [
  {
    question: "What's the pricing for a pilot?",
  },
  {
    question: "How long does implementation take?",
  },
  {
    question: "What integrations do you support?",
  },
];

export function MeetJoeSection() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const handleQuestionClick = (question: string) => {
    setSelectedQuestion(question);
    setIsChatOpen(true);
  };

  return (
    <>
      <section className="bg-black py-32">
        <div className="container max-w-7xl mx-auto px-6">
          {/* Large Card Container - Anthropic Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 rounded-2xl p-12 md:p-16"
          >
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              
              {/* Left: Main Content */}
              <div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 leading-tight">
                  Meet J
                  <span className="relative inline-block">
                    <motion.span 
                      className="relative inline-block"
                      style={{
                        width: "1em",
                        height: "1em",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* Animated AI Neural Network Pattern */}
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 100 100"
                        className="absolute inset-0"
                        style={{ overflow: "visible" }}
                      >
                        <defs>
                          <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FF0080" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#FF0080" stopOpacity="1" />
                            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.8" />
                          </linearGradient>
                        </defs>
                        
                        {/* Central Node - Pulsing */}
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="8"
                          fill="url(#aiGradient)"
                          animate={{
                            r: [8, 12, 8],
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        
                        {/* Orbiting Nodes */}
                        {[0, 1, 2, 3, 4, 5].map((i) => {
                          const angle = (i * 60) * (Math.PI / 180);
                          const radius = 25;
                          const x = Math.round((50 + radius * Math.cos(angle)) * 100) / 100;
                          const y = Math.round((50 + radius * Math.sin(angle)) * 100) / 100;
                          
                          return (
                            <g key={i}>
                              {/* Connection Line */}
                              <motion.line
                                x1="50"
                                y1="50"
                                x2={x}
                                y2={y}
                                stroke="url(#aiGradient)"
                                strokeWidth="1.5"
                                strokeOpacity="0.4"
                                animate={{
                                  strokeOpacity: [0.2, 0.6, 0.2],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                  ease: "easeInOut",
                                }}
                              />
                              {/* Orbiting Node */}
                              <motion.circle
                                cx={x}
                                cy={y}
                                r="4"
                                fill="url(#aiGradient)"
                                animate={{
                                  r: [3, 6, 3],
                                  opacity: [0.5, 1, 0.5],
                                  scale: [1, 1.2, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                  ease: "easeInOut",
                                }}
                              />
                              {/* Data Packet */}
                              <motion.circle
                                cx={x}
                                cy={y}
                                r="2"
                                fill="#00D9FF"
                                animate={{
                                  cx: [50, x, 50],
                                  cy: [50, y, 50],
                                  opacity: [0, 1, 0],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  delay: i * 0.5,
                                  ease: "easeInOut",
                                }}
                              />
                            </g>
                          );
                        })}
                        
                        {/* Outer Ring Nodes */}
                        {[0, 1, 2, 3].map((i) => {
                          const angle = (i * 90) * (Math.PI / 180);
                          const radius = 35;
                          const x = Math.round((50 + radius * Math.cos(angle)) * 100) / 100;
                          const y = Math.round((50 + radius * Math.sin(angle)) * 100) / 100;
                          
                          return (
                            <motion.circle
                              key={`outer-${i}`}
                              cx={x}
                              cy={y}
                              r="3"
                              fill="#00D9FF"
                              animate={{
                                r: [2, 5, 2],
                                opacity: [0.4, 0.9, 0.4],
                              }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut",
                              }}
                            />
                          );
                        })}
                      </svg>
                    </motion.span>
                  </span>
                  e
                </h2>
                
                    <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
                      Your AI assistant trained on Jwebly&apos;s services, pricing, and process. Instead of reading through pages, just ask Joe anything.
                    </p>

                <Button
                  onClick={() => setIsChatOpen(true)}
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 h-12 px-6 text-base font-medium"
                >
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Chat with Joe
                </Button>
              </div>

              {/* Right: Ask Joe Questions */}
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-6 tracking-wider">
                  Ask Joe
                </h3>
                
                <div className="space-y-0">
                  {QUESTIONS.map((item, index) => (
                    <motion.div
                      key={item.question}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => handleQuestionClick(item.question)}
                        className="w-full text-left block py-4 border-b border-gray-800 hover:border-gray-700 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-lg text-white group-hover:text-gray-300 transition-colors">
                            {item.question}
                          </span>
                          <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chat Slide-Out Panel */}
      <AnimatePresence>
        {isChatOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsChatOpen(false)}
              className="fixed inset-0 bg-black/80 z-40"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-background-card border-l border-gray-900 z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-900">
                <div>
                      <h3 className="text-xl font-normal text-white">Chat with Joe</h3>
                  <p className="text-sm text-gray-600">Powered by Claude AI</p>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-gray-600 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Chat Content */}
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="space-y-4">
                  {/* Joe's greeting */}
                  <div className="flex justify-start">
                    <div className="bg-background-elevated border border-gray-900 rounded-2xl px-4 py-3 max-w-[80%]">
                      <p className="text-sm text-white">
                        Hi! I&apos;m Joe. {selectedQuestion ? `You asked: "${selectedQuestion}". ` : ""}How can I help you learn about Jwebly?
                      </p>
                    </div>
                  </div>

                  {/* Placeholder for demo */}
                  <div className="text-center py-8">
                        <p className="text-gray-600 text-sm">
                          This is a demo interface. In production, I&apos;d provide
                          <br />
                          detailed answers about Jwebly&apos;s services.
                        </p>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="p-6 border-t border-gray-900">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask Joe anything..."
                    className="flex-1 bg-background-elevated border border-gray-900 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent"
                  />
                  <Button className="bg-accent text-white hover:bg-accent/90">
                    Send
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

