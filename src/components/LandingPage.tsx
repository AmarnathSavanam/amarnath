import { useMemo } from "react";
import type { Category, EntertainmentItem } from "@/data/entertainment";
import { getAllData, getItemsByCategory, categoryLabels } from "@/data/entertainment";
import Billboard from "./Billboard";
import ContentRow from "./ContentRow";
import { useContinueWatching } from "@/hooks/useContinueWatching";
import { useWatchlist } from "@/hooks/useWatchlist";

interface LandingPageProps {
  onSelectCategory: (cat: Category) => void;
  onOpenItem?: (item: EntertainmentItem) => void;
}

const rows: Category[] = ["marvel", "series", "anime", "movies"];

export default function LandingPage({ onSelectCategory, onOpenItem }: LandingPageProps) {
  const all = useMemo(() => getAllData(), []);
  const byId = useMemo(() => new Map(all.map((i) => [i.id, i])), [all]);
  const { entries } = useContinueWatching();
  const { ids: watchIds } = useWatchlist();

  const featured = useMemo(() => {
    const top = [...all].sort((a, b) => b.rating - a.rating).slice(0, 12);
    return top[Math.floor(Math.random() * top.length)];
  }, [all]);

  const trending = useMemo(
    () => [...all].sort((a, b) => b.rating - a.rating || b.year - a.year).slice(0, 10),
    [all]
  );

  const continueItems = useMemo(
    () => entries.map((e) => byId.get(e.id)).filter(Boolean) as EntertainmentItem[],
    [entries, byId]
  );
  const listItems = useMemo(
    () => watchIds.map((id) => byId.get(id)).filter(Boolean) as EntertainmentItem[],
    [watchIds, byId]
  );

  const open = (item: EntertainmentItem) => onOpenItem?.(item);

  return (
    <div className="pb-16">
      {featured && <Billboard item={featured} eyebrow="Featured today" onPlay={open} />}

      <div className="relative z-10 -mt-6 sm:-mt-16">
        {continueItems.length > 0 && (
          <ContentRow title="Continue Watching" items={continueItems} onCardClick={open} />
        )}
        {listItems.length > 0 && <ContentRow title="My List" items={listItems} onCardClick={open} />}

        <ContentRow title="Top 10 Today" items={trending} onCardClick={open} showRank />

        {rows.map((cat) => (
          <div key={cat}>
            <ContentRow
              title={`${categoryLabels[cat]} — Popular`}
              items={getItemsByCategory(cat).slice(0, 18)}
              onCardClick={open}
            />
            <div className="px-4 sm:px-8 lg:px-12 -mt-4 sm:-mt-8 mb-8 sm:mb-12">
              <button
                onClick={() => onSelectCategory(cat)}
                className="text-xs font-semibold text-foreground/60 hover:text-primary transition-colors"
              >
                Browse all {categoryLabels[cat]} →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
