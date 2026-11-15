"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowDownRight, FastForward, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SCENES } from "@/data/portfolioData";

export function ProjectsHorizontal() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSceneIdx, setCurrentSceneIdx] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setReducedMotion(true);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    if (!section || !track || !row1 || !row2) return;

    // Small delay to ensure layout and image sizes are fully calculated
    const timer = setTimeout(() => {
      // Calculate how far the track needs to slide horizontally
      const scrollWidth = Math.max(row1.scrollWidth, row2.scrollWidth);
      const scrollDistance = Math.max(scrollWidth - window.innerWidth + 200, 1200);

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 0.8,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              const p = self.progress;
              setScrollProgress(p);
              const idx = Math.min(Math.floor(p * SCENES.length), SCENES.length - 1);
              setCurrentSceneIdx(idx);
            },
          },
        });

        // Row 1 slides left
        tl.to(
          row1,
          {
            x: () => -(scrollDistance * 1.03),
            ease: "none",
          },
          0
        );

        // Row 2 slides left with subtle parallax speed difference
        tl.to(
          row2,
          {
            x: () => -(scrollDistance * 0.97),
            ease: "none",
          },
          0
        );
      }, section);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToScene = (sceneNumber: string) => {
    const target = document.getElementById(`scene-${sceneNumber}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSkipProjects = () => {
    const afterEl = document.getElementById("project-details");
    if (afterEl) {
      afterEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Accessible fallback for users with prefers-reduced-motion
  if (reducedMotion) {
    return (
      <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl text-[#3A2A28] uppercase mb-10">
          Featured Projects & Scenes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SCENES.map((scene) => (
            <div
              key={scene.number}
              onClick={() => scrollToScene(scene.number)}
              className="p-6 rounded-3xl bg-white border border-[rgba(58,42,40,0.1)] cursor-pointer hover:border-[#C9707B] transition-colors"
            >
              <span className="text-xs font-bold text-[#C9707B] uppercase tracking-widest">
                {scene.kicker}
              </span>
              <h3 className="font-heading text-2xl text-[#3A2A28] mt-1 mb-2">
                {scene.title}
              </h3>
              <p className="text-sm text-[#5A4340] mb-4">{scene.role}</p>
              <div className="relative rounded-xl overflow-hidden mb-4 h-[220px] bg-[#F9FAFB] flex items-center justify-center p-2 border border-[rgba(58,42,40,0.06)]">
                <Image src={scene.heroImage.src} alt={scene.heroImage.alt} fill className="object-contain p-2" />
              </div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#C9707B]">
                <span>Result: {scene.resultStat.value}</span>
                <span className="flex items-center gap-1">Jump to details <ArrowRight className="w-3.5 h-3.5" /></span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Circular progress ring calculations
  const ringRadius = 68;
  const circumference = 2 * Math.PI * ringRadius;
  const strokeOffset = circumference * (1 - Math.min(Math.max(scrollProgress, 0), 1));

  return (
    <section
      id="projects"
      ref={sectionRef}
      aria-label="Projects Horizontal Scroll Gallery"
      className="relative w-full h-[100svh] overflow-hidden bg-white flex flex-col justify-between py-4 sm:py-6 select-none z-30"
    >
      {/* Top Header Bar */}
      <div className="relative z-40 flex items-center justify-between px-6 sm:px-12 w-full max-w-7xl mx-auto flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-heading tracking-widest uppercase bg-[#C9707B] text-white">
            Featured Gallery
          </span>
          <span className="text-xs uppercase tracking-wider text-[#7E6B69] font-medium hidden sm:inline-block">
            Scroll vertically to slide projects · Detailed case studies below
          </span>
        </div>

        {/* Skip Projects Accessibility Link */}
        <button
          onClick={handleSkipProjects}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#5A4340] hover:text-[#3A2A28] hover:bg-white border border-[rgba(58,42,40,0.15)] bg-white/80 backdrop-blur-sm transition-all interactive-hover shadow-sm"
        >
          <span>Jump to details</span>
          <FastForward className="w-3.5 h-3.5 text-[#C9707B]" />
        </button>
      </div>

      {/* FIXED CENTER BADGE: Circular "PROJECTS" Badge with Rose Arc Progress Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none flex flex-col items-center">
        <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-white shadow-2xl shadow-[rgba(58,42,40,0.15)] flex flex-col items-center justify-center p-3 border border-[rgba(58,42,40,0.1)]">
          {/* SVG Circular Progress Ring filling clockwise as scroll advances */}
          <svg
            className="absolute inset-0 w-full h-full transform -rotate-90 pointer-events-none"
            viewBox="0 0 160 160"
          >
            <circle
              cx="80"
              cy="80"
              r={ringRadius}
              fill="none"
              stroke="rgba(58, 42, 40, 0.08)"
              strokeWidth="3"
            />
            <circle
              cx="80"
              cy="80"
              r={ringRadius}
              fill="none"
              stroke="#C9707B"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={strokeOffset}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-75 ease-out"
            />
          </svg>

          {/* Inner Content */}
          <div className="text-center px-2">
            <span className="font-heading text-lg sm:text-2xl text-[#3A2A28] tracking-widest font-bold block leading-none">
              PROJECTS
            </span>
            <span className="font-heading text-xs sm:text-sm text-[#C9707B] font-semibold tracking-wider block mt-1">
              SCENE 0{currentSceneIdx + 1} / 06
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#7E6B69] font-medium hidden sm:block mt-1">
              Full details below
            </span>
          </div>
        </div>
      </div>

      {/* TWO STAGGERED PARALLAX MOSAIC ROWS */}
      <div
        ref={trackRef}
        className="relative w-full flex-1 flex flex-col justify-center gap-3 sm:gap-4 my-auto overflow-hidden px-4"
      >
        {/* ROW 1 */}
        <div
          ref={row1Ref}
          className="flex items-center gap-4 sm:gap-6 will-change-transform pl-[8vw] sm:pl-[14vw]"
        >
          {SCENES.map((scene) => (
            <div
              key={`row1-${scene.number}`}
              onClick={() => scrollToScene(scene.number)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") scrollToScene(scene.number); }}
              className="group project-card relative flex-shrink-0 w-[270px] sm:w-[360px] lg:w-[410px] h-[clamp(180px,28vh,240px)] rounded-2xl bg-white border border-[rgba(58,42,40,0.12)] shadow-md shadow-[rgba(58,42,40,0.04)] p-2.5 sm:p-3 cursor-pointer hover:border-[#C9707B] hover:shadow-xl transition-all duration-300 interactive-hover flex flex-col justify-between"
            >
              {/* Header Tag */}
              <div className="flex items-center justify-between mb-1.5 px-1">
                <span className="text-[11px] font-heading font-bold text-[#C9707B] tracking-wider uppercase">
                  {scene.kicker}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#F2C4C4]/60 text-[#3A2A28]">
                  {scene.resultStat.value}
                </span>
              </div>

              {/* Uncropped Visual Preview */}
              <div className="relative flex-1 w-full rounded-xl overflow-hidden bg-[#F9FAFB] flex items-center justify-center p-1.5 border border-[rgba(58,42,40,0.06)]">
                <Image
                  src={scene.heroImage.src}
                  alt={scene.heroImage.alt}
                  fill
                  sizes="(min-width: 640px) 410px, 270px"
                  className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-2 bottom-1.5 z-10 text-center opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#3A2A28]/85 text-white text-[10px] sm:text-[11px] font-medium backdrop-blur-sm shadow-sm truncate max-w-[90%]">
                    {scene.title}
                  </span>
                </div>
              </div>

              {/* Footer Title */}
              <div className="mt-1.5 px-1 flex items-center justify-between">
                <h4 className="font-heading text-xs sm:text-sm text-[#3A2A28] uppercase tracking-wide group-hover:text-[#C9707B] transition-colors truncate max-w-[240px] sm:max-w-[320px]">
                  {scene.title}
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-[#C9707B] font-semibold group-hover:translate-x-0.5 transition-transform">
                  <span>View</span>
                  <ArrowDownRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 2 (Offset / Staggered) */}
        <div
          ref={row2Ref}
          className="flex items-center gap-4 sm:gap-6 will-change-transform pl-[24vw] sm:pl-[34vw]"
        >
          {SCENES.slice().reverse().map((scene) => {
            const secondaryImg = scene.galleryImages[0] ?? scene.heroImage;
            return (
              <div
                key={`row2-${scene.number}`}
                onClick={() => scrollToScene(scene.number)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter") scrollToScene(scene.number); }}
                className="group project-card relative flex-shrink-0 w-[250px] sm:w-[330px] lg:w-[380px] h-[clamp(180px,28vh,240px)] rounded-2xl bg-white border border-[rgba(58,42,40,0.12)] shadow-md shadow-[rgba(58,42,40,0.04)] p-2.5 sm:p-3 cursor-pointer hover:border-[#C9707B] hover:shadow-xl transition-all duration-300 interactive-hover flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-1.5 px-1">
                  <span className="text-[10px] font-heading font-bold text-[#C9707B] tracking-wider uppercase">
                    {scene.kicker} Artifact
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#7E6B69] font-medium truncate max-w-[150px]">
                    {scene.category}
                  </span>
                </div>

                <div className="relative flex-1 w-full rounded-xl overflow-hidden bg-[#F9FAFB] flex items-center justify-center p-1.5 border border-[rgba(58,42,40,0.06)]">
                  <Image
                    src={secondaryImg.src}
                    alt={secondaryImg.alt}
                    fill
                    sizes="(min-width: 640px) 380px, 250px"
                    className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-2 bottom-1.5 z-10 text-center pointer-events-none">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#3A2A28]/85 text-white text-[10px] font-medium backdrop-blur-sm truncate max-w-[90%]">
                      {secondaryImg.caption || scene.title}
                    </span>
                  </div>
                </div>

                <div className="mt-1.5 px-1 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#3A2A28] truncate max-w-[200px]">
                    {scene.resultStat.label}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-[#C9707B] font-semibold group-hover:translate-x-0.5 transition-transform">
                    <span>{scene.resultStat.value}</span>
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Helper Bar */}
      <div className="relative z-40 flex items-center justify-between px-6 sm:px-12 w-full max-w-7xl mx-auto text-xs text-[#7E6B69] flex-shrink-0">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C9707B] animate-ping" />
          <span>Vertical scroll slides horizontal cards · When ring completes, scrolls down to details</span>
        </span>
        <span className="font-semibold text-[#3A2A28]">
          {Math.round(scrollProgress * 100)}% complete
        </span>
      </div>
    </section>
  );
}
