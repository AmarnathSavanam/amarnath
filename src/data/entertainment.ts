
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
 
  // Anime
  
 
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
