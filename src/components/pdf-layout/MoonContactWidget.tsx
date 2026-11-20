"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, Check } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function MoonContactWidget() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="relative w-full flex justify-end mt-2 sm:mt-4 select-none">
      {/* 
        Relative Wrapper for Moon + 'contact me' title
      */}
      <div className="relative">
        {/* ========================================================= */}
        {/* 1. Curved 'contact me' Script hugging circular moon rim   */}
        {/* ========================================================= */}
        <svg
          viewBox="0 0 600 600"
          className="absolute top-0 left-0 w-[410px] sm:w-[510px] md:w-[590px] lg:w-[640px] xl:w-[670px] h-[410px] sm:h-[510px] md:h-[590px] lg:h-[640px] xl:h-[670px] pointer-events-none z-30 overflow-visible"
          aria-hidden="true"
        >
          <defs>
            {/* 
              Exact circular arc hugging the moon rim tightly.
              Center is (300, 300), moon radius is 300, arc radius is 305 (just 5px outside the rim).
              Clockwise arc from angle ~165° to ~105° ensures text baseline hugs the rim.
            */}
            <path
              id="moon-rim-tight-arc"
              d="M 6 222 A 305 305 0 0 1 222 6"
              fill="none"
            />
          </defs>
          <text>
            <textPath
              href="#moon-rim-tight-arc"
              startOffset="10%"
              style={{
                fontFamily: 'var(--font-script), "Pinyon Script", cursive',
                fontSize: "48px",
                fill: "#E5A8AD",
                stroke: "#2E2220",
                strokeWidth: "1.2px",
                paintOrder: "stroke fill",
              }}
            >
              contact me
            </textPath>
          </text>
        </svg>

        {/* ========================================================= */}
        {/* 2. Clipped Moon Frame: Chopped Flat on Right & Bottom     */}
        {/* ========================================================= */}
        <div className="relative w-[300px] sm:w-[380px] md:w-[440px] lg:w-[480px] xl:w-[500px] h-[290px] sm:h-[360px] md:h-[420px] lg:h-[465px] xl:h-[485px] overflow-hidden">
          
          {/* Full Moon Sphere positioned so circle starts at top-left 0,0 */}
          <div className="absolute top-0 left-0 w-[410px] sm:w-[510px] md:w-[590px] lg:w-[640px] xl:w-[670px] h-[410px] sm:h-[510px] md:h-[590px] lg:h-[640px] xl:h-[670px] pointer-events-none select-none">
            {/* Offset the transparent padding (-12.5% left, -10.5% top) */}
            <div className="absolute -left-[12.5%] -top-[10.5%] w-[132%] h-[126%]">
              <Image
                src="/source/p1_005.png"
                alt="Contact Moon Texture"
                fill
                priority
                className="object-contain pointer-events-none select-none"
              />
            </div>
          </div>

          {/* ======================================================= */}
          {/* 3. Contact Items matching PDF Image 1                   */}
          {/* ======================================================= */}
          <div className="absolute top-[26%] sm:top-[27%] md:top-[28%] left-[16%] sm:left-[20%] md:left-[22%] flex flex-col gap-3 sm:gap-4 md:gap-4.5 z-10">
            {/* Email Row */}
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
              className="flex items-center gap-2.5 sm:gap-3.5 text-left group transition-transform hover:translate-x-1"
              title="Click to copy email"
            >
              {/* Solid Black Circle with White Mail Icon */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-black flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                {copiedType === "email" ? (
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                ) : (
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-sans text-xs sm:text-sm md:text-[15px] font-normal tracking-wide drop-shadow-sm whitespace-nowrap">
                  {PERSONAL_INFO.email}
                </span>
                {copiedType === "email" && (
                  <span className="text-[10px] sm:text-xs text-green-300 font-medium">
                    Copied to clipboard!
                  </span>
                )}
              </div>
            </button>

            {/* Phone Row */}
            <a
              href={PERSONAL_INFO.phoneTel}
              className="flex items-center gap-2.5 sm:gap-3.5 group transition-transform hover:translate-x-1"
              title="Call phone number"
            >
              {/* Solid Black Circle with White Phone Icon */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-black flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-white font-sans text-xs sm:text-sm md:text-[15px] font-normal tracking-wide drop-shadow-sm whitespace-nowrap">
                {PERSONAL_INFO.phone}
              </span>
            </a>

            {/* CV Row matching PDF exact icon */}
            <a
              href={PERSONAL_INFO.canvaCvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 sm:gap-3.5 group transition-transform hover:translate-x-1"
              title="Click to view CV"
            >
              {/* Exact Document CV Icon matching PDF */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <svg
                  viewBox="0 0 36 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 filter drop-shadow-sm"
                >
                  {/* Back page outline */}
                  <path
                    d="M4 10V36C4 37.1 4.9 38 6 38H24"
                    stroke="#1E1615"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Front page background & outline with folded corner */}
                  <path
                    d="M9 4C9 2.9 9.9 2 11 2H24L33 11V32C33 33.1 32.1 34 31 34H11C9.9 34 9 33.1 9 32V4Z"
                    fill="white"
                    stroke="#1E1615"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                  {/* Dog-ear fold */}
                  <path
                    d="M24 2V11H33"
                    stroke="#1E1615"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  {/* CV text header */}
                  <text
                    x="13"
                    y="9.5"
                    fill="#1E1615"
                    fontSize="7"
                    fontWeight="800"
                    fontFamily="sans-serif"
                  >
                    CV
                  </text>
                  {/* Avatar box & silhouette */}
                  <rect
                    x="23.5"
                    y="13"
                    width="6"
                    height="6"
                    stroke="#1E1615"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <circle cx="26.5" cy="15" r="1.1" fill="#1E1615" />
                  <path
                    d="M24.8 18.2C25.2 17.2 26 17 26.5 17C27 17 27.8 17.2 28.2 18.2"
                    stroke="#1E1615"
                    strokeWidth="0.9"
                  />
                  {/* Horizontal text lines */}
                  <line
                    x1="12"
                    y1="14"
                    x2="20"
                    y2="14"
                    stroke="#1E1615"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="12"
                    y1="17.5"
                    x2="20"
                    y2="17.5"
                    stroke="#1E1615"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="12"
                    y1="22"
                    x2="28"
                    y2="22"
                    stroke="#1E1615"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="12"
                    y1="25.5"
                    x2="28"
                    y2="25.5"
                    stroke="#1E1615"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="12"
                    y1="29"
                    x2="22"
                    y2="29"
                    stroke="#1E1615"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Text: click to view (clean white, no underline) */}
              <span className="text-white font-sans text-xs sm:text-sm md:text-[15px] font-normal tracking-wide drop-shadow-sm group-hover:underline underline-offset-4 whitespace-nowrap">
                click to view
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
