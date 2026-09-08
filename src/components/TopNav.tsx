import { useEffect, useState } from "react";
import { Search, Bookmark, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Category, ViewMode } from "@/data/entertainment";
import { categoryLabels } from "@/data/entertainment";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TopNavProps {
  activeCategory: ViewMode;
  onCategoryChange: (cat: Category) => void;
  onLogoClick: () => void;
}

const links: Category[] = ["marvel", "series", "anime", "movies"];

export default function TopNav({ activeCategory, onCategoryChange, onLogoClick }: TopNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openSearch = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-[0_1px_0_hsl(var(--border))]" : "bg-gradient-to-b from-background/95 to-transparent"
      }`}
    >
      <nav className="flex items-center gap-4 sm:gap-8 px-4 sm:px-8 lg:px-12 h-14 sm:h-16">
        <button onClick={onLogoClick} className="shrink-0" aria-label="Home">
          <span className="font-display text-xl sm:text-2xl font-black tracking-[0.18em] text-primary uppercase transition-all duration-300 hover:drop-shadow-[0_0_14px_hsl(var(--primary)/0.7)] hover:scale-105 inline-block">
            Stream
          </span>
        </button>

        <ul className="flex items-center gap-3 sm:gap-6 overflow-x-auto scrollbar-hide">
          <li>
            <button
              onClick={onLogoClick}
              className={`nav-link text-[13px] sm:text-sm whitespace-nowrap transition-all duration-200 ${
                activeCategory === "all" ? "font-semibold text-foreground" : "text-foreground/65 hover:text-foreground"
              }`}
            >
              Home
            </button>
          </li>
          {links.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => onCategoryChange(cat)}
                className={`nav-link text-[13px] sm:text-sm whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat ? "font-semibold text-foreground" : "text-foreground/65 hover:text-foreground"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-3">
          <button
            onClick={openSearch}
            aria-label="Search"
            className="p-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-white/10 transition-colors"
          >
            <Search className="w-[18px] h-[18px]" />
          </button>
          <button
            onClick={onLogoClick}
            aria-label="My list"
            className="hidden sm:inline-flex p-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-white/10 transition-colors"
          >
            <Bookmark className="w-[18px] h-[18px]" />
          </button>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-gradient-to-br from-primary to-accent" aria-hidden />
        </div>
      </nav>
    </header>
  );
}
