import { useMemo, useState } from "react";
import { Search, X, ArrowLeft } from "lucide-react";
import type { Category, EntertainmentItem } from "@/data/entertainment";
import { categoryLabels, getItemsByCategory } from "@/data/entertainment";
import EntertainmentCard from "./EntertainmentCard";
import Billboard from "./Billboard";

interface CategoryViewProps {
  category: Category;
  onCardClick: (item: EntertainmentItem) => void;
  onBack: () => void;
}

export default function CategoryView({ category, onCardClick, onBack }: CategoryViewProps) {
  const items = useMemo(() => getItemsByCategory(category), [category]);
  const hero = useMemo(
    () => (items.length ? items[Math.floor(Math.random() * items.length)] : null),
    [items]
  );
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter((i) => i.title.toLowerCase().includes(q));
  }, [items, query]);

  return (
    <div className="animate-fade-in">
      {hero && (
        <div className="relative -mx-4 sm:-mx-8 lg:-mx-12">
          <Billboard item={hero} eyebrow={categoryLabels[category]} onPlay={onCardClick} />
        </div>
      )}

      <section className="pt-6 sm:pt-8">
        <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 rounded bg-secondary/70 px-3 py-1.5 text-xs font-semibold text-foreground/85 hover:bg-secondary transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </button>
            <h2 className="font-display text-lg sm:text-2xl font-bold text-foreground">
              {query ? `Results for "${query}"` : categoryLabels[category]}
              <span className="ml-2 text-xs sm:text-sm font-normal text-muted-foreground">
                {filtered.length} titles
              </span>
            </h2>
          </div>

          {searchOpen ? (
            <div className="flex items-center gap-2 rounded bg-secondary/80 border border-border px-3 py-1.5 w-48 sm:w-72">
              <Search className="w-3.5 h-3.5 text-muted-foreground" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${categoryLabels[category]}…`}
                className="bg-transparent flex-1 text-xs sm:text-sm outline-none text-foreground placeholder:text-muted-foreground"
              />
              <button
                onClick={() => { setQuery(""); setSearchOpen(false); }}
                aria-label="Close search"
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="p-2 rounded text-foreground/80 hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-xl text-foreground mb-1">No results</p>
            <p className="text-sm text-muted-foreground">Try another title.</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2.5 sm:gap-4">
            {filtered.map((item, i) => (
              <EntertainmentCard key={item.id} item={item} onClick={onCardClick} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
