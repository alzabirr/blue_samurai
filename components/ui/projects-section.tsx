"use client";

import React, { useState } from "react";
import ParticleText from "./ParticleText";

const CATEGORIES = ["ALL", "SOCIALFI", "DEFI", "CREATOR TOOLS", "SMART CONTRACTS"] as const;

const PROJECTS = [
  {
    id: "samurai-swap",
    title: "SAMURAI SWAP",
    category: "SOCIALFI",
    badge: "LIVE ON BASE",
    description:
      "Next-gen decentralized exchange with integrated social tipping, community bonding curves, and zero gas route optimization.",
    stats: [
      { label: "24H VOLUME", value: "$2,480,210" },
      { label: "CREATOR POOLS", value: "142+" },
    ],
    pillBadge: "0.05% SWAP FEE",
    tags: ["Base L2", "Uniswap V3", "Wagmi", "Next.js"],
  },
  {
    id: "base-club",
    title: "BASE CLUB PROTOCOL",
    category: "CREATOR TOOLS",
    badge: "100% ON-CHAIN",
    description:
      "Subscription streaming protocol distributing micro-rewards to verified creators every single second with automated staking.",
    stats: [
      { label: "ACTIVE CREATORS", value: "3,250+" },
      { label: "DAILY STREAMED", value: "48,220 $CLUB" },
    ],
    pillBadge: "23 422 PTS / SEC",
    tags: ["ERC-4337", "Account Abstraction", "Viem", "Supabase"],
  },
  {
    id: "neon-vault",
    title: "NEON VAULT",
    category: "DEFI",
    badge: "AUDITED",
    description:
      "Zero-loss yield aggregator and staking vault with automated reinvestment, real-time APY calculation, and insured liquidity.",
    stats: [
      { label: "TOTAL TVL", value: "$14.8M" },
      { label: "AVERAGE APY", value: "24.6%" },
    ],
    pillBadge: "AUTO-COMPOUND",
    tags: ["Solidity", "Hardhat", "Chainlink", "OpenZeppelin"],
  },
  {
    id: "shadow-pass",
    title: "SHADOW PASS",
    category: "SMART CONTRACTS",
    badge: "SOULBOUND",
    description:
      "Sybil-resistant on-chain reputation and identity pass granting tiered access to exclusive creator drops and governance voting.",
    stats: [
      { label: "MINTS", value: "18,940" },
      { label: "COMMUNITIES", value: "85+" },
    ],
    pillBadge: "GASLESS MINT",
    tags: ["ERC-721A", "Zero Knowledge", "Foundry", "The Graph"],
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filteredProjects =
    activeCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="project" className="relative z-10 w-full max-w-[1440px] mx-auto px-4 py-16 md:py-24">
      {/* Section Header with ParticleText */}
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
          Interactive Portfolio
        </div>

        {/* Dynamic Particle Typography */}
        <div className="w-full h-32 md:h-44 flex items-center justify-center">
          <ParticleText
            text="PROJECTS"
            particleSize={2.2}
            density={3.5}
            color="#ffffff"
            highlightColor="#CCFF00"
            scatter={160}
            gatherDuration={1400}
            stagger={380}
            pointerRepel={45}
            repelRadius={110}
            idleDrift={0.6}
            trigger="hover"
            fontSize="clamp(3.5rem, 10vw, 6.5rem)"
            fontWeight={900}
            fontFamily='"Arial Black", Impact, sans-serif'
            glow
          />
        </div>

        <p className="text-white/80 text-xs md:text-sm max-w-md font-medium mt-1">
          Explore on-chain protocols, creator mechanics, and decentralized applications. Hover or move your cursor to scatter particles.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#CCFF00] text-black shadow-lg shadow-[#CCFF00]/20 scale-105"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-[#F8F9FA] text-black rounded-[2rem] p-6 md:p-8 border border-white/10 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Row: Category & Badges */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#0038FF]">
                  {project.category}
                </span>
                <div className="flex items-center gap-2">
                  <span className="bg-[#0038FF] text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {project.badge}
                  </span>
                  <span className="bg-[#CCFF00] text-black text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {project.pillBadge}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl md:text-2xl font-black uppercase leading-tight tracking-tight mb-2 group-hover:text-[#0038FF] transition-colors">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm text-black/70 font-medium leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Stats & Tags */}
            <div>
              <div className="grid grid-cols-2 gap-3 py-3 px-4 rounded-xl bg-black/[0.04] mb-5">
                {project.stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-[9px] font-bold text-black/50 uppercase tracking-wider">
                      {s.label}
                    </p>
                    <p className="text-base md:text-lg font-black text-black leading-tight">
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 items-center">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold bg-white text-black/80 border border-black/10 px-2.5 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
