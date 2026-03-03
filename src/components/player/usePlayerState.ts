import { useState, useRef, useCallback, useEffect } from "react";
import Hls from "hls.js";
import type { PlayerState } from "./types";
import { SAMPLE_VIDEO_URL, SAMPLE_MP4_URL } from "./types";

const RESUME_KEY = "player-resume-";

export function usePlayerState(videoId: string, videoUrl?: string | null) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const [state, setState] = useState<PlayerState>({
    playing: false,
    currentTime: 0,
    duration: 0,
    buffered: 0,
    volume: 1,
    muted: false,
    playbackRate: 1,
    fullscreen: false,
    pip: false,
    locked: false,
    showControls: true,
    loading: true,
    brightness: 1,
    showSubtitles: false,
    selectedAudioTrack: "default",
    showComments: false,
    showSettings: false,
    skipIntroVisible: false,
    autoNextCountdown: null,
  });

  const update = useCallback((patch: Partial<PlayerState>) => {
    setState((s) => ({ ...s, ...patch }));
  }, []);

  // Initialize video source
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = videoUrl || SAMPLE_VIDEO_URL;

    if (Hls.isSupported() && src.includes(".m3u8")) {
      const hls = new Hls({ startLevel: -1 });
      hlsRef.current = hls;
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        update({ loading: false });
        // Auto-resume
        const saved = localStorage.getItem(RESUME_KEY + videoId);
        if (saved) {
          video.currentTime = parseFloat(saved);
        }
      });
      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          // Fallback to MP4
          video.src = SAMPLE_MP4_URL;
          update({ loading: false });
        }
      });
      return () => hls.destroy();
    } else {
      video.src = src.includes(".m3u8") ? SAMPLE_MP4_URL : src;
      video.addEventListener("loadeddata", () => update({ loading: false }), { once: true });
    }
  }, [videoId, videoUrl, update]);

  // Save position periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const video = videoRef.current;
      if (video && video.currentTime > 5) {
        localStorage.setItem(RESUME_KEY + videoId, String(video.currentTime));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [videoId]);

  // Video event listeners
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      const buffEnd = video.buffered.length > 0 ? video.buffered.end(video.buffered.length - 1) : 0;
      update({
        currentTime: video.currentTime,
        buffered: buffEnd,
        duration: video.duration || 0,
      });

      // Skip intro logic (show between 5-35s)
      if (video.currentTime >= 5 && video.currentTime <= 35) {
        update({ skipIntroVisible: true });
      } else {
        update({ skipIntroVisible: false });
      }
    };

    const onEnded = () => {
      update({ playing: false, autoNextCountdown: 10 });
    };

    const onWaiting = () => update({ loading: true });
    const onCanPlay = () => update({ loading: false });

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);
    video.addEventListener("waiting", onWaiting);
    video.addEventListener("canplay", onCanPlay);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("waiting", onWaiting);
      video.removeEventListener("canplay", onCanPlay);
    };
  }, [update]);

  // Auto-next countdown
  useEffect(() => {
    if (state.autoNextCountdown === null || state.autoNextCountdown <= 0) return;
    const timer = setTimeout(() => {
      update({ autoNextCountdown: state.autoNextCountdown! - 1 });
    }, 1000);
    return () => clearTimeout(timer);
  }, [state.autoNextCountdown, update]);

  // Auto-hide controls
  const showControlsTemporarily = useCallback(() => {
    if (state.locked) return;
    update({ showControls: true });
    clearTimeout(controlsTimerRef.current);
    if (state.playing) {
      controlsTimerRef.current = setTimeout(() => {
        update({ showControls: false, showSettings: false });
      }, 3500);
    }
  }, [state.playing, state.locked, update]);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      update({ playing: true, autoNextCountdown: null });
    } else {
      video.pause();
      update({ playing: false });
    }
    showControlsTemporarily();
  }, [update, showControlsTemporarily]);

  const seek = useCallback((time: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(0, Math.min(time, video.duration || 0));
    showControlsTemporarily();
  }, [showControlsTemporarily]);

  const seekRelative = useCallback((delta: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(0, Math.min(video.currentTime + delta, video.duration || 0));
    showControlsTemporarily();
  }, [showControlsTemporarily]);

  const setVolume = useCallback((vol: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = vol;
    update({ volume: vol, muted: vol === 0 });
  }, [update]);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    update({ muted: video.muted });
  }, [update]);

  const setPlaybackRate = useCallback((rate: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = rate;
    update({ playbackRate: rate });
  }, [update]);

  const toggleFullscreen = useCallback(async () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      await el.requestFullscreen();
      update({ fullscreen: true });
    } else {
      await document.exitFullscreen();
      update({ fullscreen: false });
    }
  }, [update]);

  const togglePip = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
        update({ pip: false });
      } else {
        await video.requestPictureInPicture();
        update({ pip: true });
      }
    } catch { /* PiP not supported */ }
  }, [update]);

  const toggleLock = useCallback(() => {
    update({ locked: !state.locked, showControls: true });
  }, [state.locked, update]);

  const skipIntro = useCallback(() => {
    seek(36);
    update({ skipIntroVisible: false });
  }, [seek, update]);

  return {
    videoRef,
    containerRef,
    state,
    update,
    togglePlay,
    seek,
    seekRelative,
    setVolume,
    toggleMute,
    setPlaybackRate,
    toggleFullscreen,
    togglePip,
    toggleLock,
    skipIntro,
    showControlsTemporarily,
  };
}
