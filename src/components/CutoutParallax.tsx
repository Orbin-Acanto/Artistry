"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  text: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt: string;
};

export default function CutoutParallax({
  text,
  subtext,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["160px", "0px"]);

  return (
    <section
      ref={ref}
      className="relative h-[55vh] min-h-[300px] max-h-[580px] overflow-hidden"
      aria-label={text}
    >
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-x-0 -top-[160px] bottom-0"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center scale-x-[120%]"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-charcoal/55" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center gap-5 px-6 text-center">
        <div className="flex items-center gap-4">
          <div className="h-px w-6 sm:w-10 bg-cream/35 shrink-0" />
          <p className="font-display text-display-md text-cream uppercase leading-none tracking-tight text-balance">
            {text}
          </p>
          <div className="h-px w-6 sm:w-10 bg-cream/35 shrink-0" />
        </div>
        {subtext && (
          <p className="font-body text-cream/70 text-sm md:text-base leading-relaxed max-w-lg">
            {subtext}
          </p>
        )}
        {ctaLabel && ctaHref && (
          <Link href={ctaHref} className="btn-outline">
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
