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
  weddingCeremonyPackages,
  weddingPackages,
  weddingGallery,
  weddingIntroImages,
} from "@/data/events";
import { weddingEnhancements } from "@/data/events";

export const metadata: Metadata = {
  title: "Wedding Venue Long Island | Weddings at Artistry",
  description:
    "Host your wedding at Artistry, Nassau County Museum of Art in Roslyn, NY. Ceremony and reception spaces, exclusive packages, and Tardis Catering on Long Island.",
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
        description="An extraordinary setting for your most important day"
        imageSrc="/media/images/events/wedding/hero.jpeg"
        imageAlt="Wedding ceremony at Artistry Nassau County Museum of Art"
      />

      {/* Intro */}
      <section className="bg-cream py-12 md:py-section px-6">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeader
              label="Ceremonies & Receptions"
              title="A Setting That Becomes Part of Your Story"
              description="At Artistry, you exchange vows surrounded by world-class sculpture, celebrate on sweeping estate lawns, and dance beneath the stars on our grand terraces."
            />
            <p className="prose-venue mt-5">
              From your first visit to the last moments of the evening, our
              wedding team works alongside Tardis Catering and the museum staff
              to make sure every part of the day runs the way you imagined it.
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
            title="Eight Settings. One Extraordinary Day."
            description="From the formal gardens to the open terraces, each space at Artistry offers something different. Choose one or combine several."
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
            label="Wedding Packages"
            title="Priced for Your Day, Not Ours"
            description="All packages are priced per person and can be adjusted to fit your guest count and preferences. Pricing is available upon request."
            centered
            className="mb-10 md:mb-14"
          />

          {/* Ceremony Packages */}
          <div className="mb-14 md:mb-20">
            <div className="flex items-center gap-6 mb-8">
              <h3 className="font-display text-xl md:text-2xl text-charcoal whitespace-nowrap">
                Ceremony Packages
              </h3>
              <div className="h-px flex-1 bg-primary/15" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {weddingCeremonyPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="border border-primary/20 p-6 md:p-8 hover:border-primary/50 transition-colors flex flex-col"
                >
                  {pkg.subtitle && (
                    <p className="section-label text-primary/60 mb-2">{pkg.subtitle}</p>
                  )}
                  <h4 className="font-display text-2xl text-charcoal mb-3">{pkg.name}</h4>
                  <p className="font-body text-sm text-charcoal/65 leading-relaxed mb-6">
                    {pkg.description}
                  </p>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-2" />
                        <span className="font-body text-sm text-charcoal/75">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/#contact" className="btn-primary w-full text-center mt-auto">
                    Inquire
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Reception Packages */}
          <div>
            <div className="flex items-center gap-6 mb-8">
              <h3 className="font-display text-xl md:text-2xl text-charcoal whitespace-nowrap">
                Reception Packages
              </h3>
              <div className="h-px flex-1 bg-primary/15" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {weddingPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="border border-primary/20 p-6 md:p-8 hover:border-primary/50 transition-colors flex flex-col"
                >
                  {pkg.subtitle && (
                    <p className="section-label text-primary/60 mb-2">{pkg.subtitle}</p>
                  )}
                  <h4 className="font-display text-2xl text-charcoal mb-1">{pkg.name}</h4>
                  {pkg.minGuests && (
                    <p className="font-body text-xs tracking-widest uppercase text-charcoal/35 mb-4">
                      {pkg.minGuests}
                    </p>
                  )}
                  <p className="font-body text-sm text-charcoal/65 leading-relaxed mb-6">
                    {pkg.description}
                  </p>
                  <div className="flex-1 mb-8 space-y-3">
                    {pkg.inherits ? (
                      <>
                        <p className="font-body text-xs uppercase tracking-widest text-charcoal/40">
                          All of {pkg.inherits}, and adds:
                        </p>
                        <ul className="space-y-2.5">
                          {pkg.adds!.map((item) => (
                            <li key={item} className="flex gap-3 items-start">
                              <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-2" />
                              <span className="font-body text-sm text-charcoal/75">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <ul className="space-y-2.5">
                        {pkg.includes.map((item) => (
                          <li key={item} className="flex gap-3 items-start">
                            <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-2" />
                            <span className="font-body text-sm text-charcoal/75">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <Link href="/#contact" className="btn-primary w-full text-center mt-auto">
                    Inquire
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhancements */}
      <section className="bg-primary/10 py-12 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Wedding Enhancements"
            title="Add-Ons Worth Considering"
            description="Each enhancement can be added to any package. Ask your coordinator for availability and pricing."
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
      <section id="wedding-gallery" className="bg-cream py-12 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Wedding Gallery"
            title="A Few of Our Favorite Days"
            centered
            className="mb-8 md:mb-10"
          />
          <ImageGallery images={weddingGallery} />
        </div>
      </section>

      {/* Brochure CTA */}
      <section className="bg-primary py-12 md:py-16 px-6 text-center">
        <SectionHeader
          label="Take It With You"
          title="Our Wedding Brochure"
          description="A full overview of our spaces, packages, and what to expect when you host your wedding at Artistry."
          centered
          light
          className="mb-8"
        />
        <Link href="/brochures/wedding" className="btn-outline">
          View Brochure
        </Link>
      </section>
    </>
  );
}
