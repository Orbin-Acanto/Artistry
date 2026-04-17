import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import MenuBrochureClient from "@/components/MenuBrochureClient";

export const metadata: Metadata = {
  title: "Wedding Brochure | Artistry at Nassau County Museum of Art",
  description:
    "Browse Artistry's wedding brochure — every detail of your perfect day elevated by the beauty of the Nassau County Museum of Art in Roslyn, NY.",
};

export default function WeddingBrochurePage() {
  return (
    <>
      <PageHero
        label="Brochures"
        title="Weddings"
        description="Every detail of your wedding day, elevated by the timeless beauty of the Nassau County Museum of Art."
        imageSrc="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=80"
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
