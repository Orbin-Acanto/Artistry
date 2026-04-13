import type { Metadata } from "next";
import Link from "next/link";
import BrochureClient from "./BrochureClient";

export const metadata: Metadata = {
  title: "Sample Menu Brochure | Tardis Catering at Artistry",
  description:
    "Browse the Tardis Catering sample menu brochure for events at Artistry, Nassau County Museum of Art. Bespoke menus for weddings, social events, and corporate gatherings in Roslyn, NY.",
  keywords: [
    "Tardis Catering menu brochure",
    "Artistry event catering Long Island",
    "wedding catering menu Nassau County",
    "event catering brochure Roslyn NY",
    "catering menu Nassau County Museum of Art",
  ],
};

const menuHighlights = [
  "Fully customized menus crafted around your event and guests",
  "Seasonal, locally sourced ingredients prepared by our award-winning culinary team",
  "Passed hors d'oeuvres, plated dinners, buffets, and food station options",
  "Kosher-friendly, dietary, and allergen accommodations available",
  "Seamless coordination from menu planning through service",
];

export default function MenuBrochurePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream pt-32 pb-14 px-6 border-b border-charcoal/10">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:items-start">
          <div>
            <p className="section-label text-primary mb-4">Sample Menu</p>
            <h1 className="font-display text-display-lg text-charcoal uppercase leading-[1.08] tracking-tight max-w-2xl">
              Tardis Catering Menu Brochure
            </h1>
            <p className="prose-venue mt-6 max-w-2xl">
              Browse our sample menu brochure for a closer look at what Tardis Catering
              brings to every event at Artistry. Every menu is built in close collaboration
              with you — seasonal, bespoke, and executed flawlessly.
            </p>
            <p className="prose-venue mt-4 max-w-2xl">
              Use the interactive viewer below to flip through the full brochure, or
              download the PDF to explore at your own pace.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/media/pdfs/catering.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Open PDF
              </a>
              <Link href="/#contact" className="btn-outline-dark">
                Plan Your Menu
              </Link>
            </div>
          </div>

          <aside className="border border-charcoal/12 bg-white p-8">
            <h2 className="font-display text-xl text-charcoal uppercase tracking-tight">
              What&apos;s Inside
            </h2>
            <ul className="mt-6 space-y-4">
              {menuHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[7px] w-1.5 h-1.5 shrink-0 bg-primary rounded-full" />
                  <span className="font-body text-sm leading-6 text-charcoal/70">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 pt-6 border-t border-charcoal/10 font-body text-xs text-charcoal/45 leading-6">
              Full dietary accommodations, custom menus, and tasting sessions available upon
              consultation with our culinary team.
            </p>
          </aside>
        </div>
      </section>

      {/* Viewer label */}
      <section className="bg-primary-dark px-6 py-8 border-b border-cream/10">
        <div className="max-w-8xl mx-auto">
          <h2 className="font-display text-2xl text-cream uppercase tracking-tight">
            Interactive Menu Viewer
          </h2>
          <p className="mt-2 font-body text-sm text-cream/55 max-w-2xl leading-relaxed">
            Flip through the Tardis Catering sample menu below. Use the arrows to navigate
            pages, adjust zoom, or download the full PDF brochure.
          </p>
        </div>
      </section>

      {/* Interactive PDF viewer */}
      <BrochureClient />

      {/* CTA */}
      <section className="bg-primary py-16 px-6 text-center">
        <p className="section-label text-cream/50 mb-3">Ready to Begin?</p>
        <h2 className="font-display text-display-md text-cream mb-6 uppercase">
          Let&apos;s Craft Your Menu
        </h2>
        <p className="font-body text-cream/65 text-sm max-w-md mx-auto mb-8">
          Contact our team to schedule a tasting, discuss dietary needs, or begin
          designing the dining experience for your event at Artistry.
        </p>
        <Link href="/#contact" className="btn-outline">
          Get in Touch
        </Link>
      </section>
    </>
  );
}
