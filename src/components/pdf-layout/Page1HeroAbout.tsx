"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { FlowerBubbles } from "../effects/FlowerBubbles";
import { MoonContactWidget } from "./MoonContactWidget";

const TOOLS = [
  { name: "CapCut", src: "/source/tool-capcut.webp" },
  { name: "Canva", src: "/source/tool-canva.webp" },
  { name: "ChatGPT", src: "/source/tool-chatgpt.webp" },
  { name: "Word", src: "/source/tool-word.webp" },
  { name: "Excel", src: "/source/tool-excel.webp" },
  { name: "PowerPoint", src: "/source/tool-powerpoint.webp" },
];

const SKILLS_LIST = [
  ["Content Strategy & Planning", "Short-form Content Creation"],
  ["Influencer & Creator Research", "Scriptwriting & Storytelling"],
  ["Audience Engagement", "Content Planning & Creation"],
  ["Communication & Negotiation"],
];

const EXPERIENCES = [
  {
    org: "KOC Booking",
    role: "FREELANCER",
    period: "July 2025 - September 2026",
  },
  {
    org: "Vietnam Finland International School (VFIS)",
    role: "COMMUNICATIONS COLLABORATOR",
    period: "December 2023 - May 2026",
  },
  {
    org: "MLAND Coastal",
    role: "CONTENT MARKETING INTERN",
    period: "June 2025 - September 2025",
  },
];

