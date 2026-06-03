import VaporRail from "@/components/VaporRail";
import LandingPage from "@/components/LandingPage";
import CategoryView from "@/components/CategoryView";
import DetailView from "@/components/DetailView";
import CommandPalette from "@/components/CommandPalette";
import { useAppState } from "@/hooks/useAppState";
import type { Category, ViewMode } from "@/data/entertainment";

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
      {/* Ambient orbs */}
      <div className="vapor-orb vapor-orb-anim" style={{ top: "-12%", left: "-8%", width: "55vw", height: "55vw", background: "hsl(var(--vapor-indigo) / 0.18)" }} />
      <div className="vapor-orb vapor-orb-anim" style={{ bottom: "-15%", right: "-10%", width: "50vw", height: "50vw", background: "hsl(var(--vapor-cyan) / 0.14)", animationDelay: "4s" }} />
      <div className="vapor-orb" style={{ top: "30%", right: "10%", width: "30vw", height: "30vw", background: "hsl(var(--vapor-lavender) / 0.08)" }} />

      {/* Side rail only after entering a section */}
      {!isLanding && (
        <VaporRail
          activeCategory={category}
          onCategoryChange={handleSelectCategory}
          onLogoClick={goHome}
        />
      )}

      <div className={`${!isLanding ? "md:ml-24 lg:ml-32" : ""} relative z-10`}>
        {isLanding ? (
          <LandingPage onSelectCategory={handleSelectCategory} onOpenItem={openDetail} />
        ) : (
          <main className="px-3 sm:px-6 lg:pr-8 xl:pr-10 max-w-[1600px] mx-auto pt-4 sm:pt-6 pb-16">
            {selectedItem ? (
              <DetailView
                item={selectedItem}
                onBack={closeDetail}
                onCardClick={openDetail}
              />
            ) : (
              category && (
                <CategoryView
                  category={category}
                  onCardClick={openDetail}
                  onBack={goHome}
                />
              )
            )}
          </main>
        )}
      </div>

      <CommandPalette onOpenItem={openDetail} onOpenCategory={handleSelectCategory} />
    </div>
  );
};

export default Index;
