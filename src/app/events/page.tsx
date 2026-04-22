import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { eventCards } from "@/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Host your wedding, corporate event, social celebration, or milestone occasion at Artistry, Nassau County Museum of Art's premier event venue in Roslyn, NY.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        label="Events"
        title="Every Occasion, an Unforgettable Experience"
        description="From intimate ceremonies to grand galas. Artistry is the stage for life's most extraordinary moments."
        imageSrc="/media/images/home/wedding.jpeg"
        imageAlt="Events at Artistry Nassau County Museum of Art"
      />

      <section className="bg-cream py-10 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="What We Host"
            title="A Venue for Every Chapter"
            centered
            className="mb-10 md:mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventCards.map((event) => (
              <Link
                key={event.href}
                href={event.href}
                className="group relative overflow-hidden block"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h2 className="font-display text-3xl text-cream mb-3">
                      {event.title}
                    </h2>
                    <p className="font-body text-sm text-cream/70 leading-relaxed mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {event.description}
                    </p>
                    <span className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-cream/60 group-hover:text-cream transition-colors">
                      {event.cta} →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
