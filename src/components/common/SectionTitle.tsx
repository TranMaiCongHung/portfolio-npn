import * as React from "react";
import { cn } from "@/lib";

export interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export function SectionTitle({
  title,
  subtitle,
  align = "left",
  className,
  ...props
}: SectionTitleProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }[align];

  return (
    <div className={cn("mb-8 max-w-2xl", alignClass, className)} {...props}>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
