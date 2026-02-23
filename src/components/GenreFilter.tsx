import { useMemo } from "react";
import type { EntertainmentItem } from "@/data/entertainment";

interface GenreFilterProps {
  items: EntertainmentItem[];
  activeGenre: string | null;
  onGenreChange: (genre: string | null) => void;
}

export default function GenreFilter({ items, activeGenre, onGenreChange }: GenreFilterProps) {
  const genres = useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => item.genres.forEach((g) => set.add(g)));
    return Array.from(set).sort();
  }, [items]);

  if (genres.length === 0) return null;

  return (
    <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide sm:flex-wrap sm:overflow-visible pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory">
      <button onClick={() => onGenreChange(null)} className={`mood-pill shrink-0 snap-start ${!activeGenre ? "active" : ""}`}>All Moods</button>
      {genres.map((genre) => (
        <button key={genre} onClick={() => onGenreChange(activeGenre === genre ? null : genre)} className={`mood-pill shrink-0 snap-start ${activeGenre === genre ? "active" : ""}`}>{genre}</button>
      ))}
    </div>
  );
}
