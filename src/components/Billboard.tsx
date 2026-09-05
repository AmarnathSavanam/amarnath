import { Play, Info, Plus, Check } from "lucide-react";
import type { EntertainmentItem } from "@/data/entertainment";
import { resolveImages } from "@/data/imageRegistry";
import { useWatchlist } from "@/hooks/useWatchlist";

interface BillboardProps {
  item: EntertainmentItem;
  eyebrow?: string;
  onPlay: (item: EntertainmentItem) => void;
}

export default function Billboard({ item, eyebrow, onPlay }: BillboardProps) {
  const images = resolveImages(item.title, item.poster, item.banner, item.category);
  const { has, toggle } = useWatchlist();
  const saved = has(item.id);

  return (
    <section className="relative w-full h-[62vh] min-h-[380px] sm:h-[78vh] sm:min-h-[520px]">
      <img
        src={images.banner}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        width={1600}
        height={900}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative h-full flex flex-col justify-end pb-10 sm:pb-20 px-4 sm:px-8 lg:px-12 max-w-3xl">
        {eyebrow && (
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-primary mb-3">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-foreground">
          {item.title}
        </h1>
        <div className="mt-3 flex items-center gap-3 text-xs sm:text-sm text-foreground/70">
          <span className="font-semibold text-primary">★ {item.rating}</span>
          <span>{item.year}</span>
          <span className="px-1.5 py-0.5 rounded border border-border text-[10px] font-semibold">HD</span>
          <span className="hidden sm:inline">{item.genres.slice(0, 3).join(" · ")}</span>
        </div>
        <p className="mt-3 sm:mt-4 text-xs sm:text-base text-foreground/75 line-clamp-3 max-w-xl leading-relaxed">
          {item.description}
        </p>

        <div className="mt-5 sm:mt-7 flex items-center gap-3">
          <button
            onClick={() => onPlay(item)}
            className="btn-shine inline-flex items-center gap-2 rounded bg-foreground text-background px-5 sm:px-7 py-2.5 text-sm font-bold transition-all duration-200 hover:bg-foreground/85 hover:scale-105 hover:shadow-[0_8px_28px_-6px_hsl(0_0%_100%/0.35)] active:scale-95"
          >
            <Play className="w-4 h-4 fill-background" /> Play
          </button>
          <button
            onClick={() => onPlay(item)}
            className="inline-flex items-center gap-2 rounded bg-secondary/80 backdrop-blur-sm px-5 sm:px-6 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-secondary hover:scale-105 hover:shadow-[0_8px_28px_-8px_hsl(0_0%_0%/0.8)] active:scale-95"
          >
            <Info className="w-4 h-4" /> More Info
          </button>
          <button
            onClick={() => toggle(item.id)}
            aria-label={saved ? "Remove from My List" : "Add to My List"}
            className="w-10 h-10 rounded-full border border-border/80 bg-background/40 flex items-center justify-center text-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:scale-110 hover:shadow-[0_0_18px_hsl(var(--primary)/0.4)] active:scale-95"
          >
            {saved ? <Check className="w-4 h-4 text-primary" /> : <Plus className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  );
}
