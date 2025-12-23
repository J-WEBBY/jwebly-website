"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AgentCTA() {
  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Build an AI
          <br />
          That Thinks for Itself?
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Book a discovery call to analyze your decision patterns and design 
          your custom autonomous agent.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-gray-100 h-16 px-10 text-lg"
          >
            <Link href="/contact">
              <Calendar className="mr-2 w-6 h-6" />
              Book Discovery Call
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-gray-900 hover:bg-gray-950 h-16 px-10 text-lg"
          >
            <a href="#joe-designer">
              <MessageSquare className="mr-2 w-6 h-6" />
              Design Agent with Joe
            </a>
          </Button>
        </div>

        <div className="text-sm text-gray-600 space-y-1">
          <p>£7,000-12,000 investment | 8-12 weeks to full autonomy</p>
          <p className="text-accent">
            70-85% autonomous decision-making with continuous learning
          </p>
        </div>
      </motion.div>
    </section>
  );
}

