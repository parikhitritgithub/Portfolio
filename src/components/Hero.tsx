"use client";
import React from "react";
import { FlipWords } from "./ui/flip-words";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDownload, HiOutlineArrowDown } from "react-icons/hi";
import { SiNestjs, SiReact, SiMongodb, SiTypescript } from "react-icons/si";

const floatingTech = [
  { icon: SiNestjs, color: "#E0234E", position: "left-[10%] top-[20%]" },
  { icon: SiReact, color: "#61DAFB", position: "left-[85%] top-[15%]" },
  { icon: SiMongodb, color: "#47A248", position: "left-[75%] top-[70%]" },
  { icon: SiTypescript, color: "#3178C6", position: "left-[15%] top-[75%]" },
];

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Technologies", value: "16+" },
  { label: "Modules Built", value: "23+" },
];

export default function Hero() {
  const words = ["Build", "Scale", "Ship", "Deploy"];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="dot-pattern absolute inset-0 opacity-30" />
        <div className="floating-orb w-[500px] h-[500px] bg-brand-500 top-[-10%] left-[-10%]" />
        <div className="floating-orb w-[400px] h-[400px] bg-purple-600 bottom-[-10%] right-[-10%]" />
        <div className="floating-orb w-[300px] h-[300px] bg-cyan-500 top-[40%] right-[20%]" />
      </div>

      {/* Floating Tech Icons */}
      {floatingTech.map((tech, i) => (
        <div
          key={i}
          className={`absolute hidden lg:block ${tech.position} animate-float`}
        >
          <div className="glass-card p-3 opacity-40 hover:opacity-80 transition-opacity duration-500">
            <tech.icon size={24} style={{ color: tech.color }} />
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/20 bg-brand-500/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-gray-300">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          <span className="text-white">Hi, I&apos;m </span>
          <span className="gradient-text">Parikhit</span>
        </h1>

        {/* Role */}
        <div className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 flex items-center justify-center flex-wrap gap-2">
          <span>Full Stack Developer who loves to </span>
          <FlipWords words={words} />
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I build scalable enterprise SaaS platforms with{" "}
          <span className="text-brand-300">NestJS</span>,{" "}
          <span className="text-brand-300">React</span>, and{" "}
          <span className="text-brand-300">MongoDB</span>. Passionate about
          real-time systems, clean architecture, and turning ideas into
          production-ready software.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#projects" className="btn-primary flex items-center gap-2">
            View My Work
            <HiOutlineArrowDown className="w-4 h-4" />
          </a>
          <a
            href="/autoCV (18).pdf"
            download="Parikhit_Kurmi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2"
          >
            <HiOutlineDownload className="w-4 h-4" />
            Download Resume
          </a>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 sm:gap-16 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text-cyan">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/parikhitritgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-card text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/parikhit-kurmi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-card text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-brand-500/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
        </div>
      </div>
    </section>
  );
}
