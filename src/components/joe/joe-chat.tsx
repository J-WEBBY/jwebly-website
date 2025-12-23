"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, Sparkles, ArrowRight, Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface JoeChatProps {
  onClose?: () => void;
}

const INITIAL_MESSAGE = `Hi! I'm Joe, your AI implementation partner at Jwebly. 

I'm here to help you:
- Understand which automation tier fits your business
- Design custom workflows for your processes
- Answer technical questions about our services
- Guide you through the implementation journey

What would you like to know about AI automation for your business?`;

const QUICK_ACTIONS = [
  {
    icon: Sparkles,
    label: "Which tier is right for me?",
    prompt: "I'm not sure which tier (Pilot, System, or Agent) would be best for my business. Can you help me decide?",
  },
  {
    icon: Calendar,
    label: "Book discovery call",
    prompt: "I'd like to book a discovery call to discuss automation for my business.",
  },
  {
    icon: ArrowRight,
    label: "How does pricing work?",
    prompt: "Can you explain how your pricing works and what's included in each tier?",
  },
];

export function JoeChat({ onClose }: JoeChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: INITIAL_MESSAGE,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input.trim();
    if (!textToSend || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/joe-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();

      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I apologize, but I'm having trouble connecting right now. Please try again or email us at contact@jwebly.co.uk",
          timestamp: new Date(),
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
    <div className="h-screen flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="border-b border-gray-900 bg-black/80 backdrop-blur-xl sticky top-0 z-10"
      >
        <div className="container max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            {/* Close button */}
            {onClose && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-background-elevated border border-gray-900 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-colors shrink-0"
              >
                <X className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </motion.button>
            )}

            {/* Joe Avatar */}
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-pink-600 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-accent rounded-full blur-xl -z-10"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-xl font-bold text-white">Joe</h1>
              <p className="text-sm text-gray-600">AI Implementation Partner</p>
            </div>

            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-500"
              />
              <span className="text-sm text-gray-600">Online</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="container max-w-4xl mx-auto px-6 py-8">
          <div className="space-y-6">
            <AnimatePresence initial={false}>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`
                      max-w-[80%] px-5 py-4 rounded-2xl
                      ${message.role === "user"
                        ? "bg-accent text-white"
                        : "bg-background-elevated text-gray-300 border border-gray-900"
                      }
                    `}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">
                      {message.content}
                    </p>
                    <div
                      className={`text-xs mt-2 ${
                        message.role === "user" ? "text-white/60" : "text-gray-600"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
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
                <div className="bg-background-elevated px-5 py-4 rounded-2xl border border-gray-900">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-accent animate-spin" />
                    <span className="text-sm text-gray-400">Joe is thinking...</span>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions (only show at start) */}
          {messages.length === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 grid md:grid-cols-3 gap-4"
            >
              {QUICK_ACTIONS.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    onClick={() => handleSend(action.prompt)}
                    disabled={isLoading}
                    className="p-4 border border-gray-900 rounded-xl bg-black hover:border-accent/50 transition-all text-left group"
                  >
                    <Icon className="w-5 h-5 text-accent mb-3" />
                    <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {action.label}
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>

      {/* Input */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="border-t border-gray-900 bg-black/80 backdrop-blur-xl sticky bottom-0"
      >
        <div className="container max-w-4xl mx-auto px-6 py-6">
          <div className="flex gap-4">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about AI automation..."
              disabled={isLoading}
              className="flex-1 px-6 py-4 bg-background-elevated border border-gray-900 rounded-xl text-white placeholder-gray-600 focus:border-accent focus:outline-none disabled:opacity-50"
            />
            <Button
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              className="bg-accent hover:bg-accent/90 h-14 px-8"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-xs text-gray-600 mt-3 text-center">
            Joe is powered by Claude AI. Responses are generated in real-time.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

