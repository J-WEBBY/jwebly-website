// Industry-specific workflow examples
export const INDUSTRY_WORKFLOWS: Record<string, Array<{
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  howItWorks: string[];
  timeSaved: string;
  graphic: string;
}>> = {
  recruitment: [
    {
      id: "cv-screening",
      title: "CV Screening Automation",
      icon: "FileText",
      shortDescription: "AI reads CVs like your best recruiter",
      fullDescription: "AI reads CVs like your best recruiter, scoring candidates against role requirements with 85%+ accuracy.",
      howItWorks: [
        "CV arrives via email or ATS",
        "AI extracts skills, experience, and qualifications",
        "Scores against role requirements and updates ATS",
      ],
      timeSaved: "10-12 hours/week",
      graphic: "cv-flow",
    },
    {
      id: "interview-scheduling",
      title: "Interview Scheduling",
      icon: "Calendar",
      shortDescription: "Automated calendar coordination",
      fullDescription: "Automatically coordinate interview times across candidates, clients, and internal team calendars with zero double-bookings.",
      howItWorks: [
        "Check availability across all calendars",
        "Send booking options to candidate",
        "Confirm and send calendar invites automatically",
      ],
      timeSaved: "8-10 hours/week",
      graphic: "calendar-flow",
    },
    {
      id: "candidate-followup",
      title: "Candidate Follow-up",
      icon: "MessageSquare",
      shortDescription: "Smart automated communication",
      fullDescription: "Send personalized updates, chase candidate responses, and maintain engagement throughout the placement process.",
      howItWorks: [
        "Track candidate status and progression",
        "Send personalized follow-up messages",
        "Escalate to recruiter if no response after 3 days",
      ],
      timeSaved: "6-8 hours/week",
      graphic: "message-flow",
    },
  ],
  accounting: [
    {
      id: "invoice-processing",
      title: "Invoice Processing",
      icon: "FileText",
      shortDescription: "Automated invoice extraction and categorization",
      fullDescription: "AI extracts data from invoices, categorizes expenses, and updates your accounting system automatically.",
      howItWorks: [
        "Invoice arrives via email or upload",
        "AI extracts amounts, dates, vendors, and line items",
        "Categorizes expenses and updates accounting software",
      ],
      timeSaved: "12-15 hours/week",
      graphic: "invoice-flow",
    },
    {
      id: "expense-approval",
      title: "Expense Approval Workflow",
      icon: "CheckCircle",
      shortDescription: "Smart expense review and approval",
      fullDescription: "Automatically review expense claims against company policies and flag exceptions for human review.",
      howItWorks: [
        "Employee submits expense claim",
        "AI checks against policy rules",
        "Auto-approve compliant claims or flag for review",
      ],
      timeSaved: "8-10 hours/week",
      graphic: "expense-flow",
    },
    {
      id: "client-communication",
      title: "Client Communication",
      icon: "MessageSquare",
      shortDescription: "Automated client updates and reminders",
      fullDescription: "Send personalized updates on financial reports, tax deadlines, and important milestones to keep clients informed.",
      howItWorks: [
        "Track client deadlines and milestones",
        "Generate personalized update messages",
        "Send reminders and follow-ups automatically",
      ],
      timeSaved: "6-8 hours/week",
      graphic: "client-flow",
    },
  ],
  legal: [
    {
      id: "document-review",
      title: "Document Review",
      icon: "FileText",
      shortDescription: "AI-powered legal document analysis",
      fullDescription: "Review contracts, extract key terms, and flag potential issues automatically to save hours of manual review.",
      howItWorks: [
        "Document uploaded to system",
        "AI extracts key terms, dates, and obligations",
        "Flags potential issues and generates summary",
      ],
      timeSaved: "12-15 hours/week",
      graphic: "document-flow",
    },
    {
      id: "client-intake",
      title: "Client Intake",
      icon: "UserPlus",
      shortDescription: "Automated client onboarding",
      fullDescription: "Streamline new client intake with automated form processing, conflict checks, and initial document generation.",
      howItWorks: [
        "Client submits intake form",
        "AI processes information and checks conflicts",
        "Generates engagement letters and initial documents",
      ],
      timeSaved: "8-10 hours/week",
      graphic: "intake-flow",
    },
    {
      id: "deadline-tracking",
      title: "Deadline Tracking",
      icon: "Calendar",
      shortDescription: "Automated deadline management",
      fullDescription: "Track court dates, filing deadlines, and important milestones with automated reminders and alerts.",
      howItWorks: [
        "Track all case deadlines and dates",
        "AI monitors calendar and sends reminders",
        "Escalate urgent deadlines to attorneys",
      ],
      timeSaved: "6-8 hours/week",
      graphic: "deadline-flow",
    },
  ],
  marketing: [
    {
      id: "campaign-reporting",
      title: "Campaign Reporting",
      icon: "FileText",
      shortDescription: "Automated performance reports",
      fullDescription: "Generate comprehensive campaign performance reports automatically, pulling data from multiple platforms.",
      howItWorks: [
        "Collect data from all marketing platforms",
        "AI analyzes performance metrics",
        "Generate formatted reports and send to clients",
      ],
      timeSaved: "10-12 hours/week",
      graphic: "reporting-flow",
    },
    {
      id: "client-updates",
      title: "Client Updates",
      icon: "MessageSquare",
      shortDescription: "Automated client communication",
      fullDescription: "Send personalized campaign updates, performance insights, and recommendations to clients automatically.",
      howItWorks: [
        "Track campaign milestones and performance",
        "Generate personalized update messages",
        "Send scheduled reports and insights",
      ],
      timeSaved: "8-10 hours/week",
      graphic: "update-flow",
    },
    {
      id: "proposal-generation",
      title: "Proposal Generation",
      icon: "FileText",
      shortDescription: "AI-powered proposal creation",
      fullDescription: "Generate professional marketing proposals based on client briefs, past campaigns, and pricing templates.",
      howItWorks: [
        "Client requirements captured",
        "AI generates proposal using templates and past data",
        "Review and customize before sending",
      ],
      timeSaved: "6-8 hours/week",
      graphic: "proposal-flow",
    },
  ],
  estate: [
    {
      id: "property-matching",
      title: "Property Matching",
      icon: "Home",
      shortDescription: "AI matches clients to properties",
      fullDescription: "Analyze client preferences and property listings to automatically match buyers with suitable properties.",
      howItWorks: [
        "Client preferences captured in CRM",
        "AI analyzes property listings and client criteria",
        "Generates ranked matches and sends to client",
      ],
      timeSaved: "10-12 hours/week",
      graphic: "matching-flow",
    },
    {
      id: "viewing-scheduling",
      title: "Viewing Scheduling",
      icon: "Calendar",
      shortDescription: "Automated viewing coordination",
      fullDescription: "Coordinate property viewings across multiple clients, agents, and property availability with zero conflicts.",
      howItWorks: [
        "Check property and agent availability",
        "Send viewing options to clients",
        "Confirm and send calendar invites automatically",
      ],
      timeSaved: "8-10 hours/week",
      graphic: "viewing-flow",
    },
    {
      id: "lead-nurturing",
      title: "Lead Nurturing",
      icon: "MessageSquare",
      shortDescription: "Automated lead follow-up",
      fullDescription: "Maintain engagement with property leads through personalized updates on new listings and market insights.",
      howItWorks: [
        "Track lead status and preferences",
        "Match new listings to lead criteria",
        "Send personalized property updates automatically",
      ],
      timeSaved: "6-8 hours/week",
      graphic: "lead-flow",
    },
  ],
  "professional-services": [
    {
      id: "proposal-generation",
      title: "Proposal Generation",
      icon: "FileText",
      shortDescription: "AI-powered proposal creation",
      fullDescription: "Generate professional proposals based on client requirements, past projects, and pricing templates.",
      howItWorks: [
        "Client requirements captured",
        "AI generates proposal using templates and past data",
        "Review and customize before sending",
      ],
      timeSaved: "10-12 hours/week",
      graphic: "proposal-flow",
    },
    {
      id: "client-onboarding",
      title: "Client Onboarding",
      icon: "UserPlus",
      shortDescription: "Automated onboarding workflow",
      fullDescription: "Streamline new client onboarding with automated document collection, contract generation, and welcome sequences.",
      howItWorks: [
        "New client information captured",
        "Generate contracts and documents",
        "Send onboarding sequence automatically",
      ],
      timeSaved: "8-10 hours/week",
      graphic: "onboarding-flow",
    },
    {
      id: "project-updates",
      title: "Project Updates",
      icon: "MessageSquare",
      shortDescription: "Automated client reporting",
      fullDescription: "Generate and send regular project updates to clients, keeping them informed of progress and milestones.",
      howItWorks: [
        "Track project milestones and progress",
        "Generate update reports automatically",
        "Send to clients on schedule",
      ],
      timeSaved: "6-8 hours/week",
      graphic: "update-flow",
    },
  ],
  manufacturing: [
    {
      id: "order-processing",
      title: "Order Processing",
      icon: "Package",
      shortDescription: "Automated order fulfillment",
      fullDescription: "Process orders, update inventory, and generate shipping labels automatically from incoming orders.",
      howItWorks: [
        "Order arrives via email or system",
        "AI extracts order details and checks inventory",
        "Generates shipping labels and updates systems",
      ],
      timeSaved: "12-15 hours/week",
      graphic: "order-flow",
    },
    {
      id: "quality-control",
      title: "Quality Control Logging",
      icon: "CheckCircle",
      shortDescription: "Automated QC documentation",
      fullDescription: "Automatically log quality control data, flag issues, and generate compliance reports.",
      howItWorks: [
        "QC data entered or captured",
        "AI analyzes against quality standards",
        "Flag exceptions and generate reports",
      ],
      timeSaved: "8-10 hours/week",
      graphic: "qc-flow",
    },
    {
      id: "supplier-communication",
      title: "Supplier Communication",
      icon: "MessageSquare",
      shortDescription: "Automated supplier coordination",
      fullDescription: "Send purchase orders, track deliveries, and follow up with suppliers automatically.",
      howItWorks: [
        "Track inventory levels and reorder points",
        "Generate purchase orders automatically",
        "Follow up on deliveries and confirmations",
      ],
      timeSaved: "6-8 hours/week",
      graphic: "supplier-flow",
    },
  ],
  "ecommerce-retail": [
    {
      id: "customer-service",
      title: "Customer Service Automation",
      icon: "MessageSquare",
      shortDescription: "AI-powered customer support",
      fullDescription: "Handle common customer inquiries, process returns, and escalate complex issues automatically.",
      howItWorks: [
        "Customer inquiry arrives",
        "AI analyzes and responds to common questions",
        "Escalate complex issues to human agents",
      ],
      timeSaved: "15-20 hours/week",
      graphic: "support-flow",
    },
    {
      id: "inventory-management",
      title: "Inventory Management",
      icon: "Package",
      shortDescription: "Smart inventory tracking",
      fullDescription: "Monitor stock levels, predict demand, and generate reorder alerts automatically.",
      howItWorks: [
        "Track sales and inventory levels",
        "AI predicts demand based on trends",
        "Generate reorder alerts and purchase orders",
      ],
      timeSaved: "10-12 hours/week",
      graphic: "inventory-flow",
    },
    {
      id: "order-tracking",
      title: "Order Tracking Updates",
      icon: "Truck",
      shortDescription: "Automated shipping notifications",
      fullDescription: "Send personalized order updates, tracking information, and delivery confirmations to customers.",
      howItWorks: [
        "Track order status and shipping",
        "Generate personalized update messages",
        "Send notifications at each milestone",
      ],
      timeSaved: "6-8 hours/week",
      graphic: "tracking-flow",
    },
  ],
  "hospitality-events": [
    {
      id: "booking-management",
      title: "Booking Management",
      icon: "Calendar",
      shortDescription: "Automated reservation handling",
      fullDescription: "Process bookings, check availability, send confirmations, and manage cancellations automatically.",
      howItWorks: [
        "Booking request arrives",
        "AI checks availability and pricing",
        "Confirm booking and send details automatically",
      ],
      timeSaved: "12-15 hours/week",
      graphic: "booking-flow",
    },
    {
      id: "guest-communication",
      title: "Guest Communication",
      icon: "MessageSquare",
      shortDescription: "Automated guest updates",
      fullDescription: "Send pre-arrival information, check-in reminders, and post-stay follow-ups to enhance guest experience.",
      howItWorks: [
        "Track booking dates and guest preferences",
        "Generate personalized messages",
        "Send at appropriate times automatically",
      ],
      timeSaved: "8-10 hours/week",
      graphic: "guest-flow",
    },
    {
      id: "event-coordination",
      title: "Event Coordination",
      icon: "Users",
      shortDescription: "Automated event planning",
      fullDescription: "Coordinate event details, send invitations, track RSVPs, and manage vendor communications.",
      howItWorks: [
        "Event details captured",
        "Generate invitations and send to guest list",
        "Track RSVPs and send reminders",
      ],
      timeSaved: "10-12 hours/week",
      graphic: "event-flow",
    },
  ],
  "education-training": [
    {
      id: "student-enrollment",
      title: "Student Enrollment",
      icon: "UserPlus",
      shortDescription: "Automated enrollment processing",
      fullDescription: "Process applications, verify documents, send acceptance letters, and manage enrollment workflows.",
      howItWorks: [
        "Application submitted",
        "AI verifies documents and requirements",
        "Generate acceptance letters and enrollment info",
      ],
      timeSaved: "12-15 hours/week",
      graphic: "enrollment-flow",
    },
    {
      id: "course-scheduling",
      title: "Course Scheduling",
      icon: "Calendar",
      shortDescription: "Automated class coordination",
      fullDescription: "Coordinate class schedules, manage room bookings, and send schedule updates to students and instructors.",
      howItWorks: [
        "Check instructor and room availability",
        "Generate optimal schedules",
        "Send updates to all stakeholders",
      ],
      timeSaved: "8-10 hours/week",
      graphic: "schedule-flow",
    },
    {
      id: "student-communication",
      title: "Student Communication",
      icon: "MessageSquare",
      shortDescription: "Automated student updates",
      fullDescription: "Send course reminders, assignment deadlines, grade notifications, and important announcements.",
      howItWorks: [
        "Track course schedules and deadlines",
        "Generate personalized messages",
        "Send updates automatically",
      ],
      timeSaved: "6-8 hours/week",
      graphic: "student-flow",
    },
  ],
};

