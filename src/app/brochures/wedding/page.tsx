import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import MenuBrochureClient from "@/components/MenuBrochureClient";

export const metadata: Metadata = {
  title: "Wedding Brochure | Artistry at Nassau County Museum of Art",
  description:
    "Browse Artistry's wedding brochure. Every detail of your perfect day elevated by the beauty of the Nassau County Museum of Art in Roslyn, NY.",
  alternates: { canonical: "https://www.eventsatartistry.com/brochures/wedding" },
  robots: { index: false, follow: false },
};

export default function WeddingBrochurePage() {
  return (
    <>
      <PageHero
        label="Brochures"
        title="Weddings"
        description="Every detail of your wedding day, elevated by the timeless beauty of the Nassau County Museum of Art."
        imageSrc="/media/images/events/wedding/12.jpeg"
        imageAlt="Wedding at Artistry"
      />

      <section className="bg-cream py-10 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <MenuBrochureClient
            pdfPath="/media/pdfs/wedding.pdf"
            downloadName="Artistry-Wedding-Brochure.pdf"
            label="Wedding Brochure"
            variant="light"
          />
        </div>
      </section>
    </>
  );
}
