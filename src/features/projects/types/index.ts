import { z } from "zod";
import { BaseEntity } from "@/types";

export const projectSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required"),
  description: z.string(),
  tags: z.array(z.string()),
  demoUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
  featured: z.boolean().default(false),
});

export type Project = z.infer<typeof projectSchema> & Partial<BaseEntity>;

