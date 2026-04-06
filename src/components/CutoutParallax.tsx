"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  text: string;
  subtext?: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function CutoutParallax({
  text,
  subtext,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.02]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-charcoal"
      aria-label={text}
    >
      {/* Background parallax image */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 scale-110"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover opacity-60"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal/50" />

      {/* Cutout text — giant display text that blends with image */}
      <div className="relative z-10 py-24 md:py-36 px-6 flex flex-col items-center justify-center text-center">
        <motion.h2
          style={{
            WebkitTextStroke: "1px rgba(245, 240, 232, 0.35)",
            scale: textScale,
          }}
          className="font-display text-display-xl text-cream/10 select-none leading-none tracking-tight"
          aria-hidden="true"
        >
          {text}
        </motion.h2>

        {/* Readable overlay content */}
        <div className="mt-8 md:mt-12 max-w-xl">
          {subtext && (
            <p className="font-body text-cream/75 text-base md:text-lg leading-relaxed mb-8">
              {subtext}
            </p>
          )}
          {ctaLabel && ctaHref && (
            <Link href={ctaHref} className="btn-outline">
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
