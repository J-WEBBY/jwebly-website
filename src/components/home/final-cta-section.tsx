"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-12">
          Ready to Transform
          <br />
          Your Operations?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-gray-100 h-16 px-10 text-lg font-medium"
          >
            <Link href="/contact">
              Book Free Discovery Call
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

        <p className="text-gray-600">
          Pilot: £1,500-2,000 · Limited to 4-5 agencies
        </p>
      </motion.div>
    </section>
  );
}

