"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, ArrowUpRight, Copy, Check, Heart, Sparkles, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative w-full pt-16 pb-12 z-20 overflow-hidden">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mb-16 sm:mb-24">
        {/* Rounded Banner Card Over Warm Portrait Photo with Light Warm Overlay */}
        <div className="relative rounded-[2.5rem] overflow-hidden border border-[rgba(58,42,40,0.15)] shadow-2xl p-8 sm:p-14 lg:p-20 text-[#3A2A28]">
          {/* Background Warm High-Key Portrait with Light Golden Film Overlay (NOT dark) */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <Image
              src="/source/portrait-contact-mobile.webp"
              alt="Nguyen Phuong Nguyen portrait in warm light"
              fill
              sizes="100vw"
              className="sm:hidden object-cover object-top opacity-35 filter brightness-105 saturate-110"
            />
            <Image
              src="/source/portrait-contact.webp"
              alt="Nguyen Phuong Nguyen portrait in warm light"
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="hidden sm:block object-cover object-center opacity-35 filter brightness-105 saturate-110"
            />
            {/* Clean white gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/95 via-white/85 to-white/70" />
            <div className="absolute inset-0 bg-[#F2C4C4]/15 mix-blend-overlay" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 max-w-3xl">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#C9707B]/30 backdrop-blur-sm mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#C9707B]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#3A2A28]">
                I would love to hear from you
              </span>
            </div>

            {/* Giant Headline with solid/outline treatment */}
            <h2 className="font-heading text-[clamp(2.8rem,8.5vw,7rem)] leading-[0.92] tracking-tight uppercase mb-8">
              <span>LET&apos;S WORK </span>
              <span className="text-outline-rose">TOGETHER</span>
            </h2>

            <p className="text-sm sm:text-base text-[#5A4340] leading-relaxed max-w-xl mb-10">
              Open to Content Marketing, Influencer Sourcing & KOC Booking roles, and social media creative partnerships.
            </p>

            {/* Contact Details (Email & Phone from PDF with one-click copy) */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10">
              {/* Email Card */}
              <div className="flex items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white/90 border border-[rgba(58,42,40,0.12)] shadow-sm flex-1 interactive-hover">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 text-sm sm:text-base font-semibold text-[#3A2A28] hover:text-[#C9707B] transition-colors truncate"
                >
                  <Mail className="w-5 h-5 text-[#C9707B] flex-shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                  aria-label="Copy email address"
                  className="p-2 rounded-xl hover:bg-[#F2C4C4]/40 text-[#7E6B69] hover:text-[#3A2A28] transition-colors flex-shrink-0"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white/90 border border-[rgba(58,42,40,0.12)] shadow-sm flex-1 interactive-hover">
                <a
                  href={PERSONAL_INFO.phoneTel}
                  className="flex items-center gap-3 text-sm sm:text-base font-semibold text-[#3A2A28] hover:text-[#C9707B] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#C9707B] flex-shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, "phone")}
                  aria-label="Copy phone number"
                  className="p-2 rounded-xl hover:bg-[#F2C4C4]/40 text-[#7E6B69] hover:text-[#3A2A28] transition-colors flex-shrink-0"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Two Pill Buttons: 'Contact me' (white) and 'Download CV' (rose) */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Collaboration%20Inquiry%20-%20Nguyen%20Phuong%20Nguyen`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#3A2A28] hover:bg-gray-50 border border-[rgba(58,42,40,0.15)] font-heading text-sm uppercase tracking-wider font-semibold shadow-md hover:scale-105 transition-all duration-200 interactive-hover"
              >
                <span>Contact me</span>
                <ArrowUpRight className="w-4 h-4 text-[#C9707B]" />
              </a>

              <a
                href={PERSONAL_INFO.canvaCvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C9707B] text-white hover:bg-[#A8535E] font-heading text-sm uppercase tracking-wider font-semibold shadow-md shadow-[#C9707B]/30 hover:scale-105 transition-all duration-200 interactive-hover"
              >
                <span>Download CV</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer: Simple, cream, with a script "Thank you" */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[rgba(58,42,40,0.1)]">
        <div className="flex items-center gap-4">
          <span className="font-script text-4xl sm:text-5xl text-[#C9707B]">
            Thank you
          </span>
          <span className="text-xs text-[#7E6B69] uppercase tracking-wider font-medium hidden sm:inline">
            · for stopping by
          </span>
        </div>

        <div className="text-xs text-[#7E6B69] tracking-wider uppercase font-medium text-center">
          © 2026 {PERSONAL_INFO.name} · All rights reserved
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(58,42,40,0.15)] bg-white/70 hover:bg-white text-xs uppercase tracking-wider font-semibold text-[#3A2A28] transition-colors interactive-hover"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#C9707B]" />
        </button>
      </div>
    </footer>
  );
}
