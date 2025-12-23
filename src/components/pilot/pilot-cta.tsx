"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PilotCTA() {
  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Try Before You Buy?
        </h2>

        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Start with a low-risk pilot. If you love it, upgrade to our full 
          Intelligent Automation System or Custom AI Agent—your pilot fee is fully credited.
        </p>

        <div className="mb-12 p-6 bg-background-elevated border border-accent/30 rounded-xl max-w-2xl mx-auto">
          <p className="text-lg text-white font-semibold mb-2">
            🎯 Pilot Goal: Upgrade to Full Service
          </p>
          <p className="text-gray-400">
            The pilot is designed to prove value and convert you to our full system. 
            Upgrade within 60 days and your £1,500-2,000 pilot fee is credited toward 
            the Intelligent Automation System (£3,000-5,000) or Custom AI Agent.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-gray-100 h-16 px-10 text-lg"
          >
            <Link href="/contact">
              Book Discovery Call
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-gray-900 hover:bg-gray-950 h-16 px-10 text-lg"
          >
            <Link href="/joe">
              <MessageSquare className="mr-2 w-6 h-6" />
              Talk to Joe
            </Link>
          </Button>
        </div>

        <div className="text-sm text-gray-600 space-y-1">
          <p>Q1 2026: Limited to 4-5 agencies</p>
          <p className="text-accent">£1,500-2,000 (After Q1: £2,500-3,500)</p>
        </div>
      </motion.div>
    </section>
  );
}

