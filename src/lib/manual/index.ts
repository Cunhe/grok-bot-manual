import { PLAY_CHAPTERS } from "./chapters-play";
import { REST_CHAPTERS } from "./chapters-rest";
import { START_CHAPTERS } from "./chapters-start";
import { GROUPS } from "./catalog";
import type { Chapter, ChapterGroup } from "./types";

export const CHAPTERS: Chapter[] = [
  ...START_CHAPTERS,
  ...PLAY_CHAPTERS,
  ...REST_CHAPTERS,
];

export function getChapter(slug: string) {
  return CHAPTERS.find((c) => c.slug === slug);
}

export function getChapterIndex(slug: string) {
  return CHAPTERS.findIndex((c) => c.slug === slug);
}

export function groupedChapters() {
  return GROUPS.map((g) => ({
    ...g,
    chapters: CHAPTERS.filter((c) => c.group === g.id),
  })).filter((g) => g.chapters.length > 0);
}

export function neighbors(slug: string) {
  const i = getChapterIndex(slug);
  return {
    prev: i > 0 ? CHAPTERS[i - 1] : undefined,
    next: i >= 0 && i < CHAPTERS.length - 1 ? CHAPTERS[i + 1] : undefined,
  };
}

export type SearchHit = {
  slug: string;
  no: string;
  title: string;
  snippet: string;
};

export function searchManual(query: string): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 1) return [];
  const hits: SearchHit[] = [];
  for (const ch of CHAPTERS) {
    const hay = `${ch.no} ${ch.title} ${ch.summary} ${ch.body}`.toLowerCase();
    if (!hay.includes(q)) continue;
    const idx = hay.indexOf(q);
    const raw = `${ch.summary} ${ch.body}`.replace(/[#>*\`|:\-]/g, " ");
    const start = Math.max(0, idx - 24);
    const snippet = raw.slice(start, start + 90).replace(/\s+/g, " ").trim();
    hits.push({ slug: ch.slug, no: ch.no, title: ch.title, snippet });
  }
  return hits.slice(0, 12);
}

export type { Chapter, ChapterGroup };
export { GROUPS };
