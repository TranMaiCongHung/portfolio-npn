"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Petal {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vRot: number;
  scale: number;
  opacity: number;
  phase: number;
  wobbleSpeed: number;
  wobbleAmp: number;
  flipPhase: number;
  flipSpeed: number;
  drag?: number;
  isBurst?: boolean;
}

let petalCounter = 0;

export function FlowerCursor() {
  const [mounted, setMounted] = useState(false);
  const [hoverState, setHoverState] = useState<"normal" | "interactive" | "text">("normal");
  const [isTouch, setIsTouch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [petals, setPetals] = useState<Petal[]>([]);

  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100, targetX: -100, targetY: -100, rotation: 0 });
  const lastSpawn = useRef({ x: -100, y: -100, time: 0 });
  const reqRef = useRef<number | null>(null);
  const hasMovedRef = useRef(false);
  const isVisibleRef = useRef(false);
  const imageErrorRef = useRef(false);
  const isReducedMotionRef = useRef(false);

  useEffect(() => {
    setMounted(true);

    // 1. Detect if device has a real mouse/trackpad
    // Checks (hover: hover) & (pointer: fine) or any-pointer: fine for touch-laptops
    const hasMouseDevice =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(any-hover: hover) and (any-pointer: fine)").matches;

    const isPureTouch =
      !hasMouseDevice &&
      ("ontouchstart" in window || (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0));

    if (isPureTouch) {
      setIsTouch(true);
      return;
    }

    // 2. Inject dynamic high-priority style tag to ensure cursor: none !important is active
    const styleId = "custom-cursor-runtime-style";
    let styleTag = document.getElementById(styleId);
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = styleId;
      styleTag.textContent = `
        html.has-custom-cursor,
        html.has-custom-cursor body,
        html.has-custom-cursor *,
        body.has-custom-cursor,
        body.has-custom-cursor * {
          cursor: none !important;
        }
        html.has-custom-cursor *::before,
        html.has-custom-cursor *::after,
        body.has-custom-cursor *::before,
        body.has-custom-cursor *::after {
          cursor: none !important;
        }
        html.has-custom-cursor::-webkit-scrollbar,
        html.has-custom-cursor *::-webkit-scrollbar,
        body.has-custom-cursor::-webkit-scrollbar,
        body.has-custom-cursor *::-webkit-scrollbar {
          cursor: none !important;
        }
        html.has-custom-cursor::-webkit-scrollbar-thumb,
        html.has-custom-cursor *::-webkit-scrollbar-thumb,
        body.has-custom-cursor::-webkit-scrollbar-thumb,
        body.has-custom-cursor *::-webkit-scrollbar-thumb {
          cursor: none !important;
        }
        html.has-custom-cursor iframe,
        html.has-custom-cursor video,
        html.has-custom-cursor embed,
        html.has-custom-cursor object {
          cursor: none !important;
        }
      `;
      document.head.appendChild(styleTag);
    }

    // 3. Check prefers-reduced-motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    isReducedMotionRef.current = motionQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotionRef.current = e.matches;
      if (e.matches) {
        setPetals([]);
        pos.current.rotation = 0;
      }
    };
    motionQuery.addEventListener?.("change", handleMotionChange);

    // Spawn 1 single delicate petal while moving (cánh hoa đơn chiếc rơi nhẹ khi di chuột)
    const createSinglePetal = (x: number, y: number): Petal => ({
      id: ++petalCounter,
      x: x + (Math.random() - 0.5) * 6,
      y: y + (Math.random() - 0.5) * 6,
      vx: (Math.random() - 0.5) * 0.6,
      vy: 0.7 + Math.random() * 0.6,
      rot: (Math.random() - 0.5) * 45,
      vRot: (Math.random() - 0.5) * 2.5,
      scale: 0.75 + Math.random() * 0.25,
      opacity: 0.95,
      phase: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.03 + Math.random() * 0.02,
      wobbleAmp: 0.6 + Math.random() * 0.5,
      flipPhase: Math.random() * Math.PI * 2,
      flipSpeed: 0.03 + Math.random() * 0.025,
    });

    // Spawn a burst of petals radially when clicking (cánh hoa bung tỏa 360 độ khi click)
    const createBurstPetals = (x: number, y: number, count = 9): Petal[] => {
      const burst: Petal[] = [];
      const baseAngle = Math.random() * Math.PI * 2;

      for (let i = 0; i < count; i++) {
        const angle = baseAngle + (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
        const speed = 3.8 + Math.random() * 4.2; // vận tốc phóng tỏa ra ngoài

        burst.push({
          id: ++petalCounter,
          x: x + Math.cos(angle) * 6,
          y: y + Math.sin(angle) * 6,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.2, // lực đẩy nhẹ lên trước khi rơi
          rot: Math.random() * 360,
          vRot: (Math.random() - 0.5) * 12, // xoay tròn tự nhiên
          scale: 0.75 + Math.random() * 0.45,
          opacity: 1,
          phase: Math.random() * Math.PI * 2,
          wobbleSpeed: 0.04 + Math.random() * 0.03,
          wobbleAmp: 0.8 + Math.random() * 0.6,
          flipPhase: Math.random() * Math.PI * 2,
          flipSpeed: 0.04 + Math.random() * 0.04,
          drag: 0.92, // lực cản không khí giúp cánh hoa bung ra rồi trôi từ từ
          isBurst: true,
        });
      }
      return burst;
    };

    // Handle mouse movement: show flower from first movement, drop single petals sparsely
    const handleMouseMove = (e: MouseEvent) => {
      if (imageErrorRef.current) return;

      // On first mouse move, instantly activate custom cursor and snap to position
      if (!hasMovedRef.current) {
        hasMovedRef.current = true;
        pos.current.x = e.clientX;
        pos.current.y = e.clientY;
        pos.current.targetX = e.clientX;
        pos.current.targetY = e.clientY;
      }

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      // Always guarantee class and inline cursor suppression
      if (!document.documentElement.classList.contains("has-custom-cursor")) {
        document.documentElement.classList.add("has-custom-cursor");
        document.body?.classList.add("has-custom-cursor");
      }
      document.documentElement.style.setProperty("cursor", "none", "important");
      document.body?.style.setProperty("cursor", "none", "important");

      pos.current.targetX = e.clientX;
      pos.current.targetY = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }

      // Spawn falling petals only if reduced motion is disabled
      if (!isReducedMotionRef.current) {
        const now = performance.now();
        const dx = e.clientX - lastSpawn.current.x;
        const dy = e.clientY - lastSpawn.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // "Rơi ít": drops 1 petal every ~48px of mouse travel and at least 110ms apart
        if (dist > 48 && now - lastSpawn.current.time > 110) {
          lastSpawn.current = { x: e.clientX, y: e.clientY, time: now };

          setPetals((prev) => {
            if (prev.length >= 24) {
              return [...prev.slice(1), createSinglePetal(e.clientX, e.clientY)];
            }
            return [...prev, createSinglePetal(e.clientX, e.clientY)];
          });
        }
      }

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, label, summary, [onclick], .cursor-pointer, .interactive-hover, .project-card, .skill-row, [data-interactive], [data-cursor="hover"]'
      );
      if (interactive) {
        setHoverState("interactive");
        return;
      }

      const textElement = target.closest("p, h1, h2, h3, h4, h5, h6, span, li, blockquote");
      if (textElement) {
        setHoverState("text");
        return;
      }

      setHoverState("normal");
    };

    // When clicking: burst petals outward in all directions
    const handleMouseDown = (e: MouseEvent) => {
      if (imageErrorRef.current || isReducedMotionRef.current) return;
      setIsMouseDown(true);

      const burst = createBurstPetals(e.clientX, e.clientY, 9);
      setPetals((prev) => {
        const combined = [...prev, ...burst];
        return combined.length > 28 ? combined.slice(combined.length - 28) : combined;
      });
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    // When mouse leaves the window, hide custom cursor and restore native cursor
    const hideCursor = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
      setIsMouseDown(false);
      document.documentElement.classList.remove("has-custom-cursor");
      document.body?.classList.remove("has-custom-cursor");
      document.documentElement.style.removeProperty("cursor");
      document.body?.style.removeProperty("cursor");
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const toEl = (e as unknown as { toElement?: Element }).toElement;
      if (!e.relatedTarget && !toEl) {
        hideCursor();
      }
    };

    // When mouse returns to window, restore custom cursor
    const handleMouseEnter = (e: MouseEvent) => {
      if (imageErrorRef.current) return;
      if (hasMovedRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
        document.documentElement.classList.add("has-custom-cursor");
        document.body?.classList.add("has-custom-cursor");
        document.documentElement.style.setProperty("cursor", "none", "important");
        document.body?.style.setProperty("cursor", "none", "important");
        pos.current.x = e.clientX;
        pos.current.y = e.clientY;
        pos.current.targetX = e.clientX;
        pos.current.targetY = e.clientY;
        if (cursorRef.current) {
          cursorRef.current.style.opacity = "1";
          cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) rotate(${pos.current.rotation}deg)`;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("blur", hideCursor);

    // 60FPS animation loop for cursor trailing, petal fluttering, and burst physics
    let lastTime = performance.now();
    const animate = (time: number) => {
      const delta = Math.min((time - lastTime) / 16, 2);
      lastTime = time;

      const reducedMotion = isReducedMotionRef.current;

      if (reducedMotion) {
        pos.current.x = pos.current.targetX;
        pos.current.y = pos.current.targetY;
        pos.current.rotation = 0;
      } else {
        // Smooth lerp + gentle continuous rotation
        pos.current.x += (pos.current.targetX - pos.current.x) * (0.35 * delta);
        pos.current.y += (pos.current.targetY - pos.current.y) * (0.35 * delta);
        pos.current.rotation += 0.35 * delta;
      }

      if (cursorRef.current) {
        const { x, y, rotation } = pos.current;
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${rotation}deg)`;
      }

      // Animate petals: burst deceleration, floating gravity, 3D flip, and fluttering sway
      if (!reducedMotion) {
        setPetals((prev) => {
          if (prev.length === 0) return prev;
          return prev
            .map((p) => {
              const drag = p.drag || 1;
              const nextVx = p.vx * drag;
              const nextVy = p.vy * drag + (p.isBurst ? 0.045 : 0.015) * delta; // gentle gravity
              const nextPhase = p.phase + p.wobbleSpeed * delta;
              const nextFlipPhase = p.flipPhase + p.flipSpeed * delta;
              const finalDrag = p.drag && Math.abs(nextVx) + Math.abs(nextVy) < 1.0 ? 1 : drag;

              return {
                ...p,
                vx: nextVx,
                vy: nextVy,
                drag: finalDrag,
                phase: nextPhase,
                flipPhase: nextFlipPhase,
                x: p.x + (nextVx + Math.sin(nextPhase) * p.wobbleAmp) * delta,
                y: p.y + nextVy * delta,
                rot: p.rot + p.vRot * delta,
                opacity: p.opacity - (p.isBurst ? 0.013 : 0.01) * delta, // burst petals dissolve gracefully over ~1.3s
              };
            })
            .filter(
              (p) =>
                p.opacity > 0.02 &&
                p.y < window.innerHeight + 50 &&
                p.x > -50 &&
                p.x < window.innerWidth + 50
            );
        });
      }

      reqRef.current = requestAnimationFrame(animate);
    };

    reqRef.current = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      document.body?.classList.remove("has-custom-cursor");
      document.documentElement.style.removeProperty("cursor");
      document.body?.style.removeProperty("cursor");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("blur", hideCursor);
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
      motionQuery.removeEventListener?.("change", handleMotionChange);
      const tag = document.getElementById(styleId);
      if (tag) tag.remove();
    };
  }, []);

  const handleImageError = () => {
    imageErrorRef.current = true;
    setImageError(true);
    document.documentElement.classList.remove("has-custom-cursor");
    document.body?.classList.remove("has-custom-cursor");
    document.documentElement.style.removeProperty("cursor");
    document.body?.style.removeProperty("cursor");
  };

  if (!mounted || isTouch || imageError) return null;

  const isInteractive = hoverState === "interactive";
  const size = isInteractive ? 48 : 28;

  return (
    <>
      {/* Global Petal SVG Gradient Definition */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <linearGradient id="single-petal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF5F6" stopOpacity="0.95" />
            <stop offset="25%" stopColor="#FAD4D8" stopOpacity="0.9" />
            <stop offset="65%" stopColor="#E5A8AD" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#C9707B" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Falling & Bursting petals (cánh hoa đơn chiếc và cánh hoa bung tỏa khi click) */}
      {petals.map((petal) => {
        const flip = Math.cos(petal.flipPhase);
        return (
          <div
            key={petal.id}
            aria-hidden="true"
            className="pointer-events-none fixed top-0 left-0 z-[999998] will-change-transform select-none"
            style={{
              transform: `translate3d(${petal.x}px, ${petal.y}px, 0) translate(-50%, -50%) rotate(${petal.rot}deg) scale(${petal.scale * flip}, ${petal.scale})`,
              opacity: petal.opacity,
            }}
          >
            <svg
              viewBox="0 0 24 38"
              className="w-3.5 h-5 sm:w-4 sm:h-6 overflow-visible filter drop-shadow-[0_2px_4px_rgba(201,112,123,0.35)]"
            >
              <path
                d="M 12 1 C 18 10, 23 20, 20 28 C 17 35, 7 35, 4 28 C 1 20, 6 10, 12 1 Z"
                fill="url(#single-petal-grad)"
              />
              <path
                d="M 12 4 Q 13 18 12 32"
                stroke="rgba(255, 255, 255, 0.7)"
                strokeWidth="0.8"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        );
      })}

      {/* Floating lily flower cursor with tactile scale pop on click */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[999999] will-change-transform transition-[width,height,filter,opacity] duration-200 ease-out select-none"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          opacity: isVisible ? 1 : 0,
          filter: isInteractive
            ? "drop-shadow(0 0 16px rgba(201, 112, 123, 0.75))"
            : "drop-shadow(0 2px 6px rgba(58, 42, 40, 0.18))",
        }}
      >
        <div
          className={`w-full h-full transition-transform duration-150 ease-out ${
            isMouseDown ? "scale-[0.8] rotate-[-8deg]" : "scale-100 rotate-0"
          }`}
        >
          <Image
            src="/source/lily-pink.webp"
            alt=""
            width={48}
            height={48}
            unoptimized
            priority
            onError={handleImageError}
            className="h-full w-full object-contain select-none pointer-events-none"
          />
        </div>
      </div>
    </>
  );
}
