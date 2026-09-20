"use client";

import React from "react";
import { ScrollBurnText } from "@/components/ui/scroll-burn-text";

// --- Custom SVG Components for Hand-Drawn Accents ---


const ArrowBlack1 = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full text-black stroke-current overflow-visible"
    fill="none"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20,80 Q 40,20 80,40" />
    <path d="M60,20 L80,40 L50,60" />
  </svg>
);

const ArrowBlack2 = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full text-black stroke-current overflow-visible"
    fill="none"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20,80 Q 40,20 80,40" />
    <path d="M60,20 L80,40 L50,60" />
  </svg>
);


const PROJECT_SECTIONS = [
  {
    text: "Meet our products",
    className: "text-[clamp(2.5rem,8.5vw,8rem)]",
  },
  {
    text: "Snappy",
    className: "text-[clamp(4.5rem,18vw,16rem)]",
  },
  {
    text: "Medi reminder",
    className: "text-[clamp(3.5rem,12vw,11rem)]",
  },
  {
    text: "Krabby",
    className: "text-[clamp(4.5rem,18vw,16rem)]",
  },
  {
    text: "Nappy",
    className: "text-[clamp(4.5rem,18vw,16rem)]",
  },
  {
    text: "Upgrade",
    className: "text-[clamp(4.5rem,18vw,16rem)]",
  },
  {
    text: "Noti",
    className: "text-[clamp(5rem,22vw,18rem)]",
  },
  {
    text: "Owly",
    className: "text-[clamp(5rem,22vw,18rem)]",
  },
];

