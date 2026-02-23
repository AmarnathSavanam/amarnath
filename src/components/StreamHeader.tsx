import { useState, useEffect } from "react";
import type { Category } from "@/data/entertainment";
import { categoryLabels } from "@/data/entertainment";
import SearchBar from "./SearchBar";

interface HeaderProps {
  activeCategory: Category | "all";
  onCategoryChange: (category: Category | "all") => void;
  hasSelectedItem: boolean;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearchClear: () => void;
  onLogoClick: () => void;
}

const categories: (Category | "all")[] = ["all", "marvel", "series", "anime"];

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
        <div className="flex items-center gap-4 h-14 sm:h-16">
          <button onClick={onLogoClick} className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground shrink-0 cursor-pointer hover:opacity-80 transition-all duration-300 group">
            <span className="text-marvel group-hover:drop-shadow-[0_0_8px_hsl(var(--marvel-glow)/0.6)]">S</span>
            <span className="text-series group-hover:drop-shadow-[0_0_8px_hsl(var(--series-glow)/0.6)]">T</span>
            <span className="text-anime group-hover:drop-shadow-[0_0_8px_hsl(var(--anime-glow)/0.6)]">R</span>
            <span className="transition-colors duration-300">EAM</span>
          </button>

          {!hasSelectedItem && (
            <>
              <nav className="flex items-center gap-1">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button key={cat} onClick={() => onCategoryChange(cat)} className={`relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${isActive ? "text-foreground bg-secondary/60 shadow-[0_0_12px_-3px_hsl(var(--neon-purple)/0.3)]" : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"}`}>
                      {cat === "all" ? "All" : categoryLabels[cat]}
                      {isActive && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-neon-purple" />}
                    </button>
                  );
                })}
              </nav>
              <div className="ml-auto">
                <SearchBar query={searchQuery} onChange={onSearchChange} onClear={onSearchClear} />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
