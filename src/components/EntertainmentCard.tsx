import { Play, Plus } from "lucide-react";
import type { EntertainmentItem } from "@/data/entertainment";
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
      className="tap-target group relative block w-full text-left rounded-md overflow-hidden transition-all duration-300 ease-out hover:scale-[1.08] hover:-translate-y-1 hover:z-20 active:scale-[0.97] hover:shadow-[0_16px_40px_-8px_hsl(var(--primary)/0.45)]"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-md bg-secondary ring-1 ring-white/5 transition-all duration-300 group-hover:ring-primary/50">
        <img
          src={images.poster}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          loading="lazy"
        />

        {/* Sheen sweep on hover */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

        {/* Rank badge */}
        {showRank && (
          <span className="absolute top-1.5 left-1.5 z-10 rounded bg-primary px-1.5 py-0.5 text-[10px] font-black text-primary-foreground">
            #{index + 1}
          </span>
        )}

        {/* Hover panel */}
        <div className="absolute inset-x-0 bottom-0 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-background via-background/90 to-transparent p-2.5 pt-8">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center">
              <Play className="w-3 h-3 text-background fill-background ml-[1px]" />
            </span>
            <span className="w-6 h-6 rounded-full border border-foreground/50 flex items-center justify-center">
              <Plus className="w-3 h-3 text-foreground" />
            </span>
          </div>
          <p className="text-[10px] text-foreground/70 line-clamp-1">{item.genres.slice(0, 2).join(" · ")}</p>
        </div>
      </div>

      <div className="pt-2">
        <h3 className="text-[12px] sm:text-[13px] font-semibold text-foreground/90 leading-tight line-clamp-1 transition-colors duration-200 group-hover:text-primary">
          {item.title}
        </h3>
        <div className="mt-0.5 flex items-center gap-1.5 text-[10px] text-foreground/45">
          <span className="font-semibold text-primary">★ {item.rating}</span>
          <span>{item.year}</span>
        </div>
      </div>
    </button>
  );
}
