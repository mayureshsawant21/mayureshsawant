/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CaseStudy, Experience, Achievement, SkillCategory } from "./types";

export const PERSONAL_INFO = {
  name: "Mayuresh Sawant",
  tagline: "Top Digital Marketing Manager",
  location: "Mumbai, India",
  email: "sawantmayuresh3@gmail.com",
  phone: "+91 9869078800",
  linkedin: "https://www.linkedin.com/in/mayureshsawant21/",
  bio: "Results-driven Performance Marketing Manager with 6+ years of proven success executing 360° digital campaigns and cross-border marketing. Specializing in high-ROI lead generation, social media exponential growth, AI automation, and luxury real estate digital operations. Adept at managing multimillion rupee advertising spends, leading cross-functional teams, and deploying cutting-edge AI pipelines to reduce creative production cycles and automate analysis reporting.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Paid Advertising & Platforms",
    skills: ["Google Ads", "Meta Ads", "Taboola", "Yahoo Native", "Programmatic Ads", "LinkedIn Campaign Manager", "99acres & Magicbricks Property Portals"],
  },
  {
    category: "AI & Marketing Automation",
    skills: ["Claude 3.5 & GPT-4 Prompt Engineering", "Midjourney & Runway ML", "HeyGen AI Video Production", "Make.com & Zapier integrations", "Cursor (AI-driven development)", "In-house WhatsApp & CRM API platforms"],
  },
  {
    category: "Analytics & tools",
    skills: ["Google Analytics 4 (GA4)", "Google Tag Manager", "Salesforce CRM Tracking", "Buffer & Hootsuite", "Mailchimp", "SEMrush", "Google Data Studio / Looker Studio"],
  },
  {
    category: "Design & Development",
    skills: ["WordPress Website Building", "Landing Page UX/UI Optimization", "Canva Team Management", "Photoshop", "Premiere Pro Video Editing", "Chatbot Development"],
  },
  {
    category: "Strategic Competencies",
    skills: ["Media Buying & Planning", "Client Relationship Management", "Creative Strategies", "Offline & Online Vendor Steering", "High-Value Campaign ROI Optimization"],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Digital Marketing Manager",
    company: "Paradigm Realty",
    period: "Jun 2025 - Present",
    highlights: [
      "Plan and execute 360° digital marketing strategies across paid search, social, programmatic, WhatsApp, SMS, and email targeting luxury real estate buyers.",
      "Achieved hyper-growth of 5,000+ targeted followers on Instagram, LinkedIn, and Facebook pages under 3 months through automated AI-assisted pipelines, custom-designed aesthetic feeds, and short-form video strategies.",
      "Integrated AI automations with Claude and Make.com to automate lead routing, reporting, review responses, and programmatic copy scaling.",
      "Managed multimillion budgets, significantly lowering customer acquisition cost while scaling qualified lead flow by 32%."
    ],
  },
  {
    role: "Manager - Digital & Marketing",
    company: "NRI ONE - International Events",
    period: "Jan 2024 - Mar 2025",
    highlights: [
      "Ran high-budget real estate marketing exhibitions across UAE, Singapore, Bahrain, Hong Kong, and USA.",
      "Managed advertisement spends of ₹50L+ over 5 months targeting highly affluent NRI buyers, generating stellar CTRs of 5% to 15%.",
      "Led global vendor negotiations, creative agency coordination, and event-side lead capture pipelines with CRM dashboards.",
      "Conducted international business visits, coordinating with banking partners (ICICI Bank) and hospitality giants for local event operations."
    ],
  },
  {
    role: "Sr. Executive - Performance Marketing",
    company: "Realatte - Digital Marketing Agency",
    period: "Mar 2022 - Dec 2023",
    highlights: [
      "Steered high-stakes performance marketing campaigns for marquee developers and healthcare brands: Shapoorji Pallonji, Rustomjee, Brigade Group, Emaar, and Dr. Batra's.",
      "Managed ad budgets exceeding ₹3 Crore, generating over 40,000 premium sales-qualified leads with high intent.",
      "Developed high-converting landing page flows, performed A/B testing on multi-channel ads, and engineered cross-platform integrations."
    ],
  },
  {
    role: "Digital Marketing Executive",
    company: "WPMS",
    period: "Oct 2020 - Feb 2022",
    highlights: [
      "Focused on B2B and B2C performance marketing campaigns driving brand awareness and high-volume lead acquisitions.",
      "Executed social media marketing, creative content calendars, and email newsletters, scaling open rates and interactions."
    ],
  },
  {
    role: "Digital Marketing Executive",
    company: "Credence Capital",
    period: "Jun 2020 - Sep 2020",
    highlights: [
      "Built landing pages, initiated Google & Meta ads from scratch, and spearheaded bulk email, WhatsApp, and SMS outreach marketing.",
      "Analyzed campaign data daily to optimize targeting criteria and creative materials."
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "IIDE Launchpad 2020 Winner",
    subtitle: "Startup Accelerator Competition",
    description: "Designed a comprehensive business model, built the digital user capture roadmap, and delivered an investor-winning pitch at the Indian Institute of Digital Education.",
  },
  {
    title: "National TV Commercial Music Creator",
    subtitle: "Swaad Pachak brand TV Ad",
    description: "Composed and remade a popular promotional jingle featured in nationwide television advertising and handled professional audio design for narrative short films.",
  },
  {
    title: "In-House WhatsApp Platform Architect",
    subtitle: "Automated Communication Platform",
    description: "Custom-developed an API-based WhatsApp communications system that replaced expensive enterprise SaaS solutions, saving major subscription overhead costs while increasing open/read rates to 92%.",
  }
];

