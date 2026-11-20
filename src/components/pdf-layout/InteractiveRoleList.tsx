"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

export interface RoleItem {
  num: string;
  text: string;
}

interface InteractiveRoleListProps {
  items?: RoleItem[];
  className?: string;
}

const DEFAULT_ITEMS: RoleItem[] = [
  {
    num: "01",
    text: "Supported content development for real estate marketing activities.",
  },
  {
    num: "02",
    text: "Participated in filming TikTok videos based on content directions.",
  },
  {
    num: "03",
    text: "Edited short-form videos using CapCut.",
  },
  {
    num: "04",
    text: "Assisted in coordinating content production for social media.",
  },
];

export function InteractiveRoleList({
  items = DEFAULT_ITEMS,
  className = "",
}: InteractiveRoleListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Proximity line metrics (Fisheye / wave expansion với tone hồng chủ đạo của section)
  const getLineMetrics = (index: number) => {
    if (hoveredIndex === null) {
      return {
        width: 30,
        color: "#C4727E",
        opacity: 0.55,
        numColor: "#F2C4C4",
        numWeight: 600,
        textColor: "#4A3835",
        scale: 1,
      };
    }

    const dist = Math.abs(index - hoveredIndex);

    if (dist === 0) {
      // Hovered item: nhô ra thanh ngang rõ rệt hơn, sắc hồng rực rỡ
      return {
        width: 70,
        color: "#F2C4C4",
        opacity: 1,
        numColor: "#F2C4C4",
        numWeight: 700,
        textColor: "#F2C4C4",
        scale: 1.02,
      };
    }

    if (dist === 1) {
      // Dòng liền kề: bị tác động theo hiệu ứng sóng lượn (dài hơn một chút)
      return {
        width: 50,
        color: "#A8535E",
        opacity: 0.85,
        numColor: "#A8535E",
        numWeight: 600,
        textColor: "#5A3338",
        scale: 1.01,
      };
    }

    if (dist === 2) {
      // Dòng cách 2 vị trí: tác động rất nhẹ
      return {
        width: 38,
        color: "#C4727E",
        opacity: 0.65,
        numColor: "#B5737C",
        numWeight: 600,
        textColor: "#4A3835",
        scale: 1,
      };
    }

    return {
      width: 30,
      color: "#DCA3A8",
      opacity: 0.4,
      numColor: "#C4727E",
      numWeight: 500,
      textColor: "#6B5855",
      scale: 0.99,
    };
  };

  // Proximity intermediate tick metrics (Vạch tick nhỏ màu hồng nhạt đồng bộ)
  const getTickMetrics = (k: number) => {
    if (hoveredIndex === null) {
      return {
        width: 18,
        opacity: 0.4,
        color: "#D5BEBE",
      };
    }

    // Khoảng cách từ vị trí tick (k + 0.5) tới dòng hover
    const tickDist = Math.abs(k + 0.5 - hoveredIndex);

    if (tickDist <= 0.6) {
      return {
        width: 38,
        opacity: 0.85,
        color: "#C4727E",
      };
    }

    if (tickDist <= 1.6) {
      return {
        width: 28,
        opacity: 0.6,
        color: "#DCA3A8",
      };
    }

    return {
      width: 18,
      opacity: 0.3,
      color: "#E8DFDC",
    };
  };

  return (
    <div
      onMouseLeave={() => setHoveredIndex(null)}
      className={`w-full flex flex-col py-1 ${className}`}
    >
      {items.map((item, index) => {
        const metrics = getLineMetrics(index);
        const tickMetrics = getTickMetrics(index);

        return (
          <React.Fragment key={item.num}>
            {/* Main Interactive Row - Không bao giờ xuống dòng khi hover */}
            <motion.div
              onMouseEnter={() => setHoveredIndex(index)}
              onClick={() => setHoveredIndex(index === hoveredIndex ? null : index)}
              className="group relative cursor-pointer py-2 sm:py-2.5 flex items-center select-none min-h-[42px]"
            >
              {/* Horizontal Indicator Line */}
              <motion.div
                className="h-[2px] rounded-full flex-shrink-0 mr-2.5 sm:mr-3.5"
                animate={{
                  width: metrics.width,
                  backgroundColor: metrics.color,
                  opacity: metrics.opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 26,
                  mass: 0.8,
                }}
              />

              {/* Number (01, 02...) with monospace slashed zero */}
              <motion.span
                className="font-mono text-sm sm:text-base tracking-wider tabular-nums slashed-zero mr-2.5 sm:mr-3.5 flex-shrink-0"
                animate={{
                  color: metrics.numColor,
                  fontWeight: metrics.numWeight,
                  scale: metrics.scale,
                }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 26,
                }}
              >
                {item.num}
              </motion.span>

              {/* Text Description - Khóa md:whitespace-nowrap để tuyệt đối không bị xuống dòng */}
              <motion.span
                className="text-xs sm:text-[13.5px] md:text-[14px] leading-relaxed transition-colors duration-200 md:whitespace-nowrap"
                animate={{
                  color: metrics.textColor,
                }}
              >
                {item.text}
              </motion.span>
            </motion.div>

            {/* Intermediate Tick Line (Chỉ đặt GIỮA các dòng) */}
            {index < items.length - 1 && (
              <div className="py-0.5 sm:py-1 flex items-center select-none pointer-events-none">
                <motion.div
                  className="h-[1.5px] rounded-full"
                  animate={{
                    width: tickMetrics.width,
                    backgroundColor: tickMetrics.color,
                    opacity: tickMetrics.opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 26,
                  }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
