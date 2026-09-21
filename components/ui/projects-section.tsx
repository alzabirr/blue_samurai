"use client";

import React, { useState } from "react";
import Link from "next/link";

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  gradient: string;
  badgeBg: string;
  badgeText: string;
  highlights: string[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "snapi",
    name: "Snapi",
    tagline: "Intelligent Screenshot & OCR Management",
    category: "AI & Productivity",
    image: "/assets/projects/snapi_.png",
    description:
      "An intelligent screenshot management app that automatically detects captures, extracts text using offline OCR, and categorizes them with advanced search, voice notes, and recovery options.",
    tags: ["Offline OCR", "Auto-Detection", "Voice Notes", "Smart Search"],
    gradient: "from-blue-600 to-indigo-800",
    badgeBg: "bg-[#CCFF00]",
    badgeText: "text-black",
    highlights: [
      "Offline On-Device Text Extraction (OCR)",
      "Automated capture detection & organized vaults",
      "Integrated audio/voice notes for every capture",
      "Advanced multi-parameter search & recovery system",
    ],
  },
  {
    id: "quick-nap",
    name: "Quick Nap",
    tagline: "Gamified Retro Smart Alarm & Sleep Coach",
    category: "Health & Lifestyle",
    image: "/assets/projects/nappy.png",
    description:
      "A retro style smart alarm clock, power nap timer, and sleep cycle alarm designed to defeat sleep inertia and wake up your brain instantly through fun mini-games. Includes a personal dream diary and sleep coaching guides.",
    tags: ["Retro Clock", "Mini-Games", "Power Nap", "Dream Diary"],
    gradient: "from-amber-500 to-rose-600",
    badgeBg: "bg-black",
    badgeText: "text-[#CCFF00]",
    highlights: [
      "Retro 8-bit & aesthetic clock typography",
      "Cognitive wake-up mini games to eliminate grogginess",
      "Power nap scientific timer & optimal sleep cycle tracker",
      "Encrypted personal dream diary and coaching guides",
    ],
  },
  {
    id: "mediremind",
    name: "MediRemind",
    tagline: "Private & Reliable Medication Tracker",
    category: "Health & Medical",
    image: "/assets/projects/medi-reminder.png",
    description:
      "A simple, beautiful, and reliable medication reminder app designed to help you stay on track with your Medicine. Set custom schedules, add dose instructions (e.g. before/after meal), and track your progress securely on device.",
    tags: ["Dose Instructions", "Custom Schedules", "On-Device", "Progress Tracker"],
    gradient: "from-emerald-500 to-teal-700",
    badgeBg: "bg-[#0038FF]",
    badgeText: "text-white",
    highlights: [
      "Flexible schedule customization (daily, intervals, as needed)",
      "Precise dosage rules (before/after meal, with water)",
      "100% private and on-device health record storage",
      "Comprehensive adherence tracking and streak monitoring",
    ],
  },
  {
    id: "upgrade-flutter",
    name: "Upgrade Flutter Starter Kit",
    tagline: "Production-Ready Clean Architecture Starter Kit",
    category: "Developer Tooling",
    image: "/assets/projects/upgrade.png",
    description:
      "A modern, production ready Flutter Starter Kit designed to accelerate app development with clean architecture, reusable components, and scalable structure.",
    tags: ["Flutter", "Clean Architecture", "Modular", "Scalable"],
    gradient: "from-sky-500 to-blue-700",
    badgeBg: "bg-[#CCFF00]",
    badgeText: "text-black",
    highlights: [
      "Strict Domain-Driven Clean Architecture implementation",
      "Pre-configured state management, routing, & dependency injection",
      "Comprehensive design system with high-utility reusable widgets",
      "Ready-to-deploy CI/CD scripts and testing harnesses",
    ],
  },
];

export function ProjectsSection({ id = "project" }: { id?: string }) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "AI & Productivity", "Health & Lifestyle", "Health & Medical", "Developer Tooling"];

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section
      id={id}
      className="relative z-20 bg-[#F4F6FB] text-black py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-25px_60px_rgba(0,26,153,0.15)] border-t border-white/60"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0038FF] text-white text-xs md:text-sm font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4 shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
            Our Product Suite
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-neutral-900 uppercase">
            Featured <span className="text-[#0038FF]">Products</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-neutral-600 max-w-2xl font-medium">
            Explore our cutting-edge applications built with clean architecture, offline-first intelligence, and thoughtful user experiences.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#0038FF] text-white shadow-md scale-105"
                    : "bg-white text-neutral-600 hover:bg-neutral-100 hover:text-black border border-neutral-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white rounded-[2rem] md:rounded-[2.5rem] p-7 md:p-9 border border-neutral-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Top Bar with Category Badge */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span
                    className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${project.badgeBg} ${project.badgeText} shadow-sm`}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs font-bold text-neutral-400">
                    0{idx + 1}
                  </span>
                </div>

                {/* Project Image & Name */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-neutral-50 border-2 border-neutral-100 shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0 flex items-center justify-center p-2">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-contain select-none"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 group-hover:text-[#0038FF] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-neutral-500 mt-1">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-normal mb-6">
                  {project.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-lg bg-neutral-100 text-neutral-700 border border-neutral-200/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Click to inspect details
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="inline-flex items-center gap-2 bg-neutral-900 group-hover:bg-[#0038FF] text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-colors duration-200 cursor-pointer shadow-sm group-hover:shadow-md"
                >
                  View Details
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Details */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-[2rem] max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh] border border-neutral-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700 font-bold transition-colors cursor-pointer"
                title="Close"
              >
                ✕
              </button>

              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-neutral-50 border border-neutral-200 p-2 flex items-center justify-center flex-shrink-0">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${selectedProject.badgeBg} ${selectedProject.badgeText} mb-1.5`}
                  >
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-neutral-900">
                    {selectedProject.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-neutral-500">
                    {selectedProject.tagline}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
                    About the product
                  </h4>
                  <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-800">
                        <span className="w-5 h-5 rounded-full bg-[#CCFF00] text-black font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Technology & Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-bold px-3 py-1.5 rounded-xl bg-neutral-100 text-neutral-800 border border-neutral-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full bg-[#0038FF] text-white font-bold text-sm hover:bg-[#002499] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Banner Call-to-action */}
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-[#0038FF] to-[#002499] rounded-[2.5rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 text-center md:text-left">
            <span className="inline-block bg-[#CCFF00] text-black font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              Need a Custom Solution?
            </span>
            <h4 className="text-2xl md:text-3xl font-black tracking-tight">
              Have an exciting project in mind?
            </h4>
            <p className="text-white/80 text-sm md:text-base mt-2 max-w-xl">
              Let&apos;s collaborate to build high-performance mobile apps, web solutions, and custom developer tooling.
            </p>
          </div>

          <Link
            href="/#contact"
            className="relative z-10 inline-flex items-center gap-2 bg-[#CCFF00] text-black hover:bg-white font-black px-7 py-3.5 rounded-full text-sm md:text-base tracking-wide transition-all shadow-lg hover:scale-105 active:scale-95 flex-shrink-0 cursor-pointer"
          >
            Get In Touch
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>

          {/* Decorative subtle background circle */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
