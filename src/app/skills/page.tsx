"use client";

import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function SkillsPage() {
  return (
    <main className="relative bg-surface min-h-screen text-gray-200 pt-20">
      <Navbar />
      <Skills />
      <Footer />
    </main>
  );
}
