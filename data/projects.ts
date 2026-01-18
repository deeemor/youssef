// /data/projects.ts

export type ImpactItem = { label: string; value: string; hint?: string };
export type HighlightItem = { title: string; description: string };
export type ProjectLinks = { live?: string; repo?: string; demo?: string };

export type WorkProject = {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
};

export type ProjectDetail = {
  slug: string; 
  title: string;
  category: string;
  year: string;
  image: string;
  images: string[]; 
  overview: string;
  role: string;
  techStack: string[];
  challenges: string[];
  built: string[];
  impact: ImpactItem[];
  highlights?: HighlightItem[];
  links: ProjectLinks;
};

// Work cards data (what you show in slider)
export const workProjects: WorkProject[] = [
  {
    id: "01",
    slug: "lifa",
    title: "LIFA Innovative Lichtsysteme",
    category: "Next.js / Headless CMS / B2B Platform",
    year: "2025",
    image: "/lifa.png",
  },
  {
    id: "02",
    slug: "immobilien-portfolio",
    title: "Immobilien Portfolio",
    category: "Real Estate / Minimal Design",
    year: "2025",
    image: "/grau.png",
  },
  {
    id: "04",
    slug: "campus-match",
    title: "CampusMatch",
    category: "Social Platform / University",
    year: "Upcoming",
    image: "/campusmatch.png",
  },
  {
    id: "05",
    slug: "zyntract",
    title: "Zyntract",
    category: "Chrome Extension / AI / Automation",
    year: "Coming Soon",
    image: "/zyntract.png",
  },
  {
    id: "06",
    slug: "shery-beauty",
    title: "Shery Beauty",
    category: "Brand Identity / UX / Mobile-First",
    year: "2025",
    image: "/shery.png",
  },
  {
    id: "09",
    slug: "volto-restaurant",
    title: "Volto Restaurant",
    category: "Gastronomy / Performance",
    year: "2025",
    image: "/volto.png",
  },
  {
    id: "10",
    slug: "fymove",
    title: "FyMove",
    category: "Medical Platform / UX",
    year: "2024",
    image: "/fymove.png",
  },
  {
    id: "11",
    slug: "gym-website",
    title: "Gym Website",
    category: "Sports / Performance",
    year: "2024",
    image: "/fitdemor.png",
  },
  {
    id: "12",
    slug: "kantine-muenster",
    title: "Kantine Münster",
    category: "Restaurant / Mobile-First",
    year: "2024",
    image: "/kantine.png",
  },
];

