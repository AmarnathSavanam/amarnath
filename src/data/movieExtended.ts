import type { EntertainmentItem } from "./entertainment";
import { movieImages } from "./movieImages";

const movieTitles: Omit<EntertainmentItem, "id">[] = [
  {
    title: "Inception",
    tagline: "Your mind is the scene of the crime.",
    description:
      "A skilled thief who steals secrets from within dreams is offered a chance at redemption: instead of stealing an idea, he must plant one inside a target's subconscious across nested layers of dreaming.",
    category: "movies",
    genres: ["Sci-Fi", "Thriller", "Action"],
    year: 2010,
    rating: 8.8,
    poster: movieImages["inception"].poster,
    banner: movieImages["inception"].banner,
  },
];

export const extendedMovieData: EntertainmentItem[] = movieTitles.map((m) => ({
  ...m,
  id: `movie-${m.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`,
}));

export default extendedMovieData;
