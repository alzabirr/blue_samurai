"use client";

import React from "react";
import StackingCards, { StackingCardItem } from "@/components/ui/stacking-cards";

const SNAPI_FEATURES = [
  {
    title: "Offline OCR",
    description:
      "Extracts text from your screenshots entirely on-device. No internet required, no data leaves your phone.",
    bgColor: "bg-[#f97316]",
  },
  {
    title: "Auto-Detection",
    description:
      "Snapi silently watches for new screenshots in the background and instantly organizes them into smart vaults.",
    bgColor: "bg-[#0015ff]",
  },
  {
    title: "Voice Notes",
    description:
      "Attach audio memos to any capture. Record context, reminders, or thoughts right next to the image.",
    bgColor: "bg-[#ff5941]",
  },
  {
    title: "Smart Search",
    description:
      "Search across image text, titles, tags, and voice transcripts simultaneously with lightning-fast results.",
    bgColor: "bg-[#1f464d]",
  },
  {
    title: "Smart Vaults",
    description:
      "Captures are auto-categorized into Albums, Receipts, Code, Text, and more — all without any manual effort.",
    bgColor: "bg-[#0015ff]",
  },
  {
    title: "Recovery System",
    description:
      "Accidentally deleted a screenshot? Snapi's trash bin and recovery system bring it back in seconds.",
    bgColor: "bg-[#ff5941]",
  },
];

export function SnapiFeaturesStack() {
  return (
    <div className="w-full">
      <StackingCards
        totalCards={SNAPI_FEATURES.length}
        scaleMultiplier={0.035}
        className="w-full"
      >
        {SNAPI_FEATURES.map((feat, index) => (
          <StackingCardItem
            key={feat.title}
            index={index}
            topPosition={`calc(80px + ${index * 20}px)`}
            className="h-[460px] md:h-[500px]"
          >
            <div
              className={`w-11/12 max-w-4xl mx-auto h-[88%] sm:h-[84%] rounded-3xl p-8 sm:p-12 md:p-14 relative overflow-hidden shadow-2xl ${feat.bgColor} flex flex-col sm:flex-row items-center text-white select-none`}
            >
              {/* Left Column: Title and Description */}
              <div className="w-full sm:w-1/2 md:w-3/5 flex flex-col justify-center text-white z-10 my-auto">
                <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-5 leading-tight tracking-tight text-white">
                  {feat.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                  {feat.description}
                </p>
              </div>

              {/* Right Column: Empty space as requested ("right side a faka thakbe") */}
              <div className="hidden sm:block sm:w-1/2 md:w-2/5" />
            </div>
          </StackingCardItem>
        ))}
      </StackingCards>
    </div>
  );
}

export default SnapiFeaturesStack;
