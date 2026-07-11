import VaporRail from "@/components/VaporRail";
import LandingPage from "@/components/LandingPage";
import CategoryView from "@/components/CategoryView";
import DetailView from "@/components/DetailView";
import CommandPalette from "@/components/CommandPalette";
import { useAppState } from "@/hooks/useAppState";
import type { Category, ViewMode } from "@/data/entertainment";
import AuroraBackground from "@/components/fx/AuroraBackground";
import LoadingScreen from "@/components/fx/LoadingScreen";
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
      <LoadingScreen />
      <AuroraBackground />

      {/* Side rail only after entering a section */}
      {!isLanding && (
        <VaporRail
          activeCategory={category}
          onCategoryChange={handleSelectCategory}
          onLogoClick={goHome}
        />
      )}

      <div className={`${!isLanding ? "md:ml-24 lg:ml-32" : ""} relative z-10`}>
        <AnimatePresence mode="wait">
          {isLanding ? (
            <PageTransition keyName="landing">
              <LandingPage onSelectCategory={handleSelectCategory} onOpenItem={openDetail} />
            </PageTransition>
          ) : (
            <PageTransition keyName={`${activeCategory}-${selectedItem?.id ?? "list"}`}>
              <main className="px-3 sm:px-6 lg:pr-8 xl:pr-10 max-w-[1600px] mx-auto pt-4 sm:pt-6 pb-16">
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
