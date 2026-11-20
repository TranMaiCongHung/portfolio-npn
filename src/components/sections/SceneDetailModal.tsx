"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, ExternalLink, Award, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { SceneDetail } from "@/data/portfolioData";

interface SceneDetailModalProps {
  scene: SceneDetail | null;
  onClose: () => void;
  onSelectScene: (scene: SceneDetail) => void;
  allScenes: SceneDetail[];
}

export function SceneDetailModal({
  scene,
  onClose,
  onSelectScene,
  allScenes,
}: SceneDetailModalProps) {
  const [animatedValue, setAnimatedValue] = useState("");

  useEffect(() => {
    if (!scene) return;

    // Prevent body scroll when modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Animated counter effect for result stat
    setAnimatedValue(scene.resultStat.value);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [scene, onClose]);

  if (!scene) return null;

  const currentIdx = allScenes.findIndex((s) => s.number === scene.number);
  const nextScene = allScenes[(currentIdx + 1) % allScenes.length];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-[#3A2A28]/60 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white border border-[rgba(58,42,40,0.15)] shadow-2xl p-6 sm:p-10 text-[#3A2A28] animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 sm:top-8 sm:right-8 w-11 h-11 rounded-full bg-white border border-[rgba(58,42,40,0.12)] flex items-center justify-center text-[#3A2A28] hover:bg-[#C9707B] hover:text-white transition-colors shadow-sm interactive-hover z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3.5 py-1 rounded-full text-base font-pinyon pdf-script bg-[#C9707B] text-white">
            {scene.projectScriptLabel ?? scene.kicker}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-[#F2C4C4]/50 text-[#3A2A28]">
            {scene.category}
          </span>
          {scene.timeline && (
            <span className="text-xs text-[#7E6B69] font-medium ml-auto pr-12 sm:pr-0">
              {scene.timeline}
            </span>
          )}
        </div>

        <h3
          id="modal-title"
          className="font-heading text-3xl sm:text-5xl text-[#3A2A28] tracking-tight uppercase mb-2"
        >
          {scene.title}
        </h3>
        <p className="text-sm sm:text-base text-[#7E6B69] font-medium mb-8">
          {scene.role}
        </p>

        {/* RESULT STAT FIRST (animated callout banner) */}
        <div className="mb-8 p-6 sm:p-8 rounded-2xl bg-white border border-[#C9707B]/30 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C9707B] mb-1">
              <Award className="w-4 h-4" />
              <span>Key Verified Result</span>
            </div>
            <div className="font-bevan bevan-regular text-3xl sm:text-5xl text-[#3A2A28] tracking-tight">
              {animatedValue}
            </div>
            <div className="text-sm text-[#5A4340] font-medium mt-1">
              {scene.resultStat.label}
            </div>
          </div>

          {scene.additionalStats && scene.additionalStats.length > 0 && (
            <div className="flex flex-wrap gap-4 sm:gap-6 border-t sm:border-t-0 sm:border-l border-[rgba(58,42,40,0.1)] pt-4 sm:pt-0 sm:pl-6">
              {scene.additionalStats.map((st) => (
                <div key={st.label}>
                  <span className="font-bevan bevan-regular text-xl sm:text-2xl text-[#C9707B] block tracking-tight">
                    {st.value}
                  </span>
                  <span className="text-xs text-[#7E6B69] uppercase tracking-wider block max-w-[160px]">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Hero Visual (Uncropped) */}
        <div className="relative mb-8 rounded-2xl overflow-hidden border border-[rgba(58,42,40,0.15)] bg-[#F9FAFB] shadow-md p-3 flex flex-col items-center justify-center">
          <div className="relative w-full h-[280px] sm:h-[380px]">
            <Image
              src={scene.heroImage.src}
              alt={scene.heroImage.alt}
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-contain"
            />
          </div>
          {scene.heroImage.caption && (
            <div className="mt-3 px-4 py-1.5 rounded-full bg-[#3A2A28]/85 text-white text-xs sm:text-sm tracking-wide font-medium backdrop-blur-sm text-center">
              {scene.heroImage.caption}
            </div>
          )}
        </div>

        {/* Overview & Key Responsibilities / Bullets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          <div className="lg:col-span-5">
            <h4 className="font-heading text-lg text-[#3A2A28] uppercase tracking-wider mb-2">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-[#5A4340] leading-relaxed">
              {scene.overview}
            </p>

            {scene.externalLink && (
              <a
                href={scene.externalLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full border border-[#C9707B] text-[#C9707B] hover:bg-[#C9707B] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors interactive-hover"
              >
                <span>{scene.externalLink.label}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <div className="lg:col-span-7">
            <h4 className="font-heading text-lg text-[#3A2A28] uppercase tracking-wider mb-3">
              Responsibilities & Execution
            </h4>
            <ul className="flex flex-col gap-3">
              {scene.bullets?.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#5A4340]">
                  <CheckCircle2 className="w-4 h-4 text-[#C9707B] mt-1 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery Images */}
        {scene.galleryImages && scene.galleryImages.length > 0 && (
          <div className="mb-8">
            <h4 className="font-heading text-lg text-[#3A2A28] uppercase tracking-wider mb-3">
              Visual Evidence & Artifacts
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {scene.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-2xl overflow-hidden border border-[rgba(58,42,40,0.12)] bg-white shadow-sm group"
                >
                  <div className="relative w-full h-[280px] p-2 bg-[#F9FAFB] flex items-center justify-center">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 768px) 300px, 100vw"
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {img.caption && (
                    <div className="p-2.5 bg-white border-t border-[rgba(58,42,40,0.08)] text-center">
                      <span className="text-xs font-medium text-[#3A2A28]">
                        {img.caption}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WHAT I LEARNED (max 3 lines callout) */}
        <div className="p-6 rounded-2xl bg-[#F2C4C4]/30 border-l-4 border-[#C9707B] mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C9707B] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>What I Learned</span>
          </div>
          <p className="text-sm sm:text-base text-[#3A2A28] font-serif italic leading-relaxed line-clamp-3">
            &ldquo;{scene.learned}&rdquo;
          </p>
        </div>

        {/* Footer Navigation within Modal */}
        <div className="flex items-center justify-between pt-6 border-t border-[rgba(58,42,40,0.12)]">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-[rgba(58,42,40,0.2)] text-xs font-semibold uppercase tracking-wider hover:bg-[#F2C4C4]/40 transition-colors interactive-hover"
          >
            Close Scene
          </button>

          <button
            onClick={() => onSelectScene(nextScene)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C9707B] text-white hover:bg-[#A8535E] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm interactive-hover"
          >
            <span>Next: Scene {nextScene.number}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
