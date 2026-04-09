"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
};

export default function PageHero({
  label,
  title,
  description,
  imageSrc,
  imageAlt,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      ref={ref}
      className={cn(
        "relative min-h-[55vh] sm:min-h-[60vh] md:aspect-video md:min-h-[420px] overflow-hidden",
        className,
      )}
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-charcoal/55" />
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-16 sm:pt-20 px-5 sm:px-8 text-center z-10">
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label text-cream/70 mb-3 sm:mb-5 text-xs sm:text-sm"
          >
            {label}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-display-lg uppercase text-cream text-balance max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-7xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-body text-cream/70 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-xl mt-4 sm:mt-6 leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
