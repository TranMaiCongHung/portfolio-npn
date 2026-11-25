"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { InteractiveRoleList, RoleItem } from "./InteractiveRoleList";
import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";

const VFIS_VIDEOS = [
  {
    id: "vfis-1",
    title: "MATCHDAY Cinematic Recap",
    views: "15.6K",
    poster: "/source/p3_035.png",
  },
  {
    id: "vfis-2",
    title: "School Spirit & Cheering Event",
    views: "25.3K",
    poster: "/source/p3_036.png",
  },
  {
    id: "vfis-3",
    title: "Student Activities & Campus Moments",
    views: "10.2K",
    poster: "/source/p3_037.png",
  },
];

const CULTURE_START_GALLERY = [
  {
    id: "pitch",
    src: "/source/culture-start-pitch.webp",
    title: "Stage Pitch & Defense",
    subtitle: "Pitching project concept and defense before the USSH judging panel",
    tag: "Pitch Deck & Presentation",
  },
  {
    id: "stage-defense",
    src: "/source/culture-start-defense.webp",
    title: "Finalist Stage Defense",
    subtitle: "Competition members presenting collaboratively during the final round",
    tag: "Stage Defense",
  },
  {
    id: "ceremony",
    src: "/source/culture-start-ceremony.webp",
    title: "Cul-Start Grand Ceremony",
    subtitle: "Commemorative group photo with university faculty, judges, and competing teams",
    tag: "Award Ceremony",
  },
  {
    id: "product",
    src: "/source/culture-start-product.webp",
    title: "Product Identity & Prototype",
    subtitle: "Cultural branding, identity design, and concept exhibition",
    tag: "Product & Branding",
  },
];

const THREADS_PILLARS = [
  "Daily Life",
  "Personal Journey",
  "Personal Interests",
  "Thoughts & Relatable Stories",
];

const VFIS_ROLE_STEPS = [
  {
    id: 1,
    num: "01",
    title: "SOCIAL MEDIA MANAGEMENT",
    category: "Platform Strategy & Operations",
    tag: "Facebook • Instagram • TikTok",
    points: [
      "Managed and developed content across Facebook, Instagram, and TikTok.",
      "Maintained a posting frequency of 2–3 posts per week.",
      "Supported consistent communication across social media channels.",
    ],
  },
  {
    id: 2,
    num: "02",
    title: "CONTENT CREATION",
    category: "Short-form & Visual Production",
    tag: "60+ Content Materials Produced",
    points: [
      "Produced and edited 60+ communication materials.",
      "Developed written posts, visuals, and content featuring school activities.",
      "Adapted content to different platforms and target audiences.",
    ],
  },
  {
    id: 3,
    num: "03",
    title: "EVENT COMMUNICATION",
    category: "Community Engagement & Events",
    tag: "Seasonal & Holiday School Events",
    points: [
      "Supported the organization and promotion of seasonal and holiday-themed school events.",
      "Assisted in preparing communication materials before and during events.",
      "Contributed to building stronger engagement within the school community.",
    ],
  },
];

const MARATHON_ROLE_ITEMS: RoleItem[] = [
  {
    num: "01",
    text: "Assisted with event operations and on-site coordination.",
  },
  {
    num: "02",
    text: "Supported the team during peak hours.",
  },
  {
    num: "03",
    text: "Helped maintain smooth operations and positive participant experience.",
  },
];

const CULTURE_START_ROLE_ITEMS: RoleItem[] = [
  {
    num: "01",
    text: "Collaborated with team members throughout the competition.",
  },
  {
    num: "02",
    text: "Applied marketing knowledge and creativity to develop project ideas.",
  },
  {
    num: "03",
    text: "Contributed to project development and presentation.",
  },
  {
    num: "04",
    text: "Worked collaboratively to complete competition requirements.",
  },
];

const THREADS_ROLE_ITEMS: RoleItem[] = [
  {
    num: "01",
    text: "Develop and publish daily content based on personal observations.",
  },
  {
    num: "02",
    text: "Write short-form posts in a natural, conversational, relatable tone.",
  },
  {
    num: "03",
    text: "Explore trending topics and engaging relatable discussions.",
  },
  {
    num: "04",
    text: "Experiment with different writing styles and storytelling approaches.",
  },
  {
    num: "05",
    text: "Identify content themes that resonate deeply with audiences.",
  },
  {
    num: "06",
    text: "Refine content direction based on performance and interactions.",
  },
];

