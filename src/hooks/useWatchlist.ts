import { useCallback, useEffect, useState } from "react";

const KEY = "stream:watchlist";

function read(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

const listeners = new Set<(ids: string[]) => void>();
function broadcast(ids: string[]) {
  listeners.forEach((l) => l(ids));
}

export function useWatchlist() {
  const [ids, setIds] = useState<string[]>(() => read());

  useEffect(() => {
    const l = (next: string[]) => setIds(next);
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);

  const persist = (next: string[]) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    broadcast(next);
  };

  const add = useCallback((id: string) => {
    const cur = read();
    if (cur.includes(id)) return;
    persist([id, ...cur]);
  }, []);

  const remove = useCallback((id: string) => {
    persist(read().filter((x) => x !== id));
  }, []);

  const toggle = useCallback((id: string) => {
    const cur = read();
    persist(cur.includes(id) ? cur.filter((x) => x !== id) : [id, ...cur]);
  }, []);

  const has = useCallback((id: string) => ids.includes(id), [ids]);

  return { ids, add, remove, toggle, has };
}