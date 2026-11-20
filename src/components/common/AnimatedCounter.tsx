"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export interface AnimatedCounterProps {
  value?: string;
  end?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  separator?: "." | "," | "";
  className?: string;
  style?: React.CSSProperties;
}

function parseStatString(val: string): {
  isNumeric: boolean;
  prefix: string;
  end: number;
  separator: "." | "," | "";
  suffix: string;
} {
  const match = val.match(/^([^\d]*)(\d[\d.,]*)([^\d]*)$/);
  if (!match) {
    return { isNumeric: false, prefix: "", end: 0, separator: "", suffix: val };
  }
  const prefix = match[1] || "";
  const numPart = match[2];
  const suffix = match[3] || "";
  let separator: "." | "," | "" = "";
  if (numPart.includes(".")) {
    separator = ".";
  } else if (numPart.includes(",")) {
    separator = ",";
  }
  const rawNum = parseInt(numPart.replace(/[.,]/g, ""), 10);
  return {
    isNumeric: !isNaN(rawNum),
    prefix,
    end: rawNum,
    separator,
    suffix,
  };
}

function formatNumber(num: number, separator?: "." | "," | ""): string {
  if (!separator) return num.toString();
  if (separator === ".") {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function AnimatedCounter({
  value,
  end: propEnd,
  duration = 1800,
  prefix: propPrefix,
  suffix: propSuffix,
  separator: propSeparator,
  className,
  style,
}: AnimatedCounterProps) {
  let isNumeric = true;
  let targetEnd = propEnd ?? 0;
  let targetPrefix = propPrefix ?? "";
  let targetSuffix = propSuffix ?? (propEnd !== undefined ? "+" : "");
  let targetSeparator = propSeparator ?? "";

  if (value !== undefined) {
    const parsed = parseStatString(value);
    isNumeric = parsed.isNumeric;
    if (!isNumeric) {
      return <span className={className} style={style}>{value}</span>;
    }
    targetEnd = propEnd ?? parsed.end;
    targetPrefix = propPrefix ?? parsed.prefix;
    targetSuffix = propSuffix ?? parsed.suffix;
    targetSeparator = propSeparator ?? parsed.separator;
  }

  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setCount(targetEnd);
      return;
    }

    let rafId: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          const startTime = performance.now();
          const update = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic: 1 - (1 - t)^3
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(ease * targetEnd);
            setCount(current);
            if (progress < 1) {
              rafId = requestAnimationFrame(update);
            } else {
              setCount(targetEnd);
            }
          };
          rafId = requestAnimationFrame(update);
        } else {
          if (rafId) cancelAnimationFrame(rafId);
          setCount(0);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [targetEnd, duration]);

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-start tabular-nums leading-none select-none",
        className
      )}
      style={{ display: "inline-flex", alignItems: "flex-start", lineHeight: 1, ...style }}
    >
      {targetPrefix && (
        <span
          className="inline-block"
          style={{ fontSize: "0.85em", marginRight: "0.02em" }}
        >
          {targetPrefix}
        </span>
      )}
      <span>{formatNumber(count, targetSeparator)}</span>
      {targetSuffix && (
        <span
          className={targetSuffix === "+" ? "stat-plus" : "inline-block"}
          style={
            targetSuffix === "+"
              ? {
                  display: "inline-block",
                  position: "relative",
                  zIndex: 10,
                  fontSize: "0.85em",
                  lineHeight: 1,
                  verticalAlign: "top",
                  marginLeft: "-0.06em",
                  transform: "translateY(-0.04em)",
                  userSelect: "none",
                }
              : {
                  fontSize: "0.85em",
                  marginLeft: "0.02em",
                }
          }
        >
          {targetSuffix}
        </span>
      )}
    </span>
  );
}
