import type { Metadata } from "next";
import VideoHero from "@/components/VideoHero";
import CutoutParallax from "@/components/CutoutParallax";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/ui/ContactForm";
import VenueSticky from "@/components/VenueSticky";
import StatsSection from "@/components/StatsSection";
import EventHighlights from "@/components/EventHighlights";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";
import { MapPin, Phone, Mail } from "lucide-react";

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

      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
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

      <section className="bg-cream py-section px-6">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden mt-10">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80"
                alt="Tardis Catering cuisine"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden -mt-10">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80"
                alt="Tardis Cafe"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader
              label="Culinary Excellence"
              title="Tardis Catering & Tardis Cafe"
              description="Every event at Artistry is elevated by the culinary artistry of Tardis Catering — our exclusive in-house culinary partner. From bespoke tasting menus to lavish buffet experiences, our chefs craft each dish with the same precision and passion that defines the Artistry experience."
            />
            <p className="prose-venue mt-5">
              Between events, our Tardis Cafe offers guests and visitors a
              curated menu of artisan coffee, seasonal fare, and light bites — a
              perfect pause before or after exploring the museum grounds.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/tardis-catering" className="btn-outline-dark">
                Tardis Catering
              </Link>
              <Link href="/tardis-cafe" className="btn-primary">
                Tardis Cafe
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CutoutParallax
        text="Your Event Awaits"
        subtext="Begin planning the celebration of a lifetime. Our event team is ready to bring your vision to life at Artistry."
        imageSrc="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Artistry venue at dusk"
        ctaLabel="Start Planning"
        ctaHref="/#contact"
      />

      <section
        id="contact"
        className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]"
      >
        {/* Left — dark info panel */}
        <div className="bg-primary text-cream flex flex-col justify-center px-12 py-20 lg:px-20">
          <p className="section-label text-cream/50 mb-4">Get in Touch</p>
          <h2 className="font-display text-[56px] text-balance uppercase leading-[1.1] tracking-[-0.01em] text-cream mb-6">
            Plan Your Event at Artistry
          </h2>
          <p className="font-body text-base text-cream/60 leading-relaxed max-w-sm mb-12">
            Our dedicated event team is here to help you create an unforgettable
            experience. Reach out to begin the conversation.
          </p>
          <address className="not-italic space-y-6">
            <div className="flex gap-4 items-start">
              <MapPin size={16} className="text-cream/40 shrink-0 mt-1" />
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-cream/40 mb-1">
                  Location
                </p>
                <p className="font-body text-sm text-cream/70 leading-relaxed">
                  {SITE.address.venue}
                  <br />
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Phone size={16} className="text-cream/40 shrink-0" />
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-cream/40 mb-1">
                  Phone
                </p>
                <a
                  href={SITE.contact.phoneHref}
                  className="font-body text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  {SITE.contact.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Mail size={16} className="text-cream/40 shrink-0" />
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-cream/40 mb-1">
                  Email
                </p>
                <a
                  href={SITE.contact.emailHref}
                  className="font-body text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  {SITE.contact.email}
                </a>
              </div>
            </div>
          </address>
        </div>
        {/* Right — form panel */}
        <div className="bg-cream flex flex-col justify-center px-12 py-20 lg:px-20">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
