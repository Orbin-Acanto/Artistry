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
    "Visit Artistry at One Museum Dr, Roslyn, NY 11576 — inside the Nassau County Museum of Art. Directions, contact information, and leadership team.",
};

const directors = [
  {
    name: "Alexandra Monroe",
    title: "Director of Events",
    bio: "With over 15 years of experience in luxury hospitality and event management, Alexandra leads the Artistry events team with a dedication to precision, creativity, and unmatched guest experience.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Marco DiSilva",
    title: "Executive Chef, Tardis Catering",
    bio: "Trained in both New York and Europe, Chef Marco brings a philosophy of seasonal, artisan cuisine to every Artistry event — crafting menus that are as memorable as the setting itself.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sophia Huang",
    title: "Senior Event Coordinator",
    bio: "Sophia specializes in weddings and large-scale social events. Her meticulous attention to detail and warm client relationships have made her one of the most sought-after coordinators on Long Island.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
];

export default function LocationPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Find Us at the Heart of Long Island's Gold Coast"
        description="Artistry is located within the Nassau County Museum of Art in Roslyn, NY — easily accessible from New York City and throughout Long Island."
        imageSrc="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Nassau County Museum of Art exterior and grounds"
      />

      {/* Map + Contact */}
      <section className="bg-cream py-section px-6">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Map placeholder */}
          <div className="relative aspect-[4/3] bg-primary/10 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80"
              alt="Map of Artistry location at Nassau County Museum of Art"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4">
              <a
                href="https://maps.google.com/?q=One+Museum+Dr,+Roslyn,+NY+11576"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Contact details */}
          <div>
            <SectionHeader
              label="Contact & Location"
              title="We&apos;d Love to Host You"
            />
            <address className="not-italic mt-8 space-y-6">
              <div className="flex gap-4">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-charcoal/40 mb-1">Address</p>
                  <p className="font-body text-base text-charcoal/80 leading-relaxed">
                    {SITE.address.venue}<br />
                    {SITE.address.street}<br />
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Phone size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-charcoal/40 mb-1">Phone</p>
                  <a href={SITE.contact.phoneHref} className="font-body text-base text-charcoal/80 hover:text-primary transition-colors">
                    {SITE.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Mail size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-charcoal/40 mb-1">Email</p>
                  <a href={SITE.contact.emailHref} className="font-body text-base text-charcoal/80 hover:text-primary transition-colors">
                    {SITE.contact.email}
                  </a>
                </div>
              </div>
            </address>

            {/* Directions */}
            <div className="mt-10 space-y-5">
              <h3 className="font-display text-xl text-charcoal">Getting Here</h3>
              <div className="flex gap-4">
                <Car size={18} className="text-primary shrink-0 mt-0.5" />
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                  <strong className="text-charcoal/90">By Car:</strong> Located off Northern Blvd (Route 25A) in Roslyn. Ample free parking on site. Approximately 30 minutes from Manhattan.
                </p>
              </div>
              <div className="flex gap-4">
                <Train size={18} className="text-primary shrink-0 mt-0.5" />
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                  <strong className="text-charcoal/90">By Train:</strong> Take the LIRR Port Washington Branch to Roslyn Station. The venue is a short taxi or rideshare ride from the station.
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

      {/* Directors */}
      <section className="bg-primary-dark py-section px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            label="Our Team"
            title="The People Behind the Experience"
            description="Artistry's leadership team brings together decades of expertise in luxury hospitality, culinary arts, and event management."
            centered
            light
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
                <p className="section-label text-cream/50 mb-1">{director.title}</p>
                <h3 className="font-display text-xl text-cream mb-3">{director.name}</h3>
                <p className="font-body text-sm text-cream/60 leading-relaxed">{director.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
