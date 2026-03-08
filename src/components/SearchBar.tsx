import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  query: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export default function SearchBar({ query, onChange, onClear }: SearchBarProps) {
  const [expanded, setExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isActive = expanded || query.length > 0;

  useEffect(() => {
    if (expanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [expanded]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node) && !query) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [query]);

  // Keyboard shortcut: Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setExpanded(true);
      }
      if (e.key === "Escape") {
        setExpanded(false);
        inputRef.current?.blur();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div ref={containerRef} className="relative flex items-center">
      {/* Collapsed: Search icon button — always visible */}
      <button
        onClick={() => setExpanded(true)}
        className={cn(
          "relative flex items-center justify-center rounded-full transition-all duration-400 ease-out",
          isActive
            ? "w-0 opacity-0 pointer-events-none"
            : "w-10 h-10 sm:w-11 sm:h-11 bg-secondary/50 border border-border/40 text-muted-foreground hover:text-foreground hover:border-neon-purple/50 hover:bg-secondary/70 hover:shadow-[0_0_24px_-4px_hsl(var(--neon-purple)/0.5)] active:scale-90"
        )}
        aria-label="Search (⌘K)"
        title="Search (⌘K)"
      >
        <Search className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
      </button>

      {/* Expanded: search input */}
      <div
        className={cn(
          "flex items-center gap-2.5 rounded-2xl border transition-all duration-500 ease-out overflow-hidden",
          isActive
            ? "w-[220px] sm:w-[320px] md:w-[380px] opacity-100 px-3.5 py-2.5 bg-secondary/30 border-neon-purple/40 shadow-[0_0_40px_-8px_hsl(var(--neon-purple)/0.3),inset_0_1px_0_0_hsl(var(--neon-purple)/0.15)]"
            : "w-0 opacity-0 px-0 py-0 border-transparent"
        )}
      >
        <Search className="w-4 h-4 text-neon-purple shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search titles, genres…"
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 outline-none min-w-0"
        />
        {query ? (
          <button
            onClick={onClear}
            className="shrink-0 p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={() => setExpanded(false)}
            className="shrink-0 p-1 rounded-full text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
