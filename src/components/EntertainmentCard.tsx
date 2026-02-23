import { Play } from "lucide-react";
import type { EntertainmentItem, Category } from "@/data/entertainment";
import { resolveImages } from "@/data/imageRegistry";

interface EntertainmentCardProps {
  item: EntertainmentItem;
  onClick: (item: EntertainmentItem) => void;
  index: number;
}

const glowClasses: Record<Category, string> = {
  marvel: "group-hover:shadow-[0_0_25px_-5px_hsl(var(--marvel)/0.35)]",
  anime: "group-hover:shadow-[0_0_25px_-5px_hsl(var(--anime)/0.35)]",
  series: "group-hover:shadow-[0_0_25px_-5px_hsl(var(--series)/0.35)]",
};

const accentBorders: Record<Category, string> = {
  marvel: "group-hover:border-marvel/30",
  anime: "group-hover:border-anime/30",
  series: "group-hover:border-series/30",
};

export default function EntertainmentCard({ item, onClick, index }: EntertainmentCardProps) {
  const images = resolveImages(item.title, item.poster, item.banner, item.category);

  return (
    <button
      onClick={() => onClick(item)}
      className={`group relative overflow-hidden rounded-xl border border-border/60 bg-card/50 text-left w-full glass-card ${accentBorders[item.category]} ${glowClasses[item.category]} animate-fade-in active:scale-[0.97]`}
      style={{ animationDelay: `${index * 50}ms`, opacity: 0 }}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img src={images.poster} alt={item.title} className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110" loading="lazy" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-5 h-5 text-foreground ml-0.5 fill-foreground/80" />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/90 to-transparent p-2.5 sm:p-3 pt-10 sm:pt-14">
          <h3 className="font-display text-xs sm:text-sm font-semibold text-foreground leading-tight line-clamp-1">{item.title}</h3>
          <p className="mt-0.5 text-[9px] sm:text-[10px] text-muted-foreground line-clamp-1">{item.tagline}</p>
          <div className="mt-1 sm:mt-1.5 flex items-center gap-1.5">
            <span className="text-[9px] sm:text-[10px] font-medium text-muted-foreground">{item.year}</span>
            <span className="w-0.5 h-0.5 rounded-full bg-muted-foreground/40" />
            <span className="text-[9px] sm:text-[10px] font-medium text-amber-400/80">★ {item.rating}</span>
          </div>
        </div>
      </div>
    </button>
  );
}
