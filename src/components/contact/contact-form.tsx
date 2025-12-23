"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "pilot",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        interest: "pilot",
        message: "",
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="contact-form" className="bg-black py-32 border-t border-gray-900">
        <div className="container max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center p-12 border border-accent rounded-2xl bg-accent/5"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-6"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              We've received your message and will respond within 4 hours during business hours. 
              Check your email for a confirmation.
            </p>
            <p className="text-sm text-gray-600">
              Expected response: Today if sent before 4pm GMT, otherwise next business day
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-3xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Send Us a Message
          </h2>
          <p className="text-lg text-gray-400">
            Tell us about your business and automation goals. We'll respond with next steps.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="border border-gray-900 rounded-2xl p-8 bg-gradient-to-br from-background-elevated to-black space-y-6"
        >
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Smith"
                className="w-full px-4 py-3 bg-black border border-gray-900 rounded-xl text-white placeholder-gray-600 focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@company.com"
                className="w-full px-4 py-3 bg-black border border-gray-900 rounded-xl text-white placeholder-gray-600 focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          {/* Company & Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Company Name *
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Acme Ltd"
                className="w-full px-4 py-3 bg-black border border-gray-900 rounded-xl text-white placeholder-gray-600 focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+44 20 1234 5678"
                className="w-full px-4 py-3 bg-black border border-gray-900 rounded-xl text-white placeholder-gray-600 focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          {/* Interest */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              I'm interested in *
            </label>
            <select
              required
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full px-4 py-3 bg-black border border-gray-900 rounded-xl text-white focus:border-accent focus:outline-none appearance-none cursor-pointer"
            >
              <option value="pilot">Implementation Pilot (£1.5K-2K)</option>
              <option value="system">Intelligent Automation System (£3K-5K)</option>
              <option value="agent">Autonomous AI Agent (£7K-12K)</option>
              <option value="unsure">Not sure - need guidance</option>
              <option value="custom">Custom requirements</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Tell us about your business *
            </label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="What decisions or processes are you looking to automate? What's your biggest workflow bottleneck? Any specific goals or constraints?"
              rows={6}
              className="w-full px-4 py-3 bg-black border border-gray-900 rounded-xl text-white placeholder-gray-600 focus:border-accent focus:outline-none resize-none"
            />
            <p className="text-xs text-gray-600 mt-2">
              The more detail you provide, the better we can help. Typical responses are 100-300 words.
            </p>
          </div>

          {/* Submit */}
          <div className="flex items-center justify-between pt-4">
            <p className="text-sm text-gray-600">
              * Required fields
            </p>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-accent hover:bg-accent/90 h-12 px-8 text-base font-semibold"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

