import { useState, useEffect } from "react";
import type { ViewMode } from "@/data/entertainment";
import { categoryLabels } from "@/data/entertainment";
import SearchBar from "./SearchBar";

interface TopBarProps {
  activeCategory: ViewMode;
  onCategoryChange: (cat: ViewMode) => void;
  searchQuery: string;
  onSearchChange: (v: string) => void;
  onSearchClear: () => void;
  onLogoClick: () => void;
  compact?: boolean;
}

const cats: ViewMode[] = ["all", "marvel", "series", "anime"];

export default function TopBar({ activeCategory, onCategoryChange, searchQuery, onSearchChange, onSearchClear, onLogoClick, compact }: TopBarProps) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 -mx-4 sm:-mx-6 lg:mx-0 px-3 sm:px-6 lg:px-0 py-2.5 sm:py-3 transition-all duration-300 ${
        scrolled ? "vapor-glass-strong lg:vapor-glass-strong" : "bg-transparent"
      } ${compact ? "" : ""}`}
    >
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Mobile logo only */}
        <button
          onClick={onLogoClick}
          className="md:hidden font-display text-base font-extrabold tracking-tight vapor-gradient-text shrink-0"
        >
          STRM
        </button>

        {/* Category pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide flex-1 min-w-0">
          {cats.map((c) => {
            const active = activeCategory === c;
            return (
              <button
                key={c}
                onClick={() => onCategoryChange(c)}
                className={`shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl text-[11px] sm:text-sm font-semibold tracking-wide transition-all duration-200 ${
                  active
                    ? "bg-primary/12 text-primary border border-primary/30 shadow-[0_0_24px_-8px_hsl(var(--vapor-cyan)/0.5)]"
                    : "bg-white/[0.03] text-foreground/55 border border-white/5 hover:bg-white/[0.07] hover:text-foreground"
                }`}
              >
                {categoryLabels[c]}
              </button>
            );
          })}
        </div>

        <div className="shrink-0 relative group">
          <div className="absolute inset-0 rounded-2xl vapor-gradient-bg blur-md opacity-0 group-hover:opacity-25 transition-opacity" />
          <div className="relative">
            <SearchBar query={searchQuery} onChange={onSearchChange} onClear={onSearchClear} />
          </div>
        </div>
      </div>
    </header>
  );
}