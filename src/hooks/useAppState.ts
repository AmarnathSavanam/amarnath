import { useState, useCallback, useEffect, useRef } from "react";
import { useNavigate, useLocation, useParams, useSearchParams } from "react-router-dom";
import type { EntertainmentItem, Category, ViewMode } from "@/data/entertainment";
import { getAllData } from "@/data/entertainment";

const validCategories: ViewMode[] = ["all", "marvel", "series", "anime"];

export function useAppState() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Derive state from URL
  const pathParts = location.pathname.split("/").filter(Boolean);
  
  // Parse category from URL: /marvel, /series, /anime, / = all
  const urlCategory = (pathParts[0] && validCategories.includes(pathParts[0] as ViewMode))
    ? pathParts[0] as ViewMode
    : "all";

  // Parse detail: /marvel/detail/id or /detail/id
  const isDetailRoute = pathParts.includes("detail");
  const detailIndex = pathParts.indexOf("detail");
  const detailId = isDetailRoute ? pathParts[detailIndex + 1] : null;

  // Parse genre from search params
  const urlGenre = searchParams.get("genre") || null;

  const [activeCategory, setActiveCategoryState] = useState<ViewMode>(urlCategory);
  const [selectedItem, setSelectedItem] = useState<EntertainmentItem | null>(null);
  const [activeGenre, setActiveGenreState] = useState<string | null>(urlGenre);

  // Sync state from URL on mount and URL changes
  useEffect(() => {
    setActiveCategoryState(urlCategory);
    setActiveGenreState(urlGenre);

    if (detailId) {
      const allItems = getAllData();
      const found = allItems.find((i) => i.id === detailId);
      if (found) {
        setSelectedItem(found);
      } else {
        setSelectedItem(null);
      }
    } else {
      setSelectedItem(null);
    }
  }, [location.pathname, location.search]);

  const getCategoryPath = useCallback((cat: ViewMode) => {
    return cat === "all" ? "/" : `/${cat}`;
  }, []);

  const setActiveCategory = useCallback((cat: ViewMode) => {
    const path = cat === "all" ? "/" : `/${cat}`;
    navigate(path);
  }, [navigate]);

  const openDetail = useCallback((item: EntertainmentItem) => {
    const catPath = activeCategory === "all" ? "" : `/${activeCategory}`;
    navigate(`${catPath}/detail/${item.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate, activeCategory]);

  const closeDetail = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleGenreChange = useCallback((genre: string | null) => {
    const catPath = activeCategory === "all" ? "/" : `/${activeCategory}`;
    if (genre) {
      navigate(`${catPath}?genre=${encodeURIComponent(genre)}`);
    } else {
      navigate(catPath);
    }
  }, [navigate, activeCategory]);

  const handleGenreFromDetail = useCallback((genre: string) => {
    const catPath = activeCategory === "all" ? "/" : `/${activeCategory}`;
    navigate(`${catPath}?genre=${encodeURIComponent(genre)}`);
  }, [navigate, activeCategory]);

  const goHome = useCallback(() => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);

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
