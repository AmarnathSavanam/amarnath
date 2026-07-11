import { useEffect, useRef } from "react";

/**
 * Layered animated background: aurora gradient blobs + particle canvas.
 * Purely presentational, sits behind all content, pointer-events: none.
 */
export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    type P = { x: number; y: number; vx: number; vy: number; r: number; hue: number };
    let particles: P[] = [];

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(90, Math.round((w * h) / 22000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.4,
        hue: 14 + Math.random() * 320,
      }));
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        g.addColorStop(0, `hsla(${p.hue}, 90%, 65%, 0.55)`);
        g.addColorStop(1, "hsla(280, 25%, 7%, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Aurora blobs */}
      <div className="absolute -top-40 -left-40 w-[70vw] h-[70vw] rounded-full blur-[120px] opacity-40 aurora-blob-1" />
      <div className="absolute top-1/3 -right-40 w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-30 aurora-blob-2" />
      <div className="absolute -bottom-40 left-1/4 w-[55vw] h-[55vw] rounded-full blur-[140px] opacity-30 aurora-blob-3" />
      {/* Light beams */}
      <div className="absolute inset-x-0 top-0 h-full aurora-beam" />
      {/* Grid noise */}
      <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay aurora-grid" />
      {/* Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />
    </div>
  );
}