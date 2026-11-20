"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, Download, FileText, ArrowUp, Check } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Page4ThankYou() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="page-4"
      aria-label="Thank You and Contact Page"
      className="relative min-h-[90vh] w-full flex flex-col justify-between overflow-hidden bg-black text-white select-none"
    >
      {/* Background High-Key Night Portrait */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/source/p1_006.png"
          alt="Nguyen Phuong Nguyen"
          fill
          priority
          className="object-cover object-center opacity-65 filter contrast-105 brightness-95"
        />
        {/* Soft vignette & gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/60" />
      </div>

      {/* Top Contact Items matching PDF Page 4 */}
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-3">
            {/* Email with copy */}
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
              className="flex items-center gap-3 group text-left hover:opacity-85 transition-opacity"
              title="Click to copy email"
            >
              <div className="w-10 h-10 rounded-full bg-black/75 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-[#DCA3A8] transition-all">
                {copiedType === "email" ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Mail className="w-4 h-4 text-white" />
                )}
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium tracking-wide text-white">
                  {PERSONAL_INFO.email}
                </p>
                {copiedType === "email" && (
                  <span className="text-[10px] text-green-400">Copied to clipboard!</span>
                )}
              </div>
            </button>

            {/* Phone */}
            <a
              href={PERSONAL_INFO.phoneTel}
              className="flex items-center gap-3 group hover:opacity-85 transition-opacity"
            >
              <div className="w-10 h-10 rounded-full bg-black/75 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-[#DCA3A8] transition-all">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <p className="text-xs sm:text-sm font-medium tracking-wide text-white">
                {PERSONAL_INFO.phone}
              </p>
            </a>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/PORTFOLIO.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-semibold tracking-wider transition-all hover:scale-105 border border-white/30"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Portfolio</span>
            </a>

            <a
              href={PERSONAL_INFO.canvaCvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DCA3A8] hover:bg-[#C98F94] text-white text-xs font-semibold tracking-wider transition-all hover:scale-105 shadow-md"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Canva CV</span>
            </a>
          </div>
        </div>
      </div>

      {/* Centerpiece: Huge Glowing Script "Thank You" matching PDF Page 4 */}
      <div className="relative z-10 w-full flex items-center justify-center py-12 sm:py-20 my-auto text-center pointer-events-none">
        <h2 className="pdf-script text-[clamp(4.5rem,18vw,14rem)] text-[#F2C4C4] leading-none transform -rotate-2 drop-shadow-[0_4px_30px_rgba(201,112,123,0.5)]">
          Thank You
        </h2>
      </div>

      {/* Bottom Bar: Copyright & Scroll to Top */}
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex items-center justify-between text-xs text-white/70 border-t border-white/10 pt-4">
        <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 hover:text-white transition-colors group"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
