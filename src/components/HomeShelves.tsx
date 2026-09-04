import { useMemo } from "react";
import { Flame, History, Bookmark } from "lucide-react";
import { getAllData, type EntertainmentItem } from "@/data/entertainment";
import EntertainmentCard from "./EntertainmentCard";
import { useContinueWatching } from "@/hooks/useContinueWatching";
import { useWatchlist } from "@/hooks/useWatchlist";

interface HomeShelvesProps {
  onCardClick: (item: EntertainmentItem) => void;
}

export default function HomeShelves({ onCardClick }: HomeShelvesProps) {
  const all = useMemo(() => getAllData(), []);
  const byId = useMemo(() => new Map(all.map((i) => [i.id, i])), [all]);

  const { entries } = useContinueWatching();
  const { ids: watchIds } = useWatchlist();

  const trending = useMemo(() => {
    return [...all].sort((a, b) => b.rating - a.rating || b.year - a.year).slice(0, 10);
  }, [all]);

  const continueItems = useMemo(
    () => entries.map((e) => byId.get(e.id)).filter(Boolean) as EntertainmentItem[],
    [entries, byId]
  );

  const watchItems = useMemo(
    () => watchIds.map((id) => byId.get(id)).filter(Boolean) as EntertainmentItem[],
    [watchIds, byId]
  );

  return (
    <div className="max-w-6xl w-full mx-auto px-4 sm:px-8 lg:px-12 pb-14 space-y-12">
      {continueItems.length > 0 && (
        <Shelf title="Continue Watching" icon={History} subtitle="Pick up where you left off">
          <RowGrid items={continueItems} onCardClick={onCardClick} progressById={Object.fromEntries(entries.map((e) => [e.id, e.progress]))} />
        </Shelf>
      )}

      {watchItems.length > 0 && (
        <Shelf title="My Watchlist" icon={Bookmark} subtitle="Saved for later">
          <RowGrid items={watchItems} onCardClick={onCardClick} />
        </Shelf>
      )}

      <Shelf title="Trending · Top 10" icon={Flame} subtitle="The most loved across every universe">
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 xl:grid-cols-10 gap-3 sm:gap-4">
          {trending.map((item, i) => (
            <EntertainmentCard key={item.id} item={item} onClick={onCardClick} index={i} showRank />
          ))}
        </div>
      </Shelf>
    </div>
  );
}

interface ShelfProps {
  title: string;
  subtitle?: string;
  icon: typeof Flame;
  children: React.ReactNode;
}

function Shelf({ title, subtitle, icon: Icon, children }: ShelfProps) {
  return (
    <section className="animate-fade-in">
      <header className="flex items-end justify-between mb-4 sm:mb-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-secondary/80 border border-border flex items-center justify-center text-primary">
            <Icon className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-foreground leading-none">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-1 text-[10px] sm:text-xs text-foreground/45 tracking-[0.2em] uppercase">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </header>
      {children}
    </section>
  );
}

interface RowGridProps {
  items: EntertainmentItem[];
  onCardClick: (item: EntertainmentItem) => void;
  progressById?: Record<string, number>;
}

function RowGrid({ items, onCardClick, progressById }: RowGridProps) {
  return (
    <div className="scroll-row flex gap-3 sm:gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
      {items.map((item, i) => (
        <div key={item.id} className="flex-shrink-0 w-[42vw] sm:w-40 md:w-44 lg:w-48 relative">
          <EntertainmentCard item={item} onClick={onCardClick} index={i} />
          {progressById && progressById[item.id] != null && (
            <div className="absolute left-2 right-2 bottom-2 h-1 rounded-full bg-white/10 overflow-hidden pointer-events-none">
              <div
                className="h-full bg-primary"
                style={{ width: `${Math.min(100, Math.round(progressById[item.id] * 100))}%` }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}