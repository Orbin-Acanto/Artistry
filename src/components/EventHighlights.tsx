"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { eventHighlights } from "@/data/home";

export default function EventHighlights() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="bg-cream py-18 px-6">
      <div className="max-w-8xl mx-auto">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <SectionHeader
            label="Events"
            title="Every moment, redefined in luxury."
            description="From intimate gatherings to grand celebrations, Artistry sets the stage for life’s most extraordinary chapters."
            centered
            className="mb-14"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventHighlights.map((event, i) => (
            <motion.div
              key={event.href}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Link
                href={event.href}
                className="group block relative overflow-hidden"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <motion.div
                    className="absolute inset-0 bg-cream origin-top"
                    initial={{ scaleY: 1 }}
                    animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
                    transition={{
                      duration: 0.75,
                      delay: i * 0.12 + 0.25,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl text-cream mb-2">
                      {event.title}
                    </h3>
                    <p className="font-body text-sm text-cream/70 leading-relaxed line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {event.description}
                    </p>
                    <span className="inline-block mt-3 font-body text-xs tracking-widest uppercase text-cream/50 group-hover:text-cream transition-colors">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
