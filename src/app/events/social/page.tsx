import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import ImageGallery from "@/components/ui/ImageGallery";
import Image from "next/image";
import Link from "next/link";
import { socialEventTypes, socialPackages, socialGallery } from "@/data/events";

export const metadata: Metadata = {
  title: "Social Events | Bar Mitzvahs, Communions & Milestone Celebrations",
  description:
    "Host Bar and Bat Mitzvahs, Communions, Confirmations, and milestone celebrations at Artistry in Roslyn, NY. A social event venue at Nassau County Museum of Art on Long Island.",
  keywords: [
    "Bar Mitzvah venue Long Island",
    "Bat Mitzvah venue NY",
    "milestone celebration venue",
    "social events Roslyn NY",
    "Communion venue Nassau County",
  ],
};

export default function SocialEventsPage() {
  return (
    <>
      <PageHero
        label="Social Events"
        title="Life's Most Meaningful Moments Deserve a Setting to Match"
        description="From sacred milestones to joyful gatherings, Artistry provides the space and the hospitality to do them justice."
        imageSrc="/media/images/events/Social%20Events/52161352704_f08a6f394d_h-edit_02.jpeg"
        imageAlt="Social event celebration at Artistry"
      />

      {/* Event Types */}
      <section className="bg-cream py-10 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <div className="mb-12 md:mb-16">
            <SectionHeader
              label="Social Events"
              title="Every Celebration Is Personal"
              description="Whether you are marking a religious milestone, a round birthday, or a family anniversary, our team gives each event the same care and attention. No two gatherings at Artistry are the same."
              centered
            />
          </div>
          <div className="divide-y divide-primary/10">
            {socialEventTypes.map((type, idx) => (
              <div
                key={type.slug}
                className="grid grid-cols-1 lg:grid-cols-2 items-center"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden ${
                    idx % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div
                  className={`py-8 px-4 md:px-8 lg:px-12 ${idx % 2 !== 0 ? "lg:order-1" : ""}`}
                >
                  <h2 className="font-display text-[clamp(1.75rem,6vw,3.5rem)] leading-tight text-balance break-words uppercase text-primary-dark mb-4">
                    {type.name}
                  </h2>
                  <p className="font-body text-sm md:text-base leading-relaxed text-charcoal/65 max-w-lg mb-4">
                    {type.description}
                  </p>
                  <p className="font-body text-sm text-charcoal/55 leading-relaxed">
                    {type.details}
                  </p>
                  <Link
                    href="/#contact"
                    className="btn-primary mt-8 inline-flex"
                  >
                    Inquire About {type.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-primary-dark py-10 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Event Packages"
            title="Pick a Starting Point"
            description="All packages are priced per person and can be adjusted to fit your guest count and preferences. Pricing is available upon request."
            centered
            light
            className="mb-10 md:mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {socialPackages.map((pkg) => (
              <div
                key={pkg.name}
                className="border border-cream/20 p-6 md:p-8 hover:border-cream/50 transition-colors flex flex-col"
              >
                {pkg.subtitle && (
                  <p className="section-label text-cream/50 mb-2">
                    {pkg.subtitle}
                  </p>
                )}
                <h3 className="font-display text-2xl text-cream mb-1">
                  {pkg.name}
                </h3>
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
                            <span className="font-body text-sm text-cream/75">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <ul className="space-y-2.5">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex gap-3 items-start">
                          <span className="w-1 h-1 rounded-full bg-cream/60 shrink-0 mt-2" />
                          <span className="font-body text-sm text-cream/75">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <Link
                  href="/#contact"
                  className="btn-outline w-full text-center mt-auto"
                >
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
            label="Social Events Gallery"
            title="A Few of Our Favorite Occasions"
            centered
            className="mb-10"
          />
          <ImageGallery images={socialGallery} />
        </div>
      </section>

      {/* Brochure CTA */}
      <section className="bg-primary py-10 md:py-section px-6 text-center">
        <SectionHeader
          label="Take It With You"
          title="Our Social Events Brochure"
          description="A full overview of our spaces, packages, and what to expect when you host your celebration at Artistry."
          centered
          light
          className="mb-8"
        />
        <Link href="/brochures/social" className="btn-outline">
          View Brochure
        </Link>
      </section>
    </>
  );
}
