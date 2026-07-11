import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 950);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-1/3 left-1/3 w-[40vw] h-[40vw] rounded-full blur-[120px] bg-[hsl(var(--vapor-cyan)/0.3)]" />
            <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full blur-[120px] bg-[hsl(var(--vapor-indigo)/0.28)]" />
          </div>
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
              className="w-16 h-16 rounded-2xl"
              style={{
                background:
                  "conic-gradient(from 0deg, hsl(var(--vapor-cyan)), hsl(var(--vapor-indigo)), hsl(var(--vapor-lavender)), hsl(var(--vapor-cyan)))",
                mask: "radial-gradient(circle, transparent 55%, #000 57%)",
                WebkitMask: "radial-gradient(circle, transparent 55%, #000 57%)",
              }}
            />
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="font-display text-sm tracking-[0.4em] uppercase vapor-gradient-text"
            >
              Stream
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}