"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ServicesCTA() {
  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Not Sure Which Service You Need?
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Book a 20-minute discovery call and we'll recommend the right 
          solution for your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-gray-100 h-14 px-8"
          >
            <Link href="/contact">
              Book Discovery Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-gray-900 hover:bg-gray-950 h-14 px-8"
          >
            <Link href="/joe">
              <MessageSquare className="mr-2 w-5 h-5" />
              Talk to Joe (AI)
            </Link>
          </Button>
        </div>

        <p className="text-sm text-gray-600 mt-8">
          Pilot: £1,500-2,000 · Limited to 4-5 agencies
        </p>
      </motion.div>
    </section>
  );
}

