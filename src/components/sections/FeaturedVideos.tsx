"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, Eye, Film } from "lucide-react";
import { ALL_VIDEOS, VideoItem } from "@/data/portfolioData";

export function FeaturedVideos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section
      id="featured-videos"
      aria-labelledby="videos-heading"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto z-20"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2C4C4]/50 border border-[#C9707B]/30 mb-4">
            <Film className="w-3.5 h-3.5 text-[#C9707B]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#3A2A28]">
              Short-form Showcase
            </span>
          </div>
          <h3
            id="videos-heading"
            className="font-heading text-3xl sm:text-5xl text-[#3A2A28] uppercase tracking-wide"
          >
            Featured <span className="text-outline-rose">TikTok & Reels</span>
          </h3>
        </div>
        <p className="max-w-md text-sm sm:text-base text-[#5A4340] leading-relaxed">
          High-retention video content created, casted, or edited across TikTok campaigns, achieving up to 179K organic views.
        </p>
      </div>

      {/* Horizontal Scroll Row of Vertical 9:16 Cards with Notched Label Tab */}
      <div className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 -mx-4 sm:-mx-8 px-4 sm:px-8 snap-x snap-mandatory">
        {ALL_VIDEOS.map((video) => {
          const isPlaying = activeVideo === video.id;

          return (
            <div
              key={video.id}
              onMouseEnter={() => setActiveVideo(video.id)}
              onMouseLeave={() => setActiveVideo(null)}
              onClick={() => setActiveVideo(isPlaying ? null : video.id)}
              className="group relative flex-shrink-0 w-[240px] sm:w-[280px] aspect-[9/16] rounded-3xl bg-white border border-[rgba(58,42,40,0.15)] shadow-md hover:shadow-2xl hover:border-[#C9707B] transition-all duration-300 overflow-hidden cursor-pointer snap-start interactive-hover flex flex-col justify-between p-3.5"
            >
              {/* Background Poster Image (Ambient blur fill + uncropped crisp foreground) */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-[#F9FAFB]">
                <Image
                  src={video.poster}
                  alt=""
                  fill
                  sizes="100px"
                  aria-hidden="true"
                  className="object-cover blur-xl opacity-40 scale-125 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A2A28]/80 via-transparent to-[#3A2A28]/20" />
                <Image
                  src={video.poster}
                  alt={video.title}
                  fill
                  sizes="(min-width: 640px) 280px, 240px"
                  className={`object-contain p-2 transition-transform duration-700 ${
                    isPlaying ? "scale-105" : "group-hover:scale-105"
                  }`}
                />
              </div>

              {/* Top View-Count Badge & Tag */}
              <div className="relative z-10 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#3A2A28] shadow-sm">
                  <Eye className="w-3.5 h-3.5 text-[#C9707B]" />
                  <span>{video.views}</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#C9707B]/90 backdrop-blur-md text-[10px] font-semibold uppercase tracking-wider text-white">
                  {video.tag}
                </span>
              </div>

              {/* Center Play Indicator */}
              <div className="relative z-10 flex items-center justify-center my-auto">
                <div
                  className={`w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#C9707B] shadow-lg transition-all duration-300 ${
                    isPlaying
                      ? "scale-110 bg-[#C9707B] text-white shadow-[#C9707B]/50"
                      : "group-hover:scale-110 group-hover:bg-[#C9707B] group-hover:text-white"
                  }`}
                >
                  <Play className="w-6 h-6 ml-1 fill-current" />
                </div>
              </div>

              {/* Notched Label Tab at the Bottom of Card (Slate / Camera style) */}
              <div className="relative z-10 mt-auto">
                <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-[rgba(58,42,40,0.1)] shadow-sm">
                  {/* Subtle top decorative notch indicator */}
                  <div className="absolute -top-1.5 left-6 w-8 h-1 bg-[#C9707B] rounded-full" />

                  <h4 className="font-heading text-sm sm:text-base text-[#3A2A28] tracking-wider uppercase truncate">
                    {video.title}
                  </h4>
                  <p className="text-[11px] text-[#7E6B69] font-medium truncate mt-0.5">
                    {video.creator}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
