"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type SliderImage = {
  src: string;
  alt: string;
};

type AutoImageSliderProps = {
  images: SliderImage[];
  className?: string;
  intervalMs?: number;
};

export default function AutoImageSlider({
  images,
  className = "",
  intervalMs = 3500,
}: AutoImageSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div className={`relative overflow-hidden ${className}`.trim()}>
      <div className="sr-only" aria-hidden="true">
        {images.slice(1).map((image) => (
          <Image
            key={image.src}
            src={image.src}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        ))}
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          key={images[index].src}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
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
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center gap-2 pb-4">
        {images.map((image, imageIndex) => (
          <span
            key={image.src}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              imageIndex === index ? "w-8 bg-white" : "w-3 bg-white/45"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}
