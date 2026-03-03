import { X, Heart, Clock } from "lucide-react";
import { MOCK_COMMENTS } from "./types";

interface CommentsPanelProps {
  currentTime: number;
  onClose: () => void;
  onSeek: (time: number) => void;
}

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, "0")}`;
}

export default function CommentsPanel({ currentTime, onClose, onSeek }: CommentsPanelProps) {
  const sorted = [...MOCK_COMMENTS].sort((a, b) => a.time - b.time);

  return (
    <div className="w-72 sm:w-80 h-full glass-panel border-l border-border/40 flex flex-col animate-slide-in-right">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/30">
        <h3 className="font-display text-sm font-semibold text-foreground">Comments</h3>
        <button onClick={onClose} className="p-1 rounded-lg hover:bg-secondary/50 transition-colors">
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3 scrollbar-hide">
        {sorted.map((c) => {
          const isNear = Math.abs(c.time - currentTime) < 10;
          return (
            <div
              key={c.id}
              className={`rounded-xl p-3 transition-all duration-300 cursor-pointer ${
                isNear ? "glass-card border-neon-purple/30" : "bg-secondary/30 hover:bg-secondary/50"
              }`}
              onClick={() => onSeek(c.time)}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-lg">{c.avatar}</span>
                <span className="text-xs font-semibold text-foreground">{c.user}</span>
                <button className="flex items-center gap-1 ml-auto text-[10px] text-muted-foreground hover:text-neon-purple transition-colors">
                  <Clock className="w-3 h-3" />
                  {formatTime(c.time)}
                </button>
              </div>
              <p className="text-xs text-secondary-foreground/80 leading-relaxed">{c.text}</p>
              <div className="flex items-center gap-1 mt-2 text-[10px] text-muted-foreground">
                <Heart className="w-3 h-3" />
                {c.likes}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
