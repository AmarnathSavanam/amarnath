import { Play } from "lucide-react";
import type { EntertainmentItem, Category } from "@/data/entertainment";
import { resolveImages } from "@/data/imageRegistry";

interface EntertainmentCardProps {
  item: EntertainmentItem;
  onClick: (item: EntertainmentItem) => void;
  index: number;
}

const glowClasses: Record<Category, string> = {
  marvel: "group-hover:shadow-[0_0_30px_-6px_hsl(var(--marvel)/0.4)]",
  anime: "group-hover:shadow-[0_0_30px_-6px_hsl(var(--anime)/0.4)]",
  series: "group-hover:shadow-[0_0_30px_-6px_hsl(var(--series)/0.4)]",
};

const accentBorders: Record<Category, string> = {
  marvel: "group-hover:border-marvel/35",
  anime: "group-hover:border-anime/35",
  series: "group-hover:border-series/35",
};

const categoryBadge: Record<Category, string> = {
  marvel: "bg-marvel/25 text-marvel-glow border border-marvel/20",
  anime: "bg-anime/25 text-anime-glow border border-anime/20",
  series: "bg-series/25 text-series-glow border border-series/20",
};

export default function EntertainmentCard({ item, onClick, index }: EntertainmentCardProps) {
  const images = resolveImages(item.title, item.poster, item.banner, item.category);

  return (
    <button
      onClick={() => onClick(item)}
      className={`group relative overflow-hidden rounded-xl border border-border/50 bg-card/60 text-left w-full transition-all duration-400 ${accentBorders[item.category]} ${glowClasses[item.category]} animate-fade-in active:scale-[0.97] hover:-translate-y-1`}
      style={{ animationDelay: `${index * 40}ms`, opacity: 0 }}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={images.poster}
          alt={item.title}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
          loading="lazy"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />

        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full glass-panel flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-400 shadow-[0_0_24px_-4px_hsl(var(--foreground)/0.3)]">
            <Play className="w-5 h-5 text-foreground ml-0.5 fill-foreground/80" />
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-2 right-2">
          <span className={`text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md backdrop-blur-sm ${categoryBadge[item.category]}`}>
            {item.category}
          </span>
        </div>

        {/* Info overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/90 to-transparent p-2.5 sm:p-3 pt-12 sm:pt-16">
          <h3 className="font-display text-xs sm:text-sm font-semibold text-foreground leading-tight line-clamp-2">{item.title}</h3>
          <p className="mt-0.5 text-[9px] sm:text-[10px] text-muted-foreground/70 line-clamp-1 italic">{item.tagline}</p>
          <div className="mt-1.5 flex items-center gap-1.5">
            <span className="text-[9px] sm:text-[10px] font-medium text-muted-foreground/80">{item.year}</span>
            <span className="w-0.5 h-0.5 rounded-full bg-muted-foreground/30" />
            <span className="text-[9px] sm:text-[10px] font-semibold text-amber-400/90">★ {item.rating}</span>
          </div>
        </div>
      </div>
    </button>
  );
}
