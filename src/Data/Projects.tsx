import { SiNestjs, SiNextdotjs, SiReact, SiMongodb, SiRedis, SiSocketdotio, SiDocker, SiTypescript } from "react-icons/si";
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
    subtitle: "Enterprise SaaS Platform",
    description:
      "A comprehensive 23-module multi-tenant SaaS ERP system for printing industry operations — from digital job slips to real-time production tracking.",
    longDescription:
      "Built an end-to-end enterprise resource planning platform with NestJS backend serving 23 interconnected modules. Features include digital job slip management, real-time KDS (Kitchen Display System) for production floors, inventory tracking, packaging workflows, and multi-tenant isolation with role-based access control.",
    techStack: [
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
    ],
    highlights: [
      "23 interconnected business modules",
      "Real-time production tracking via Socket.IO + Redis pub/sub",
      "Multi-tenant architecture with data isolation",
      "Digital job slip workflow replacing manual processes",
      "Reduced deployment time by ~60% with Docker Compose",
    ],
    category: "fullstack",
    featured: true,
    githubUrl: "#",
  },
  {
    id: "dinestay",
    title: "Dine & Stay OS",
    subtitle: "Hospitality Management System",
    description:
      "Real-time hospitality management platform with live KDS updates, table management, and order tracking for restaurants and hotels.",
    longDescription:
      "A comprehensive hospitality operating system featuring real-time kitchen display systems, table/room management, order lifecycle tracking, and integrated billing. Built with a microservices-oriented architecture supporting concurrent operations across multiple departments.",
    techStack: [
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
    highlights: [
      "Sub-200ms real-time KDS updates via Socket.IO",
      "Supports 50+ concurrent tenant sessions",
      "Integrated billing and inventory management",
      "Role-based dashboard for different departments",
    ],
    category: "fullstack",
    featured: true,
    githubUrl: "#",
  },
  {
    id: "anusandhan",
    title: "Anusandhan",
    subtitle: "Research Management System",
    description:
      "Centralized research management platform for academic institutions with document tracking, review workflows, and analytics dashboards.",
    longDescription:
      "A digital-first research management platform that streamlines academic research workflows — from proposal submission and peer review to publication tracking. Features automated pipeline for document processing and real-time collaboration tools.",
    techStack: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
    highlights: [
      "Automated document processing pipeline",
      "Real-time collaboration and review system",
      "Analytics dashboard with visual reports",
      "Role-based access for researchers and admins",
    ],
    category: "fullstack",
    featured: false,
    githubUrl: "#",
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    subtitle: "Personal Portfolio Website",
    description:
      "This very website — built with Next.js 14, Tailwind CSS, and Framer Motion. Features glassmorphism design, smooth animations, and responsive layout.",
    longDescription:
      "A modern, performant developer portfolio showcasing projects, skills, and experience. Built with Next.js App Router, Tailwind CSS for styling, and Framer Motion for animations. Features include dark mode, glassmorphic UI elements, and smooth scroll navigation.",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
    highlights: [
      "Next.js 14 App Router with SSR",
      "Glassmorphism design system",
      "Framer Motion animations",
      "Fully responsive & accessible",
    ],
    category: "frontend",
    featured: false,
    githubUrl: "#",
  },
];

export const projectCategories = [
  { key: "all", label: "All Projects" },
  { key: "fullstack", label: "Full Stack" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
] as const;
