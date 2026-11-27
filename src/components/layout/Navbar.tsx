"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = ["about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 sm:py-6 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 border border-[rgba(58,42,40,0.12)] shadow-sm ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md shadow-[rgba(58,42,40,0.06)] scale-[0.98]"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        {/* Monogram */}
        <Link
          href="#top"
          className="group flex items-center gap-1.5 font-heading text-lg tracking-wider text-[#3A2A28] interactive-hover select-none"
        >
          <span className="font-bold">{PERSONAL_INFO.monogram}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9707B] transition-transform group-hover:scale-150" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-200 interactive-hover ${
                    isActive
                      ? "text-[#3A2A28] bg-[#F2C4C4]/60 font-semibold"
                      : "text-[#3A2A28]/80 hover:text-[#3A2A28] hover:bg-[#F2C4C4]/30"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right CTA Button */}
        <div className="flex items-center gap-2">
          <a
            href={PERSONAL_INFO.canvaCvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#C9707B] text-white hover:bg-[#A8535E] transition-colors shadow-sm interactive-hover"
          >
            <span>Download CV</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-1.5 rounded-full text-[#3A2A28] hover:bg-[#F2C4C4]/40 transition-colors interactive-hover"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 rounded-2xl bg-white/95 backdrop-blur-xl border border-[rgba(58,42,40,0.12)] p-6 shadow-xl md:hidden z-50 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm uppercase tracking-wider font-semibold text-[#3A2A28] hover:bg-[#F2C4C4]/40 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-2 border-t border-[rgba(58,42,40,0.08)] flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.canvaCvUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#C9707B] text-white text-xs uppercase tracking-wider font-semibold"
            >
              <span>Download CV (Canva)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
