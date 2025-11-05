import { useRef, useState, useCallback, useLayoutEffect } from "react";

export type Pos = { x: number; y: number; width: number; height: number };

export const useNodePositions = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<Record<string, HTMLElement | null>>({});
  const [positions, setPositions] = useState<Record<string, Pos>>({});

  const measure = useCallback(() => {
    const cont = containerRef.current;
    if (!cont) return;
    const contRect = cont.getBoundingClientRect();
    const next: Record<string, Pos> = {};
    Object.entries(nodeRefs.current).forEach(([id, el]) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      next[id] = {
        x: r.left - contRect.left,
        y: r.top - contRect.top,
        width: r.width,
        height: r.height,
      };
    });
    setPositions(next);
  }, []);

useLayoutEffect(() => {
  // Esperar a que framer-motion termine la animación inicial
  const timeout = setTimeout(() => {
    measure();
  }, 600); // duración un poquito mayor a la animación inicial (0.5s)

  const ro = new ResizeObserver(() => measure());
  if (containerRef.current) ro.observe(containerRef.current);
  window.addEventListener("resize", measure);

  return () => {
    clearTimeout(timeout);
    ro.disconnect();
    window.removeEventListener("resize", measure);
  };
}, [measure]);


  return { containerRef, nodeRefs, positions, measure };
};
