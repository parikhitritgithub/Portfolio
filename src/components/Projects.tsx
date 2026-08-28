"use client";
import React, { useState } from "react";
import { projects, projectCategories, type Project } from "@/Data/Projects";
import { HiExternalLink, HiOutlineCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`glass-card overflow-hidden group ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-500/20 text-brand-300 border border-brand-500/30">
            Featured
          </span>
        </div>
      )}

      <div className={`p-6 md:p-8 ${project.featured ? "md:flex md:gap-8" : ""}`}>
        {/* Left: Content */}
        <div className={`${project.featured ? "md:flex-1" : ""}`}>
          {/* Category Tag */}
          <div className="flex items-center gap-2 mb-3">
            <HiOutlineCode className="w-4 h-4 text-brand-400" />
            <span className="text-xs font-medium text-brand-400 uppercase tracking-wider">
              {project.subtitle}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
            {isExpanded ? project.longDescription : project.description}
          </p>

          {/* Read More Toggle */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-brand-400 hover:text-brand-300 transition-colors mb-4 underline underline-offset-4"
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>

          {/* Highlights */}
          {isExpanded && (
            <ul className="space-y-2 mb-6">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right: Tech & Links */}
        <div
          className={`${
            project.featured
              ? "md:w-72 md:shrink-0 md:flex md:flex-col md:justify-between"
              : ""
          }`}
        >
          {/* Tech Stack */}
          <div className="mb-6">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">
              Tech Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-200/70 border border-white/5 text-sm"
                >
                  <tech.icon
                    size={14}
                    style={{ color: tech.color }}
                  />
                  <span className="text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-200/70 border border-white/5 text-gray-300 hover:text-white hover:border-brand-500/30 transition-all duration-300 text-sm"
              >
                <FaGithub size={16} />
                Source
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-300 hover:bg-brand-500/20 transition-all duration-300 text-sm"
              >
                <HiExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading">
            Enterprise-scale applications I&apos;ve designed and built from the
            ground up
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-brand-500/20 text-brand-300 border border-brand-500/30"
                  : "bg-surface-200/50 text-gray-400 border border-transparent hover:text-white hover:bg-surface-300/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