export const Component = () => {
  return (
    <div className="min-h-screen bg-[#0038FF] flex flex-col font-sans selection:bg-[#CCFF00] selection:text-black relative overflow-x-clip w-full">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0"></div>

      {/* Hero Screen (Fold 1) - Guaranteed 100vh on any screen height */}
      <header className="relative z-20 min-h-screen flex flex-col justify-between w-full">
        {/* Navbar */}
        <nav className="flex items-center justify-center px-6 py-6 md:px-10 md:py-8 max-w-[1440px] mx-auto w-full">
          {/* Navigation Links */}
          <div className="flex items-center space-x-2">
            {["Home", "Project", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-1.5 rounded-full border border-white/30 text-white text-xs font-semibold hover:bg-white/10 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 w-full max-w-[1440px] mx-auto my-auto">
          <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center z-10">

            {/* BLUE */}
            <h1
              className="hero-title-3d font-black leading-[0.86] md:leading-[0.85] tracking-tight md:tracking-tighter text-white m-0 p-0 uppercase text-[clamp(4.2rem,23vw,220px)]"
              style={{
                fontFamily: '"Arial Black", Impact, sans-serif',
              }}
            >
              <span className="relative inline-block">
                <img
                  src="/samurai.png"
                  alt="Samurai Helmet"
                  className="block md:hidden absolute -top-[60%] -left-[20%] w-[115%] h-[115%] object-contain -rotate-[15deg] pointer-events-none drop-shadow-md z-30 select-none"
                />
                B
              </span>
              LUE
            </h1>

            {/* SAMURAI */}
            <h1
              className="hero-title-3d font-black leading-[0.86] md:leading-[0.85] tracking-tight md:tracking-tighter text-white m-0 p-0 uppercase text-[clamp(3.3rem,18.5vw,200px)]"
              style={{
                fontFamily: '"Arial Black", Impact, sans-serif',
              }}
            >
              SAMURAI
            </h1>

          </div>
        </main>

        {/* Scroll Indicator at bottom of Hero */}
        <div className="pb-8 md:pb-12 flex flex-col items-center justify-center text-center pointer-events-none">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            Scroll to explore
          </span>
          <div className="w-4 h-7 border-2 border-white/40 rounded-full mt-2 flex justify-center pt-1">
            <div className="w-1 h-1.5 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div>
      </header>

      {/* Interactive Scroll Burn Section - Snappy Big Font Showcase */}
      <section className="relative z-10 w-full">
        <ScrollBurnText
          sections={PROJECT_SECTIONS}
          className="bg-[#0038FF] text-white"
          textClassName="text-white"
          columnClassName="w-auto max-w-[98vw] text-center font-black uppercase tracking-tighter leading-[0.88] whitespace-nowrap"
          far={1.6}
          near={0.85}
          runway="35vh"
          hint={null}
        />
      </section>

      {/* Bottom Features Section */}
      <section className="bg-white text-black rounded-t-[2.5rem] md:rounded-t-[3.5rem] px-6 py-12 md:px-10 md:py-16 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.2)] mt-auto w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="bg-[#F8F9FA] rounded-[2rem] p-8 flex flex-col items-center text-center relative h-64 border border-gray-100">
            <h3 className="text-xl md:text-2xl uppercase leading-tight mb-2 font-black">
              SUBSCRIBE
              <br />
              TO CREATORS
            </h3>
            <p className="text-[10px] md:text-xs text-black/60 font-bold mb-auto">
              you will receive $CLUB every second
            </p>

            {/* Pill Graphic */}
            <div className="relative w-full flex justify-center mt-6">
              <div className="flex items-center bg-[#0038FF] rounded-2xl p-2 pr-16 text-white shadow-lg relative z-10">
                <div className="w-8 h-8 bg-[#D2B48C] rounded-full mr-3 border border-white/30 overflow-hidden flex-shrink-0">
                  <img
                    src="https://cdn.21st.dev/assets/mirror/a9/a9ba4bfede6313e1469d3a9f805603867503389824f1daedfd5ed293c3a8156c.svg"
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold leading-none">
                    baseclub.eth
                  </p>
                  <p className="text-[8px] text-white/70 leading-none mt-1">
                    23 422 points
                  </p>
                </div>
              </div>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#CCFF00] text-black font-black text-[10px] px-3 py-2 rounded-xl z-20 shadow-md">
                20.24 $CLUB
              </div>
            </div>

            {/* Arrow pointing to next card */}
            <div className="hidden md:block absolute -right-12 bottom-8 w-16 h-16 z-30">
              <ArrowBlack1 />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8F9FA] rounded-[2rem] p-8 flex flex-col items-center text-center relative h-64 border border-gray-100">
            <h3 className="text-xl md:text-2xl uppercase leading-tight mb-2 font-black">
              CHOOSE HIGHT
              <br />
              $CLUB REWARDS
            </h3>
            <p className="text-[10px] md:text-xs text-black/60 font-bold mb-auto">
              each account has a different of $CLUB
            </p>

            {/* Pill Graphic */}
            <div className="relative w-full flex justify-center mt-6">
              <div className="flex items-center bg-[#0038FF] rounded-full p-1.5 text-white shadow-lg">
                <div className="bg-white/20 text-white font-bold text-sm px-4 py-2 rounded-full mr-2">
                  20.4220
                </div>
                <div className="font-bold text-xs px-4">$CLUB</div>
              </div>

              {/* Small floating green pill */}
              <div className="absolute -bottom-6 right-1/3 bg-[#CCFF00] rounded-full p-2.5 shadow-lg transform rotate-12 z-20">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-black stroke-current"
                  fill="none"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>

            {/* Arrow pointing to next card */}
            <div className="hidden md:block absolute -right-12 bottom-8 w-16 h-16 z-30">
              <ArrowBlack2 />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F8F9FA] rounded-[2rem] p-8 flex flex-col items-center text-center relative h-64 border border-gray-100">
            <h3 className="text-xl md:text-2xl uppercase leading-tight mb-2 font-black">
              STAKE $CLUB
              <br />
              FOR CREATORS
            </h3>
            <p className="text-[10px] md:text-xs text-black/60 font-bold mb-auto">
              you will receive $CLUB every month
            </p>

            {/* Pill Graphic */}
            <div className="flex flex-col items-center bg-[#CCFF00] rounded-[2rem] px-6 py-4 text-black shadow-lg mt-6 relative w-full max-w-[200px]">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1">
                EST. Monthly $CLUB
              </p>
              <p className="text-xl font-black">188.34257</p>

              {/* Speech bubble tail */}
              <div className="absolute -bottom-2 left-8 w-5 h-5 bg-[#CCFF00] transform rotate-45"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