export const PERSONAL_PROJECTS = [
  { title: "Brand Analysis & Marketing Audit", client: "Practo Healthcare" },
  { title: "SEO & SEM Analytical Strategy", client: "Practo Healthcare" },
  { title: "Comprehensive 360° Digital Blueprint", client: "Yatra.com" },
  { title: "Online Reputation Management (ORM)", client: "Swiggy Food Delivery" },
  { title: "Paid Social Planning & Media Strategy", client: "Rentomojo Furnitures" },
  { title: "Mobile UI App Store Optimization (ASO)", client: "Pocket App launcher" },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "brigade",
    client: "Brigade Group",
    title: "Multi-Project Luxury Performance Marketing",
    category: "Performance",
    description: "Executed high-ticket luxury real estate campaigns across Google Search, Meta Ads, and Taboola native networks targeting premium metro buyers and NRIs.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    channels: ["Google Search & GDN", "Meta Lead Gen & Conversion", "Taboola Native Ads"],
    metrics: {
      spends: "₹1.5 Crore+ (6 Months)",
      leads: "10,000+",
      ctr: "5.0% - 10.0%",
      cpl: "₹700 - ₹3,000",
      qualityLeads: "15% - 30%",
      roi: "22x Sales Pipe value",
    },
    highlights: [
      "Structured localized multi-language and international search ad groups.",
      "Optimized native search parameters on real estate portals like 99acres and Magicbricks.",
      "Employed interactive video tours and instant forms to lock down target audiences."
    ],
    details: [
      "Segmented audience targeting based on high-net-worth real estate interests in major metros and overseas NRI clusters.",
      "Deployed dynamic remarketing to capture non-converting high-value visitors.",
      "Managed native banner advertisements with Taboola widgets across premium news sites (Times of India, moneycontrol) resulting in 10k+ leads with a highly robust cost per lead (CPL)."
    ]
  },
  {
    id: "shapoorji",
    client: "Shapoorji Pallonji",
    title: "Premium Real Estate lead Optimization",
    category: "Performance",
    description: "Accelerated the Parkwest 2.0 premium residential launch targeting high-intent purchasers globally using a combination of programmatic and social ads.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800",
    channels: ["Google Search", "Meta Multi-Format Ads", "Taboola", "Yahoo Native Ads"],
    metrics: {
      spends: "₹1.2 Crore+ (6 Months)",
      leads: "7,000+",
      ctr: "5.0% - 10.0%",
      cpl: "₹1,500 (Stable Average)",
      qualityLeads: "18% - 30%",
      roi: "18x Pipeline Revenue",
    },
    highlights: [
      "Generated over 7,000 premier sales-qualified calls and visit bookings.",
      "Aided in launch sell-out of high tier inventory range starting at ₹1.62 Crore+.",
      "Created visual programmatic media strategy targeting top-percentage income brackets."
    ],
    details: [
      "Targeted global NRI regions with tailored ad copy focusing on favorable tax benefits and premium gated-community perks.",
      "Monitored CPL meticulously through an integrated Salesforce dashboard, pivoting budgets between Facebook and Yahoo Native daily to capture highest-performing hours.",
      "Crafted high-engaging ad sets featuring nature-synced luxury smart home benefits which scaled conversion rates to 4.2%."
    ]
  },
  {
    id: "rustomjee",
    client: "Rustomjee Group",
    title: "Massive 360° Lead Harvesting for Marquee Projects",
    category: "Performance",
    description: "Deployed an expansive omni-channel programmatic campaign utilizing programmatic platforms, direct publishers, and social channels to promote premium suburban townships.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    channels: ["Google Search", "Meta Ads", "Taboola Native", "TOI & Inshorts Directs", "OneNative", "Yahoo Native"],
    metrics: {
      spends: "₹3.0 Crore+ (6 Months+)",
      leads: "30,000+",
      ctr: "5.0% - 15.0%",
      cpl: "₹700 - ₹3,000",
      qualityLeads: "13% - 30%",
      roi: "25x Projected Bookings",
    },
    highlights: [
      "Aggressively captured premium real estate buyers, gathering 30,000+ total leads.",
      "Optimized direct programmatic bookings on high-density publisher layouts (Inshorts, Moneycontrol).",
      "Achieved stellar CTR rates ranging up to 15% through high-impact interactive creative storytelling."
    ],
    details: [
      "Created highly targeted ad visual sets focusing on luxurious amenities (e.g., BKC Annexe Pools, Prabhadevi Skyline Crowns) reflecting an elite quality of life.",
      "Established full-funnel remarketing paths using custom pixels, leading to steady drop-off recovery and lowering general acquisition cost by 18%.",
      "Directed media buying efforts on elite publishing nodes ensuring brand dominance on local newspapers, portals, and magazines simultaneously with performance channels."
    ]
  },
  {
    id: "nrione",
    client: "NRI ONE",
    title: "International Real Estate Exhibition Campaigns",
    category: "International",
    description: "Led and managed cross-border digital performance efforts promoting the Indian Property Exhibition in international locations across Dubai, Singapore, and Bahrain.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    channels: ["Google search", "Meta (UAE, Singapore, US, Bahrain regions)"],
    metrics: {
      spends: "₹50 Lakhs+ (5 Months)",
      leads: "2,000+",
      ctr: "5.0% - 15.0%",
      cpl: "₹1,500 - ₹3,000",
      qualityLeads: "22% - 35%",
      roi: "Exhibition Sold-Out",
    },
    highlights: [
      "Promoted localized multi-country high-ticket real estate exhibitions.",
      "Achieved high-impact performance with click-through rates up to 15%.",
      "Generated 2,000+ multi-million intent leads that attended live hotel events."
    ],
    details: [
      "Formulated dual targeting maps addressing specific requirements of expats wanting to invest securely back in Indian metros.",
      "Deployed strategic co-branded ads (featuring ICICI Bank sponsorships) to establish credibility and guarantee pre-event registrations.",
      "Conducted on-ground operations coordination, bridging online marketing data with direct reception and CRM desks at the physical venues in Singapore and Dubai."
    ]
  },
  {
    id: "emaar",
    client: "Emaar Dubai",
    title: "High-Budget International Villa Launch",
    category: "International",
    description: "Spearheaded premium digital client acquisitions targeting GCC and Dubai luxury seekers looking for suburban gated communities.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    channels: ["Meta Conversion Ads", "Google Performance Max Ads"],
    metrics: {
      spends: "₹10 Lakhs+ (2 Months)",
      leads: "500+",
      ctr: "5.0% - 15.0%",
      cpl: "₹1,500 - ₹3,000",
      qualityLeads: "20% - 30%",
      roi: "8 premium sales closed",
    },
    highlights: [
      "Acquired over 500 ultra-high-income lead records under 60 days.",
      "Optimized Google PMax campaigns for search terms related to 'Dubai Premium Villas'.",
      "Achieved steady 5%-15% CTR through cinematic video walk-through creatives."
    ],
    details: [
      "Crafted lifestyle-driven ad visuals emphasizing prime location accessibility via Emirates Road and multi-family modern layout blueprints.",
      "Nurtured digital leads via instant automated WhatsApp triggers, supplying brochures and interactive community maps immediately."
    ]
  },
  {
    id: "paradigm",
    client: "Paradigm Realty",
    title: "Aesthetic Brand Overhaul & Lead Generator",
    category: "Social",
    description: "Executed a complete performance and social transformation, transforming public aesthetic standards while keeping lead acquisition costs highly optimal.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    channels: ["Google Performance", "Meta Lead Ads", "Dynamic Instagram/FB Content", "WhatsApp Business APIs"],
    metrics: {
      spends: "₹30 Lakhs+ (6 Months)",
      leads: "1,000+",
      ctr: "5.0% - 15.0%",
      cpl: "₹500 - ₹2,000",
      qualityLeads: "15% - 28%",
      roi: "5k+ Targeted Social Growth",
    },
    highlights: [
      "Grew social media visual footprint by 5,000+ pure structural followers inside 90 days.",
      "Structured beautiful luxury real estate profile layout design (highlight grids, interactive story maps).",
      "Built custom AI automation workflows to reply to leads and drive WhatsApp sequences."
    ],
    details: [
      "Formulated unified content calendars centered on real-estate education, project walk-throughs, construction quality diaries, and local neighborhood spotlights.",
      "Utilized Midjourney render outputs and Runway AI-edited architectural video reels to display upcoming luxury layouts as cinematic masterpieces.",
      "Kept ad performance highly efficient, balancing cost per lead to an average level of ₹1,200 while scaling digital brand awareness."
    ]
  },
  {
    id: "drbatras",
    client: "Dr. Batra's",
    title: "Healthcare Leads Campaign Optimization",
    category: "Healthcare",
    description: "Structured high-volume target lead capture funnels for premium clinical homeopathy consulting appointments in national and regional zones.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1ea46073e5?auto=format&fit=crop&q=80&w=800",
    channels: ["Google Search & GDN Network", "Meta Lead Gen & Story Ads"],
    metrics: {
      spends: "₹5 Lakhs+/Month (1 Year+)",
      leads: "300+ Leads/Month",
      ctr: "8.0% - 15.0%",
      cpl: "₹700 - ₹2,500",
      qualityLeads: "25% - 40%",
      coa: "40% (Cost of Acquisition)",
    },
    highlights: [
      "Boosted sales appointment bookings regularly by 300+ monthly entries.",
      "Pivoted creatives focusing on clinical test success rates and zero side-effects benefits.",
      "Achieved 25%-40% appointment attendance rates through post-capture SMS alerts."
    ],
    details: [
      "Conducted extensive A/B tests on medical consult signup forms, minimizing input friction into short structured questions.",
      "Secured steady traffic from localized regional search terms by managing localized Google Ads extensions.",
      "Leveraged dynamic retargeting displaying patient success testimonials to prospective clients who spent over 30 seconds on service description pages."
    ]
  }
];

