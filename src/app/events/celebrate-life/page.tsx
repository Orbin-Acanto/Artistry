import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import ImageGallery from "@/components/ui/ImageGallery";
import Link from "next/link";
import { celebrateLifePackages, celebrateLifeGallery } from "@/data/events";

export const metadata: Metadata = {
  title: "Celebrate Life | Milestone Celebrations at Artistry",
  description:
    "Celebrate Life gatherings at Artistry — a beautiful, serene setting for honoring life milestones and milestone celebrations at Nassau County Museum of Art, Roslyn, NY.",
};

export default function CelebrateLifePage() {
  return (
    <>
      <PageHero
        label="Celebrate Life"
        title="Honor Every Chapter. Cherish Every Moment."
        description="A serene, beautiful space to gather, remember, and celebrate the journeys that shape us."
        imageSrc="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Serene gathering at Artistry"
      />

      {/* Intro */}
      <section className="bg-cream py-section px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            label="Celebrate Life"
            title="A Gathering as Meaningful as the Life It Honors"
            description="Life is full of chapters worth celebrating — anniversaries that span decades, birthdays that mark new beginnings, retirements that honor lifetimes of dedication, and gatherings that celebrate legacies that live on. At Artistry, we hold space for all of them."
            centered
          />
          <p className="font-body text-base text-charcoal/65 leading-relaxed text-center mt-6 max-w-2xl mx-auto">
            Our team works gently and thoughtfully with families to create experiences that feel personal, warm, and worthy of the lives and moments they honor. Every detail — from the setting to the menu — is handled with care.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-primary-dark py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Packages"
            title="Thoughtfully Designed Gatherings"
            centered
            light
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {celebrateLifePackages.map((pkg) => (
              <div key={pkg.name} className="border border-cream/15 p-8">
                <h3 className="font-display text-2xl text-cream mb-3">{pkg.name}</h3>
                <p className="font-body text-sm text-cream/60 leading-relaxed mb-6">{pkg.description}</p>
                <ul className="space-y-2 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <span className="text-cream/40 mt-1 shrink-0">—</span>
                      <span className="font-body text-sm text-cream/70">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/#contact" className="btn-outline w-full text-center">
                  Reach Out
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Gallery"
            title="Spaces That Hold What Matters"
            centered
            className="mb-10"
          />
          <ImageGallery images={celebrateLifeGallery} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 px-6 text-center">
        <p className="section-label text-cream/50 mb-4">We Are Here for You</p>
        <h2 className="font-display text-display-md text-cream max-w-2xl mx-auto mb-6">
          Let Us Help You Create a Gathering That Honors What Is Most Important
        </h2>
        <p className="font-body text-cream/65 text-sm max-w-lg mx-auto mb-8">
          Reach out to our team whenever you are ready. We will listen first, and plan with care.
        </p>
        <Link href="/#contact" className="btn-outline">
          Contact Our Team
        </Link>
      </section>
    </>
  );
}
