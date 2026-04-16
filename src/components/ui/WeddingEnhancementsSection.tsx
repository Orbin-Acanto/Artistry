"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { WeddingEnhancement } from "@/data/events";

type WeddingEnhancementsSectionProps = {
  enhancements: WeddingEnhancement[];
};

export default function WeddingEnhancementsSection({
  enhancements,
}: WeddingEnhancementsSectionProps) {
  const [activeEnhancement, setActiveEnhancement] =
    useState<WeddingEnhancement | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (!activeEnhancement) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveEnhancement(null);
        return;
      }

      if (event.key === "ArrowRight") {
        setImageIndex((current) =>
          activeEnhancement.gallery.length
            ? (current + 1) % activeEnhancement.gallery.length
            : 0,
        );
      }

      if (event.key === "ArrowLeft") {
        setImageIndex((current) =>
          activeEnhancement.gallery.length
            ? (current - 1 + activeEnhancement.gallery.length) %
              activeEnhancement.gallery.length
            : 0,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeEnhancement]);

  const openEnhancement = (enhancement: WeddingEnhancement) => {
    setImageIndex(0);
    setActiveEnhancement(enhancement);
  };

  const showPrevious = () => {
    if (!activeEnhancement) return;

    setImageIndex(
      (current) =>
        (current - 1 + activeEnhancement.gallery.length) %
        activeEnhancement.gallery.length,
    );
  };

  const showNext = () => {
    if (!activeEnhancement) return;

    setImageIndex(
      (current) => (current + 1) % activeEnhancement.gallery.length,
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {enhancements.map((enhancement, index) => (
          <article
            key={enhancement.name}
            className="group relative h-full overflow-hidden border border-primary/10 bg-cream/90 shadow-[0_20px_60px_rgba(30,58,95,0.08)] transition-transform duration-500 hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={enhancement.image}
                alt={enhancement.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/12 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-cream backdrop-blur-sm">
                Upgrade {index + 1}
              </div>
            </div>

            <div className="flex min-h-[300px] flex-col p-6">
              <h4 className="font-display text-[1.55rem] leading-tight text-primary-dark">
                {enhancement.name}
              </h4>
              <p
                className="mt-4 flex-1 font-body text-sm leading-relaxed text-charcoal/68"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 5,
                  overflow: "hidden",
                }}
              >
                {enhancement.description}
              </p>
              <button
                type="button"
                onClick={() => openEnhancement(enhancement)}
                className="btn-outline-dark mt-6 w-full"
              >
                View Details
              </button>
            </div>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {activeEnhancement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-charcoal/92 p-4 md:p-8"
            onClick={() => setActiveEnhancement(null)}
          >
            <div className="flex min-h-full items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-7xl overflow-hidden bg-cream shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setActiveEnhancement(null)}
                  className="absolute right-4 top-4 z-20 rounded-full bg-charcoal/85 p-2 text-cream transition-colors hover:bg-charcoal"
                  aria-label="Close modal"
                >
                  <X size={22} />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.75fr)]">
                  <div className="relative min-h-[340px] bg-white lg:min-h-[720px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeEnhancement.gallery[imageIndex].src}
                        initial={{ opacity: 0.2, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0.2, scale: 0.985 }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={activeEnhancement.gallery[imageIndex].src}
                          alt={activeEnhancement.gallery[imageIndex].alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 70vw"
                        />
                      </motion.div>
                    </AnimatePresence>

                    <button
                      type="button"
                      onClick={showPrevious}
                      className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-charcoal/60 p-2 text-cream transition-colors hover:bg-charcoal"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-charcoal/60 p-2 text-cream transition-colors hover:bg-charcoal"
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} />
                    </button>
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-charcoal/55 to-transparent" />
                    <div className="absolute bottom-5 left-5 rounded-full bg-white/88 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-primary">
                      {imageIndex + 1} / {activeEnhancement.gallery.length}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between bg-[#f7f2eb] p-6 md:p-8">
                    <div>
                      <p className="section-label mb-3 text-primary/70">
                        Signature Wedding Upgrade
                      </p>
                      <h3 className="font-display text-3xl leading-tight text-primary-dark">
                        {activeEnhancement.name}
                      </h3>
                      <p className="mt-5 font-body text-sm leading-relaxed text-charcoal/72">
                        {activeEnhancement.description}
                      </p>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
                      {activeEnhancement.gallery.map(
                        (image, thumbnailIndex) => (
                          <button
                            key={`${activeEnhancement.name}-${image.src}-${thumbnailIndex}`}
                            type="button"
                            onClick={() => setImageIndex(thumbnailIndex)}
                            className={`relative aspect-[4/3] overflow-hidden border transition-all duration-300 ${
                              thumbnailIndex === imageIndex
                                ? "border-primary shadow-[0_12px_30px_rgba(30,58,95,0.18)]"
                                : "border-primary/10 opacity-80 hover:opacity-100"
                            }`}
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 33vw, 18vw"
                            />
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
