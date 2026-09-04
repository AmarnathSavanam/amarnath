import TopNav from "@/components/TopNav";
import LandingPage from "@/components/LandingPage";
import CategoryView from "@/components/CategoryView";
import DetailView from "@/components/DetailView";
import CommandPalette from "@/components/CommandPalette";
import { useAppState } from "@/hooks/useAppState";
import type { Category, ViewMode } from "@/data/entertainment";
import PageTransition from "@/components/fx/PageTransition";
import { AnimatePresence } from "framer-motion";

const Index = () => {
  const {
    activeCategory,
    setActiveCategory,
    selectedItem,
    openDetail,
    closeDetail,
    goHome,
  } = useAppState();

  const isLanding = activeCategory === "all";
  const category = (isLanding ? null : (activeCategory as Category));

  const handleSelectCategory = (cat: Category) => setActiveCategory(cat as ViewMode);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <TopNav
        activeCategory={activeCategory}
        onCategoryChange={handleSelectCategory}
        onLogoClick={goHome}
      />

      <div className="relative z-10 pt-14 sm:pt-16">
        <AnimatePresence mode="wait">
          {isLanding ? (
            <PageTransition keyName="landing">
              <LandingPage onSelectCategory={handleSelectCategory} onOpenItem={openDetail} />
            </PageTransition>
          ) : (
            <PageTransition keyName={`${activeCategory}-${selectedItem?.id ?? "list"}`}>
              <main className="px-4 sm:px-8 lg:px-12 pb-16">
                {selectedItem ? (
                  <DetailView item={selectedItem} onBack={closeDetail} onCardClick={openDetail} />
                ) : (
                  category && (
                    <CategoryView category={category} onCardClick={openDetail} onBack={goHome} />
                  )
                )}
              </main>
            </PageTransition>
          )}
        </AnimatePresence>
      </div>

      <CommandPalette onOpenItem={openDetail} onOpenCategory={handleSelectCategory} />
    </div>
  );
};

export default Index;
