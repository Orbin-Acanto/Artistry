"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const eventHighlights = [
  {
    title: "Weddings",
    description:
      "Exchange vows and celebrate surrounded by art, sculpture gardens, and sweeping estate grounds. A setting unlike any other on Long Island.",
    image: "/media/images/home/wedding.jpeg",
    href: "/events/weddings",
  },
  {
    title: "Corporate Events",
    description:
      "From intimate dinners to large-scale galas and conferences, inspire your team and impress your clients in a truly unique environment.",
    image: "/media/images/home/corporate.jpg",
    href: "/events/corporate",
  },
  {
    title: "Social Events",
    description:
      "Bar Mitzvahs, milestone birthdays, anniversaries and more, celebrate life's most meaningful moments with elegance and warmth.",
    image: "/media/images/home/social.jpg",
    href: "/events/social",
  },
  {
    title: "Celebrate Life",
    description:
      "Honor a life well-lived with a dignified, heartfelt gathering in one of our serene and beautiful spaces.",
    image: "/media/images/home/celebrate.jpg",
    href: "/events/celebrate-life",
  },
];

export default function EventHighlights() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="bg-cream py-section px-6">
      <div className="max-w-8xl mx-auto">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <SectionHeader
            label="Events"
            title="Every Occasion, Elevated"
            description="From intimate ceremonies to grand celebrations. Artistry provides the perfect canvas for every chapter of life."
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
