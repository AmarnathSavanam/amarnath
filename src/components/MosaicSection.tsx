import type { EntertainmentItem } from "@/data/entertainment";
import { resolveImages } from "@/data/imageRegistry";
import { Star, Zap, Plus } from "lucide-react";

interface MosaicSectionProps {
  items: EntertainmentItem[];
  title?: string;
  subtitle?: string;
  onCardClick: (item: EntertainmentItem) => void;
}

export default function MosaicSection({ items, title = "Trending Mosaic", subtitle = "Hand-picked titles gaining heat this week", onCardClick }: MosaicSectionProps) {
  if (items.length < 5) return null;
  const [a, b, c, d, e] = items;
  const img = (it: EntertainmentItem) => resolveImages(it.title, it.poster, it.banner, it.category);

  return (
    <section className="relative">
      <div className="flex items-end justify-between mb-5 sm:mb-7">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">{title}</h2>
          <p className="text-foreground/40 text-xs sm:text-sm mt-1">{subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 grid-rows-[repeat(2,minmax(180px,1fr))] sm:grid-rows-[repeat(2,minmax(200px,220px))] gap-3 sm:gap-5">
        {/* Large feature 2x2 */}
        <button onClick={() => onCardClick(a)} className="col-span-2 row-span-2 rounded-3xl border border-white/10 relative overflow-hidden group text-left">
          <img src={img(a).banner} alt={a.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <div className="text-[10px] tracking-[0.22em] uppercase mb-1 font-bold" style={{ color: "hsl(var(--vapor-ice))" }}>#1 Featured</div>
            <div className="font-display text-xl sm:text-2xl font-bold leading-tight mb-1 line-clamp-2">{a.title}</div>
            <div className="text-[11px] text-foreground/60">{a.genres.slice(0, 2).join(" • ")}</div>
          </div>
        </button>

        {/* Wide 2x1 */}
        <button onClick={() => onCardClick(b)} className="col-span-2 row-span-1 rounded-3xl border border-white/10 relative overflow-hidden group text-left">
          <img src={img(b).banner} alt={b.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          <div className="relative h-full flex flex-col justify-center p-5 sm:p-6">
            <div className="text-[10px] font-bold mb-1 uppercase tracking-[0.22em]" style={{ color: "hsl(var(--vapor-lavender))" }}>Must Watch</div>
            <div className="font-display text-lg sm:text-xl font-bold leading-tight line-clamp-2">{b.title}</div>
            <div className="text-[11px] text-foreground/50 mt-1 flex items-center gap-1.5"><Star className="w-3 h-3 text-primary fill-primary" />{b.rating}</div>
          </div>
        </button>

        {/* Small icon tile 1x1 */}
        <button onClick={() => onCardClick(c)} className="hidden lg:flex col-span-1 row-span-1 rounded-3xl border border-white/10 vapor-glass hover:bg-white/[0.06] transition-colors p-5 flex-col justify-between text-left">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "hsl(var(--vapor-ice) / 0.18)", color: "hsl(var(--vapor-ice))" }}>
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] tracking-[0.22em] uppercase font-bold text-foreground/50 mb-1">New Release</div>
            <div className="font-display text-sm font-bold leading-tight line-clamp-2">{c.title}</div>
          </div>
        </button>

        {/* Image tile 1x1 */}
        <button onClick={() => onCardClick(d)} className="hidden lg:block col-span-1 row-span-1 rounded-3xl border border-white/10 relative overflow-hidden group text-left">
          <img src={img(d).poster} alt={d.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <div className="font-display text-xs font-bold line-clamp-1">{d.title}</div>
          </div>
        </button>

        {/* Long horizontal 4x1 */}
        <button onClick={() => onCardClick(e)} className="col-span-2 lg:col-span-4 row-span-1 rounded-3xl border border-white/10 vapor-glass flex items-center px-5 sm:px-8 gap-4 sm:gap-6 group text-left hover:bg-white/[0.06] transition-colors">
          <div className="font-display text-4xl sm:text-5xl font-black text-foreground/10 italic shrink-0 -mt-1">#03</div>
          <div className="min-w-0 flex-1">
            <div className="font-display text-base sm:text-xl font-bold leading-tight line-clamp-1">{e.title}</div>
            <div className="text-foreground/40 text-xs sm:text-sm line-clamp-1">{e.tagline}</div>
          </div>
          <div className="ml-auto p-3 sm:p-4 rounded-2xl vapor-glass border-white/10 group-hover:border-primary/40 transition-colors">
            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </button>
      </div>
    </section>
  );
}