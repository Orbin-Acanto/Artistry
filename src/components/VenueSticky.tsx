"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const images = [
  {
    src: "/media/images/home/about.jpg",
    alt: "Artistry event venue exterior at Nassau County Museum of Art",
  },
  {
    src: "/media/images/home/about_1.jpg",
    alt: "Artistry venue interior and grounds",
  },
  {
    src: "/media/images/home/about_3.jpg",
    alt: "Artistry venue gardens and estate",
  },
];

const ENTRY_X = "110%";
const ENTRY_FADE_PORTION = 0.25;

function ImageCard({
  img,
  index,
  scrollYProgress,
}: {
  img: (typeof images)[0];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const total = images.length;

  const slot = 1 / (total + 1);

  const entryStart = index * slot;
  const entryEnd = entryStart + slot;
  const exitStart = entryEnd;
  const exitEnd = exitStart + slot * 0.8;
  const fadeInEnd = entryStart + slot * ENTRY_FADE_PORTION;

  const x = useTransform(
    scrollYProgress,
    [entryStart, entryEnd],
    [ENTRY_X, "0%"],
  );
  const rotate = useTransform(scrollYProgress, [entryStart, entryEnd], [14, 0]);

  const opacityInputs =
    index === 0
      ? [entryStart, exitStart, exitEnd]
      : index < total - 1
        ? [entryStart, fadeInEnd, exitStart, exitEnd]
        : [entryStart, 1];
  const opacityOutputs =
    index === 0 ? [1, 1, 0] : index < total - 1 ? [0, 1, 1, 0] : [1, 1];

  const opacity = useTransform(scrollYProgress, opacityInputs, opacityOutputs);

  return (
    <motion.div
      style={{ x, rotate, opacity, zIndex: index + 1 }}
      className="absolute inset-0 will-change-transform"
    >
      <div className="relative w-full h-full overflow-hidden shadow-2xl">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
    </motion.div>
  );
}

export default function VenueSticky() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={sectionRef}
      className="relative bg-cream"
      style={{ height: "400vh" }}
    >
      <div
        className="sticky top-0 h-screen flex items-center px-6"
        style={{ overflow: "clip" }}
      >
        <div className="max-w-8xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              label="The Venue"
              title="Art as the Architecture of Every Celebration"
              description="Artistry is nestled within the breathtaking grounds of the Nassau County Museum of Art in Roslyn, New York — one of Long Island's most celebrated cultural destinations. Here, every event unfolds amid world-class sculpture, manicured gardens, and a Beaux-Arts mansion that has stood for over a century."
            />
            <p className="prose-venue mt-5">
              Under the stewardship of FIDI Hospitality and the culinary
              excellence of Tardis Catering, Artistry transforms special
              occasions into indelible experiences where the art on the walls
              and the art of hospitality become one.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/about/history" className="btn-outline-dark">
                Our History
              </Link>
              <Link href="/about/location" className="btn-primary">
                Visit Us
              </Link>
            </div>
          </div>

          <div
            className="relative hidden lg:block overflow-hidden"
            style={{ aspectRatio: "4/5" }}
          >
            <div className="sr-only" aria-hidden="true">
              {images.slice(1).map((img) => (
                <Image
                  key={img.src}
                  src={img.src}
                  alt=""
                  fill
                  priority
                  sizes="1px"
                />
              ))}
            </div>

            {images.map((img, i) => (
              <ImageCard
                key={img.src}
                img={img}
                index={i}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          <div className="relative lg:hidden" style={{ aspectRatio: "4/5" }}>
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
