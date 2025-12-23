"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { JoeChat } from "./joe-chat";
import { JoeNeuralIcon } from "./joe-neural-icon";

export function JoeFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Hide on service pages
  const isServicePage = pathname?.includes('/services/');

  // Show button after page loads
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Prevent body scroll when Joe is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (isServicePage) return null;

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {isVisible && !isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 z-50 group"
          >
            <div className="relative w-16 h-16">
              {/* Glow effect */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-accent rounded-full blur-xl"
              />

              {/* Main button container */}
              <div className="relative w-16 h-16 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center shadow-2xl border-2 border-accent/30 overflow-hidden">
                {/* Neural Network Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <JoeNeuralIcon size={64} interactive={true} />
                </div>

                {/* Animated border glow */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full border-2 border-accent/50"
                />
              </div>

              {/* Ripple effect on hover */}
              <motion.div
                initial={{ scale: 1, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0.3 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-full border-2 border-accent"
              />
            </div>

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-20 top-1/2 -translate-y-1/2 bg-black border border-accent/20 rounded-full px-4 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            >
              <div className="text-sm font-semibold text-white">Talk to Joe</div>
              <div className="text-xs text-gray-600">AI Implementation Partner</div>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Full-screen Joe Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black"
          >
            {/* Close button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background-elevated border border-gray-900 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-colors z-10"
              aria-label="Close chat"
            >
              <X className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
            </motion.button>

            {/* Joe Chat Interface */}
            <JoeChat onClose={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

