import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import ImageGallery from "@/components/ui/ImageGallery";
import AutoImageSlider from "@/components/ui/AutoImageSlider";
import WeddingLocationsSection from "@/components/ui/WeddingLocationsSection";
import WeddingEnhancementsSection from "@/components/ui/WeddingEnhancementsSection";
import CutoutParallax from "@/components/CutoutParallax";
import Link from "next/link";
import {
  weddingLocations,
  weddingPackages,
  weddingGallery,
} from "@/data/events";
import { weddingEnhancements } from "@/data/weddingEnhancements";

export const metadata: Metadata = {
  title: "Wedding Venue Long Island | Weddings at Artistry",
  description:
    "Host your dream wedding at Artistry — Nassau County Museum of Art in Roslyn, NY. Stunning ceremony and reception spaces, exclusive packages, and Tardis Catering on Long Island.",
  keywords: [
    "wedding venue Long Island",
    "wedding venue Roslyn NY",
    "Nassau County wedding venue",
    "outdoor wedding venue NY",
    "museum wedding venue",
  ],
};

const weddingIntroImages = [
  {
    src: "/media/images/events/wedding/flower.jpg",
    alt: "Elegant wedding reception florals at Artistry",
  },
  {
    src: "/media/images/events/wedding/formal.jpg",
    alt: "Formal wedding celebration at Artistry",
  },
  {
    src: "/media/images/events/wedding/gazebo.jpg",
    alt: "Wedding couple portrait near the gazebo at Artistry",
  },
];

export default function WeddingsPage() {
  return (
    <>
      <PageHero
        label="Weddings"
        title="Your Wedding, Immersed in a Living Work of Art"
        description="An Extraordinary Setting for Your Unforgettable Day"
        imageSrc="/media/images/events/wedding/hero.jpeg"
        imageAlt="Wedding ceremony at Artistry Nassau County Museum of Art"
      />

      <section className="bg-cream py-12 md:py-section px-6">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeader
              label="Wedding Ceremonies & Receptions"
              title=" A Setting That Becomes Part of Your Legacy"
              description="At Artistry, your wedding is more than just an event. It is an immersive experience set within one of Long Island’s most beautiful and culturally rich landscapes. You can exchange vows surrounded by world-class sculpture, celebrate on sweeping estate lawns, and dance beneath the stars on our grand terraces."
            />
            <p className="prose-venue mt-5">
              From your first inquiry to the final moments of your celebration,
              our dedicated wedding team will be with you every step of the way.
              Working seamlessly alongside Tardis Catering, our exclusive
              partners, and the museum team, we ensure every detail is
              thoughtfully handled, creating a day that feels effortless,
              refined, and truly unforgettable.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/#contact" className="btn-primary">
                Request a Tour
              </Link>
              <Link href="#wedding-gallery" className="btn-outline-dark">
                Gallery
              </Link>
            </div>
          </div>
          <AutoImageSlider
            images={weddingIntroImages}
            className="aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5]"
          />
        </div>
      </section>

      {/* Ceremony Locations */}
      <section className="bg-primary-dark py-12 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Ceremony & Reception Spaces"
            title="The Perfect Setting for “I Do” & Beyond"
            description="Eight Signature Settings. One Extraordinary Day"
            centered
            light
            className="mb-10 md:mb-14"
          />
          <WeddingLocationsSection locations={weddingLocations} />
        </div>
      </section>

      {/* Packages */}
      <section className="bg-cream py-12 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="A Collection of Celebrations"
            title="Artfully curated for your celebration"
            description="Our packages deliver a luxurious foundation of excellence, thoughtfully designed and fully customizable to reflect the unique vision of each bride and groom. Pricing is available upon request."
            centered
            className="mb-10 md:mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {weddingPackages.map((pkg) => (
              <div
                key={pkg.name}
                className="border border-primary/20 p-6 md:p-8 hover:border-primary/60 transition-colors"
              >
                <h3 className="font-display text-2xl text-charcoal mb-3">
                  {pkg.name}
                </h3>
                <p className="font-body text-sm text-charcoal/65 leading-relaxed mb-6">
                  {pkg.description}
                </p>
                <ul className="space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-2 items-center">
                      <span className="text-primary shrink-0">—</span>
                      <span className="font-body text-sm text-charcoal/75">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className="btn-primary mt-8 w-full text-center"
                >
                  Inquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhancements */}
      <section className="bg-primary/10 py-12 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Wedding Enhancements"
            title="Signature Upgrades That Shape the Experience"
            description="Explore immersive enhancements designed to personalize the atmosphere, delight your guests, and bring a more cinematic sense of detail to the celebration."
            className="mb-8 md:mb-12"
          />
          <WeddingEnhancementsSection enhancements={weddingEnhancements} />
        </div>
      </section>

      {/* Cutout CTA */}
      <CutoutParallax
        text="Your Wedding Day"
        subtext="Elevated by Artistry"
        imageSrc="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Wedding at Artistry"
        ctaLabel="Schedule a Tour"
        ctaHref="/#contact"
      />

      {/* Gallery */}
      <section
        id="wedding-gallery"
        className="bg-cream py-12 md:py-section px-6"
      >
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Wedding Gallery"
            title="Celebrations in Full Bloom"
            centered
            className="mb-8 md:mb-10"
          />
          <ImageGallery images={weddingGallery} />
        </div>
      </section>

      {/* Brochure CTA */}
      <section className="bg-primary py-12 md:py-16 px-6 text-center">
        <p className="section-label text-cream/50 mb-3">Download</p>
        <h2 className="font-display text-display-md text-cream mb-4 md:mb-6 uppercase">
          Our Wedding Brochure
        </h2>
        <p className="font-body text-cream/65 text-sm max-w-md mx-auto mb-6 md:mb-8">
          A curated overview of our distinctive spaces, signature offerings, and
          the Artistry experience
        </p>
        <a href="#" className="btn-outline">
          Brochure
        </a>
      </section>
    </>
  );
}
