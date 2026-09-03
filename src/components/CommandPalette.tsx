import { useEffect, useMemo, useState } from "react";
import { Search, X, Film, Tv, Sparkles, Star, Clapperboard } from "lucide-react";
import { getAllData, type EntertainmentItem, type Category } from "@/data/entertainment";
import { resolveImages } from "@/data/imageRegistry";

interface CommandPaletteProps {
  onOpenItem: (item: EntertainmentItem) => void;
  onOpenCategory?: (cat: Category) => void;
}

const catIcon: Record<Category, typeof Sparkles> = {
  marvel: Sparkles,
  series: Tv,
  anime: Film,
  movies: Clapperboard,
};

export default function CommandPalette({ onOpenItem, onOpenCategory }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);

  const all = useMemo(() => getAllData(), []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return [...all].sort((a, b) => b.rating - a.rating).slice(0, 8);
    }
    return all
      .filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.genres.some((g) => g.toLowerCase().includes(q)) ||
          i.category.includes(q)
      )
      .slice(0, 12);
  }, [query, all]);

  // Global hotkey
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isK = e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey);
      const isSlash = e.key === "/" && !open && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName || "");
      if (isK || isSlash) {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    setActiveIdx(0);
  }, [query, open]);

  useEffect(() => {
    if (open) {
      document.documentElement.classList.add("scroll-locked");
      document.body.classList.add("scroll-locked");
    } else {
      document.documentElement.classList.remove("scroll-locked");
      document.body.classList.remove("scroll-locked");
      setQuery("");
    }
    return () => {
      document.documentElement.classList.remove("scroll-locked");
      document.body.classList.remove("scroll-locked");
    };
  }, [open]);

  const choose = (item: EntertainmentItem) => {
    setOpen(false);
    onOpenItem(item);
  };

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[activeIdx]) {
      e.preventDefault();
      choose(results[activeIdx]);
    }
  };

  return (
    <>
      {/* Floating trigger button (mobile-friendly) */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open search"
        className="fixed bottom-5 right-5 z-40 vapor-glass-strong rounded-full w-12 h-12 flex items-center justify-center text-foreground/80 hover:text-foreground hover:scale-105 active:scale-95 transition shadow-[0_10px_30px_-8px_hsl(var(--vapor-cyan)/0.5)]"
      >
        <Search className="w-4 h-4" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-10 animate-fade-in"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-background/70 backdrop-blur-xl" />

          <div
            onClick={(e) => e.stopPropagation()}
            onKeyDown={onListKey}
            className="relative w-full max-w-2xl vapor-glass-strong rounded-3xl overflow-hidden animate-fade-in-scale mt-6 sm:mt-16"
          >
            <div className="flex items-center gap-3 px-4 sm:px-5 py-3.5 border-b border-white/10">
              <Search className="w-4 h-4 text-foreground/60" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Marvel, Series, Anime… (⌘/Ctrl + K)"
                className="flex-1 bg-transparent outline-none text-sm sm:text-base text-foreground placeholder:text-foreground/40"
              />
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-foreground/60"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="touch-scroll-free max-h-[60vh] overflow-y-auto p-2">
              {results.length === 0 ? (
                <div className="text-center py-14">
                  <p className="font-display text-lg vapor-gradient-text mb-1">No matches</p>
                  <p className="text-xs text-foreground/50">Try a different title or genre.</p>
                </div>
              ) : (
                <ul className="flex flex-col gap-1">
                  {results.map((item, i) => {
                    const Icon = catIcon[item.category];
                    const img = resolveImages(item.title, item.poster, item.banner, item.category);
                    const active = i === activeIdx;
                    return (
                      <li key={item.id}>
                        <button
                          onMouseEnter={() => setActiveIdx(i)}
                          onClick={() => choose(item)}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition ${
                            active ? "bg-white/10" : "hover:bg-white/5"
                          }`}
                        >
                          <div className="w-10 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-white/5">
                            <img src={img.poster} alt="" className="w-full h-full object-cover" loading="lazy" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-display text-sm font-semibold text-foreground truncate">
                                {item.title}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mt-0.5 text-[11px] text-foreground/55">
                              <span className="inline-flex items-center gap-1">
                                <Icon className="w-3 h-3" />
                                <span className="capitalize">{item.category}</span>
                              </span>
                              <span>·</span>
                              <span>{item.year}</span>
                              <span>·</span>
                              <span className="inline-flex items-center gap-0.5 text-primary">
                                <Star className="w-3 h-3 fill-primary" /> {item.rating}
                              </span>
                            </div>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div className="px-4 py-2 border-t border-white/10 flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-foreground/40">
              <span>↑↓ Navigate · ↵ Open · esc Close</span>
              <span>⌘ / Ctrl + K</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}