"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, Eye, ArrowRight, Volume2, VolumeX } from "lucide-react";

// Brand Collaborations Logos
import logoMega from "@/brands/mega-wecare@2x.png";
import logoAbbott from "@/brands/abbott@2x.png";
import logoNutifood from "@/brands/nutifood@2x.png";
import logoHuythanh from "@/brands/huythanh@2x.png";
import logoChill from "@/brands/chill-cocktail@2x.png";
import logoMentos from "@/brands/mentos@2x.png";

import logoHalio from "@/brands/halio@2x.png";
import logoXmen from "@/brands/xmen@2x.png";
import logo3ce from "@/brands/3ce-stylenanda@2x.png";
import logoTraveloka from "@/brands/traveloka@2x.png";
import logoOmachi from "@/brands/omachi@2x.png";
import logoAnimo from "@/brands/animo@2x.png";

import logoShopback from "@/brands/shopback@2x.png";
import logoTianlong from "@/brands/tianlong@2x.png";
import logoChulala from "@/brands/chulala@2x.png";
import logoCocacola from "@/brands/cocacola@2x.png";
import logoVus from "@/brands/vus@2x.png";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";

const TIKTOK_VIDEOS = [
  {
    id: "v1",
    title: "Varna Life Cà Phê Latte",
    views: "14.4K",
    creator: "KOC Booking",
    poster: "/source/s01-video-1.webp",
    videoSrc: "/videos/video-1.mp4",
  },
  {
    id: "v2",
    title: "Vitamin E Thiên Nhiên",
    views: "24.2K",
    creator: "KOC Booking",
    poster: "/source/s01-video-2.webp",
    videoSrc: "/videos/video-2.mp4",
  },
  {
    id: "v3",
    title: "ENAT - Chăm Sóc Sức Khỏe",
    views: "29.2K",
    creator: "KOC Booking",
    poster: "/source/s01-video-3.webp",
    videoSrc: "/videos/video-3.mp4",
  },
  {
    id: "v4",
    title: "Sáp Thơm X-Men Dành Cho Anh Em",
    views: "17.9K",
    creator: "KOC Booking",
    poster: "/source/s01-video-4.webp",
    videoSrc: "/videos/video-4.mp4",
  },
];

interface TikTokVideoItem {
  id: string;
  title: string;
  views: string;
  creator: string;
  poster: string;
  videoSrc: string;
}

