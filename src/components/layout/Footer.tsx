import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/data/site";
import { navigation } from "@/data/navigation";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-cream border-t-2 border-slick">
      {/* Main footer */}
      <div className="max-w-8xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/media/images/logo/artistry-logo.svg"
                alt={SITE.fullName}
                width={320}
                height={96}
                className="h-28 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-0 invert"
              />
            </Link>
            <p className="font-body text-sm text-cream/60 leading-relaxed mb-6 max-w-xs">
              {SITE.tagline}
            </p>
            <div className="flex gap-4">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-cream transition-colors"
                aria-label="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-cream transition-colors"
                aria-label="Facebook"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-cream/40 mb-5">
              Explore
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-sm text-cream/65 hover:text-cream transition-colors tracking-wide"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events links */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-cream/40 mb-5">
              Events
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Weddings", href: "/events/weddings" },
                { label: "Corporate Events", href: "/events/corporate" },
                { label: "Social Events", href: "/events/social" },
                { label: "Celebrate Life", href: "/events/celebrate-life" },
                { label: "Vendors", href: "/vendors" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream/65 hover:text-cream transition-colors tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-cream/40 mb-5">
              Contact
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex gap-3">
                <MapPin size={16} className="text-cream/40 shrink-0 mt-0.5" />
                <div className="font-body text-sm text-cream/65 leading-relaxed">
                  <span className="block">{SITE.address.venue}</span>
                  <span className="block">{SITE.address.street}</span>
                  <span className="block">
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </span>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-cream/40 shrink-0" />
                <a
                  href={SITE.contact.phoneHref}
                  className="font-body text-sm text-cream/65 hover:text-cream transition-colors"
                >
                  {SITE.contact.phone}
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-cream/40 shrink-0" />
                <a
                  href={SITE.contact.emailHref}
                  className="font-body text-sm text-cream/65 hover:text-cream transition-colors"
                >
                  {SITE.contact.email}
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-8xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-cream/35 tracking-wide">
            © {year} Artistry at Nassau County Museum of Art. A{" "}
            <a
              href={SITE.parent.url}
              className="hover:text-cream/60 transition-colors"
            >
              FIDI Hospitality
            </a>{" "}
            venue.
          </p>
          <div className="flex gap-6">
            <Link
              href="/sitemap"
              className="font-body text-xs text-cream/35 hover:text-cream/60 transition-colors tracking-wide"
            >
              Site Map
            </Link>
            <Link
              href="/privacy"
              className="font-body text-xs text-cream/35 hover:text-cream/60 transition-colors tracking-wide"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
