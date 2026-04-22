import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";
import MenuBrochureClient from "@/components/MenuBrochureClient";

export const metadata: Metadata = {
  title: "Tardis Catering | Culinary Excellence at Artistry",
  description:
    "Tardis Catering is the exclusive culinary partner of Artistry at Nassau County Museum of Art. Bespoke menus, world-class chefs, and exceptional service for weddings and events in Roslyn, NY.",
};

export default function TardisCateringPage() {
  return (
    <>
      <PageHero
        label="Tardis Catering"
        title="Cuisine as Artful as the Setting"
        description="The exclusive culinary partner of Artistry. Every dish is crafted with the same attention to beauty and detail as the venue itself."
        imageSrc="/media/images/Tardis%20Catering/catering/hero.jpeg"
        imageAlt="Tardis Catering cuisine at Artistry"
      />

      {/* Who We Are */}
      <section className="bg-cream py-10 md:py-section px-6">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              label="Who We Are"
              title="Culinary Craft at the Heart of Every Event"
              description="Tardis Catering was founded on a single belief: that great food is not just sustenance. It is memory. A taste that recalls a moment. A dish that defines a celebration."
            />
            <p className="prose-venue mt-5">
              As the exclusive catering partner of Artistry, Tardis brings
              together an award-winning culinary team trained in the finest
              kitchens of New York and Europe. Every menu is developed in close
              collaboration with the client. Seasonal ingredients, artisan
              techniques, and a deep respect for dietary needs and cultural
              traditions.
            </p>
            <p className="prose-venue mt-4">
              Under {SITE.catering.name}, the dining experience is never an
              afterthought. It is the centerpiece.
            </p>
            <div className="mt-8">
              <Link href="/#contact" className="btn-primary">
                Plan Your Menu
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/media/images/Tardis%20Catering/MOAF-0143.jpg"
                alt="Tardis Catering elegantly plated fish with asparagus"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden mt-8">
              <Image
                src="/media/images/Tardis%20Catering/IMG_0939.jpg"
                alt="Tardis Catering fresh plated salad"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-10 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Sample Menu"
            title="A Taste of What We Offer"
            description="Every menu is fully customized. Browse our sample menu brochure below. Download, print, or view fullscreen."
            centered
            light
            className="mb-10"
          />
          <MenuBrochureClient />
          <p className="font-body text-xs text-cream/35 text-center mt-8 tracking-wide">
            Full menus, custom options, and dietary accommodations available
            upon consultation.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream py-10 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Gallery"
            title="Where Food Becomes Art"
            centered
            className="mb-10"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/media/images/Tardis%20Catering/catering/gallery/1.jpeg", alt: "Tardis Catering event" },
              { src: "/media/images/Tardis%20Catering/catering/gallery/2.jpeg", alt: "Tardis Catering event" },
              { src: "/media/images/Tardis%20Catering/catering/gallery/3.jpeg", alt: "Tardis Catering event" },
              { src: "/media/images/Tardis%20Catering/catering/gallery/4.jpeg", alt: "Tardis Catering event" },
              { src: "/media/images/Tardis%20Catering/catering/gallery/5.jpeg", alt: "Tardis Catering event" },
              { src: "/media/images/Tardis%20Catering/catering/gallery/6.jpeg", alt: "Tardis Catering event" },
              { src: "/media/images/Tardis%20Catering/catering/gallery/7.jpeg", alt: "Tardis Catering event" },
              { src: "/media/images/Tardis%20Catering/catering/gallery/8.jpeg", alt: "Tardis Catering event" },
              { src: "/media/images/Tardis%20Catering/catering/gallery/9.jpeg", alt: "Tardis Catering event" },
              { src: "/media/images/Tardis%20Catering/catering/gallery/10.jpeg", alt: "Tardis Catering event" },
              { src: "/media/images/Tardis%20Catering/catering/gallery/11.jpeg", alt: "Tardis Catering event" },
              { src: "/media/images/Tardis%20Catering/catering/gallery/12.jpeg", alt: "Tardis Catering event" },
              { src: "/media/images/Tardis%20Catering/catering/gallery/13.jpeg", alt: "Tardis Catering event" },
              { src: "/media/images/Tardis%20Catering/catering/gallery/14.jpeg", alt: "Tardis Catering event" },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-square overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cafe link */}
      <section className="bg-primary py-10 md:py-section px-6 text-center">
        <SectionHeader
          label="Also by Tardis"
          title="Visit Tardis Cafe"
          description="Stop by our Tardis Cafe for artisan coffee, seasonal bites, and light fare, open to museum visitors and event guests alike."
          centered
          light
          className="mb-8"
        />
        <Link href="/tardis-cafe" className="btn-outline">
          Explore Tardis Cafe
        </Link>
      </section>
    </>
  );
}
