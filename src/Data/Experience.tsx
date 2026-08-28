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
    id: "progressive-novus",
    role: "Software Developer Intern",
    company: "Progressive Novus — Remote",
    duration: "Apr 2026 — Jun 2026",
    type: "work",
    description:
      "Engineered Dine&Stay OS, a multi-tenant Restaurant POS and Hotel Management SaaS, using a Turborepo monorepo with NestJS, Next.js 14, PostgreSQL 16, Redis, and Socket.IO.",
    responsibilities: [
      "Delivered a 23-module backend covering GST-compliant billing, real-time KDS, hotel reservations, and inventory",
      "Isolated tenants via row-level scoping across a 36-table PostgreSQL schema",
      "Streamlined real-time order sync through Socket.IO and Redis pub-sub architecture",
    ],
    techUsed: [
      "NestJS",
      "Next.js 14",
      "PostgreSQL 16",
      "Redis",
      "Socket.IO",
      "Turborepo",
      "TypeScript",
    ],
  },
  {
    id: "hyrofsy",
    role: "Software Developer Intern",
    company: "HYROFSY — Golaghat, Assam",
    duration: "Dec 2024 — Jan 2025",
    type: "work",
    description:
      "Developed and tested backend RESTful APIs and integrated frontend services while maintaining clean Git practices across multiple pull requests.",
    responsibilities: [
      "Authored RESTful backend endpoints in Node.js and Express.js, adding validation pipelines that reduced bad-request errors",
      "Tested backend APIs and integrated frontend components with backend services, debugging API and legacy logic issues",
      "Maintained clean Git practices across multiple merged pull requests in a team workflow",
    ],
    techUsed: ["Node.js", "Express.js", "REST APIs", "Git", "JavaScript"],
  },
  {
    id: "inkaura-dev",
    role: "Full Stack Developer",
    company: "Inkaura ERP (Final Year Minor Project)",
    duration: "2025 — Present",
    type: "project",
    description:
      "Designing and developing a multi-tenant SaaS ERP system for the printing industry using Supabase, NestJS, and React.",
    responsibilities: [
      "Integrated Supabase PostgreSQL database, authentication, and backend services for seamless multi-tenant isolation",
      "Built digital job slip workflow and real-time production tracking for factory floor operations",
      "Created responsive React dashboards with role-based access control (RBAC)",
    ],
    techUsed: ["Supabase", "NestJS", "React", "PostgreSQL", "TypeScript", "Tailwind CSS"],
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
    degree: "Bachelor of Technology — Computer Science & Engineering",
    institution: "The Assam Kaziranga University (CGPA: 8.75)",
    duration: "2022 — 2026",
    description:
      "CSE Graduate with strong fundamentals in Object Oriented Programming, Data Structures & Algorithms, and Full-Stack Web Development.",
    coursework: [
      "Data Structures & Algorithms",
      "Object Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
];
