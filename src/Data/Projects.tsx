import {
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiRedis,
  SiSocketdotio,
  SiTypescript,
  SiSupabase,
  SiPostgresql,
  SiPython,
  SiFastapi,
  SiThreedotjs,
} from "react-icons/si";
import { IconType } from "react-icons";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  techStack: { name: string; icon: IconType; color: string }[];
  highlights: string[];
  category: "fullstack" | "frontend" | "backend" | "ml";
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "inkaura",
    title: "Inkaura ERP",
    subtitle: "Enterprise SaaS Platform (Final Year Minor)",
    description:
      "A comprehensive multi-tenant SaaS ERP platform for printing operations powered by Supabase backend, NestJS, and React.",
    longDescription:
      "Built an end-to-end enterprise resource planning platform with Supabase database and authentication services, alongside a modular NestJS backend. Features include digital job slip management, order status tracking, inventory management, multi-tenant data isolation, and RBAC.",
    techStack: [
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
    highlights: [
      "Multi-tenant SaaS ERP architecture built for printing industry operations",
      "Powered by Supabase for PostgreSQL database, authentication, and security",
      "Digital job slip workflow replacing manual processes across departments",
      "Role-based access control (RBAC) with secure data isolation",
    ],
    category: "fullstack",
    featured: true,
    liveUrl: "https://inkaura-16fj.vercel.app",
    githubUrl: "https://github.com/parikhitritgithub/Final-year-minor",
  },
  {
    id: "dinestay",
    title: "Dine & Stay OS",
    subtitle: "Hospitality Management SaaS",
    description:
      "Real-time hospitality management platform with live KDS updates, table management, and order tracking for restaurants and hotels.",
    longDescription:
      "A multi-tenant Restaurant POS and Hotel Management SaaS built using a Turborepo monorepo with NestJS, Next.js 14, PostgreSQL 16, Redis, and Socket.IO. Features a 23-module backend covering GST-compliant billing, real-time KDS, hotel reservations, and inventory with row-level tenant scoping.",
    techStack: [
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Next.js 14", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
    highlights: [
      "Sub-200ms real-time KDS updates via Socket.IO/Redis pub-sub",
      "23-module backend with 36-table PostgreSQL schema",
      "GST-compliant billing, hotel reservations, and inventory management",
      "Row-level scoping for secure multi-tenant data isolation",
    ],
    category: "fullstack",
    featured: true,
    githubUrl: "#",
  },
  {
    id: "shapeit",
    title: "ShapeIt — 3D Generation",
    subtitle: "IEEE INSTCon 2026 (Paper ID: 1611)",
    description:
      "Real-Time Interactive 3D Generation platform benchmarking TripoSR against Shap-E with a 2.59x improvement in mean inference latency.",
    longDescription:
      "Developed the codebase underlying architecture recognized at IEEE INSTCon 2026 (Paper ID: 1611). Exposed generation pipelines as asynchronous Python (FastAPI) endpoints on CPU while routing GPU steps to cloud infra. Built a React and Three.js interactive canvas with orbit controls.",
    techStack: [
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Three.js", icon: SiThreedotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
    highlights: [
      "Principal Author of IEEE INSTCon 2026 accepted research paper (Paper ID: 1611)",
      "Benchmarked TripoSR against Shap-E latent diffusion with 2.59x inference latency speedup",
      "Asynchronous Python (FastAPI) endpoints routing GPU steps to cloud infrastructure",
      "Hardware-accelerated 3D rendering canvas with real-time orbit controls",
    ],
    category: "ml",
    featured: true,
    githubUrl: "#",
  },
  {
    id: "anusandhan",
    title: "Anusandhan (AMS)",
    subtitle: "Research Intelligence Platform",
    description:
      "Centralized research management system featuring a semantic duplicate-detection engine with Sentence Transformers, Qdrant, and FAISS.",
    longDescription:
      "Architected a research-intelligence platform featuring a semantic duplicate-detection engine built with Sentence Transformers (all-MiniLM-L6-v2), Qdrant, and FAISS. Implemented RBAC across scientist and administrator portals secured with stateless JWT authentication.",
    techStack: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNestjs, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
    highlights: [
      "Semantic duplicate-detection engine using Sentence Transformers, Qdrant & FAISS",
      "Stateless JWT authentication & RBAC for scientist and administrator portals",
      "Deployed to production via Vercel cloud hosting",
      "Automated document processing and review workflows",
    ],
    category: "fullstack",
    featured: true,
    liveUrl: "https://ams-frontend-liart.vercel.app",
    githubUrl: "#",
  },
];

export const projectCategories = [
  { key: "all", label: "All Projects" },
  { key: "fullstack", label: "Full Stack" },
  { key: "ml", label: "AI / ML & 3D" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
] as const;
