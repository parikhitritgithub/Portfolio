export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  type: "work" | "project" | "education";
  description: string;
  responsibilities: string[];
  techUsed: string[];
}

export const experiences: Experience[] = [
  {
    id: "inkaura-dev",
    role: "Full Stack Developer",
    company: "Inkaura (Personal Enterprise Project)",
    duration: "2025 — Present",
    type: "project",
    description:
      "Designing and developing a 23-module enterprise SaaS ERP system for the printing industry, handling everything from architecture to deployment.",
    responsibilities: [
      "Architected multi-tenant backend with NestJS featuring guards, interceptors, and modular design",
      "Built real-time production tracking with Socket.IO and Redis pub/sub for live factory floor updates",
      "Designed MongoDB schemas with aggregation pipelines for complex reporting across 23 modules",
      "Implemented Docker Compose orchestration for consistent multi-service deployments",
      "Created responsive React dashboards with role-based access control",
    ],
    techUsed: ["NestJS", "React", "MongoDB", "Redis", "Socket.IO", "Docker", "TypeScript"],
  },
  {
    id: "dinestay-dev",
    role: "Full Stack Developer",
    company: "Dine & Stay (Personal SaaS Project)",
    duration: "2024 — 2025",
    type: "project",
    description:
      "Built a real-time hospitality management system with live KDS updates, supporting concurrent tenant operations.",
    responsibilities: [
      "Developed real-time KDS with sub-200ms latency using Socket.IO and Redis",
      "Built multi-tenant architecture supporting 50+ concurrent sessions",
      "Implemented order lifecycle management with real-time status tracking",
      "Created role-based dashboards for kitchen, front desk, and management",
    ],
    techUsed: ["NestJS", "Next.js", "MongoDB", "Socket.IO", "Redis", "TypeScript"],
  },
  {
    id: "anusandhan-dev",
    role: "Full Stack Developer",
    company: "Anusandhan Management System",
    duration: "2024",
    type: "project",
    description:
      "Built a centralized research management platform for academic institutions with automated document processing.",
    responsibilities: [
      "Designed RESTful API architecture with NestJS for research document management",
      "Built analytics dashboards with data visualization for research metrics",
      "Implemented automated document processing and review workflows",
    ],
    techUsed: ["React", "NestJS", "MongoDB", "TypeScript"],
  },
];

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  coursework: string[];
}

export const education: Education[] = [
  {
    id: "btech",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "University",
    duration: "2021 — 2025",
    description:
      "Focused on full-stack web development, data structures & algorithms, and software engineering principles.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Machine Learning",
    ],
  },
];
