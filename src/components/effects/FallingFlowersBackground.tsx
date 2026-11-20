"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface FlowerParticle {
  id: number;
  src: string;
  baseX: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  wobbleSpeed: number;
  wobbleAmp: number;
  phase: number;
  rotation: number;
  rotSpeed: number;
  flipSpeed: number;
  flipPhase: number;
  blur: number;
  opacity: number;
}

const FLOWER_PRESETS = [
  // 1. Hoa ly hồng (Near - mờ 2px, size 52px)
  { src: "/source/lily-pink.webp", size: 52, blur: 2.0, opacity: 0.44, speedY: 0.95 },
  // 2. Hoa ly trắng (Near - mờ 2.2px, size 56px)
  { src: "/source/lily-white.webp", size: 56, blur: 2.2, opacity: 0.42, speedY: 0.9 },
  // 3. Cánh hoa ly đơn (Mid - mờ 3px, size 42px)
  { src: "/source/lily-petals.webp", size: 42, blur: 3.0, opacity: 0.38, speedY: 1.05 },
  // 4. Hoa ly kem mềm (Mid - mờ 3.2px, size 40px)
  { src: "/source/lily-soft.webp", size: 40, blur: 3.2, opacity: 0.35, speedY: 0.85 },
  // 5. Cánh hoa ly đơn (Mid - mờ 3.5px, size 36px)
  { src: "/source/lily-petals.webp", size: 36, blur: 3.5, opacity: 0.34, speedY: 1.0 },
  // 6. Hoa ly hồng nhỏ (Mid - mờ 3.5px, size 36px)
  { src: "/source/lily-pink.webp", size: 36, blur: 3.5, opacity: 0.32, speedY: 0.88 },
  // 7. Cánh hoa ly xa (Far - mờ 5px, size 26px)
  { src: "/source/lily-petals.webp", size: 26, blur: 5.0, opacity: 0.25, speedY: 0.75 },
  // 8. Hoa ly trắng xa (Far - mờ 5.2px, size 28px)
  { src: "/source/lily-white.webp", size: 28, blur: 5.2, opacity: 0.24, speedY: 0.72 },
  // 9. Hoa ly soft xa (Far - mờ 4.8px, size 30px)
  { src: "/source/lily-soft.webp", size: 30, blur: 4.8, opacity: 0.26, speedY: 0.78 },
  // 10. Cánh hoa ly bay nhẹ (Near - mờ 2.4px, size 46px)
  { src: "/source/lily-petals.webp", size: 46, blur: 2.4, opacity: 0.4, speedY: 1.02 },
];

