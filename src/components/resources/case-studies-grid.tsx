"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

const CASE_STUDIES = [
  {
    id: 1,
    type: "Client Portfolio",
    industry: "Recruitment",
    title: "TalentFlow Agency: 78% Reduction in Manual CV Screening",
    client: "TalentFlow Recruitment",
    description: "Mid-sized recruitment agency automated candidate evaluation, interview scheduling, and client communication. Pilot → System → Agent progression over 9 months.",
    results: {
      timeSaved: "38 hrs/week",
      roi: "612%",
      payback: "11 weeks",
    },
    highlights: [
      "Started with 2-workflow pilot (CV screening + scheduling)",
      "Scaled to 6-workflow system after 8 weeks",
      "Deployed autonomous agent for candidate evaluation",
      "Zero staff reductions - team refocused on relationship building",
    ],
    testimonial: "We went from drowning in CVs to making strategic placements. The agent handles 80% of initial screening autonomously.",
    image: "/case-studies/talentflow.jpg",
  },
  {
    id: 2,
    type: "Demo",
    industry: "Marketing",
    title: "Campaign Budget Optimizer: Live Demo & Simulation",
    client: "Demo Project",
    description: "Interactive demonstration of autonomous budget allocation agent. Shows real-time decision-making across 5 concurrent campaigns with varying performance.",
    results: {
      autonomy: "89%",
      accuracy: "94%",
      latency: "<2s",
    },
    highlights: [
      "Real-time budget reallocation based on ROAS",
      "Handles 200+ decisions per week autonomously",
      "Learns from outcomes and adjusts strategy",
      "Integration with Google Ads, Facebook, LinkedIn",
    ],
    demoUrl: "/demos/budget-optimizer",
    image: "/case-studies/demo-optimizer.jpg",
  },
  {
    id: 3,
    type: "Industry Study",
    industry: "Accounting",
    title: "Law Firm Invoice Processing: Multi-Firm Analysis",
    client: "15 Legal Practices Study",
    description: "Comparative analysis of invoice processing automation across 15 law firms. Traditional RPA vs Intelligent System vs Autonomous Agent.",
    results: {
      firms: "15 studied",
      avgSaving: "£84K/year",
      accuracy: "96.2%",
    },
    highlights: [
      "Agent-based systems 3.7x more effective than RPA",
      "Handle 91% of invoice discrepancies autonomously",
      "Average payback period: 14.2 weeks",
      "Highest ROI in firms with £500K-2M annual revenue",
    ],
    image: "/case-studies/legal-study.jpg",
  },
  {
    id: 4,
    type: "Client Portfolio",
    industry: "Accounting",
    title: "Precision Accounts: End-to-End Financial Automation",
    client: "Precision Accounting Ltd",
    description: "Boutique accounting firm (12 staff) implemented 7-workflow system covering invoice processing, reconciliation, reporting, and tax prep.",
    results: {
      timeSaved: "47 hrs/week",
      roi: "538%",
      payback: "13 weeks",
    },
    highlights: [
      "Processed 2,400+ invoices in first 6 months",
      "99.1% accuracy rate (vs 94% manual baseline)",
      "Client reporting time reduced from 6 hours to 20 minutes",
      "Team capacity increased 40% without hiring",
    ],
    testimonial: "We handle 40% more clients with the same team. The system freed us to do actual accounting, not data entry.",
    image: "/case-studies/precision.jpg",
  },
  {
    id: 5,
    type: "Demo",
    industry: "Recruitment",
    title: "Candidate Evaluation Agent: Interactive Walkthrough",
    client: "Demo Project",
    description: "Step-by-step demonstration of how the agent evaluates candidates, makes decisions, and learns from outcomes. Includes 6 example scenarios with full reasoning.",
    results: {
      scenarios: "6 examples",
      avgConfidence: "91%",
      edgeCases: "73% handled",
    },
    highlights: [
      "Shows agent's decision-making process in real-time",
      "Demonstrates learning from successful/failed hires",
      "Confidence threshold adjustment examples",
      "Edge case handling vs escalation logic",
    ],
    demoUrl: "/demos/candidate-agent",
    image: "/case-studies/demo-candidate.jpg",
  },
  {
    id: 6,
    type: "Industry Study",
    industry: "Marketing",
    title: "B2B Marketing Agencies: Automation Adoption Analysis",
    client: "23 Agencies Study",
    description: "18-month longitudinal study of marketing agencies implementing intelligent automation. Performance metrics, adoption patterns, ROI timelines.",
    results: {
      agencies: "23 studied",
      avgROI: "447%",
      adoption: "87%",
    },
    highlights: [
      "Agencies with 5-15 staff see highest ROI",
      "Campaign optimization saves 12-18 hrs/week on average",
      "87% still using systems after 18 months (high retention)",
      "Best results when starting with budget allocation workflow",
    ],
    image: "/case-studies/marketing-study.jpg",
  },
];

export function CaseStudiesGrid() {
  return (
    <section className="bg-black py-20">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="space-y-12">
          {CASE_STUDIES.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/resources/case-studies/${study.id}`}>
                <div className="border border-gray-900 rounded-2xl overflow-hidden hover:border-accent/50 transition-all bg-gradient-to-br from-background-elevated to-black">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Left: Content */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                          {study.type}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-background-elevated text-gray-400 border border-gray-900">
                          {study.industry}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                        {study.title}
                      </h2>

                      <p className="text-sm text-gray-600 mb-4">{study.client}</p>

                      <p className="text-gray-400 leading-relaxed mb-6">
                        {study.description}
                      </p>

                      {/* Results metrics */}
                      <div className="grid grid-cols-3 gap-4 p-4 bg-black rounded-xl border border-gray-900 mb-6">
                        {Object.entries(study.results).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-accent mb-1">{value}</div>
                            <div className="text-xs text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Demo button or read more */}
                      {study.demoUrl ? (
                        <div className="flex gap-3 mt-auto">
                          <button className="flex-1 px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
                            View Live Demo
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-accent font-semibold mt-auto group-hover:gap-3 transition-all">
                          Read full case study
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      )}
                    </div>

                    {/* Right: Highlights */}
                    <div className="flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-white mb-3">Key Highlights:</h3>
                        <ul className="space-y-2">
                          {study.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                              <TrendingUp className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {study.testimonial && (
                        <div className="mt-auto p-4 bg-black rounded-xl border border-gray-900">
                          <div className="text-sm text-gray-400 italic leading-relaxed">
                            "{study.testimonial}"
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

