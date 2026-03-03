/**
 * Video Registry — centralised video stream URL lookup by title slug.
 */
import { titleToSlug } from "./imageRegistry";

const videoRegistry: Record<string, string> = {
  "jujutsu-kaisen": "https://as-cdn21.top/video/0a09c8844ba8f0936c20bd791130d6b6",
};

export function resolveVideoUrl(title: string): string | null {
  const slug = titleToSlug(title);
  return videoRegistry[slug] ?? null;
}
