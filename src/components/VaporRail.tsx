import { Home, Film, Tv, Sparkles, Search } from "lucide-react";
import type { ViewMode } from "@/data/entertainment";

interface VaporRailProps {
  activeCategory: ViewMode;
  onCategoryChange: (cat: ViewMode) => void;
  onLogoClick: () => void;
  onSearchClick?: () => void;
}

const items: { key: ViewMode; label: string; Icon: typeof Home }[] = [
  { key: "all", label: "Home", Icon: Home },
  { key: "marvel", label: "Marvel", Icon: Sparkles },
  { key: "series", label: "Series", Icon: Tv },
  { key: "anime", label: "Anime", Icon: Film },
];

export default function VaporRail({ activeCategory, onCategoryChange, onLogoClick, onSearchClick }: VaporRailProps) {
  return (
    <nav className="hidden md:flex fixed left-4 lg:left-6 top-4 lg:top-6 bottom-4 lg:bottom-6 w-16 lg:w-20 vapor-glass-strong rounded-3xl flex-col items-center py-6 lg:py-8 gap-8 z-50">
      <button onClick={onLogoClick} className="group relative w-10 h-10 rounded-xl vapor-gradient-bg flex items-center justify-center shadow-[0_0_24px_-4px_hsl(var(--vapor-cyan)/0.6)] transition-transform hover:scale-105">
        <div className="w-6 h-6 bg-background rounded-md flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full vapor-gradient-bg" />
        </div>
      </button>

      <div className="flex flex-col gap-3 flex-1 items-center">
        {items.map(({ key, label, Icon }) => {
          const active = activeCategory === key;
          return (
            <button
              key={key}
              onClick={() => onCategoryChange(key)}
              aria-label={label}
              className={`group relative p-3 rounded-2xl transition-all duration-200 ${
                active
                  ? "bg-primary/12 text-primary shadow-[inset_0_0_0_1px_hsl(var(--vapor-cyan)/0.35)]"
                  : "text-foreground/45 hover:text-foreground hover:bg-white/5"
              }`}
            >
              <Icon className="w-5 h-5 lg:w-[22px] lg:h-[22px]" strokeWidth={1.8} />
              {active && (
                <span className="absolute -left-[6px] top-1/2 -translate-y-1/2 w-1 h-6 rounded-full vapor-gradient-bg" />
              )}
              <span className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md vapor-glass text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </span>
            </button>
          );
        })}
      </div>

      {onSearchClick && (
        <button
          onClick={onSearchClick}
          aria-label="Search"
          className="p-3 rounded-2xl text-foreground/45 hover:text-primary hover:bg-white/5 transition-colors"
        >
          <Search className="w-5 h-5" strokeWidth={1.8} />
        </button>
      )}
    </nav>
  );
}