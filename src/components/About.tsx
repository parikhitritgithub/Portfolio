"use client";
import React from "react";
import { HiCode, HiServer, HiLightningBolt } from "react-icons/hi";

const aboutCards = [
  {
    icon: HiCode,
    title: "Frontend",
    description:
      "Building responsive, accessible UIs with React, Next.js, and TypeScript. Pixel-perfect implementations with smooth animations.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: HiServer,
    title: "Backend",
    description:
      "Architecting scalable APIs with NestJS, Express, and Node.js. Designing multi-tenant systems with real-time capabilities.",
    gradient: "from-brand-500 to-purple-500",
  },
  {
    icon: HiLightningBolt,
    title: "Real-Time",
    description:
      "Socket.IO + Redis pub/sub for live production tracking, KDS updates, and collaborative features with sub-200ms latency.",
    gradient: "from-amber-500 to-orange-500",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading">
            A passionate developer who turns complex business problems into
            elegant software solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              I&apos;m a{" "}
              <span className="text-white font-medium">
                Full Stack Developer
              </span>{" "}
              specializing in building enterprise-grade SaaS platforms. My
              journey started with curiosity about how software works and evolved
              into a passion for creating systems that solve real-world
              operational challenges.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I&apos;ve built a{" "}
              <span className="text-brand-300">23-module ERP system</span> for
              the printing industry, a{" "}
              <span className="text-brand-300">
                real-time hospitality platform
              </span>
              , and a research management system — all featuring multi-tenant
              architectures, real-time communication, and production-ready
              deployments.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I&apos;m not coding, I&apos;m exploring new technologies,
              contributing to open source, or participating in hackathons and
              coding contests.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Location", value: "India" },
                { label: "Focus", value: "Enterprise SaaS" },
                { label: "Languages", value: "TS, JS, Python" },
                { label: "Approach", value: "Clean Architecture" },
              ].map((fact, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {fact.label}
                  </div>
                  <div className="text-sm text-white font-medium">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            {aboutCards.map((card) => (
              <div
                key={card.title}
                className="glass-card p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {card.description}
                    </p>
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
