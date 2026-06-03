import { useCallback, useEffect, useState } from "react";

const KEY = "stream:continue";
const MAX = 12;

export interface ContinueEntry {
  id: string;
  progress: number; // 0..1
  updatedAt: number;
}

function read(): ContinueEntry[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ContinueEntry[]) : [];
  } catch {
    return [];
  }
}

const listeners = new Set<(e: ContinueEntry[]) => void>();
function broadcast(e: ContinueEntry[]) {
  listeners.forEach((l) => l(e));
}

export function useContinueWatching() {
  const [entries, setEntries] = useState<ContinueEntry[]>(() => read());

  useEffect(() => {
    const l = (next: ContinueEntry[]) => setEntries(next);
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);

  const persist = (next: ContinueEntry[]) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    broadcast(next);
  };

  const record = useCallback((id: string, progress = 0.15) => {
    const cur = read().filter((e) => e.id !== id);
    const next: ContinueEntry[] = [
      { id, progress: Math.max(progress, 0.05), updatedAt: Date.now() },
      ...cur,
    ].slice(0, MAX);
    persist(next);
  }, []);

  const remove = useCallback((id: string) => {
    persist(read().filter((e) => e.id !== id));
  }, []);

  const clear = useCallback(() => persist([]), []);

  return { entries, record, remove, clear };
}