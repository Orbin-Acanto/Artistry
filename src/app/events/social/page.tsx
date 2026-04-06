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
    "Host Bar & Bat Mitzvahs, Communions, Confirmations, and milestone celebrations at Artistry in Roslyn, NY — a premier social event venue at Nassau County Museum of Art on Long Island.",
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
        title="Life's Most Meaningful Milestones Deserve an Extraordinary Setting"
        description="From sacred celebrations to joyful gatherings — Artistry honors every milestone with warmth, elegance, and exceptional hospitality."
        imageSrc="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Social event celebration at Artistry"
      />

      {/* Intro */}
      <section className="bg-cream py-section px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            label="Social Events"
            title="Celebrate What Matters Most"
            description="At Artistry, we understand that social events are deeply personal. Whether you are marking a religious milestone, a decade birthday, or a family anniversary, our team brings the same care and creativity to every celebration."
            centered
          />
        </div>
      </section>

      {/* Event Types */}
      <section className="bg-cream pb-section px-6">
        <div className="max-w-8xl mx-auto space-y-16">
          {socialEventTypes.map((type, idx) => (
            <div
              key={type.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
            >
              <div className={`relative aspect-[4/3] overflow-hidden ${idx % 2 !== 0 ? "lg:order-2" : ""}`}>
                <Image
                  src={type.image}
                  alt={type.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className={idx % 2 !== 0 ? "lg:order-1" : ""}>
                <h2 className="font-display text-display-md text-charcoal mb-4">{type.name}</h2>
                <p className="prose-venue mb-4">{type.description}</p>
                <p className="font-body text-sm text-charcoal/60 leading-relaxed">{type.details}</p>
                <Link href="/#contact" className="btn-primary mt-8 inline-flex">
                  Inquire About {type.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="bg-primary-dark py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Social Event Packages"
            title="Designed Around Your Celebration"
            description="Our social event packages are a starting point — each fully customizable to match the scale, style, and spirit of your occasion."
            centered
            light
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {socialPackages.map((pkg) => (
              <div key={pkg.name} className="border border-cream/15 p-8">
                <h3 className="font-display text-2xl text-cream mb-3">{pkg.name}</h3>
                <p className="font-body text-sm text-cream/60 leading-relaxed mb-6">{pkg.description}</p>
                <ul className="space-y-2 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <span className="text-cream/40 mt-1 shrink-0">—</span>
                      <span className="font-body text-sm text-cream/70">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/#contact" className="btn-outline w-full text-center">
                  Inquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Social Events Gallery"
            title="Moments Worth Celebrating"
            centered
            className="mb-10"
          />
          <ImageGallery images={socialGallery} />
        </div>
      </section>

      {/* Brochure */}
      <section className="bg-primary py-16 px-6 text-center">
        <p className="section-label text-cream/50 mb-3">Download</p>
        <h2 className="font-display text-display-md text-cream mb-6">Social Events Brochure</h2>
        <p className="font-body text-cream/65 text-sm max-w-md mx-auto mb-8">
          Download our social events brochure for full information on spaces, packages, and the Artistry experience.
        </p>
        <a href="#" className="btn-outline">Download Brochure (PDF)</a>
      </section>
    </>
  );
}
