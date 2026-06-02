import { useMemo, useState } from "react";
import { Play, Info, Star, Search, X, ArrowLeft } from "lucide-react";
import type { Category, EntertainmentItem } from "@/data/entertainment";
import { categoryLabels, getItemsByCategory } from "@/data/entertainment";
import EntertainmentCard from "./EntertainmentCard";

interface CategoryViewProps {
  category: Category;
  onCardClick: (item: EntertainmentItem) => void;
  onBack: () => void;
}

const themeClassFor: Record<Category, string> = {
  marvel: "theme-marvel",
  series: "theme-series",
  anime: "theme-anime",
};

const subtitleFor: Record<Category, string> = {
  marvel: "Multiverse archive · live feed",
  series: "Episodic stories · binge ready",
  anime: "Neon worlds · hand-drawn futures",
};

export default function CategoryView({ category, onCardClick, onBack }: CategoryViewProps) {
  const items = useMemo(() => getItemsByCategory(category), [category]);
  const hero = useMemo(
    () => [...items].sort((a, b) => b.rating - a.rating)[0] ?? null,
    [items]
  );
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter((i) => i.title.toLowerCase().includes(q));
  }, [items, query]);

  const grid = useMemo(
    () => filtered.filter((i) => i.id !== hero?.id),
    [filtered, hero]
  );

  return (
    <div className={`${themeClassFor[category]} animate-fade-in-scale`}>
      {/* Cinematic hero — transparent glass, no background photo */}
      {hero && (
        <section className="relative vapor-glass rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] mb-8 sm:mb-12">
          {/* Floating ambient orbs (only color) */}
          <div className="absolute -top-24 -left-16 w-72 h-72 rounded-full blur-3xl opacity-40 theme-gradient" />
          <div className="absolute -bottom-28 -right-10 w-80 h-80 rounded-full blur-3xl opacity-25 theme-gradient" />

          {/* Top bar inside hero */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-20 flex items-center justify-between gap-3">
            <button
              onClick={onBack}
              className="vapor-glass rounded-full pl-2.5 pr-4 py-2 flex items-center gap-2 text-xs font-semibold text-foreground/85 hover:text-foreground transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="tracking-wider uppercase">Universes</span>
            </button>

            <div className="flex items-center gap-2">
              {searchOpen ? (
                <div className="vapor-glass-strong rounded-full flex items-center pl-3 pr-1 py-1 gap-2 w-56 sm:w-72 animate-fade-in">
                  <Search className="w-3.5 h-3.5 text-foreground/60" />
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={`Search ${categoryLabels[category]}…`}
                    className="bg-transparent flex-1 text-xs sm:text-sm text-foreground placeholder:text-foreground/40 outline-none py-1"
                  />
                  <button
                    onClick={() => { setQuery(""); setSearchOpen(false); }}
                    className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center"
                    aria-label="Close search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="vapor-glass rounded-full w-9 h-9 flex items-center justify-center text-foreground/80 hover:text-foreground transition"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-8 lg:p-12 pt-20">
            <p className="text-[10px] sm:text-xs font-medium tracking-[0.35em] uppercase text-foreground/55 mb-2.5">
              {subtitleFor[category]}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight theme-gradient-text leading-[0.95] max-w-3xl">
              {categoryLabels[category]}
            </h1>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-foreground/65 max-w-xl line-clamp-2">
              {hero.description}
            </p>

            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => onCardClick(hero)}
                className="group inline-flex items-center gap-2 theme-gradient text-background font-semibold rounded-full pl-4 pr-5 py-2.5 text-xs sm:text-sm hover:scale-[1.03] active:scale-[0.98] transition shadow-[0_10px_30px_-8px_hsl(var(--theme-a)/0.5)]"
              >
                <Play className="w-3.5 h-3.5 fill-background" />
                <span className="tracking-wide">Play Featured</span>
              </button>
              <button
                onClick={() => onCardClick(hero)}
                className="inline-flex items-center gap-2 vapor-glass-strong text-foreground/90 font-semibold rounded-full pl-4 pr-5 py-2.5 text-xs sm:text-sm hover:bg-white/10 transition"
              >
                <Info className="w-3.5 h-3.5" />
                <span className="tracking-wide">More Info</span>
              </button>

              <div className="ml-auto hidden sm:flex items-center gap-3 text-xs text-foreground/60">
                <span className="inline-flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-primary fill-primary" /> {hero.rating}</span>
                <span>· {hero.year}</span>
                <span>· {items.length} titles</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Cinematic modular grid (no Netflix rows) */}
      <section>
        <div className="flex items-end justify-between mb-5 sm:mb-7">
          <div>
            <p className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-foreground/40">
              {filtered.length} titles
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight theme-gradient-text">
              {query ? `Results · "${query}"` : "Library"}
            </h2>
          </div>
        </div>

        {grid.length === 0 && query ? (
          <div className="text-center py-20 vapor-glass rounded-3xl">
            <p className="font-display text-xl theme-gradient-text mb-1">Nothing matched</p>
            <p className="text-sm text-foreground/50">Try another title.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-5">
            {grid.map((item, i) => (
              <EntertainmentCard key={item.id} item={item} onClick={onCardClick} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}