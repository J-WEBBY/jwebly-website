"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, Loader2, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function JoeAgentDesigner() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Joe, and I'll help you design a custom autonomous agent tailored to your business.\n\nLet's start with some questions:\n\n• What industry are you in?\n• What decisions does your team make daily?\n• Which decisions follow clear patterns vs require judgment?\n• How many team members handle these decisions?\n\nBased on your answers, I'll design your agent's decision domains, calculate autonomy potential, and show you the ROI.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [agentSpec, setAgentSpec] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/joe-agent-designer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);

      // Check if agent spec was generated
      if (data.agentSpec) {
        setAgentSpec(data.agentSpec);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again or book a discovery call to design your agent with a human expert.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="joe-designer" className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-5xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4">
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Design Your Agent with Joe
          </h2>
          <p className="text-xl text-gray-400">
            Full conversational agent design powered by AI
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-gray-900 rounded-2xl overflow-hidden bg-background-elevated"
            >
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-900 bg-black">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Joe (AI Agent Designer)</div>
                    <div className="text-xs text-gray-600">Powered by Claude AI</div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="h-[600px] overflow-y-auto p-6 space-y-4">
                <AnimatePresence initial={false}>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`
                          max-w-[85%] px-4 py-3 rounded-2xl
                          ${message.role === "user"
                            ? "bg-accent text-white"
                            : "bg-gray-900 text-gray-300"
                          }
                        `}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-line">
                          {message.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-900 px-4 py-3 rounded-2xl">
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 text-accent animate-spin" />
                        <span className="text-sm text-gray-400">Joe is designing your agent...</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-900 bg-black">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Describe your business and decision-making..."
                    disabled={isLoading}
                    className="flex-1 px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:border-accent focus:outline-none disabled:opacity-50"
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="bg-accent hover:bg-accent/90 h-12 px-6"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  Joe will ask questions to understand your needs, then generate a complete agent specification
                </p>
              </div>
            </motion.div>
          </div>

          {/* Agent Spec Preview */}
          <div>
            <AnimatePresence mode="wait">
              {agentSpec ? (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="border border-accent rounded-2xl p-6 bg-accent/5 sticky top-6"
                >
                  <h3 className="text-lg font-bold text-white mb-4">
                    Your Agent Specification
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Decision Domains</div>
                      <div className="text-white font-semibold">
                        {agentSpec.decisionDomains?.length || 0} domains
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Projected Autonomy</div>
                      <div className="text-2xl font-bold text-accent">
                        {agentSpec.autonomyLevel || 0}%
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Weekly Decisions</div>
                      <div className="text-white font-semibold">
                        ~{agentSpec.weeklyDecisions || 0}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Estimated Cost</div>
                      <div className="text-white font-semibold">
                        £{agentSpec.cost?.toLocaleString() || 0}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      className="w-full bg-accent hover:bg-accent/90"
                    >
                      <Download className="mr-2 w-4 h-4" />
                      Download Spec (PDF)
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-gray-800 hover:bg-gray-900"
                    >
                      <a href="/contact">
                        <Calendar className="mr-2 w-4 h-4" />
                        Book Discovery Call
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border border-gray-900 rounded-2xl p-6 bg-background-elevated sticky top-6"
                >
                  <div className="text-center py-12">
                    <Sparkles className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                    <p className="text-gray-600 text-sm">
                      Chat with Joe to generate your custom agent specification
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