export function Page3Projects() {
  const [hoveredVfisRole, setHoveredVfisRole] = useState<number | null>(null);
  const [selectedVfisRole, setSelectedVfisRole] = useState<number | null>(null);
  const activeVfisRole = hoveredVfisRole ?? selectedVfisRole;
  const activeStepData =
    VFIS_ROLE_STEPS.find((s) => s.id === activeVfisRole) ?? VFIS_ROLE_STEPS[0];

  return (
    <section
      id="page-3"
      aria-label="Projects 02 through 05 and Personal Project"
      className="relative w-full bg-transparent text-[#2E2220] py-10 sm:py-14 px-3 sm:px-6 lg:px-8 border-b border-[#E8DFDC]"
    >
      <div className="w-full max-w-[1480px] mx-auto flex flex-col gap-16 sm:gap-24 relative z-10">
        {/* ========================================================= */}
        {/* PROJECT 02: SOCIAL MEDIA & COMMUNICATIONS (VFIS)          */}
        {/* ========================================================= */}
        <div id="project-2" className="scroll-mt-20 flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-4 border-b border-[#E8DFDC]">
            <div className="flex items-stretch gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
              {/* Enlarged VFIS Logo - Sharp square (no bo tròn), height spans from top of Project 02 to bottom of collaborator badge */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-[172px] lg:h-[172px] flex-shrink-0">
                <Image
                  src="/source/s02-logo.webp"
                  alt="VFIS Logo"
                  fill
                  className="object-contain rounded-none"
                  priority
                />
              </div>

              {/* Title & Project 02 & Badge block - Pushed to the right and aligned top and bottom with the logo */}
              <div className="flex flex-col justify-between items-start min-w-0 self-stretch">
                <div className="flex flex-col items-start min-w-0">
                  <span
                    className="text-[3.25rem] sm:text-[4.25rem] md:text-[4.75rem] lg:text-[5.25rem] -mb-1 sm:-mb-2 md:-mb-2.5 lg:-mb-3 relative z-10 select-none leading-none pl-1 inline-block"
                    style={{
                      fontFamily: "var(--font-script), 'Pinyon Script', cursive",
                      fontWeight: 400,
                      color: "#E5A8AD",
                      WebkitTextStroke: "1.2px #2E2220",
                      paintOrder: "stroke fill",
                    }}
                  >
                    Project 02:
                  </span>
                  <h3 className="pdf-outline-title text-[1.4rem] sm:text-[2.1rem] lg:text-[2.65rem] tracking-wide leading-none">
                    SOCIAL MEDIA & COMMUNICATIONS
                  </h3>
                </div>
                <div>
                  <span className="px-5 py-1.5 rounded-full bg-[#F4EAEB] text-xs font-montserrat font-bold text-[#1E1716] tracking-wider uppercase inline-block">
                    COMMUNICATIONS COLLABORATOR
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup + Overview & Role */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left: Phone Mockup linking to TikTok */}
            <div className="md:col-span-4 flex flex-col items-center">
              <a
                href="https://www.tiktok.com/@vfis.athletics"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-56 sm:w-64 aspect-[9/18] rounded-[2.5rem] p-2.5 bg-black border-4 border-[#3A2A28] shadow-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform block"
                title="Click to visit @vfis.athletics on TikTok"
              >
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-black">
                  <Image
                    src="/source/s02-profile.webp"
                    alt="VFIS TikTok Profile"
                    fill
                    className="object-cover"
                  />
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@vfis.athletics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-[11px] sm:text-xs text-[#7E6B69] hover:text-[#F2C4C4] italic mt-2.5 transition-colors"
              >
                (click here to view account)
              </a>
            </div>

            {/* Right: Overview & My Role */}
            <div className="md:col-span-8 space-y-6 text-[#3E2F2D]">
              <div>
                <h4 className="pdf-outline-title text-xl sm:text-2xl lg:text-[1.75rem] tracking-wider mb-2.5">
                  PROJECT OVERVIEW
                </h4>
                <p className="text-sm sm:text-base text-[#4A3835] leading-relaxed text-justify">
                  Supported content development and social media communications
                  across Facebook, Instagram, and TikTok. The content focused on
                  school activities, events, and everyday moments to strengthen
                  connections between the school, students, and parents.
                </p>
              </div>

              <div>
                <h4 className="pdf-outline-title text-xl sm:text-2xl lg:text-[1.75rem] tracking-wider mb-4">
                  MY ROLE
                </h4>

                {/* Interactive Workflow: Timeline on Left, 3 Steps in Middle, Speech Bubble on Right */}
                <div className="relative w-full">
                  <div className="w-full grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6 items-stretch">
                    {/* Left Column: Vertical Timeline + 3 Step Cards combined in unified rows */}
                    <div className="relative flex flex-col gap-5 w-full">
                      {/* Continuous Vertical Timeline Line on Left (Passes through all 3 dots with clean top and bottom extensions) */}
                      <div className="hidden lg:block absolute left-[12px] -translate-x-1/2 top-4 bottom-4 w-[2.5px] bg-gradient-to-b from-[#8C464F]/30 via-[#DCA3A8] to-[#8C464F]/30 rounded-full pointer-events-none z-0" />

                      {VFIS_ROLE_STEPS.map((step) => {
                        const isActive = activeVfisRole === step.id;
                        return (
                          <div
                            key={step.id}
                            onMouseEnter={() => setHoveredVfisRole(step.id)}
                            onMouseLeave={() => setHoveredVfisRole(null)}
                            onClick={() =>
                              setSelectedVfisRole(
                                selectedVfisRole === step.id ? null : step.id
                              )
                            }
                            className="group relative flex items-center gap-3 sm:gap-4 w-full h-[98px] sm:h-[104px] cursor-pointer select-none"
                          >
                            {/* Milestone Dot on Timeline - Centered at 52px */}
                            <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-6 h-6 relative z-10">
                              <div
                                className={`w-6 h-6 rounded-full border-[2.5px] transition-all duration-300 flex items-center justify-center ${
                                  isActive
                                    ? "bg-[#8C464F] border-[#8C464F] scale-125 shadow-[0_0_12px_rgba(140,70,79,0.5)]"
                                    : "bg-white border-[#C9BDBA]"
                                }`}
                              />
                            </div>

                            {/* Horizontal Connector Line between Dot and Card */}
                            <div
                              className={`hidden lg:block w-4 sm:w-5 h-[2px] transition-colors duration-300 flex-shrink-0 ${
                                isActive ? "bg-[#8C464F]" : "bg-[#E8DFDC]"
                              }`}
                            />

                            {/* Step Card - Tall & spacious card matching phone height */}
                            <div
                              className={`flex-1 h-full flex items-center gap-4 sm:gap-5 px-5 sm:px-6 rounded-[22px] transition-all duration-200 border ${
                                isActive
                                  ? "bg-gradient-to-r from-[#FFF5F6] to-white border-[#8C464F] shadow-md scale-[1.01]"
                                  : "bg-white border-[#E8DFDC] hover:border-[#DCA3A8] hover:shadow-xs"
                              }`}
                            >
                              <span
                                className={`font-montserrat font-black text-3xl sm:text-4xl tracking-tight tabular-nums flex-shrink-0 transition-all duration-200 leading-none ${
                                  isActive ? "text-[#F2C4C4] scale-105" : "text-[#F2C4C4]"
                                }`}
                              >
                                {step.num}
                              </span>
                              <div className="min-w-0 pr-1 text-left">
                                <span className="text-[14px] sm:text-[15.5px] lg:text-[16.5px] font-montserrat font-bold text-[#2E2220] tracking-wide leading-tight block">
                                  {step.title}
                                </span>
                                <span className="text-xs text-[#7E6B69] block mt-1.5 truncate">
                                  {step.tag}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Right Column: Reserved Space for Floating Speech Bubble (Bong bóng thoại) */}
                    <div className="w-full relative min-h-[220px] lg:h-full">
                      {/* Speech Bubble Box - Compact, no excess top/bottom space, glides to active card */}
                      <div
                        onMouseEnter={() => {
                          if (activeVfisRole !== null) setHoveredVfisRole(activeVfisRole);
                        }}
                        onMouseLeave={() => setHoveredVfisRole(null)}
                        className={`relative lg:absolute lg:left-0 lg:right-0 w-full rounded-[24px] border-[2px] border-[#2E2220] bg-white p-4.5 sm:p-5 shadow-[0_16px_36px_rgba(46,34,32,0.14)] transition-all duration-300 ease-out ${
                          activeVfisRole === 1
                            ? "lg:top-0 lg:translate-y-0"
                            : activeVfisRole === 2
                            ? "lg:top-1/2 lg:-translate-y-1/2"
                            : activeVfisRole === 3
                            ? "lg:top-full lg:-translate-y-full"
                            : "lg:top-0 lg:translate-y-0"
                        } ${
                          activeVfisRole !== null
                            ? "opacity-100 scale-100 translate-x-0 pointer-events-auto"
                            : "opacity-0 scale-95 translate-x-2 pointer-events-none"
                        }`}
                      >
                        {/* Dynamic Callout Tail (Points precisely at the active card's vertical center) */}
                        <div
                          className={`hidden lg:block absolute -left-[19px] w-[20px] h-[22px] pointer-events-none z-20 transition-all duration-300 ease-out ${
                            activeVfisRole === 1
                              ? "top-[52px] -translate-y-1/2"
                              : activeVfisRole === 2
                              ? "top-1/2 -translate-y-1/2"
                              : activeVfisRole === 3
                              ? "bottom-[52px] translate-y-1/2"
                              : "top-[52px] -translate-y-1/2"
                          }`}
                        >
                          <svg viewBox="0 0 20 22" fill="none" className="w-full h-full overflow-visible">
                            <polygon points="20,2 2,11 20,20" fill="#FFFFFF" />
                            <polyline
                              points="20,2 2,11 20,20"
                              stroke="#2E2220"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <line x1="19.5" y1="2" x2="19.5" y2="20" stroke="#FFFFFF" strokeWidth="3" />
                          </svg>
                        </div>

                        {/* Mobile Callout Tail (Points up) */}
                        <div className="lg:hidden absolute -top-[14px] left-8 w-[20px] h-[16px] pointer-events-none z-20">
                          <svg viewBox="0 0 20 16" fill="none" className="w-full h-full overflow-visible">
                            <polygon points="2,16 10,2 18,16" fill="#FFFFFF" />
                            <polyline
                              points="2,16 10,2 18,16"
                              stroke="#2E2220"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <line x1="2" y1="15.5" x2="18" y2="15.5" stroke="#FFFFFF" strokeWidth="3" />
                          </svg>
                        </div>

                        {/* Content of the Active Step */}
                        <div key={activeStepData.id} className="transition-opacity duration-200">
                          <div className="pb-2 mb-2.5 border-b border-[#E8DFDC]">
                            <span className="text-xs sm:text-[13px] font-montserrat font-extrabold text-[#F2C4C4] tracking-wider uppercase block">
                              {activeStepData.category}
                            </span>
                          </div>
                          <ul className="space-y-2 text-[11.5px] sm:text-[12.5px] text-[#3E2F2D] leading-relaxed">
                            {activeStepData.points.map((point, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#8C464F] mt-1.5 flex-shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top-Performance Videos */}
          <div>
            <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-[#E8DFDC]">
              <h4 className="pdf-outline-title text-xl sm:text-2xl lg:text-[1.75rem] tracking-wider leading-none">
                TOP-PERFORMANCE VIDEOS
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {VFIS_VIDEOS.map((video) => (
                <div
                  key={video.id}
                  className="group relative aspect-[368/490] w-full max-w-[460px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-transparent border border-[#2E2220]/20 shadow-md select-none"
                >
                  <Image
                    src={video.poster}
                    alt={video.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 460px"
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Result Card */}
          <div>
            <span className="pdf-script text-3xl sm:text-4xl text-[#F2C4C4] block mb-1">
              result
            </span>
            <div className="pt-2 sm:pt-4 px-4 sm:px-6 pb-0 flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 sm:gap-6 lg:gap-8 text-[#2E2220] overflow-hidden">
              {/* Stat 1: 30+ (Căn lề phải, sát vào thanh dọc, từ thanh dọc chạy ra bên trái) */}
              <motion.div
                className="flex flex-col items-end text-right w-full sm:w-auto max-w-[340px]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                <AnimatedCounter
                  value="30+"
                  duration={1800}
                  className="font-bevan bevan-regular text-5xl sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] text-[#2E2220] tracking-wide"
                />
                <p className="text-xs sm:text-sm md:text-base font-medium text-[#4A3835] mt-3 sm:mt-4 leading-snug text-right">
                  Content pieces produced and edited
                </p>
              </motion.div>

              {/* Vertical Divider (Thanh dọc ở giữa làm mốc - giảm 15-20% chiều dài) */}
              <motion.div
                className="hidden sm:block w-px h-36 sm:h-[185px] lg:h-[210px] xl:h-[215px] bg-[#D5BEBE] flex-shrink-0 self-center"
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ transformOrigin: "center" }}
              />

              {/* Stat 2: 20.000+ (Căn lề trái, sát vào thanh dọc, di chuyển xuống dưới ngang với phần content bên trái) */}
              <motion.div
                className="flex flex-col items-start text-left w-full sm:w-auto max-w-[340px] sm:mt-[76px] lg:sm:mt-[84px] xl:sm:mt-[92px]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                <AnimatedCounter
                  value="20.000+"
                  duration={2000}
                  className="font-bevan bevan-regular text-5xl sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] text-[#2E2220] tracking-wide"
                />
                <p className="text-xs sm:text-sm md:text-base font-medium text-[#4A3835] mt-3 sm:mt-4 leading-snug text-left">
                  Views on the highest-performing video
                </p>
              </motion.div>
            </div>
          </div>

          {/* What This Project Taught Me (Thiết kế đồng bộ Project 01 - Người đứng trên chữ) */}
          <div className="w-full pt-4 sm:pt-6">
            <div className="grid grid-cols-1 md:grid-cols-[460px_1fr] lg:grid-cols-[520px_1fr] xl:grid-cols-[560px_1fr] gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-center">
              {/* Left: Cutout Figure Standing Directly on Top of Title */}
              <div className="relative flex flex-col items-center justify-center select-none w-full">
                {/* Cutout Photo (Thu nhỏ lại 1 tí, chân ảnh tiếp xúc ngay trên đầu chữ) */}
                <div className="relative w-44 sm:w-52 md:w-60 lg:w-64 h-64 sm:h-76 md:h-84 lg:h-[360px] z-10 -mb-1 sm:-mb-1.5">
                  <Image
                    src="/source/cutout-vfis.webp"
                    alt="Nguyen in VFIS"
                    fill
                    sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 256px"
                    className="object-contain object-bottom filter drop-shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Title: WHAT THIS PROJECT taught me (w-fit để "taught me" căn lề phải chuẩn theo "WHAT THIS PROJECT") */}
                <div className="relative z-20 flex flex-col w-fit max-w-[560px] mx-auto select-none pt-0">
                  {/* Line 1: WHAT THIS PROJECT */}
                  <h3 className="pdf-outline-title text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] whitespace-nowrap select-none leading-none">
                    WHAT THIS PROJECT
                  </h3>

                  {/* Line 2: taught me (Đẩy lên trên 1 tí & căn lề phải so với WHAT THIS PROJECT) */}
                  <span className="pdf-script-rose-outline text-[48px] sm:text-[60px] md:text-[68px] lg:text-[76px] xl:text-[84px] block -mt-2 sm:-mt-3 md:-mt-4 text-right self-end select-none leading-none whitespace-nowrap">
                    taught me
                  </span>
                </div>
              </div>

              {/* Right: Reflection Paragraphs */}
              <div className="w-full md:pl-6 lg:pl-8 space-y-4 text-sm sm:text-base text-[#3E2F2D] leading-relaxed text-justify">
                <p>
                  Through this experience, I learned that managing social media
                  is not just about posting content regularly, but also about
                  understanding what the audience cares about and how they
                  prefer to receive information. Working across Facebook,
                  Instagram, and TikTok helped me recognize that each platform
                  has its own way of communicating, so content needs to be
                  adapted to fit both the platform and its audience.
                </p>
                <p>
                  I also came to appreciate the value of everyday moments in
                  storytelling. Sometimes, simple and relatable content about
                  school activities or student experiences can create a stronger
                  connection than overly formal communication. This experience
                  taught me to pay closer attention to content details, maintain
                  consistency, and think more carefully about how each post
                  contributes to the overall communication of the school.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PROJECT 03: CONTENT MARKETING (MLAND COASTAL)             */}
        {/* ========================================================= */}
        <div id="project-3" className="scroll-mt-20 flex flex-col gap-8 pt-8 border-t border-[#E8DFDC]">
          {/* Header (Đồng bộ layout Project 02) */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-4 border-b border-[#E8DFDC]">
            <div className="flex items-stretch gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
              {/* Enlarged MLAND Logo - Sharp square, height spans from top of Project 03 to bottom of intern badge */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-[172px] lg:h-[172px] flex-shrink-0">
                <Image
                  src="/source/s03-logo.webp"
                  alt="MLAND Logo"
                  fill
                  className="object-contain rounded-none"
                  priority
                />
              </div>

              {/* Title & Project 03 & Badge block - Pushed to the right and aligned top and bottom with the logo */}
              <div className="flex flex-col justify-between items-start min-w-0 self-stretch">
                <div className="flex flex-col items-start min-w-0">
                  <span
                    className="text-[3.25rem] sm:text-[4.25rem] md:text-[4.75rem] lg:text-[5.25rem] -mb-1 sm:-mb-2 md:-mb-2.5 lg:-mb-3 relative z-10 select-none leading-none pl-1 inline-block"
                    style={{
                      fontFamily: "var(--font-script), 'Pinyon Script', cursive",
                      fontWeight: 400,
                      color: "#E5A8AD",
                      WebkitTextStroke: "1.2px #2E2220",
                      paintOrder: "stroke fill",
                    }}
                  >
                    Project 03:
                  </span>
                  <h3 className="pdf-outline-title text-[1.4rem] sm:text-[2.1rem] lg:text-[2.65rem] tracking-wide leading-none">
                    CONTENT MARKETING
                  </h3>
                </div>
                <div>
                  <span className="px-5 py-1.5 rounded-full bg-[#F4EAEB] text-xs font-montserrat font-bold text-[#1E1716] tracking-wider uppercase inline-block">
                    CONTENT MARKETING INTERN
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 1: Content bên trái & Ảnh 1 bên phải */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="flex flex-col items-start text-left">
              <h4 className="pdf-outline-title text-xl sm:text-2xl lg:text-[1.75rem] tracking-wider mb-3 leading-none">
                PROJECT OVERVIEW
              </h4>
              <p className="text-sm sm:text-base text-[#4A3835] leading-relaxed text-left">
                Supported Content Marketing activities in the real estate
                industry, focusing on short-form video production for TikTok to
                support the company&apos;s digital communication efforts.
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/source/s03-channel.webp"
                alt="MLAND Coastal TikTok Channel"
                width={946}
                height={416}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Row 2: Ảnh 2 bên trái & MY ROLE bên phải (kích thước ảnh 50% chuẩn như ban đầu) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="w-full">
              <Image
                src="/source/s03-plan.webp"
                alt="Content Plan & Production Schedule"
                width={1082}
                height={574}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
            <div className="flex flex-col items-start text-left w-full">
              <h4 className="pdf-outline-title text-xl sm:text-2xl lg:text-[1.75rem] tracking-wider mb-4 leading-none">
                MY ROLE
              </h4>
              <InteractiveRoleList />
            </div>
          </div>

          {/* Featured Lessons Videos */}
          <div>
            <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-[#E8DFDC]">
              <h4 className="pdf-outline-title text-xl sm:text-2xl lg:text-[1.75rem] tracking-wider leading-none">
                FEATURED LESSONS VIDEOS
              </h4>
            </div>

            {/* Featured Lessons Videos & Featured Videos Showcase - Matching Reference Mockup */}
            <div className="w-full pt-2">
              {/* Top Row: 2 Outlined Boxes Side-by-Side (3 seamless images each) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 w-full">
                {/* Box 1 (Left 3 images): Sharp corners, solid black border, seamless cards */}
                <div className="grid grid-cols-3 border border-black overflow-hidden rounded-none shadow-xs bg-black">
                  {[
                    {
                      src: "/source/s03-lesson-1.webp",
                      title: "Khi bạn bịa CV thành thạo kĩ năng quay",
                    },
                    {
                      src: "/source/s03-lesson-2.webp",
                      title: "Mai đi làm phải có clip triệu views cho sếp",
                    },
                    {
                      src: "/source/s03-lesson-3.webp",
                      title: "Tình hình tan ca của GenZ",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="relative overflow-hidden aspect-[248/330]"
                    >
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 33vw, 20vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Box 2 (Right 3 images): Sharp corners, solid black border, seamless cards */}
                <div className="grid grid-cols-3 border border-black overflow-hidden rounded-none shadow-xs bg-black">
                  {[
                    {
                      src: "/source/s03-lesson-4.webp",
                      title: "Cách để nhân viên luôn tán thành ý kiến của sếp",
                    },
                    {
                      src: "/source/s03-lesson-5.webp",
                      title: "Được hôm dẫn nv mới đi tham quan công ty",
                    },
                    {
                      src: "/source/s03-lesson-6.webp",
                      title: "Bạn có thể không tin ai cả nhưng...",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="relative overflow-hidden aspect-[248/330]"
                    >
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 33vw, 20vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* What This Project Taught Me (Đồng bộ bố cục và design theo Project 02) */}
          <div className="w-full pt-6 sm:pt-8">
            <div className="grid grid-cols-1 md:grid-cols-[460px_1fr] lg:grid-cols-[520px_1fr] xl:grid-cols-[560px_1fr] gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-center">
              {/* Left: Cutout Figure Sitting Directly on Top of Title */}
              <div className="relative flex flex-col items-center justify-center select-none w-full">
                {/* Cutout Photo (Người ngồi tiếp xúc ngay trên đầu chữ) */}
                <div className="relative w-44 sm:w-52 md:w-60 lg:w-64 h-64 sm:h-76 md:h-84 lg:h-[360px] z-10 -mb-1 sm:-mb-1.5">
                  <Image
                    src="/source/cutout-sitting.webp"
                    alt="Nguyen sitting"
                    fill
                    sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 256px"
                    className="object-contain object-bottom filter drop-shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Title: WHAT I'VE LEARNED from this project? (Giữ nguyên content gốc) */}
                <div className="relative z-20 flex flex-col w-fit max-w-[560px] mx-auto select-none pt-0">
                  {/* Line 1: WHAT I'VE LEARNED */}
                  <h3 className="pdf-outline-title text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] whitespace-nowrap select-none leading-none">
                    WHAT I&apos;VE LEARNED
                  </h3>

                  {/* Line 2: from this project? */}
                  <span className="pdf-script-rose-outline text-[45px] sm:text-[56px] md:text-[64px] lg:text-[72px] xl:text-[80px] block -mt-1.5 sm:-mt-2.5 md:-mt-3 text-right self-end select-none leading-none whitespace-nowrap">
                    from this project?
                  </span>
                </div>
              </div>

              {/* Right: Reflection Paragraphs */}
              <div className="w-full md:pl-6 lg:pl-8 space-y-4 text-sm sm:text-base text-[#3E2F2D] leading-relaxed text-justify">
                <p>
                  This experience gave me a closer look at the process of
                  creating short-form video content, from preparing ideas and
                  filming to editing the final videos. I learned that producing a
                  video is not just about putting visuals together, but also
                  about understanding what information needs to be communicated
                  and how to present it in a way that keeps viewers interested.
                </p>
                <p>
                  Working with real estate content also helped me realize that
                  different industries require different content approaches.
                  Information needs to be clear and relevant, while the video
                  itself should still feel engaging and easy to follow. Although
                  this was an early hands-on experience, it helped me become
                  more familiar with the content production process and more
                  confident in turning ideas into actual social media content.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PROJECT 04: HCMC MARATHON 2025                            */}
        {/* ========================================================= */}
        <div id="project-4" className="scroll-mt-20 flex flex-col gap-8 pt-8 border-t border-[#E8DFDC]">
          {/* Header (Đồng bộ layout Project 02) */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-4 border-b border-[#E8DFDC]">
            <div className="flex items-stretch gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
              {/* Enlarged Marathon Logo */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-[172px] lg:h-[172px] flex-shrink-0">
                <Image
                  src="/source/s04-logo.webp"
                  alt="Marathon Logo"
                  fill
                  className="object-contain rounded-none"
                  priority
                />
              </div>

              {/* Title & Project 04 & Badge block */}
              <div className="flex flex-col justify-between items-start min-w-0 self-stretch">
                <div className="flex flex-col items-start min-w-0">
                  <span
                    className="text-[3.25rem] sm:text-[4.25rem] md:text-[4.75rem] lg:text-[5.25rem] -mb-1 sm:-mb-2 md:-mb-2.5 lg:-mb-3 relative z-10 select-none leading-none pl-1 inline-block"
                    style={{
                      fontFamily: "var(--font-script), 'Pinyon Script', cursive",
                      fontWeight: 400,
                      color: "#E5A8AD",
                      WebkitTextStroke: "1.2px #2E2220",
                      paintOrder: "stroke fill",
                    }}
                  >
                    Project 04:
                  </span>
                  <h3 className="pdf-outline-title text-[1.4rem] sm:text-[2.1rem] lg:text-[2.65rem] tracking-wide leading-none">
                    HCMC MARATHON 2025
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-5 py-1.5 rounded-full bg-[#F4EAEB] text-xs font-montserrat font-bold text-[#1E1716] tracking-wider uppercase inline-block">
                    EVENT OPERATIONS & ON-SITE COORDINATION
                  </span>
                  <span className="text-xs text-[#7E6B69]">
                    <AnimatedCounter
                      value="1,000+"
                      duration={1600}
                      className="font-bevan bevan-regular text-sm text-[#2E2220] tracking-wide"
                    />{" "}
                    Participants
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Row: Left MY ROLE & EXPERIENCE GAINED, Right Team Photo */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left: Role & Experience Gained */}
            <div className="md:col-span-7 lg:col-span-7 space-y-5 sm:space-y-6">
              <div>
                <h4 className="pdf-outline-title text-xl sm:text-2xl lg:text-[1.75rem] tracking-wider mb-3 leading-none">
                  MY ROLE
                </h4>
                <InteractiveRoleList items={MARATHON_ROLE_ITEMS} />
              </div>

              {/* Experience Gained */}
              <div className="pt-1">
                <h5 className="pdf-outline-title text-xl sm:text-2xl lg:text-[1.75rem] tracking-wider mb-2.5 leading-none">
                  EXPERIENCE GAINED
                </h5>
                <p className="text-xs sm:text-sm text-[#4A3835] leading-relaxed">
                  Strengthened teamwork, adaptability, and problem-solving skills while working in a
                  <br />
                  fast-paced event environment.
                </p>
              </div>
            </div>

            {/* Right: Team Photo */}
            <div className="md:col-span-5 lg:col-span-5 flex justify-center md:justify-end w-full">
              <div
                style={{ aspectRatio: "16 / 11", minHeight: "260px" }}
                className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[460px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8DFDC]/80 shadow-sm bg-transparent"
              >
                <Image
                  src="/source/s04-team.webp"
                  alt="Marathon Operations Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 460px"
                  className="object-cover"
                  style={{ objectPosition: "center 85%" }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Row: 2 Photos with Centerpiece Cutout Overlap */}
          <div className="relative w-full mt-8 sm:mt-14 lg:mt-18">
            <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
              {/* Left: Stage Photo */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9.5] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8DFDC]/80 shadow-sm bg-transparent">
                <Image
                  src="/source/s04-stage.webp"
                  alt="Marathon Award Ceremony Stage"
                  fill
                  sizes="(max-width: 768px) 50vw, 550px"
                  className="object-cover"
                />
              </div>

              {/* Right: Medal Photo */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9.5] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8DFDC]/80 shadow-sm bg-transparent">
                <Image
                  src="/source/s04-medal.webp"
                  alt="Marathon Victory Medals"
                  fill
                  sizes="(max-width: 768px) 50vw, 550px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Overlapping Cutout in Center (Thu nhỏ lại 1 tí tránh chạm chữ phía trên) */}
            <div
              style={{ height: "116%", aspectRatio: "513 / 1209" }}
              className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 pointer-events-none select-none filter drop-shadow-[0_14px_28px_rgba(58,42,40,0.25)] flex items-end justify-center"
            >
              <Image
                src="/source/cutout-marathon.webp"
                alt="Phuong Nguyen Marathon Coordination"
                fill
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 240px, 320px"
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

          {/* What I've Learned */}
          <div className="pt-6 sm:pt-8">
            <h4 className="pdf-outline-title text-2xl sm:text-3xl md:text-[2.25rem] lg:text-[2.65rem] xl:text-[2.85rem] tracking-wider leading-none">
              WHAT I&apos;VE LEARNED
            </h4>
            <span className="pdf-script text-2xl sm:text-3xl md:text-[2.25rem] lg:text-[2.65rem] xl:text-[2.85rem] text-[#E5A8AD] block -mt-1 sm:-mt-1.5 md:-mt-2 mb-2.5 sm:mb-3.5 leading-none select-none">
              from this project?
            </span>
            <div className="space-y-3 text-sm sm:text-base text-[#3E2F2D] leading-relaxed text-justify">
              <p>
                Being part of HCMC Marathon 2025 gave me a better understanding
                of what goes into running a large-scale event. I realized that
                behind a smooth event experience, there are many small tasks
                that require careful preparation, clear communication, and
                close coordination among team members.
              </p>
              <p>
                Working on-site also taught me to stay attentive, adapt to
                changing situations, and be willing to step in wherever support
                was needed, especially during busy hours. More importantly, this
                experience helped me appreciate the importance of teamwork and
                taking responsibility for my assigned tasks, even when they may
                seem small in the overall event.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PROJECT 05: CULTURE START 2026                            */}
        {/* ========================================================= */}
        <div id="project-5" className="scroll-mt-20 flex flex-col gap-8 pt-8 border-t border-[#E8DFDC]">
          {/* Header (Đồng bộ layout Project 02) */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-4 border-b border-[#E8DFDC]">
            <div className="flex items-stretch gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
              {/* Enlarged Culture Start Logo */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-[172px] lg:h-[172px] flex-shrink-0">
                <Image
                  src="/source/s05-logo.webp"
                  alt="Culture Start Logo"
                  fill
                  className="object-contain rounded-none"
                  priority
                />
              </div>

              {/* Title & Project 05 & Badge block */}
              <div className="flex flex-col justify-between items-start min-w-0 self-stretch">
                <div className="flex flex-col items-start min-w-0">
                  <span
                    className="text-[3.25rem] sm:text-[4.25rem] md:text-[4.75rem] lg:text-[5.25rem] -mb-1 sm:-mb-2 md:-mb-2.5 lg:-mb-3 relative z-10 select-none leading-none pl-1 inline-block"
                    style={{
                      fontFamily: "var(--font-script), 'Pinyon Script', cursive",
                      fontWeight: 400,
                      color: "#E5A8AD",
                      WebkitTextStroke: "1.2px #2E2220",
                      paintOrder: "stroke fill",
                    }}
                  >
                    Project 05:
                  </span>
                  <h3 className="pdf-outline-title text-[1.4rem] sm:text-[2.1rem] lg:text-[2.65rem] tracking-wide leading-none">
                    CULTURE START 2026
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-5 py-1.5 rounded-full bg-[#F4EAEB] text-xs font-montserrat font-bold text-[#1E1716] tracking-wider uppercase inline-block">
                    ACADEMIC MARKETING COMPETITION
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 1: Left (Overview & Key Experience) + Right (Hình ảnh thứ 1: Stage Pitch & Defense - Full không cắt) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* Left: Overview & Key Experience */}
            <div className="flex flex-col justify-between space-y-6 text-[#3E2F2D] relative z-20">
              <div>
                <h4 className="pdf-outline-title text-xl sm:text-2xl lg:text-[1.75rem] tracking-wider mb-2.5">
                  PROJECT OVERVIEW
                </h4>
                <p className="text-sm sm:text-base text-[#4A3835] leading-relaxed text-justify">
                  Participated in Culture Start 2026, a university-level
                  competition that provided an opportunity to explore business
                  ideas, apply marketing knowledge, and develop practical
                  problem-solving skills.
                </p>
              </div>

              <div>
                <h4 className="pdf-outline-title text-xl sm:text-2xl lg:text-[1.75rem] tracking-wider mb-3 leading-none">
                  KEY EXPERIENCE
                </h4>
                <InteractiveRoleList items={CULTURE_START_ROLE_ITEMS} />
              </div>
            </div>

            {/* Right: Hình ảnh thứ 1 (Mở rộng tỷ lệ ảnh để cân đối 3 hàng Overview bên trái) */}
            <div className="flex justify-center lg:justify-end w-full relative z-10">
              <div
                className="group relative w-full max-w-[660px] aspect-[820/546] rounded-2xl overflow-hidden bg-transparent border border-[#E0D8D6] shadow-xs select-none"
              >
                <Image
                  src={CULTURE_START_GALLERY[0].src}
                  alt={CULTURE_START_GALLERY[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 660px"
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle hover overlay & caption tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                  <span className="text-xs sm:text-sm font-semibold text-white/95 line-clamp-1">
                    {CULTURE_START_GALLERY[0].title}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#F2C4C4] font-medium line-clamp-1">
                    {CULTURE_START_GALLERY[0].tag}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Khung bố cục theo ảnh mẫu (Trái: 2 ảnh xếp dọc | Phải: TOP 4 + 1 ảnh dưới) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch pt-2 max-w-[860px] lg:max-w-[920px] mx-auto w-full">
            {/* Bên trái: 2 ảnh hình chữ nhật nằm ngang xếp từ trên xuống (p3_073 & p3_071) */}
            <div className="flex flex-col justify-between gap-4 sm:gap-6">
              {/* Ảnh trên: p3_073 (Finalist Stage Defense) */}
              <div
                className="group relative w-full aspect-[82/49] rounded-2xl overflow-hidden bg-transparent border border-[#E0D8D6] shadow-xs select-none"
              >
                <Image
                  src={CULTURE_START_GALLERY[1].src}
                  alt={CULTURE_START_GALLERY[1].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle hover overlay & caption tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                  <span className="text-xs sm:text-sm font-semibold text-white/95 line-clamp-1">
                    {CULTURE_START_GALLERY[1].title}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#F2C4C4] font-medium line-clamp-1">
                    {CULTURE_START_GALLERY[1].tag}
                  </span>
                </div>
              </div>

              {/* Ảnh dưới: p3_071 (Cul-Start Grand Ceremony) */}
              <div
                className="group relative w-full aspect-[82/49] rounded-2xl overflow-hidden bg-transparent border border-[#E0D8D6] shadow-xs select-none"
              >
                <Image
                  src={CULTURE_START_GALLERY[2].src}
                  alt={CULTURE_START_GALLERY[2].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle hover overlay & caption tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                  <span className="text-xs sm:text-sm font-semibold text-white/95 line-clamp-1">
                    {CULTURE_START_GALLERY[2].title}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#F2C4C4] font-medium line-clamp-1">
                    {CULTURE_START_GALLERY[2].tag}
                  </span>
                </div>
              </div>
            </div>

            {/* Bên phải: Nửa trên Thành tích TOP 4, Dưới chỉ còn 1 hình (p3_072) */}
            <div className="flex flex-col justify-between gap-4 sm:gap-6">
              {/* Nửa bên trên: Thành tích TOP 4 - nằm khớp tương ứng với ảnh 1 bên trái */}
              <div className="group flex flex-col justify-center items-start text-left select-none transition-all duration-300 flex-1 py-2 sm:py-3">
                <div className="inline-flex items-baseline gap-2.5 sm:gap-3.5 font-bevan bevan-regular text-[#F2C4C4] leading-none select-none text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem]">
                  <span className="tracking-normal">TOP</span>
                  <span className="text-[1.18em] tracking-normal">4</span>
                </div>
                <p className="mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-[17px] font-montserrat font-bold text-[#4A3835] leading-snug text-left">
                  Among participating teams in Culture Start 2026
                </p>
              </div>

              {/* Dưới TOP 4 chỉ còn 1 hình: p3_072 (Product Identity & Prototype) */}
              <div
                className="group relative w-full aspect-[82/49] rounded-2xl overflow-hidden bg-transparent border border-[#E0D8D6] shadow-xs select-none"
              >
                <Image
                  src={CULTURE_START_GALLERY[3].src}
                  alt={CULTURE_START_GALLERY[3].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle hover overlay & caption tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                  <span className="text-xs sm:text-sm font-semibold text-white/95 line-clamp-1">
                    {CULTURE_START_GALLERY[3].title}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#F2C4C4] font-medium line-clamp-1">
                    {CULTURE_START_GALLERY[3].tag}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* What I've Learned - Bố cục 4 góc (2x2 Grid) cân xứng hoàn hảo */}
          <div className="w-full pt-6 sm:pt-8 space-y-6 sm:space-y-8">
            {/* Hàng 1 (Top Row): Tiêu đề góc trái & Đoạn văn 1 góc phải - Căn giữa theo trục dọc */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Góc 1 (Top-Left): Tiêu đề phóng to nổi bật */}
              <div className="flex flex-col justify-center items-start select-none py-1">
                <h4 className="pdf-outline-title text-2xl sm:text-3xl md:text-[2.25rem] lg:text-[2.6rem] xl:text-[2.85rem] tracking-wider leading-none select-none text-left">
                  WHAT I&apos;VE LEARNED
                </h4>
                <span className="pdf-script-rose-outline text-[42px] sm:text-[52px] md:text-[62px] lg:text-[70px] xl:text-[78px] block -mt-1 sm:-mt-2 select-none leading-none whitespace-nowrap text-left">
                  from this project?
                </span>
              </div>

              {/* Góc 2 (Top-Right): Nội dung 1 */}
              <div className="text-sm sm:text-base text-[#3E2F2D] leading-relaxed text-justify">
                <p>
                  Participating in Culture Start 2026 gave me the opportunity to
                  step outside the classroom and experience how ideas can be
                  developed into a business concept. I learned that having a
                  creative idea is only the starting point; it also takes
                  research, critical thinking, and a clear understanding of the
                  problem being addressed to make that idea meaningful and
                  practical.
                </p>
              </div>
            </div>

            {/* Hàng 2 (Bottom Row): Đoạn văn 2 góc trái & Đoạn văn 3 góc phải - Cùng baseline ngang */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
              {/* Góc 3 (Bottom-Left): Nội dung 2 */}
              <div className="text-sm sm:text-base text-[#3E2F2D] leading-relaxed text-justify tracking-[-0.01em]">
                <p>
                  Working through the competition also helped me appreciate the
                  value of teamwork. Listening to different perspectives,
                  exchanging ideas, and learning how to approach challenges
                  together showed me that a good outcome often comes from
                  collaboration rather than individual&nbsp;effort.
                </p>
              </div>

              {/* Góc 4 (Bottom-Right): Nội dung 3 */}
              <div className="text-sm sm:text-base text-[#3E2F2D] leading-relaxed text-justify">
                <p>
                  Most importantly, this experience encouraged me to be more open
                  to new perspectives, more confident in sharing my ideas, and
                  more willing to learn from challenges along the way.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PERSONAL PROJECT: “PHƯƠNG NGUYÊN THƯỜNG NHẬT”            */}
        {/* ========================================================= */}
        <div id="project-threads" className="scroll-mt-20 flex flex-col gap-8 pt-8 border-t border-[#E8DFDC]">
          {/* Header matching reference design: Left (Title), Center (Profile + Stats + Arrow), Right (Threads Icon) */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-10 xl:gap-14 pb-6">
            {/* Left: Script Title & Outlined Vietnamese Title */}
            <div className="flex flex-col items-start flex-shrink-0">
              <span
                className="pdf-script-rose-outline text-[3.25rem] sm:text-[4.25rem] md:text-[4.75rem] lg:text-[5.25rem] -mb-1 sm:-mb-2 relative z-10 select-none leading-none pl-1 inline-block"
                style={{
                  WebkitTextStroke: "1.2px #2E2220",
                  paintOrder: "stroke fill",
                }}
              >
                Personal project
              </span>
              <h3 className="pdf-outline-title text-[1.2rem] sm:text-[1.65rem] md:text-[1.95rem] lg:text-[2.15rem] xl:text-[2.35rem] tracking-wide leading-tight">
                &ldquo;PHƯƠNG NGUYÊN
                <br />
                THƯỜNG NHẬT&rdquo;
              </h3>
            </div>

            {/* Center & Right Group: Profile Widget (pushed left closer to title) + Threads App Icon (moved left ~30%) */}
            <div className="flex-1 flex flex-wrap sm:flex-nowrap items-center justify-between gap-6 sm:gap-8 md:pr-[15%] lg:pr-[25%] xl:pr-[30%]">
              {/* Profile Widget: Avatar + @ursonlyonee + 115 FOLLOWERS / 121,000 VIEWS + Curved Arrow */}
              <a
                href="https://www.threads.net/@ursonlyonee"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center select-none cursor-pointer"
                title="Click to view @ursonlyonee on Threads"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  {/* Circular Avatar */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-[120px] lg:h-[120px] rounded-full overflow-hidden flex-shrink-0 border border-[#E8DFDC] shadow-sm bg-[#2E2220]">
                    <Image
                      src="/source/threads-portrait.webp"
                      alt="@ursonlyonee"
                      fill
                      sizes="120px"
                      className="object-cover object-[50%_20%] group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Handle & Stats */}
                  <div className="flex flex-col items-start">
                    <span
                      className="font-montserrat font-extrabold normal-case text-base sm:text-lg lg:text-[1.2rem] tracking-wide leading-none mb-2.5"
                      style={{
                        color: "#FFFFFF",
                        WebkitTextStroke: "1.1px #241E1E",
                        paintOrder: "stroke fill",
                      }}
                    >
                      @ursonlyonee
                    </span>

                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* 115 FOLLOWERS */}
                      <div className="flex flex-col items-center">
                        <span
                          className="font-montserrat font-extrabold text-xl sm:text-2xl lg:text-[1.65rem] leading-none"
                          style={{
                            color: "#FFFFFF",
                            WebkitTextStroke: "1.2px #241E1E",
                            paintOrder: "stroke fill",
                          }}
                        >
                          115
                        </span>
                        <span className="mt-1.5 px-2.5 sm:px-3 py-1 rounded-md bg-[#888585] text-white font-montserrat font-bold text-[9px] sm:text-[10px] tracking-wider uppercase leading-none whitespace-nowrap">
                          FOLLOWERS
                        </span>
                      </div>

                      {/* 121,000 VIEWS */}
                      <div className="flex flex-col items-center">
                        <span
                          className="font-montserrat font-extrabold text-xl sm:text-2xl lg:text-[1.65rem] leading-none"
                          style={{
                            color: "#FFFFFF",
                            WebkitTextStroke: "1.2px #241E1E",
                            paintOrder: "stroke fill",
                          }}
                        >
                          121,000
                        </span>
                        <span className="mt-1.5 px-3 sm:px-4 py-1 rounded-md bg-[#888585] text-white font-montserrat font-bold text-[9px] sm:text-[10px] tracking-wider uppercase leading-none whitespace-nowrap">
                          VIEWS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Curved Hand-Drawn Arrow + (click here to view account) - positioned below avatar so Threads icon centers with avatar */}
                <div className="absolute top-full left-1 sm:left-2 -mt-3 flex flex-col items-start pointer-events-none">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#4A3835] group-hover:text-[#C9707B] transition-colors -mb-0.5 ml-3"
                    aria-hidden="true"
                  >
                    <path
                      d="M14 31C5 26 4 15 11 7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.5 8.5L11.5 6.5L12.5 11.8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-xs sm:text-[13px] text-[#4A3835] group-hover:text-[#C9707B] transition-colors leading-none whitespace-nowrap">
                    (click here to view account)
                  </span>
                </div>
              </a>

              {/* Far Right: Threads App Icon (centered with avatar, slightly smaller) */}
              <a
                href="https://www.threads.net/@ursonlyonee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit @ursonlyonee on Threads"
                className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-[132px] lg:h-[132px] flex-shrink-0 rounded-[20px] sm:rounded-[26px] overflow-hidden shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="/source/icon-threads.webp"
                  alt="Threads"
                  fill
                  sizes="132px"
                  className="object-contain"
                />
              </a>
            </div>
          </div>

          {/* 3-Column: Left Text, Center Phone, Right Text */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Column: Vision & Story */}
            <div className="md:col-span-4 space-y-4 text-xs sm:text-sm text-[#3E2F2D]">
              <p className="text-[#4A3835] leading-relaxed text-justify">
                I created a personal content channel on Threads to document
                everyday moments, personal experiences, and thoughts through a
                casual diary-style approach.
              </p>
              <p className="text-[#4A3835] leading-relaxed text-justify">
                The account focuses on daily life, personal reflections,
                university experiences, lifestyle, and relatable stories. Rather
                than following a formal content structure, I aim to create
                spontaneous and authentic posts that reflect my personality and
                connect naturally with audiences.
              </p>
              <p className="text-[#4A3835] leading-relaxed text-justify">
                My goal is to build a personal space where everyday experiences
                become relatable content. The writing style is casual,
                conversational, and authentic, allowing audiences to connect
                with my thoughts and daily stories as if they were reading a
                friend&apos;s diary.
              </p>
              <p className="text-[#4A3835] leading-relaxed text-justify">
                The content prioritizes consistency, personal voice, and
                audience interaction rather than overly polished or promotional
                communication.
              </p>
            </div>

            {/* Middle: Phone Mockup */}
            <div className="md:col-span-4 flex justify-center">
              <div
                style={{ width: "264px", height: "528px" }}
                className="group relative max-w-full aspect-[9/18] rounded-[2.5rem] p-2 bg-black border-4 border-[#3A2A28] shadow-xl overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-black">
                  <Image
                    src="/source/threads-profile.webp"
                    alt="Threads feed"
                    fill
                    sizes="264px"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Content Pillar & My Role */}
            <div className="md:col-span-4 space-y-6 text-xs sm:text-sm text-[#3E2F2D]">
              <div>
                <h4 className="pdf-outline-title text-xl sm:text-2xl lg:text-[1.75rem] tracking-wider mb-3 leading-none">
                  CONTENT PILLAR
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {THREADS_PILLARS.map((pillar, idx) => {
                    const tiltAngles = [-4, 3.5, -3, 4, -3.5];
                    const targetRotate = tiltAngles[idx % tiltAngles.length];

                    return (
                      <motion.span
                        key={pillar}
                        whileHover={{
                          rotate: targetRotate,
                          scale: 1.08,
                          y: -3,
                          borderColor: "#8C464F",
                          backgroundColor: "#FFF5F6",
                          color: "#8C464F",
                          boxShadow: "0 8px 18px rgba(140, 70, 79, 0.16)",
                        }}
                        whileTap={{ scale: 0.95, rotate: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 14,
                        }}
                        className="inline-block px-3.5 py-1.5 rounded-full bg-white border border-[#D5CFCF] text-xs font-medium text-[#2E2220] cursor-pointer select-none transition-colors duration-150"
                      >
                        {pillar}
                      </motion.span>
                    );
                  })}
                </div>
              </div>

              <div>
                <h4 className="pdf-outline-title text-xl sm:text-2xl lg:text-[1.75rem] tracking-wider mb-3 leading-none">
                  MY ROLE
                </h4>
                <InteractiveRoleList items={THREADS_ROLE_ITEMS} wrap />
              </div>
            </div>
          </div>

          {/* Key Metrics / Result Section - 1 Top (Centered) & 2 Bottom (Symmetrical) with Left-Aligned Numbers & Single-Line Labels */}
          <div>
            <span className="pdf-script-rose-outline text-6xl sm:text-7xl md:text-[5.25rem] lg:text-[6.25rem] xl:text-[7rem] block mb-2 sm:mb-4 pl-1 sm:pl-2 select-none leading-none">
              result
            </span>
            <div className="w-full pt-4 sm:pt-6 pb-2 flex flex-col items-center">
              {/* Top Metric: 121.700+ (Centered Container, Number & Content Left-Aligned) */}
              <div className="w-full flex justify-center mb-8 sm:mb-10 lg:mb-12">
                <motion.div
                  className="group flex flex-col items-start text-left cursor-pointer select-none"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="inline-block transform group-hover:-translate-y-1.5 group-hover:scale-105 transition-all duration-300 ease-out filter drop-shadow-[0_0_0_transparent] group-hover:drop-shadow-[0_12px_24px_rgba(140,70,79,0.25)]">
                    <AnimatedCounter
                      value="121.700+"
                      separator="."
                      duration={2000}
                      className="font-bevan bevan-regular text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] text-[#2E2220] group-hover:text-[#F2C4C4] transition-colors duration-300 tracking-wide"
                    />
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-[#4A3835] group-hover:text-[#2E2220] transition-colors duration-300 mt-1.5 sm:mt-2 text-left whitespace-nowrap">
                    Total profile views within 7 days
                  </p>
                </motion.div>
              </div>

              {/* Bottom 2 Metrics: Symmetrical Left & Right, Left-Aligned Numbers & Single-Line Content */}
              <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-center gap-10 sm:gap-14 lg:gap-24 xl:gap-32">
                {/* Left Metric: +125.406% */}
                <motion.div
                  className="group flex flex-col items-start text-left cursor-pointer select-none"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                  <span className="inline-block transform group-hover:-translate-y-1.5 group-hover:scale-105 transition-all duration-300 ease-out filter drop-shadow-[0_0_0_transparent] group-hover:drop-shadow-[0_12px_24px_rgba(140,70,79,0.25)]">
                    <AnimatedCounter
                      value="+125.406%"
                      separator="."
                      duration={2200}
                      className="font-bevan bevan-regular text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] text-[#2E2220] group-hover:text-[#F2C4C4] transition-colors duration-300 tracking-tight"
                    />
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-[#4A3835] group-hover:text-[#2E2220] transition-colors duration-300 mt-1.5 sm:mt-2 text-left whitespace-nowrap">
                    increase in total profile views within 7 days
                  </p>
                </motion.div>

                {/* Right Metric: 74.600+ */}
                <motion.div
                  className="group flex flex-col items-start text-left cursor-pointer select-none"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                  <span className="inline-block transform group-hover:-translate-y-1.5 group-hover:scale-105 transition-all duration-300 ease-out filter drop-shadow-[0_0_0_transparent] group-hover:drop-shadow-[0_12px_24px_rgba(140,70,79,0.25)]">
                    <AnimatedCounter
                      value="74.600+"
                      separator="."
                      duration={1800}
                      className="font-bevan bevan-regular text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] text-[#2E2220] group-hover:text-[#F2C4C4] transition-colors duration-300 tracking-wide"
                    />
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-[#4A3835] group-hover:text-[#2E2220] transition-colors duration-300 mt-1.5 sm:mt-2 text-left whitespace-nowrap">
                    Unique viewers reached in 7 days
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
