"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { TOOLS_LIST } from "@/data/portfolioData";

export function Tools() {
  return (
    <section
      aria-label="Software & Tools"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto z-20 overflow-hidden"
    >
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2C4C4]/50 border border-[#C9707B]/30 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C9707B]" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[#3A2A28]">
            Workflow & Stack
          </span>
        </div>

        <h3 className="font-heading text-3xl sm:text-5xl text-[#3A2A28] uppercase tracking-wide">
          Production <span className="text-outline-rose">Tools & Software</span>
        </h3>
        <p className="text-sm sm:text-base text-[#5A4340] max-w-md mt-2">
          Daily driver software for short-form video editing, content planning, and creative asset delivery.
        </p>
      </div>

      {/* 6 Large Overlapping Circles with Thin Partial Ring Borders (slow rotation) */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-0 sm:-space-x-6 lg:-space-x-8 py-6 select-none">
        {TOOLS_LIST.map((tool, idx) => {
          const isReverse = idx % 2 === 1;
          return (
            <div
              key={tool.id}
              className={`group relative flex flex-col items-center interactive-hover transition-all duration-500 hover:scale-110 hover:z-30`}
              style={{ zIndex: 10 + idx }}
            >
              {/* Outer container circle */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-white/95 border border-[rgba(58,42,40,0.1)] shadow-lg shadow-[rgba(58,42,40,0.06)] flex items-center justify-center p-5 group-hover:border-[#C9707B] transition-colors duration-300">
                {/* Thin partial ring border with slow rotation */}
                <svg
                  className={`absolute -inset-1.5 w-[calc(100%+12px)] h-[calc(100%+12px)] pointer-events-none ${
                    isReverse ? "animate-spin-reverse-slow" : "animate-spin-slow"
                  }`}
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="47"
                    fill="none"
                    stroke="#C9707B"
                    strokeWidth="1.2"
                    strokeDasharray="90 40 30 40"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>

                {/* Tool Icon */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 flex items-center justify-center">
                  <Image
                    src={tool.iconSrc}
                    alt={tool.name}
                    width={tool.width}
                    height={tool.height}
                    className="object-contain max-h-full max-w-full drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Tool Name Pill */}
              <div className="mt-3 text-center">
                <span className="font-heading text-sm sm:text-base text-[#3A2A28] tracking-wider uppercase font-semibold block">
                  {tool.name}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#7E6B69] font-medium hidden sm:block">
                  {tool.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
