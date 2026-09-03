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
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  if (items.length === 0) return null;

  return (
    <section className="mb-8 sm:mb-12 relative group/row">
      <h3 className="px-4 sm:px-8 lg:px-12 mb-2.5 sm:mb-3 font-display text-base sm:text-xl font-bold tracking-tight text-foreground/90">
        {title}
      </h3>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
          className="hidden md:flex absolute left-0 top-0 bottom-6 z-30 w-10 items-center justify-center bg-background/70 text-foreground opacity-0 group-hover/row:opacity-100 disabled:opacity-0 transition-opacity"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="scroll-row flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-8 lg:px-12 pb-2"
        >
          {items.map((item, i) => (
            <div key={item.id} className="flex-shrink-0 w-[112px] sm:w-[150px] lg:w-[170px]">
              <EntertainmentCard item={item} onClick={onCardClick} index={i} showRank={showRank} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Scroll right"
          className="hidden md:flex absolute right-0 top-0 bottom-6 z-30 w-10 items-center justify-center bg-background/70 text-foreground opacity-0 group-hover/row:opacity-100 disabled:opacity-0 transition-opacity"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