export function Page1HeroAbout() {
  const signatureSvgRef = useRef<SVGSVGElement>(null);
  const mainStrokeRef = useRef<SVGPathElement>(null);
  const crossStrokeRef = useRef<SVGPathElement>(null);
  const dotStrokeRef = useRef<SVGPathElement>(null);
  const finishRectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    const svg = signatureSvgRef.current;
    const mainPath = mainStrokeRef.current;
    const crossPath = crossStrokeRef.current;
    const dotPath = dotStrokeRef.current;
    const finishRect = finishRectRef.current;
    if (!svg || !mainPath || !crossPath || !dotPath || !finishRect) return;

    const ctx = gsap.context(() => {
      const mainLen = mainPath.getTotalLength();
      const crossLen = crossPath.getTotalLength();
      const dotLen = dotPath.getTotalLength();

      gsap.set(mainPath, { strokeDasharray: mainLen, strokeDashoffset: mainLen });
      gsap.set(crossPath, { strokeDasharray: crossLen, strokeDashoffset: crossLen });
      gsap.set(dotPath, { strokeDasharray: dotLen, strokeDashoffset: dotLen });
      gsap.set(finishRect, { opacity: 0 });
      gsap.set(svg, { opacity: 1 });

      const tl = gsap.timeline({ delay: 0.45 });
      tl.to(mainPath, {
        strokeDashoffset: 0,
        duration: 1.85,
        ease: "power1.inOut",
      })
        .to(crossPath, {
          strokeDashoffset: 0,
          duration: 0.25,
          ease: "power2.out",
        })
        .to(dotPath, {
          strokeDashoffset: 0,
          duration: 0.15,
          ease: "power2.out",
        })
        .to(
          finishRect,
          {
            opacity: 1,
            duration: 0.5,
            ease: "power1.out",
          },
          "-=0.4"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="page-1"
      aria-label="Portfolio Introduction and About Me"
      className="relative z-20 w-full bg-[#FFFFFF] text-[#2E2220] py-8 sm:py-14 px-3 sm:px-6 lg:px-8 overflow-hidden border-b border-[#E8DFDC]"
    >
      {/* Floating Ambient Lily Flowers */}
      <FlowerBubbles containerId="page-1" />

      {/* Main Page Container */}
      <div className="relative z-10 w-full max-w-[1480px] mx-auto flex flex-col items-center">
        {/* ========================================================= */}
        {/* TOP HERO TITLE matching PDF Page 1                        */}
        {/* ========================================================= */}
        <div className="relative w-full text-center pt-4 pb-8 select-none">
          {/* Lily Background Motif behind the Title */}
          <div className="hero-motif-reveal absolute left-1/2 top-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 pointer-events-none -z-10">
            <Image
              src="/source/p1_007.png"
              alt="Lily Flower Motif"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Outlined Main Headline */}
          <div className="flex flex-col items-center justify-center leading-none">
            <h1 className="hero-fade-up-1 pdf-outline-title text-[clamp(2.5rem,8vw,6.5rem)] tracking-wide">
              PHUONG NGUYEN
            </h1>
            <div className="relative inline-block">
              <span className="hero-fade-up-2 pdf-outline-title text-[clamp(2.5rem,8vw,6.5rem)] tracking-wide block">
                NGUYEN
              </span>
              {/* Slanted Script 'portfolio' across NGUYEN with stroke-by-stroke signature animation */}
              <span
                className="pdf-script-portfolio text-[clamp(2.8rem,9vw,7.5rem)] absolute -right-4 sm:-right-8 -bottom-3 sm:-bottom-5 transform rotate-[-8deg] pointer-events-none drop-shadow-sm select-none inline-block"
                aria-label="portfolio"
              >
                <svg
                  ref={signatureSvgRef}
                  viewBox="0 0 400 155"
                  className="w-[3.45em] h-[1.35em] overflow-visible block opacity-0"
                  role="img"
                  aria-hidden="true"
                >
                  <defs>
                    <mask
                      id="portfolio-signature-mask"
                      x="-50"
                      y="-50"
                      width="500"
                      height="255"
                      maskUnits="userSpaceOnUse"
                      maskContentUnits="userSpaceOnUse"
                    >
                      <rect x="-50" y="-50" width="500" height="255" fill="black" />
                      {/* Main cursive stroke: p -> o -> r -> t -> f -> o -> l -> i -> o */}
                      <path
                        ref={mainStrokeRef}
                        d="M 28 84 Q 40 72 52 68 L 4 146 Q 28 96 54 72 Q 74 66 72 84 Q 66 98 48 94 Q 68 96 84 78 Q 100 66 108 80 Q 108 98 88 96 Q 76 90 96 76 Q 112 72 124 68 Q 124 84 118 96 Q 130 88 142 74 Q 154 58 164 36 Q 154 72 148 94 Q 160 98 176 80 Q 196 48 218 14 Q 222 12 212 28 Q 192 82 170 132 Q 188 98 208 82 Q 220 70 236 72 Q 246 80 240 94 Q 224 102 216 88 Q 226 74 248 80 Q 266 52 282 14 Q 286 12 276 28 Q 258 72 252 94 Q 264 98 278 82 Q 288 70 296 68 Q 286 84 286 94 Q 296 98 308 82 Q 318 70 334 72 Q 344 80 338 94 Q 322 102 314 88 Q 330 78 358 74"
                        fill="none"
                        stroke="white"
                        strokeWidth="38"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Crossbar of 't' */}
                      <path
                        ref={crossStrokeRef}
                        d="M 140 58 Q 158 54 178 56"
                        fill="none"
                        stroke="white"
                        strokeWidth="26"
                        strokeLinecap="round"
                      />
                      {/* Dot of 'i' */}
                      <path
                        ref={dotStrokeRef}
                        d="M 302 40 L 306 46"
                        fill="none"
                        stroke="white"
                        strokeWidth="26"
                        strokeLinecap="round"
                      />
                      {/* Final full-reveal safety rect for fine swashes */}
                      <rect
                        ref={finishRectRef}
                        x="-50"
                        y="-50"
                        width="500"
                        height="255"
                        fill="white"
                      />
                    </mask>
                  </defs>
                  <text
                    x="22"
                    y="100"
                    fill="#E5A8AD"
                    mask="url(#portfolio-signature-mask)"
                    style={{
                      fontFamily: 'var(--font-script), "Pinyon Script", cursive',
                      fontSize: "112px",
                      fontWeight: 400,
                    }}
                  >
                    portfolio
                  </text>
                </svg>
              </span>
            </div>
          </div>

          {/* Subtitle with Flower Separators (pushed down so 'portfolio' descender doesn't overlap) */}
          <div className="hero-fade-up-3 mt-12 sm:mt-14 md:mt-16 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-montserrat font-bold text-[#5A4340] tracking-wider uppercase">
            <span className="pdf-outline-title text-sm sm:text-base tracking-widest text-[#2E2220]">
              CONTENT MARKETING
            </span>
            <Image
              src="/source/lily-pink.webp"
              alt="🌸"
              width={16}
              height={16}
              className="inline-block object-contain"
            />
            <span className="pdf-outline-title text-sm sm:text-base tracking-widest text-[#2E2220]">
              INFLUENCER MARKETING
            </span>
            <Image
              src="/source/lily-pink.webp"
              alt="🌸"
              width={16}
              height={16}
              className="inline-block object-contain"
            />
            <span className="pdf-outline-title text-sm sm:text-base tracking-widest text-[#2E2220]">
              SOCIAL MEDIA
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* TWO-COLUMN CONTENT AREA matching PDF Page 1               */}
        {/* ========================================================= */}
        <div className="hero-fade-up-4 w-full grid grid-cols-1 md:grid-cols-[340px_1fr] lg:grid-cols-[380px_1fr] xl:grid-cols-[400px_1fr] gap-6 sm:gap-8 lg:gap-10 mt-8 items-stretch">
          {/* ------------------------------------------------------- */}
          {/* LEFT COLUMN: Photo, Badges, Education, Tools, Skills    */}
          {/* ------------------------------------------------------- */}
          <div className="w-full flex flex-col items-start gap-5">
            {/* Night Portrait Photo */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-none mx-auto md:mx-0 aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-[#D5CFCF] group">
              <Image
                src="/source/p1_006.png"
                alt="Nguyen Phuong Nguyen"
                fill
                priority
                sizes="(max-width: 768px) 340px, (max-width: 1280px) 380px, 400px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Location & Birthdate Pill Badges (Staggered / Xen kẽ & Enlarged matching PDF) */}
            <div className="w-full max-w-[340px] sm:max-w-[380px] md:max-w-none mx-auto md:mx-0 flex flex-col gap-2 pt-1">
              {/* Row 1: Ho Chi Minh (Shifted to the right) */}
              <div className="flex justify-end pr-0 sm:pr-2">
                <span className="px-7 py-2.5 sm:px-8 sm:py-3 rounded-2xl bg-[#F4E8E7] text-sm sm:text-base md:text-[17px] font-bold italic text-[#2E2220] tracking-wide shadow-xs hover:scale-105 transition-transform duration-200">
                  Ho Chi Minh
                </span>
              </div>

              {/* Row 2: 05/06/2005 (Shifted to the left, nestled closely under Row 1) */}
              <div className="flex justify-start pl-0 sm:pl-2 -mt-1 sm:-mt-1.5">
                <span className="px-7 py-2.5 sm:px-8 sm:py-3 rounded-2xl bg-[#EEF2F0] text-sm sm:text-base md:text-[17px] font-bold italic text-[#2E2220] tracking-wider shadow-xs hover:scale-105 transition-transform duration-200">
                  {PERSONAL_INFO.dob}
                </span>
              </div>
            </div>

            {/* Education Section */}
            <div className="w-full pt-1">
              <h3 className="pdf-script-rose-outline text-3xl sm:text-4xl mb-1 select-none leading-tight">
                education
              </h3>
              <p className="font-bold text-sm sm:text-base text-[#2E2220]">
                {PERSONAL_INFO.university}
              </p>
              <p className="text-xs sm:text-sm text-[#5A4340] leading-snug">
                {PERSONAL_INFO.degree}
              </p>
              <p className="text-xs text-[#7E6B69] mt-0.5">2023 - 2027</p>
            </div>

            {/* Tools Section */}
            <div className="w-full">
              <h3 className="pdf-script-rose-outline text-3xl sm:text-4xl mb-2.5 select-none leading-tight">
                tools
              </h3>
              {/* Standalone transparent icons (no background card), enlarged with hover animations */}
              <div className="grid grid-cols-3 gap-4 sm:gap-5 max-w-[240px] sm:max-w-[280px] items-center pt-1">
                {TOOLS.map((tool) => (
                  <div
                    key={tool.name}
                    className="group relative flex items-center justify-center p-1 cursor-pointer interactive-hover"
                  >
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 transition-all duration-300 ease-out transform group-hover:scale-125 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:drop-shadow-[0_12px_24px_rgba(201,112,123,0.45)]">
                      <Image
                        src={tool.src}
                        alt={tool.name}
                        fill
                        sizes="(max-width: 640px) 48px, 64px"
                        className="object-contain filter drop-shadow-xs"
                      />
                    </div>
                    {/* Floating Tooltip on hover */}
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-[#2E2220] text-white text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md z-30">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className="w-full">
              <h3 className="pdf-script-rose-outline text-3xl sm:text-4xl mb-2.5 select-none leading-tight">
                skills
              </h3>
              <div className="flex flex-col gap-2 w-full">
                {SKILLS_LIST.map((row, idx) => (
                  <div
                    key={idx}
                    className={`grid ${
                      row.length === 1 ? "grid-cols-1" : "grid-cols-2"
                    } gap-2 sm:gap-2.5`}
                  >
                    {row.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-white/95 border border-[#D5CFCF] text-[10.5px] sm:text-[11.5px] md:text-xs font-medium text-[#2E2220] flex items-center justify-center text-center shadow-xs hover:border-[#C9707B] hover:text-[#C9707B] transition-colors whitespace-nowrap overflow-hidden"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* RIGHT COLUMN: Bio, Work Experiences, Moon Contact Widget*/}
          {/* ------------------------------------------------------- */}
          <div className="w-full flex flex-col justify-between">
            <div className="flex flex-col gap-5 sm:gap-6">
              {/* Main Greeting matching PDF Page 1 */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-black tracking-tight text-[#2E2220] flex items-baseline gap-2 sm:gap-3">
                  <span>HI! I&apos;M</span>
                  <span className="pdf-script text-5xl sm:text-6xl lg:text-7xl text-[#E5A8AD] font-normal tracking-wide select-none leading-none">
                    Nguyen
                  </span>
                </h2>
              </div>

              {/* Bio Paragraphs from PDF */}
              <div className="space-y-3.5 text-sm sm:text-base text-[#3E2F2D] leading-relaxed text-justify">
                <p>
                  Hi! I&apos;m Nguyen Phuong Nguyen, a senior at{" "}
                  <strong className="font-semibold text-[#2E2220]">
                    Ton Duc Thang University
                  </strong>
                  , majoring in Marketing with hands-on experience across{" "}
                  <span className="font-medium text-[#2E2220]">
                    Influencer Marketing, Content Marketing, and Social Media
                  </span>
                  .
                </p>
                <p>
                  I became interested in Marketing through a simple question:{" "}
                  <em className="font-serif italic font-semibold text-[#F2C4C4] not-italic block mt-1">
                    &ldquo;What makes people stop scrolling, pay attention, and
                    connect with a brand?&rdquo;
                  </em>
                </p>
                <p>
                  That question has shaped the way I approach content and
                  marketing activities. From researching and connecting with
                  creators for influencer campaigns to developing social media
                  content and managing everyday communications, I enjoy exploring
                  different ways to make brand messages more engaging and
                  relatable.
                </p>
                <p>
                  My approach combines{" "}
                  <strong className="font-bold text-[#2E2220]">
                    audience understanding, content creativity, communication, and
                    practical execution
                  </strong>
                  . I enjoy exploring trends, understanding what resonates with
                  audiences, and turning ideas into meaningful content and
                  marketing activities.
                </p>
              </div>

              {/* Work Experiences */}
              <div className="pt-1">
                <h3 className="pdf-script-rose-outline text-3xl sm:text-4xl mb-3 select-none leading-tight">
                  work experiences
                </h3>
                <div className="space-y-3.5">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.org} className="flex items-start gap-2.5">
                      <Image
                        src="/source/lily-pink.webp"
                        alt="🌸"
                        width={16}
                        height={16}
                        className="mt-1 object-contain flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-[#2E2220]">
                          {exp.org}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#7E6B69] font-medium uppercase tracking-wider">
                          {exp.role}
                        </p>
                        <p className="text-[10px] sm:text-xs text-[#8C7A77]">
                          {exp.period}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Moon Contact Widget (PDF Bottom Right Signature) anchored flush to bottom */}
            <div className="mt-6 md:mt-auto">
              <MoonContactWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
