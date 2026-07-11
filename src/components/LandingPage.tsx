import { ArrowRight, Sparkles, Tv, Film } from "lucide-react";
import type { Category, EntertainmentItem } from "@/data/entertainment";
import HomeShelves from "./HomeShelves";
import { Suspense, lazy } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import TiltCard from "./fx/TiltCard";

const HeroScene = lazy(() => import("./fx/HeroScene"));

interface LandingPageProps {
  onSelectCategory: (cat: Category) => void;
  onOpenItem?: (item: EntertainmentItem) => void;
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

export default function LandingPage({ onSelectCategory, onOpenItem }: LandingPageProps) {
  const isMobile = useIsMobile();
  return (
    <div className="relative min-h-[100dvh] flex flex-col">
      {/* 3D hero scene — desktop/tablet only for perf */}
      {!isMobile && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[90vh] z-0 opacity-90">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
        </div>
      )}

      <div className="relative z-10 flex flex-col flex-1">
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
      <main className="flex-1 px-4 sm:px-8 lg:px-12 pt-10 sm:pt-12 pb-16 max-w-5xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 perspective-1200">
          {tiles.map((t, i) => (
            <TiltCard
              key={t.key}
              as="button"
              onClick={() => onSelectCategory(t.key)}
              className={`group overflow-hidden rounded-3xl text-left animate-fade-in-scale vapor-glass depth-card ${t.themeClass}`}
              style={{ animationDelay: `${120 + i * 100}ms` }}
              ariaLabel={`Enter ${t.label}`}
              max={9}
            >
              {/* Transparent glass tile, no photo */}
              <div className="relative aspect-[16/9] sm:aspect-[4/5] md:aspect-[3/4]">
                {/* Soft themed orbs (the only color) */}
                <div className="absolute -top-12 -right-10 w-44 h-44 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition theme-gradient" />
                <div className="absolute -bottom-16 -left-10 w-44 h-44 rounded-full blur-3xl opacity-25 group-hover:opacity-50 transition theme-gradient" />

                {/* Inner ring */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 group-hover:ring-white/30 transition" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 border border-white/10 bg-white/[0.03]">
                      <t.Icon className="w-3 h-3 text-foreground/75" strokeWidth={2} />
                      <span className="text-[9px] font-semibold tracking-[0.22em] uppercase text-foreground/70">
                        {t.tagline}
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight theme-gradient-text leading-none">
                      {t.label}
                    </h2>
                    <p className="mt-2.5 text-[11px] sm:text-xs text-foreground/55 max-w-xs leading-relaxed">
                      {t.blurb}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 rounded-full pl-3.5 pr-2 py-1.5 text-[11px] font-semibold text-foreground/85 border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:gap-3 group-hover:pl-4 group-hover:bg-white/[0.08]">
                      <span className="tracking-[0.18em] uppercase">Enter</span>
                      <span className="w-6 h-6 rounded-full theme-gradient flex items-center justify-center text-background">
                        <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        <p className="mt-10 sm:mt-14 text-center text-[11px] tracking-[0.3em] uppercase text-foreground/30">
          Cinematic · Immersive · Minimal
        </p>
      </main>

      {onOpenItem && <HomeShelves onCardClick={onOpenItem} />}
      </div>
    </div>
  );
}