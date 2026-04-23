"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { tardisSectionImages as IMAGES } from "@/data/home";

const ease = [0.76, 0, 0.24, 1] as const;

export default function TardisSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });

  return (
    <section
      className="bg-cream py-10 md:py-section px-6 overflow-hidden"
      ref={ref}
    >
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
            Culinary Excellence by Tardi's Catering
          </motion.p>

          <h2 className="font-display text-[clamp(1.75rem,6vw,3.5rem)] leading-tight text-balance break-words uppercase text-primary-dark overflow-hidden">
            {"Tardi's Catering".split(" ").map((word, i) => (
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
            className="font-body text-sm md:text-base leading-relaxed mt-6 max-w-lg text-charcoal/65"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.65, ease }}
          >
            At Artistry Estate, dining is more than a service. It is an
            experience crafted to captivate the senses and elevate every moment.
            Under the direction of Tardi's Catering, each menu is a celebration
            of innovation, seasonality, and refined taste.
          </motion.p>

          <motion.p
            className="prose-venue mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
          >
            Our culinary team curates bespoke menus tailored to each event,
            blending modern sophistication with timeless technique. From
            elegantly plated dinners to vibrant cocktail receptions and
            immersive food stations, every detail is thoughtfully designed to
            complement the occasion and delight your guests.
          </motion.p>
          <motion.p
            className="prose-venue mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
          >
            Using only the finest, locally sourced ingredients, Tardi's Catering
            transforms each dish into a work of art, beautifully presented and
            flawlessly executed. Paired with impeccable service and seamless
            coordination, the result is a dining experience as memorable as the
            setting itself.
          </motion.p>
          <motion.p
            className="prose-venue mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.95, ease }}
          >
            At Artistry, exceptional cuisine is not just served. It is
            experienced.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1, ease }}
          >
            <Link href="/tardis-catering" className="btn-primary">
              Tardi's Catering
            </Link>
            {/* <Link href="/tardis-cafe" className="btn-primary">
              Tardi's Cafe
            </Link> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
