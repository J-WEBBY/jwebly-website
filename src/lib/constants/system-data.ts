export interface Workflow {
  id: string;
  title: string;
  category: "input" | "processing" | "output" | "coordination";
  description: string;
  timeSaved: string;
  connectsTo: string[]; // IDs of workflows this connects to
}

export const RECRUITMENT_WORKFLOWS: Workflow[] = [
  {
    id: "cv-screening",
    title: "CV Screening & Scoring",
    category: "input",
    description: "AI reads and scores CVs against role requirements",
    timeSaved: "10-12 hours/week",
    connectsTo: ["candidate-scoring", "interview-scheduling"],
  },
  {
    id: "candidate-scoring",
    title: "Candidate Ranking",
    category: "processing",
    description: "Scores and prioritizes candidates across multiple roles",
    timeSaved: "6-8 hours/week",
    connectsTo: ["interview-scheduling", "client-updates"],
  },
  {
    id: "interview-scheduling",
    title: "Interview Coordination",
    category: "coordination",
    description: "Automated scheduling across candidates, clients, recruiters",
    timeSaved: "8-10 hours/week",
    connectsTo: ["candidate-communication", "pipeline-reporting"],
  },
  {
    id: "candidate-communication",
    title: "Candidate Engagement",
    category: "output",
    description: "Personalized updates throughout placement process",
    timeSaved: "6-8 hours/week",
    connectsTo: ["pipeline-reporting"],
  },
  {
    id: "client-updates",
    title: "Client Communication",
    category: "output",
    description: "Automated client reporting and candidate submissions",
    timeSaved: "4-6 hours/week",
    connectsTo: ["pipeline-reporting"],
  },
  {
    id: "pipeline-reporting",
    title: "Pipeline Analytics",
    category: "coordination",
    description: "Real-time dashboards and performance tracking",
    timeSaved: "3-5 hours/week",
    connectsTo: ["compliance-tracking"],
  },
  {
    id: "compliance-tracking",
    title: "Compliance Automation",
    category: "processing",
    description: "Automated right-to-work checks and document verification",
    timeSaved: "2-4 hours/week",
    connectsTo: [],
  },
];

export const ACCOUNTING_WORKFLOWS: Workflow[] = [
  {
    id: "invoice-processing",
    title: "Invoice Processing",
    category: "input",
    description: "AI extracts and categorizes invoice data",
    timeSaved: "8-10 hours/week",
    connectsTo: ["expense-categorization", "client-reporting"],
  },
  {
    id: "expense-categorization",
    title: "Expense Management",
    category: "processing",
    description: "Automated expense categorization and approval routing",
    timeSaved: "6-8 hours/week",
    connectsTo: ["reconciliation", "client-reporting"],
  },
  {
    id: "reconciliation",
    title: "Bank Reconciliation",
    category: "processing",
    description: "Automated matching of transactions to invoices",
    timeSaved: "10-12 hours/week",
    connectsTo: ["financial-reporting", "anomaly-detection"],
  },
  {
    id: "client-reporting",
    title: "Client Reports",
    category: "output",
    description: "Automated monthly/quarterly client reports with insights",
    timeSaved: "6-8 hours/week",
    connectsTo: ["financial-reporting"],
  },
  {
    id: "financial-reporting",
    title: "Financial Dashboards",
    category: "coordination",
    description: "Real-time financial metrics and KPI tracking",
    timeSaved: "4-6 hours/week",
    connectsTo: ["tax-preparation"],
  },
  {
    id: "anomaly-detection",
    title: "Fraud Detection",
    category: "processing",
    description: "AI flags unusual transactions and patterns",
    timeSaved: "3-5 hours/week",
    connectsTo: ["financial-reporting"],
  },
  {
    id: "tax-preparation",
    title: "Tax Automation",
    category: "output",
    description: "Automated tax form preparation and compliance checks",
    timeSaved: "12-15 hours/week",
    connectsTo: [],
  },
];

export const LEGAL_WORKFLOWS: Workflow[] = [
  {
    id: "contract-review",
    title: "Contract Analysis",
    category: "input",
    description: "AI extracts key terms and identifies risks",
    timeSaved: "10-12 hours/week",
    connectsTo: ["risk-assessment", "client-communication"],
  },
  {
    id: "risk-assessment",
    title: "Risk Scoring",
    category: "processing",
    description: "Automated risk analysis and clause flagging",
    timeSaved: "6-8 hours/week",
    connectsTo: ["document-generation", "case-management"],
  },
  {
    id: "document-generation",
    title: "Document Automation",
    category: "output",
    description: "Automated contract and legal document generation",
    timeSaved: "8-10 hours/week",
    connectsTo: ["client-communication", "case-management"],
  },
  {
    id: "case-research",
    title: "Legal Research",
    category: "processing",
    description: "AI-powered case law and precedent research",
    timeSaved: "8-10 hours/week",
    connectsTo: ["case-management"],
  },
  {
    id: "case-management",
    title: "Matter Tracking",
    category: "coordination",
    description: "Automated deadline tracking and case status updates",
    timeSaved: "5-7 hours/week",
    connectsTo: ["client-communication", "billing-automation"],
  },
  {
    id: "client-communication",
    title: "Client Updates",
    category: "output",
    description: "Automated case progress updates and document sharing",
    timeSaved: "4-6 hours/week",
    connectsTo: ["billing-automation"],
  },
  {
    id: "billing-automation",
    title: "Time Tracking & Billing",
    category: "output",
    description: "Automated time entry and invoice generation",
    timeSaved: "6-8 hours/week",
    connectsTo: [],
  },
];

