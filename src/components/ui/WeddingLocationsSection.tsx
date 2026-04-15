"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { EventLocation } from "@/data/events";

type ModalView = "floor-plan" | "gallery";

type ModalState = {
  location: EventLocation;
  view: ModalView;
} | null;

type WeddingLocationsSectionProps = {
  locations: EventLocation[];
};

const placeholderGalleryImages = [
  {
    src: "/media/images/events/wedding/flower.jpg",
    alt: "Wedding gallery placeholder floral detail",
  },
  {
    src: "/media/images/events/wedding/formal.jpg",
    alt: "Wedding gallery placeholder formal garden view",
  },
  {
    src: "/media/images/events/wedding/gazebo.jpg",
    alt: "Wedding gallery placeholder gazebo portrait",
  },
];

export default function WeddingLocationsSection({
  locations,
}: WeddingLocationsSectionProps) {
  const [modal, setModal] = useState<ModalState>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    if (!modal) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModal(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modal]);

  const galleryImages = useMemo(() => {
    if (!modal) return [];

    return [
      {
        src: modal.location.image,
        alt: `${modal.location.name} gallery image`,
      },
      ...placeholderGalleryImages,
    ];
  }, [modal]);

  const floorPlanImage = modal
    ? {
        src: modal.location.image,
        alt: `${modal.location.name} floor plan placeholder`,
      }
    : null;

  const openModal = (location: EventLocation, view: ModalView) => {
    setGalleryIndex(0);
    setModal({ location, view });
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
        {locations.map((loc) => (
          <div key={loc.name} className="group">
            <div className="relative aspect-[4/3] overflow-hidden mb-5">
              <Image
                src={loc.image}
                alt={loc.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="section-label text-cream/50 mb-1">{loc.capacity}</p>
            <h3 className="font-display text-2xl text-cream mb-2">
              {loc.name}
            </h3>
            <p className="font-body text-sm text-cream/65 leading-relaxed">
              {loc.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => openModal(loc, "floor-plan")}
                className="btn-outline"
              >
                View Floor Plan
              </button>
              <button
                type="button"
                onClick={() => openModal(loc, "gallery")}
                className="btn-outline"
              >
                View Gallery
              </button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/90 p-4 md:p-8"
            onClick={() => setModal(null)}
          >
            <div className="flex min-h-full items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-6xl bg-cream text-charcoal shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="absolute right-4 top-4 z-20 rounded-full bg-charcoal/80 p-2 text-cream transition-colors hover:bg-charcoal"
                  aria-label="Close modal"
                >
                  <X size={22} />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
                  <div className="relative min-h-[320px] bg-white lg:min-h-[620px]">
                    {modal.view === "floor-plan" && floorPlanImage && (
                      <>
                        <Image
                          src={floorPlanImage.src}
                          alt={floorPlanImage.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 70vw"
                        />
                        <div className="absolute left-4 top-4 bg-cream/90 px-3 py-1 font-body text-[11px] uppercase tracking-[0.22em] text-primary">
                          Placeholder Floor Plan
                        </div>
                      </>
                    )}

                    {modal.view === "gallery" && galleryImages.length > 0 && (
                      <>
                        <Image
                          src={galleryImages[galleryIndex].src}
                          alt={galleryImages[galleryIndex].alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 70vw"
                        />
                        <div className="absolute left-4 top-4 bg-cream/90 px-3 py-1 font-body text-[11px] uppercase tracking-[0.22em] text-primary">
                          Placeholder Gallery
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex flex-col justify-between p-6 md:p-8">
                    <div>
                      <p className="section-label mb-3 text-primary/70">
                        {modal.view === "floor-plan"
                          ? "Floor Plan"
                          : "Location Gallery"}
                      </p>
                      <h3 className="font-display text-3xl text-primary-dark">
                        {modal.location.name}
                      </h3>
                      <p className="mt-4 font-body text-sm leading-relaxed text-charcoal/70">
                        {modal.view === "floor-plan"
                          ? "A dedicated floor plan for this space will go here. For now, this is using a placeholder image so we can finalize the modal flow and button behavior."
                          : "These gallery images are placeholders for this location. Once you have the final assets, we can swap them in without changing the modal layout."}
                      </p>
                    </div>

                    {modal.view === "gallery" && galleryImages.length > 0 && (
                      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                        {galleryImages.map((image, imageIndex) => (
                          <button
                            key={`${modal.location.name}-${image.src}-${imageIndex}`}
                            type="button"
                            onClick={() => setGalleryIndex(imageIndex)}
                            className={`relative aspect-[4/3] overflow-hidden border transition-colors ${
                              imageIndex === galleryIndex
                                ? "border-primary"
                                : "border-primary/15"
                            }`}
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 25vw, 18vw"
                            />
                          </button>
                        ))}
                      </div>
                    )}

                    {modal.view === "floor-plan" && (
                      <div className="mt-8 border border-primary/15 bg-primary/5 p-4">
                        <p className="font-body text-xs uppercase tracking-[0.18em] text-primary/70">
                          Placeholder
                        </p>
                        <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/70">
                          Replace this image later with the actual floor plan for{" "}
                          {modal.location.name}.
                        </p>
                      </div>
                    )}
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
