"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    alt: "Tardis Catering plated cuisine",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
    alt: "Tardis Cafe artisan coffee",
  },
  {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80",
    alt: "Catering spread",
  },
];

const ease = [0.76, 0, 0.24, 1] as const;

export default function TardisSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });

  return (
    <section className="bg-cream py-section px-6 overflow-hidden" ref={ref}>
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 flex flex-col gap-3">
          <motion.div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "2/1" }}
            initial={{ opacity: 0, y: 48, scale: 0.97 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 48, scale: 0.97 }
            }
            transition={{ duration: 0.85, delay: 0.05, ease }}
          >
            <Image
              src={IMAGES[0].src}
              alt={IMAGES[0].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
            <motion.div
              className="absolute inset-0 bg-charcoal/30"
              initial={{ opacity: 1 }}
              animate={isInView ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.45, ease }}
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {IMAGES.slice(1).map((img, i) => (
              <motion.div
                key={img.src}
                className="relative overflow-hidden"
                style={{ aspectRatio: "1/1" }}
                initial={{ opacity: 0, y: 48, scale: 0.97 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 48, scale: 0.97 }
                }
                transition={{ duration: 0.85, delay: 0.2 + i * 0.14, ease }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 22vw"
                />
                <motion.div
                  className="absolute inset-0 bg-charcoal/30"
                  initial={{ opacity: 1 }}
                  animate={isInView ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 1.1, delay: 0.6 + i * 0.14, ease }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <motion.p
            className="section-label text-primary mb-4"
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            Culinary Excellence
          </motion.p>

          {/* Title — word-by-word reveal */}
          <h2 className="font-display text-display-lg text-primary-dark max-w-2xl text-balance uppercase leading-[1.1] tracking-tight overflow-hidden">
            {"Tardis Catering & Tardis Cafe".split(" ").map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden mr-[0.22em]"
              >
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={isInView ? { y: "0%" } : { y: "110%" }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.08, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>

          <motion.p
            className="font-body text-sm leading-relaxed mt-6 max-w-md text-charcoal/65 sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.65, ease }}
          >
            Every event at Artistry is elevated by the culinary artistry of
            Tardis Catering — our exclusive in-house culinary partner. From
            bespoke tasting menus to lavish buffet experiences, our chefs craft
            each dish with the same precision and passion that defines the
            Artistry experience.
          </motion.p>

          <motion.p
            className="prose-venue mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
          >
            Between events, our Tardis Cafe offers guests and visitors a curated
            menu of artisan coffee, seasonal fare, and light bites — a perfect
            pause before or after exploring the museum grounds.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
          >
            <Link href="/tardis-catering" className="btn-outline-dark">
              Tardis Catering
            </Link>
            <Link href="/tardis-cafe" className="btn-primary">
              Tardis Cafe
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
