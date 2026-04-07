"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "/media/images/home/about.jpg",
    alt: "Artistry event venue exterior at Nassau County Museum of Art",
  },
  {
    src: "/media/images/home/about_1.jpg",
    alt: "Artistry venue interior and grounds",
  },
  {
    src: "/media/images/home/about_3.jpg",
    alt: "Artistry venue gardens and estate",
  },
];

// How much wheel delta must accumulate before we count it as one "step"
const WHEEL_THRESHOLD = 80;
// Minimum ms between steps (prevents rapid-fire on trackpads)
const STEP_COOLDOWN = 900;

export default function AboutImageScroller() {
  const [[index, direction], setSlide] = useState([0, 0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelAccum = useRef(0);
  const lastStep = useRef(0);
  const touchStartY = useRef<number | null>(null);
  const indexRef = useRef(0);

  const step = useCallback((dir: 1 | -1) => {
    const now = Date.now();
    if (now - lastStep.current < STEP_COOLDOWN) return false;

    const next = indexRef.current + dir;
    if (next < 0 || next >= images.length) return false;

    lastStep.current = now;
    indexRef.current = next;
    setSlide([next, dir]);
    return true;
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const isInView = () => {
      const rect = el.getBoundingClientRect();
      // Only intercept when the image container is fully inside the viewport
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const handleWheel = (e: WheelEvent) => {
      if (!isInView()) {
        wheelAccum.current = 0;
        return;
      }

      const dir = e.deltaY > 0 ? 1 : -1;
      const current = indexRef.current;

      // If at boundary, let the page scroll freely
      if (dir === 1 && current === images.length - 1) return;
      if (dir === -1 && current === 0) return;

      // Accumulate and check threshold
      wheelAccum.current += Math.abs(e.deltaY);
      if (wheelAccum.current >= WHEEL_THRESHOLD) {
        wheelAccum.current = 0;
        const advanced = step(dir);
        if (advanced) {
          e.preventDefault();
          e.stopPropagation();
        }
      } else {
        // Haven't crossed threshold yet — block scroll to prevent partial page movement
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null || !isInView()) return;
      const dy = touchStartY.current - e.changedTouches[0].clientY;
      touchStartY.current = null;
      if (Math.abs(dy) < 50) return;
      const dir = dy > 0 ? 1 : -1;
      const current = indexRef.current;
      if (dir === 1 && current === images.length - 1) return;
      if (dir === -1 && current === 0) return;
      step(dir);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [step]);

  const variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      y: "0%",
      opacity: 1,
    },
    exit: (dir: number) => ({
      y: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/5] overflow-hidden"
    >
      {/* Preload all images by rendering them hidden — browser fetches & decodes them immediately */}
      <div className="sr-only" aria-hidden="true">
        {images.slice(1).map((img) => (
          <Image
            key={img.src}
            src={img.src}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ))}
      </div>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/25 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative accent */}
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 -z-10" />
    </div>
  );
}
