import type { Metadata } from "next";
import Link from "next/link";
import { sitemapSections } from "@/data/about";

export const metadata: Metadata = {
  title: "Site Map | Artistry at Nassau County Museum of Art",
  description: "Complete site map for Artistry at Nassau County Museum of Art. Browse all pages.",
  alternates: { canonical: "https://www.eventsatartistry.com/sitemap" },
  robots: { index: false, follow: true },
};

export default function SitemapPage() {
  return (
    <div className="bg-cream min-h-screen pt-28 md:pt-40 pb-12 md:pb-section px-6">
      <div className="max-w-4xl mx-auto">
        <p className="section-label mb-3">Navigation</p>
        <h1 className="font-display text-[clamp(1.75rem,6vw,3.5rem)] leading-tight text-balance break-words uppercase text-primary-dark mb-12">Site Map</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sitemapSections.map((section) => (
            <div key={section.title}>
              <h2 className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-charcoal/40 mb-4 border-b border-primary/20 pb-2">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-charcoal/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
