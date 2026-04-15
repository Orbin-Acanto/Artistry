import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import ImageGallery from "@/components/ui/ImageGallery";
import Link from "next/link";
import { celebrateLifePackages, celebrateLifeGallery } from "@/data/events";

export const metadata: Metadata = {
  title: "Celebrate Life | Gatherings at Artistry",
  description:
    "Celebrate Life gatherings at Artistry — a beautiful, serene setting for honoring life milestones at Nassau County Museum of Art, Roslyn, NY.",
};

export default function CelebrateLifePage() {
  return (
    <>
      <PageHero
        label="Celebrate Life"
        title="Honor Every Chapter. Cherish Every Moment."
        description="A serene, beautiful space to gather, remember, and celebrate the journeys that shape us."
        imageSrc="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Serene gathering at Artistry"
      />

      {/* Intro */}
      <section className="bg-cream py-12 md:py-section px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            label="Celebrate Life"
            title="A Gathering Worth Getting Right"
            description="Anniversaries that span decades, birthdays that open new chapters, retirements that mark a life's work, gatherings that keep a memory alive. Artistry holds space for all of them."
            centered
          />
          <p className="font-body text-sm md:text-base text-charcoal/65 leading-relaxed mt-6 max-w-2xl mx-auto">
            Our team works with families to shape an experience that feels personal and unhurried. From the setting to the menu, every detail is handled with care.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-primary-dark py-12 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Packages"
            title="Pick a Starting Point"
            description="All packages are priced per person and can be tailored to your guest count and preferences. Pricing is available upon request."
            centered
            light
            className="mb-10 md:mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {celebrateLifePackages.map((pkg) => (
              <div
                key={pkg.name}
                className="border border-cream/20 p-6 md:p-8 hover:border-cream/50 transition-colors flex flex-col"
              >
                {pkg.subtitle && (
                  <p className="section-label text-cream/50 mb-2">{pkg.subtitle}</p>
                )}
                <h3 className="font-display text-2xl text-cream mb-1">{pkg.name}</h3>
                {pkg.minGuests && (
                  <p className="font-body text-xs tracking-widest uppercase text-cream/35 mb-4">
                    {pkg.minGuests}
                  </p>
                )}
                <p className="font-body text-sm text-cream/65 leading-relaxed mb-6">
                  {pkg.description}
                </p>
                <div className="flex-1 mb-8 space-y-3">
                  {pkg.inherits ? (
                    <>
                      <p className="font-body text-xs uppercase tracking-widest text-cream/40">
                        All of {pkg.inherits}, and adds:
                      </p>
                      <ul className="space-y-2.5">
                        {pkg.adds!.map((item) => (
                          <li key={item} className="flex gap-3 items-start">
                            <span className="w-1 h-1 rounded-full bg-cream/60 shrink-0 mt-2" />
                            <span className="font-body text-sm text-cream/75">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <ul className="space-y-2.5">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex gap-3 items-start">
                          <span className="w-1 h-1 rounded-full bg-cream/60 shrink-0 mt-2" />
                          <span className="font-body text-sm text-cream/75">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <Link href="/#contact" className="btn-outline w-full text-center mt-auto">
                  Inquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-primary/10 py-12 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Gallery"
            title="Spaces That Hold What Matters"
            centered
            className="mb-10"
          />
          <ImageGallery images={celebrateLifeGallery} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-12 md:py-20 px-6 text-center">
        <SectionHeader
          label="We Are Here for You"
          title="Let Us Help You Plan the Gathering"
          description="Reach out whenever you are ready. We will listen first and plan from there."
          centered
          light
          className="mb-8"
        />
        <Link href="/#contact" className="btn-outline">
          Contact Our Team
        </Link>
      </section>
    </>
  );
}