// Default workflows (recruitment)
export const PILOT_WORKFLOWS = INDUSTRY_WORKFLOWS.recruitment;

// Industry definitions - Phase 2 scope: 5 industries
export type IndustryId = "recruitment" | "accounting" | "legal" | "marketing" | "estate";

export const INDUSTRIES = [
  {
    id: "recruitment",
    name: "Recruitment Agencies",
    description: "CV screening, interview scheduling, candidate follow-up",
  },
  {
    id: "accounting",
    name: "Financial & Accounting Services",
    description: "Invoice processing, expense approval, client communication",
  },
  {
    id: "legal",
    name: "Law Firms",
    description: "Document review, client intake, deadline tracking",
  },
  {
    id: "marketing",
    name: "Marketing Agencies",
    description: "Campaign reporting, client updates, proposal generation",
  },
  {
    id: "estate",
    name: "Real Estate & Property Management",
    description: "Property matching, viewing scheduling, lead nurturing",
  },
] as const;

export const TIMELINE_WEEKS = [
  {
    week: 1,
    title: "Discovery & Audit",
    tasks: [
      "20-minute discovery call",
      "Audit current workflows",
      "Identify automation opportunities",
      "Define success metrics",
    ],
    yourTime: "2-3 hours",
    ourTime: "15-20 hours",
  },
  {
    week: 2,
    title: "Build & Integrate",
    tasks: [
      "Build 2-3 workflow automations",
      "Integrate with your systems (ATS, CRM, email)",
      "Configure AI models on your data",
      "Internal testing and refinement",
    ],
    yourTime: "1-2 hours",
    ourTime: "25-30 hours",
  },
  {
    week: 3,
    title: "Deploy & Train",
    tasks: [
      "Deploy to production environment",
      "Run parallel testing (old vs new)",
      "Train your team on the system",
      "Documentation and handoff",
    ],
    yourTime: "3-4 hours",
    ourTime: "15-20 hours",
  },
  {
    week: 4,
    title: "Monitor & Optimize",
    tasks: [
      "Monitor system performance",
      "Track time saved and accuracy",
      "Fix any issues that arise",
      "Generate ROI report",
    ],
    yourTime: "1-2 hours",
    ourTime: "10-15 hours",
  },
];