//  Details ( /projects/[slug])
export const projectDetails: Record<string, ProjectDetail> = {
  "lifa": {
    slug: "lifa",
    title: "LIFA Innovative Lichtsysteme",
    category: "Next.js / Headless CMS / B2B Platform",
    year: "2025",
    image: "/lifa.png",
    images: [
      "/lifa2.png",
      "/lifa3.png",
      "/lifa4.png",
      "/lifa5.png",
    ],
    overview:
      "Modern B2B platform rebuilt from WordPress — focused on speed, structure, and AI-assisted support.",
    role: "Full-Stack Engineer (Lead)",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Headless CMS",
      "LLM/AI Integrations",
    ],
    challenges: [
      "Migrating legacy WordPress content into a clean, maintainable content model",
      "Building fast product discovery (filters + search) without slowing down the UI",
      "Integrating hybrid AI support with notification workflows and escalation",
    ],
    built: [
      "Next.js App Router architecture with reusable UI components and consistent layout system",
      "Structured product catalog with advanced filtering and clean information hierarchy",
      "Hybrid AI chatbot (knowledge-based) with notifications and human handoff",
      "Improved search experience with better relevance and faster navigation flows",
      "Performance + SEO optimizations for a production-ready B2B platform",
    ],
    impact: [
      { label: "Migration", value: "WordPress → Modern", hint: "Future-proof architecture" },
      { label: "Discovery", value: "Filters + Search", hint: "Faster product finding" },
      { label: "Support", value: "Hybrid AI", hint: "Chat + notifications + handoff" },
    ],
    links: { live: "https://lifa-neu.vercel.app/de" },
  },

  "immobilien-portfolio": {
    slug: "immobilien-portfolio",
    title: "Hendrik Grau",
    category: "Real Estate / Minimal Design",
    year: "2025",
    image: "/grau.png",
    images: [
      "/grau1.png",
      "/grau2.png",
      "/grau3.png",
      "/grau4.png",
    ],
    overview:
      "Minimalist real-estate portfolio designed for clarity, letting properties and facts take center stage.",
    role: "Designer & Developer",
    techStack: ["React", "TypeScript", "Minimal UI System", "Headless CMS"],
    challenges: [
      "Balancing minimal design with real information needs",
      "Creating a professional typographic tone and consistent spacing system",
      "Building a workflow that stays easy to maintain long-term",
    ],
    built: [
      "Minimal grey design system focused on hierarchy and readability",
      "Property-focused layout patterns (gallery, facts, highlights, contact)",
      "Optimized image loading for large property media",
      "Simple and secure inquiry/contact flow",
      "Reusable sections for easy updates without redesigning pages",
    ],
    impact: [
      { label: "Design", value: "Minimal", hint: "Neutral, professional look" },
      { label: "Focus", value: "Properties", hint: "Images + facts first" },
      { label: "Workflow", value: "Maintainable", hint: "Easy updates over time" },
    ],
    links: { live: "https://hendrikgrau.vercel.app/de" },
  },

  "campus-match": {
    slug: "campus-match",
    title: "CampusMatch",
    category: "Social Platform / University",
    year: "Upcoming",
    image: "/campusmatch.png",
    images: [
      "/campusmatch.png",
      "/campusmatch.png",
      "/campusmatch.png",
      "/campusmatch.png",
    ],
    overview:
      "Student-first platform connecting users for study groups, projects, and social networking with privacy-focused matching.",
    role: "Architect & Builder",
    techStack: ["Next.js", "TypeScript", "Supabase", "Real-time Features"],
    challenges: [
      "Designing matching logic that supports both social and academic goals",
      "Building privacy-aware profiles and safe discovery flows",
      "Planning for real-time interactions (chat, requests, matching updates)",
    ],
    built: [
      "Core architecture plan: profiles, discovery, and matching flows",
      "Authentication + privacy foundations (who sees what, when, and why)",
      "Real-time-ready structure for messaging and match requests",
      "Initial matching logic design (signals, preferences, and constraints)",
      "Dashboard concept for projects, study groups, and collaboration",
    ],
    impact: [
      { label: "Status", value: "Upcoming", hint: "Architecture + early build" },
      { label: "Focus", value: "Students", hint: "Social + academic matching" },
      { label: "Goal", value: "Connect", hint: "Collaboration made easier" },
    ],
    links: { live: "#" },
  },

  "zyntract": {
    slug: "zyntract",
    title: "Zyntract",
    category: "Chrome Extension / AI / Automation",
    year: "Coming Soon",
    image: "/zyntract.png",
    images: [
      "/zyntract1.png",
      "/zyntract2.png",
      "/zyntract3.png",
      "/zyntract4.png",
    ],
    overview:
      "AI-assisted Chrome extension that simplifies web scraping by turning DOM selection into reusable workflows.",
    role: "Creator & Lead",
    techStack: ["Chrome Extension APIs", "React", "TypeScript", "LLM/AI Integrations"],
    challenges: [
      "Working within modern browser extension constraints (security + permissions)",
      "Designing generic DOM understanding that works across many websites",
      "Building a UI that stays powerful but never feels intrusive",
    ],
    built: [
      "Browser-side extraction engine driven by DOM structure + user selection",
      "AI-assisted field detection and pattern suggestions for faster setup",
      "Workflow logic to repeat extractions across similar pages",
      "Secure local configuration storage and controlled export options",
      "Foundation for export formats and integrations (WIP)",
    ],
    impact: [
      { label: "Status", value: "WIP", hint: "Actively in development" },
      { label: "Goal", value: "Faster setup", hint: "Less manual DOM work" },
      { label: "Mode", value: "In-browser", hint: "No external scripts needed" },
    ],
    links: { live: "https://zyntrakt.vercel.app/" },
  },

  // "morphe-data": {
  //   slug: "morphe-data",
  //   title: "Morphe Data",
  //   category: "Automation / Data Engineering",
  //   year: "2025",
  //   image: "/grau.png",
  //   images: [
  //     "/grau.png",
  //     "/grau.png",
  //     "/grau.png",
  //     "/grau.png",
  //   ],
  //   overview:
  //     "Reliable automation pipelines transforming messy web data into clean, structured datasets for downstream processing.",
  //   role: "Data Automation Engineer",
  //   techStack: ["Node.js", "Automation", "Web Scraping", "Docker", "PostgreSQL"],
  //   challenges: [
  //     "Making scraping processes reliable across changing page structures",
  //     "Handling async failures with recovery and clean retry logic",
  //     "Normalizing extracted data into consistent schemas",
  //   ],
  //   built: [
  //     "Reusable scraping and extraction workflows with error handling and retry strategies",
  //     "Normalization layer to transform raw extraction into structured datasets",
  //     "Containerized setup for consistent execution across environments",
  //     "Export formats for practical usage (structured output for tools and reporting)",
  //     "Basic monitoring signals to detect failures and data quality issues",
  //   ],
  //   impact: [
  //     { label: "Pipeline", value: "Automated", hint: "Repeatable data workflows" },
  //     { label: "Output", value: "Structured", hint: "Clean schema-based results" },
  //     { label: "Ops", value: "Stable", hint: "Reliability-focused design" },
  //   ],
  //   links: { live: "#" },
  // },

  "shery-beauty": {
    slug: "shery-beauty",
    title: "Shery Beauty",
    category: "Brand Identity / UX / Mobile-First",
    year: "2025",
    image: "/shery.png",
    images: [
      "/shery1.png",
      "/shery2.png",
      "/shery3.png",
      "/shery4.png",
    ],
    overview:
      "Mobile-first salon website designed to convert visitors with a premium feel and instant service clarity.",
    role: "Frontend & UX",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    challenges: [
      "Translating a real-world premium salon feel into a clean digital brand experience",
      "Designing a service structure that is easy to scan on mobile",
      "Keeping animations smooth without affecting performance",
    ],
    built: [
      "Mobile-first layout with clear service hierarchy and conversion-focused sections",
      "Brand-consistent UI system (typography, spacing, components) for a luxury look",
      "Smooth micro-animations for a premium feel without heavy UI overhead",
      "Optimized image loading and layout stability (no unexpected jumps)",
      "SEO foundations for local discovery (structured content + clean pages)",
    ],
    impact: [
      { label: "UX", value: "Mobile-first", hint: "Designed primarily for phones" },
      { label: "Brand", value: "Premium", hint: "Consistent visual identity" },
      { label: "Speed", value: "Optimized", hint: "Fast loading + stable layout" },
    ],
    links: { live: "https://shery-salon.vercel.app/" },
  },

  "volto-restaurant": {
    slug: "volto-restaurant",
    title: "Volto Restaurant",
    category: "Gastronomy / Performance",
    year: "2025",
    image: "/volto.png",
    images: [
      "/volto1.png",
      "/volto2.png",
      "/volto3.png",
      "/volto4.png",
    ],
    overview:
      "Performance-focused restaurant site delivering menus and reservations in seconds for on-the-go users.",
    role: "Frontend Developer",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Deployment Platform"],
    challenges: [
      "Making menu and key info instantly accessible on mobile",
      "Optimizing media without hurting page speed",
      "Keeping the UI accessible and clear for all users",
    ],
    built: [
      "Mobile-first information hierarchy (menu, hours, contact, reservation)",
      "Optimized assets and stable layout rendering for smooth UX",
      "Accessible components and keyboard-friendly navigation",
      "Reservation/contact integration flow with clear CTAs",
      "Local SEO foundations (structured pages and clean content layout)",
    ],
    impact: [
      { label: "UX", value: "Fast access", hint: "Menu + reservations in seconds" },
      { label: "Mobile", value: "First", hint: "Designed around phone users" },
      { label: "Build", value: "Lightweight", hint: "Performance-focused pages" },
    ],
    links: { live: "https://volto-new.vercel.app/" },
  },

  "fymove": {
    slug: "fymove",
    title: "FyMove",
    category: "Medical Platform / UX",
    year: "2024",
    image: "/fymove.png",
    images: [
      "/fymove1.png",
      "/fymove2.png",
      "/fymove3.png",
      "/fymove4.png",
    ],
    overview: "Details coming soon.",
    role: "Developer",
    techStack: ["Next.js", "TypeScript"],
    challenges: ["Details coming soon."],
    built: ["Details coming soon."],
    impact: [{ label: "Status", value: "WIP" }],
    links: { live: "https://fymove.vercel.app/" },
  },
  "gym-website": {
    slug: "gym-website",
    title: "Gym Website",
    category: "Sports / Performance",
    year: "2024",
    image: "/fitdemor.png",
    images: [
      "/fitdemor.png",
      "/fitdemor.png",
      "/fitdemor.png",
      "/fitdemor.png",
    ],
    overview: "Details coming soon.",
    role: "Developer",
    techStack: ["Next.js", "TypeScript"],
    challenges: ["Details coming soon."],
    built: ["Details coming soon."],
    impact: [{ label: "Status", value: "WIP" }],
    links: { live: "https://fitdemor.vercel.app/" },
  },
  "kantine-muenster": {
    slug: "kantine-muenster",
    title: "Kantine Münster",
    category: "Restaurant / Mobile-First",
    year: "2024",
    image: "/kantine.png",
    images: [
      "/kantine1.png",
      "/kantine2.png",
      "/kantine3.png",
      "/kantine4.png",
    ],
    overview: "Details coming soon.",
    role: "Developer",
    techStack: ["Next.js", "TypeScript"],
    challenges: ["Details coming soon."],
    built: ["Details coming soon."],
    impact: [{ label: "Status", value: "WIP" }],
    links: { live: "https://kantinee.vercel.app/" },
  },
};

export const getProjectBySlug = (slug: string) =>
  projectDetails[String(slug).toLowerCase()];

export const getNextProject = (currentSlug: string) => {
  const slugs = Object.keys(projectDetails);
  const currentIndex = slugs.indexOf(currentSlug);
  const nextIndex = (currentIndex + 1) % slugs.length;
  const nextSlug = slugs[nextIndex];
  return projectDetails[nextSlug];
};

export const allProjectSlugs = Object.keys(projectDetails);
