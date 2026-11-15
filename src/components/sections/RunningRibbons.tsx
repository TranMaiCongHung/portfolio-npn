"use client";

import React, { useEffect, useRef } from "react";
import { RUNNING_RIBBONS_TEXT } from "@/data/portfolioData";

export function RunningRibbons() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const speed = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;

      if (containerRef.current) {
        // Boost marquee speed on scroll
        const boostSpeed = Math.max(6, 26 - Math.min(speed, 50) * 0.4);
        containerRef.current.style.setProperty("--marquee-speed", `${boostSpeed}s`);

        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.setProperty("--marquee-speed", "26s");
          }
        }, 150);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  // Repeat text to make it totally seamless across all viewport widths
  const repeatedText = RUNNING_RIBBONS_TEXT.repeat(4);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="relative w-full py-14 sm:py-20 overflow-hidden select-none z-20 pointer-events-none"
      style={{ "--marquee-speed": "26s" } as React.CSSProperties}
    >
      {/* Ribbon 1: Accent Rose background, tilted -4deg, moving LEFT */}
      <div className="relative w-[110vw] -left-[5vw] transform -rotate-[4deg] bg-[#C9707B] py-3.5 sm:py-5 shadow-lg shadow-[#C9707B]/15 z-10">
        <div className="flex animate-marquee-left whitespace-nowrap">
          <span className="font-heading text-xl sm:text-3xl lg:text-4xl text-white tracking-wider font-bold uppercase pr-8">
            {repeatedText}
          </span>
          <span className="font-heading text-xl sm:text-3xl lg:text-4xl text-white tracking-wider font-bold uppercase pr-8">
            {repeatedText}
          </span>
        </div>
      </div>

      {/* Ribbon 2: White card background with Cocoa text, tilted +3deg, moving RIGHT, overlapping Ribbon 1 */}
      <div className="relative w-[110vw] -left-[5vw] transform rotate-[3deg] -mt-5 sm:-mt-8 bg-[#FFFFFF] border-y border-[rgba(58,42,40,0.12)] py-3.5 sm:py-5 shadow-md shadow-[rgba(58,42,40,0.06)] z-20">
        <div className="flex animate-marquee-right whitespace-nowrap">
          <span className="font-heading text-xl sm:text-3xl lg:text-4xl text-[#3A2A28] tracking-wider font-bold uppercase pr-8">
            {repeatedText}
          </span>
          <span className="font-heading text-xl sm:text-3xl lg:text-4xl text-[#3A2A28] tracking-wider font-bold uppercase pr-8">
            {repeatedText}
          </span>
        </div>
      </div>
    </div>
  );
}
