export interface Chapter {
  time: number;
  title: string;
  thumbnail?: string;
}

export interface SubtitleTrack {
  id: string;
  label: string;
  srclang: string;
  src: string;
}

export interface AudioTrack {
  id: string;
  label: string;
  language: string;
}

export interface TimestampComment {
  id: string;
  user: string;
  avatar: string;
  time: number;
  text: string;
  likes: number;
}

export interface PlayerState {
  playing: boolean;
  currentTime: number;
  duration: number;
  buffered: number;
  volume: number;
  muted: boolean;
  playbackRate: number;
  fullscreen: boolean;
  pip: boolean;
  locked: boolean;
  showControls: boolean;
  loading: boolean;
  brightness: number;
  showSubtitles: boolean;
  selectedAudioTrack: string;
  showComments: boolean;
  showSettings: boolean;
  skipIntroVisible: boolean;
  autoNextCountdown: number | null;
}

export const SAMPLE_VIDEO_URL = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
export const SAMPLE_MP4_URL = "https://as-cdn21.top/video/0a09c8844ba8f0936c20bd791130d6b6";

export const PLAYBACK_SPEEDS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3];

export const MOCK_CHAPTERS: Chapter[] = [
  { time: 0, title: "Opening" },
  { time: 45, title: "Introduction" },
  { time: 180, title: "Act I — The Setup" },
  { time: 360, title: "Rising Action" },
  { time: 540, title: "Climax" },
  { time: 600, title: "Resolution" },
];

export const MOCK_HEATMAP: number[] = Array.from({ length: 100 }, (_, i) => {
  const x = i / 100;
  return Math.max(0.1, Math.sin(x * Math.PI * 3) * 0.5 + 0.5 + Math.random() * 0.2);
});

export const MOCK_COMMENTS: TimestampComment[] = [
  { id: "1", user: "CinemaFan", avatar: "🎬", time: 12, text: "This opening scene is incredible!", likes: 42 },
  { id: "2", user: "MovieBuff", avatar: "🍿", time: 45, text: "Love the cinematography here", likes: 28 },
  { id: "3", user: "FilmNerd", avatar: "🎥", time: 120, text: "The lighting in this scene is perfect", likes: 15 },
  { id: "4", user: "StreamQueen", avatar: "👑", time: 200, text: "Best plot twist ever!", likes: 67 },
  { id: "5", user: "NightOwl", avatar: "🦉", time: 350, text: "This dialogue is so well written", likes: 33 },
  { id: "6", user: "PixelPro", avatar: "🎨", time: 500, text: "The VFX team deserves an award", likes: 89 },
];
