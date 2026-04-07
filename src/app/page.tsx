import type { Metadata } from "next";
import VideoHero from "@/components/VideoHero";
import CutoutParallax from "@/components/CutoutParallax";
import VenueSticky from "@/components/VenueSticky";
import StatsSection from "@/components/StatsSection";
import EventHighlights from "@/components/EventHighlights";
import Image from "next/image";
import TardisSection from "@/components/TardisSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Artistry at Nassau County Museum of Art | Event Venue Roslyn, NY",
  description:
    "Artistry is a premier event venue at Nassau County Museum of Art in Roslyn, NY. Host weddings, corporate events, social celebrations, and milestone occasions surrounded by stunning art and lush grounds.",
};

export default function HomePage() {
  return (
    <>
      <VideoHero />

      <VenueSticky />

      <StatsSection />

      <EventHighlights />

      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80"
          alt="Artistry event venue grounds and gardens"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="section-label text-cream/60 mb-4">
              Long Island&apos;s Premier
            </p>
            <h2 className="font-display text-display-lg text-cream max-w-2xl text-balance">
              A Stage Set in Nature, Framed by Art
            </h2>
          </div>
        </div>
      </section>

      <TardisSection />

      <CutoutParallax
        text="Your Event Awaits"
        subtext="Begin planning the celebration of a lifetime. Our event team is ready to bring your vision to life at Artistry."
        ctaLabel="Start Planning"
        ctaHref="/#contact"
        imageSrc="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Artistry venue at dusk"
      />

      <ContactSection />
    </>
  );
}
