"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  category: "Mobile Apps" | "Developer Kits" | "Health & Lifestyle" | "AI & Productivity";
  image: string;
  description: string;
  tags: string[];
  gradient: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  highlights: string[];
  techStack: string[];
  platform: string;
  architecture: string;
  status: string;
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
    gradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
    accentColor: "#00F0FF",
    badgeBg: "bg-[#CCFF00]",
    badgeText: "text-black",
    highlights: [
      "Zero-latency on-device OCR engine with no server roundtrips",
      "Automatic capture detection with background categorization",
      "Embedded voice notes for quick context tagging",
      "Instant fuzzy search across all text contained in screenshots",
    ],
    techStack: ["Flutter / Swift", "ML Kit OCR", "SQLite", "Audio Engine"],
    platform: "iOS & Android",
    architecture: "Offline-First Clean Architecture",
    status: "Production Ready",
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
    gradient: "from-amber-500/20 via-rose-600/10 to-transparent",
    accentColor: "#FFB800",
    badgeBg: "bg-[#CCFF00]",
    badgeText: "text-black",
    highlights: [
      "Aesthetic 8-bit retro alarm typography and nostalgic sounds",
      "Cognitive mini-games that disable snooze until brain is fully awake",
      "Scientific 20-min power nap timer and sleep cycle calculator",
      "Encrypted dream diary with emotional tone tracking",
    ],
    techStack: ["Flutter", "Audio Synthesizer", "Hive DB", "State Notifier"],
    platform: "iOS & Android",
    architecture: "Modular Gamified Architecture",
    status: "Featured App",
  },
  {
    id: "mediremind",
    name: "MediRemind",
    tagline: "Private & Reliable Medication Tracker",
    category: "Mobile Apps",
    image: "/assets/projects/medi-reminder.png",
    description:
      "A simple, beautiful, and reliable medication reminder app designed to help you stay on track with your Medicine. Set custom schedules, add dose instructions (e.g. before/after meal), and track your progress securely on device.",
    tags: ["Dose Instructions", "Custom Schedules", "On-Device", "Progress Tracker"],
    gradient: "from-emerald-400/20 via-teal-600/10 to-transparent",
    accentColor: "#00FF87",
    badgeBg: "bg-[#0038FF]",
    badgeText: "text-white",
    highlights: [
      "Custom schedule builder (daily, cyclic intervals, as-needed doses)",
      "Strict context instructions (before/after food, with plenty of water)",
      "100% private: no tracking, no cloud telemetry, on-device encrypted store",
      "Streak tracking and adherence score to maintain health habits",
    ],
    techStack: ["Flutter", "Local Notifications", "Secure Storage", "Bloc"],
    platform: "Cross Platform",
    architecture: "Privacy-Preserving Domain Architecture",
    status: "Active Release",
  },
  {
    id: "upgrade-flutter",
    name: "Upgrade Flutter Starter Kit",
    tagline: "Production-Ready Clean Architecture Starter Kit",
    category: "Developer Kits",
    image: "/assets/projects/upgrade.png",
    description:
      "A modern, production ready Flutter Starter Kit designed to accelerate app development with clean architecture, reusable components, and scalable structure.",
    tags: ["Flutter", "Clean Architecture", "Modular", "Scalable"],
    gradient: "from-purple-500/20 via-indigo-600/10 to-transparent",
    accentColor: "#A855F7",
    badgeBg: "bg-[#CCFF00]",
    badgeText: "text-black",
    highlights: [
      "Production-grade Domain-Driven Clean Architecture foundation",
      "Pre-configured dependency injection, dio HTTP layer, and routing",
      "Comprehensive widget design system and theme tokens",
      "Zero-config unit, widget, and integration testing setup",
    ],
    techStack: ["Flutter 3.x", "Dart", "GetIt / Bloc", "Dio / Freezed"],
    platform: "SDK / Template",
    architecture: "Domain-Driven Clean Architecture",
    status: "Open Source Tooling",
  },
];

