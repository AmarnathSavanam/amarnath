import { Play, Info, Star } from "lucide-react";
import type { EntertainmentItem, Category } from "@/data/entertainment";
import { resolveImages } from "@/data/imageRegistry";

interface HeroSpotlightProps {
  item: EntertainmentItem;
  onPlay: (item: EntertainmentItem) => void;
  onMoreInfo: (item: EntertainmentItem) => void;
}

const accentGlow: Record<Category, string> = {
  marvel: "from-marvel/20 via-transparent",
  anime: "from-anime/20 via-transparent",
  series: "from-series/20 via-transparent",
};

export default function HeroSpotlight({ item, onPlay, onMoreInfo }: HeroSpotlightProps) {
  const images = resolveImages(item.title, item.poster, item.banner, item.category);

  return (
    <section className="relative w-full h-[65vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden bg-grain">
      <div className="absolute inset-0">
        <img src={images.banner} alt={item.title} className="w-full h-full object-cover scale-105" />
      </div>
      <div className={`absolute inset-0 bg-gradient-to-r ${accentGlow[item.category]} to-transparent hero-ambient`} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />

      <div className="absolute bottom-[10%] sm:bottom-[14%] left-0 right-0 px-4 sm:px-6 lg:px-12 max-w-2xl animate-fade-in z-10">
        <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground mb-3 px-3 py-1 rounded-full border border-border/50 glass-panel">
          {item.category} • {item.year}
        </span>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] mb-3 sm:mb-4 drop-shadow-2xl">{item.title}</h2>
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-sm font-semibold text-foreground">{item.rating}</span>
          <span className="text-xs text-muted-foreground ml-1">{item.genres.join(" · ")}</span>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground/80 line-clamp-2 mb-6 max-w-lg leading-relaxed">{item.description}</p>
        <div className="flex items-center gap-3">
          <button onClick={() => onPlay(item)} className="group flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-foreground text-background font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--foreground)/0.4)] active:scale-95">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current transition-transform duration-300 group-hover:scale-110" />
            Play Now
          </button>
          <button onClick={() => onMoreInfo(item)} className="group flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl glass-panel font-semibold text-sm sm:text-base text-foreground transition-all duration-300 hover:border-neon-purple/40 hover:shadow-[0_0_20px_-5px_hsl(var(--neon-purple)/0.3)] active:scale-95">
            <Info className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}
