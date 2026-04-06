import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Site Map",
  description: "Complete site map for Artistry at Nassau County Museum of Art — browse all pages.",
};

const sitemapSections = [
  {
    title: "Home",
    links: [{ label: "Homepage", href: "/" }],
  },
  {
    title: "About",
    links: [
      { label: "History of the Property", href: "/about/history" },
      { label: "Location & Directors", href: "/about/location" },
      { label: "Site Map / Venue Grounds", href: "/about/site-map" },
    ],
  },
  {
    title: "Events",
    links: [
      { label: "All Events", href: "/events" },
      { label: "Weddings", href: "/events/weddings" },
      { label: "Corporate Events", href: "/events/corporate" },
      { label: "Social Events", href: "/events/social" },
      { label: "Celebrate Life", href: "/events/celebrate-life" },
    ],
  },
  {
    title: "Vendors",
    links: [{ label: "Preferred Vendors", href: "/vendors" }],
  },
  {
    title: "Tardis Catering",
    links: [
      { label: "Who We Are", href: "/tardis-catering" },
      { label: "Tardis Cafe", href: "/tardis-cafe" },
    ],
  },
  {
    title: "FIDI Hospitality",
    links: [{ label: "About FIDI", href: "/fidi" }],
  },
  {
    title: "Contact",
    links: [{ label: "Plan Your Event", href: "/#contact" }],
  },
];

export default function SitemapPage() {
  return (
    <div className="bg-cream min-h-screen pt-40 pb-section px-6">
      <div className="max-w-4xl mx-auto">
        <p className="section-label mb-3">Navigation</p>
        <h1 className="font-display text-display-lg text-charcoal mb-12">Site Map</h1>
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
