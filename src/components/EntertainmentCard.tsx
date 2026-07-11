import { Play } from "lucide-react";
import { useRef } from "react";
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
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = btnRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * 8;
    const ry = (x - 0.5) * 8;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  };
  const handleLeave = () => {
    const el = btnRef.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
  };

  return (
    <button
      ref={btnRef}
      onClick={() => onClick(item)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="tap-target group relative overflow-hidden rounded-2xl bg-card/40 text-left w-full transition-transform duration-300 ease-out will-change-transform hover:shadow-[0_24px_60px_-16px_hsl(var(--vapor-cyan)/0.45)] active:scale-[0.97] animate-fade-in"
      style={{ animationDelay: `${index * 30}ms`, opacity: 0, transformStyle: "preserve-3d" }}
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/8 group-hover:border-primary/40 transition-colors">
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
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full vapor-gradient-bg flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_30px_hsl(var(--vapor-cyan)/0.55)]">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 text-background ml-0.5 fill-background" />
          </div>
        </div>

        {/* Rank number */}
        {showRank && (
          <div className="absolute -bottom-2 -left-1 z-10">
            <span className="font-display text-5xl sm:text-6xl font-black vapor-gradient-text leading-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        )}

        {/* Bottom info gradient */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/85 to-transparent p-3 sm:p-3.5 pt-10 sm:pt-14">
          <h3 className="font-display text-[12px] sm:text-sm font-semibold text-foreground leading-tight line-clamp-2 tracking-tight">{item.title}</h3>
          <div className="mt-1 flex items-center gap-1.5">
            <span className="text-[10px] text-foreground/45">{item.year}</span>
            <span className="w-0.5 h-0.5 rounded-full bg-foreground/30" />
            <span className="text-[10px] font-semibold text-primary">★ {item.rating}</span>
          </div>
        </div>
      </div>
    </button>
  );
}
