"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText, Calendar, MessageSquare, TrendingUp, Calculator, Scale, Home, AlertCircle, Target } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Industry-specific task data
const INDUSTRY_TASKS = {
  recruitment: [
    {
      icon: FileText,
      title: "CV Screening & Candidate Matching",
      description: "Screen 200+ CVs daily, match candidates to roles with 85%+ accuracy, and proactively alert on high-priority placements.",
    },
    {
      icon: Calendar,
      title: "Interview Scheduling & Coordination",
      description: "Automatically coordinate interview times across candidates, clients, and internal team calendars with zero double-bookings.",
    },
    {
      icon: MessageSquare,
      title: "Candidate Communication & Follow-ups",
      description: "Send personalized updates, chase candidate responses, and maintain engagement throughout the placement process.",
    },
    {
      icon: TrendingUp,
      title: "Pipeline Management & Reporting",
      description: "Track candidate progression, identify bottlenecks, and generate weekly performance reports for client review.",
    },
  ],
  accounting: [
    {
      icon: FileText,
      title: "Invoice Processing & Financial Analysis",
      description: "Process invoices automatically, categorize expenses, and flag anomalies in real-time for client review.",
    },
    {
      icon: Calculator,
      title: "Tax Preparation & Compliance Checks",
      description: "Prepare tax documents, cross-reference against current regulations, and alert on potential compliance issues.",
    },
    {
      icon: MessageSquare,
      title: "Client Communication & Updates",
      description: "Send quarterly reports, respond to client queries about accounts, and schedule review meetings automatically.",
    },
    {
      icon: TrendingUp,
      title: "Financial Forecasting & Insights",
      description: "Analyze client spending patterns, predict cash flow trends, and generate actionable financial recommendations.",
    },
  ],
  legal: [
    {
      icon: FileText,
      title: "Document Review & Case Research",
      description: "Review contracts, extract key terms, research precedents, and alert on deadline risks across all active cases.",
    },
    {
      icon: Scale,
      title: "Legal Compliance Monitoring",
      description: "Monitor regulatory changes, assess impact on client cases, and flag potential compliance issues before they escalate.",
    },
    {
      icon: Calendar,
      title: "Case Management & Deadlines",
      description: "Track court dates, filing deadlines, and client meetings with automated reminders and escalation protocols.",
    },
    {
      icon: MessageSquare,
      title: "Client Communication & Billing",
      description: "Generate case updates, coordinate client consultations, and prepare detailed billing statements with time tracking.",
    },
  ],
  estate: [
    {
      icon: Home,
      title: "Property Matching & Market Analysis",
      description: "Match buyers to properties, analyze market trends, and proactively alert on new listings matching client criteria.",
    },
    {
      icon: Calendar,
      title: "Viewing Scheduling & Coordination",
      description: "Coordinate property viewings, manage availability across multiple properties, and send automated confirmations to all parties.",
    },
    {
      icon: MessageSquare,
      title: "Client Communication & Follow-ups",
      description: "Send property updates, chase buyer decisions, and maintain engagement throughout the sales process.",
    },
    {
      icon: TrendingUp,
      title: "Sales Pipeline & Performance Tracking",
      description: "Track offer status, identify bottlenecks in sales process, and generate weekly performance reports.",
    },
  ],
  healthcare: [
    {
      icon: Calendar,
      title: "Patient Scheduling & Care Coordination",
      description: "Optimize appointment scheduling, coordinate care plans, and alert on patient follow-ups and medication reminders.",
    },
    {
      icon: FileText,
      title: "Medical Records & Documentation",
      description: "Process patient records, extract key medical history, and ensure documentation compliance across all appointments.",
    },
    {
      icon: AlertCircle,
      title: "Proactive Patient Monitoring",
      description: "Monitor patient check-ins, flag missed appointments, and send automated wellness reminders and health tips.",
    },
    {
      icon: TrendingUp,
      title: "Practice Analytics & Insights",
      description: "Track patient outcomes, identify care gaps, and generate monthly practice performance reports.",
    },
  ],
  marketing: [
    {
      icon: TrendingUp,
      title: "Campaign Optimization & Reporting",
      description: "Analyze campaign performance, optimize ad spend, and proactively alert on opportunities or underperforming campaigns.",
    },
    {
      icon: FileText,
      title: "Content Analysis & Recommendations",
      description: "Review content performance across channels, identify top-performing formats, and suggest optimization strategies.",
    },
    {
      icon: MessageSquare,
      title: "Client Communication & Updates",
      description: "Generate weekly performance reports, respond to client queries, and schedule strategy review meetings.",
    },
    {
      icon: Target,
      title: "Audience Insights & Targeting",
      description: "Analyze audience behavior, identify new targeting opportunities, and predict campaign ROI before launch.",
    },
  ],
};

