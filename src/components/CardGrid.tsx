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
    <section className="mb-10 sm:mb-12">
      {categoryLabel && (
        <div className="flex items-center gap-3 mb-5 sm:mb-6">
          <h2 className="font-display text-lg sm:text-2xl font-semibold text-foreground tracking-tight">{categoryLabel}</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 sm:gap-3">
        {items.map((item, i) => (
          <EntertainmentCard key={item.id} item={item} onClick={onCardClick} index={i} />
        ))}
      </div>
    </section>
  );
}
