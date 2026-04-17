import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import ImageGallery from "@/components/ui/ImageGallery";
import Image from "next/image";
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
      <section className="bg-cream py-10 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <div className="mb-10 md:mb-12">
            <SectionHeader
              label="Celebrate Life"
              title="A Gathering Worth Getting Right"
              description="Anniversaries, milestone birthdays, retirements, memorials. Artistry holds space for all of them. Our team shapes each event around the people it is for. Personal, unhurried, and handled with care."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                label: "The Setting",
                title: "Spaces for Every Size",
                body: "Gardens, pavilions, terraces, for 20 guests or 200.",
                img: "/media/images/events/Social%20Events/H-23.jpg",
                alt: "Elegant reception setup at Artistry",
              },
              {
                label: "The Food",
                title: "Menus for the Occasion",
                body: "Tardis Catering builds the menu around you: buffet, plated, or passed.",
                img: "/media/images/events/Social%20Events/H-25.jpg",
                alt: "Floral tablescape with gold chargers",
              },
              {
                label: "The Team",
                title: "One Contact Throughout",
                body: "Your coordinator handles setup, timing, and staffing so you can be present.",
                img: "/media/images/events/Social%20Events/20230908_152912-edit.jpg",
                alt: "Tented celebration at Artistry",
              },
            ].map((card) => (
              <div key={card.label} className="flex flex-col">
                <div className="relative aspect-[3/2] overflow-hidden mb-4">
                  <Image
                    src={card.img}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <p className="section-label text-primary mb-2">{card.label}</p>
                <h3 className="font-display text-lg md:text-xl text-charcoal mb-2">
                  {card.title}
                </h3>
                <p className="font-body text-sm text-charcoal/65 leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-primary-dark py-10 md:py-section px-6">
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
      <section className="bg-primary/10 py-10 md:py-section px-6">
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

      {/* Brochure CTA */}
      <section className="bg-primary py-10 md:py-section px-6 text-center">
        <SectionHeader
          label="Take It With You"
          title="Plan Your Gathering at Artistry"
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
