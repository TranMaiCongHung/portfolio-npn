"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, GraduationCap, Briefcase, Quote } from "lucide-react";
import { ABOUT_CONTENT, PERSONAL_INFO } from "@/data/portfolioData";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto z-20"
    >
      {/* Eyebrow Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2C4C4]/50 border border-[#C9707B]/30 mb-6">
        <Sparkles className="w-3.5 h-3.5 text-[#C9707B]" />
        <span className="text-xs font-semibold tracking-wider uppercase text-[#3A2A28]">
          {ABOUT_CONTENT.eyebrow}
        </span>
      </div>

      {/* Big Headline */}
      <h2
        id="about-heading"
        className="font-heading text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.98] text-[#3A2A28] max-w-4xl tracking-tight mb-14 sm:mb-20"
      >
        Crafting content that makes people{" "}
        <span className="text-outline-rose">stop scrolling</span>
      </h2>

      {/* Two Photos + 3 Philosophy Points */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 sm:mb-28">
        {/* Left: Two rounded photos side by side (one offset lower, one with a thin outline frame) */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6 pt-4">
          {/* Photo 1: Framed with outline border */}
          <div className="relative rounded-3xl p-2 sm:p-2.5 bg-white border border-[rgba(58,42,40,0.12)] shadow-md shadow-[rgba(58,42,40,0.04)] aspect-[3/4] overflow-hidden group interactive-hover">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#F9FAFB]">
              <Image
                src={ABOUT_CONTENT.portrait1.src}
                alt={ABOUT_CONTENT.portrait1.alt}
                fill
                sizes="(min-width: 1024px) 240px, 45vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-white/10 pointer-events-none" />
            </div>
          </div>

          {/* Photo 2: Offset lower */}
          <div className="relative rounded-3xl p-2 sm:p-2.5 bg-white border border-[rgba(58,42,40,0.12)] shadow-md shadow-[rgba(58,42,40,0.04)] aspect-[3/4] overflow-hidden translate-y-8 sm:translate-y-12 group interactive-hover">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#F9FAFB]">
              <Image
                src="/source/threads-portrait.webp"
                alt="Nguyen Phuong Nguyen creative work"
                fill
                sizes="(min-width: 1024px) 240px, 45vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-white/10 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Right: Vertical list of 3 items with round rose icon badges */}
        <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-10 lg:pl-6">
          {ABOUT_CONTENT.items.map((item, idx) => (
            <div
              key={item.badge}
              className="group flex items-start gap-4 sm:gap-6 p-6 sm:p-7 rounded-3xl bg-white border border-[rgba(58,42,40,0.1)] hover:border-[#C9707B]/40 hover:shadow-md transition-all duration-300 shadow-sm interactive-hover"
            >
              {/* Round rose icon badge */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#C9707B] text-white flex items-center justify-center font-heading font-bold text-base sm:text-lg flex-shrink-0 shadow-sm shadow-[#C9707B]/30 group-hover:scale-110 transition-transform">
                {item.badge}
              </div>

              <div className="flex-1">
                <h3 className="font-heading text-lg sm:text-xl text-[#3A2A28] tracking-wider uppercase mb-2">
                  {item.title}
                </h3>
                {idx === 1 ? (
                  <div>
                    <div className="relative p-4 my-2 rounded-2xl bg-[#FFF5F6] border border-[#F2C4C4] text-[#3A2A28]">
                      <Quote className="w-4 h-4 text-[#C9707B] mb-1 opacity-70" />
                      <p className="font-serif italic text-base sm:text-lg text-[#3A2A28] font-medium leading-snug">
                        &ldquo;What makes people stop scrolling, pay attention, and connect with a brand?&rdquo;
                      </p>
                      <span className="block mt-1.5 text-xs uppercase tracking-wider text-[#C9707B] font-semibold">
                        The core question shaping my marketing approach
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-[#5A4340] leading-relaxed mt-2">
                      My approach combines audience understanding, content creativity, communication, and practical execution.
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <Image
                        src="/source/lily-bouquet.webp"
                        alt="Lily motif"
                        width={28}
                        height={28}
                        className="object-contain opacity-60"
                      />
                      <span className="text-xs uppercase tracking-widest text-[#C9707B] font-medium">
                        Creative intuition grounded in data
                      </span>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm sm:text-base text-[#5A4340] leading-relaxed">
                    {item.text}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience and Education Timeline Below */}
      <div className="mt-8 pt-12 border-t border-[rgba(58,42,40,0.12)]">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="w-5 h-5 text-[#C9707B]" />
          <h3 className="font-heading text-2xl sm:text-3xl tracking-wide text-[#3A2A28] uppercase">
            Experience & Education Timeline
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {ABOUT_CONTENT.timeline.map((item) => (
            <div
              key={item.org}
              className="flex flex-col justify-between p-6 rounded-3xl bg-white border border-[rgba(58,42,40,0.1)] hover:border-[#C9707B]/40 hover:shadow-md transition-all duration-300 interactive-hover"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#F2C4C4]/50 text-[#3A2A28]">
                    {item.period}
                  </span>
                  {item.type === "education" ? (
                    <GraduationCap className="w-4 h-4 text-[#C9707B]" />
                  ) : (
                    <Briefcase className="w-4 h-4 text-[#C9707B]" />
                  )}
                </div>
                <h4 className="font-heading text-lg text-[#3A2A28] tracking-wide uppercase line-clamp-2 mt-1">
                  {item.org}
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-[#7E6B69] font-medium mt-4 pt-4 border-t border-[rgba(58,42,40,0.08)]">
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
