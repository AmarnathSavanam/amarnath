import { Search, X, Sparkles } from "lucide-react";

interface SearchBarProps {
  query: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export default function SearchBar({ query, onChange, onClear }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-full sm:max-w-[480px] group/search">
      <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neon-purple/60 pointer-events-none transition-colors duration-300 group-focus-within/search:text-neon-purple" />
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder='Search anything… e.g. "mind-bending sci-fi"'
        className="w-full h-[40px] sm:h-[42px] pl-9 pr-9 rounded-xl glass-panel text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 border border-border/50 focus:outline-none focus:ring-1 focus:ring-neon-purple/30 focus:border-neon-purple/40 focus:shadow-[0_0_20px_-5px_hsl(var(--neon-purple)/0.2)] transition-all duration-300"
      />
      {query && (
        <button onClick={onClear} className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded text-muted-foreground hover:text-foreground transition-colors" aria-label="Clear search">
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
