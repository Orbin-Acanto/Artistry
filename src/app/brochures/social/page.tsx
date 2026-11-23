import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";
import MenuBrochureClient from "@/components/MenuBrochureClient";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Social Events Brochure | Artistry Events",
    description:
      "Read the Artistry social events brochure: galas, milestone celebrations and social gatherings at Nassau County Museum of Art in Roslyn, NY.",
    path: "/brochures/social",
  }),
  robots: { index: false, follow: false },
};

export default function SocialBrochurePage() {
  return (
    <>
      <PageHero
        label="Brochures"
        title="Social Events"
        description="Galas, milestone celebrations, and social gatherings. Discover what Artistry can create for your most memorable moments."
        imageSrc="/media/images/events/Social Events/20230510_172459.jpg"
        imageAlt="Social event at Artistry"
      />

      <section className="bg-cream py-10 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <MenuBrochureClient
            pdfPath="/media/pdfs/social.pdf"
            downloadName="Artistry-Social-Brochure.pdf"
            label="Social Events Brochure"
            variant="light"
          />
        </div>
      </section>
    </>
  );
}
