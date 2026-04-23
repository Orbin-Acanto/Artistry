import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";
import { cafeMenu, cafePhotoStrip } from "@/data/tardis";
import { MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Tardis Cafe | Coffee & Light Fare at Nassau County Museum of Art",
  description:
    "Tardis Cafe at Nassau County Museum of Art in Roslyn, NY. Artisan coffee, seasonal bites, and light fare for museum visitors and event guests.",
};

export default function TardisCafePage() {
  return (
    <>
      <PageHero
        label="Tardi's Cafe"
        title="A Perfect Pause Among Art and Nature"
        description="Artisan coffee, seasonal fare, and warm hospitality. A tranquil retreat within the Nassau County Museum of Art grounds."
        imageSrc="/media/images/Tardis%20Catering/cafe/hero-image.png"
        imageAlt="Tardis Cafe at Nassau County Museum of Art"
      />

      {/* About */}
      <section className="bg-cream py-10 md:py-section px-6">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              label="The Cafe"
              title="Where the Museum Grounds Meet a Warm Cup"
              description="Tardi's Cafe was born from a desire to offer museum visitors and event guests a moment of true comfort: a beautifully crafted coffee, a seasonal bite, a place to pause and reflect."
            />
            <p className="prose-venue mt-5">
              Located within the museum grounds, the Tardi&apos;s Cafe is the perfect
              companion to a morning stroll through the sculpture garden or a
              quiet lunch before an afternoon event. Every item on our menu
              reflects the same attention to craft and quality that defines
              Tardi&apos;s Catering.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-charcoal/40 mb-1">
                    Location
                  </p>
                  <p className="font-body text-sm text-charcoal/75">
                    {SITE.address.venue}, {SITE.address.full}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Clock size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-charcoal/40 mb-1">
                    Hours
                  </p>
                  <p className="font-body text-sm text-charcoal/75">
                    Tuesday to Sunday: 10am to 4pm
                  </p>
                  <p className="font-body text-sm text-charcoal/75">
                    Closed Mondays
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/media/images/Tardis%20Catering/cafe/the-cafe.png"
              alt="Tardis Cafe interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="bg-primary-dark py-10 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Our Menu"
            title="Simple. Seasonal. Exceptional."
            centered
            light
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {cafeMenu.map((section) => (
              <div key={section.category}>
                <h3 className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-cream/40 mb-5">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="w-1 h-1 rounded-full bg-cream/60 shrink-0 mt-2" />
                      <span className="font-body text-sm text-cream/75 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-cream/30 text-center mt-10 tracking-wide">
            Menu subject to seasonal availability.
          </p>
        </div>
      </section>

      {/* Photo strip */}
      <section className="bg-cream py-10 md:py-section px-6">
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cafePhotoStrip.map((img) => (
            <div
              key={img.src}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 33vw, 20vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-10 md:py-section px-6 text-center">
        <SectionHeader
          label="Also by Tardi's"
          title="Hosting an Event?"
          description="Tardi's Catering handles full event menus and service at Artistry. Explore our catering experience."
          centered
          light
          className="mb-8"
        />
        <Link href="/tardis-catering" className="btn-outline">
          Explore Tardi&apos;s Catering
        </Link>
      </section>
    </>
  );
}
