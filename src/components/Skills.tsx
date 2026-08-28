"use client";
import React, { useState } from "react";
import { skills, skillCategories, type Skill } from "@/Data/Skills";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${
            i < rating ? "text-amber-400" : "text-gray-600"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="glass-card p-5 group cursor-default">
      <div className="flex items-start gap-4">
        <div
          className="skill-icon-wrapper shrink-0 group-hover:scale-110 transition-transform duration-300"
          style={{
            borderColor: `${skill.color}30`,
            background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}05)`,
          }}
        >
          <skill.icon size={24} style={{ color: skill.color }} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-white font-semibold text-base">
              {skill.name}
            </h3>
            <StarRating rating={skill.rating} />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
            {skill.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="dot-pattern absolute inset-0" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="section-subheading">
            Technologies I use to build scalable, real-time enterprise
            applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat) => (
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

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
