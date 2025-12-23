"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Calendar, Linkedin } from "lucide-react";
import Link from "next/link";

const CONTACT_METHODS = [
  {
    icon: Calendar,
    title: "Book Discovery Call",
    description: "Schedule a 1-hour deep dive into your business and automation goals",
    action: "Book 1-hour slot",
    link: "/get-started",
    color: "#E5527B",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send detailed requirements or questions via email",
    action: "contact@jwebly.co.uk",
    link: "mailto:contact@jwebly.co.uk",
    color: "#3B82F6",
  },
  {
    icon: MessageSquare,
    title: "Talk to Joe",
    description: "Chat with our AI implementation partner 24/7 for instant answers",
    action: "Start conversation",
    link: "/",
    color: "#8B5CF6",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect with us professionally and see our latest updates",
    action: "Visit our page",
    link: "https://linkedin.com/company/jwebly",
    color: "#0A66C2",
  },
];

export function ContactMethods() {
  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Multiple Ways to Reach Us
          </h2>
          <p className="text-lg text-gray-400">
            Choose the contact method that works best for you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {CONTACT_METHODS.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.title}
                href={method.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 border border-gray-900 rounded-2xl bg-gradient-to-br from-background-elevated to-black hover:border-accent/50 transition-all"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${method.color}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: method.color }} />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {method.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {method.description}
                </p>

                <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                  <span>{method.action}</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Response time guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 border border-accent/20 rounded-2xl bg-accent/5 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-3">
            Our Response Time Commitment
          </h3>
          <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
            <span className="text-accent font-semibold">4-hour response time</span> during business hours 
            (Mon-Fri, 9am-6pm GMT). Messages sent after hours or on weekends receive responses by 10am the 
            next business day. Discovery calls typically scheduled within 48 hours of request.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

