"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

import { twMerge } from "tailwind-merge";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG = {
  width: 600,
  height: 600,
  onRender: () => {},
  devicePixelRatio: typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 4500,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [1, 1, 1],
  glowColor: [1, 1, 1],
  markers: [
    { location: [31.1471, 75.3412], size: 0.1 }, // Punjab, India
    { location: [20.9517, 85.0985], size: 0.08 }, // Odisha, India
    { location: [28.6139, 77.209], size: 0.08 }, // Delhi
    { location: [19.076, 72.8777], size: 0.08 }, // Mumbai
    { location: [37.7749, -122.4194], size: 0.07 }, // SF
    { location: [40.7128, -74.006], size: 0.08 }, // NYC
    { location: [51.5074, -0.1278], size: 0.07 }, // London
    { location: [35.6762, 139.6503], size: 0.07 }, // Tokyo
    { location: [1.3521, 103.8198], size: 0.06 }, // Singapore
  ],
};

export function Globe({ className, config = GLOBE_CONFIG }) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const isVisible = useRef(false);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    let globe = null;
    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize, { passive: true });
    onResize();

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
        if (entry.isIntersecting && !globe && canvasRef.current) {
          width = canvasRef.current.offsetWidth || 400;
          globe = createGlobe(canvasRef.current, {
            ...config,
            devicePixelRatio: dpr,
            width: width * dpr,
            height: width * dpr,
            onRender: (state) => {
              if (!isVisible.current) return;
              if (!pointerInteracting.current) phi += 0.005;
              state.phi = phi + rs.get();
              state.width = width * dpr;
              state.height = width * dpr;
            },
          });
          setTimeout(() => {
            if (canvasRef.current) canvasRef.current.style.opacity = "1";
          }, 0);
        } else if (!entry.isIntersecting && globe) {
          globe.destroy();
          globe = null;
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (globe) {
        globe.destroy();
        globe = null;
      }
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      ref={containerRef}
      className={twMerge(
        "aspect-square w-full max-w-[500px] flex items-center justify-center",
        className
      )}
    >
      <canvas
        className="w-full h-full aspect-square opacity-0 transition-opacity duration-500 [contain:layout_paint_size] cursor-grab"
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
