import { useMemo, useState } from "react";
import type { EntertainmentItem } from "@/data/entertainment";
import ContentRow from "./ContentRow";

interface GenreSectionProps {
  items: EntertainmentItem[];
  onCardClick: (item: EntertainmentItem) => void;
}

const MAX_GENRES = 14;

export default function GenreSection({ items, onCardClick }: GenreSectionProps) {
  const genres = useMemo(() => {
    const counts = new Map<string, number>();
    items.forEach((item) =>
      item.genres.forEach((g) => counts.set(g, (counts.get(g) ?? 0) + 1))
    );
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, MAX_GENRES)
      .map(([genre]) => genre);
  }, [items]);

  const [selected, setSelected] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      selected
        ? items
            .filter((i) => i.genres.includes(selected))
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 20)
        : [],
    [items, selected]
  );

  if (genres.length === 0) return null;

  return (
    <section className="mb-8 sm:mb-12">
      <h2 className="px-4 sm:px-8 lg:px-12 text-base sm:text-lg font-semibold text-foreground mb-3">
        Browse by Genre
      </h2>
      <div className="flex flex-wrap gap-2 px-4 sm:px-8 lg:px-12">
        {genres.map((genre) => {
          const active = selected === genre;
          return (
            <button
              key={genre}
              onClick={() => setSelected(active ? null : genre)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                active
                  ? "border-primary bg-primary text-primary-foreground shadow-[0_0_16px_hsl(var(--primary)/0.5)] scale-105"
                  : "border-border bg-muted/40 text-foreground/70 hover:border-primary/60 hover:text-primary hover:bg-primary/10"
              }`}
            >
              {genre}
            </button>
          );
        })}
      </div>
      {selected && filtered.length > 0 && (
        <div className="mt-6">
          <ContentRow title={`${selected} — Top Picks`} items={filtered} onCardClick={onCardClick} />
        </div>
      )}
    </section>
  );
}