export function FallingFlowersBackground() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const particlesRef = useRef<FlowerParticle[]>([]);
  const reqRef = useRef<number | null>(null);
  const isTabVisible = useRef(true);

  useEffect(() => {
    setMounted(true);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setReducedMotion(true);
      return;
    }

    const isMobile = window.innerWidth < 768;
    const presets = isMobile ? FLOWER_PRESETS.slice(0, 6) : FLOWER_PRESETS;
    const winW = window.innerWidth;
    const winH = window.innerHeight;

    particlesRef.current = presets.map((preset, i) => {
      const spacingX = winW / presets.length;
      const baseX = spacingX * i + (Math.random() - 0.5) * spacingX * 0.7;
      // Rải đều các bông hoa trên toàn bộ màn hình từ lúc bắt đầu
      const y = Math.random() * (winH + 120) - 60;

      return {
        id: i,
        src: preset.src,
        baseX,
        y,
        size: isMobile ? preset.size * 0.85 : preset.size,
        speedY: preset.speedY * (isMobile ? 0.85 : 1.0),
        speedX: 0.12 + Math.random() * 0.18,
        wobbleSpeed: 0.001 + Math.random() * 0.0012,
        wobbleAmp: 25 + Math.random() * 25,
        phase: Math.random() * Math.PI * 2,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.45) * 0.35,
        flipSpeed: 0.0012 + Math.random() * 0.0015,
        flipPhase: Math.random() * Math.PI * 2,
        blur: preset.blur,
        opacity: preset.opacity,
      };
    });

    // Check visibility: Active from Overview (#projects) to the end of website
    const checkVisibility = () => {
      const projectsEl = document.getElementById("projects");
      if (projectsEl) {
        const rect = projectsEl.getBoundingClientRect();
        // Activate when Overview enters view
        const visible = rect.top <= window.innerHeight * 0.85;
        setIsVisible(visible);
      }
    };

    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility, { passive: true });
    checkVisibility();

    // Tab visibility handling
    const handleVisibilityChange = () => {
      isTabVisible.current = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Animation Loop: TỐC ĐỘ CỐ ĐỊNH, KHÔNG BỊ TĂNG TỐC KHI LƯỚT
    let lastTime = performance.now();
    const animate = (time: number) => {
      const delta = Math.min((time - lastTime) / 16.667, 2.5); // Normalize to 60fps
      lastTime = time;

      if (isTabVisible.current && particlesRef.current.length > 0) {
        const curW = window.innerWidth;
        const curH = window.innerHeight;

        particlesRef.current.forEach((p, idx) => {
          const el = elementsRef.current[idx];
          if (!el) return;

          // 1. TỐC ĐỘ RƠI CỐ ĐỊNH, ĐỀU ĐẶN & ÊM ÁI (KHÔNG PHỤ THUỘC VÀO TỐC ĐỘ CUỘN/LƯỚT TRANG)
          p.y += p.speedY * delta;

          // 2. Dao động ngang hình sin nhẹ nhàng như cánh hoa rơi trong không khí tĩnh
          const wobble = Math.sin(time * p.wobbleSpeed + p.phase) * p.wobbleAmp;
          p.baseX += p.speedX * delta * 0.4;
          let curX = p.baseX + wobble;

          // Giữ hoa trong giới hạn màn hình ngang
          if (curX > curW + 65) {
            p.baseX = -60;
            curX = -60;
          } else if (curX < -65) {
            p.baseX = curW + 60;
            curX = curW + 60;
          }

          // 3. Xoay tròn và lật cánh 3D nhẹ nhàng tự nhiên
          p.rotation += p.rotSpeed * delta;
          const flip = Math.sin(time * p.flipSpeed + p.flipPhase) * 45;

          // 4. CHỈ RESET KHI RƠI CHẠM ĐÁY MÀN HÌNH:
          // Khi rơi qua đáy (p.y > curH + 80) -> quay lại đỉnh đầu (-60) để tiếp tục rơi xuống
          if (p.y > curH + 80) {
            p.y = -60 - Math.random() * 60;
            p.baseX = Math.random() * curW;
            p.phase = Math.random() * Math.PI * 2;
          }

          // Áp dụng GPU Transform
          el.style.transform = `translate3d(${curX}px, ${p.y}px, 0) translate(-50%, -50%) rotate(${p.rotation}deg) rotateY(${flip}deg)`;
        });
      }

      reqRef.current = requestAnimationFrame(animate);
    };

    reqRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, []);

  if (!mounted || reducedMotion) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[5] overflow-hidden select-none transition-opacity duration-700 ease-in-out"
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: "none",
      }}
    >
      {/* Ambient soft glowing bokeh blooms */}
      <div
        className="absolute rounded-full pointer-events-none -z-10"
        style={{
          width: "480px",
          height: "480px",
          left: "8%",
          top: "20%",
          background:
            "radial-gradient(circle, rgba(242,196,196,0.18) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(75px)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none -z-10"
        style={{
          width: "560px",
          height: "560px",
          right: "6%",
          top: "50%",
          background:
            "radial-gradient(circle, rgba(201,112,123,0.12) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Floating & Falling Lily Flower & Petal Particles */}
      {particlesRef.current.map((p, idx) => (
        <div
          key={p.id}
          ref={(el) => {
            elementsRef.current[idx] = el;
          }}
          className="absolute top-0 left-0 will-change-transform pointer-events-none select-none"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            filter: `blur(${p.blur}px)`,
          }}
        >
          <Image
            src={p.src}
            alt=""
            width={p.size}
            height={p.size}
            unoptimized
            className="w-full h-full object-contain pointer-events-none select-none"
          />
        </div>
      ))}
    </div>
  );
}
