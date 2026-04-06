import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "FIDI Hospitality | The Group Behind Artistry",
  description:
    "FIDI Hospitality is a premier hospitality group operating distinctive event venues across New York. Artistry at Nassau County Museum of Art is one of FIDI's signature venues.",
};

const venues = [
  {
    name: "Artistry",
    subtitle: "Nassau County Museum of Art, Roslyn, NY",
    description:
      "A premier event venue nestled within 40+ acres of the Nassau County Museum of Art estate — Long Island's most culturally rich event setting.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80",
    href: "/",
    current: true,
  },
  {
    name: "Venue Two",
    subtitle: "New York Metropolitan Area",
    description:
      "Another signature FIDI venue offering world-class event spaces in the greater New York area.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    href: "#",
  },
  {
    name: "Venue Three",
    subtitle: "New York Metropolitan Area",
    description:
      "A stunning space for intimate and large-scale celebrations, operated with the same FIDI commitment to excellence.",
    image: "https://images.unsplash.com/photo-1580479859052-6c5e49bbce49?auto=format&fit=crop&w=600&q=80",
    href: "#",
  },
];

const values = [
  { title: "Excellence", description: "Every FIDI venue is held to the highest standards of hospitality, design, and culinary craft." },
  { title: "Place", description: "We believe the setting of an event is as important as the celebration itself. Each venue is chosen for its singular character." },
  { title: "Partnership", description: "We work alongside our clients as true collaborators — listening deeply, planning meticulously, and executing flawlessly." },
  { title: "Legacy", description: "FIDI venues carry history. We steward extraordinary properties, honoring their past while creating new memories for generations." },
];

export default function FidiPage() {
  return (
    <>
      <PageHero
        label="FIDI Hospitality"
        title="Distinctive Venues. Extraordinary Events."
        description="FIDI Hospitality is a premier hospitality group operating some of New York's most celebrated event venues."
        imageSrc="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1920&q=80"
        imageAlt="FIDI Hospitality venues"
      />

      {/* About FIDI */}
      <section className="bg-cream py-section px-6">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              label="About FIDI Hospitality"
              title="The Group Behind Artistry and Beyond"
              description={SITE.parent.description}
            />
            <p className="prose-venue mt-5">
              FIDI Hospitality was founded on the belief that truly extraordinary events require extraordinary settings — and that the hospitality experience should match the grandeur of the venue. From Artistry at the Nassau County Museum of Art to our growing portfolio of signature properties, FIDI brings together the finest in event management, culinary excellence via Tardis Catering, and unwavering commitment to client vision.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
              alt="FIDI Hospitality team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-primary py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Our Philosophy"
            title="What Drives Everything We Do"
            centered
            light
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val) => (
              <div key={val.title} className="text-center">
                <h3 className="font-display text-2xl text-cream mb-3">{val.title}</h3>
                <p className="font-body text-sm text-cream/60 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="bg-cream py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Our Venues"
            title="A Portfolio of Extraordinary Spaces"
            centered
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {venues.map((venue) => (
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
                <h3 className="font-display text-2xl text-charcoal mb-2">{venue.name}</h3>
                <p className="font-body text-sm text-charcoal/65 leading-relaxed mb-4">{venue.description}</p>
                <Link
                  href={venue.href}
                  className="font-body text-xs tracking-widest uppercase text-primary hover:text-primary-dark transition-colors"
                >
                  {venue.current ? "Explore Artistry →" : "Coming Soon"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-primary-dark py-16 px-6 text-center">
        <SectionHeader
          label="FIDI Hospitality"
          title="Interested in Working With Us?"
          description="Whether you are looking to host an event at one of our venues, explore a partnership, or learn more about FIDI Hospitality, we would love to connect."
          centered
          light
          className="mb-8"
        />
        <Link href="/#contact" className="btn-outline">Get in Touch</Link>
      </section>
    </>
  );
}
