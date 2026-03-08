import { useState, useCallback, useEffect, useRef } from "react";
import type { EntertainmentItem, ViewMode } from "@/data/entertainment";
import { getAllData } from "@/data/entertainment";

const validCategories: ViewMode[] = ["all", "marvel", "series", "anime"];

function parseURL() {
  const path = window.location.pathname;
  const params = new URLSearchParams(window.location.search);
  const parts = path.split("/").filter(Boolean);

  let category: ViewMode = "all";
  let detailId: string | null = null;
  const genre = params.get("genre") || null;

  if (parts.includes("detail")) {
    const idx = parts.indexOf("detail");
    detailId = parts[idx + 1] || null;
    const before = parts.slice(0, idx);
    if (before.length > 0 && validCategories.includes(before[0] as ViewMode)) {
      category = before[0] as ViewMode;
    }
  } else if (parts.length > 0 && validCategories.includes(parts[0] as ViewMode)) {
    category = parts[0] as ViewMode;
  }

  return { category, detailId, genre };
}

export function useAppState() {
  const initial = parseURL();
  const [activeCategory, setActiveCategoryState] = useState<ViewMode>(initial.category);
  const [selectedItem, setSelectedItem] = useState<EntertainmentItem | null>(null);
  const [activeGenre, setActiveGenreState] = useState<string | null>(initial.genre);
  const isPoppingState = useRef(false);

  // Resolve detail on mount
  useEffect(() => {
    if (initial.detailId) {
      const found = getAllData().find((i) => i.id === initial.detailId);
      if (found) setSelectedItem(found);
    }
  }, []);

  const pushState = useCallback((url: string, state: Record<string, unknown> = {}) => {
    if (!isPoppingState.current) {
      window.history.pushState(state, "", url);
    }
  }, []);

  const setActiveCategory = useCallback((cat: ViewMode) => {
    setActiveCategoryState(cat);
    setSelectedItem(null);
    setActiveGenreState(null);
    const path = cat === "all" ? "/" : `/${cat}`;
    pushState(path);
  }, [pushState]);

  const openDetail = useCallback((item: EntertainmentItem) => {
    setSelectedItem(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
    const catPath = activeCategory === "all" ? "" : `/${activeCategory}`;
    pushState(`${catPath}/detail/${item.id}`, { detailId: item.id, category: activeCategory });
  }, [activeCategory, pushState]);

  const closeDetail = useCallback(() => {
    setSelectedItem(null);
    const catPath = activeCategory === "all" ? "/" : `/${activeCategory}`;
    pushState(catPath, { category: activeCategory });
  }, [activeCategory, pushState]);

  const handleGenreChange = useCallback((genre: string | null) => {
    setActiveGenreState(genre);
    const catPath = activeCategory === "all" ? "/" : `/${activeCategory}`;
    if (genre) {
      pushState(`${catPath}?genre=${encodeURIComponent(genre)}`);
    } else {
      pushState(catPath);
    }
  }, [activeCategory, pushState]);

  const handleGenreFromDetail = useCallback((genre: string) => {
    setSelectedItem(null);
    setActiveGenreState(genre);
    const catPath = activeCategory === "all" ? "/" : `/${activeCategory}`;
    pushState(`${catPath}?genre=${encodeURIComponent(genre)}`);
  }, [activeCategory, pushState]);

  const goHome = useCallback(() => {
    setSelectedItem(null);
    setActiveCategoryState("all");
    setActiveGenreState(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
    pushState("/");
  }, [pushState]);

  // Handle browser back/forward
  useEffect(() => {
    const onPop = () => {
      isPoppingState.current = true;
      const { category, detailId, genre } = parseURL();
      setActiveCategoryState(category);
      setActiveGenreState(genre);

      if (detailId) {
        const found = getAllData().find((i) => i.id === detailId);
        setSelectedItem(found || null);
        if (found) window.scrollTo({ top: 0 });
      } else {
        setSelectedItem(null);
      }
      isPoppingState.current = false;
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return {
    activeCategory,
    setActiveCategory,
    selectedItem,
    openDetail,
    closeDetail,
    activeGenre,
    setActiveGenre: handleGenreChange,
    handleGenreFromDetail,
    goHome,
  };
}
