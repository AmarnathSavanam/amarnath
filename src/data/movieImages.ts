/**
 * Movie image store.
 *
 * Real artwork lives in `src/assets/movies/` (bundled by Vite) — NOT in `public/`.
 * To add a real image for a movie:
 *   1. Drop the file into `src/assets/movies/`
 *   2. Import it below
 *   3. Add an entry to `movieImages` keyed by the movie's slug (lowercase, dashes)
 *
 * Any movie without an entry automatically gets a generated artwork card
 * (gradient + title), so the Movies section never shows a broken image.
 */
import inceptionPoster from "@/assets/movies/inception-poster.jpg";
import inceptionBanner from "@/assets/movies/inception-banner.jpg";
import jumanjiPoster from "@/assets/movies/Jumanji-poster.jpg";
import jumanjiBanner from "@/assets/movies/Jumanji-banner.jpg";

export interface MovieImageEntry {
  poster: string;
  banner: string;
}

export const movieImages: Record<string, MovieImageEntry> = {
    inception: { poster: inceptionPoster, banner: inceptionBanner },
  jumanji: { poster: jumanjiPoster, banner: jumanjiBanner },
};

export function slugifyMovie(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) % 100000;
  }
  return hash;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function wrapTitle(title: string, perLine: number): string[] {
  const words = title.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    if ((current + " " + word).trim().length > perLine && current) {
      lines.push(current.trim());
      current = word;
    } else {
      current = `${current} ${word}`.trim();
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 5);
}

function makeArtwork(title: string, width: number, height: number, perLine: number): string {
  const hue = hashString(title) % 360;
  const hue2 = (hue + 48) % 360;
  const lines = wrapTitle(title, perLine);
  const fontSize = Math.round(width / 12);
  const lineHeight = Math.round(fontSize * 1.18);
  const startY = height / 2 - ((lines.length - 1) * lineHeight) / 2;
  const text = lines
    .map(
      (line, i) =>
        `<text x="50%" y="${startY + i * lineHeight}" text-anchor="middle" dominant-baseline="middle" fill="#ffffff" font-family="Outfit, Figtree, Helvetica, Arial, sans-serif" font-size="${fontSize}" font-weight="700" letter-spacing="0.5">${escapeXml(
          line,
        )}</text>`,
    )
    .join("");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="hsl(${hue} 65% 22%)"/>
      <stop offset="55%" stop-color="hsl(${hue2} 55% 12%)"/>
      <stop offset="100%" stop-color="hsl(${hue} 40% 6%)"/>
    </linearGradient>
    <radialGradient id="r" cx="50%" cy="28%" r="70%">
      <stop offset="0%" stop-color="hsl(${hue} 90% 60%)" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="hsl(${hue} 90% 60%)" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#g)"/>
  <rect width="${width}" height="${height}" fill="url(#r)"/>
  ${text}
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

/** Poster (2:3) for a movie — real asset if present, generated artwork otherwise. */
export function getMoviePoster(title: string): string {
  const entry = movieImages[slugifyMovie(title)];
  if (entry) return entry.poster;
  return makeArtwork(title, 600, 900, 14);
}

/** Banner (16:9) for a movie — real asset if present, generated artwork otherwise. */
export function getMovieBanner(title: string): string {
  const entry = movieImages[slugifyMovie(title)];
  if (entry) return entry.banner;
  return makeArtwork(title, 1600, 900, 22);
}

export function getMovieImages(slug: string): MovieImageEntry | undefined {
  return movieImages[slug];
}

export default movieImages;
