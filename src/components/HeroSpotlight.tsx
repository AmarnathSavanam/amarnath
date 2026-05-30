import { Play, Info, Star } from "lucide-react";
import type { EntertainmentItem } from "@/data/entertainment";
import { resolveImages } from "@/data/imageRegistry";

interface HeroSpotlightProps {
  item: EntertainmentItem;
  onPlay: (item: EntertainmentItem) => void;
  onMoreInfo: (item: EntertainmentItem) => void;
  resumeItem?: EntertainmentItem | null;
  sideItem?: EntertainmentItem | null;
  onSideClick?: (item: EntertainmentItem) => void;
}

export default function HeroSpotlight({ item, onPlay, onMoreInfo, resumeItem, sideItem, onSideClick }: HeroSpotlightProps) {
  const images = resolveImages(item.title, item.poster, item.banner, item.category);
  const sideImages = sideItem ? resolveImages(sideItem.title, sideItem.poster, sideItem.banner, sideItem.category) : null;
  const resumeImages = resumeItem ? resolveImages(resumeItem.title, resumeItem.poster, resumeItem.banner, resumeItem.category) : null;
  const titleWords = item.title.split(" ");
  const lastWord = titleWords.length > 1 ? titleWords.pop()! : "";
  const firstWords = titleWords.join(" ");

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 animate-fade-in">
      {/* Main spotlight 8 cols */}
      <div className="lg:col-span-8 relative rounded-[1.75rem] sm:rounded-[2.5rem] border border-white/10 overflow-hidden group shadow-2xl min-h-[360px] sm:min-h-[440px] lg:min-h-[520px]">
        <img
          src={images.banner}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/20 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-10 lg:p-14">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <span className="px-2.5 py-1 vapor-gradient-bg text-background text-[10px] font-black uppercase rounded-md tracking-wider">#1 Trending</span>
            <span className="text-[var(--vapor-ice)] text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase" style={{ color: "hsl(var(--vapor-ice))" }}>
              Spotlight Selection
            </span>
          </div>

          <h1 className="font-display font-black tracking-tight leading-[0.9] mb-4 sm:mb-6 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl">
            {firstWords}{firstWords && lastWord ? " " : ""}
            {lastWord && <span className="vapor-gradient-text drop-shadow-[0_0_40px_hsl(var(--vapor-lavender)/0.4)]">{lastWord}</span>}
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-5 sm:mb-7 text-xs sm:text-sm text-foreground/60">
            <div className="flex items-center gap-1.5 font-semibold text-foreground/85">
              <Star className="w-4 h-4 text-primary fill-primary" />
              {item.rating} Score
            </div>
            <span className="capitalize">{item.year} • {item.category}</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary/15 text-primary border border-primary/30">HD</span>
          </div>

          <p className="hidden sm:block text-sm text-foreground/70 max-w-xl leading-relaxed mb-6 sm:mb-8 line-clamp-2">
            {item.description}
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onPlay(item)}
              className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl bg-foreground text-background font-bold text-xs sm:text-sm transition-all duration-200 hover:bg-primary hover:shadow-[0_0_30px_hsl(var(--vapor-cyan)/0.5)] active:scale-95"
            >
              <Play className="w-4 h-4 fill-current" />
              Watch Now
            </button>
            <button
              onClick={() => onMoreInfo(item)}
              className="flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl vapor-glass-strong text-foreground font-bold text-xs sm:text-sm hover:bg-white/10 transition-all active:scale-95"
            >
              <Info className="w-4 h-4" />
              Details
            </button>
          </div>
        </div>
      </div>

      {/* Side stack 4 cols */}
      <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
        {sideItem && sideImages && (
          <button
            onClick={() => onSideClick?.(sideItem)}
            className="group relative flex-1 rounded-[1.5rem] lg:rounded-[2rem] border border-white/10 p-6 sm:p-7 text-left overflow-hidden vapor-glass min-h-[170px] sm:min-h-[200px] lg:min-h-0"
          >
            <img src={sideImages.banner} alt={sideItem.title} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--vapor-indigo)/0.35)] via-background/40 to-transparent" />
            <div className="relative">
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-2" style={{ color: "hsl(var(--vapor-ice))" }}>
                Editor's Pick
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 leading-tight line-clamp-2">{sideItem.title}</h3>
              <p className="text-xs sm:text-sm text-foreground/55 line-clamp-2 mb-4">{sideItem.tagline}</p>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-primary group-hover:gap-3 transition-all">
                ENTER HUB →
              </div>
            </div>
          </button>
        )}

        {resumeItem && resumeImages && (
          <button
            onClick={() => onSideClick?.(resumeItem)}
            className="relative rounded-[1.5rem] lg:rounded-[2rem] border border-white/10 p-6 sm:p-7 text-left vapor-glass flex flex-col justify-between min-h-[170px] sm:min-h-[200px] lg:min-h-0 group"
          >
            <div className="flex justify-between items-start">
              <div className="text-[10px] text-foreground/40 font-bold tracking-[0.22em] uppercase">Continue Watching</div>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              </div>
            </div>
            <div>
              <div className="font-display text-lg font-bold mb-1 line-clamp-1">{resumeItem.title}</div>
              <div className="text-xs text-foreground/40 mb-4">S1: E4 • 32 mins left</div>
              <div className="w-full h-1 bg-white/8 rounded-full overflow-hidden">
                <div className="w-[58%] h-full vapor-gradient-bg" />
              </div>
            </div>
          </button>
        )}
      </div>
    </section>
  );
}
