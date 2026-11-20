"use client";

import React from "react";
import Image from "next/image";
import {
  Compass,
  Video,
  Users,
  PenTool,
  MessageCircleHeart,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { SKILLS_ROWS } from "@/data/portfolioData";

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  PenTool: <PenTool className="w-5 h-5" />,
  MessageCircleHeart: <MessageCircleHeart className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
};

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto z-20 overflow-hidden"
    >
      {/* Decorative Lily Petals background motif */}
      <div className="absolute -right-20 top-10 w-72 h-72 opacity-15 pointer-events-none select-none">
        <Image
          src="/source/lily-petals.webp"
          alt=""
          width={280}
          height={280}
          className="object-contain w-full h-auto"
        />
      </div>
      {/* Eyebrow Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2C4C4]/50 border border-[#C9707B]/30 mb-6">
        <Sparkles className="w-3.5 h-3.5 text-[#C9707B]" />
        <span className="text-xs font-semibold tracking-wider uppercase text-[#3A2A28]">
          What I do
        </span>
      </div>

      {/* Headline */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20">
        <h2
          id="skills-heading"
          className="font-heading text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.98] text-[#3A2A28] tracking-tight uppercase"
        >
          Specialized Skills <span className="text-outline-rose">& Strengths</span>
        </h2>
        <p className="max-w-md text-sm sm:text-base text-[#5A4340] leading-relaxed">
          Turning creative intuition into structured, data-informed social campaigns and relatable creator narratives.
        </p>
      </div>

      {/* Row-style Skill List */}
      <div className="flex flex-col border-t border-[rgba(58,42,40,0.12)]">
        {SKILLS_ROWS.map((skill) => (
          <div
            key={skill.id}
            className="group skill-row relative flex flex-col md:flex-row md:items-center justify-between gap-4 py-6 sm:py-8 border-b border-[rgba(58,42,40,0.12)] hover:bg-[#FAF9FA] px-3 sm:px-6 -mx-3 sm:-mx-6 rounded-2xl transition-all duration-300 ease-out hover:translate-x-2 interactive-hover"
          >
            {/* Left: Round Rose Icon Badge + Title */}
            <div className="flex items-center gap-4 sm:gap-6 min-w-[320px] lg:min-w-[400px]">
              <div className="w-12 h-12 rounded-full bg-[#C9707B] text-white flex items-center justify-center flex-shrink-0 shadow-sm shadow-[#C9707B]/20 group-hover:scale-110 transition-transform duration-300">
                {ICON_MAP[skill.iconName] ?? <Sparkles className="w-5 h-5" />}
              </div>
              <h3 className="font-heading text-xl sm:text-2xl text-[#3A2A28] tracking-wider uppercase group-hover:text-[#C9707B] transition-colors">
                {skill.title}
              </h3>
            </div>

            {/* Middle: One-line Description */}
            <p className="text-sm sm:text-base text-[#5A4340] max-w-xl md:px-4">
              {skill.description}
            </p>

            {/* Right: White circular arrow button that fills with rose on hover */}
            <div className="flex justify-end self-end md:self-center">
              <div className="w-11 h-11 rounded-full bg-white border border-[rgba(58,42,40,0.15)] flex items-center justify-center text-[#3A2A28] group-hover:bg-[#C9707B] group-hover:border-[#C9707B] group-hover:text-white transition-all duration-300 shadow-sm group-hover:rotate-45">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
