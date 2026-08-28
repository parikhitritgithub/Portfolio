import { FaReact, FaNode, FaHtml5, FaDocker, FaGitAlt, FaCss3Alt } from "react-icons/fa";
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
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { IconType } from "react-icons";

export interface Skill {
  name: string;
  description: string;
  rating: number;
  icon: IconType;
  color: string;
  category: "frontend" | "backend" | "database" | "devops";
}

export const skills: Skill[] = [
  {
    name: "NestJS",
    description:
      "Building scalable, modular enterprise APIs with guards, interceptors, and microservices.",
    rating: 5,
    icon: SiNestjs,
    color: "#E0234E",
    category: "backend",
  },
  {
    name: "React",
    description:
      "Crafting interactive UIs with hooks, context, custom components, and state management.",
    rating: 4,
    icon: FaReact,
    color: "#61DAFB",
    category: "frontend",
  },
  {
    name: "Next.js",
    description:
      "Full-stack React framework with SSR, SSG, API routes, and optimized performance.",
    rating: 4,
    icon: SiNextdotjs,
    color: "#FFFFFF",
    category: "frontend",
  },
  {
    name: "TypeScript",
    description:
      "Type-safe development across full stack with interfaces, generics, and decorators.",
    rating: 5,
    icon: SiTypescript,
    color: "#3178C6",
    category: "frontend",
  },
  {
    name: "Node.js",
    description:
      "Server-side JavaScript runtime for building fast, event-driven backend services.",
    rating: 5,
    icon: FaNode,
    color: "#339933",
    category: "backend",
  },
  {
    name: "Express.js",
    description:
      "Lightweight and flexible Node.js framework for REST APIs and middleware pipelines.",
    rating: 5,
    icon: SiExpress,
    color: "#FFFFFF",
    category: "backend",
  },
  {
    name: "MongoDB",
    description:
      "NoSQL database design with aggregation pipelines, indexing, and multi-tenant schemas.",
    rating: 5,
    icon: SiMongodb,
    color: "#47A248",
    category: "database",
  },
  {
    name: "PostgreSQL",
    description:
      "Relational database with complex queries, migrations, and transactional integrity.",
    rating: 3,
    icon: SiPostgresql,
    color: "#4169E1",
    category: "database",
  },
  {
    name: "Redis",
    description:
      "In-memory caching, pub/sub messaging, and session management for real-time apps.",
    rating: 4,
    icon: SiRedis,
    color: "#DC382D",
    category: "database",
  },
  {
    name: "Socket.IO",
    description:
      "Real-time bidirectional communication for live dashboards and production tracking.",
    rating: 4,
    icon: SiSocketdotio,
    color: "#010101",
    category: "backend",
  },
  {
    name: "Docker",
    description:
      "Containerized deployments with Docker Compose for multi-service architectures.",
    rating: 4,
    icon: FaDocker,
    color: "#2496ED",
    category: "devops",
  },
  {
    name: "JavaScript",
    description:
      "Core language mastery including ES6+, async patterns, closures, and prototypes.",
    rating: 5,
    icon: IoLogoJavascript,
    color: "#F7DF1E",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    description:
      "Utility-first CSS framework for rapid, responsive, and consistent UI development.",
    rating: 5,
    icon: SiTailwindcss,
    color: "#06B6D4",
    category: "frontend",
  },
  {
    name: "Git",
    description:
      "Version control with branching strategies, rebasing, and collaborative workflows.",
    rating: 4,
    icon: FaGitAlt,
    color: "#F05032",
    category: "devops",
  },
  {
    name: "HTML5",
    description:
      "Semantic markup, accessibility best practices, and modern web standards.",
    rating: 5,
    icon: FaHtml5,
    color: "#E34F26",
    category: "frontend",
  },
  {
    name: "CSS3",
    description:
      "Advanced styling with animations, grid, flexbox, and responsive design patterns.",
    rating: 5,
    icon: FaCss3Alt,
    color: "#1572B6",
    category: "frontend",
  },
];

export const skillCategories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "devops", label: "DevOps" },
] as const;