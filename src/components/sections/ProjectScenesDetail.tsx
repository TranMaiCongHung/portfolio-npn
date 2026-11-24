"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";
import { SCENES } from "@/data/portfolioData";

export function ProjectScenesDetail() {
  return (
    <section
      id="project-details"
      aria-label="Detailed Project Scenes Breakdown"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto z-20"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2C4C4]/50 border border-[#C9707B]/30 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C9707B]" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[#3A2A28]">
            In-Depth Case Studies
          </span>
        </div>

        <h2 className="font-heading text-4xl sm:text-6xl text-[#3A2A28] uppercase tracking-wide">
          Project <span className="text-outline-rose">Breakdown & Learnings</span>
        </h2>
        <p className="text-sm sm:text-base text-[#5A4340] max-w-xl mt-3 leading-relaxed">
          Comprehensive project briefs, verified campaign metrics, responsibilities, visual artifacts, and authentic reflections directly from PORTFOLIO.pdf.
        </p>
      </div>

      {/* Vertical list of all 6 Scenes */}
      <div className="flex flex-col gap-16 sm:gap-24">
        {SCENES.map((scene) => (
          <article
            key={scene.number}
            id={`scene-${scene.number}`}
            className="scroll-mt-24 relative rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-[rgba(58,42,40,0.12)] shadow-xl p-6 sm:p-10 lg:p-12 text-[#3A2A28] overflow-hidden"
          >
            {/* SCRIPT PROJECT INTRO & TOP HEADER (Faithfully matching PDF) */}
            <div className="pb-6 mb-8 border-b border-[rgba(58,42,40,0.1)]">
              {/* Elegant script label: "Project 01:", "Project 02:", "Project 03:", etc. */}
              <span
                className="pdf-script-project text-3xl sm:text-4xl lg:text-5xl mb-2 block select-none"
                style={{
                  fontFamily: "var(--font-great-vibes), 'Great Vibes', 'Alex Brush', 'Allura', var(--font-script), 'Pinyon Script', cursive",
                  color: "#E5A8AD",
                  WebkitTextStroke: "1.2px #2E2220",
                  paintOrder: "stroke fill",
                }}
              >
                {scene.projectScriptLabel ?? `Project ${scene.number}:`}
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Logo & Title */}
                <div className="flex items-center gap-3.5">
                  {scene.logo && (
                    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-[#F9FAFB] p-1.5 border border-[rgba(58,42,40,0.08)] flex-shrink-0 flex items-center justify-center">
                      <Image
                        src={scene.logo.src}
                        alt={scene.logo.alt}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-[#C9707B] block">
                      {scene.kicker} · {scene.category}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl text-[#3A2A28] uppercase tracking-wide leading-tight">
                      {scene.title}
                    </h3>
                  </div>
                </div>

                {/* Badges: Role Pill + Channel Account Pill */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider bg-white border border-[#C9707B]/40 text-[#3A2A28] shadow-sm">
                    {scene.role.split("·")[0].trim()}
                  </span>

                  {scene.accountHandle && (
                    <a
                      href={scene.externalLink?.url ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3A2A28] text-white text-xs font-medium hover:bg-[#C9707B] transition-colors shadow-sm"
                    >
                      <span className="font-semibold text-[#F2C4C4]">{scene.accountHandle}</span>
                      {scene.accountStats && (
                        <span className="opacity-80 text-[11px] hidden md:inline">
                          ({scene.accountStats})
                        </span>
                      )}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {scene.timeline && !scene.accountHandle && (
                    <span className="text-xs font-semibold text-[#7E6B69] uppercase tracking-wider">
                      {scene.timeline}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* MAIN TWO-COLUMN BODY (Sticking strictly to the PDF layout) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* LEFT COLUMN: PROJECT OVERVIEW + PHONE MOCKUP / VISUAL FEATURE */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div>
                  <h4 className="font-heading text-lg sm:text-xl text-[#3A2A28] uppercase tracking-wider mb-2">
                    Project Overview
                  </h4>
                  <p className="text-sm sm:text-[15px] text-[#5A4340] leading-relaxed">
                    {scene.overview}
                  </p>
                </div>

                {/* PHONE MOCKUP (For digital/social projects like Scene 02 VFIS and Scene 06 Threads) */}
                {scene.phoneMockup ? (
                  <div className="relative pt-2">
                    {/* Realistic iPhone Device Frame */}
                    <div className="relative mx-auto w-[260px] sm:w-[290px] rounded-[2.5rem] p-2 bg-[#2D2220] shadow-2xl border-[3px] border-[#4A3836]">
                      {/* Notch / Dynamic Island */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-end pr-2">
                        <div className="w-2 h-2 rounded-full bg-[#1C1615]" />
                      </div>
                      {/* Screen Content: full uncropped TikTok or Threads profile */}
                      <div className="relative rounded-[2rem] overflow-hidden bg-white aspect-[9/19.5]">
                        <Image
                          src={scene.phoneMockup.src}
                          alt={scene.phoneMockup.alt}
                          fill
                          sizes="(min-width: 640px) 290px, 260px"
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Alternative Primary Visual for non-phone scenes (e.g. Scene 01, Scene 03, Scene 04, Scene 05) */
                  <div className="flex flex-col gap-3">
                    <div className="relative w-full h-[260px] sm:h-[320px] rounded-2xl overflow-hidden border border-[rgba(58,42,40,0.12)] bg-[#F9FAFB] flex items-center justify-center p-3 shadow-sm">
                      <Image
                        src={scene.galleryImages[0]?.src ?? scene.heroImage.src}
                        alt={scene.galleryImages[0]?.alt ?? scene.title}
                        fill
                        sizes="(min-width: 1024px) 450px, 100vw"
                        className="object-contain p-2"
                      />
                    </div>
                    {scene.galleryImages[0]?.caption && (
                      <span className="text-xs text-center font-medium text-[#7E6B69]">
                        {scene.galleryImages[0].caption}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN: MY ROLE (Structured Sections) + TOP VIDEOS + RESULT CARD */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                {/* MY ROLE Header */}
                <div>
                  <h4 className="font-heading text-lg sm:text-xl text-[#3A2A28] uppercase tracking-wider mb-3">
                    My Role
                  </h4>

                  {/* Structured Role Sections from the PDF */}
                  {scene.roleSections && scene.roleSections.length > 0 ? (
                    <div className="flex flex-col gap-3.5">
                      {scene.roleSections.map((sec, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-4 sm:p-5 rounded-2xl bg-[#F9FAFB] border border-[rgba(58,42,40,0.08)]"
                        >
                          <h5 className="font-heading text-sm sm:text-base text-[#C9707B] uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                            <span>{sec.title}</span>
                          </h5>
                          <ul className="flex flex-col gap-2">
                            {sec.bullets.map((b, bIdx) => (
                              <li
                                key={bIdx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5A4340] leading-relaxed"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9707B] mt-0.5 flex-shrink-0" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="flex flex-col gap-3">
                      {scene.bullets?.map((b, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#5A4340] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#C9707B] mt-1 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* TOP-PERFORMANCE VIDEOS (Matching PDF with flower motif and video cards) */}
                {scene.featuredVideos && scene.featuredVideos.length > 0 && (
                  <div className="pt-2">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-base select-none">🌸</span>
                      <h5 className="font-heading text-sm sm:text-base text-[#3A2A28] uppercase tracking-wider font-bold">
                        Top-Performance Videos
                      </h5>
                    </div>
                    <div className="grid grid-cols-3 gap-3 sm:gap-4">
                      {scene.featuredVideos.slice(0, 3).map((vid) => (
                        <div
                          key={vid.id}
                          className="group relative rounded-2xl overflow-hidden border border-[rgba(58,42,40,0.12)] bg-[#F9FAFB] aspect-[4/5] shadow-sm flex flex-col justify-end p-2 interactive-hover"
                        >
                          <Image
                            src={vid.poster}
                            alt={vid.title}
                            fill
                            sizes="(min-width: 640px) 180px, 110px"
                            className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="relative z-10 bg-[#3A2A28]/85 backdrop-blur-sm rounded-xl px-2 py-1 text-center">
                            <span className="font-bevan bevan-regular text-[11px] sm:text-xs text-white tracking-normal block truncate">
                              ▷ {vid.views}
                            </span>
                            <span className="text-[9px] text-[#F2C4C4] font-medium block truncate">
                              {vid.title}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* RESULT CARD (The signature soft blush pink card directly from the PDF!) */}
                <div className="p-6 sm:p-7 rounded-[2rem] bg-gradient-to-r from-[#FCECEB] via-[#F8DFE2] to-[#FCECEB] border border-[#F2C4C4] shadow-sm">
                  <span className="font-script text-3xl sm:text-4xl text-[#C9707B] block mb-2 leading-none">
                    result
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-[rgba(201,112,123,0.25)]">
                    <div>
                      <span className="font-heading text-3xl sm:text-4xl text-[#3A2A28] font-bold block leading-tight">
                        {scene.resultStat.value}
                      </span>
                      <span className="text-xs sm:text-sm text-[#5A4340] font-medium leading-snug block mt-1">
                        {scene.resultStat.label}
                      </span>
                    </div>
                    {scene.additionalStats && scene.additionalStats[0] && (
                      <div>
                        <span className="font-heading text-3xl sm:text-4xl text-[#3A2A28] font-bold block leading-tight">
                          {scene.additionalStats[0].value}
                        </span>
                        <span className="text-xs sm:text-sm text-[#5A4340] font-medium leading-snug block mt-1">
                          {scene.additionalStats[0].label}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* WHAT THIS PROJECT taught me (FAITHFULLY REPLICATING uploaded_media_1794687113435.jpg) */}
            <div className="relative pt-12 pb-4 mt-12 border-t border-[rgba(58,42,40,0.1)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left side: Outline Header + Script "taught me" + Cutout Portrait with Lily Flower & Sparkles */}
                <div className="lg:col-span-5 relative flex flex-col items-start">
                  {/* Title Treatment: Outline "WHAT THIS PROJECT" + Script "taught me" */}
                  <div className="mb-4 relative z-10 select-none">
                    <span className="font-heading text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-outline-cocoa block">
                      WHAT THIS PROJECT
                    </span>
                    <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#C9707B] block -mt-2 sm:-mt-3 ml-6 sm:ml-8 italic">
                      taught me
                    </span>
                  </div>

                  {/* Cutout Portrait with Layered Lily Motif & Sparkle Stars */}
                  <div className="relative mt-2 pl-4">
                    {/* Background Soft Pink Lily Motif */}
                    <div className="absolute -top-10 -left-6 w-36 h-36 sm:w-44 sm:h-44 pointer-events-none select-none z-0 opacity-45">
                      <Image
                        src="/source/lily-soft.webp"
                        alt=""
                        fill
                        className="object-contain rotate-12"
                      />
                    </div>

                    {/* 4-point Sparkle Stars */}
                    <span className="absolute -top-3 right-2 text-[#C9707B] text-sm animate-pulse z-20 select-none">
                      ✦
                    </span>
                    <span className="absolute bottom-8 -left-4 text-[#F2C4C4] text-xs z-20 select-none">
                      ✧
                    </span>
                    <span className="absolute top-1/2 -right-4 text-[#C9707B] text-xs z-20 select-none">
                      ✦
                    </span>

                    {/* Cutout Portrait */}
                    {scene.cutout && (
                      <div className="relative z-10 w-32 sm:w-40 lg:w-44 h-48 sm:h-56 lg:h-64">
                        <Image
                          src={scene.cutout}
                          alt={scene.title}
                          fill
                          sizes="(min-width: 1024px) 180px, 140px"
                          className="object-contain object-bottom drop-shadow-md"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Right side: Complete reflection paragraphs from PORTFOLIO.pdf */}
                <div className="lg:col-span-7 flex flex-col gap-4 text-[#4A3836] text-sm sm:text-[15px] lg:text-base leading-relaxed font-sans">
                  {scene.learnedParagraphs && scene.learnedParagraphs.length > 0 ? (
                    scene.learnedParagraphs.map((para, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">
                        {para}
                      </p>
                    ))
                  ) : (
                    <p className="leading-relaxed">
                      {scene.learned}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ADDITIONAL VISUAL EVIDENCE & ARTIFACTS (Uncropped, at the bottom of the card) */}
            {scene.galleryImages && scene.galleryImages.length > 1 && (
              <div className="mt-10 pt-8 border-t border-[rgba(58,42,40,0.1)]">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-heading text-base sm:text-lg text-[#3A2A28] uppercase tracking-wider">
                    Visual Evidence & Artifacts
                  </h4>
                  <span className="text-xs text-[#7E6B69] font-medium uppercase tracking-wider">
                    {scene.galleryImages.length} Evidence Artifacts
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {scene.galleryImages.map((img, i) => (
                    <div
                      key={i}
                      className="group flex flex-col rounded-2xl overflow-hidden border border-[rgba(58,42,40,0.1)] bg-white shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="relative w-full h-[220px] sm:h-[260px] p-2 bg-[#F9FAFB] flex items-center justify-center">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(min-width: 1024px) 240px, 50vw"
                          className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {img.caption && (
                        <div className="p-2.5 bg-white border-t border-[rgba(58,42,40,0.08)] text-center">
                          <span className="text-xs font-medium text-[#3A2A28] leading-tight block">
                            {img.caption}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
