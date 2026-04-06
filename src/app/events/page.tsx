import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Host your wedding, corporate event, social celebration, or milestone occasion at Artistry — Nassau County Museum of Art's premier event venue in Roslyn, NY.",
};

const events = [
  {
    title: "Weddings",
    description:
      "Exchange vows and celebrate surrounded by sculpture gardens, manicured grounds, and timeless architecture. Artistry offers multiple ceremony and reception spaces for weddings of any size.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    href: "/events/weddings",
    cta: "Explore Weddings",
  },
  {
    title: "Corporate Events",
    description:
      "From summer outings to award galas, dinners to conferences — inspire your team and impress your clients in a setting that elevates every gathering.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    href: "/events/corporate",
    cta: "Explore Corporate",
  },
  {
    title: "Social Events",
    description:
      "Bar and Bat Mitzvahs, Communions, milestone celebrations and more — honor life's most meaningful chapters with warmth, elegance, and unforgettable hospitality.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    href: "/events/social",
    cta: "Explore Social Events",
  },
  {
    title: "Celebrate Life",
    description:
      "A gentle, graceful space to honor a life well-lived. Artistry provides a beautiful and dignified setting for gatherings that celebrate legacy and love.",
    image: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=800&q=80",
    href: "/events/celebrate-life",
    cta: "Explore Celebrate Life",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        label="Events"
        title="Every Occasion, an Unforgettable Experience"
        description="From intimate ceremonies to grand galas — Artistry is the stage for life's most extraordinary moments."
        imageSrc="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Events at Artistry Nassau County Museum of Art"
      />

      <section className="bg-cream py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="What We Host"
            title="A Venue for Every Chapter"
            centered
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <Link
                key={event.href}
                href={event.href}
                className="group relative overflow-hidden block"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h2 className="font-display text-3xl text-cream mb-3">{event.title}</h2>
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
