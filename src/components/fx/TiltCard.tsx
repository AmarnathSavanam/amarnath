import { useRef, type ReactNode, type CSSProperties } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  max?: number; // max tilt degrees
  glare?: boolean;
  style?: CSSProperties;
  as?: "div" | "button";
  onClick?: () => void;
  ariaLabel?: string;
}

/**
 * Lightweight cursor-driven 3D tilt with optional specular glare.
 * Pure CSS transforms, no rerenders.
 */
export default function TiltCard({
  children,
  className = "",
  max = 10,
  glare = true,
  style,
  as = "div",
  onClick,
  ariaLabel,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement | HTMLButtonElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * max;
    const ry = (x - 0.5) * max;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, hsl(var(--vapor-ice) / 0.22), transparent 45%)`;
    }
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
    if (glareRef.current) glareRef.current.style.background = "transparent";
  };

  const commonProps: Record<string, unknown> = {
    ref,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    onClick,
    "aria-label": ariaLabel,
    className: `relative transition-transform duration-200 ease-out will-change-transform ${className}`,
    style: { transformStyle: "preserve-3d" as const, ...style },
  };

  const inner = (
    <>
      {children}
      {glare && (
        <div
          ref={glareRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-[background] duration-200"
        />
      )}
    </>
  );

  if (as === "button") {
    return <button {...commonProps}>{inner}</button>;
  }
  return <div {...commonProps}>{inner}</div>;
}