
import heroMarvel from "@/assets/hero-marvel.jpg";
import heroAnime from "@/assets/hero-anime.jpg";
import heroSeries from "@/assets/hero-series.jpg";
import { extendedAnimeData } from "./animeExtended";
import { extendedMarvelData } from "./marvelExtended";
import { extendedSeriesData } from "./seriesExtended";

export type Category = "marvel" | "series" | "anime";
export type ViewMode = Category | "all";

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

export const categoryLabels: Record<ViewMode, string> = {
  all: "All",
  marvel: "Marvel",
  anime: "Anime",
  series: "Series",
};

export const entertainmentData: EntertainmentItem[] = [
  // Marvel
 
  // Anime
  
 
  // Series

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
