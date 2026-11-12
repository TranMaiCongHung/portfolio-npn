import * as React from "react";
import { Project } from "../types";
import { Button } from "@/components/ui";

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {project.title}
          </h3>
          {project.featured && (
            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              Featured
            </span>
          )}
        </div>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <Button variant="outline" size="sm" className="w-full">
          Xem Chi Tiết
        </Button>
      </div>
    </div>
  );
}

