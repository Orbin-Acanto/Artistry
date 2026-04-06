"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "@/data/events";
import { cn } from "@/lib/utils";

export default function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : 0));
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : 0));

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((img, idx) => (
          <motion.button
            key={idx}
            onClick={() => setLightboxIndex(idx)}
            className={cn(
              "relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary",
              idx === 0 || idx === 3 ? "aspect-[4/3]" : "aspect-square"
            )}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-4 right-4 text-cream/60 hover:text-cream transition-colors p-2"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/60 hover:text-cream transition-colors p-2"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/60 hover:text-cream transition-colors p-2"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full max-h-[80vh] aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </motion.div>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-sm text-cream/50">
              {lightboxIndex + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
