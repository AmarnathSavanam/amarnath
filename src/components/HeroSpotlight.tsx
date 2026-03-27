import { Play, Info, Star, Sparkles } from "lucide-react";
import type { EntertainmentItem, Category } from "@/data/entertainment";
import { resolveImages } from "@/data/imageRegistry";

interface HeroSpotlightProps {
  item: EntertainmentItem;
  onPlay: (item: EntertainmentItem) => void;
  onMoreInfo: (item: EntertainmentItem) => void;
}

const accentGlow: Record<Category, string> = {
  marvel: "from-marvel/25 via-transparent",
  anime: "from-anime/25 via-transparent",
  series: "from-series/25 via-transparent",
};

const orbColor: Record<Category, string> = {
  marvel: "bg-marvel/30",
  anime: "bg-anime/30",
  series: "bg-series/30",
};

export default function HeroSpotlight({ item, onPlay, onMoreInfo }: HeroSpotlightProps) {
  const images = resolveImages(item.title, item.poster, item.banner, item.category);

  return (
    <section className="relative w-full h-[60vh] sm:h-[72vh] lg:h-[82vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={images.banner} alt={item.title} className="w-full h-full object-cover scale-[1.02]" />
      </div>

      {/* Ambient glow orbs */}
      <div className={`hero-orb ${orbColor[item.category]} w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] -bottom-20 -left-20 hero-ambient`} />
      <div className={`hero-orb ${orbColor[item.category]} w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] top-20 right-10 hero-ambient`} style={{ animationDelay: '2s' }} />

      {/* Gradients */}
      <div className={`absolute inset-0 bg-gradient-to-r ${accentGlow[item.category]} to-transparent hero-ambient`} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/5" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/25 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-[8%] sm:bottom-[12%] lg:bottom-[14%] left-0 right-0 px-4 sm:px-6 lg:px-12 max-w-2xl animate-fade-in z-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold text-foreground/70 px-3 py-1.5 rounded-full border border-border/40 glass-panel">
            <Sparkles className="w-3 h-3 text-neon-purple" />
            {item.category} • {item.year}
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-[1.02] mb-3 sm:mb-4 drop-shadow-[0_4px_32px_hsl(0_0%_0%/0.5)]">
          {item.title}
        </h2>

        <div className="flex items-center gap-2.5 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-sm font-bold text-foreground">{item.rating}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
          <span className="text-xs sm:text-sm text-muted-foreground/70 font-medium">{item.genres.slice(0, 3).join(" · ")}</span>
        </div>

        <p className="text-xs sm:text-sm lg:text-base text-muted-foreground/75 line-clamp-2 mb-5 sm:mb-7 max-w-lg leading-relaxed">
          {item.description}
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onPlay(item)}
            className="group flex items-center gap-2 sm:gap-2.5 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-foreground text-background font-semibold text-xs sm:text-sm transition-all duration-300 hover:shadow-[0_0_36px_-6px_hsl(var(--foreground)/0.4)] hover:scale-[1.03] active:scale-95"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current transition-transform duration-300 group-hover:scale-110" />
            <span className="hidden sm:inline">Watch Now</span>
            <span className="sm:hidden">Play</span>
          </button>
          <button
            onClick={() => onMoreInfo(item)}
            className="group flex items-center gap-2 sm:gap-2.5 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl glass-panel font-semibold text-xs sm:text-sm text-foreground transition-all duration-300 hover:border-neon-purple/45 hover:shadow-[0_0_28px_-6px_hsl(var(--neon-purple)/0.35)] hover:scale-[1.03] active:scale-95"
          >
            <Info className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="hidden sm:inline">More Info</span>
            <span className="sm:hidden">Info</span>
          </button>
        </div>
      </div>
    </section>
  );
}