export const COMPARISON_DATA = {
  without: {
    title: "Without Pilot",
    points: [
      { icon: "📋", label: "Manual process", detail: "Everything done by hand" },
      { icon: "⏱", label: "12+ hours/week", detail: "Time spent on repetitive tasks" },
      { icon: "😫", label: "Repetitive work", detail: "Same tasks every day" },
      { icon: "🐌", label: "3-5 days", detail: "Time to complete workflows" },
      { icon: "❌", label: "Human error", detail: "Mistakes happen when tired" },
    ],
  },
  with: {
    title: "With Pilot",
    points: [
      { icon: "🤖", label: "Automated", detail: "AI handles routine tasks" },
      { icon: "⏱", label: "2 hours/week", detail: "Just oversight and edge cases" },
      { icon: "😊", label: "Strategic focus", detail: "Time for client relationships" },
      { icon: "⚡", label: "Same day", detail: "Workflows complete in hours" },
      { icon: "✓", label: "85%+ accurate", detail: "Consistent quality" },
    ],
  },
};

export const PRICING_FAQS = [
  {
    question: "What's included in the pilot?",
    answer: "You get 2-3 fully automated workflows, integration with 2-3 of your existing systems (ATS, CRM, email, calendar), 30-day monitoring period, and a detailed ROI report with recommendations for scaling.",
  },
  {
    question: "What determines the price—£1,500 vs £2,000?",
    answer: "£1,500 covers 2 workflows with 2 integrations. £2,000 includes 3 workflows with 3 integrations. We'll recommend the right scope during the discovery call based on your biggest pain points.",
  },
  {
    question: "Can I upgrade to the full Intelligent Automation System or Custom AI Agent?",
    answer: "Yes! The pilot is designed as a 'Try Before You Buy' for both services. If you upgrade within 60 days, your pilot fee (£1,500-2,000) is fully credited toward either the Intelligent Automation System (£3,000-5,000) or Custom AI Agent. This makes the pilot effectively free if you scale up.",
  },
  {
    question: "What if the pilot doesn't deliver results?",
    answer: "During the discovery call, we'll assess if automation is right for your use case. If we don't believe we can save you 10+ hours per week, we'll tell you upfront. We only take on pilots we're confident will succeed.",
  },
];

