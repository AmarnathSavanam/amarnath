import { Play, Info, Star, Clock, Tv } from "lucide-react";
import type { EntertainmentItem, Category } from "@/data/entertainment";
import { resolveImages } from "@/data/imageRegistry";

interface HeroSpotlightProps {
  item: EntertainmentItem;
  onPlay: (item: EntertainmentItem) => void;
  onMoreInfo: (item: EntertainmentItem) => void;
}

export default function HeroSpotlight({ item, onPlay, onMoreInfo }: HeroSpotlightProps) {
  const images = resolveImages(item.title, item.poster, item.banner, item.category);

  return (
    <section className="relative w-full h-[55vh] sm:h-[65vh] lg:h-[75vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={images.banner} alt={item.title} className="w-full h-full object-cover" />
      </div>

      {/* Gradients - AniWatch style: heavy left gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="absolute bottom-[10%] sm:bottom-[14%] left-0 right-0 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto animate-fade-in z-10">
        {/* Spotlight badge */}
        <p className="text-primary font-display font-semibold text-xs sm:text-sm mb-2 sm:mb-3">
          #1 Spotlight
        </p>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] mb-3 sm:mb-4">
          {item.title}
        </h2>

        {/* Meta row */}
        <div className="flex items-center gap-2 sm:gap-3 mb-3 flex-wrap">
          <div className="flex items-center gap-1">
            <Tv className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground capitalize">{item.category}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{item.year}</span>
          </div>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary/20 text-primary border border-primary/30">HD</span>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-primary fill-primary" />
            <span className="text-xs font-bold text-foreground">{item.rating}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground/80 line-clamp-2 sm:line-clamp-3 mb-4 sm:mb-6 max-w-lg leading-relaxed">
          {item.description}
        </p>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={() => onPlay(item)}
            className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-xs sm:text-sm transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-95"
          >
            <Play className="w-4 h-4 fill-current" />
            Watch Now
          </button>
          <button
            onClick={() => onMoreInfo(item)}
            className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-secondary/80 border border-border font-semibold text-xs sm:text-sm text-foreground transition-all duration-200 hover:bg-secondary hover:scale-[1.02] active:scale-95"
          >
            <Info className="w-4 h-4" />
            Detail
          </button>
        </div>
      </div>
    </section>
  );
}