export function ProjectsSection({ id = "project" }: { id?: string }) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [modalTab, setModalTab] = useState<"overview" | "features" | "tech">("overview");

  const categories = ["All", "Mobile Apps", "AI & Productivity", "Developer Kits", "Health & Lifestyle"];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        activeFilter === "All" ||
        project.category === activeFilter ||
        (activeFilter === "Mobile Apps" &&
          (project.category === "Mobile Apps" ||
            project.category === "Health & Lifestyle" ||
            project.category === "AI & Productivity"));

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        project.name.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id={id} className="relative z-20 text-white w-full px-4 sm:px-6 lg:px-12 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Hero Banner */}
        <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/20 p-8 sm:p-12 md:p-16 mb-16 shadow-[0_20px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl">
          {/* Subtle Ambient Glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#CCFF00]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs md:text-sm font-black uppercase tracking-widest text-[#CCFF00] mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
              <span>Blue Samurai Engineering Suite</span>
            </div>

            {/* Huge Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white">
              CRAFTED FOR <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] via-white to-[#00F0FF]">
                PERFECTION & SPEED
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80 font-medium max-w-2xl leading-relaxed">
              Explore our production-grade applications and engineering starter kits. Built with offline-first intelligence, zero telemetry bloat, and modern user ergonomics.
            </p>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full mt-10 max-w-3xl">
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-4 flex flex-col items-center backdrop-blur-sm">
                <span className="text-2xl sm:text-3xl font-black text-[#CCFF00]">04</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/70 mt-1">
                  Active Apps
                </span>
              </div>
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-4 flex flex-col items-center backdrop-blur-sm">
                <span className="text-2xl sm:text-3xl font-black text-[#00F0FF]">100%</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/70 mt-1">
                  Offline-First
                </span>
              </div>
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-4 flex flex-col items-center backdrop-blur-sm">
                <span className="text-2xl sm:text-3xl font-black text-[#CCFF00]">0.0s</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/70 mt-1">
                  Cloud Lag
                </span>
              </div>
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-4 flex flex-col items-center backdrop-blur-sm">
                <span className="text-2xl sm:text-3xl font-black text-white">Clean</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/70 mt-1">
                  Architecture
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#CCFF00] text-black shadow-[0_0_20px_rgba(204,255,0,0.4)] scale-105"
                    : "bg-black/30 hover:bg-white/15 text-white/80 border border-white/15 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search apps or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/40 border border-white/20 rounded-full py-2.5 pl-10 pr-4 text-xs md:text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#CCFF00] transition-colors"
            />
            <svg
              className="w-4 h-4 text-white/50 absolute left-3.5 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-white/60 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center my-8">
            <p className="text-white/60 font-semibold text-lg">No products match &quot;{searchQuery}&quot;.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("All");
              }}
              className="mt-4 px-6 py-2 bg-[#CCFF00] text-black font-black rounded-full text-xs uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setModalTab("overview");
                }}
                className="group relative bg-gradient-to-b from-white/[0.09] to-white/[0.03] rounded-[2.5rem] p-8 md:p-10 border border-white/15 hover:border-[#CCFF00]/70 shadow-[0_15px_45px_rgba(0,0,0,0.25)] hover:shadow-[0_25px_60px_rgba(204,255,0,0.15)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden cursor-pointer backdrop-blur-xl"
              >
                {/* Background Ambient Gradient for card */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none`}
                />

                {/* Big decorative index watermark */}
                <div className="absolute right-6 top-6 text-7xl md:text-8xl font-black text-white/[0.04] group-hover:text-white/[0.08] select-none pointer-events-none transition-colors">
                  0{idx + 1}
                </div>

                <div className="relative z-10">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider ${project.badgeBg} ${project.badgeText} shadow-md`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                      {project.category}
                    </span>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {project.status}
                    </span>
                  </div>

                  {/* App Visual & Identity Header */}
                  <div className="flex items-start sm:items-center gap-6 mb-6">
                    {/* App Icon Container */}
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-black/40 border-2 border-white/20 p-2.5 flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:scale-105 group-hover:border-[#CCFF00] transition-all duration-300">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-contain select-none drop-shadow-xl"
                        loading="lazy"
                      />
                      {/* Gloss Overlay */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                    </div>

                    <div>
                      <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white group-hover:text-[#CCFF00] transition-colors leading-tight">
                        {project.name}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-white/70 mt-1 line-clamp-1">
                        {project.tagline}
                      </p>
                      <div className="inline-block mt-2 text-[10px] font-mono uppercase tracking-widest text-[#CCFF00] bg-black/50 px-2.5 py-1 rounded-md border border-white/10">
                        {project.platform} • {project.architecture}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-white/80 leading-relaxed font-normal mb-6">
                    {project.description}
                  </p>

                  {/* Highlight Bullets */}
                  <div className="space-y-2 mb-6 bg-black/30 border border-white/10 rounded-2xl p-4">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                        <span className="w-4 h-4 rounded-full bg-[#CCFF00] text-black font-black text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1 rounded-xl bg-white/[0.07] hover:bg-white/[0.15] text-white/90 border border-white/10 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="relative z-10 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/50">
                    Click to explore details
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                      setModalTab("overview");
                    }}
                    className="inline-flex items-center gap-2 bg-[#CCFF00] hover:bg-white text-black font-black px-5 py-2.5 rounded-full text-xs md:text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                  >
                    <span>View Blueprint</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-[#001D80] border border-white/25 rounded-[2.5rem] max-w-3xl w-full p-6 sm:p-10 relative shadow-[0_25px_80px_rgba(0,0,0,0.7)] text-white overflow-hidden max-h-[92vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center font-black transition-all cursor-pointer z-20 border border-white/20"
                title="Close"
              >
                ✕
              </button>

              {/* Modal Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-white/15">
                <div className="w-24 h-24 rounded-3xl bg-black/40 border-2 border-[#CCFF00] p-3 flex items-center justify-center flex-shrink-0 shadow-2xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${selectedProject.badgeBg} ${selectedProject.badgeText}`}
                    >
                      {selectedProject.category}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
                      {selectedProject.status}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                    {selectedProject.name}
                  </h3>
                  <p className="text-sm font-semibold text-white/70 mt-1">
                    {selectedProject.tagline}
                  </p>
                </div>
              </div>

              {/* Modal Tabs */}
              <div className="flex items-center gap-2 my-5 border-b border-white/15 pb-3">
                <button
                  type="button"
                  onClick={() => setModalTab("overview")}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                    modalTab === "overview"
                      ? "bg-[#CCFF00] text-black"
                      : "bg-white/10 text-white/70 hover:text-white"
                  }`}
                >
                  Overview
                </button>
                <button
                  type="button"
                  onClick={() => setModalTab("features")}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                    modalTab === "features"
                      ? "bg-[#CCFF00] text-black"
                      : "bg-white/10 text-white/70 hover:text-white"
                  }`}
                >
                  Key Highlights
                </button>
                <button
                  type="button"
                  onClick={() => setModalTab("tech")}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                    modalTab === "tech"
                      ? "bg-[#CCFF00] text-black"
                      : "bg-white/10 text-white/70 hover:text-white"
                  }`}
                >
                  Architecture & Specs
                </button>
              </div>

              {/* Modal Tab Content (Scrollable) */}
              <div className="overflow-y-auto pr-2 space-y-6 flex-1">
                {modalTab === "overview" && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#CCFF00] mb-2">
                        Product Description
                      </h4>
                      <p className="text-white/90 leading-relaxed text-sm sm:text-base font-normal bg-black/20 p-4 rounded-2xl border border-white/10">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="bg-black/30 border border-white/10 rounded-2xl p-4">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">
                          Target Platform
                        </span>
                        <span className="text-sm font-bold text-white mt-1 block">
                          {selectedProject.platform}
                        </span>
                      </div>
                      <div className="bg-black/30 border border-white/10 rounded-2xl p-4">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">
                          Architecture Pattern
                        </span>
                        <span className="text-sm font-bold text-[#CCFF00] mt-1 block">
                          {selectedProject.architecture}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {modalTab === "features" && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#CCFF00] mb-2">
                      Engineering Highlights
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-white/90 bg-black/25 border border-white/10 p-3.5 rounded-2xl"
                        >
                          <span className="w-5 h-5 rounded-full bg-[#CCFF00] text-black font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span className="font-medium">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {modalTab === "tech" && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#CCFF00] mb-2">
                        Tech Stack Components
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-bold px-3.5 py-1.5 rounded-xl bg-black/40 text-[#00F0FF] border border-[#00F0FF]/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#CCFF00] mb-2">
                        Categorical Tags
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/10 text-white/90 border border-white/15"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between">
                <span className="text-xs font-mono text-white/50">
                  ID: {selectedProject.id}
                </span>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 rounded-full bg-[#CCFF00] hover:bg-white text-black font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg"
                  >
                    Got It
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Banner Call-to-action */}
        <div className="mt-16 md:mt-24 bg-gradient-to-r from-black/60 via-black/40 to-black/60 border border-white/20 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
          <div className="relative z-10 text-center md:text-left">
            <span className="inline-block bg-[#CCFF00] text-black font-black text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 shadow-md">
              Need a Custom Solution?
            </span>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Have an exciting project in mind?
            </h3>
            <p className="text-white/80 text-sm md:text-base mt-2 max-w-xl font-medium">
              We engineer mission-critical mobile apps, offline AI tooling, and clean architecture systems. Let&apos;s build something phenomenal.
            </p>
          </div>

          <Link
            href="/#contact"
            className="relative z-10 inline-flex items-center gap-3 bg-[#CCFF00] hover:bg-white text-black font-black px-8 py-4 rounded-full text-sm md:text-base tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(204,255,0,0.5)] hover:scale-105 active:scale-95 flex-shrink-0 cursor-pointer"
          >
            <span>Get In Touch</span>
            <svg
              className="w-5 h-5"
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

          {/* Decorative Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#CCFF00]/10 blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
