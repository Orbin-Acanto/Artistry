import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import ImageGallery from "@/components/ui/ImageGallery";
import CutoutParallax from "@/components/CutoutParallax";
import Image from "next/image";
import Link from "next/link";
import {
  weddingLocations,
  weddingPackages,
  weddingEnhancements,
  weddingGallery,
} from "@/data/events";

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
              <Link href="/vendors" className="btn-outline-dark">
                View Vendors
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5] overflow-hidden">
            <Image
              src="/media/images/events/wedding/flower.jpg"
              alt="Elegant wedding reception at Artistry"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Ceremony Locations */}
      <section className="bg-primary-dark py-12 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Ceremony & Reception Spaces"
            title="Eight Distinct Settings for Your Day"
            centered
            light
            className="mb-10 md:mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {weddingLocations.map((loc) => (
              <div key={loc.name} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-5">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="section-label text-cream/50 mb-1">
                  {loc.capacity}
                </p>
                <h3 className="font-display text-2xl text-cream mb-2">
                  {loc.name}
                </h3>
                <p className="font-body text-sm text-cream/65 leading-relaxed">
                  {loc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-cream py-12 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Wedding Packages"
            title="Thoughtfully Crafted for Your Celebration"
            description="Our packages provide a foundation of excellence — each customizable to reflect your unique vision. Pricing available upon inquiry."
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
            title="Elevate Every Detail"
            description="Personalize your wedding with our curated collection of add-on enhancements."
            className="mb-8 md:mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {weddingEnhancements.map((enh) => (
              <div key={enh.name} className="bg-cream p-6">
                <h4 className="font-display text-lg text-charcoal mb-2">
                  {enh.name}
                </h4>
                <p className="font-body text-sm text-charcoal/65 leading-relaxed">
                  {enh.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cutout CTA */}
      <CutoutParallax
        text="Your Wedding Day"
        subtext="Let us show you what Artistry can do for the most important day of your life."
        imageSrc="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Wedding at Artistry"
        ctaLabel="Schedule a Tour"
        ctaHref="/#contact"
      />

      {/* Gallery */}
      <section className="bg-cream py-12 md:py-section px-6">
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
          Wedding Brochure
        </h2>
        <p className="font-body text-cream/65 text-sm max-w-md mx-auto mb-6 md:mb-8">
          Download our complete wedding brochure for full details on spaces,
          packages, and the Artistry experience.
        </p>
        <a href="#" className="btn-outline">
          Download Brochure (PDF)
        </a>
      </section>
    </>
  );
}