const INDUSTRIES = [
  {
    id: "recruitment",
    category: "RECRUITMENT",
    title: "Operational Intelligence for Recruitment Agencies",
    description: "AI agents that understand your hiring workflows and candidate patterns.",
    tasks: INDUSTRY_TASKS.recruitment,
  },
  {
    id: "accounting",
    category: "ACCOUNTING",
    title: "Operational Intelligence for Accounting Firms",
    description: "AI agents trained on your client data and accounting workflows.",
    tasks: INDUSTRY_TASKS.accounting,
  },
  {
    id: "legal",
    category: "LEGAL",
    title: "Operational Intelligence for Law Firms",
    description: "AI agents that understand case law, client history, and legal workflows.",
    tasks: INDUSTRY_TASKS.legal,
  },
  {
    id: "estate",
    category: "ESTATE",
    title: "Operational Intelligence for Estate Agents",
    description: "AI agents trained on property data, market trends, and client preferences.",
    tasks: INDUSTRY_TASKS.estate,
  },
  {
    id: "healthcare",
    category: "HEALTHCARE",
    title: "Operational Intelligence for Private Healthcare",
    description: "AI agents that understand patient data, appointment workflows, and care protocols.",
    tasks: INDUSTRY_TASKS.healthcare,
  },
  {
    id: "marketing",
    category: "MARKETING",
    title: "Operational Intelligence for Marketing Agencies",
    description: "AI agents trained on campaign data, client goals, and performance metrics.",
    tasks: INDUSTRY_TASKS.marketing,
  },
];

// Chat Task Component - AI Agent Chat Style
function ChatTask({ task }: { task: typeof INDUSTRY_TASKS.recruitment[0] }) {
  const Icon = task.icon;

  return (
    <div className="w-full space-y-4">
      {/* AI Agent Message */}
      <div className="flex items-start gap-3">
        {/* AI Avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-scale-cyan flex items-center justify-center flex-shrink-0">
          <MessageSquare className="w-4 h-4 text-white" />
        </div>
        {/* AI Message Bubble */}
        <div className="flex-1">
          <div className="bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
            <div className="flex items-center gap-2 mb-2">
              <Icon className="w-4 h-4 text-accent" />
              <h4 className="text-sm font-semibold text-white">{task.title}</h4>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">{task.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Industry Card Component
function IndustryCard({ industry }: { industry: typeof INDUSTRIES[0] }) {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaskIndex((prev) => (prev + 1) % industry.tasks.length);
    }, 6000); // Change task every 6 seconds (slower)

    return () => clearInterval(interval);
  }, [industry.tasks.length]);

  return (
    <div className="bg-gray-100 rounded-2xl p-8 border border-gray-300 h-full flex flex-col">
      {/* Category Label */}
      <div className="text-xs font-semibold text-gray-600 mb-2 tracking-widest uppercase">
        {industry.category}
      </div>

      {/* Card Title */}
      <h3 className="text-3xl font-bold text-black mb-3 leading-tight">
        {industry.title}
      </h3>

      {/* Description */}
      <p className="text-lg text-gray-600 mb-6">
        {industry.description}
      </p>

      {/* Animated Chat Interface */}
      <div className="bg-[#0A0A0A] rounded-xl border border-gray-800 p-4 md:p-6 min-h-[250px] md:min-h-[300px] flex-1 flex flex-col justify-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTaskIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <ChatTask task={industry.tasks[currentTaskIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function AIAgentsSection() {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);

  // Pairs: [recruitment, accounting], [legal, estate], [healthcare, marketing]
  const industryPairs = [
    [INDUSTRIES[0], INDUSTRIES[1]], // recruitment, accounting
    [INDUSTRIES[2], INDUSTRIES[3]], // legal, estate
    [INDUSTRIES[4], INDUSTRIES[5]], // healthcare, marketing
  ];

  // Removed auto-advance - user controls via button

  const currentPair = industryPairs[currentPairIndex];

  const handleNext = () => {
    setCurrentPairIndex((prev) => (prev + 1) % industryPairs.length);
  };

  return (
    <section className="bg-black py-16 md:py-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Top Section - Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="text-xs font-semibold text-gray-600 mb-4 tracking-widest uppercase">
            APPLY AI
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-4 md:mb-6 leading-tight">
            Custom AI Agent
          </h2>
          <p className="text-base md:text-xl lg:text-2xl text-gray-400 mb-6 md:mb-8 max-w-4xl mx-auto px-4">
            Bespoke Agentic solution, trained on your data, reasoning autonomously
          </p>
          
          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 text-xs md:text-sm lg:text-base text-gray-400 mb-6 md:mb-8 px-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
              <span>Trained on proprietary knowledge</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
              <span>Multi-modal integration (text, voice, data)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
              <span>Proactive alerting</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
              <span>90-day training period</span>
            </div>
          </div>

          {/* Book a Demo Button */}
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-gray-100 h-12 px-6 text-base font-medium"
          >
            <Link href="/contact">
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>

        {/* Two Cards - Side by Side */}
        <div className="relative">
          <AnimatePresence mode="wait">
              <motion.div
                key={currentPairIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-4 md:gap-6"
              >
              {/* Left Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <IndustryCard industry={currentPair[0]} />
              </motion.div>

              {/* Right Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <IndustryCard industry={currentPair[1]} />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Next Button - Right Side */}
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 lg:translate-x-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 transition-colors z-10 shadow-lg"
            aria-label="Next"
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        </div>

        {/* Carousel Navigation Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {industryPairs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPairIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentPairIndex ? "bg-white" : "bg-gray-900"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
