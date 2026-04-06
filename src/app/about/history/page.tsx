import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";

export const metadata: Metadata = {
  title: "History of the Property",
  description:
    "Explore the rich history of the Nassau County Museum of Art estate in Roslyn, NY — the storied grounds that form the backdrop for Artistry's world-class events.",
};

const timeline = [
  {
    period: "Late 19th Century",
    title: "The Frick Estate",
    description:
      "The property was originally developed as a country retreat by Henry Clay Frick, the prominent industrialist and art collector. The estate reflected the Gilded Age grandeur of Long Island's North Shore, a region known as the 'Gold Coast.'",
    image: "https://images.unsplash.com/photo-1580479859052-6c5e49bbce49?auto=format&fit=crop&w=600&q=80",
  },
  {
    period: "Early 20th Century",
    title: "The Clayton Era",
    description:
      "The mansion, known as 'Clayton,' became one of Long Island's most distinguished Beaux-Arts properties. Its sweeping lawns, formal gardens, and neoclassical architecture drew visitors from across society.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80",
  },
  {
    period: "Mid 20th Century",
    title: "Nassau County Acquisition",
    description:
      "Nassau County acquired the property, preserving the estate and its grounds for public cultural use. The mansion and its surrounding landscape would go on to become one of Long Island's most treasured cultural assets.",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=600&q=80",
  },
  {
    period: "1989",
    title: "Nassau County Museum of Art",
    description:
      "The Nassau County Museum of Art was formally established, transforming the estate into a world-class cultural destination. The museum's galleries, sculpture park, and grounds became celebrated for both fine art and natural beauty.",
    image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=600&q=80",
  },
  {
    period: "Present Day",
    title: "Artistry by FIDI Hospitality",
    description:
      "Today, FIDI Hospitality operates Artistry within this extraordinary setting — bringing the same reverence for beauty and excellence to every event. Artistry carries forward a century of history, offering a canvas for the celebrations of tomorrow.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80",
  },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero
        label="About"
        title="A Century of Beauty, Art & Celebration"
        description="The story of the estate that became one of Long Island's most beloved event destinations."
        imageSrc="https://images.unsplash.com/photo-1580479859052-6c5e49bbce49?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Nassau County Museum of Art estate historic exterior"
      />

      {/* Intro */}
      <section className="bg-cream py-section px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            label="History of the Property"
            title="Where Every Gathering Is Part of a Larger Story"
            description="The estate that houses Artistry carries more than a century of history — from Gilded Age grandeur to cultural landmark, from private retreat to public treasure. Today, it serves as the stage for life's most important celebrations."
            centered
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream pb-section px-6">
        <div className="max-w-8xl mx-auto space-y-20">
          {timeline.map((item, idx) => (
            <div
              key={item.period}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                idx % 2 !== 0 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                <p className="section-label mb-2">{item.period}</p>
                <h2 className="font-display text-display-md text-charcoal mb-4">{item.title}</h2>
                <p className="prose-venue">{item.description}</p>
              </div>
              <div className={`relative aspect-[3/2] overflow-hidden ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote>
            <p className="font-display text-2xl md:text-3xl text-cream leading-relaxed">
              &ldquo;This estate does not merely host events — it holds them. The history, the art, the grounds themselves become part of your story.&rdquo;
            </p>
            <footer className="mt-8 font-body text-sm tracking-widest uppercase text-cream/50">
              — The Artistry Team
            </footer>
          </blockquote>
        </div>
      </section>
    </>
  );
}
