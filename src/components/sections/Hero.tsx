"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { HERO_CONTENT, PERSONAL_INFO } from "@/data/portfolioData";
import { FlowerBubbles } from "../effects/FlowerBubbles";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Hero Introduction"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-white pt-24 pb-8 sm:pt-28 sm:pb-12"
    >
      {/* Background High-Key Photo with Clean White & Warm Accent Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/source/portrait-about.webp"
          alt="Golden light portrait background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-20 filter blur-[1px] brightness-110 saturate-110"
        />
        {/* Light clean white overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/75 to-white/40" />
        <div className="absolute inset-0 bg-[#F2C4C4]/10 mix-blend-multiply" />
      </div>

      {/* Floating Signature Lily Bubbles */}
      <FlowerBubbles containerId="hero" />

      {/* Hero Portrait Cutout floating on right/center */}
      <div className="absolute right-[4vw] sm:right-[8vw] lg:right-[12vw] bottom-0 z-10 pointer-events-none select-none hidden sm:block max-w-[420px] lg:max-w-[480px]">
        <div className="relative w-[320px] sm:w-[380px] lg:w-[440px] h-[520px] lg:h-[620px]">
          <Image
            src={HERO_CONTENT.cutoutSrc}
            alt="Nguyen Phuong Nguyen"
            fill
            priority
            sizes="(min-width: 1024px) 440px, 380px"
            className="object-contain object-bottom filter drop-shadow(0 12px 24px rgba(201,112,123,0.15))"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center my-auto">
        {/* Eyebrow Line (clean text, no background pill or icon) */}
        <div className="self-start mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#3A2A28]">
            {HERO_CONTENT.eyebrow}
          </span>
        </div>

        {/* Giant 3-Line Mixed Solid / Outline Headline sliding up from masks */}
        <div className="relative select-none">
          <h1 className="font-heading text-[clamp(4.2rem,15vw,12.5rem)] leading-[0.88] tracking-tight flex flex-col">
            {/* Line 1: SOLID Cocoa */}
            <span className="overflow-hidden block">
              <span className="block text-[#3A2A28] animate-in slide-in-from-bottom-full duration-700 delay-100 ease-out">
                {HERO_CONTENT.line1}
              </span>
            </span>

            {/* Line 2: OUTLINE-ONLY Rose with Script Accent */}
            <span className="overflow-hidden flex items-baseline gap-4 flex-wrap">
              <span className="block text-outline-rose animate-in slide-in-from-bottom-full duration-700 delay-200 ease-out">
                {HERO_CONTENT.line2}
              </span>
              <span className="font-script text-[clamp(2.8rem,9vw,7.5rem)] leading-none text-[#C9707B] transform -translate-y-2 sm:-translate-y-4 tracking-normal lowercase animate-in fade-in duration-1000 delay-500">
                {HERO_CONTENT.scriptAccent}
              </span>
            </span>

            {/* Line 3: SOLID Cocoa */}
            <span className="overflow-hidden block">
              <span className="block text-[#3A2A28] animate-in slide-in-from-bottom-full duration-700 delay-300 ease-out">
                {HERO_CONTENT.line3}
              </span>
            </span>
          </h1>
        </div>

        {/* Subtitle description & CTA pill */}
        <div className="mt-8 sm:mt-10 max-w-xl flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
          <p className="text-sm sm:text-base text-[#5A4340] leading-relaxed">
            Marketing senior at <strong className="text-[#3A2A28] font-semibold">{PERSONAL_INFO.university}</strong>.
            Exploring audience psychology, short-form viral storytelling, and impactful KOC creator partnerships.
          </p>

          <a
            href={HERO_CONTENT.ctaHref}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C9707B] text-white hover:bg-[#A8535E] font-heading tracking-wider text-sm transition-all duration-200 shadow-md shadow-[#C9707B]/20 hover:scale-105 interactive-hover"
          >
            <span>{HERO_CONTENT.ctaText}</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-20 flex justify-between items-end mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 pt-6">
        <div className="text-xs tracking-widest uppercase text-[#7E6B69] font-medium hidden sm:block">
          {PERSONAL_INFO.location} · {PERSONAL_INFO.name}
        </div>

        <a
          href="#about"
          className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#5A4340] hover:text-[#C9707B] transition-colors mx-auto sm:mx-0 interactive-hover"
        >
          <span>Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border border-[#3A2A28]/25 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 rounded-full bg-[#C9707B] animate-pulse" />
          </div>
        </a>
      </div>
    </section>
  );
}
