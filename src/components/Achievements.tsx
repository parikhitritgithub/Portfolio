"use client";
import React from "react";
import { HiAcademicCap, HiCode, HiCheckCircle } from "react-icons/hi";
import { FaTrophy } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const achievementsList = [
  {
    icon: HiAcademicCap,
    title: "IEEE INSTCon 2026 Accepted Research Paper",
    subtitle: "Organized by NIT Rourkela | Paper ID: 1611",
    description:
      'Principal Author of "Real-Time Interactive 3D Generation: A Lightweight Hybrid Multi-Model Framework" — peer-reviewed and selected for IEEE INSTCon 2026 conference proceedings.',
    highlight: "Principal Author (Paper ID: 1611)",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: HiCode,
    title: "GirlScript Summer of Code (GSSOC) 2024",
    subtitle: "Open Source Contributor",
    description:
      "Contributed to GirlScript Summer of Code 2024 as an open-source contributor across multiple repositories, fixing production bugs and refactoring front-end UI.",
    highlight: "GSSOC 2024 Contributor",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: HiCheckCircle,
    title: "50+ Merged Pull Requests",
    subtitle: "Open Source & Industry Contributions",
    description:
      "Successfully authored, tested, and merged 50+ pull requests across corporate internships, group SaaS projects, and open-source repositories throughout academic career.",
    highlight: "50+ Production PRs Merged",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: SiLeetcode,
    title: "305+ LeetCode Problems Solved",
    subtitle: "Contest Rating: 1,403",
    description:
      "Demonstrated strong problem-solving skills in Data Structures & Algorithms, Object-Oriented Programming, and System Design with a 1,403 contest rating.",
    highlight: "1,403 Contest Rating",
    gradient: "from-yellow-500 to-amber-600",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32 bg-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <FaTrophy className="w-4 h-4" />
            Certifications & Recognition
          </div>
          <h2 className="section-heading">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subheading">
            Key milestones, research publications, and open-source contributions
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievementsList.map((item, idx) => (
            <div key={idx} className="glass-card p-6 md:p-8 relative overflow-hidden group">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-500/10 rounded-full blur-2xl group-hover:bg-brand-500/20 transition-all duration-500" />

              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-brand-300 mb-2">
                    {item.highlight}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-mono mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
