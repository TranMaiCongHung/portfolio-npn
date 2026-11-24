"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";

export interface SceneCardData {
  number: string;
  kicker: string;
  title: string;
  category: string;
  description: string;
  statValue: string;
  statLabel: string;
  image: string;
  imageClassName?: string;
  targetId: string;
}

export const SIX_SCENES: SceneCardData[] = [
  {
    number: "01",
    kicker: "Project 01",
    title: "INFLUENCER MARKETING",
    category: "KOC Booking & Creator Coordination",
    description: "KOC booking and creator coordination across Facebook, TikTok and Threads.",
    statValue: "300+",
    statLabel: "KOC profiles researched and screened, 70+ creators coordinated",
    image: "/source/s01-hero.webp",
    targetId: "page-2",
  },
  {
    number: "02",
    kicker: "Project 02",
    title: "SOCIAL MEDIA & COMMUNICATIONS",
    category: "Communications Collaborator",
    description: "Vietnam Finland International School: content for Facebook, Instagram and TikTok.",
    statValue: "30+",
    statLabel: "content pieces produced and edited, top video 20K+ views",
    image: "/source/vfis_showcase.webp",
    targetId: "project-2",
  },
  {
    number: "03",
    kicker: "Project 03",
    title: "CONTENT MARKETING",
    category: "MLAND Coastal Intern",
    description: "MLAND Coastal intern: real estate short-form content and video planning.",
    statValue: "Intern",
    statLabel: "Jun to Sep 2025, short-form content support",
    image: "/source/s03-hero.webp",
    targetId: "project-3",
  },
  {
    number: "04",
    kicker: "Project 04",
    title: "HCMC MARATHON 2025",
    category: "Event Operations Support",
    description: "Event and on-site coordination, supporting the team during peak hours.",
    statValue: "1,000",
    statLabel: "participants (approx.) at the event",
    image: "/source/s04-hero.webp",
    targetId: "project-4",
  },
  {
    number: "05",
    kicker: "Project 05",
    title: "CULTURE STAR",
    category: "Team Business Challenge",
    description: "Team competition: university research and business challenge.",
    statValue: "Top 4",
    statLabel: "among participating universities",
    image: "/source/s05-hero.webp",
    targetId: "project-5",
  },
  {
    number: "06",
    kicker: "Project 06",
    title: "PERSONAL BRANDING",
    category: "Creator Content & Community",
    description: "Everyday stories, creative marketing journey, and lifestyle on Threads.",
    statValue: "5.5K+",
    statLabel: "followers & active community reach",
    image: "/source/threads-profile.webp",
    imageClassName: "object-top",
    targetId: "project-threads",
  },
];

function formatStatValue(val: string) {
  return <AnimatedCounter value={val} duration={1600} />;
}