// Paradigm realty social media growth dataset over 3 months (under 90 days)
export const PARADIGM_GROWTH_DATA = [
  { day: "Wk 1", instagram: 1200, linkedin: 800, facebook: 1500, total: 3500 },
  { day: "Wk 2", instagram: 1500, linkedin: 950, facebook: 1650, total: 4100 },
  { day: "Wk 3", instagram: 1900, linkedin: 1150, facebook: 1800, total: 4850 },
  { day: "Wk 4", instagram: 2400, linkedin: 1400, facebook: 2000, total: 5800 },
  { day: "Wk 5", instagram: 2900, linkedin: 1680, facebook: 2200, total: 6780 },
  { day: "Wk 6", instagram: 3500, linkedin: 1950, facebook: 2450, total: 7900 },
  { day: "Wk 7", instagram: 4200, linkedin: 2300, facebook: 2700, total: 9200 },
  { day: "Wk 8", instagram: 4800, linkedin: 2650, facebook: 2950, total: 10400 },
  { day: "Wk 9", instagram: 5500, linkedin: 3050, facebook: 3200, total: 11750 },
  { day: "Wk 10", instagram: 6200, linkedin: 3400, facebook: 3450, total: 13050 },
  { day: "Wk 11", instagram: 6900, linkedin: 3800, facebook: 3750, total: 14450 },
  { day: "Wk 12", instagram: 7600, linkedin: 4200, facebook: 4000, total: 15800 },
];

