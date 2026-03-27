import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { EntertainmentItem } from "@/data/entertainment";
import EntertainmentCard from "./EntertainmentCard";

interface ContentRowProps {
  title: string;
  items: EntertainmentItem[];
  onCardClick: (item: EntertainmentItem) => void;
}

export default function ContentRow({ title, items, onCardClick }: ContentRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.75;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  if (items.length === 0) return null;

  return (
    <section className="mb-8 sm:mb-12 lg:mb-14 relative group/row">
      <div className="flex items-center gap-3 px-4 sm:px-6 lg:px-12 mb-3 sm:mb-5">
        <h3 className="font-display text-sm sm:text-lg lg:text-xl font-semibold text-foreground tracking-tight">{title}</h3>
        <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
      </div>

      <div className="relative">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-0 bottom-0 z-10 w-10 sm:w-14 flex items-center justify-center bg-gradient-to-r from-background via-background/90 to-transparent opacity-0 group-hover/row:opacity-100 transition-opacity duration-300"
            aria-label="Scroll left"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full glass-panel flex items-center justify-center hover:bg-secondary/60 transition-colors">
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
            </div>
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-12 snap-x snap-mandatory scroll-smooth pb-2"
        >
          {items.map((item, i) => (
            <div key={item.id} className="flex-shrink-0 w-[140px] sm:w-[160px] lg:w-[185px] xl:w-[200px] snap-start">
              <EntertainmentCard item={item} onClick={onCardClick} index={i} />
            </div>
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-0 bottom-0 z-10 w-10 sm:w-14 flex items-center justify-center bg-gradient-to-l from-background via-background/90 to-transparent opacity-0 group-hover/row:opacity-100 transition-opacity duration-300"
            aria-label="Scroll right"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full glass-panel flex items-center justify-center hover:bg-secondary/60 transition-colors">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
            </div>
          </button>
        )}
      </div>
    </section>
  );
}
