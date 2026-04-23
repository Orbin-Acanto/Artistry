import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import SiteMapLocationsSection from "@/components/ui/SiteMapLocationsSection";
import Image from "next/image";
import { locations } from "@/data/about";

export const metadata: Metadata = {
  title: "Venue Map | Artistry at Nassau County Museum of Art",
  description:
    "Explore the layout and event spaces of Artistry at Nassau County Museum of Art. View our grounds map to plan your event at our Roslyn, NY venue.",
  alternates: { canonical: "https://www.eventsatartistry.com/about/site-map" },
};

export default function SiteMapPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Explore Our Grounds"
        description="Eight distinct event spaces set within the Nassau County Museum of Art estate, each with its own character, capacity, and atmosphere."
        imageSrc="/media/images/about/hero_1.jpeg"
        imageAlt="Aerial view of Nassau County Museum of Art estate grounds"
      />

      {/* Estate overview */}
      <section className="bg-cream py-10 md:py-section px-6">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <SectionHeader
            label="The Estate"
            title="Over 40 Acres of Curated Beauty"
            description="The Nassau County Museum of Art estate spans more than 40 acres of manicured grounds, sculpture gardens, and formal landscape. Our team works with each client to find the right spaces for their event."
          />
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/media/images/about/over_40.jpeg"
              alt="The formal gardens and estate grounds at Artistry"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Spaces */}
      <section className="bg-primary/10 py-10 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Ceremony & Reception Spaces"
            title="Eight Settings. One Extraordinary Day."
            description="Choose one or combine several. Each space can be configured to suit your event."
            centered
            className="mb-10 md:mb-14"
          />
          <SiteMapLocationsSection locations={locations} />
        </div>
      </section>
    </>
  );
}
