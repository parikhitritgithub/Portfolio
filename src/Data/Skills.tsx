import { FaReact, FaNode, FaHtml5, FaDocker, FaGitAlt, FaCss3Alt, FaJava, FaPython } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
  SiRedis,
  SiSocketdotio,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiFastapi,
  SiCplusplus,
  SiTurborepo,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { IconType } from "react-icons";

export interface Skill {
  name: string;
  description: string;
  rating: number;
  icon: IconType;
  color: string;
  category: "frontend" | "backend" | "database" | "ai_tools";
}

export const skills: Skill[] = [
  {
    name: "NestJS",
    description: "Scalable enterprise REST APIs, microservices, RBAC guards, and dependency injection.",
    rating: 5,
    icon: SiNestjs,
    color: "#E0234E",
    category: "backend",
  },
  {
    name: "Supabase",
    description: "PostgreSQL database management, instant REST APIs, auth, and row-level security.",
    rating: 5,
    icon: SiSupabase,
    color: "#3ECF8E",
    category: "database",
  },
  {
    name: "React & Next.js 14",
    description: "App router, SSR, interactive UI components, hooks, and responsive frontends.",
    rating: 5,
    icon: FaReact,
    color: "#61DAFB",
    category: "frontend",
  },
  {
    name: "TypeScript",
    description: "Type-safe development across full stack, interfaces, generics, and decorators.",
    rating: 5,
    icon: SiTypescript,
    color: "#3178C6",
    category: "frontend",
  },
  {
    name: "Node.js & Express",
    description: "Event-driven asynchronous backend services, middleware validation, and REST APIs.",
    rating: 5,
    icon: FaNode,
    color: "#339933",
    category: "backend",
  },
  {
    name: "FastAPI & Python",
    description: "Asynchronous backend endpoints, AI pipeline routing, and CPU/GPU orchestration.",
    rating: 4,
    icon: SiFastapi,
    color: "#009688",
    category: "backend",
  },
  {
    name: "PostgreSQL",
    description: "Relational database schema design, multi-tenant row-level scoping, and migrations.",
    rating: 5,
    icon: SiPostgresql,
    color: "#4169E1",
    category: "database",
  },
  {
    name: "MongoDB",
    description: "NoSQL document storage, aggregation pipelines, indexing, and scalable schemas.",
    rating: 5,
    icon: SiMongodb,
    color: "#47A248",
    category: "database",
  },
  {
    name: "Redis",
    description: "In-memory caching, real-time pub/sub message broker, and session management.",
    rating: 4,
    icon: SiRedis,
    color: "#DC382D",
    category: "database",
  },
  {
    name: "Vector DBs (Qdrant/FAISS)",
    description: "Semantic duplicate-detection engines and vector similarity embeddings.",
    rating: 4,
    icon: FaPython,
    color: "#3776AB",
    category: "ai_tools",
  },
  {
    name: "C++ & Java",
    description: "Core Data Structures & Algorithms, Object Oriented Programming (OOP), and problem solving.",
    rating: 5,
    icon: SiCplusplus,
    color: "#00599C",
    category: "backend",
  },
  {
    name: "Docker & Turborepo",
    description: "Monorepo management, containerization, and multi-service deployment pipelines.",
    rating: 4,
    icon: FaDocker,
    color: "#2496ED",
    category: "ai_tools",
  },
  {
    name: "Socket.IO & WebSockets",
    description: "Sub-200ms real-time bidirectional communication and live KDS status updates.",
    rating: 5,
    icon: SiSocketdotio,
    color: "#010101",
    category: "backend",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for modern, responsive, and customizable design systems.",
    rating: 5,
    icon: SiTailwindcss,
    color: "#06B6D4",
    category: "frontend",
  },
];

export const skillCategories = [
  { key: "all", label: "All Skills" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Databases" },
  { key: "ai_tools", label: "AI / DevOps & Tools" },
] as const;