export const MARKETING_WORKFLOWS: Workflow[] = [
  {
    id: "campaign-monitoring",
    title: "Campaign Tracking",
    category: "input",
    description: "Real-time data aggregation from all ad platforms",
    timeSaved: "10-12 hours/week",
    connectsTo: ["performance-analysis", "client-reporting"],
  },
  {
    id: "performance-analysis",
    title: "Performance Intelligence",
    category: "processing",
    description: "AI analyzes campaigns and identifies optimization opportunities",
    timeSaved: "8-10 hours/week",
    connectsTo: ["budget-optimization", "client-reporting"],
  },
  {
    id: "budget-optimization",
    title: "Budget Allocation",
    category: "processing",
    description: "AI-powered budget reallocation based on performance",
    timeSaved: "6-8 hours/week",
    connectsTo: ["campaign-execution", "client-reporting"],
  },
  {
    id: "campaign-execution",
    title: "Campaign Automation",
    category: "coordination",
    description: "Automated ad creation, A/B testing, and deployment",
    timeSaved: "8-10 hours/week",
    connectsTo: ["content-generation"],
  },
  {
    id: "content-generation",
    title: "Content Creation",
    category: "output",
    description: "AI-assisted ad copy and creative generation",
    timeSaved: "10-12 hours/week",
    connectsTo: ["client-reporting"],
  },
  {
    id: "client-reporting",
    title: "Client Dashboards",
    category: "output",
    description: "Automated performance reports with insights",
    timeSaved: "6-8 hours/week",
    connectsTo: ["lead-scoring"],
  },
  {
    id: "lead-scoring",
    title: "Lead Intelligence",
    category: "processing",
    description: "AI scores and qualifies leads for clients",
    timeSaved: "5-7 hours/week",
    connectsTo: [],
  },
];

export const ESTATE_WORKFLOWS: Workflow[] = [
  {
    id: "property-matching",
    title: "Property Matching",
    category: "input",
    description: "AI matches buyers to properties based on preferences",
    timeSaved: "8-10 hours/week",
    connectsTo: ["buyer-alerts", "viewing-coordination"],
  },
  {
    id: "buyer-alerts",
    title: "Buyer Notifications",
    category: "output",
    description: "Automated property alerts with personalized details",
    timeSaved: "4-6 hours/week",
    connectsTo: ["viewing-coordination"],
  },
  {
    id: "viewing-coordination",
    title: "Viewing Scheduling",
    category: "coordination",
    description: "Automated viewing coordination across all parties",
    timeSaved: "6-8 hours/week",
    connectsTo: ["buyer-followup", "pipeline-management"],
  },
  {
    id: "buyer-followup",
    title: "Buyer Engagement",
    category: "output",
    description: "Automated post-viewing follow-ups and feedback collection",
    timeSaved: "5-7 hours/week",
    connectsTo: ["pipeline-management"],
  },
  {
    id: "pipeline-management",
    title: "Deal Pipeline",
    category: "coordination",
    description: "Automated pipeline tracking and opportunity scoring",
    timeSaved: "4-6 hours/week",
    connectsTo: ["offer-management", "reporting"],
  },
  {
    id: "offer-management",
    title: "Offer Processing",
    category: "processing",
    description: "Automated offer documentation and negotiation tracking",
    timeSaved: "6-8 hours/week",
    connectsTo: ["reporting"],
  },
  {
    id: "reporting",
    title: "Performance Analytics",
    category: "output",
    description: "Real-time dashboards for agents and managers",
    timeSaved: "3-5 hours/week",
    connectsTo: [],
  },
];

export const INDUSTRY_SYSTEMS = {
  recruitment: RECRUITMENT_WORKFLOWS,
  accounting: ACCOUNTING_WORKFLOWS,
  legal: LEGAL_WORKFLOWS,
  marketing: MARKETING_WORKFLOWS,
  estate: ESTATE_WORKFLOWS,
};

