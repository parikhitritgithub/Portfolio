"use client";
import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "nav-glass shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-3 group hover:scale-105 transition-transform"
            >
              {/* Logo Badge Icon */}
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-brand-500 via-purple-500 to-cyan-500 opacity-70 blur-xs group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-10 h-10 rounded-xl bg-surface-100 border border-white/10 flex items-center justify-center shadow-inner">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-brand-300 via-purple-300 to-cyan-300 text-lg tracking-wider">
                    प
                  </span>
                </div>
              </div>

              {/* Devnagari Name */}
              <span className="text-xl font-bold tracking-wide text-white group-hover:text-brand-300 transition-colors">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-brand-300 drop-shadow-sm">
                  परीक्षित्
                </span>
                <span className="text-brand-400 font-extrabold text-2xl leading-none inline-block ml-0.5 animate-pulse">
                  .
                </span>
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-brand-300 bg-brand-500/10 border border-brand-500/20"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                </button>
              ))}
            </nav>

            {/* Resume Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="btn-primary text-sm px-5 py-2.5"
              >
                Let&apos;s Talk
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <nav className="absolute right-0 top-0 bottom-0 w-72 bg-surface-100 border-l border-brand-500/10 p-6 pt-24 flex flex-col gap-2 transition-transform">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  activeSection === link.href.replace("#", "")
                    ? "bg-brand-500/10 text-brand-300 border border-brand-500/20"
                    : "text-gray-400 hover:text-white hover:bg-surface-200"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-white/5">
              <button
                onClick={() => scrollToSection("#contact")}
                className="btn-primary w-full text-center text-sm"
              >
                Let&apos;s Talk
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
