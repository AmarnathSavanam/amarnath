import { ArrowLeft, Star, Calendar, Film } from "lucide-react";
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

export default function DetailView({ item, onBack, onCardClick, onGenreClick }: DetailViewProps) {
  const recommendations = getRecommendations(item, 6);
  const images = resolveImages(item.title, item.poster, item.banner, item.category);
  const trailerUrl = resolveTrailer(item.title);

  return (
    <div className="animate-fade-in-scale">
      {/* Hero banner */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden">
        <img src={images.banner} alt={item.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-20 sm:top-24 left-4 sm:left-8 rounded-lg bg-secondary/80 border border-border/50 p-2.5 transition-all duration-200 hover:bg-secondary text-foreground active:scale-90"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 lg:p-12 max-w-[1400px] mx-auto">
          <h1 className={`font-display text-2xl sm:text-4xl lg:text-5xl font-bold ${accentText[item.category]} mb-2`}>
            {item.title}
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground/70 italic max-w-xl">"{item.tagline}"</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto -mt-2 relative z-10">
        <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:gap-10">
          {/* Left: Trailer */}
          <div>
            {trailerUrl && (
              <div className="mb-6 sm:mb-8">
                <h3 className="font-display text-sm sm:text-base font-semibold text-primary mb-3">Trailer</h3>
                <TrailerPlayer trailerUrl={trailerUrl} posterUrl={images.banner} title={item.title} />
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div>
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
                <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                <span className="text-xs font-bold text-primary">{item.rating}</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary border border-border/50">
                <Calendar className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{item.year}</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary border border-border/50">
                <Film className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground capitalize">{item.category}</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary/20 text-primary border border-primary/30">HD</span>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => onGenreClick?.(genre)}
                  className="text-[10px] sm:text-xs px-2.5 py-1 rounded-md border border-border/50 bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                >
                  {genre}
                </button>
              ))}
            </div>

            {/* Description */}
            <div className="rounded-lg bg-secondary/40 border border-border/30 p-4 sm:p-5 mb-10">
              <p className="text-xs sm:text-sm leading-relaxed text-secondary-foreground/85">{item.description}</p>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <section className="pb-10 sm:pb-14">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="font-display text-sm sm:text-lg font-semibold text-primary">You might also enjoy</h2>
              <div className="flex-1 h-px bg-border/30" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
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
