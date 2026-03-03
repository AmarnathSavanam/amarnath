import { useRef, useCallback } from "react";

interface GestureConfig {
  onDoubleTapLeft: () => void;
  onDoubleTapRight: () => void;
  onSwipeVerticalLeft: (delta: number) => void;  // brightness
  onSwipeVerticalRight: (delta: number) => void; // volume
  onSwipeHorizontal: (delta: number) => void;    // seek
  onTap: () => void;
}

export function usePlayerGestures(config: GestureConfig) {
  const lastTapRef = useRef<{ time: number; x: number }>({ time: 0, x: 0 });
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const gestureActiveRef = useRef(false);
  const containerWidthRef = useRef(0);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY, time: Date.now() };
    gestureActiveRef.current = false;
    containerWidthRef.current = (e.currentTarget as HTMLElement).clientWidth;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const touch = e.touches[0];
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;

    if (Math.abs(dy) > 20 || Math.abs(dx) > 30) {
      gestureActiveRef.current = true;
    }

    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 20) {
      const half = containerWidthRef.current / 2;
      const normalizedDelta = -dy / 200; // inverted: swipe up = increase
      if (touchStartRef.current.x < half) {
        config.onSwipeVerticalLeft(normalizedDelta);
      } else {
        config.onSwipeVerticalRight(normalizedDelta);
      }
    }

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 30) {
      config.onSwipeHorizontal(dx / 5);
    }
  }, [config]);

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (gestureActiveRef.current) {
      touchStartRef.current = null;
      return;
    }

    const now = Date.now();
    const touch = e.changedTouches[0];
    const tapX = touch.clientX;
    const last = lastTapRef.current;

    if (now - last.time < 300 && Math.abs(tapX - last.x) < 50) {
      // Double tap
      const half = containerWidthRef.current / 2;
      if (tapX < half) {
        config.onDoubleTapLeft();
      } else {
        config.onDoubleTapRight();
      }
      lastTapRef.current = { time: 0, x: 0 };
    } else {
      lastTapRef.current = { time: now, x: tapX };
      // Single tap after delay
      setTimeout(() => {
        if (lastTapRef.current.time === now) {
          config.onTap();
        }
      }, 300);
    }

    touchStartRef.current = null;
  }, [config]);

  return { onTouchStart, onTouchMove, onTouchEnd };
}
