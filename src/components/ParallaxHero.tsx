"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { SITE } from "@/data/site";
import { ArrowDown } from "lucide-react";

export default function VideoHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.45, 0.65]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden"
      aria-label="Hero section"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/media/video/hero.mp4" type="video/mp4" />
        <source src="/media/video/hero.webm" type="video/webm" />
      </video>

      {/* Dark overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-charcoal pointer-events-none"
      />

      {/* Hero text */}
      <motion.div
        style={{ y: textY }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-label text-cream/70 mb-5"
        >
          Nassau County Museum of Art · Roslyn, NY
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-display-xl text-cream max-w-4xl text-balance"
        >
          Where Art Becomes
          <br />
          the Setting
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-cream/70 text-base md:text-lg max-w-xl mt-6 leading-relaxed"
        >
          {SITE.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Link href="/events" className="btn-primary">
            Explore Events
          </Link>
          <Link href="/#contact" className="btn-outline">
            Plan Your Event
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-cream/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-cream/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