export function ProjectsHorizontal() {
  const sectionRef = useRef<HTMLElement>(null);
  const introContainerRef = useRef<HTMLDivElement>(null);
  const badgeContainerRef = useRef<HTMLDivElement>(null);
  const metaContainerRef = useRef<HTMLDivElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);
  const progressCircleRef = useRef<SVGCircleElement>(null);
  const inviteRingRef = useRef<HTMLDivElement>(null);
  const counterTextRef = useRef<HTMLSpanElement>(null);

  const [reducedMotion, setReducedMotion] = useState(false);

  // SVG Ring calculation
  const ringRadius = 58;
  const circumference = 2 * Math.PI * ringRadius;

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setReducedMotion(true);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const introContainer = introContainerRef.current;
    const badgeContainer = badgeContainerRef.current;
    const metaContainer = metaContainerRef.current;
    const cardsTrack = cardsTrackRef.current;

    if (!section || !cardsTrack || !badgeContainer || !introContainer || !metaContainer) return;

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    // Timer ensures DOM measurements and fonts are completely loaded
    let refreshTimers: NodeJS.Timeout[] = [];
    const timer = setTimeout(() => {
      const windowWidth = window.innerWidth;

      // Card dimensions
      const cardWidth = isMobile ? 240 : (isTablet ? 270 : 295);
      const cardGap = isMobile ? 16 : (isTablet ? 20 : 24);

      // Starting position at scroll start (p = 0):
      // Matches the sample mockup: Card 1 is immediately visible to the right of the center badge,
      // and Card 2 is already peeking in from the right edge!
      const initialX = isMobile
        ? Math.round(windowWidth * 0.38)
        : Math.round(windowWidth * 0.5 + 85);

      // Ending position:
      // Card 06 (the final item) is centered directly behind the PROJECTS circle badge,
      // perfectly matching the user's reference screenshot.
      const finalX = Math.round(
        windowWidth / 2 - cardWidth / 2 - (SIX_SCENES.length - 1) * (cardWidth + cardGap)
      );

      // Pinned scroll length: comfortable and smooth scrubbing
      const scrollDistance = Math.max(window.innerHeight * (isMobile ? 2.5 : 3.0), 2400);

      const ctx = gsap.context(() => {
        // Initial setup at p = 0: All components are positioned and visible
        gsap.set(cardsTrack, { x: initialX, opacity: 1 });
        gsap.set(metaContainer, { opacity: 1, y: 0 });
        gsap.set(badgeContainer, { scale: 1.0 });
        gsap.set(introContainer, { opacity: 1, x: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            pinSpacing: true, // Guarantees proper spacer height so subsequent sections never overlap
            scrub: true, // Exact 1:1 sync with Lenis: zero lag, zero boundary hitch when scrolling up or down
            start: "top top",
            end: () => `+=${scrollDistance}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const p = self.progress;

              // 1. Direct GPU/DOM update for SVG Circular progress arc (NO React re-render overhead)
              if (progressCircleRef.current) {
                const offset = circumference * (1 - p);
                progressCircleRef.current.style.strokeDashoffset = `${offset}px`;
              }

              // 2. Direct DOM update for invitation dashed ring (NO React re-render overhead)
              if (inviteRingRef.current) {
                inviteRingRef.current.style.opacity = p < 0.04 ? "1" : "0";
              }

              // 3. Direct DOM update for active scene counter (NO React re-render overhead)
              if (counterTextRef.current) {
                const activeScene = Math.min(
                  Math.floor(p * SIX_SCENES.length),
                  SIX_SCENES.length - 1
                );
                counterTextRef.current.textContent = `0${activeScene + 1} / 06`;
              }
            },
          },
        });

        // 1. Horizontal cards track movement: continuous smooth glide across the full scroll distance
        // Card 06 is centered at the exact end, immediately responding both forward and backward
        tl.to(
          cardsTrack,
          {
            x: finalX,
            duration: 1.0,
            ease: "none",
          },
          0
        );

        // 2. Left intro title smoothly fades out as cards glide to the left
        tl.to(
          introContainer,
          {
            opacity: 0,
            x: -45,
            duration: 0.20,
            ease: "power1.inOut",
          },
          0
        );
      }, section);

      // Immediately refresh ScrollTrigger to guarantee pin-spacer height is measured accurately
      ScrollTrigger.refresh();

      // Refresh again at intervals as images and fonts in preceding sections finish loading
      [300, 800, 1500, 2500].forEach((delay) => {
        refreshTimers.push(
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, delay)
        );
      });

      return () => {
        ctx.revert();
        refreshTimers.forEach(clearTimeout);
      };
    }, 120);

    const handleWindowLoad = () => ScrollTrigger.refresh();
    const handleWindowResize = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleWindowLoad);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      clearTimeout(timer);
      refreshTimers.forEach(clearTimeout);
      window.removeEventListener("load", handleWindowLoad);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const scrollToScene = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSkipProjects = () => {
    const target =
      document.getElementById("page-2") ||
      document.getElementById("project-details") ||
      document.getElementById("project-1");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Accessible Fallback for prefers-reduced-motion
  if (reducedMotion) {
    return (
      <section
        id="projects"
        className="w-full bg-[#FFFFFF] text-[#2E2220] py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#E8DFDC]"
      >
        <div className="mb-10 text-center">
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#2E2220] uppercase tracking-tight">
            <span>OVERVIEW</span>{" "}
            <span className="text-[#F2C4C4]">CAMPAIGN</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SIX_SCENES.map((scene) => (
            <div
              key={scene.number}
              onClick={() => scrollToScene(scene.targetId)}
              className="p-5 rounded-3xl bg-white border border-[#E8DFDC] shadow-md hover:border-[#C9707B] transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative w-full h-[220px] rounded-2xl overflow-hidden bg-black/5 mb-4">
                <Image
                  src={scene.image}
                  alt={scene.title}
                  fill
                  className={`object-cover ${scene.imageClassName || ""}`}
                />
                <span className="absolute top-2.5 left-2.5 px-3 py-0.5 rounded-full bg-black/60 text-white text-base font-pinyon pdf-script normal-case leading-none select-none">
                  {scene.kicker}
                </span>
              </div>
              <h3 className="font-heading font-black text-lg text-[#2E2220] uppercase mb-2">
                {scene.title}
              </h3>
              <p className="text-xs text-[#5A4340] mb-4">{scene.description}</p>
              <div className="pt-3 border-t border-[#E8DFDC] flex items-baseline gap-2">
                <span className="font-bevan bevan-regular text-xl text-[#F2C4C4]">
                  {formatStatValue(scene.statValue)}
                </span>
                <span className="text-[11px] text-[#7E6B69]">{scene.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      aria-label="Projects Horizontal Scroll Gallery"
      className="relative w-full h-screen overflow-hidden bg-transparent flex items-center justify-center select-none transform-gpu will-change-transform"
    >
      {/* Background delicate radial glow behind center badge */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[#FFF5F6] blur-3xl pointer-events-none -z-10 opacity-70" />

      {/* ========================================================= */}
      {/* INTRO TITLE (Left aligned in view)                        */}
      {/* ========================================================= */}
      <div
        ref={introContainerRef}
        className="absolute left-6 sm:left-12 lg:left-16 xl:left-20 top-[28%] sm:top-[30%] z-20 pointer-events-none max-w-[36vw] sm:max-w-[40vw] lg:max-w-md xl:max-w-lg will-change-transform"
      >
        {/* Big Title: OVERVIEW CAMPAIGN (2 lines, fits cleanly without touching circle badge) */}
        <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] text-[#2E2220] tracking-tight leading-[0.92] uppercase">
          <span className="block">OVERVIEW</span>
          <span className="block text-[#F2C4C4]">CAMPAIGN</span>
        </h2>
      </div>

      {/* ========================================================= */}
      {/* FIXED CENTER BADGE: Circular "PROJECTS" Badge             */}
      {/* ========================================================= */}
      <div
        ref={badgeContainerRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none flex flex-col items-center will-change-transform"
      >
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white shadow-[0_18px_45px_rgba(58,42,40,0.13)] flex flex-col items-center justify-center p-2.5 border border-[#E8DFDC]">
          {/* Subtle Rotating Invitation Ring at the start */}
          <div
            ref={inviteRingRef}
            className="absolute -inset-2 rounded-full border border-dashed border-[#C9707B]/40 transition-opacity duration-300 pointer-events-none opacity-100 animate-spin-slow will-change-opacity"
          />

          {/* SVG Circular Progress Ring (0% -> 100% clockwise) */}
          <svg
            className="absolute inset-0 w-full h-full transform -rotate-90 pointer-events-none"
            viewBox="0 0 140 140"
          >
            {/* Background Track */}
            <circle
              cx="70"
              cy="70"
              r={ringRadius}
              fill="none"
              stroke="rgba(58, 42, 40, 0.08)"
              strokeWidth="3"
            />
            {/* Active Progress Arc */}
            <circle
              ref={progressCircleRef}
              cx="70"
              cy="70"
              r={ringRadius}
              fill="none"
              stroke="#8C464F"
              strokeWidth="3.5"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              strokeLinecap="round"
              className="will-change-[stroke-dashoffset]"
            />
          </svg>

          {/* Inner Badge Typography: Refined & Smaller "PROJECTS" label */}
          <div className="text-center px-2 select-none">
            <span className="font-heading text-[11px] sm:text-xs text-[#2E2220] tracking-[0.22em] font-extrabold block leading-none pl-[0.22em]">
              PROJECTS
            </span>
            <span className="font-heading text-[8px] sm:text-[9px] text-[#F2C4C4] font-bold tracking-[0.25em] block mt-1.5 uppercase pl-[0.25em]">
              SCROLL
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* COUNTER (Top Right of Scene)                              */}
      {/* ========================================================= */}
      <div
        ref={metaContainerRef}
        className="absolute top-6 sm:top-8 right-6 sm:right-14 z-30 pointer-events-none flex flex-col items-end will-change-transform"
      >
        <span
          ref={counterTextRef}
          className="font-heading font-black text-2xl sm:text-3xl lg:text-[2.35rem] text-[#2E2220] tracking-tight leading-none"
        >
          01 / 06
        </span>
      </div>

      {/* ========================================================= */}
      {/* HORIZONTAL CARDS TRACK: 6 Compact Staggered Cards (Up/Down) */}
      {/* ========================================================= */}
      <div
        ref={cardsTrackRef}
        className="absolute top-1/2 -translate-y-1/2 left-0 flex items-center gap-4 sm:gap-5 lg:gap-6 will-change-transform z-20 pointer-events-auto"
      >
        {SIX_SCENES.map((scene, index) => {
          const isUp = index % 2 === 0;
          // Items in the low position jump up on hover; items already high stay high
          const shiftClass = isUp
            ? "-translate-y-5 sm:-translate-y-7 lg:-translate-y-8 hover:scale-[1.02]"
            : "translate-y-5 sm:translate-y-7 lg:translate-y-8 hover:-translate-y-5 sm:hover:-translate-y-7 lg:hover:-translate-y-8 hover:scale-[1.03]";

          return (
            <div
              key={scene.number}
              onClick={() => scrollToScene(scene.targetId)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") scrollToScene(scene.targetId);
              }}
              aria-label={`View ${scene.title}`}
              className={`group project-card relative flex-shrink-0 w-[240px] sm:w-[270px] lg:w-[295px] h-[355px] sm:h-[385px] lg:h-[405px] rounded-[24px] bg-white border border-[#E8DFDC] shadow-[0_12px_30px_rgba(58,42,40,0.06)] p-2.5 sm:p-3 cursor-pointer hover:border-[#8C464F] hover:shadow-[0_20px_42px_rgba(140,70,79,0.18)] transition-all duration-300 ease-out interactive-hover flex flex-col justify-between select-none ${shiftClass}`}
            >
              {/* Top Image Box */}
              <div className="relative w-full h-[210px] sm:h-[230px] lg:h-[245px] rounded-[18px] overflow-hidden bg-black/5 flex-shrink-0 border border-[rgba(58,42,40,0.06)]">
                <Image
                  src={scene.image}
                  alt={scene.title}
                  fill
                  sizes="(min-width: 640px) 295px, 240px"
                  className={`object-cover group-hover:scale-105 transition-transform duration-500 ${scene.imageClassName || ""}`}
                />
                {/* Top Scene Kicker Badge */}
                <div className="absolute top-2.5 left-2.5 z-10 px-3 py-0.5 rounded-full bg-black/65 backdrop-blur-md text-base sm:text-lg font-pinyon pdf-script text-white normal-case leading-none select-none">
                  {scene.kicker}
                </div>
              </div>

              {/* Bottom Card Body - Compact & Snug */}
              <div className="flex-1 flex flex-col justify-between pt-2.5 px-1 pb-0.5">
                <div>
                  <h4 className="font-heading font-black text-[14px] sm:text-[15px] lg:text-[16px] text-[#2E2220] uppercase tracking-wide leading-tight group-hover:text-[#F2C4C4] transition-colors line-clamp-2">
                    {scene.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#5A4340] leading-snug line-clamp-2 mt-1">
                    {scene.description}
                  </p>
                </div>

                {/* Metric Stat Row */}
                <div className="pt-2 border-t border-[#E8DFDC]/80 flex items-baseline gap-2">
                  <span className="font-bevan bevan-regular text-lg sm:text-xl text-[#F2C4C4] tracking-tight leading-none flex-shrink-0">
                    {formatStatValue(scene.statValue)}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#7E6B69] font-medium leading-tight line-clamp-2">
                    {scene.statLabel}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* BOTTOM RIGHT: SKIP PROJECTS LINK                          */}
      {/* ========================================================= */}
      <button
        onClick={handleSkipProjects}
        className="absolute bottom-6 sm:bottom-8 right-6 sm:right-12 z-40 inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-widest text-[#7E6B69] hover:text-[#F2C4C4] transition-colors interactive-hover py-1 px-2 rounded-lg hover:bg-black/5"
      >
        <span>SKIP PROJECTS</span>
        <ArrowDown className="w-3.5 h-3.5" />
      </button>
    </section>
  );
}