export const SYSTEM_TIMELINE = [
  {
    weeks: "1-2",
    title: "Discovery & System Design",
    description: "We don't assume—we diagnose your entire operation",
    tasks: [
      "Deep audit of all current workflows and pain points",
      "Map dependencies, handoffs, and integration requirements",
      "Design complete system architecture with data flows",
      "Define success metrics and KPIs for each workflow",
    ],
    yourTime: "6-8 hours",
    ourTime: "40-50 hours",
  },
  {
    weeks: "3-5",
    title: "Build & Integrate",
    description: "Build interconnected workflows as a unified system",
    tasks: [
      "Build 5-7 workflows with intelligent coordination",
      "Integrate ALL systems (ATS, CRM, email, calendars, etc.)",
      "Configure cross-workflow intelligence and data sharing",
      "Internal testing with edge cases and failure scenarios",
    ],
    yourTime: "4-6 hours",
    ourTime: "80-100 hours",
  },
  {
    weeks: "6-7",
    title: "Deploy & Train",
    description: "Phased rollout with comprehensive team training",
    tasks: [
      "Phased deployment to production (1-2 workflows at a time)",
      "Parallel testing alongside old processes for validation",
      "Comprehensive team training on entire system",
      "Documentation, SOPs, and troubleshooting guides",
    ],
    yourTime: "8-10 hours",
    ourTime: "40-50 hours",
  },
  {
    weeks: "8+",
    title: "Optimize & Scale",
    description: "60-day monitoring and continuous improvement",
    tasks: [
      "Real-time monitoring of all workflows and integrations",
      "Track time saved, accuracy, and user adoption metrics",
      "Continuous optimization based on performance data",
      "Plan for scaling to additional workflows or users",
    ],
    yourTime: "2-4 hours",
    ourTime: "30-40 hours",
  },
];

export const PRICING_TIERS = [
  {
    workflows: 5,
    basePrice: 3000,
    maxPrice: 3500,
    integrations: "2-3 systems",
    timeline: "6 weeks",
  },
  {
    workflows: 6,
    basePrice: 3500,
    maxPrice: 4000,
    integrations: "4-5 systems",
    timeline: "7 weeks",
  },
  {
    workflows: 7,
    basePrice: 4000,
    maxPrice: 5000,
    integrations: "6+ systems",
    timeline: "8 weeks",
  },
];

export const SYSTEM_FAQS = [
  {
    question: "How is this different from the pilot?",
    answer: "The pilot (£1,500-2,000) tests 2-3 isolated workflows to prove ROI. The Intelligent Automation System (£3,000-5,000) is your complete operational upgrade—5-7 workflows that work together as a unified system. Data flows between workflows automatically, eliminating manual handoffs and creating a coordinated operation instead of scattered tools.",
  },
  {
    question: "Do I need to do a pilot first?",
    answer: "No, you can go straight to the full system if you're confident in the value. However, many clients prefer starting with a pilot to prove ROI in their specific environment before scaling up. If you do upgrade from a pilot within 60 days, your pilot fee is fully credited toward the system cost.",
  },
  {
    question: "Can I add more workflows later?",
    answer: "Yes! The system is designed to scale. After your initial 5-7 workflows are deployed and optimized, we can add additional workflows at £600-800 per workflow. Each new workflow integrates with your existing system, leveraging the shared data layer and intelligence you've already built.",
  },
  {
    question: "What if my workflows are unique to my business?",
    answer: "Perfect—that's where intelligent automation shines. During the Week 1-2 discovery phase, we audit YOUR specific workflows, not generic templates. We design the system around your actual processes, decision logic, and business rules. The examples on this page are illustrations; your system will be 100% customized.",
  },
  {
    question: "How long until I see ROI?",
    answer: "Most clients see positive ROI within 12-16 weeks. The system typically saves 25-40 hours per week, which at £50/hour is £1,250-2,000/week in value. With an average system cost of £4,000, payback happens in 2-3 months, and you're saving £50,000-100,000 annually thereafter.",
  },
  {
    question: "What systems do you integrate with?",
    answer: "We integrate with whatever systems you currently use. Common examples: ATS (Bullhorn, JobAdder, Vincere), CRMs (HubSpot, Salesforce), accounting software (Xero, QuickBooks, Sage), practice management systems, calendars, email platforms, job boards, and more. If it has an API or supports automation, we can integrate it. If not, we'll find a workaround.",
  },
  {
    question: "Can this replace our current software?",
    answer: "No, and you wouldn't want it to. The system sits ON TOP of your existing tools, connecting them intelligently. You keep using your ATS, CRM, email, etc.—we just automate the workflows BETWEEN them. This means no expensive software migrations, no team retraining, and no data loss. We enhance what you have, not replace it.",
  },
  {
    question: "What happens if a workflow breaks?",
    answer: "The system includes built-in error handling, automated rollback, and real-time monitoring. If any workflow encounters an issue, it alerts you immediately and either retries automatically or escalates to human review. We also provide 60 days of optimization support after deployment, during which we fix any issues at no additional cost.",
  },
];

