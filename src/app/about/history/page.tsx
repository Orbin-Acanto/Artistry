import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import { timeline } from "@/data/about";

export const metadata: Metadata = {
  title: "History | Nassau County Museum of Art Estate Roslyn Long Island",
  description:
    "Explore the rich history of the Nassau County Museum of Art estate in Roslyn, NY — the storied grounds that form the backdrop for Artistry's world-class events on Long Island.",
  keywords: [
    "Nassau County Museum of Art history",
    "Roslyn NY estate history",
    "Long Island historic venue",
    "Nassau County historic event venue",
    "Artistry venue history",
  ],
};

export default function HistoryPage() {
  return (
    <>
      <PageHero
        label="About"
        title="A Century of Art & Celebration"
        description="The story of the estate that became one of Long Island's most beloved event destinations."
        imageSrc="/media/images/about/hero.jpeg"
        imageAlt="Nassau County Museum of Art estate historic exterior"
      />

      {/* Intro */}
      <section className="bg-cream py-10 md:py-section px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            label="History of the Property"
            title="Where Every Gathering Is Part of a Larger Story"
            description="The estate that houses Artistry carries more than a century of history: from Gilded Age grandeur to cultural landmark, from private retreat to public treasure. Today, it serves as the stage for life's most important celebrations."
            centered
          />
        </div>
      </section>

      <section>
        {timeline.map((item, idx) => (
          <div
            key={item.period}
            className={`px-6 lg:py-0 py-6 ${idx % 2 === 0 ? "bg-white" : "bg-cream"} ${idx === 0 ? "lg:pt-0" : ""} ${idx === timeline.length - 1 ? "lg:pb-0" : ""}`}
          >
            <div
              className={`max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center ${idx % 2 !== 0 ? "lg:direction-rtl" : ""}`}
            >
              <article
                className={` lg:px-10 lg:py-0 py-6 ${idx % 2 !== 0 ? "lg:order-2" : ""}`}
              >
                <time className="section-label mb-3 text-primary block">
                  {item.period}
                </time>
                <h3 className="font-display text-[clamp(1.25rem,4vw,2.5rem)] leading-tight text-balance uppercase text-primary-dark mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-sm md:text-base leading-relaxed max-w-lg text-charcoal/65">
                  {item.description}
                </p>
              </article>
              <div
                className={`relative aspect-[3/2] overflow-hidden ${idx % 2 !== 0 ? "lg:order-1" : ""}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-primary py-10 md:py-section px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote>
            <p className="font-display text-2xl md:text-3xl text-cream leading-relaxed">
              &ldquo;This estate does not merely host events, it holds them. The
              history, the art, the grounds themselves become part of your
              story.&rdquo;
            </p>
            <footer className="mt-8 font-body text-sm tracking-widest uppercase text-cream/50">
              The Artistry Team
            </footer>
          </blockquote>
        </div>
      </section>
    </>
  );
}
