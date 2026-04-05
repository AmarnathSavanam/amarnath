import type { EntertainmentItem } from "@/data/entertainment";
import EntertainmentCard from "./EntertainmentCard";

interface CardGridProps {
  items: EntertainmentItem[];
  onCardClick: (item: EntertainmentItem) => void;
  categoryLabel?: string;
}

export default function CardGrid({ items, onCardClick, categoryLabel }: CardGridProps) {
  if (items.length === 0) return null;

  return (
    <section className="mb-8 sm:mb-10">
      {categoryLabel && (
        <div className="flex items-center gap-3 mb-4 sm:mb-5">
          <h2 className="font-display text-base sm:text-xl font-semibold text-primary tracking-tight">{categoryLabel}</h2>
          <div className="flex-1 h-px bg-border/30" />
        </div>
      )}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 sm:gap-3">
        {items.map((item, i) => (
          <EntertainmentCard key={item.id} item={item} onClick={onCardClick} index={i} />
        ))}
      </div>
    </section>
  );
}
