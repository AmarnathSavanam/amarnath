
/**
 * Movie image store.
 *
 * Real artwork lives in `src/assets/movies/` (bundled by Vite).
 *
 * To add a real image:
 *   1. Drop the file into `src/assets/movies/`
 *   2. Import it below
 *   3. Add an entry to `movieImages` using the movie slug
 */

import inceptionPoster from "@/assets/movies/inception-poster.jpg";
import inceptionBanner from "@/assets/movies/inception-banner.jpg";

import jumanjiPoster from "@/assets/movies/Jumanji-poster.jpg";
import jumanjiBanner from "@/assets/movies/Jumanji-banner.jpg";

import h1Poster from "@/assets/movies/h1-poster.jpg";
import h1Banner from "@/assets/movies/h1-banner.jpg";

import h2Poster from "@/assets/movies/h2-poster.jpg";
import h2Banner from "@/assets/movies/h2-banner.jpg";

import h3Poster from "@/assets/movies/h3-poster.jpg";
import h3Banner from "@/assets/movies/h3-banner.jpg";

import h4Poster from "@/assets/movies/h4-poster.jpg";
import h4Banner from "@/assets/movies/h4-banner.jpg";

import h5Poster from "@/assets/movies/h5-poster.jpg";
import h5Banner from "@/assets/movies/h5-banner.jpg";

import h6Poster from "@/assets/movies/h6-poster.jpg";
import h6Banner from "@/assets/movies/h6-banner.jpg";

import h7Poster from "@/assets/movies/h7-poster.jpg";
import h7Banner from "@/assets/movies/h7-banner.jpg";

import h8Poster from "@/assets/movies/h8-poster.jpg";
import h8Banner from "@/assets/movies/h8-banner.jpg";

import k1Poster from "@/assets/movies/k1-poster.jpg";
import k1Banner from "@/assets/movies/k1-banner.jpg";

import k2Poster from "@/assets/movies/k2-poster.jpg";
import k2Banner from "@/assets/movies/k2-banner.jpg";

import k3Poster from "@/assets/movies/k3-poster.jpg";
import k3Banner from "@/assets/movies/k3-banner.jpg";

import k4Poster from "@/assets/movies/k4-poster.jpg";
import k4Banner from "@/assets/movies/k4-banner.jpg";

// J1 - J7
import j1Poster from "@/assets/movies/j1-poster.jpg";
import j1Banner from "@/assets/movies/j1-banner.jpg";
import j2Poster from "@/assets/movies/j2-poster.jpg";
import j2Banner from "@/assets/movies/j2-banner.jpg";
import j3Poster from "@/assets/movies/j3-poster.jpg";
import j3Banner from "@/assets/movies/j3-banner.jpg";
import j4Poster from "@/assets/movies/j4-poster.jpg";
import j4Banner from "@/assets/movies/j4-banner.jpg";
import j5Poster from "@/assets/movies/j5-poster.jpg";
import j5Banner from "@/assets/movies/j5-banner.jpg";
import j6Poster from "@/assets/movies/j6-poster.jpg";
import j6Banner from "@/assets/movies/j6-banner.jpg";
import j7Poster from "@/assets/movies/j7-poster.jpg";
import j7Banner from "@/assets/movies/j7-banner.jpg";

// R1 - R3
import r1Poster from "@/assets/movies/r1-poster.jpg";
import r1Banner from "@/assets/movies/r1-banner.jpg";
import r2Poster from "@/assets/movies/r2-poster.jpg";
import r2Banner from "@/assets/movies/r2-banner.jpg";
import r3Poster from "@/assets/movies/r3-poster.jpg";
import r3Banner from "@/assets/movies/r3-banner.jpg";

// A1 - A3
import a1Poster from "@/assets/movies/a1-poster.jpg";
import a1Banner from "@/assets/movies/a1-banner.jpg";
import a2Poster from "@/assets/movies/a2-poster.jpg";
import a2Banner from "@/assets/movies/a2-banner.jpg";
import a3Poster from "@/assets/movies/a3-poster.jpg";
import a3Banner from "@/assets/movies/a3-banner.jpg";

// M1 - M4
import m1Poster from "@/assets/movies/m1-poster.jpg";
import m1Banner from "@/assets/movies/m1-banner.jpg";
import m2Poster from "@/assets/movies/m2-poster.jpg";
import m2Banner from "@/assets/movies/m2-banner.jpg";
import m3Poster from "@/assets/movies/m3-poster.jpg";
import m3Banner from "@/assets/movies/m3-banner.jpg";
import m4Poster from "@/assets/movies/m4-poster.jpg";
import m4Banner from "@/assets/movies/m4-banner.jpg";

// P1 - P5
import p1Poster from "@/assets/movies/p1-poster.jpg";
import p1Banner from "@/assets/movies/p1-banner.jpg";
import p2Poster from "@/assets/movies/p2-poster.jpg";
import p2Banner from "@/assets/movies/p2-banner.jpg";
import p3Poster from "@/assets/movies/p3-poster.jpg";
import p3Banner from "@/assets/movies/p3-banner.jpg";
import p4Poster from "@/assets/movies/p4-poster.jpg";
import p4Banner from "@/assets/movies/p4-banner.jpg";
import p5Poster from "@/assets/movies/p5-poster.jpg";
import p5Banner from "@/assets/movies/p5-banner.jpg";


