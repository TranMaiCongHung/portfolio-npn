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
}

let petalCounter = 0;

export function FlowerCursor() {
  const [mounted, setMounted] = useState(false);
  const [hoverState, setHoverState] = useState<"normal" | "interactive" | "text">("normal");
  const [isTouch, setIsTouch] = useState(false);
  const [petals, setPetals] = useState<Petal[]>([]);
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100, targetX: -100, targetY: -100, rotation: 0 });
  const reqRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
    // Check touch device or reduced motion
    const touchQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (touchQuery.matches || motionQuery.matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      pos.current.targetX = e.clientX;
      pos.current.targetY = e.clientY;

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, .interactive-hover, .project-card, .skill-row'
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

    // Petal pop on hover of interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], .interactive-hover, .project-card, .skill-row'
      );
      if (interactive && !interactive.hasAttribute("data-petaled")) {
        interactive.setAttribute("data-petaled", "true");
        setTimeout(() => interactive.removeAttribute("data-petaled"), 800);

        const rect = interactive.getBoundingClientRect();
        const spawnX = e.clientX;
        const spawnY = e.clientY;

        const count = 4 + Math.floor(Math.random() * 3);
        const newPetals: Petal[] = [];
        for (let i = 0; i < count; i++) {
          newPetals.push({
            id: ++petalCounter,
            x: spawnX + (Math.random() - 0.5) * 20,
            y: spawnY + (Math.random() - 0.5) * 20,
            vx: (Math.random() - 0.5) * 2.5,
            vy: -2.2 - Math.random() * 2.2,
            rot: Math.random() * 360,
            vRot: (Math.random() - 0.5) * 12,
            scale: 0.5 + Math.random() * 0.4,
            opacity: 0.9,
          });
        }
        setPetals((prev) => [...prev.slice(-15), ...newPetals]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    // Smooth animation loop for cursor trailing
    let lastTime = performance.now();
    const animate = (time: number) => {
      const delta = Math.min((time - lastTime) / 16, 2);
      lastTime = time;

      // Lerp cursor position
      pos.current.x += (pos.current.targetX - pos.current.x) * (0.18 * delta);
      pos.current.y += (pos.current.targetY - pos.current.y) * (0.18 * delta);
      pos.current.rotation += 0.4 * delta;

      if (cursorRef.current) {
        const { x, y, rotation } = pos.current;
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${rotation}deg)`;
      }

      // Update petal particles
      setPetals((prev) => {
        if (prev.length === 0) return prev;
        return prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx * delta,
            y: p.y + p.vy * delta,
            vy: p.vy + 0.05 * delta, // gentle gravity after initial upward pop
            rot: p.rot + p.vRot * delta,
            opacity: p.opacity - 0.02 * delta,
          }))
          .filter((p) => p.opacity > 0.02);
      });

      reqRef.current = requestAnimationFrame(animate);
    };

    reqRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, []);

  if (!mounted || isTouch) return null;

  const isInteractive = hoverState === "interactive";
  const size = isInteractive ? 56 : 28;

  return (
    <>
      {/* Floating flower cursor */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[10000] will-change-transform transition-[width,height,filter] duration-300 ease-out"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          filter: isInteractive
            ? "drop-shadow(0 0 16px rgba(201, 112, 123, 0.75))"
            : "drop-shadow(0 2px 6px rgba(58, 42, 40, 0.15))",
        }}
      >
        <Image
          src="/source/lily-pink.webp"
          alt=""
          width={56}
          height={56}
          priority
          className="h-full w-full object-contain select-none"
        />
      </div>

      {/* Popping petals */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
          style={{
            transform: `translate3d(${petal.x}px, ${petal.y}px, 0) translate(-50%, -50%) rotate(${petal.rot}deg) scale(${petal.scale})`,
            opacity: petal.opacity,
          }}
        >
          <div className="w-5 h-5 relative">
            <Image
              src="/source/lily-pink.webp"
              alt=""
              width={20}
              height={20}
              className="w-full h-full object-contain filter drop-shadow(0 1px 3px rgba(201,112,123,0.3))"
            />
          </div>
        </div>
      ))}
    </>
  );
}
