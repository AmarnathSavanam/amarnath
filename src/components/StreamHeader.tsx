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

export default function Header({ activeCategory, onCategoryChange, hasSelectedItem, searchQuery, onSearchChange, onSearchClear, onLogoClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 navbar-float ${scrolled ? "scrolled" : ""}`}>
      <div className="px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 sm:gap-6 h-14 sm:h-16">
          {/* Logo */}
          <button onClick={onLogoClick} className="font-display text-xl sm:text-2xl font-bold tracking-tight shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200">
            <span className="text-primary">STREAM</span>
          </button>

          {!hasSelectedItem && (
            <>
              {/* Category nav */}
              <nav className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto scrollbar-hide">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => onCategoryChange(cat)}
                      className={`relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[11px] sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
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
