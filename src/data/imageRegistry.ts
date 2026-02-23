/**
 * Image Registry — centralised image lookup for any title.
 */

interface ImageEntry {
  poster?: string;
  banner?: string;
}
const imageRegistry: Record<string, ImageEntry> = {
  // Add entries here as needed
};

/** Convert a title string to a slug key */
export function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/** Simple deterministic hash from string → number */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

/** Category accent hues */
const categoryHues: Record<string, number> = {
  marvel: 0,
  anime: 270,
  series: 210,
};

function generatePlaceholder(
  title: string,
  category: string,
  aspect: "poster" | "banner"
): string {
  const hash = hashString(title);
  const baseHue = categoryHues[category] ?? 200;

  const hue1 = (baseHue + (hash % 40) - 20 + 360) % 360;
  const hue2 = (hue1 + 30 + (hash % 20)) % 360;
  const sat1 = 35 + (hash % 25);
  const sat2 = 25 + ((hash >> 4) % 20);
  const light1 = 15 + ((hash >> 8) % 12);
  const light2 = 22 + ((hash >> 12) % 10);

  const patternSeed = (hash >> 6) % 5;
  const patternOpacity = 0.06 + ((hash % 10) / 100);

  const w = aspect === "poster" ? 400 : 1200;
  const h = aspect === "poster" ? 600 : 400;

  const words = title.split(/\s+/).filter(Boolean);
  const initials = words.length >= 2
    ? (words[0][0] + words[1][0]).toUpperCase()
    : title.substring(0, 2).toUpperCase();

  const fontSize = aspect === "poster" ? 72 : 56;

  let patternMarkup = "";
  switch (patternSeed) {
    case 0:
      patternMarkup = `<defs><pattern id="p" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(${30 + (hash % 30)})"><line x1="0" y1="0" x2="0" y2="20" stroke="hsl(${hue1},${sat1}%,${light1 + 30}%)" stroke-width="1" opacity="${patternOpacity}"/></pattern></defs><rect width="${w}" height="${h}" fill="url(#p)"/>`;
      break;
    case 1:
      patternMarkup = `<defs><pattern id="p" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="8" fill="none" stroke="hsl(${hue2},${sat2}%,${light2 + 25}%)" stroke-width="0.8" opacity="${patternOpacity}"/></pattern></defs><rect width="${w}" height="${h}" fill="url(#p)"/>`;
      break;
    case 2:
      patternMarkup = `<defs><pattern id="p" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="12" cy="12" r="2" fill="hsl(${hue1},${sat1}%,${light1 + 35}%)" opacity="${patternOpacity}"/></pattern></defs><rect width="${w}" height="${h}" fill="url(#p)"/>`;
      break;
    case 3:
      patternMarkup = `<defs><pattern id="p" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M15 10v10M10 15h10" stroke="hsl(${hue2},${sat2}%,${light2 + 28}%)" stroke-width="1" opacity="${patternOpacity}"/></pattern></defs><rect width="${w}" height="${h}" fill="url(#p)"/>`;
      break;
    default:
      patternMarkup = `<defs><pattern id="p" width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect x="12" y="12" width="4" height="4" fill="hsl(${hue1},${sat1}%,${light1 + 30}%)" opacity="${patternOpacity}"/></pattern></defs><rect width="${w}" height="${h}" fill="url(#p)"/>`;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="hsl(${hue1},${sat1}%,${light1}%)"/>
        <stop offset="100%" stop-color="hsl(${hue2},${sat2}%,${light2}%)"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    ${patternMarkup}
    <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
          font-family="'Space Grotesk',sans-serif" font-size="${fontSize}" font-weight="700"
          fill="hsl(${hue1},${sat1 + 10}%,${light1 + 45}%)" opacity="0.35">
      ${initials}
    </text>
  </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const placeholderCache: Record<string, { poster: string; banner: string }> = {};

export function resolveImages(
  title: string,
  fallbackPoster: string,
  fallbackBanner: string,
  category: string = "anime"
) {
  const slug = titleToSlug(title);
  const entry = imageRegistry[slug];

  if (entry?.poster && entry?.banner) {
    return { poster: entry.poster, banner: entry.banner };
  }

  const isRealPoster = fallbackPoster && !fallbackPoster.includes("placeholder");
  const isRealBanner = fallbackBanner && !fallbackBanner.includes("placeholder");

  if (!placeholderCache[slug]) {
    placeholderCache[slug] = {
      poster: generatePlaceholder(title, category, "poster"),
      banner: generatePlaceholder(title, category, "banner"),
    };
  }

  return {
    poster: entry?.poster || (isRealPoster ? fallbackPoster : placeholderCache[slug].poster),
    banner: entry?.banner || (isRealBanner ? fallbackBanner : placeholderCache[slug].banner),
  };
}

export default imageRegistry;
