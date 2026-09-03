/**
 * Movie image store.
 *
 * Images live in `src/assets/movies/` (bundled by Vite) — NOT in `public/`.
 * To add a new movie image:
 *   1. Drop the file into `src/assets/movies/`
 *   2. Import it below
 *   3. Add an entry to `movieImages` keyed by the movie's slug (lowercase, dashes)
 */
import inceptionPoster from "@/assets/movies/inception-poster.jpg";
import inceptionBanner from "@/assets/movies/inception-banner.jpg";

export interface MovieImageEntry {
  poster: string;
  banner: string;
}

export const movieImages: Record<string, MovieImageEntry> = {
  inception: { poster: inceptionPoster, banner: inceptionBanner },
};

export function getMovieImages(slug: string): MovieImageEntry | undefined {
  return movieImages[slug];
}

export default movieImages;
