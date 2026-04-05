import { Play } from "lucide-react";
import type { EntertainmentItem, Category } from "@/data/entertainment";
import { resolveImages } from "@/data/imageRegistry";

interface EntertainmentCardProps {
  item: EntertainmentItem;
  onClick: (item: EntertainmentItem) => void;
  index: number;
  showRank?: boolean;
}

export default function EntertainmentCard({ item, onClick, index, showRank }: EntertainmentCardProps) {
  const images = resolveImages(item.title, item.poster, item.banner, item.category);

  return (
    <button
      onClick={() => onClick(item)}
      className="group relative overflow-hidden rounded-lg bg-card text-left w-full transition-all duration-300 hover:ring-1 hover:ring-primary/30 active:scale-[0.97] animate-fade-in"
      style={{ animationDelay: `${index * 30}ms`, opacity: 0 }}
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
        <img
          src={images.poster}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />

        {/* Play icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground ml-0.5 fill-primary-foreground" />
          </div>
        </div>

        {/* Rank number - AniWatch style */}
        {showRank && (
          <div className="absolute bottom-0 left-0 z-10">
            <span className="font-display text-4xl sm:text-5xl font-extrabold text-foreground/90 leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{ WebkitTextStroke: '1px hsl(var(--primary) / 0.3)' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        )}

        {/* Bottom info gradient */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-2.5 sm:p-3 pt-10 sm:pt-14">
          <h3 className="font-display text-[11px] sm:text-xs font-semibold text-foreground leading-tight line-clamp-2">{item.title}</h3>
          <div className="mt-1 flex items-center gap-1.5">
            <span className="text-[9px] sm:text-[10px] text-muted-foreground">{item.year}</span>
            <span className="w-0.5 h-0.5 rounded-full bg-muted-foreground/40" />
            <span className="text-[9px] sm:text-[10px] font-medium text-primary">★ {item.rating}</span>
          </div>
        </div>
      </div>
    </button>
  );
}
