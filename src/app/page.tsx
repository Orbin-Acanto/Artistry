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
        className="relative flex h-[40vh] min-h-[300px] max-h-[520px] items-center justify-center text-center px-6 overflow-hidden parallax-section"
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
            North Shore Long Island&apos;s premier destination
          </p>
          <h2 className="font-display text-[clamp(1.75rem,6vw,3.5rem)] leading-tight text-balance break-words uppercase text-cream">
            Where nature sets the stage and art frames the experience.
          </h2>
        </div>
      </section>

      <TardisSection />

      <CutoutParallax
        text="Your Event Awaits"
        subtext="Step into a world of possibility and begin planning an unforgettable experience. At Artistry, our dedicated event team is poised to transform your vision into a seamless, extraordinary celebration, crafted with precision, style, and distinction."
        ctaLabel="Start Planning"
        ctaHref="/#contact"
        imageSrc="/media/images/home/frame.png"
        imageAlt="Artistry venue at dusk"
      />

      <ContactSection />
    </>
  );
}
