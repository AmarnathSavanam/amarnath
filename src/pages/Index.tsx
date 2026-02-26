import StreamHeader from "@/components/StreamHeader";
import HeroSpotlight from "@/components/HeroSpotlight";
import ContentRow from "@/components/ContentRow";
import CardGrid from "@/components/CardGrid";
import DetailView from "@/components/DetailView";
import GenreFilter from "@/components/GenreFilter";
import { useAppState } from "@/hooks/useAppState";
import { useSearch } from "@/hooks/useSearch";
import {
  getItemsByCategory,
  getAllData,
  categoryLabels,
  type Category,
  type ViewMode,
  type EntertainmentItem,
} from "@/data/entertainment";
import { useMemo } from "react";

const categories: Category[] = ["marvel", "series", "anime"];

/** Shuffle array using Fisher-Yates (seeded by length for consistency per render) */
function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function buildRows(items: EntertainmentItem[], isAll: boolean) {
  const genreMap = new Map<string, EntertainmentItem[]>();
  items.forEach((item) => {
    item.genres.forEach((g) => {
      if (!genreMap.has(g)) genreMap.set(g, []);
      genreMap.get(g)!.push(item);
    });
  });

  const rows: { title: string; items: EntertainmentItem[] }[] = [];

  const trending = [...items].sort((a, b) => b.rating - a.rating).slice(0, 12);
  rows.push({ title: "🔥 Trending Now", items: isAll ? shuffleArray(trending) : trending });

  if (isAll) {
    categories.forEach((cat) => {
      const catItems = shuffleArray(items.filter((i) => i.category === cat));
      if (catItems.length > 0) {
        rows.push({ title: categoryLabels[cat], items: catItems });
      }
    });
  } else {
    categories.forEach((cat) => {
      const catItems = items.filter((i) => i.category === cat);
      if (catItems.length > 0) {
        rows.push({ title: categoryLabels[cat], items: catItems });
      }
    });
  }

  genreMap.forEach((genreItems, genre) => {
    if (genreItems.length >= 3) {
      rows.push({ title: genre, items: isAll ? shuffleArray(genreItems) : genreItems });
    }
  });

  return rows;
}

const Index = () => {
  const {
    activeCategory, setActiveCategory,
    selectedItem, openDetail, closeDetail,
    activeGenre, setActiveGenre, handleGenreFromDetail,
    goHome,
  } = useAppState();

  const isAll = activeCategory === "all";

  const allItems = useMemo(() => getAllData(), []);

  const categoryItems = useMemo(() => {
    if (isAll) return allItems;
    return getItemsByCategory(activeCategory as Category);
  }, [activeCategory, isAll, allItems]);

  const genreFiltered = useMemo(() => {
    if (!activeGenre) return categoryItems;
    return categoryItems.filter((item) =>
      item.genres.some((g) => g.toLowerCase() === activeGenre.toLowerCase())
    );
  }, [categoryItems, activeGenre]);

  const { query, setQuery, clearSearch, filtered, isSearching } = useSearch(genreFiltered);

  const heroItem = useMemo(() => {
    const pool = isAll ? allItems : getItemsByCategory(activeCategory as Category);
    if (pool.length === 0) return null;
    return pool.reduce((best, item) => (item.rating > best.rating ? item : best), pool[0]);
  }, [activeCategory, isAll, allItems]);

  const rows = useMemo(() => buildRows(categoryItems, isAll), [categoryItems, isAll]);

  const handleCategoryChange = (cat: ViewMode) => {
    clearSearch();
    setActiveGenre(null);
    setActiveCategory(cat);
  };

  return (
    <div className="min-h-screen bg-background bg-grain">
      <StreamHeader
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        hasSelectedItem={!!selectedItem}
        searchQuery={query}
        onSearchChange={setQuery}
        onSearchClear={clearSearch}
        onLogoClick={goHome}
      />

      {selectedItem ? (
        <main className="pt-14">
          <DetailView
            item={selectedItem}
            onBack={closeDetail}
            onCardClick={openDetail}
            onGenreClick={handleGenreFromDetail}
          />
        </main>
      ) : (
        <main>
          {!isSearching && !activeGenre && heroItem && (
            <HeroSpotlight item={heroItem} onPlay={openDetail} onMoreInfo={openDetail} />
          )}

          {isSearching ? (
            <div className="px-4 sm:px-6 lg:px-12 pt-6 pb-12">
              {filtered.length > 0 ? (
                <CardGrid items={filtered} onCardClick={openDetail} categoryLabel={`Results for "${query}"`} />
              ) : (
                <div className="flex flex-col items-center justify-center py-24 text-center animate-fade-in">
                  <p className="font-display text-xl text-muted-foreground mb-2">No titles found</p>
                  <p className="text-sm text-muted-foreground/60">Try a different search or explore the mood filters above.</p>
                </div>
              )}
            </div>
          ) : activeGenre ? (
            <div className="px-4 sm:px-6 lg:px-12 pt-6 pb-12">
              <GenreFilter items={categoryItems} activeGenre={activeGenre} onGenreChange={setActiveGenre} />
              <CardGrid items={genreFiltered} onCardClick={openDetail} categoryLabel={`${activeGenre} in ${categoryLabels[activeCategory]}`} />
            </div>
          ) : (
            <div className={heroItem ? "mt-4 sm:-mt-20 relative z-10 pb-12" : "pt-20 pb-12"}>
              <div className="px-4 sm:px-6 lg:px-12 mb-6 pt-2">
                <GenreFilter items={categoryItems} activeGenre={activeGenre} onGenreChange={setActiveGenre} />
              </div>
              {rows.map((row) => (
                <ContentRow key={row.title} title={row.title} items={row.items} onCardClick={openDetail} />
              ))}
            </div>
          )}
        </main>
      )}
    </div>
  );
};

export default Index;
