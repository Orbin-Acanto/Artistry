import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Tardis Catering | Culinary Excellence at Artistry",
  description:
    "Tardis Catering is the exclusive culinary partner of Artistry at Nassau County Museum of Art. Bespoke menus, world-class chefs, and exceptional service for weddings and events in Roslyn, NY.",
};

const menuHighlights = [
  {
    category: "Passed Hors d'Oeuvres",
    items: ["Seared Tuna on Sesame Crisp", "Truffle Arancini", "Lobster Bisque Shooter", "Prosciutto & Fig Crostini"],
  },
  {
    category: "First Course",
    items: ["Roasted Beet & Burrata Salad", "Lobster Bisque", "Heirloom Tomato Carpaccio", "Wild Mushroom Soup"],
  },
  {
    category: "Main Course",
    items: ["Roasted Prime Rib", "Pan-Seared Halibut", "Braised Short Rib", "Vegetarian Wellington"],
  },
  {
    category: "Dessert",
    items: ["Custom Wedding Cake", "Artisan Macaron Tower", "Chocolate Lava Cake", "Seasonal Sorbet"],
  },
];

export default function TardisCateringPage() {
  return (
    <>
      <PageHero
        label="Tardis Catering"
        title="Cuisine as Artful as the Setting"
        description="The exclusive culinary partner of Artistry — where every dish is crafted with the same attention to beauty and detail as the venue itself."
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Tardis Catering cuisine at Artistry"
      />

      {/* Who We Are */}
      <section className="bg-cream py-section px-6">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              label="Who We Are"
              title="Culinary Craft at the Heart of Every Event"
              description="Tardis Catering was founded on a single belief: that great food is not just sustenance — it is memory. A taste that recalls a moment. A dish that defines a celebration."
            />
            <p className="prose-venue mt-5">
              As the exclusive catering partner of Artistry, Tardis brings together an award-winning culinary team trained in the finest kitchens of New York and Europe. Every menu is developed in close collaboration with the client — seasonal ingredients, artisan techniques, and a deep respect for dietary needs and cultural traditions.
            </p>
            <p className="prose-venue mt-4">
              Under {SITE.catering.name}, the dining experience is never an afterthought. It is the centerpiece.
            </p>
            <div className="mt-8">
              <Link href="/#contact" className="btn-primary">Plan Your Menu</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80"
                alt="Tardis Catering chef preparing dishes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden mt-8">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80"
                alt="Elegant plated dish by Tardis Catering"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="bg-primary-dark py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Sample Menu"
            title="A Taste of What We Offer"
            description="Every menu is fully customized. The following is a sample of what our culinary team has to offer."
            centered
            light
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuHighlights.map((section) => (
              <div key={section.category}>
                <h3 className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-cream/40 mb-4">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="font-display text-base text-cream/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-cream/35 text-center mt-12 tracking-wide">
            Full menus, custom options, and dietary accommodations available upon consultation.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader label="Gallery" title="Where Food Becomes Art" centered className="mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", alt: "Elegant catering spread" },
              { src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80", alt: "Chef plating dish" },
              { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80", alt: "Wedding cake" },
              { src: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=600&q=80", alt: "Passed hors d'oeuvres" },
              { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80", alt: "Cocktail hour station" },
              { src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80", alt: "Dessert display" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden group">
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
      <section className="bg-primary py-16 px-6 text-center">
        <p className="section-label text-cream/50 mb-3">Also by Tardis</p>
        <h2 className="font-display text-display-md text-cream mb-4">Visit Tardis Cafe</h2>
        <p className="font-body text-cream/65 text-sm max-w-md mx-auto mb-8">
          Stop by our Tardis Cafe for artisan coffee, seasonal bites, and light fare — open to museum visitors and event guests alike.
        </p>
        <Link href="/tardis-cafe" className="btn-outline">Explore Tardis Cafe</Link>
      </section>
    </>
  );
}
