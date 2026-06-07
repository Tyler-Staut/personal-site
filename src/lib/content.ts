import { getCollection, getEntry } from "astro:content";

import type { MissionCardProps } from "../data/site";

export type ProjectEntry = import("astro:content").CollectionEntry<"projects">;
export type PageEntry = import("astro:content").CollectionEntry<"pages">;
export type SingletonPageId = "about";

export async function getProjectEntries() {
  const entries = await getCollection("projects");
  return entries.sort((left, right) => left.data.order - right.data.order);
}

export async function getPageEntry(id: SingletonPageId) {
  const entry = await getEntry("pages", id);
  if (!entry) {
    throw new Error(`Missing singleton page content for ${id}`);
  }
  return entry;
}

export function toProjectCard(entry: ProjectEntry): MissionCardProps {
  return {
    title: entry.data.title,
    description: entry.data.summary,
    status: entry.data.status,
    statusTone: entry.data.statusTone,
    icon: entry.data.icon,
    href: entry.data.href,
  };
}
