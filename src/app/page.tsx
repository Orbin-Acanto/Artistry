import type { Metadata } from "next";
import ParallaxHero from "@/components/ParallaxHero";
import CutoutParallax from "@/components/CutoutParallax";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/ui/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Artistry at Nassau County Museum of Art | Event Venue Roslyn, NY",
  description:
    "Artistry is a premier event venue at Nassau County Museum of Art in Roslyn, NY. Host weddings, corporate events, social celebrations, and milestone occasions surrounded by stunning art and lush grounds.",
};

const eventHighlights = [
  {
    title: "Weddings",
    description:
      "Exchange vows and celebrate surrounded by art, sculpture gardens, and sweeping estate grounds. A setting unlike any other on Long Island.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    href: "/events/weddings",
  },
  {
    title: "Corporate Events",
    description:
      "From intimate dinners to large-scale galas and conferences — inspire your team and impress your clients in a truly unique environment.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    href: "/events/corporate",
  },
  {
    title: "Social Events",
    description:
      "Bar Mitzvahs, milestone birthdays, anniversaries and more — celebrate life's most meaningful moments with elegance and warmth.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    href: "/events/social",
  },
  {
    title: "Celebrate Life",
    description:
      "Honor a life well-lived with a dignified, heartfelt gathering in one of our serene and beautiful spaces.",
    image: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=800&q=80",
    href: "/events/celebrate-life",
  },
];

const venueStats = [
  { value: "40+", label: "Acres of Estate Grounds" },
  { value: "500+", label: "Guests Accommodated" },
  { value: "4", label: "Distinct Event Spaces" },
  { value: "100+", label: "Events Each Year" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <ParallaxHero />

      {/* ── About Intro ──────────────────────────────────── */}
      <section className="bg-cream py-section px-6">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              label="The Venue"
              title="Art as the Architecture of Every Celebration"
              description="Artistry is nestled within the breathtaking grounds of the Nassau County Museum of Art in Roslyn, New York — one of Long Island's most celebrated cultural destinations. Here, every event unfolds amid world-class sculpture, manicured gardens, and a Beaux-Arts mansion that has stood for over a century."
            />
            <p className="prose-venue mt-5">
              Under the stewardship of FIDI Hospitality and the culinary excellence of Tardis Catering, Artistry transforms special occasions into indelible experiences — where the art on the walls and the art of hospitality become one.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/about/history" className="btn-outline-dark">
                Our History
              </Link>
              <Link href="/about/location" className="btn-primary">
                Visit Us
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
                alt="Artistry event venue exterior at Nassau County Museum of Art"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 -z-10" />
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <section className="bg-primary py-16 px-6">
        <div className="max-w-8xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {venueStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-5xl md:text-6xl text-cream">{stat.value}</p>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-cream/55 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Events Grid ──────────────────────────────────── */}
      <section className="bg-cream py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Events"
            title="Every Occasion, Elevated"
            description="From intimate ceremonies to grand celebrations — Artistry provides the perfect canvas for every chapter of life."
            centered
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventHighlights.map((event) => (
              <Link
                key={event.href}
                href={event.href}
                className="group block relative overflow-hidden"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl text-cream mb-2">{event.title}</h3>
                    <p className="font-body text-sm text-cream/70 leading-relaxed line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {event.description}
                    </p>
                    <span className="inline-block mt-3 font-body text-xs tracking-widest uppercase text-cream/50 group-hover:text-cream transition-colors">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Parallax Image Break ─────────────────────────── */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80"
          alt="Artistry event venue grounds and gardens"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="section-label text-cream/60 mb-4">Long Island&apos;s Premier</p>
            <h2 className="font-display text-display-lg text-cream max-w-2xl text-balance">
              A Stage Set in Nature, Framed by Art
            </h2>
          </div>
        </div>
      </section>

      {/* ── Catering & Cafe ──────────────────────────────── */}
      <section className="bg-cream py-section px-6">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden mt-10">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80"
                alt="Tardis Catering cuisine"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden -mt-10">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80"
                alt="Tardis Cafe"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader
              label="Culinary Excellence"
              title="Tardis Catering & Tardis Cafe"
              description="Every event at Artistry is elevated by the culinary artistry of Tardis Catering — our exclusive in-house culinary partner. From bespoke tasting menus to lavish buffet experiences, our chefs craft each dish with the same precision and passion that defines the Artistry experience."
            />
            <p className="prose-venue mt-5">
              Between events, our Tardis Cafe offers guests and visitors a curated menu of artisan coffee, seasonal fare, and light bites — a perfect pause before or after exploring the museum grounds.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/tardis-catering" className="btn-outline-dark">
                Tardis Catering
              </Link>
              <Link href="/tardis-cafe" className="btn-primary">
                Tardis Cafe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cutout Parallax CTA ──────────────────────────── */}
      <CutoutParallax
        text="Your Event Awaits"
        subtext="Begin planning the celebration of a lifetime. Our event team is ready to bring your vision to life at Artistry."
        imageSrc="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Artistry venue at dusk"
        ctaLabel="Start Planning"
        ctaHref="/#contact"
      />

      {/* ── Contact Section ───────────────────────────────── */}
      <section id="contact" className="bg-primary-dark py-section px-6">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader
              label="Get in Touch"
              title="Plan Your Event at Artistry"
              description="Our dedicated event team is here to help you create an unforgettable experience. Reach out to begin the conversation."
              light
            />
            <address className="not-italic mt-10 space-y-5">
              <div className="flex gap-4">
                <MapPin size={18} className="text-cream/40 shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-cream/40 mb-1">Location</p>
                  <p className="font-body text-sm text-cream/75 leading-relaxed">
                    {SITE.address.venue}<br />
                    {SITE.address.street}<br />
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Phone size={18} className="text-cream/40 shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-cream/40 mb-1">Phone</p>
                  <a href={SITE.contact.phoneHref} className="font-body text-sm text-cream/75 hover:text-cream transition-colors">
                    {SITE.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Mail size={18} className="text-cream/40 shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-cream/40 mb-1">Email</p>
                  <a href={SITE.contact.emailHref} className="font-body text-sm text-cream/75 hover:text-cream transition-colors">
                    {SITE.contact.email}
                  </a>
                </div>
              </div>
            </address>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
