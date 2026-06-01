import { useMemo } from "react";
import { ArrowRight, Sparkles, Tv, Film } from "lucide-react";
import type { Category } from "@/data/entertainment";
import { getItemsByCategory } from "@/data/entertainment";
import { resolveImages } from "@/data/imageRegistry";

interface LandingPageProps {
  onSelectCategory: (cat: Category) => void;
}

const tiles: {
  key: Category;
  label: string;
  tagline: string;
  blurb: string;
  themeClass: string;
  Icon: typeof Sparkles;
}[] = [
  {
    key: "marvel",
    label: "Marvel",
    tagline: "Step into the multiverse",
    blurb: "Heroes, sagas, and cosmic events from across the Marvel universe.",
    themeClass: "theme-marvel",
    Icon: Sparkles,
  },
  {
    key: "series",
    label: "Series",
    tagline: "Stories worth bingeing",
    blurb: "Prestige drama, crime, sci-fi and the next chapter waiting on autoplay.",
    themeClass: "theme-series",
    Icon: Tv,
  },
  {
    key: "anime",
    label: "Anime",
    tagline: "Neon-drenched worlds",
    blurb: "Iconic anime, cyberpunk futures and worlds painted frame-by-frame.",
    themeClass: "theme-anime",
    Icon: Film,
  },
];

export default function LandingPage({ onSelectCategory }: LandingPageProps) {
  // Pick a hero poster per category for the tile background
  const tileImages = useMemo(() => {
    const map: Record<Category, string> = { marvel: "", series: "", anime: "" };
    (Object.keys(map) as Category[]).forEach((cat) => {
      const items = getItemsByCategory(cat);
      const top = [...items].sort((a, b) => b.rating - a.rating)[0];
      if (top) {
        const imgs = resolveImages(top.title, top.poster, top.banner, top.category);
        map[cat] = imgs.banner;
      }
    });
    return map;
  }, []);

  return (
    <div className="relative min-h-[100dvh] flex flex-col">
      {/* Brand mark */}
      <header className="pt-10 sm:pt-14 px-6 sm:px-10 flex items-center justify-between animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl vapor-gradient-bg flex items-center justify-center shadow-[0_0_28px_-6px_hsl(var(--vapor-cyan)/0.7)]">
            <div className="w-5 h-5 bg-background rounded-md flex items-center justify-center">
              <div className="w-2 h-2 rounded-full vapor-gradient-bg" />
            </div>
          </div>
          <span className="font-display text-lg font-extrabold tracking-tight vapor-gradient-text">STREAM</span>
        </div>
        <span className="hidden sm:inline text-[11px] font-medium tracking-[0.3em] uppercase text-foreground/40">
          A futuristic entertainment OS
        </span>
      </header>

      {/* Headline */}
      <div className="px-6 sm:px-10 pt-10 sm:pt-16 max-w-5xl mx-auto text-center animate-fade-in">
        <p className="text-[11px] sm:text-xs font-medium tracking-[0.35em] uppercase text-foreground/45 mb-4">
          Choose your universe
        </p>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
          <span className="vapor-gradient-text">Three worlds.</span>
          <br />
          <span className="text-foreground/90">One cinema.</span>
        </h1>
        <p className="mt-5 sm:mt-6 text-sm sm:text-base text-foreground/55 max-w-xl mx-auto">
          Pick a section to enter — no clutter, no rows of rows, just the story you came for.
        </p>
      </div>

      {/* Tiles */}
      <main className="flex-1 px-4 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-16 max-w-[1500px] w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {tiles.map((t, i) => (
            <button
              key={t.key}
              onClick={() => onSelectCategory(t.key)}
              className={`group relative overflow-hidden rounded-3xl text-left animate-fade-in-scale ${t.themeClass}`}
              style={{ animationDelay: `${120 + i * 100}ms` }}
              aria-label={`Enter ${t.label}`}
            >
              {/* Cinematic background image */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]">
                {tileImages[t.key] && (
                  <img
                    src={tileImages[t.key]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-[1400ms] ease-out group-hover:scale-125"
                  />
                )}
                {/* Color wash */}
                <div className="absolute inset-0 theme-gradient holo-sheen opacity-60 mix-blend-color" />
                {/* Depth gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--theme-b)/0.35),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glass frame */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 group-hover:ring-white/25 transition" />

                {/* Floating orbs */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition theme-gradient" />
                <div className="absolute -bottom-16 -left-8 w-44 h-44 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition theme-gradient" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 vapor-glass rounded-full px-3 py-1.5">
                      <t.Icon className="w-3.5 h-3.5 text-foreground/80" strokeWidth={2} />
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-foreground/75">
                        {t.tagline}
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight theme-gradient-text drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] leading-none">
                      {t.label}
                    </h2>
                    <p className="mt-3 text-xs sm:text-sm text-foreground/65 max-w-xs leading-relaxed">
                      {t.blurb}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 vapor-glass-strong rounded-full pl-4 pr-3 py-2 text-xs font-semibold text-foreground/90 transition-all duration-300 group-hover:gap-3 group-hover:pl-5 group-hover:pr-4">
                      <span className="tracking-wider uppercase">Enter</span>
                      <span className="w-7 h-7 rounded-full theme-gradient flex items-center justify-center text-background">
                        <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover glow halo */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 theme-glow" />
              </div>
            </button>
          ))}
        </div>

        <p className="mt-12 sm:mt-16 text-center text-[11px] tracking-[0.3em] uppercase text-foreground/30">
          Cinematic · Immersive · Minimal
        </p>
      </main>
    </div>
  );
}