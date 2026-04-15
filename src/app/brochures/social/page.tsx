import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import MenuBrochureClient from "@/components/MenuBrochureClient";

export const metadata: Metadata = {
  title: "Social Events Brochure | Artistry at Nassau County Museum of Art",
  description:
    "Explore Artistry's social events brochure — galas, milestone celebrations, and social gatherings at the Nassau County Museum of Art in Roslyn, NY.",
};

export default function SocialBrochurePage() {
  return (
    <>
      <PageHero
        label="Brochures"
        title="Social Events"
        description="Galas, milestone celebrations, and social gatherings — discover what Artistry can create for your most memorable moments."
        imageSrc="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Social event at Artistry"
      />

      <section className="bg-primary py-section px-6">
        <div className="max-w-8xl mx-auto">
          <MenuBrochureClient
            pdfPath="/media/pdfs/social.pdf"
            downloadName="Artistry-Social-Brochure.pdf"
            label="Social Events Brochure"
          />
        </div>
      </section>
    </>
  );
}
