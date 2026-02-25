import posterMarvel1 from "@/assets/poster-marvel-1.jpg";
import posterMarvel2 from "@/assets/poster-marvel-2.jpg";
import posterMarvel3 from "@/assets/poster-marvel-3.jpg";
import posterMarvel4 from "@/assets/poster-marvel-4.jpg";
import posterAnime1 from "@/assets/poster-anime-1.jpg";
import posterAnime2 from "@/assets/poster-anime-2.jpg";
import posterAnime3 from "@/assets/poster-anime-3.jpg";
import posterAnime4 from "@/assets/poster-anime-4.jpg";
import posterSeries1 from "@/assets/poster-series-1.jpg";
import posterSeries2 from "@/assets/poster-series-2.jpg";
import posterSeries3 from "@/assets/poster-series-3.jpg";
import posterSeries4 from "@/assets/poster-series-4.jpg";
import heroMarvel from "@/assets/hero-marvel.jpg";
import heroAnime from "@/assets/hero-anime.jpg";
import heroSeries from "@/assets/hero-series.jpg";
import { extendedAnimeData } from "./animeExtended";
import { extendedMarvelData } from "./marvelExtended";
import { extendedSeriesData } from "./seriesExtended";

export type Category = "marvel" | "series" | "anime";

export interface EntertainmentItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: Category;
  genres: string[];
  year: number;
  rating: number;
  poster: string;
  banner: string;
}

export const heroImages: Record<Category, string> = {
  marvel: heroMarvel,
  anime: heroAnime,
  series: heroSeries,
};

export const categoryLabels: Record<Category, string> = {
  marvel: "Marvel",
  anime: "Anime",
  series: "Series",
};

export const entertainmentData: EntertainmentItem[] = [
  // Marvel

  {
    id: "m2",
    title: "Crimson Guardian",
    tagline: "The shield that never breaks",
    description: "A legendary warrior forges an unbreakable shield from a fallen star, swearing to protect the realm from an ancient evil awakening beneath the earth.",
    category: "marvel",
    genres: ["Action", "Fantasy"],
    year: 2023,
    rating: 9.1,
    poster: posterMarvel2,
    banner: heroMarvel,
  },
  {
    id: "m3",
    title: "Void Walker",
    tagline: "Between worlds, beyond fear",
    description: "A mysterious figure with the ability to traverse dimensions discovers a conspiracy that threatens the fabric of reality itself.",
    category: "marvel",
    genres: ["Sci-Fi", "Thriller"],
    year: 2024,
    rating: 8.4,
    poster: posterMarvel3,
    banner: heroMarvel,
  },
  {
    id: "m4",
    title: "Omega Squadron",
    tagline: "United we stand, divided we fall",
    description: "Earth's mightiest heroes assemble for the final time as an extinction-level event threatens to erase all life.",
    category: "marvel",
    genres: ["Action", "Adventure"],
    year: 2025,
    rating: 9.3,
    poster: posterMarvel4,
    banner: heroMarvel,
  },
  // Anime
  {
    id: "a1",
    title: "Naruto",
    tagline: "Believe it!",
    description: "A young ninja outcast dreams of becoming the leader of his village, carrying a powerful beast sealed within him.",
    category: "anime",
    genres: ["Action", "Adventure"],
    year: 2002,
    rating: 8.6,
    poster: posterAnime2,
    banner: heroAnime,
  },
  {
    id: "a2",
    title: "Dragon Ball",
    tagline: "Push beyond your limits",
    description: "A martial artist with extraordinary power protects Earth from increasingly powerful threats across the universe.",
    category: "anime",
    genres: ["Action", "Adventure"],
    year: 1986,
    rating: 8.7,
    poster: posterAnime1,
    banner: heroAnime,
  },
  {
    id: "a3",
    title: "Bleach",
  tagline: "Protect the living, guide the souls",
  description: "A teenager with the ability to see spirits becomes a Soul Reaper, defending the living world from Hollows while uncovering the hidden conflicts of the spirit realm.",
  category: "anime",
  genres: ["Action", "Supernatural", "Adventure"],
  year: 2004,
  rating: 8.2,
  poster: posterAnime3,
  banner: heroAnime
},
  {
    id: "a4",
  title: "Solo Leveling",
  tagline: "Arise, and hunt beyond limits",
  description: "The world’s weakest hunter gains a mysterious system that lets him level up alone, transforming him into humanity’s most formidable weapon against monstrous threats.",
  category: "anime",
  genres: ["Action", "Fantasy", "Adventure"],
  year: 2024,
  rating: 8.6,
  poster: posterAnime3,
  banner: heroAnime
},
 
  // Series
  {
    id: "s1",
    title: "Dark",
    tagline: "Time is a closed loop. Escape is an illusion.",
    description: "In the small town of Winden, the disappearance of a child unravels a multi-generational conspiracy bound by time itself.",
    category: "series",
    genres: ["Sci-Fi", "Mystery", "Psychological Thriller"],
    year: 2017,
    rating: 9.0,
    poster: posterSeries1,
    banner: heroSeries,
  },
  {
    id: "s2",
    title: "12 Monkeys",
    tagline: "To save the future, rewrite the past.",
    description: "A time traveler from a post-apocalyptic future races across fractured timelines to stop the release of a virus that will end civilization.",
    category: "series",
    genres: ["Sci-Fi", "Thriller", "Mystery"],
    year: 2015,
    rating: 8.7,
    poster: posterSeries2,
    banner: heroSeries,
  },
  {
    id: "s3",
    title: "From",
    tagline: "You can enter. You can't leave.",
    description: "A mysterious town traps everyone who arrives, forcing strangers to build a fragile society while nightfall unleashes terrifying creatures.",
    category: "series",
    genres: ["Horror", "Mystery", "Sci-Fi"],
    year: 2022,
    rating: 8.1,
    poster: posterSeries3,
    banner: heroSeries,
  },
  {
    id: "s4",
    title: "Breaking Bad",
    tagline: "Power is a choice. Consequences are inevitable.",
    description: "After a terminal diagnosis, a high school chemistry teacher partners with a former student to build a meth empire.",
    category: "series",
    genres: ["Crime", "Drama", "Thriller"],
    year: 2008,
    rating: 9.5,
    poster: posterSeries4,
    banner: heroSeries,
  },
];

export function getAllData(): EntertainmentItem[] {
  return [...entertainmentData, ...extendedAnimeData, ...extendedMarvelData, ...extendedSeriesData];
}

export function getItemsByCategory(category: Category): EntertainmentItem[] {
  return getAllData().filter((item) => item.category === category);
}

export function getRecommendations(item: EntertainmentItem, limit = 4): EntertainmentItem[] {
  const others = getAllData().filter((i) => i.id !== item.id);
  const scored = others.map((i) => {
    let score = 0;
    if (i.category === item.category) score += 2;
    const sharedGenres = i.genres.filter((g) => item.genres.includes(g)).length;
    score += sharedGenres;
    return { item: i, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.item);
}
