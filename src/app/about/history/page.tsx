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
    image: "/media/images/about/Frick-1.jpg",
  },
  {
    period: "Early 20th Century",
    title: "The Clayton Era",
    description:
      "The mansion, known as 'Clayton,' became one of Long Island's most distinguished Beaux-Arts properties. Its sweeping lawns, formal gardens, and neoclassical architecture drew visitors from across society.",
    image: "/media/images/about/Entrance-portico-of-Clayton.jpg",
  },
  {
    period: "Mid 20th Century",
    title: "Nassau County Acquisition",
    description:
      "Nassau County acquired the property, preserving the estate and its grounds for public cultural use. The mansion and its surrounding landscape would go on to become one of Long Island's most treasured cultural assets.",
    image: "/media/images/about/Modiliani Open TabHauserPhoto (2).jpg",
  },
  {
    period: "1989",
    title: "Nassau County Museum of Art",
    description:
      "The Nassau County Museum of Art was formally established, transforming the estate into a world-class cultural destination. The museum's galleries, sculpture park, and grounds became celebrated for both fine art and natural beauty.",
    image: "/media/images/about/20221106_111631.jpg",
  },
  {
    period: "Present Day",
    title: "Artistry by FIDI Hospitality",
    description:
      "Today, FIDI Hospitality operates Artistry within this extraordinary setting — bringing the same reverence for beauty and excellence to every event. Artistry carries forward a century of history, offering a canvas for the celebrations of tomorrow.",
    image: "/media/images/about/IMG_9958.jpg",
  },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero
        label="About"
        title="A Century of Art & Celebration"
        description="The story of the estate that became one of Long Island's most beloved event destinations."
        imageSrc="/media/images/about/hero.jpg"
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

      <section>
        {timeline.map((item, idx) => (
          <div
            key={item.period}
            className={`px-6 lg:py-0 py-6 ${idx % 2 === 0 ? "bg-white" : "bg-cream"} ${idx === 0 ? "lg:pt-0" : ""} ${idx === timeline.length - 1 ? "lg:pb-0" : ""}`}
          >
            <div
              className={`max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center ${idx % 2 !== 0 ? "lg:direction-rtl" : ""}`}
            >
              <article
                className={` lg:px-10 lg:py-0 py-6 ${idx % 2 !== 0 ? "lg:order-2" : ""}`}
              >
                <time className="section-label mb-3 text-[11px] tracking-[0.22em] sm:text-xs sm:tracking-[0.3em] text-primary block">
                  {item.period}
                </time>
                <h3 className="font-display text-[clamp(1.75rem,6vw,3.5rem)] leading-tight text-balance uppercase text-primary-dark mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed sm:text-base text-charcoal/65">
                  {item.description}
                </p>
              </article>
              <div
                className={`relative aspect-[3/2] overflow-hidden ${idx % 2 !== 0 ? "lg:order-1" : ""}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-primary py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote>
            <p className="font-display text-2xl md:text-3xl text-cream leading-relaxed">
              &ldquo;This estate does not merely host events, it holds them. The
              history, the art, the grounds themselves become part of your
              story.&rdquo;
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
