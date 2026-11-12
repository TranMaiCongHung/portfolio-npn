import { Project } from "../types";

export const sampleProjects: Project[] = [
  {
    id: "1",
    title: "Portfolio Clean Architecture",
    description:
      "Khung ứng dụng Next.js 15+ App Router theo chuẩn Feature-Driven & Clean Architecture.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zod"],
    featured: true,
  },
  {
    id: "2",
    title: "E-Commerce Micro-Frontend",
    description:
      "Hệ thống mua sắm trực tuyến với TanStack Query, Zustand và UI Primitives.",
    tags: ["React", "Zustand", "TanStack Query"],
    featured: true,
  },
  {
    id: "3",
    title: "Design System & UI Library",
    description:
      "Bộ thư viện UI components tuân thủ Atomic Design và Accessibility tiêu chuẩn.",
    tags: ["CVA", "Tailwind CSS", "Radix UI"],
    featured: false,
  },
];

export class ProjectService {
  static async getProjects(): Promise<Project[]> {
    return Promise.resolve(sampleProjects);
  }

  static async getProjectById(id: string): Promise<Project | undefined> {
    return Promise.resolve(sampleProjects.find((p) => p.id === id));
  }
}
