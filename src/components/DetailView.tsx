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

const accentBadge: Record<Category, string> = {
  marvel: "bg-marvel/10 text-marvel-glow border-marvel/20 hover:bg-marvel/20",
  anime: "bg-anime/10 text-anime-glow border-anime/20 hover:bg-anime/20",
  series: "bg-series/10 text-series-glow border-series/20 hover:bg-series/20",
};

export default function DetailView({ item, onBack, onCardClick, onGenreClick }: DetailViewProps) {
  const recommendations = getRecommendations(item, 6);
  const images = resolveImages(item.title, item.poster, item.banner, item.category);
  const trailerUrl = resolveTrailer(item.title);

  return (
    <div className="animate-fade-in-scale">
      <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[65vh] overflow-hidden">
        <img src={images.banner} alt={item.title} className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />
        <button onClick={onBack} className="absolute top-20 sm:top-24 left-4 sm:left-8 glass-panel rounded-xl p-2.5 transition-all duration-300 hover:bg-secondary hover:shadow-[0_0_16px_-4px_hsl(var(--neon-purple)/0.3)] text-foreground" aria-label="Go back">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-16">
          <h1 className={`font-display text-3xl sm:text-5xl lg:text-6xl font-bold ${accentText[item.category]} mb-3 drop-shadow-2xl`}>{item.title}</h1>
          <p className="text-sm sm:text-base text-muted-foreground/70 italic max-w-xl">"{item.tagline}"</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-4 relative z-10">
        <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div>
            {trailerUrl && (
              <div className="mb-8">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3 tracking-tight">Trailer</h3>
                <TrailerPlayer trailerUrl={trailerUrl} posterUrl={images.banner} title={item.title} />
              </div>
            )}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-sm font-bold text-foreground">{item.rating}</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{item.year}</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <div className="flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground capitalize">{item.category}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {item.genres.map((genre) => (
                <button key={genre} onClick={() => onGenreClick?.(genre)} className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-300 ${accentBadge[item.category]}`}>{genre}</button>
              ))}
            </div>
            <div className="glass-card rounded-2xl p-6 sm:p-8 mb-16 border border-border/40">
              <p className="text-sm sm:text-base leading-relaxed text-secondary-foreground/90">{item.description}</p>
            </div>
          </div>
        </div>

        {recommendations.length > 0 && (
          <section className="pb-16">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-6 tracking-tight">You might also enjoy</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
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