export const PILOT_FAQS = [
  {
    question: "Do I need technical knowledge to work with you?",
    answer: "No. We handle all technical implementation. You provide business context (how your workflows currently work), we build and deploy the automation. Training is included.",
  },
  {
    question: "How long until I see results?",
    answer: "Most clients see time savings within the first week of deployment (Week 3). By Week 4, you'll have concrete metrics on hours saved and accuracy improvements.",
  },
  {
    question: "What systems do you integrate with?",
    answer: "We integrate with major ATS platforms (Bullhorn, JobAdder, Vincere), CRMs (HubSpot, Salesforce), email (Gmail, Outlook), calendars (Google Calendar, Outlook Calendar), and job boards. If you use something else, we can likely integrate it.",
  },
  {
    question: "Can this work for my industry?",
    answer: "Yes! We work with recruitment agencies, financial & accounting services, real estate, professional services (consulting, marketing, creative), manufacturing, e-commerce & retail, hospitality & events, and education & training. The pilot adapts to your industry's specific workflows. During discovery, we'll assess fit. If we can't help, we'll tell you honestly.",
  },
  {
    question: "What happens after the 4 weeks?",
    answer: "You get a detailed ROI report showing time saved, accuracy metrics, and recommendations. You can: (1) Keep the pilot as-is with optional monthly support (£250-600/month), (2) Upgrade to the full Intelligent Automation System or Custom AI Agent (pilot fee fully credited if within 60 days), or (3) Part ways—no hard feelings. Our goal is to convert you to the full service.",
  },
  {
    question: "How is this different from Zapier or Make?",
    answer: "Zapier/Make execute predefined tasks ('when X happens, do Y'). Our pilot uses AI to make decisions ('if this CV scores 85%+, prioritize it; if 60-84%, flag for review'). It's intelligent automation, not just task automation.",
  },
];

export const PILOT_STATS = [
  {
    value: 12,
    suffix: "+",
    label: "Hours Saved",
    sublabel: "Per Week",
  },
  {
    value: 85,
    suffix: "%",
    label: "Accuracy",
    sublabel: "Rate",
  },
  {
    value: 2,
    suffix: "-3",
    label: "Weeks to",
    sublabel: "Deploy",
  },
];

