import { useCallback, useEffect, useState } from "react";
import { Loader2, SkipForward, Play } from "lucide-react";
import { usePlayerState } from "./usePlayerState";
import { usePlayerGestures } from "./usePlayerGestures";
import PlayerSeekBar from "./PlayerSeekBar";
import PlayerControls from "./PlayerControls";
import CommentsPanel from "./CommentsPanel";

interface PremiumPlayerProps {
  videoId?: string;
  title?: string;
  onBack?: () => void;
}

export default function PremiumPlayer({ videoId = "demo", title = "Now Playing" }: PremiumPlayerProps) {
  const {
    videoRef, containerRef, state, update,
    togglePlay, seek, seekRelative, setVolume, toggleMute,
    setPlaybackRate, toggleFullscreen, togglePip, toggleLock,
    skipIntro, showControlsTemporarily,
  } = usePlayerState(videoId);

  const [doubleTapSide, setDoubleTapSide] = useState<"left" | "right" | null>(null);
  const [brightnessOverlay, setBrightnessOverlay] = useState<number | null>(null);
  const [volumeOverlay, setVolumeOverlay] = useState<number | null>(null);

  // Double-tap ripple effect
  const showDoubleTap = useCallback((side: "left" | "right") => {
    setDoubleTapSide(side);
    setTimeout(() => setDoubleTapSide(null), 600);
  }, []);

  const gestures = usePlayerGestures({
    onDoubleTapLeft: () => { seekRelative(-10); showDoubleTap("left"); },
    onDoubleTapRight: () => { seekRelative(10); showDoubleTap("right"); },
    onSwipeVerticalLeft: (delta) => {
      const newBr = Math.max(0.2, Math.min(1.5, state.brightness + delta * 0.01));
      update({ brightness: newBr });
      setBrightnessOverlay(newBr);
      setTimeout(() => setBrightnessOverlay(null), 800);
    },
    onSwipeVerticalRight: (delta) => {
      const newVol = Math.max(0, Math.min(1, state.volume + delta * 0.01));
      setVolume(newVol);
      setVolumeOverlay(newVol);
      setTimeout(() => setVolumeOverlay(null), 800);
    },
    onSwipeHorizontal: (delta) => { seekRelative(delta); },
    onTap: () => {
      if (state.locked) {
        update({ showControls: !state.showControls });
      } else {
        showControlsTemporarily();
      }
    },
  });

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      switch (e.key) {
        case " ": case "k": e.preventDefault(); togglePlay(); break;
        case "ArrowLeft": e.preventDefault(); seekRelative(-10); break;
        case "ArrowRight": e.preventDefault(); seekRelative(10); break;
        case "ArrowUp": e.preventDefault(); setVolume(Math.min(1, state.volume + 0.1)); break;
        case "ArrowDown": e.preventDefault(); setVolume(Math.max(0, state.volume - 0.1)); break;
        case "f": e.preventDefault(); toggleFullscreen(); break;
        case "m": e.preventDefault(); toggleMute(); break;
        case "p": e.preventDefault(); togglePip(); break;
        case "l": e.preventDefault(); toggleLock(); break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [togglePlay, seekRelative, setVolume, toggleFullscreen, toggleMute, togglePip, toggleLock, state.volume]);

  // Fullscreen change listener
  useEffect(() => {
    const onChange = () => update({ fullscreen: !!document.fullscreenElement });
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, [update]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-background overflow-hidden rounded-2xl border border-border/40 select-none group"
      style={{ filter: `brightness(${state.brightness})` }}
      onMouseMove={showControlsTemporarily}
      onMouseLeave={() => state.playing && update({ showControls: false })}
    >
      <div className="flex">
        {/* Video area */}
        <div className="relative flex-1">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-contain bg-background"
              playsInline
              preload="auto"
              onClick={togglePlay}
            />

            {/* Touch gesture layer */}
            <div
              className="absolute inset-0 z-10 sm:hidden"
              {...gestures}
            />

            {/* Loading spinner */}
            {state.loading && (
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <Loader2 className="w-12 h-12 text-neon-purple animate-spin" />
              </div>
            )}

            {/* Loading skeleton */}
            {state.loading && state.currentTime === 0 && (
              <div className="absolute inset-0 z-15 pointer-events-none">
                <div className="w-full h-full bg-secondary animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            )}

            {/* Double-tap ripple */}
            {doubleTapSide && (
              <div className={`absolute top-0 ${doubleTapSide === "left" ? "left-0" : "right-0"} w-1/2 h-full flex items-center justify-center z-30 pointer-events-none`}>
                <div className="flex flex-col items-center animate-fade-in-scale">
                  <SkipForward className={`w-10 h-10 text-foreground ${doubleTapSide === "left" ? "rotate-180" : ""}`} />
                  <span className="text-xs font-semibold text-foreground mt-1">10s</span>
                </div>
              </div>
            )}

            {/* Brightness overlay */}
            {brightnessOverlay !== null && (
              <div className="absolute top-4 left-4 glass-panel rounded-xl px-3 py-2 z-30 pointer-events-none animate-fade-in-scale">
                <div className="text-xs text-foreground font-semibold">☀️ {Math.round(brightnessOverlay * 100)}%</div>
              </div>
            )}

            {/* Volume overlay */}
            {volumeOverlay !== null && (
              <div className="absolute top-4 right-4 glass-panel rounded-xl px-3 py-2 z-30 pointer-events-none animate-fade-in-scale">
                <div className="text-xs text-foreground font-semibold">🔊 {Math.round(volumeOverlay * 100)}%</div>
              </div>
            )}

            {/* Skip Intro */}
            {state.skipIntroVisible && !state.locked && (
              <div className="absolute bottom-20 right-4 z-30 animate-fade-in-scale">
                <button
                  onClick={skipIntro}
                  className="glass-panel rounded-xl px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary/60 transition-all border border-border/50 hover:border-neon-purple/40 hover:shadow-[0_0_20px_-5px_hsl(265_80%_60%/0.3)]"
                >
                  Skip Intro →
                </button>
              </div>
            )}

            {/* Auto-next countdown */}
            {state.autoNextCountdown !== null && state.autoNextCountdown > 0 && (
              <div className="absolute inset-0 flex items-center justify-center z-30 bg-background/70">
                <div className="text-center animate-fade-in-scale">
                  <div className="w-20 h-20 rounded-full border-2 border-neon-purple flex items-center justify-center mb-4 mx-auto relative">
                    <span className="font-display text-2xl font-bold text-foreground">{state.autoNextCountdown}</span>
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 80 80">
                      <circle
                        cx="40" cy="40" r="38"
                        fill="none"
                        stroke="hsl(265 80% 60%)"
                        strokeWidth="2"
                        strokeDasharray={`${(state.autoNextCountdown / 10) * 238} 238`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Next episode in</p>
                  <button
                    onClick={() => update({ autoNextCountdown: null })}
                    className="glass-panel rounded-xl px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary/60 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Controls overlay */}
            <div
              className={`absolute inset-x-0 bottom-0 z-20 transition-all duration-500 ${
                state.showControls ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              {/* Title bar */}
              <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-background/80 to-transparent">
                <h2 className="font-display text-sm font-semibold text-foreground truncate">{title}</h2>
              </div>

              {/* Bottom controls */}
              <div className="bg-gradient-to-t from-background/95 via-background/70 to-transparent pt-16 pb-3 px-3 sm:px-5">
                <PlayerSeekBar
                  currentTime={state.currentTime}
                  duration={state.duration}
                  buffered={state.buffered}
                  onSeek={seek}
                />
                <div className="mt-1">
                  <PlayerControls
                    playing={state.playing}
                    volume={state.volume}
                    muted={state.muted}
                    playbackRate={state.playbackRate}
                    fullscreen={state.fullscreen}
                    locked={state.locked}
                    showSubtitles={state.showSubtitles}
                    showSettings={state.showSettings}
                    showComments={state.showComments}
                    onTogglePlay={togglePlay}
                    onSeekRelative={seekRelative}
                    onVolumeChange={setVolume}
                    onToggleMute={toggleMute}
                    onSetPlaybackRate={setPlaybackRate}
                    onToggleFullscreen={toggleFullscreen}
                    onTogglePip={togglePip}
                    onToggleLock={toggleLock}
                    onToggleSubtitles={() => update({ showSubtitles: !state.showSubtitles })}
                    onToggleSettings={() => update({ showSettings: !state.showSettings })}
                    onToggleComments={() => update({ showComments: !state.showComments })}
                  />
                </div>
              </div>
            </div>

            {/* Center play button when paused */}
            {!state.playing && !state.loading && state.showControls && !state.locked && (
              <div className="absolute inset-0 flex items-center justify-center z-15 pointer-events-none">
                <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center animate-fade-in-scale">
                  <Play className="w-7 h-7 text-foreground ml-1 fill-foreground/30" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Comments panel */}
        {state.showComments && (
          <CommentsPanel
            currentTime={state.currentTime}
            onClose={() => update({ showComments: false })}
            onSeek={seek}
          />
        )}
      </div>
    </div>
  );
}