function TikTokVideoCard({ video }: { video: TikTokVideoItem }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const vid = videoRef.current;
    if (!container || !vid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            vid.muted = true;
            const playPromise = vid.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => setIsPlaying(true))
                .catch(() => {});
            }
          } else {
            vid.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const handleTogglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setIsMuted(vid.muted);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleTogglePlay}
      className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-black/5 border border-[#D5CFCF] shadow-sm select-none cursor-pointer"
    >
      {/* HTML5 Video element with autoplay on scroll */}
      <video
        ref={videoRef}
        poster={video.poster}
        muted
        loop
        playsInline
        preload="metadata"
        onError={() => setHasError(true)}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      >
        <source src={video.videoSrc} type={video.videoSrc.endsWith(".mov") ? "video/mp4; codecs=hvc1" : "video/mp4"} />
        <source src={video.videoSrc} type={video.videoSrc.endsWith(".mov") ? "video/quicktime" : "video/mp4"} />
        <source src={video.videoSrc} />
      </video>

      {/* Fallback Image if video error */}
      {hasError && (
        <Image
          src={video.poster}
          alt={video.title}
          fill
          sizes="(max-width: 640px) 45vw, 220px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      )}

      {/* View Badge */}
      <div className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] sm:text-xs text-white font-semibold flex items-center gap-1 pointer-events-none">
        <Eye className="w-3 h-3 text-[#DCA3A8]" />
        <span className="font-bevan bevan-regular tracking-wide">{video.views}</span>
      </div>

      {/* Sound toggle button */}
      <button
        type="button"
        onClick={handleToggleMute}
        aria-label={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
        className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
      >
        {isMuted ? (
          <VolumeX className="w-3.5 h-3.5 text-white/80" />
        ) : (
          <Volume2 className="w-3.5 h-3.5 text-[#E5A8AD]" />
        )}
      </button>

      {/* Subtle play indicator when paused */}
      {!isPlaying && !hasError && (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black/20 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white">
            <Play className="w-5 h-5 ml-0.5 fill-current" />
          </div>
        </div>
      )}

      {/* Bottom Title */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-2.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none">
        <p className="text-[11px] sm:text-xs text-white font-medium line-clamp-2 leading-tight">
          {video.title}
        </p>
      </div>
    </div>
  );
}

const ROLE_WORKFLOW_STEPS = [
  {
    id: 1,
    step: "STEP 01",
    num: "01",
    title: "1. CREATOR RESEARCH & SOURCING",
    category: "Sourcing & Research",
    shortHighlight: "Nghiên cứu & chọn lọc 300+ KOC profiles đa nền tảng.",
    points: [
      "Researched and screened 300+ KOC profiles across Facebook, TikTok, and Threads.",
      "Evaluated creator profiles based on content categories, engagement, average views, and brand relevance.",
      "Built a pool of potential creators for different campaign requirements.",
    ],
    tag: "300+ Profiles • Multi-Platform",
  },
  {
    id: 2,
    step: "STEP 02",
    num: "02",
    title: "2. CASTING & PROFILE EVALUATION",
    category: "Casting & Shortlist",
    shortHighlight: "Chuẩn bị casting shortlist 50–100 creators theo tiêu chuẩn.",
    points: [
      "Prepared casting lists of approximately 50–100 creators per campaign.",
      "Compared profiles using key criteria: Engagement, Average Views, Content Quality, and Brand Fit.",
      "Selected potential creators based on campaign briefs and target audiences.",
    ],
    tag: "Shortlist: 50–100 Creators / Campaign",
  },
  {
    id: 3,
    step: "STEP 03",
    num: "03",
    title: "3. BOOKING & NEGOTIATION",
    category: "Booking & Terms",
    shortHighlight: "Trực tiếp liên hệ, đàm phán chi phí & quyền lợi 70+ creators.",
    points: [
      "Directly contacted and coordinated with 70+ creators.",
      "Discussed booking fees, content deliverables, and affiliate commissions.",
      "Followed up on collaboration requirements and booking progress.",
    ],
    tag: "Direct Outreach: 70+ Creators Coordinated",
  },
  {
    id: 4,
    step: "STEP 04",
    num: "04",
    title: "4. CAMPAIGN COORDINATION",
    category: "Execution & Delivery",
    shortHighlight: "Hỗ trợ 10+ chiến dịch, kiểm soát tiến độ & quy chuẩn thương hiệu.",
    points: [
      "Supported 10+ Influencer Marketing campaigns across different industries.",
      "Coordinated creator sourcing and booking timelines to meet campaign requirements.",
      "Ensured deliverables complied with brand guidelines and campaign deadlines.",
    ],
    tag: "Execution: 10+ Campaigns Supported",
  },
];

const BRAND_COLLABORATIONS = [
  // Hàng 1 (6 brands)
  { name: "Mega We Care", src: logoMega, maxH: "max-h-[36px] sm:max-h-[42px] lg:max-h-[46px]", colClass: "col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" },
  { name: "Abbott", src: logoAbbott, maxH: "max-h-[34px] sm:max-h-[40px] lg:max-h-[44px]", colClass: "col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" },
  { name: "Nutifood", src: logoNutifood, maxH: "max-h-[42px] sm:max-h-[48px] lg:max-h-[54px]", colClass: "col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" },
  { name: "Huy Thanh Jewelry", src: logoHuythanh, maxH: "max-h-[28px] sm:max-h-[32px] lg:max-h-[36px]", colClass: "col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" },
  { name: "Chill Cocktail", src: logoChill, maxH: "max-h-[40px] sm:max-h-[46px] lg:max-h-[52px]", colClass: "col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" },
  { name: "Mentos", src: logoMentos, maxH: "max-h-[30px] sm:max-h-[34px] lg:max-h-[38px]", colClass: "col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" },

  // Hàng 2 (5 brands - so le xen kẽ chuẩn xác vào khe giữa các logo hàng 1 & 3)
  { name: "Halio", src: logoHalio, maxH: "max-h-[42px] sm:max-h-[48px] lg:max-h-[54px]", colClass: "col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 lg:col-start-2" },
  { name: "X-Men", src: logoXmen, maxH: "max-h-[30px] sm:max-h-[34px] lg:max-h-[38px]", colClass: "col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" },
  { name: "3CE Stylenanda", src: logo3ce, maxH: "max-h-[46px] sm:max-h-[54px] lg:max-h-[62px]", colClass: "col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" },
  { name: "Traveloka", src: logoTraveloka, maxH: "max-h-[32px] sm:max-h-[36px] lg:max-h-[40px]", colClass: "col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" },
  { name: "Omachi", src: logoOmachi, maxH: "max-h-[34px] sm:max-h-[38px] lg:max-h-[42px]", colClass: "col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" },

  // Hàng 3 (6 brands)
  { name: "Animo", src: logoAnimo, maxH: "max-h-[40px] sm:max-h-[46px] lg:max-h-[52px]", colClass: "col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 lg:col-start-1" },
  { name: "ShopBack", src: logoShopback, maxH: "max-h-[34px] sm:max-h-[38px] lg:max-h-[42px]", colClass: "col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" },
  { name: "Tian Long", src: logoTianlong, maxH: "max-h-[32px] sm:max-h-[36px] lg:max-h-[40px]", colClass: "col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" },
  { name: "Chu Lala", src: logoChulala, maxH: "max-h-[40px] sm:max-h-[46px] lg:max-h-[52px]", colClass: "col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" },
  { name: "Coca-Cola", src: logoCocacola, maxH: "max-h-[36px] sm:max-h-[42px] lg:max-h-[48px]", colClass: "col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" },
  { name: "VUS", src: logoVus, maxH: "max-h-[32px] sm:max-h-[36px] lg:max-h-[40px]", colClass: "col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" },
];

export function Page2Influencer() {
  const [hoveredRoleStep, setHoveredRoleStep] = useState<number | null>(null);

  return (
    <section
      id="page-2"
      aria-label="Project 01: Influencer Marketing"
      className="scroll-mt-12 relative w-full bg-transparent text-[#2E2220] py-10 sm:py-14 px-3 sm:px-6 lg:px-8 border-b border-[#E8DFDC] overflow-x-clip"
    >
      <div id="project-1" className="scroll-mt-16 w-full max-w-[1480px] mx-auto flex flex-col gap-10 relative z-10">
        {/* ========================================================= */}
        {/* PROJECT 01 HEADER matching PDF Page 2                     */}
        {/* ========================================================= */}
        <div className="flex flex-col items-start">
          <span
            className="text-[3.25rem] sm:text-[4.25rem] md:text-[4.75rem] lg:text-[5.25rem] -mb-1 sm:-mb-2 md:-mb-2.5 lg:-mb-3 relative z-10 select-none leading-none inline-block"
            style={{
              fontFamily: "'SloopScriptTitle', var(--font-script), 'Pinyon Script', cursive",
              fontWeight: 400,
              color: "#E5A8AD",
              WebkitTextStroke: "1.2px #2E2220",
              paintOrder: "stroke fill",
            }}
          >
            Project 01:
          </span>
          <h2 className="pdf-outline-title text-[1.5rem] sm:text-[2.35rem] lg:text-[3rem] tracking-wide leading-none">
            INFLUENCER MARKETING
          </h2>
          <div className="mt-3 sm:mt-3.5">
            <span className="px-4 py-1.5 rounded-full bg-[#EAECEE] border border-[#D0C8C6] text-xs font-montserrat font-bold text-[#2E2220] tracking-wider uppercase">
              KOC BOOKING & CREATOR COORDINATION
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION: PROJECT OVERVIEW + 4-CARD MY ROLE                */}
        {/* ========================================================= */}
        <div className="flex flex-col gap-10 text-[#3E2F2D]">
          {/* Project Overview & Key Metrics (Balanced 2-Column Grid) */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start py-2 sm:py-4">
            {/* Left Column: Project Overview */}
            <div className="space-y-3.5 pr-0 lg:pr-6">
              <h3 className="pdf-outline-title text-2xl sm:text-3xl lg:text-[2.25rem] tracking-wider leading-snug">
                PROJECT OVERVIEW
              </h3>
              <p className="text-sm sm:text-base text-[#4A3835] leading-relaxed text-justify">
                Supported Influencer Marketing activities by researching,
                evaluating, and connecting with KOCs across Facebook, TikTok,
                and Threads. The main focus was identifying suitable creators
                based on brand positioning, campaign objectives, and budget
                requirements.
              </p>
              <div className="pt-1 flex items-center gap-2 text-xs text-[#7E6B69] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#8C464F]" />
                <span className="uppercase tracking-wider font-semibold">Strategic Creator Management & Outreach</span>
              </div>
            </div>

            {/* Right Column: 3 Metric Rows (Căn Trái, Xen Kẽ Bậc Thang, Hiệu Ứng Nổi Khối 3D Khi Hover) */}
            <div className="w-full flex flex-col justify-center items-start lg:pl-20 xl:pl-32 2xl:pl-40 mt-4 sm:mt-6 lg:-mt-8 xl:-mt-12 relative z-20 pr-0 lg:pr-8 xl:pr-12">
              <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8">
                {/* Block 1: 300+ (Căn trái, lề chuẩn) */}
                <div className="group flex flex-col items-start text-left cursor-pointer select-none">
                  <span className="inline-block text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] font-bevan bevan-regular text-[#F2C4C4] group-hover:text-[#A13A47] leading-none tracking-normal transition-all duration-300 ease-out transform group-hover:-translate-y-2 group-hover:scale-105 filter drop-shadow-[0_0_0_transparent] group-hover:drop-shadow-[0_16px_30px_rgba(140,70,79,0.3)]">
                    <AnimatedCounter end={300} duration={1800} />
                  </span>
                  <span className="mt-1.5 sm:mt-2 text-xs sm:text-sm lg:text-[15px] font-montserrat font-extrabold text-[#5A4543] group-hover:text-[#2E2220] uppercase tracking-[0.2em] group-hover:tracking-[0.24em] leading-tight text-left transition-all duration-300">
                    Profiles Screened
                  </span>
                </div>

                {/* Block 2: 70+ (Căn trái, xen kẽ thụt lề sang phải thêm) */}
                <div className="group flex flex-col items-start text-left pl-10 sm:pl-16 lg:pl-24 xl:pl-28 cursor-pointer select-none">
                  <span className="inline-block text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] font-bevan bevan-regular text-[#F2C4C4] group-hover:text-[#A13A47] leading-none tracking-normal transition-all duration-300 ease-out transform group-hover:-translate-y-2 group-hover:scale-105 filter drop-shadow-[0_0_0_transparent] group-hover:drop-shadow-[0_16px_30px_rgba(140,70,79,0.3)]">
                    <AnimatedCounter end={70} duration={1600} />
                  </span>
                  <span className="mt-1.5 sm:mt-2 text-xs sm:text-sm lg:text-[15px] font-montserrat font-extrabold text-[#5A4543] group-hover:text-[#2E2220] uppercase tracking-[0.2em] group-hover:tracking-[0.24em] leading-tight text-left transition-all duration-300">
                    Creators Contacted
                  </span>
                </div>

                {/* Block 3: 10+ (Căn trái, quay lại thẳng lề như Block 1) */}
                <div className="group flex flex-col items-start text-left cursor-pointer select-none">
                  <span className="inline-block text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] font-bevan bevan-regular text-[#F2C4C4] group-hover:text-[#A13A47] leading-none tracking-normal transition-all duration-300 ease-out transform group-hover:-translate-y-2 group-hover:scale-105 filter drop-shadow-[0_0_0_transparent] group-hover:drop-shadow-[0_16px_30px_rgba(140,70,79,0.3)]">
                    <AnimatedCounter end={10} duration={1400} />
                  </span>
                  <span className="mt-1.5 sm:mt-2 text-xs sm:text-sm lg:text-[15px] font-montserrat font-extrabold text-[#5A4543] group-hover:text-[#2E2220] uppercase tracking-[0.2em] group-hover:tracking-[0.24em] leading-tight text-left transition-all duration-300">
                    Campaigns Supported
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: MY ROLE - Alternating Timeline Journey with Speech Bubble Callouts */}
          <div className="flex flex-col gap-8 pt-4">
            {/* Header: MY ROLE */}
            <div>
              <h3 className="pdf-outline-title text-2xl sm:text-3xl lg:text-[2.25rem] tracking-wider leading-none">
                MY ROLE
              </h3>
            </div>

            {/* Alternating Compact Timeline with Floating Speech Bubble Pop-Up */}
            <div className="relative w-full flex flex-col gap-6 sm:gap-8 py-6">
              {/* Continuous Vertical Timeline Line on Desktop */}
              <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[3px] bg-gradient-to-b from-[#8C464F]/30 via-[#DCA3A8] to-[#8C464F]/30 rounded-full z-0" />

              {ROLE_WORKFLOW_STEPS.map((step, idx) => {
                const isActive = hoveredRoleStep === step.id;
                const isLeftNode = idx % 2 === 0;
                const isUpper = step.id <= 2;

                return (
                  <div
                    key={step.id}
                    className="relative w-full flex items-center min-h-[84px]"
                  >
                    {/* Desktop Center Timeline Milestone Dot */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
                      <div
                        className={`w-6 h-6 rounded-full border-[3px] transition-all duration-300 ${
                          isActive
                            ? "bg-[#8C464F] border-[#8C464F] scale-125 shadow-[0_0_16px_rgba(140,70,79,0.6)]"
                            : "bg-white border-[#C9BDBA]"
                        }`}
                      />
                    </div>

                    {/* Step Row Split into Symmetrical 3-Column Grid on Desktop */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center">
                      {/* Left Column: Contains Step Bar for odd steps (01, 03) */}
                      <div
                        className={`w-full ${
                          isLeftNode
                            ? "block"
                            : "hidden lg:block pointer-events-none"
                        }`}
                      >
                        {isLeftNode && (
                          <div
                            className="relative w-full group"
                            onMouseEnter={() => setHoveredRoleStep(step.id)}
                            onMouseLeave={() => setHoveredRoleStep(null)}
                          >
                            {/* Horizontal Connector Line to Timeline on Desktop */}
                            <div
                              className={`hidden lg:block absolute -right-14 top-1/2 -translate-y-1/2 w-14 h-[2.5px] transition-colors duration-300 ${
                                isActive ? "bg-[#8C464F]" : "bg-[#E8DFDC]"
                              }`}
                            />

                            {/* Compact Step Bar (Thanh step phóng to rõ ràng, ấn tượng) */}
                            <div
                              onClick={() =>
                                setHoveredRoleStep(
                                  hoveredRoleStep === step.id ? null : step.id
                                )
                              }
                              className={`flex items-center gap-5 px-6 py-4 sm:py-5 rounded-[26px] transition-all duration-200 cursor-pointer select-none border ${
                                isActive
                                  ? "bg-gradient-to-r from-[#FFF5F6] to-white border-[#8C464F] shadow-lg scale-[1.02]"
                                  : "bg-white border-[#E8DFDC] hover:border-[#DCA3A8] hover:shadow-md"
                              }`}
                            >
                              <span
                                className={`font-montserrat font-black text-3xl sm:text-4xl lg:text-[2.65rem] tracking-tight tabular-nums flex-shrink-0 transition-all duration-200 leading-none ${
                                  isActive
                                    ? "text-[#F2C4C4] scale-110"
                                    : "text-[#F2C4C4]"
                                }`}
                              >
                                {step.num}
                              </span>
                              <div className="min-w-0 pr-1 text-left">
                                <span className="text-[15px] sm:text-[17px] lg:text-[18px] font-montserrat font-bold text-[#2E2220] tracking-wide leading-tight whitespace-nowrap">
                                  {step.title.replace(/^\d+\.\s*/, "")}
                                </span>
                              </div>
                            </div>

                            {/* FLOATING SPEECH BUBBLE POP-UP for Step 1 & 3 (Đuôi nhọn xuất phát trực tiếp từ checkpoint) */}
                            <div
                              onMouseEnter={() => setHoveredRoleStep(step.id)}
                              onMouseLeave={() => setHoveredRoleStep(null)}
                              className={`absolute rounded-[30px] border-[2.5px] border-[#2E2220] bg-white p-6 sm:p-7.5 shadow-[0_26px_58px_rgba(46,34,32,0.24)] transition-all duration-450 ease-[cubic-bezier(0.16,1,0.3,1)] z-50 origin-top ${
                                isUpper
                                  ? "lg:origin-top-left lg:top-[4px] lg:bottom-auto"
                                  : "lg:origin-bottom-left lg:top-auto lg:bottom-[4px]"
                              } ${
                                isActive
                                  ? "opacity-100 scale-100 translate-y-0 lg:translate-x-0 pointer-events-auto"
                                  : "opacity-0 scale-[0.7] -translate-y-2 lg:scale-[0.7] lg:-translate-x-16 pointer-events-none"
                              } top-[calc(100%+14px)] left-0 w-full lg:left-[calc(100%+112px)] lg:right-auto lg:w-full`}
                            >
                              {/* Callout Tail: Desktop Left (Đuôi nhọn chạm trực tiếp vào mốc tròn checkpoint) */}
                              <div
                                className={`hidden lg:block absolute -left-[52px] w-[54px] h-[28px] pointer-events-none z-20 ${
                                  isUpper
                                    ? "top-[24px]"
                                    : "bottom-[24px]"
                                }`}
                              >
                                <svg
                                  viewBox="0 0 54 28"
                                  fill="none"
                                  className="w-full h-full overflow-visible"
                                >
                                  <polygon
                                    points="54,2 2,14 54,26"
                                    fill="#FFFFFF"
                                  />
                                  <polyline
                                    points="54,2 2,14 54,26"
                                    stroke="#2E2220"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <line
                                    x1="53"
                                    y1="2"
                                    x2="53"
                                    y2="26"
                                    stroke="#FFFFFF"
                                    strokeWidth="4"
                                  />
                                </svg>
                              </div>

                              {/* Callout Tail: Mobile (Points up towards Step Bar) */}
                              <div className="lg:hidden absolute -top-[20px] left-8 w-[26px] h-[22px] pointer-events-none z-20">
                                <svg
                                  viewBox="0 0 26 22"
                                  fill="none"
                                  className="w-full h-full overflow-visible"
                                >
                                  <polygon
                                    points="2,22 13,2 24,22"
                                    fill="#FFFFFF"
                                  />
                                  <polyline
                                    points="2,22 13,2 24,22"
                                    stroke="#2E2220"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <line
                                    x1="2"
                                    y1="21.5"
                                    x2="24"
                                    y2="21.5"
                                    stroke="#FFFFFF"
                                    strokeWidth="4"
                                  />
                                </svg>
                              </div>

                              {/* Detailed content inside Speech Bubble */}
                              <div className="pb-3 mb-3.5 border-b border-[#E8DFDC]">
                                <span className="text-[14px] sm:text-[16px] font-montserrat font-extrabold text-[#F2C4C4] tracking-wider uppercase">
                                  {step.category}
                                </span>
                              </div>
                              <ul className="space-y-3 text-[13px] sm:text-[14.5px] text-[#3E2F2D] leading-relaxed">
                                {step.points.map((point, pIdx) => (
                                  <li
                                    key={pIdx}
                                    className="flex items-start gap-3"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C464F] mt-2 flex-shrink-0" />
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Desktop Center Axis Spacer (112px = 56px left + 56px right connector lines) */}
                      <div className="hidden lg:block w-[112px] flex-shrink-0" />

                      {/* Right Column: Contains Step Bar for even steps (02, 04) */}
                      <div
                        className={`w-full ${
                          !isLeftNode
                            ? "block mt-4 lg:mt-0"
                            : "hidden lg:block pointer-events-none"
                        }`}
                      >
                        {!isLeftNode && (
                          <div
                            className="relative w-full group"
                            onMouseEnter={() => setHoveredRoleStep(step.id)}
                            onMouseLeave={() => setHoveredRoleStep(null)}
                          >
                            {/* Horizontal Connector Line to Timeline on Desktop */}
                            <div
                              className={`hidden lg:block absolute -left-14 top-1/2 -translate-y-1/2 w-14 h-[2.5px] transition-colors duration-300 ${
                                isActive ? "bg-[#8C464F]" : "bg-[#E8DFDC]"
                              }`}
                            />

                            {/* Compact Step Bar (Thanh step phóng to rõ ràng, ấn tượng) */}
                            <div
                              onClick={() =>
                                setHoveredRoleStep(
                                  hoveredRoleStep === step.id ? null : step.id
                                )
                              }
                              className={`flex items-center gap-5 px-6 py-4 sm:py-5 rounded-[26px] transition-all duration-200 cursor-pointer select-none border ${
                                isActive
                                  ? "bg-gradient-to-r from-[#FFF5F6] to-white border-[#8C464F] shadow-lg scale-[1.02]"
                                  : "bg-white border-[#E8DFDC] hover:border-[#DCA3A8] hover:shadow-md"
                              }`}
                            >
                              <span
                                className={`font-montserrat font-black text-3xl sm:text-4xl lg:text-[2.65rem] tracking-tight tabular-nums flex-shrink-0 transition-all duration-200 leading-none ${
                                  isActive
                                    ? "text-[#F2C4C4] scale-110"
                                    : "text-[#F2C4C4]"
                                }`}
                              >
                                {step.num}
                              </span>
                              <div className="min-w-0 pr-1 text-left">
                                <span className="text-[15px] sm:text-[17px] lg:text-[18px] font-montserrat font-bold text-[#2E2220] tracking-wide leading-tight whitespace-nowrap">
                                  {step.title.replace(/^\d+\.\s*/, "")}
                                </span>
                              </div>
                            </div>

                            {/* FLOATING SPEECH BUBBLE POP-UP for Step 2 & 4 (Đuôi nhọn xuất phát trực tiếp từ checkpoint) */}
                            <div
                              onMouseEnter={() => setHoveredRoleStep(step.id)}
                              onMouseLeave={() => setHoveredRoleStep(null)}
                              className={`absolute rounded-[30px] border-[2.5px] border-[#2E2220] bg-white p-6 sm:p-7.5 shadow-[0_26px_58px_rgba(46,34,32,0.24)] transition-all duration-450 ease-[cubic-bezier(0.16,1,0.3,1)] z-50 origin-top ${
                                isUpper
                                  ? "lg:origin-top-right lg:top-[4px] lg:bottom-auto"
                                  : "lg:origin-bottom-right lg:top-auto lg:bottom-[4px]"
                              } ${
                                isActive
                                  ? "opacity-100 scale-100 translate-y-0 lg:translate-x-0 pointer-events-auto"
                                  : "opacity-0 scale-[0.7] -translate-y-2 lg:scale-[0.7] lg:translate-x-16 pointer-events-none"
                              } top-[calc(100%+14px)] left-0 w-full lg:left-auto lg:right-[calc(100%+112px)] lg:w-full`}
                            >
                              {/* Callout Tail: Desktop Right (Đuôi nhọn chạm trực tiếp vào mốc tròn checkpoint) */}
                              <div
                                className={`hidden lg:block absolute -right-[52px] w-[54px] h-[28px] pointer-events-none z-20 ${
                                  isUpper
                                    ? "top-[24px]"
                                    : "bottom-[24px]"
                                }`}
                              >
                                <svg
                                  viewBox="0 0 54 28"
                                  fill="none"
                                  className="w-full h-full overflow-visible"
                                >
                                  <polygon
                                    points="0,2 52,14 0,26"
                                    fill="#FFFFFF"
                                  />
                                  <polyline
                                    points="0,2 52,14 0,26"
                                    stroke="#2E2220"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <line
                                    x1="1"
                                    y1="2"
                                    x2="1"
                                    y2="26"
                                    stroke="#FFFFFF"
                                    strokeWidth="4"
                                  />
                                </svg>
                                    </div>

                              {/* Callout Tail: Mobile (Points up towards Step Bar) */}
                              <div className="lg:hidden absolute -top-[20px] left-8 w-[26px] h-[22px] pointer-events-none z-20">
                                <svg
                                  viewBox="0 0 26 22"
                                  fill="none"
                                  className="w-full h-full overflow-visible"
                                >
                                  <polygon
                                    points="2,22 13,2 24,22"
                                    fill="#FFFFFF"
                                  />
                                  <polyline
                                    points="2,22 13,2 24,22"
                                    stroke="#2E2220"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <line
                                    x1="2"
                                    y1="21.5"
                                    x2="24"
                                    y2="21.5"
                                    stroke="#FFFFFF"
                                    strokeWidth="4"
                                  />
                                </svg>
                              </div>

                              {/* Detailed content inside Speech Bubble */}
                              <div className="pb-3 mb-3.5 border-b border-[#E8DFDC]">
                                <span className="text-[14px] sm:text-[16px] font-montserrat font-extrabold text-[#F2C4C4] tracking-wider uppercase">
                                  {step.category}
                                </span>
                              </div>
                              <ul className="space-y-3 text-[13px] sm:text-[14.5px] text-[#3E2F2D] leading-relaxed">
                                {step.points.map((point, pIdx) => (
                                  <li
                                    key={pIdx}
                                    className="flex items-start gap-3"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C464F] mt-2 flex-shrink-0" />
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* BRAND COLLABORATIONS (Staggered Honeycomb Grid)           */}
        {/* ========================================================= */}
        <div className="w-full pt-4 sm:pt-6">
          {/* Section Header with Line */}
          <div className="flex items-center gap-2.5 mb-8 sm:mb-12">
            <Image
              src="/source/lily-pink.webp"
              alt="🌸"
              width={22}
              height={22}
              className="object-contain flex-shrink-0"
            />
            <h3 className="pdf-outline-title text-xl sm:text-2xl lg:text-[1.85rem] tracking-wider whitespace-nowrap leading-none">
              BRAND COLLABORATIONS
            </h3>
            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-[#DCA3A8] via-[#E8DFDC] to-transparent ml-3" />
          </div>

          {/* Staggered Alternating Grid (6 - 5 - 6 pattern) */}
          <div className="w-full grid grid-cols-12 gap-3 sm:gap-5 lg:gap-7 items-center py-2 sm:py-4">
            {BRAND_COLLABORATIONS.map((brand) => (
              <div
                key={brand.name}
                className={`${brand.colClass} flex items-center justify-center p-1 relative group`}
              >
                {/* Clean Floating Brand Logo with Prominent Pop & Lift on Hover */}
                <div
                  className="relative w-full h-[68px] sm:h-[78px] lg:h-[86px] flex items-center justify-center p-2 transform hover:-translate-y-3.5 hover:scale-[1.32] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer select-none z-10 hover:z-50 filter hover:drop-shadow-[0_16px_28px_rgba(140,70,79,0.28)]"
                  title={brand.name}
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    className={`${brand.maxH} w-auto max-w-[88%] object-contain transition-transform duration-300 ease-out`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* ========================================================= */}
        {/* FEATURED VIDEOS (TikTok 9:16)                             */}
        {/* ========================================================= */}
        <div className="w-full pt-4">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#E8DFDC]">
            <Image
              src="/source/lily-pink.webp"
              alt="🌸"
              width={18}
              height={18}
              className="object-contain"
            />
            <h3 className="pdf-outline-title text-base sm:text-xl tracking-wider">
              FEATURED VIDEOS
            </h3>
            <div className="ml-2 w-6 h-6 rounded-md bg-black flex items-center justify-center p-1">
              <Image
                src="/source/icon-tiktok.webp"
                alt="TikTok"
                width={16}
                height={16}
                className="object-contain"
              />
            </div>
          </div>

          {/* 4 Vertical Video Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {TIKTOK_VIDEOS.map((video) => (
              <TikTokVideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* SEEDING THREADS                                           */}
        {/* ========================================================= */}
        <div className="w-full pt-4">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/source/lily-pink.webp"
              alt="🌸"
              width={18}
              height={18}
              className="object-contain"
            />
            <h3 className="pdf-outline-title text-base sm:text-xl tracking-wider">
              SEEDING THREADS
            </h3>
            <div className="ml-2 w-6 h-6 rounded-md bg-black flex items-center justify-center p-1">
              <Image
                src="/source/icon-threads.webp"
                alt="Threads"
                width={16}
                height={16}
                className="object-contain"
              />
            </div>
          </div>

          {/* Wrapper expanded slightly to bleed past container bounds */}
          <div className="relative -mx-3 sm:-mx-6 md:-mx-10 lg:-mx-14 w-[calc(100%+1.5rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] lg:w-[calc(100%+7rem)] max-w-none">
            {/* 4 Brand Logos matching sample (Traveloka, Omachi, Tian Long, Coca-Cola) */}
            <div className="w-full grid grid-cols-4 items-center justify-items-center gap-3 sm:gap-6 px-4 sm:px-8 pt-2 pb-1 sm:pb-2">
              <div className="flex items-center justify-center w-full">
                <Image
                  src={logoTraveloka}
                  alt="Traveloka"
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center w-full">
                <Image
                  src={logoOmachi}
                  alt="Omachi"
                  className="h-9 sm:h-11 md:h-13 lg:h-15 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center w-full">
                <Image
                  src={logoTianlong}
                  alt="Tian Long"
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center w-full">
                <Image
                  src={logoCocacola}
                  alt="Coca-Cola"
                  className="h-9 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
                />
              </div>
            </div>

            {/* Seeding Showcase Image from PDF - No border, enlarged, snug under logos, static (no popup) */}
            <div className="relative w-full select-none -mt-2 sm:-mt-4 md:-mt-6">
              <Image
                src="/source/p2_023.png"
                alt="Seeding Threads: Traveloka, Omachi, Tian Long, Coca-Cola campaign discussions and viral posts"
                width={1624}
                height={634}
                className="w-full h-auto object-contain block pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* WHAT I'VE LEARNED FROM THIS PROJECT                       */}
        {/* ========================================================= */}
        <div className="w-full pt-8 sm:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-[460px_1fr] lg:grid-cols-[520px_1fr] xl:grid-cols-[560px_1fr] gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-center">
            {/* Left: Cutout Figure Standing Behind Title with Floating Elements */}
            <div className="relative flex flex-col items-center justify-center select-none w-full">
              {/* Cutout Photo (Layered behind text with z-10) with Floating Elements */}
              <div className="relative w-52 sm:w-60 md:w-68 lg:w-76 h-72 sm:h-84 md:h-96 lg:h-[410px] z-10 -mb-6 sm:-mb-8 md:-mb-10">
                {/* 1. Floating Vintage Camera (016) on the Left */}
                <div className="absolute -left-8 sm:-left-12 md:-left-14 top-6 sm:top-8 md:top-10 z-20 w-16 sm:w-20 md:w-24 aspect-[406/258] pointer-events-none animate-float-camera filter drop-shadow-md">
                  <Image
                    src="/out/016.png"
                    alt="Vintage Camera"
                    fill
                    sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                    className="object-contain"
                  />
                </div>

                {/* 2. Floating White Lily (017) on the Right (Pushed well away from body) */}
                <div className="absolute -right-16 sm:-right-20 md:-right-28 lg:-right-32 top-28 sm:top-32 md:top-36 z-20 w-14 sm:w-16 md:w-20 aspect-[448/472] pointer-events-none animate-float-flower filter drop-shadow-sm">
                  <Image
                    src="/out/017.png"
                    alt="White Lily Flower"
                    fill
                    sizes="(max-width: 640px) 56px, (max-width: 768px) 64px, 80px"
                    className="object-contain"
                  />
                </div>

                {/* Cutout Person */}
                <Image
                  src="/source/cutout-white.webp"
                  alt="Nguyen Phuong Nguyen"
                  fill
                  sizes="(max-width: 640px) 208px, (max-width: 768px) 240px, 304px"
                  className="object-contain object-bottom filter drop-shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title: WHAT I'VE LEARNED from this project? (Optically matched visual size and width) */}
              <div className="relative z-20 text-center w-full max-w-[560px] mx-auto select-none pt-1">
                {/* Line 1: WHAT I'VE LEARNED (Balanced optical size, width ~500px, no overflow) */}
                <h3 className="pdf-outline-title text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] whitespace-nowrap select-none leading-none">
                  WHAT I&apos;VE LEARNED
                </h3>

                {/* Line 2: from this project? (Matching visual height and width ~510px) */}
                <span className="pdf-script-rose-outline text-[45px] sm:text-[56px] md:text-[64px] lg:text-[70px] xl:text-[76px] block mt-1.5 sm:mt-2 select-none leading-none whitespace-nowrap">
                  from this project?
                </span>
              </div>
            </div>

            {/* Right: 3 Reflection Paragraphs (Bóp thêm lề trái ~16px-24px tránh chạm chữ) */}
            <div className="w-full md:pl-6 lg:pl-8 space-y-4 text-sm sm:text-base text-[#3E2F2D] leading-relaxed text-justify">
              <p>
                This experience taught me that finding the right creator is not
                simply about choosing profiles with high follower counts or
                engagement rates. It requires looking beyond the numbers to
                understand each creator&apos;s content style, audience, and how
                naturally they can connect with a brand&apos;s message. I also
                learned that the right choice can look different from one
                campaign to another, depending on its objectives and target
                audience.
              </p>
              <p>
                Being involved in the booking process gave me a better
                understanding of the work behind each collaboration. From
                reaching out and discussing fees to clarifying deliverables and
                following up on timelines, I learned to communicate more
                thoughtfully, pay attention to details, and adapt to different
                working styles and expectations.
              </p>
              <p>
                Most importantly, this project helped me become more comfortable
                working with people, handling unexpected changes, and taking
                responsibility for the small details that keep a campaign moving
                forward.
              </p>
            </div>
          </div>
        </div>

        {/* Next Arrow */}
        <div className="self-end pt-4">
          <a
            href="#project-2"
            aria-label="Next Project"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#EAECEE] hover:bg-[#DCA3A8] hover:text-white border border-[#D0C8C6] text-xs font-semibold text-[#2E2220] transition-all hover:scale-105"
          >
            <span>Next: Social Media & Communications</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
