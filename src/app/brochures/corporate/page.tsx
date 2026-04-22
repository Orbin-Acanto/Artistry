import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import MenuBrochureClient from "@/components/MenuBrochureClient";

export const metadata: Metadata = {
  title: "Corporate Brochure | Artistry at Nassau County Museum of Art",
  description:
    "Explore Artistry's corporate event brochure — from intimate board dinners to large-scale conferences at the Nassau County Museum of Art in Roslyn, NY.",
};

export default function CorporateBrochurePage() {
  return (
    <>
      <PageHero
        label="Brochures"
        title="Corporate Events"
        description="From intimate board dinners to large-scale conferences, discover how Artistry elevates every corporate occasion."
        imageSrc="/media/images/events/corporate/awards.jpg"
        imageAlt="Corporate event at Artistry"
      />

      <section className="bg-cream py-10 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <MenuBrochureClient
            pdfPath="/media/pdfs/corporate.pdf"
            downloadName="Artistry-Corporate-Brochure.pdf"
            label="Corporate Brochure"
            variant="light"
          />
        </div>
      </section>
    </>
  );
}
