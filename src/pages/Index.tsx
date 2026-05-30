import VaporRail from "@/components/VaporRail";
import TopBar from "@/components/TopBar";
import HeroSpotlight from "@/components/HeroSpotlight";
import ContentRow from "@/components/ContentRow";
import CardGrid from "@/components/CardGrid";
import DetailView from "@/components/DetailView";
import GenreFilter from "@/components/GenreFilter";
import MosaicSection from "@/components/MosaicSection";
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

  const rows: { title: string; items: EntertainmentItem[]; showRank?: boolean }[] = [];

  // Trending - ranked
  const trending = [...items].sort((a, b) => b.rating - a.rating).slice(0, 12);
  rows.push({ title: "Trending", items: isAll ? shuffleArray(trending) : trending, showRank: true });

  // Recently Added
  const recentlyAdded = [...items].sort((a, b) => b.year - a.year).slice(0, 14);
  rows.push({ title: "Recently Added", items: recentlyAdded });

  // Category rows
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

  // Genre rows
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

  const sideItem = useMemo(() => {
    const sorted = [...categoryItems].sort((a, b) => b.rating - a.rating);
    return sorted.find((i) => i.id !== heroItem?.id) ?? null;
  }, [categoryItems, heroItem]);

  const resumeItem = useMemo(() => {
    const sorted = [...categoryItems].sort((a, b) => b.year - a.year);
    return sorted.find((i) => i.id !== heroItem?.id && i.id !== sideItem?.id) ?? null;
  }, [categoryItems, heroItem, sideItem]);

  const mosaicItems = useMemo(() => {
    const sorted = [...categoryItems].sort((a, b) => b.rating - a.rating);
    return sorted.filter((i) => i.id !== heroItem?.id && i.id !== sideItem?.id && i.id !== resumeItem?.id).slice(0, 5);
  }, [categoryItems, heroItem, sideItem, resumeItem]);

  const handleCategoryChange = (cat: ViewMode) => {
    clearSearch();
    setActiveGenre(null);
    setActiveCategory(cat);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Ambient orbs */}
      <div className="vapor-orb vapor-orb-anim" style={{ top: "-12%", left: "-8%", width: "55vw", height: "55vw", background: "hsl(var(--vapor-indigo) / 0.18)" }} />
      <div className="vapor-orb vapor-orb-anim" style={{ bottom: "-15%", right: "-10%", width: "50vw", height: "50vw", background: "hsl(var(--vapor-cyan) / 0.14)", animationDelay: "4s" }} />
      <div className="vapor-orb" style={{ top: "30%", right: "10%", width: "30vw", height: "30vw", background: "hsl(var(--vapor-lavender) / 0.08)" }} />

      <VaporRail activeCategory={activeCategory} onCategoryChange={handleCategoryChange} onLogoClick={goHome} />

      <div className="md:ml-24 lg:ml-32 relative z-10">
        <main className="px-4 sm:px-6 lg:pr-8 xl:pr-10 max-w-[1600px] mx-auto pb-16">
          <TopBar
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            searchQuery={query}
            onSearchChange={setQuery}
            onSearchClear={clearSearch}
            onLogoClick={goHome}
          />

          {selectedItem ? (
            <DetailView
              item={selectedItem}
              onBack={closeDetail}
              onCardClick={openDetail}
              onGenreClick={handleGenreFromDetail}
            />
          ) : isSearching ? (
            <div className="pt-6">
              {filtered.length > 0 ? (
                <CardGrid items={filtered} onCardClick={openDetail} categoryLabel={`Results for "${query}"`} />
              ) : (
                <div className="flex flex-col items-center justify-center py-24 text-center animate-fade-in">
                  <p className="font-display text-2xl vapor-gradient-text mb-2">No titles found</p>
                  <p className="text-sm text-foreground/50">Try a different search term.</p>
                </div>
              )}
            </div>
          ) : activeGenre ? (
            <div className="pt-6">
              <GenreFilter items={categoryItems} activeGenre={activeGenre} onGenreChange={setActiveGenre} />
              <CardGrid items={genreFiltered} onCardClick={openDetail} categoryLabel={`${activeGenre} in ${categoryLabels[activeCategory]}`} />
            </div>
          ) : (
            <div className="pt-6 space-y-12 sm:space-y-14">
              {heroItem && (
                <HeroSpotlight
                  item={heroItem}
                  onPlay={openDetail}
                  onMoreInfo={openDetail}
                  sideItem={sideItem}
                  resumeItem={resumeItem}
                  onSideClick={openDetail}
                />
              )}

              <GenreFilter items={categoryItems} activeGenre={activeGenre} onGenreChange={setActiveGenre} />

              {mosaicItems.length >= 5 && (
                <MosaicSection items={mosaicItems} onCardClick={openDetail} />
              )}

              {rows.map((row) => (
                <ContentRow key={row.title} title={row.title} items={row.items} onCardClick={openDetail} showRank={row.showRank} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
