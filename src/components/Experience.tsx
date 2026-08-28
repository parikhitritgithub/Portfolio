"use client";
import React from "react";
import { experiences, education } from "@/Data/Experience";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="dot-pattern absolute inset-0" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subheading">
            My journey building enterprise software and growing as a developer
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-purple-500/30 to-transparent" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-6 top-2 w-5 h-5 rounded-full bg-surface border-2 border-brand-400 flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-brand-400" />
                </div>

                <div className="glass-card p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <HiBriefcase className="w-4 h-4 text-brand-400" />
                        <span className="text-xs font-medium text-brand-400 uppercase tracking-wider">
                          {exp.type === "work"
                            ? "Work Experience"
                            : "Project"}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-brand-300 text-sm font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 font-mono shrink-0">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((r, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <span className="w-1 h-1 rounded-full bg-brand-400 mt-2 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-surface-200/70 border border-white/5 text-xs text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Education */}
            {education.map((edu) => (
              <div
                key={edu.id}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-6 top-2 w-5 h-5 rounded-full bg-surface border-2 border-purple-400 flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                </div>

                <div className="glass-card p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <HiAcademicCap className="w-4 h-4 text-purple-400" />
                        <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">
                          Education
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-purple-300 text-sm font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 font-mono shrink-0">
                      {edu.duration}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {/* Coursework */}
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/15 text-xs text-purple-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
