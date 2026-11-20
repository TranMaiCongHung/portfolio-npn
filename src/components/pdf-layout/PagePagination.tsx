"use client";

import React, { useEffect, useState } from "react";

const PAGES = [
  { id: "page-1", num: "01", label: "About Me" },
  { id: "page-2", num: "02", label: "Influencer Marketing" },
  { id: "page-3", num: "03", label: "Projects & Personal" },
  { id: "page-4", num: "04", label: "Thank You" },
];

export function PagePagination() {
  const [activePage, setActivePage] = useState("page-1");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = PAGES.length - 1; i >= 0; i--) {
        const el = document.getElementById(PAGES[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActivePage(PAGES[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-label="PDF Page Navigation"
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-3 select-none pointer-events-auto"
    >
      <div className="bg-white/80 backdrop-blur-md px-2 py-3 rounded-full border border-[#DCA3A8]/40 shadow-md flex flex-col items-center gap-3">
        {PAGES.map((page) => {
          const isActive = activePage === page.id;
          return (
            <a
              key={page.id}
              href={`#${page.id}`}
              className="group relative flex items-center p-1"
              aria-label={`Jump to ${page.label}`}
            >
              {/* Tooltip on hover */}
              <span className="absolute right-7 px-2.5 py-1 rounded-lg bg-[#2E2220] text-white text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                Page {page.num}: {page.label}
              </span>

              {/* Dot */}
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#8C464F] scale-125 ring-4 ring-[#DCA3A8]/40"
                    : "bg-[#D0C8C6] hover:bg-[#8C464F]"
                }`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
