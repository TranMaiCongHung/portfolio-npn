"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Play, Eye, ExternalLink } from "lucide-react";

export interface ModalMediaData {
  type: "video" | "image";
  src: string;
  title: string;
  subtitle?: string;
  views?: string;
  creator?: string;
  accountLink?: string;
}

interface MediaModalProps {
  media: ModalMediaData | null;
  onClose: () => void;
}

export function MediaModal({ media, onClose }: MediaModalProps) {
  useEffect(() => {
    if (!media) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [media, onClose]);

  if (!media) return null;

  const isVideo = media.type === "video";

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#2E2220]/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${
          isVideo ? "max-w-md" : "max-w-4xl"
        } bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#DCA3A8]/40 animate-in zoom-in-95 duration-200`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-gray-100 bg-white">
          <div className="pr-4">
            <h4 className="font-montserrat font-bold text-sm sm:text-base text-[#2E2220] leading-snug">
              {media.title}
            </h4>
            {media.subtitle && (
              <p className="text-xs text-[#7E6B69] mt-0.5">{media.subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full hover:bg-gray-100 text-[#2E2220] transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Content */}
        {isVideo ? (
          <div className="relative aspect-[9/16] max-h-[72vh] w-full bg-black flex items-center justify-center overflow-hidden">
            <Image
              src={media.src}
              alt={media.title}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 480px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col justify-between p-6 pointer-events-none">
              <div className="self-end bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-[#DCA3A8]" />
                <span className="font-bevan bevan-regular text-[11px] sm:text-xs tracking-normal">
                  {media.views ?? "Trending"}
                </span>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white border border-white/40 shadow-lg">
                  <Play className="w-8 h-8 fill-white translate-x-0.5" />
                </div>
              </div>

              <div className="text-white space-y-1">
                <p className="text-sm font-semibold">{media.title}</p>
                {media.creator && (
                  <p className="text-xs text-white/80">KOC: {media.creator}</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative w-full max-h-[75vh] min-h-[260px] sm:min-h-[360px] bg-[#FAF7F6] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            {/* Real high quality image displayed cleanly at its natural aspect ratio without black letterbox bars */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={media.src}
              alt={media.title}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-xs"
            />
          </div>
        )}

        {/* Footer */}
        <div className="p-4 bg-white flex items-center justify-between border-t border-gray-100">
          <span className="text-xs text-[#7E6B69] italic">
            Nguyen Phuong Nguyen Portfolio
          </span>
          {media.accountLink && (
            <a
              href={media.accountLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#DCA3A8] text-white text-xs font-semibold hover:bg-[#C98F94] transition-colors"
            >
              <span>Open on Platform</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
