import { ArrowLeft, Star, Calendar, Film, Sparkles } from "lucide-react";
import type { EntertainmentItem, Category } from "@/data/entertainment";
import { getRecommendations } from "@/data/entertainment";
import { resolveImages } from "@/data/imageRegistry";
import { resolveTrailer } from "@/data/trailerRegistry";
import EntertainmentCard from "./EntertainmentCard";
import TrailerPlayer from "./TrailerPlayer";

interface DetailViewProps {
  item: EntertainmentItem;
  onBack: () => void;
  onCardClick: (item: EntertainmentItem) => void;
  onGenreClick?: (genre: string) => void;
}

const accentText: Record<Category, string> = {
  marvel: "text-gradient-marvel",
  anime: "text-gradient-anime",
  series: "text-gradient-series",
};

const accentBadge: Record<Category, string> = {
  marvel: "bg-marvel/10 text-marvel-glow border-marvel/20 hover:bg-marvel/20 hover:border-marvel/40",
  anime: "bg-anime/10 text-anime-glow border-anime/20 hover:bg-anime/20 hover:border-anime/40",
  series: "bg-series/10 text-series-glow border-series/20 hover:bg-series/20 hover:border-series/40",
};

export default function DetailView({ item, onBack, onCardClick, onGenreClick }: DetailViewProps) {
  const recommendations = getRecommendations(item, 6);
  const images = resolveImages(item.title, item.poster, item.banner, item.category);
  const trailerUrl = resolveTrailer(item.title);

  return (
    <div className="animate-fade-in-scale">
      {/* Hero banner */}
      <div className="relative w-full h-[45vh] sm:h-[55vh] lg:h-[65vh] overflow-hidden">
        <img src={images.banner} alt={item.title} className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />

        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-20 sm:top-24 left-4 sm:left-8 glass-panel rounded-xl p-2.5 transition-all duration-300 hover:bg-secondary/60 hover:shadow-[0_0_20px_-4px_hsl(var(--neon-purple)/0.35)] text-foreground active:scale-90"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 lg:p-14">
          <h1 className={`font-display text-2xl sm:text-4xl lg:text-6xl font-bold ${accentText[item.category]} mb-2 sm:mb-3 drop-shadow-2xl`}>
            {item.title}
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-muted-foreground/65 italic max-w-xl">"{item.tagline}"</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-2 relative z-10">
        <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* Left: Trailer */}
          <div>
            {trailerUrl && (
              <div className="mb-6 sm:mb-8">
                <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-3 tracking-tight flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-neon-purple" />
                  Trailer
                </h3>
                <TrailerPlayer trailerUrl={trailerUrl} posterUrl={images.banner} title={item.title} />
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div>
            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/10 border border-amber-400/15">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-xs sm:text-sm font-bold text-amber-400">{item.rating}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/40 border border-border/30">
                <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-muted-foreground" />
                <span className="text-xs sm:text-sm text-muted-foreground">{item.year}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/40 border border-border/30">
                <Film className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-muted-foreground" />
                <span className="text-xs sm:text-sm text-muted-foreground capitalize">{item.category}</span>
              </div>
            </div>

            {/* Genre tags */}
            <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
              {item.genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => onGenreClick?.(genre)}
                  className={`text-[10px] sm:text-xs px-3 py-1.5 rounded-full border transition-all duration-300 hover:scale-105 ${accentBadge[item.category]}`}
                >
                  {genre}
                </button>
              ))}
            </div>

            {/* Description */}
            <div className="glass-card rounded-2xl p-5 sm:p-7 mb-12 sm:mb-16 border border-border/30">
              <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-secondary-foreground/85">{item.description}</p>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <section className="pb-12 sm:pb-16">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <h2 className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-foreground tracking-tight">You might also enjoy</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-3">
              {recommendations.map((rec, i) => (
                <EntertainmentCard key={rec.id} item={rec} onClick={onCardClick} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
