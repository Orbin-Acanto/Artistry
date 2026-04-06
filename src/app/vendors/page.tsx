import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { vendors, vendorCategories } from "@/data/vendors";

export const metadata: Metadata = {
  title: "Preferred Vendors | Artistry at Nassau County Museum of Art",
  description:
    "Explore Artistry's curated list of preferred vendors — florists, photographers, videographers, entertainment, and more — for weddings and events in Roslyn, NY.",
};

export default function VendorsPage() {
  return (
    <>
      <PageHero
        label="Vendors"
        title="Our Trusted Partners in Excellence"
        description="Every vendor we recommend has been carefully selected for their commitment to quality, creativity, and seamless collaboration with our team."
        imageSrc="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Artistry preferred vendors"
      />

      {/* Intro */}
      <section className="bg-cream py-section px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            label="Preferred Vendors"
            title="Exceptional Partners for Every Detail"
            description="From florals to photography, entertainment to transportation — our preferred vendor network ensures every element of your event reflects the Artistry standard of excellence. Clients are welcome to work with our preferred vendors or bring their own approved professionals."
            centered
          />
        </div>
      </section>

      {/* Vendor categories */}
      <section className="bg-cream pb-section px-6">
        <div className="max-w-8xl mx-auto">
          {vendorCategories.map((category) => {
            const categoryVendors = vendors.filter((v) => v.category === category);
            if (categoryVendors.length === 0) return null;
            return (
              <div key={category} className="mb-14">
                <div className="flex items-center gap-6 mb-8">
                  <h2 className="font-display text-2xl text-charcoal whitespace-nowrap">{category}</h2>
                  <div className="h-px flex-1 bg-primary/15" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryVendors.map((vendor) => (
                    <div
                      key={vendor.name}
                      className="border border-primary/15 p-6 hover:border-primary/40 transition-colors"
                    >
                      <h3 className="font-display text-xl text-charcoal mb-2">{vendor.name}</h3>
                      <p className="font-body text-sm text-charcoal/65 leading-relaxed">{vendor.description}</p>
                      {vendor.website && (
                        <a
                          href={vendor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 font-body text-xs tracking-widest uppercase text-primary hover:text-primary-dark transition-colors"
                        >
                          Visit Website →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Become a vendor CTA */}
      <section className="bg-primary-dark py-20 px-6 text-center">
        <SectionHeader
          label="Vendor Inquiries"
          title="Interested in Joining Our Network?"
          description="If you are a vendor interested in becoming a preferred partner at Artistry, we would love to hear from you. Please reach out with your portfolio and a brief introduction."
          centered
          light
          className="mb-8"
        />
        <Link href="/#contact" className="btn-outline">
          Get in Touch
        </Link>
      </section>
    </>
  );
}
