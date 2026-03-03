import { useRef, useState, useCallback } from "react";
import type { Chapter } from "./types";
import { MOCK_HEATMAP, MOCK_CHAPTERS } from "./types";

interface PlayerSeekBarProps {
  currentTime: number;
  duration: number;
  buffered: number;
  onSeek: (time: number) => void;
}

function formatTime(s: number) {
  if (!s || !isFinite(s)) return "0:00";
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = Math.floor(s % 60);
  return h > 0 ? `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}` : `${m}:${String(sec).padStart(2, "0")}`;
}

export default function PlayerSeekBar({ currentTime, duration, buffered, onSeek }: PlayerSeekBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [hoverX, setHoverX] = useState(0);
  const [dragging, setDragging] = useState(false);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const bufferedPct = duration > 0 ? (buffered / duration) * 100 : 0;
  const hoverTime = duration > 0 ? (hoverX / (barRef.current?.clientWidth || 1)) * duration : 0;

  // Find current chapter
  const currentChapter = [...MOCK_CHAPTERS].reverse().find((c) => hoverTime >= c.time);

  const getTimeFromEvent = useCallback((e: React.MouseEvent | MouseEvent) => {
    if (!barRef.current || duration <= 0) return 0;
    const rect = barRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    return (x / rect.width) * duration;
  }, [duration]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
    onSeek(getTimeFromEvent(e));

    const onMove = (ev: MouseEvent) => {
      onSeek(getTimeFromEvent(ev));
    };
    const onUp = () => {
      setDragging(false);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  }, [getTimeFromEvent, onSeek]);

  return (
    <div className="w-full px-1">
      {/* Heatmap */}
      <div className="flex items-end h-6 gap-px mb-0.5 opacity-60">
        {MOCK_HEATMAP.map((val, i) => {
          const pct = (i / MOCK_HEATMAP.length) * 100;
          const isPlayed = pct <= progress;
          return (
            <div
              key={i}
              className="flex-1 rounded-t-sm transition-all duration-150"
              style={{
                height: `${val * 100}%`,
                background: isPlayed
                  ? "hsl(265 80% 60%)"
                  : "hsl(240 14% 20%)",
                opacity: isPlayed ? 1 : 0.5,
              }}
            />
          );
        })}
      </div>

      {/* Seek bar */}
      <div
        ref={barRef}
        className="relative h-5 flex items-center cursor-pointer group"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => { setHovering(false); }}
        onMouseMove={(e) => {
          if (!barRef.current) return;
          const rect = barRef.current.getBoundingClientRect();
          setHoverX(e.clientX - rect.left);
        }}
        onMouseDown={handleMouseDown}
      >
        {/* Track bg */}
        <div className="absolute inset-x-0 h-1 rounded-full bg-secondary group-hover:h-1.5 transition-all">
          {/* Buffered */}
          <div
            className="absolute h-full rounded-full"
            style={{ width: `${bufferedPct}%`, background: "hsl(240 14% 24%)" }}
          />
          {/* Progress */}
          <div
            className="absolute h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, hsl(265 80% 60%), hsl(280 70% 68%))",
            }}
          />
          {/* Chapter markers */}
          {MOCK_CHAPTERS.slice(1).map((ch) => {
            const pos = duration > 0 ? (ch.time / duration) * 100 : 0;
            return (
              <div
                key={ch.time}
                className="absolute top-0 w-0.5 h-full bg-foreground/30"
                style={{ left: `${pos}%` }}
              />
            );
          })}
        </div>

        {/* Progress thumb */}
        <div
          className="absolute w-3.5 h-3.5 rounded-full shadow-lg transition-transform duration-100"
          style={{
            left: `calc(${progress}% - 7px)`,
            background: "hsl(265 80% 65%)",
            boxShadow: "0 0 10px hsl(265 80% 60% / 0.5)",
            transform: hovering || dragging ? "scale(1.3)" : "scale(1)",
          }}
        />

        {/* Hover tooltip */}
        {hovering && (
          <div
            className="absolute -top-14 transform -translate-x-1/2 pointer-events-none z-10"
            style={{ left: hoverX }}
          >
            <div className="glass-panel rounded-lg px-2.5 py-1.5 text-center">
              <div className="text-xs font-mono font-semibold text-foreground">{formatTime(hoverTime)}</div>
              {currentChapter && (
                <div className="text-[10px] text-muted-foreground mt-0.5">{currentChapter.title}</div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Time display */}
      <div className="flex justify-between text-[11px] font-mono text-muted-foreground mt-0.5">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}
