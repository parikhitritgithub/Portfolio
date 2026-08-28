"use client";
import React, { useState } from "react";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePaperAirplane,
  HiCheckCircle,
  HiExclamationCircle,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const contactInfo = [
  {
    icon: HiOutlineMail,
    label: "Email",
    value: "parikhitkurmi44@gmail.com",
    href: "mailto:parikhitkurmi44@gmail.com",
  },
  {
    icon: HiOutlineLocationMarker,
    label: "Location",
    value: "India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/parikhitritgithub",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/parikhit-kurmi",
  },
  {
    icon: FaTwitter,
    label: "Twitter",
    href: "https://twitter.com/parikhitkurmi",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSubmitted(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      setErrorMessage(
        err.message || "Something went wrong while sending your message."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading">
            Have a project in mind or want to collaborate? Send me a message and
            let&apos;s build something extraordinary.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          {/* Left Side: Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Let&apos;s build something great
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Whether it&apos;s a full-stack SaaS platform, real-time backend
                architecture, or AI/ML solutions — I&apos;m ready to bring your
                ideas to life.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white hover:text-brand-300 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-white">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                Find me on
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass-card text-gray-400 hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
              {/* Success Notification */}
              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center gap-3 text-sm">
                  <HiCheckCircle className="w-5 h-5 shrink-0" />
                  <span>
                    Thank you! Your message has been sent successfully. I will get back to you soon.
                  </span>
                </div>
              )}

              {/* Error Notification */}
              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 flex items-center gap-3 text-sm">
                  <HiExclamationCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-gray-500 uppercase tracking-wider mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-200/70 border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500/40 focus:ring-1 focus:ring-brand-500/20 transition-all duration-300 text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-gray-500 uppercase tracking-wider mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-200/70 border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500/40 focus:ring-1 focus:ring-brand-500/20 transition-all duration-300 text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-xs text-gray-500 uppercase tracking-wider mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-surface-200/70 border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500/40 focus:ring-1 focus:ring-brand-500/20 transition-all duration-300 text-sm"
                  placeholder="Project Collaboration"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-xs text-gray-500 uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-surface-200/70 border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500/40 focus:ring-1 focus:ring-brand-500/20 transition-all duration-300 text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <HiOutlinePaperAirplane className="w-4 h-4 rotate-90" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
