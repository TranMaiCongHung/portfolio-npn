"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface FlowerDef {
  id: number;
  src: string;
  baseX: number; // percentage (0 - 100)
  baseY: number; // percentage (0 - 100)
  size: number; // px (35 - 130)
  speedX: number;
  speedY: number;
  wobbleSpeed: number;
  blur: number;
  baseOpacity: number;
  initialPhase: number;
}

const INITIAL_FLOWERS: FlowerDef[] = [
  { id: 1, src: "/source/lily-pink.webp", baseX: 8, baseY: 15, size: 110, speedX: 0.08, speedY: 0.06, wobbleSpeed: 0.0012, blur: 2, baseOpacity: 0.45, initialPhase: 0 },
  { id: 2, src: "/source/lily-soft.webp", baseX: 88, baseY: 12, size: 125, speedX: -0.07, speedY: 0.05, wobbleSpeed: 0.0015, blur: 3, baseOpacity: 0.4, initialPhase: 1.5 },
  { id: 3, src: "/source/lily-white.webp", baseX: 20, baseY: 42, size: 65, speedX: 0.05, speedY: -0.07, wobbleSpeed: 0.0018, blur: 4, baseOpacity: 0.3, initialPhase: 3.1 },
  { id: 4, src: "/source/lily-pink.webp", baseX: 82, baseY: 48, size: 75, speedX: -0.06, speedY: 0.08, wobbleSpeed: 0.0014, blur: 3, baseOpacity: 0.35, initialPhase: 4.2 },
  { id: 5, src: "/source/lily-soft.webp", baseX: 12, baseY: 75, size: 90, speedX: 0.07, speedY: -0.05, wobbleSpeed: 0.0016, blur: 2, baseOpacity: 0.4, initialPhase: 2.0 },
  { id: 6, src: "/source/lily-white.webp", baseX: 92, baseY: 80, size: 135, speedX: -0.08, speedY: -0.06, wobbleSpeed: 0.0011, blur: 1, baseOpacity: 0.5, initialPhase: 5.0 },
  { id: 7, src: "/source/lily-pink.webp", baseX: 52, baseY: 8, size: 45, speedX: 0.04, speedY: 0.05, wobbleSpeed: 0.002, blur: 5, baseOpacity: 0.25, initialPhase: 0.8 },
  { id: 8, src: "/source/lily-soft.webp", baseX: 35, baseY: 88, size: 55, speedX: -0.05, speedY: -0.04, wobbleSpeed: 0.0019, blur: 4, baseOpacity: 0.28, initialPhase: 2.7 },
  { id: 9, src: "/source/lily-white.webp", baseX: 68, baseY: 92, size: 85, speedX: 0.06, speedY: -0.06, wobbleSpeed: 0.0013, blur: 3, baseOpacity: 0.35, initialPhase: 3.8 },
  { id: 10, src: "/source/lily-pink.webp", baseX: 4, baseY: 50, size: 50, speedX: 0.05, speedY: 0.07, wobbleSpeed: 0.0022, blur: 5, baseOpacity: 0.25, initialPhase: 1.2 },
  { id: 11, src: "/source/lily-soft.webp", baseX: 94, baseY: 35, size: 60, speedX: -0.06, speedY: -0.05, wobbleSpeed: 0.0017, blur: 4, baseOpacity: 0.3, initialPhase: 4.5 },
];

export function FlowerBubbles({ containerId = "hero" }: { containerId?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const flowersRef = useRef(
    INITIAL_FLOWERS.map((f) => ({
      ...f,
      curX: 0,
      curY: 0,
      repelX: 0,
      repelY: 0,
      rotation: Math.random() * 360,
    }))
  );
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const isTabVisible = useRef(true);
  const reqRef = useRef<number | null>(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setDisabled(true);
      return;
    }

    const handleVisibility = () => {
      isTabVisible.current = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Only track if within container vertical bounds plus margin
      if (e.clientY >= rect.top - 100 && e.clientY <= rect.bottom + 100) {
        mousePos.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      } else {
        mousePos.current = { x: -1000, y: -1000 };
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let startTime = performance.now();
    const animate = (time: number) => {
      if (isTabVisible.current && containerRef.current) {
        const width = containerRef.current.offsetWidth || window.innerWidth;
        const height = containerRef.current.offsetHeight || window.innerHeight;
        const elapsed = time - startTime;

        flowersRef.current.forEach((flower, i) => {
          const el = elementsRef.current[i];
          if (!el) return;

          // Gentle ambient drift
          const naturalX = (flower.baseX / 100) * width + Math.sin(elapsed * flower.wobbleSpeed + flower.initialPhase) * 35;
          const naturalY = (flower.baseY / 100) * height + Math.cos(elapsed * flower.wobbleSpeed * 0.8 + flower.initialPhase) * 30;

          // Gentle mouse repel reaction
          const dx = naturalX + flower.repelX - mousePos.current.x;
          const dy = naturalY + flower.repelY - mousePos.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const threshold = 160;

          if (dist < threshold && dist > 0) {
            const force = (1 - dist / threshold) * 45;
            flower.repelX += (dx / dist) * force * 0.15;
            flower.repelY += (dy / dist) * force * 0.15;
          }

          // Return back to natural position with damping
          flower.repelX *= 0.94;
          flower.repelY *= 0.94;

          const finalX = naturalX + flower.repelX;
          const finalY = naturalY + flower.repelY;
          flower.rotation += 0.08;

          el.style.transform = `translate3d(${finalX}px, ${finalY}px, 0) translate(-50%, -50%) rotate(${flower.rotation}deg)`;
        });
      }

      reqRef.current = requestAnimationFrame(animate);
    };

    reqRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("mousemove", handleMouseMove);
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, []);

  if (disabled) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none z-10 select-none"
    >
      {INITIAL_FLOWERS.map((flower, i) => (
        <div
          key={flower.id}
          ref={(el) => { elementsRef.current[i] = el; }}
          className="absolute top-0 left-0 will-change-transform transition-opacity duration-700"
          style={{
            width: `${flower.size}px`,
            height: `${flower.size}px`,
            opacity: flower.baseOpacity,
            filter: `blur(${flower.blur}px)`,
          }}
        >
          <Image
            src={flower.src}
            alt=""
            width={flower.size}
            height={flower.size}
            className="w-full h-full object-contain pointer-events-none select-none"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
