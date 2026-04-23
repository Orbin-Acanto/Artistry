import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";
import { fidiVenues, fidiValues } from "@/data/fidi";

export const metadata: Metadata = {
  title: "FIDI Hospitality | The Group Behind Artistry",
  description:
    "FIDI Hospitality is a premier hospitality group operating distinctive event venues across New York. Artistry at Nassau County Museum of Art is one of FIDI's signature venues.",
};

export default function FidiPage() {
  return (
    <>
      <PageHero
        label="FIDI Hospitality"
        title="Distinctive Venues. Extraordinary Events."
        description="FIDI Hospitality is a premier hospitality group operating some of New York's most celebrated event venues."
        imageSrc="/media/images/fidi/hero.png"
        imageAlt="FIDI Hospitality venues"
      />

      {/* About FIDI */}
      <section className="bg-cream py-10 md:py-section px-6">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              label="About FIDI Hospitality"
              title="The Group Behind Artistry and Beyond"
              description={SITE.parent.description}
            />
            <p className="prose-venue mt-5">
              FIDI Hospitality was founded on the belief that truly
              extraordinary events require extraordinary settings, where the
              hospitality experience matches the grandeur of the venue. From
              Artistry at the Nassau County Museum of Art to our growing
              portfolio of signature properties, FIDI brings together the finest
              in event management, culinary excellence via Tardi's Catering, and
              unwavering commitment to client vision.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/media/images/fidi/about.jpg"
              alt="FIDI Hospitality team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-primary py-10 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Our Philosophy"
            title="What Drives Everything We Do"
            centered
            light
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {fidiValues.map((val) => (
              <div key={val.title} className="text-center">
                <h3 className="font-display text-2xl text-cream mb-3">
                  {val.title}
                </h3>
                <p className="font-body text-sm text-cream/65 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="bg-cream py-10 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Our Venues"
            title="A Portfolio of Extraordinary Spaces"
            centered
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fidiVenues.map((venue) => (
              <div key={venue.name} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-5">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {venue.current && (
                    <div className="absolute top-4 left-4">
                      <span className="font-body text-xs tracking-widest uppercase bg-primary text-cream px-3 py-1">
                        You Are Here
                      </span>
                    </div>
                  )}
                </div>
                <p className="section-label mb-1">{venue.subtitle}</p>
                <h3 className="font-display text-2xl text-charcoal mb-2">
                  {venue.name}
                </h3>
                <p className="font-body text-sm text-charcoal/65 leading-relaxed mb-4">
                  {venue.description}
                </p>
                {venue.external ? (
                  <a
                    href={venue.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-xs tracking-widest uppercase text-primary hover:text-primary-dark transition-colors"
                  >
                    Visit Website →
                  </a>
                ) : (
                  <Link
                    href={venue.href}
                    className="font-body text-xs tracking-widest uppercase text-primary hover:text-primary-dark transition-colors"
                  >
                    Explore Artistry →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-primary py-10 md:py-section px-6 text-center">
        <SectionHeader
          label="FIDI Hospitality"
          title="Interested in Working With Us?"
          description="Whether you are looking to host an event at one of our venues, explore a partnership, or learn more about FIDI Hospitality, we would love to connect."
          centered
          light
          className="mb-8"
        />
        <Link href="/#contact" className="btn-outline">
          Get in Touch
        </Link>
      </section>
    </>
  );
}
