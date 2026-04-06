import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Site Map",
  description:
    "Explore the layout and event spaces of Artistry at Nassau County Museum of Art. View our grounds map to plan your event at our Roslyn, NY venue.",
};

const spaces = [
  {
    name: "The Grand Terrace",
    type: "Outdoor",
    capacity: "Up to 300 guests",
    bestFor: ["Wedding Receptions", "Cocktail Hours", "Corporate Galas"],
    description:
      "An expansive stone terrace overlooking the museum's formal gardens. The perfect setting for al fresco receptions under open skies.",
    image: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "The Garden Pavilion",
    type: "Semi-Outdoor",
    capacity: "Up to 150 guests",
    bestFor: ["Ceremonies", "Intimate Receptions", "Social Events"],
    description:
      "A romantic tented pavilion set within the sculpture garden, offering a magical blend of art, nature, and shelter.",
    image: "https://images.unsplash.com/photo-1519671282429-b8b6e7b93966?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "The Atrium",
    type: "Indoor",
    capacity: "Up to 250 guests",
    bestFor: ["Weddings", "Corporate Dinners", "Awards Events"],
    description:
      "A light-filled grand interior space with soaring ceilings, gallery walls, and flexible layouts for any occasion.",
    image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "The Estate Lawn",
    type: "Outdoor",
    capacity: "Up to 500 guests",
    bestFor: ["Outdoor Ceremonies", "Summer BBQs", "Large Receptions"],
    description:
      "Sweeping manicured lawns framed by century-old trees and classical sculptures. Our most expansive event space.",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=600&q=80",
  },
];

export default function SiteMapPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Explore Our Grounds"
        description="Artistry encompasses four distinct event spaces, each with its own unique character and atmosphere — all set within the Nassau County Museum of Art estate."
        imageSrc="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Aerial view of Nassau County Museum of Art estate grounds"
      />

      {/* Grounds overview */}
      <section className="bg-cream py-section px-6">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <SectionHeader
              label="The Estate"
              title="Over 40 Acres of Curated Beauty"
              description="The Nassau County Museum of Art estate spans more than 40 acres of manicured grounds, sculpture gardens, and formal landscape — providing an unparalleled natural setting for events of every scale."
            />
            <p className="prose-venue">
              From the sun-drenched Grand Terrace to the intimate Garden Pavilion, each space at Artistry has been thoughtfully designed to offer both beauty and functionality. Our team works closely with each client to select the ideal spaces and configuration for their event.
            </p>
          </div>

          {/* Map image */}
          <div className="relative aspect-[16/9] mb-20 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1600&q=80"
              alt="Grounds map of Artistry event venue"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Spaces grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {spaces.map((space) => (
              <div key={space.name} className="group">
                <div className="relative aspect-[3/2] overflow-hidden mb-6">
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-body text-xs tracking-widest uppercase bg-cream text-primary px-3 py-1">
                      {space.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-2xl text-charcoal">{space.name}</h3>
                  <span className="font-body text-xs text-charcoal/50 tracking-wide whitespace-nowrap mt-2">
                    {space.capacity}
                  </span>
                </div>
                <p className="prose-venue text-sm mb-4">{space.description}</p>
                <div className="flex flex-wrap gap-2">
                  {space.bestFor.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-xs tracking-wide border border-primary/30 text-primary px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
