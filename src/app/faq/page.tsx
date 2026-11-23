import type { Metadata } from "next";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { faqGroups } from "@/data/faq";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "FAQ | Artistry Event Venue at Nassau County Museum of Art",
    description:
      "Answers about Artistry in Roslyn, NY: guest capacity by space, catering by Tardi's, bar packages, pricing, tours, parking and getting here by LIRR.",
    path: "/faq",
  }),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  ),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "FAQ", path: "/faq" }])} />
      <JsonLd data={faqJsonLd} />
      <PageHero
        label="FAQ"
        title="Questions Before You Book"
        description="Straight answers about our spaces, catering, pricing and getting to Artistry at Nassau County Museum of Art."
        imageSrc="/media/images/about/over_40.jpeg"
        imageAlt="The formal gardens and estate grounds at Artistry"
      />

      <section className="bg-cream py-10 md:py-section px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="Planning an Event"
            title="Frequently Asked Questions"
            description="Artistry is an event venue inside Nassau County Museum of Art in Roslyn, NY, on Long Island's North Shore. If your question is not here, call or email the team."
            className="mb-12 md:mb-16"
          />

          <div className="space-y-14 md:space-y-20">
            {faqGroups.map((group) => (
              <div key={group.title}>
                <div className="flex items-center gap-6 mb-8">
                  <h2 className="font-display text-xl md:text-2xl text-charcoal whitespace-nowrap">
                    {group.title}
                  </h2>
                  <div className="h-px flex-1 bg-primary/15" />
                </div>
                <div className="divide-y divide-primary/10">
                  {group.items.map((item) => (
                    <div key={item.question} className="py-6 md:py-8">
                      <h3 className="font-display text-lg md:text-2xl text-primary-dark mb-3">
                        {item.question}
                      </h3>
                      <p className="font-body text-sm md:text-base leading-relaxed text-charcoal/70 max-w-3xl">
                        {item.answer}
                      </p>
                      {item.link && (
                        <Link
                          href={item.link.href}
                          className="inline-flex mt-4 font-body text-xs tracking-widest uppercase text-primary hover:text-primary-dark transition-colors"
                        >
                          {item.link.label} →
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-10 md:py-section px-6 text-center">
        <SectionHeader
          label="Still Have Questions?"
          title="Talk to Our Team"
          description={`Call ${SITE.contact.phone}, email ${SITE.contact.email} or send an inquiry to schedule a visit.`}
          centered
          light
          className="mb-8"
        />
        <Link href="/#contact" className="btn-outline">
          Plan Your Event
        </Link>
      </section>
    </>
  );
}
