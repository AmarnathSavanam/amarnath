/**
 * Trailer Registry — centralised trailer URL lookup by title slug.
 */

import { titleToSlug } from "./imageRegistry";

const trailerRegistry: Record<string, string> = {
  "chainsaw-man": "https://www.youtube.com/embed/q15CRdE5Bv0",
  "solo-leveling": "https://www.youtube.com/embed/7NJIPISvplI",
  "attack-on-titan": "https://www.youtube.com/embed/MGRm4IzK1SQ",
  "jujutsu-kaisen": "https://www.youtube.com/embed/4A_X-Dvl0ws",
  "demon-slayer": "https://www.youtube.com/embed/VQGCKyvzIM4",
  "one-punch-man": "https://www.youtube.com/embed/km2OPUctni4",
  "naruto": "https://www.youtube.com/embed/QczGoCmX-pI",
  "dragon-ball": "https://www.youtube.com/embed/dOOXEm9OVXQ",
  "fullmetal-alchemist-brotherhood": "https://www.youtube.com/embed/--IcmZkvL0Q",
  "death-note": "https://www.youtube.com/embed/NlJZ-YgAt-c",
  "spy-x-family": "https://www.youtube.com/embed/ofXigq9dRJA",
  "tokyo-ghoul": "https://www.youtube.com/embed/ETHpGSdYMF4",
  "my-hero-academia": "https://www.youtube.com/embed/D5fYOnwYkjk",
  "vinland-saga": "https://www.youtube.com/embed/BRubJOsVf_s",
  "frieren-beyond-journeys-end": "https://www.youtube.com/embed/qgZ4rMsiXEk",
  "blue-lock": "https://www.youtube.com/embed/raFr_dDhwcA",
  "dandadan": "https://www.youtube.com/embed/bGJHLrsB8_w",
  "kaiju-no-8": "https://www.youtube.com/embed/5olt0e0XPWI",
  "bleach": "https://www.youtube.com/embed/1yM1hHRhPVo",
  "dark": "https://www.youtube.com/embed/ESEUoa-mz2c",
  "12-monkeys": "https://www.youtube.com/embed/aLt6M4KMI6Y",
  "from": "https://www.youtube.com/embed/pDHqAj4eJcM",
  "breaking-bad": "https://www.youtube.com/embed/HhesaQXLuRY",
  "iron-man": "https://www.youtube.com/embed/8ugaeA-nMTc",
  "the-avengers": "https://www.youtube.com/embed/eOrNdBpGMv8",
  "avengers-infinity-war": "https://www.youtube.com/embed/6ZfuNTqbHE8",
  "avengers-endgame": "https://www.youtube.com/embed/TcMBFSGVi1c",
  "deadpool": "https://www.youtube.com/embed/ONHBaC-pfsk",
  "spider-man-into-the-spider-verse": "https://www.youtube.com/embed/g4Hbz2jLxvQ",
  "loki": "https://www.youtube.com/embed/nW948Va-l10",
  "daredevil-season-1": "https://www.youtube.com/embed/jAy6NJ_D5vU",
  "erased": "https://www.youtube.com/embed/DwmxEAWjTQQ",
};

export function resolveTrailer(title: string): string | null {
  const slug = titleToSlug(title);
  return trailerRegistry[slug] ?? null;
}
