import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";
import { MapPin, Phone, Mail, Car, Train } from "lucide-react";

export const metadata: Metadata = {
  title: "Location & Directors",
  description:
    "Visit Artistry at One Museum Dr, Roslyn, NY 11576, inside the Nassau County Museum of Art. Directions, contact information, and leadership team.",
};

const directors = [
  {
    name: "Micheal Tardi",
    title: "Owner",
    bio: "With 30 years in the hospitality industry, Micheal founded Artistry with a singular vision: to create a venue where art and celebration are inseparable. His deep roots in Long Island's event scene have shaped Artistry into one of the region's most distinguished destinations.",
    image: "/media/images/about/location/michael.jpg",
  },
  {
    name: "Lauren Leuci",
    title: "Director of Sales",
    bio: "Over 12 years in luxury events have made Lauren the trusted first point of contact for clients planning life's most meaningful moments. Her consultative approach and deep knowledge of Artistry's capabilities ensure every inquiry becomes an extraordinary event.",
    image: "/media/images/about/location/Lauren.png",
  },
  {
    name: "Andrew Heaton",
    title: "Director of Operations",
    bio: "With 15 years orchestrating high-end events, Andrew ensures every detail runs flawlessly. His operational expertise in vendor coordination and day-of execution is the backbone of every seamless Artistry experience.",
    image: "/media/images/about/location/Andy.png",
  },
];

export default function LocationPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Find Us at the Heart of Long Island's Gold Coast"
        description="Artistry is located within the Nassau County Museum of Art in Roslyn, NY, easily accessible from New York City and throughout Long Island."
        imageSrc="/media/images/about/location/hero.jpg"
        imageAlt="Nassau County Museum of Art exterior and grounds"
      />

      <section className="bg-cream py-12 md:py-section px-6">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="w-full h-[400px] lg:h-[520px] overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Nassau+County+Museum+of+Art,+1+Museum+Dr,+Roslyn+Harbor,+NY+11576&output=embed&z=15"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Artistry at Nassau County Museum of Art"
            />
          </div>

          <div>
            <SectionHeader
              label="Contact & Location"
              title="We'd Love to Host You"
            />
            <address className="not-italic mt-8 space-y-6">
              <div className="flex gap-4">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-charcoal/40 mb-1">
                    Address
                  </p>
                  <p className="font-body text-base text-charcoal/80 leading-relaxed">
                    {SITE.address.venue}
                    <br />
                    {SITE.address.street}
                    <br />
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Phone size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-charcoal/40 mb-1">
                    Phone
                  </p>
                  <a
                    href={SITE.contact.phoneHref}
                    className="font-body text-base text-charcoal/80 hover:text-primary transition-colors"
                  >
                    {SITE.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Mail size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-charcoal/40 mb-1">
                    Email
                  </p>
                  <a
                    href={SITE.contact.emailHref}
                    className="font-body text-base text-charcoal/80 hover:text-primary transition-colors"
                  >
                    {SITE.contact.email}
                  </a>
                </div>
              </div>
            </address>

            <div className="mt-10 space-y-5">
              <h3 className="font-display text-xl text-charcoal">
                Getting Here
              </h3>
              <div className="flex gap-4">
                <Car size={18} className="text-primary shrink-0 mt-0.5" />
                <p className="font-body text-base text-charcoal/80 leading-relaxed">
                  <strong className="text-charcoal/90">By Car:</strong> Located
                  off Northern Blvd (Route 25A) in Roslyn. Ample free parking on
                  site. Approximately 30 minutes from Manhattan.
                </p>
              </div>
              <div className="flex gap-4">
                <Train size={18} className="text-primary shrink-0 mt-0.5" />
                <p className="font-body text-base text-charcoal/80 leading-relaxed">
                  <strong className="text-charcoal/90">By Train:</strong> Take
                  the LIRR Port Washington Branch to Roslyn Station. The venue
                  is a short taxi or rideshare ride from the station.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/#contact" className="btn-primary">
                Plan Your Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Our Team"
            title="The People Behind the Experience"
            description="Artistry's leadership team brings together decades of expertise in luxury hospitality, culinary arts, and event management."
            centered
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directors.map((director) => (
              <div key={director.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="section-label text-primary mb-1">
                  {director.title}
                </p>
                <h3 className="font-display text-xl text-primary-dark mb-3">
                  {director.name}
                </h3>
                <p className="font-body text-sm text-charcoal/65 leading-relaxed">
                  {director.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
