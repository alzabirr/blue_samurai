import React from "react";
import Link from "next/link";
import { ProjectsSection } from "@/components/ui/projects-section";

export const metadata = {
  title: "Products & Projects | Blue Samurai",
  description: "Explore our featured apps: Snapi, Quick Nap, MediRemind, and Upgrade Flutter Starter Kit.",
};

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-[#0038FF] flex flex-col font-sans selection:bg-[#CCFF00] selection:text-black relative overflow-x-clip">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0"></div>

      {/* Top Navbar */}
      <header className="relative z-30 px-6 py-6 md:px-12 md:py-8 max-w-[1440px] mx-auto w-full flex items-center justify-between">
        {/* Center Icons Navigation */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-5 md:gap-6 bg-black/20 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/15 z-10">
          {/* Home Link */}
          <Link
            href="/"
            className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
            title="Home"
          >
            <img
              src="/samuraiicon.png"
              alt="Home"
              className="w-full h-full object-contain select-none opacity-70 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Projects Link (Active) */}
          <Link
            href="/project"
            className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center scale-110 relative"
            title="Projects"
          >
            <img
              src="/projects.png"
              alt="Projects"
              className="w-full h-full object-contain select-none"
            />
            <span className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
          </Link>

          {/* Contact Link */}
          <Link
            href="/#contact"
            className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
            title="Contact"
          >
            <img
              src="/contact.png"
              alt="Contact"
              className="w-full h-full object-contain select-none opacity-70 hover:opacity-100 transition-opacity"
            />
          </Link>
        </nav>

        {/* Back Link */}
        <Link
          href="/"
          className="ml-auto inline-flex items-center gap-2 bg-[#CCFF00] hover:bg-white text-black px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95 z-20"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="hidden md:inline">Home</span>
        </Link>
      </header>

      {/* Main Content Showcase */}
      <main className="flex-1 w-full pt-4 relative z-10">
        <ProjectsSection id="project-list" />
      </main>
    </div>
  );
}
