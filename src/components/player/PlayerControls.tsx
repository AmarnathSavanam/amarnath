import {
  Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Volume1,
  Maximize, Minimize, PictureInPicture, Lock, Unlock, Settings,
  MessageSquare, Subtitles, ChevronRight,
} from "lucide-react";
import { PLAYBACK_SPEEDS } from "./types";

interface PlayerControlsProps {
  playing: boolean;
  volume: number;
  muted: boolean;
  playbackRate: number;
  fullscreen: boolean;
  locked: boolean;
  showSubtitles: boolean;
  showSettings: boolean;
  showComments: boolean;
  onTogglePlay: () => void;
  onSeekRelative: (delta: number) => void;
  onVolumeChange: (vol: number) => void;
  onToggleMute: () => void;
  onSetPlaybackRate: (rate: number) => void;
  onToggleFullscreen: () => void;
  onTogglePip: () => void;
  onToggleLock: () => void;
  onToggleSubtitles: () => void;
  onToggleSettings: () => void;
  onToggleComments: () => void;
}

export default function PlayerControls(props: PlayerControlsProps) {
  const {
    playing, volume, muted, playbackRate, fullscreen, locked,
    showSubtitles, showSettings, showComments,
    onTogglePlay, onSeekRelative, onVolumeChange, onToggleMute,
    onSetPlaybackRate, onToggleFullscreen, onTogglePip,
    onToggleLock, onToggleSubtitles, onToggleSettings, onToggleComments,
  } = props;

  if (locked) {
    return (
      <div className="flex items-center justify-center">
        <button onClick={onToggleLock} className="p-3 rounded-full glass-panel hover:bg-secondary/60 transition-all" aria-label="Unlock">
          <Lock className="w-6 h-6 text-foreground" />
        </button>
      </div>
    );
  }

  const VolumeIcon = muted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      {/* Left controls */}
      <div className="flex items-center gap-0.5 sm:gap-1">
        <ControlBtn onClick={() => onSeekRelative(-10)} label="Rewind 10s">
          <SkipBack className="w-5 h-5" />
        </ControlBtn>

        <button
          onClick={onTogglePlay}
          className="p-2.5 sm:p-3 rounded-full glass-panel hover:bg-secondary/60 transition-all hover:scale-110"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? <Pause className="w-6 h-6 fill-foreground text-foreground" /> : <Play className="w-6 h-6 fill-foreground text-foreground ml-0.5" />}
        </button>

        <ControlBtn onClick={() => onSeekRelative(10)} label="Forward 10s">
          <SkipForward className="w-5 h-5" />
        </ControlBtn>
      </div>

      {/* Volume */}
      <div className="hidden sm:flex items-center gap-1.5 group/vol ml-2">
        <ControlBtn onClick={onToggleMute} label="Toggle mute">
          <VolumeIcon className="w-4.5 h-4.5" />
        </ControlBtn>
        <div className="w-0 group-hover/vol:w-20 overflow-hidden transition-all duration-300">
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={muted ? 0 : volume}
            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
            className="w-20 h-1 accent-neon-purple cursor-pointer"
            style={{ accentColor: "hsl(265 80% 60%)" }}
          />
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right controls */}
      <div className="flex items-center gap-0.5 sm:gap-1">
        {/* Playback speed */}
        <div className="relative">
          <button
            onClick={onToggleSettings}
            className="px-2 py-1 rounded-lg text-xs font-mono font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            {playbackRate}x
          </button>
          {showSettings && (
            <div className="absolute bottom-full right-0 mb-2 glass-panel rounded-xl p-2 min-w-[120px] z-50 animate-fade-in-scale">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground px-2 pb-1 font-semibold">Speed</div>
              {PLAYBACK_SPEEDS.map((s) => (
                <button
                  key={s}
                  onClick={() => { onSetPlaybackRate(s); onToggleSettings(); }}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors ${
                    s === playbackRate ? "bg-neon-purple/20 text-foreground font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
          )}
        </div>

        <ControlBtn onClick={onToggleSubtitles} label="Subtitles" active={showSubtitles}>
          <Subtitles className="w-4.5 h-4.5" />
        </ControlBtn>

        <ControlBtn onClick={onToggleComments} label="Comments" active={showComments}>
          <MessageSquare className="w-4.5 h-4.5" />
        </ControlBtn>

        <ControlBtn onClick={onToggleLock} label="Lock screen">
          <Unlock className="w-4.5 h-4.5" />
        </ControlBtn>

        <ControlBtn onClick={onTogglePip} label="Picture-in-Picture" className="hidden sm:flex">
          <PictureInPicture className="w-4.5 h-4.5" />
        </ControlBtn>

        <ControlBtn onClick={onToggleFullscreen} label={fullscreen ? "Exit fullscreen" : "Fullscreen"}>
          {fullscreen ? <Minimize className="w-4.5 h-4.5" /> : <Maximize className="w-4.5 h-4.5" />}
        </ControlBtn>
      </div>
    </div>
  );
}

function ControlBtn({ onClick, label, children, active, className = "" }: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`p-2 rounded-lg transition-all hover:bg-secondary/40 ${
        active ? "text-neon-purple" : "text-foreground/80 hover:text-foreground"
      } ${className}`}
    >
      {children}
    </button>
  );
}
