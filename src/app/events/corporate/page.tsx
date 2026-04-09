import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import ImageGallery from "@/components/ui/ImageGallery";
import Image from "next/image";
import Link from "next/link";
import { corporateEventTypes, corporateGallery } from "@/data/events";

export const metadata: Metadata = {
  title:
    "Corporate Events Long Island | Artistry at Nassau County Museum of Art",
  description:
    "Host corporate dinners, summer outings, meetings, cocktail receptions, and award ceremonies at Artistry in Roslyn, NY. A premier corporate event venue on Long Island.",
  keywords: [
    "corporate event venue Long Island",
    "corporate venue Roslyn NY",
    "business events Nassau County",
    "corporate dinner venue NY",
    "awards gala Long Island",
  ],
};

export default function CorporatePage() {
  return (
    <>
      <PageHero
        label="Corporate Events"
        title="Inspire Your Team. Impress Your Clients."
        description="Artistry provides an extraordinary backdrop for corporate gatherings of every kind — where business meets beauty."
        imageSrc="/media/images/events/corporate/hero.jpg"
        imageAlt="Corporate event at Artistry Nassau County Museum of Art"
      />

      {/* Intro */}
      <section className="bg-cream py-12 md:py-section px-6">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeader
              label="Why Artistry for Corporate"
              title="A Setting That Commands Attention"
              description="When your venue reflects the caliber of your brand, every detail is elevated. Artistry offers a rare combination of natural beauty, architectural grandeur, and world-class hospitality — making every corporate event a statement."
            />
            <p className="prose-venue mt-5">
              From intimate executive dinners to company-wide summer outings,
              our team handles every detail with precision. Tardis Catering
              delivers exceptional cuisine and service, while our event
              coordinators ensure a seamless experience from arrival to
              departure.
            </p>
            <div className="mt-8">
              <Link href="/#contact" className="btn-primary">
                Request a Proposal
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/media/images/events/corporate/about.jpg"
              alt="Corporate event space at Artistry"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="bg-primary-dark py-12 md:py-section">
        <div className="max-w-8xl mx-auto px-6">
          <SectionHeader
            label="Corporate Event Types"
            title="Every Format, Perfectly Executed"
            centered
            light
            className="mb-10 md:mb-14"
          />
        </div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-0">
          {corporateEventTypes.map((type, idx) => (
            <div
              key={type.slug}
              className="grid grid-cols-1 lg:grid-cols-2 mb-4 lg:mb-0"
            >
              <div
                className={`relative aspect-[4/3] lg:aspect-auto lg:h-[480px] overflow-hidden ${
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
                className={`flex flex-col justify-center p-6 sm:p-10 lg:p-16 ${
                  idx % 2 !== 0 ? "lg:order-1 bg-primary" : "bg-primary-dark"
                }`}
              >
                <p className="section-label text-cream/50 mb-2">
                  {type.capacity}
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-cream mb-4">
                  {type.name}
                </h3>
                <p className="font-body text-sm text-cream/65 leading-relaxed mb-6">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.highlights.map((h) => (
                    <li key={h} className="flex gap-2 items-center">
                      <span className="w-1 h-1 rounded-full bg-cream/40 shrink-0" />
                      <span className="font-body text-sm text-cream/60">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Corporate Gallery"
            title="Events That Make an Impression"
            centered
            className="mb-10"
          />
          <ImageGallery images={corporateGallery} />
        </div>
      </section>

      {/* Brochure */}
      <section className="bg-primary py-16 px-6 text-center">
        <p className="section-label text-cream/50 mb-3">Download</p>
        <h2 className="font-display text-display-md text-cream mb-6 uppercase">
          Corporate Events Brochure
        </h2>
        <p className="font-body text-cream/65 text-sm max-w-md mx-auto mb-8">
          Download our corporate events brochure for full details on spaces,
          packages, catering menus, and A/V capabilities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="btn-outline">
            Download Brochure (PDF)
          </a>
          <Link
            href="/#contact"
            className="btn-primary bg-cream text-primary hover:bg-cream/90"
          >
            Request a Proposal
          </Link>
        </div>
      </section>
    </>
  );
}