export interface MovieImageEntry {
  poster: string;
  banner: string;
}

export const movieImages: Record<string, MovieImageEntry> = {
  inception: {
    poster: inceptionPoster,
    banner: inceptionBanner,
  },

  jumanji: {
    poster: jumanjiPoster,
    banner: jumanjiBanner,
  },

  // Harry Potter and the Philosopher's Stone
  "harry-potter-and-the-philosopher-s-stone": {
  poster: h1Poster,
  banner: h1Banner,
},

"harry-potter-and-the-chamber-of-secrets": {
  poster: h2Poster,
  banner: h2Banner,
},

"harry-potter-and-the-prisoner-of-azkaban": {
  poster: h3Poster,
  banner: h3Banner,
},

"harry-potter-and-the-goblet-of-fire": {
  poster: h4Poster,
  banner: h4Banner,
},

"harry-potter-and-the-order-of-the-phoenix": {
  poster: h5Poster,
  banner: h5Banner,
},

"harry-potter-and-the-half-blood-prince": {
  poster: h6Poster,
  banner: h6Banner,
},

"harry-potter-and-the-deathly-hallows-part-1": {
  poster: h7Poster,
  banner: h7Banner,
},

"harry-potter-and-the-deathly-hallows-part-2": {
  poster: h8Poster,
  banner: h8Banner,
},
  "Kung-Fu-Panda": {
  poster: k1Poster,
  banner: k1Banner,
},

"Kung-Fu-Panda-2": {
  poster: k2Poster,
  banner: k2Banner,
},

"Kung-Fu-Panda-3": {
  poster: k3Poster,
  banner: k3Banner,
},

"Kung-Fu-Panda-4": {
  poster: k4Poster,
  banner: k4Banner,
},
  "pirates-of-the-caribbean-the-curse-of-the-black-pearl": {
  poster: p1Poster,
  banner: p1Banner,
},

"pirates-of-the-caribbean-dead-mans-chest": {
  poster: p2Poster,
  banner: p2Banner,
},

"pirates-of-the-caribbean-at-worlds-end": {
  poster: p3Poster,
  banner: p3Banner,
},

"pirates-of-the-caribbean-on-stranger-tides": {
  poster: p4Poster,
  banner: p4Banner,
},

"pirates-of-the-caribbean-dead-men-tell-no-tales": {
  poster: p5Poster,
  banner: p5Banner,
},

"rush-hour": {
  poster: r1Poster,
  banner: r1Banner,
},

"rush-hour-2": {
  poster: r2Poster,
  banner: r2Banner,
},

"rush-hour-3": {
  poster: r3Poster,
  banner: r3Banner,
},

"men-in-black": {
  poster: m1Poster,
  banner: m1Banner,
},

"men-in-black-ii": {
  poster: m2Poster,
  banner: m2Banner,
},

"men-in-black-3": {
  poster: m3Poster,
  banner: m3Banner,
},

"men-in-black-international": {
  poster: m4Poster,
  banner: m4Banner,
},

"avatar": {
  poster: a1Poster,
  banner: a1Banner,
},

"avatar-the-way-of-water": {
  poster: a2Poster,
  banner: a2Banner,
},

"avatar-fire-and-ash": {
  poster: a3Poster,
  banner: a3Banner,
},

"jurassic-park": {
  poster: j1Poster,
  banner: j1Banner,
},

"the-lost-world-jurassic-park": {
  poster: j2Poster,
  banner: j2Banner,
},

"jurassic-park-iii": {
  poster: j3Poster,
  banner: j3Banner,
},

"jurassic-world": {
  poster: j4Poster,
  banner: j4Banner,
},

"jurassic-world-fallen-kingdom": {
  poster: j5Poster,
  banner: j5Banner,
},

"jurassic-world-dominion": {
  poster: j6Poster,
  banner: j6Banner,
},

"jurassic-world-rebirth": {
  poster: j7Poster,
  banner: j7Banner,
},
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

  if (current) {
    lines.push(current);
  }

  return lines.slice(0, 5);
}

function makeArtwork(
  title: string,
  width: number,
  height: number,
  perLine: number,
): string {
  const hue = hashString(title) % 360;
  const hue2 = (hue + 48) % 360;

  const lines = wrapTitle(title, perLine);

  const fontSize = Math.round(width / 12);
  const lineHeight = Math.round(fontSize * 1.18);

  const startY =
    height / 2 - ((lines.length - 1) * lineHeight) / 2;

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

/** Poster (2:3) for a movie. */
export function getMoviePoster(title: string): string {
  const entry = movieImages[slugifyMovie(title)];

  if (entry) {
    return entry.poster;
  }

  return makeArtwork(title, 600, 900, 14);
}

/** Banner (16:9) for a movie. */
export function getMovieBanner(title: string): string {
  const entry = movieImages[slugifyMovie(title)];

  if (entry) {
    return entry.banner;
  }

  return makeArtwork(title, 1600, 900, 22);
}

export function getMovieImages(
  slug: string,
): MovieImageEntry | undefined {
  return movieImages[slug];
}

export default movieImages;

