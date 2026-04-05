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
    <section className="mb-8 sm:mb-10 relative group/row">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 mb-3 sm:mb-4">
        <h3 className="font-display text-sm sm:text-lg font-semibold text-primary tracking-tight">{title}</h3>
        <div className="flex items-center gap-1">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-secondary/60 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-30 disabled:cursor-default transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-secondary/60 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-30 disabled:cursor-default transition-colors"
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
          className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-12 scroll-smooth pb-2"
        >
          {items.map((item, i) => (
            <div key={item.id} className="flex-shrink-0 w-[130px] sm:w-[155px] lg:w-[175px] xl:w-[190px]">
              <EntertainmentCard item={item} onClick={onCardClick} index={i} showRank={showRank} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
