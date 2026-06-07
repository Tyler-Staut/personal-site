import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.string(),
    statusTone: z.enum(["green", "blue", "gold"]),
    icon: z.enum(["satellite", "rocket", "star"]),
    order: z.number(),
    href: z.string().url(),
    coverImage: z.string().default("/assets/fujisan.jpg"),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    eyebrow: z.string(),
    image: z.string().default("/assets/fujisan.jpg"),
    highlights: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        }),
      )
      .default([]),
  }),
});

export const collections = {
  projects,
  pages,
};
