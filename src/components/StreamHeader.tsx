import { useState, useEffect } from "react";
import type { ViewMode } from "@/data/entertainment";
import { categoryLabels } from "@/data/entertainment";
import SearchBar from "./SearchBar";

interface HeaderProps {
  activeCategory: ViewMode;
  onCategoryChange: (category: ViewMode) => void;
  hasSelectedItem: boolean;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearchClear: () => void;
  onLogoClick: () => void;
}

const categories: ViewMode[] = ["all", "marvel", "series", "anime"];

const categoryAccent: Record<ViewMode, string> = {
  all: "bg-neon-purple/15 text-foreground shadow-[0_0_16px_-4px_hsl(var(--neon-purple)/0.4)]",
  marvel: "bg-marvel/15 text-marvel-glow shadow-[0_0_16px_-4px_hsl(var(--marvel)/0.4)]",
  series: "bg-series/15 text-series-glow shadow-[0_0_16px_-4px_hsl(var(--series)/0.4)]",
  anime: "bg-anime/15 text-anime-glow shadow-[0_0_16px_-4px_hsl(var(--anime)/0.4)]",
};

export default function Header({ activeCategory, onCategoryChange, hasSelectedItem, searchQuery, onSearchChange, onSearchClear, onLogoClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 navbar-float ${scrolled ? "scrolled" : ""}`}>
      <div className="px-4 sm:px-6 lg:px-12">
        <div className="flex items-center gap-2 sm:gap-4 h-14 sm:h-16">
          {/* Logo */}
          <button onClick={onLogoClick} className="font-display text-lg sm:text-2xl font-bold tracking-tight text-foreground shrink-0 cursor-pointer hover:opacity-80 transition-all duration-300 group">
            <span className="text-marvel group-hover:drop-shadow-[0_0_10px_hsl(var(--marvel-glow)/0.7)]">S</span>
            <span className="text-series group-hover:drop-shadow-[0_0_10px_hsl(var(--series-glow)/0.7)]">T</span>
            <span className="text-anime group-hover:drop-shadow-[0_0_10px_hsl(var(--anime-glow)/0.7)]">R</span>
            <span className="transition-colors duration-300">EAM</span>
          </button>

          {!hasSelectedItem && (
            <>
              {/* Category nav */}
              <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => onCategoryChange(cat)}
                      className={`relative px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[10px] sm:text-[13px] font-semibold transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? `${categoryAccent[cat]} border border-current/10`
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                      }`}
                    >
                      {categoryLabels[cat]}
                    </button>
                  );
                })}
              </nav>

              {/* Search */}
              <div className="ml-auto shrink-0">
                <SearchBar query={searchQuery} onChange={onSearchChange} onClear={onSearchClear} />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
