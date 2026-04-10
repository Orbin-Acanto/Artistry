import type { Metadata } from "next";
import VideoHero from "@/components/VideoHero";
import CutoutParallax from "@/components/CutoutParallax";
import VenueSticky from "@/components/VenueSticky";
import StatsSection from "@/components/StatsSection";
import EventHighlights from "@/components/EventHighlights";
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

      <section
        className="relative flex aspect-[4/1] min-h-[400px] items-center justify-center text-center px-6 overflow-hidden"
        style={{
          backgroundImage: "url('/media/images/home/divider.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 pointer-events-none bg-charcoal/50" />
        <div className="relative z-10">
          <p className="section-label text-cream/60 mb-4">
            Long Island&apos;s Premier
          </p>
          <h2 className="font-display text-display-lg text-cream max-w-2xl text-balance">
            A Stage Set in Nature, Framed by Art
          </h2>
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