export const SOCIAL_TACTICS = [
  {
    metric: "+5.3K Followers",
    title: "Aesthetic Visual Overhaul",
    descr: "Crafted a beautiful grid puzzle and luxury branding templates for Project Launches inside Paradigm Realty, instantly boosting visual conversion of profile visitors by 220%."
  },
  {
    metric: "4.8% Engagement",
    title: "AI-Powered Short Video Pipeline",
    descr: "Used Midjourney and Runway ML to create gorgeous conceptual drone fly-throughs of planned architectures, scheduling posting times perfectly via automated API workflows."
  },
  {
    metric: "92% WhatsApp CTR",
    title: "Automated Lead Capture",
    descr: "Configured API chatbots and automated WhatsApp responses linked directly to interactive instagram story stickers, bringing immediate, automated high-intent sales bookings."
  },
];

// Master metrics comparison showing how performance budgets are managed with target metrics achieved vs benchmark
export const PERFORMANCE_DASHBOARD_DATA = [
  { name: "Brigade Group", spends: 15000000, leads: 10500, cpl: 1428, ctr: 7.5, quality: 22.5 },
  { name: "Shapoorji Pallonji", spends: 12000000, leads: 7200, cpl: 1666, ctr: 8.2, quality: 24.0 },
  { name: "Rustomjee", spends: 30000000, leads: 31200, cpl: 961, ctr: 11.4, quality: 18.5 },
  { name: "NRI ONE", spends: 5000000, leads: 2200, cpl: 2270, ctr: 9.8, quality: 31.0 },
  { name: "Emaar Dubai", spends: 1000000, leads: 520, cpl: 1923, ctr: 12.0, quality: 25.0 },
  { name: "Paradigm Realty", spends: 3000000, leads: 1850, cpl: 1621, ctr: 10.5, quality: 21.0 },
  { name: "Dr. Batra's", spends: 6000000, leads: 3600, cpl: 1666, ctr: 11.5, quality: 32.5 },
];
