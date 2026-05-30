import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { EntertainmentItem } from "@/data/entertainment";
import EntertainmentCard from "./EntertainmentCard";

interface ContentRowProps {
  title: string;
  items: EntertainmentItem[];
  onCardClick: (item: EntertainmentItem) => void;
  showRank?: boolean;
}

export default function ContentRow({ title, items, onCardClick, showRank }: ContentRowProps) {
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
    <section className="mb-10 sm:mb-12 relative group/row">
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <h3 className="font-display text-lg sm:text-2xl font-extrabold tracking-tight">
          <span className="vapor-gradient-text">{title}</span>
        </h3>
        <div className="flex items-center gap-1">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl vapor-glass flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/40 disabled:opacity-30 disabled:cursor-default transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl vapor-glass flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/40 disabled:opacity-30 disabled:cursor-default transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2 -mx-1 px-1"
        >
          {items.map((item, i) => (
            <div key={item.id} className="flex-shrink-0 w-[140px] sm:w-[160px] lg:w-[180px] xl:w-[200px]">
              <EntertainmentCard item={item} onClick={onCardClick} index={i} showRank={showRank} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
