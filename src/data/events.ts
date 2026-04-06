export type EventPackage = {
  name: string;
  description: string;
  includes: string[];
};

export type EventEnhancement = {
  name: string;
  description: string;
};

export type EventLocation = {
  name: string;
  description: string;
  capacity: string;
  image: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// ─── WEDDINGS ────────────────────────────────────────────────────────────────

export const weddingLocations: EventLocation[] = [
  {
    name: "The Grand Terrace",
    description:
      "An expansive outdoor terrace overlooking the manicured grounds of the Nassau County Museum of Art, perfect for al fresco ceremonies and cocktail hours.",
    capacity: "Up to 300 guests",
    image: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "The Garden Pavilion",
    description:
      "A romantic, tented pavilion set within the museum's sculpture garden, offering an enchanting blend of art and nature for intimate ceremonies.",
    capacity: "Up to 150 guests",
    image: "https://images.unsplash.com/photo-1519671282429-b8b6e7b93966?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "The Atrium",
    description:
      "A light-flooded indoor space with soaring ceilings and gallery-white walls, providing a stunning blank canvas for your dream wedding aesthetic.",
    capacity: "Up to 250 guests",
    image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "The Estate Lawn",
    description:
      "Sweeping manicured lawns framed by century-old trees and classical sculptures — a breathtaking backdrop for grand outdoor receptions.",
    capacity: "Up to 500 guests",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80",
  },
];

export const weddingPackages: EventPackage[] = [
  {
    name: "The Artistry Signature",
    description:
      "Our most complete and personalized wedding experience, crafted for couples who desire a seamless, full-service celebration.",
    includes: [
      "Exclusive venue access (up to 8 hours)",
      "Dedicated event coordinator",
      "Full Tardis Catering menu consultation",
      "Custom floral design consultation",
      "Ceremony and reception setup",
      "Bridal suite access",
      "Complimentary menu tasting for two",
    ],
  },
  {
    name: "The Garden Ceremony",
    description:
      "An intimate, elegant ceremony package set within the sculpture garden, ideal for couples seeking a refined and artistic setting.",
    includes: [
      "Garden or terrace ceremony space (up to 4 hours)",
      "Event coordinator on-site",
      "Ceremony setup and breakdown",
      "Cocktail hour space",
      "Audio equipment",
    ],
  },
  {
    name: "The Reception Collection",
    description:
      "A curated reception experience focused on extraordinary cuisine, ambiance, and service in our most stunning indoor spaces.",
    includes: [
      "Indoor reception space (up to 6 hours)",
      "Multi-course dinner by Tardis Catering",
      "Bar service",
      "Dedicated maitre d'",
      "Dance floor",
      "Custom lighting package",
    ],
  },
];

export const weddingEnhancements: EventEnhancement[] = [
  { name: "Floral Design Package", description: "Lush arrangements curated by our preferred floral partners." },
  { name: "Sunset Photography Hour", description: "A dedicated golden-hour session on the estate grounds." },
  { name: "Cocktail Hour Upgrade", description: "Expanded station menu with artisan canapés and specialty cocktails." },
  { name: "Live Musical Performance", description: "String quartet, jazz trio, or acoustic duo during cocktail hour." },
  { name: "Dessert Station", description: "Artisan pastry display, gelato bar, or custom macaron tower." },
  { name: "Photo Booth Experience", description: "Branded backdrop and instant prints for your guests." },
  { name: "Late Night Snack Station", description: "Comfort bites served during dancing — sliders, fries, and more." },
  { name: "Overnight Floral Preservation", description: "Professional preservation of your bridal bouquet as a keepsake." },
];

export const weddingGallery: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80", alt: "Outdoor wedding ceremony on estate lawn", width: 1200, height: 800 },
  { src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80", alt: "Bridal portrait in sculpture garden", width: 800, height: 1000 },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80", alt: "Elegant reception table setting", width: 1200, height: 800 },
  { src: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=800&q=80", alt: "Bride and groom first dance", width: 800, height: 800 },
  { src: "https://images.unsplash.com/photo-1519671282429-b8b6e7b93966?auto=format&fit=crop&w=1200&q=80", alt: "Garden pavilion ceremony", width: 1200, height: 800 },
  { src: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=800&q=80", alt: "Wedding cocktail hour on terrace", width: 800, height: 1000 },
];

// ─── CORPORATE ───────────────────────────────────────────────────────────────

export type CorporateEventType = {
  name: string;
  slug: string;
  description: string;
  capacity: string;
  image: string;
  highlights: string[];
};

export const corporateEventTypes: CorporateEventType[] = [
  {
    name: "Summer BBQ & Outdoor Outings",
    slug: "summer-bbq",
    description:
      "Celebrate the season with a bespoke outdoor gathering on our estate grounds. From casual BBQ spreads to elevated al fresco dining, we create the perfect team experience.",
    capacity: "50 – 500 guests",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    highlights: ["Custom BBQ stations", "Lawn games & activities", "Open bar packages", "Branded signage options"],
  },
  {
    name: "Corporate Dinners",
    slug: "dinners",
    description:
      "Host a refined client dinner or executive gathering in one of our intimate, beautifully appointed dining spaces, with menus curated by Tardis Catering.",
    capacity: "10 – 150 guests",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    highlights: ["Private dining rooms", "Custom prix-fixe menus", "Sommelier service", "A/V capabilities"],
  },
  {
    name: "Meetings & Conferences",
    slug: "meetings",
    description:
      "State-of-the-art meeting spaces within an inspiring artistic environment — the ideal setting to drive creativity and focus for your team.",
    capacity: "10 – 200 guests",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    highlights: ["A/V & presentation tech", "Breakout room options", "Catering packages", "Natural light"],
  },
  {
    name: "Cocktail Receptions",
    slug: "cocktail",
    description:
      "Sophisticated cocktail receptions among world-class art — perfect for client entertaining, product launches, and networking events.",
    capacity: "50 – 400 guests",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    highlights: ["Passed hors d'oeuvres", "Custom bar program", "Lounge furniture options", "Gallery access"],
  },
  {
    name: "Awards & Presentations",
    slug: "awards",
    description:
      "A grand, memorable stage for your company's most important moments — from award ceremonies to annual galas and product reveals.",
    capacity: "100 – 500 guests",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    highlights: ["Stage & podium setup", "Full A/V & lighting", "Dinner or reception service", "Red carpet options"],
  },
];

export const corporateGallery: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80", alt: "Corporate dinner at Artistry", width: 1200, height: 800 },
  { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80", alt: "Cocktail reception on terrace", width: 800, height: 1000 },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80", alt: "Awards ceremony night", width: 1200, height: 800 },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", alt: "Conference meeting room setup", width: 800, height: 800 },
];

// ─── SOCIAL EVENTS ───────────────────────────────────────────────────────────

export type SocialEventType = {
  name: string;
  slug: string;
  description: string;
  image: string;
  details: string;
};

export const socialEventTypes: SocialEventType[] = [
  {
    name: "Bar & Bat Mitzvahs",
    slug: "bar-bat-mitzvah",
    description:
      "Celebrate this sacred milestone in a venue that matches the grandeur of the occasion. Artistry provides the perfect backdrop for a joyful, deeply meaningful celebration.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
    details:
      "Our team works closely with families to craft a deeply personal experience — from the ceremony to the reception, with custom décor, kosher-friendly menu options, and entertainment coordination.",
  },
  {
    name: "Communions & Confirmations",
    slug: "communions",
    description:
      "Mark a child's spiritual milestone with an elegant celebration surrounded by art, nature, and exceptional hospitality.",
    image: "https://images.unsplash.com/photo-1519671282429-b8b6e7b93966?auto=format&fit=crop&w=800&q=80",
    details:
      "Intimate and refined, our communion packages include beautiful outdoor spaces, personalized menus, and dedicated event staffing.",
  },
  {
    name: "Milestone Celebrations",
    slug: "milestone",
    description:
      "Birthdays, anniversaries, retirements, and beyond — every milestone deserves a setting as extraordinary as the moment itself.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
    details:
      "From intimate gatherings to grand celebrations, Artistry offers flexible spaces and fully customizable experiences for every kind of milestone.",
  },
];

export const socialPackages: EventPackage[] = [
  {
    name: "The Celebration",
    description: "A complete package for milestone social events, covering venue, catering, and coordination.",
    includes: [
      "Venue access (up to 6 hours)",
      "Event coordinator",
      "Plated or buffet dining",
      "Bar service",
      "Custom décor consultation",
    ],
  },
  {
    name: "The Intimate Gathering",
    description: "Designed for smaller, more personal celebrations of up to 75 guests.",
    includes: [
      "Private dining space",
      "3-course dinner",
      "Bar service",
      "Dedicated server team",
    ],
  },
];

export const socialGallery: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80", alt: "Milestone celebration at Artistry", width: 1200, height: 800 },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80", alt: "Bar Mitzvah reception", width: 800, height: 1000 },
  { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80", alt: "Communion celebration", width: 1200, height: 800 },
  { src: "https://images.unsplash.com/photo-1519671282429-b8b6e7b93966?auto=format&fit=crop&w=800&q=80", alt: "Anniversary dinner", width: 800, height: 800 },
];

// ─── CELEBRATE LIFE ──────────────────────────────────────────────────────────

export const celebrateLifePackages: EventPackage[] = [
  {
    name: "The Legacy Gathering",
    description:
      "A dignified and warm gathering to honor a life lived fully, set within the serene and beautiful grounds of Artistry.",
    includes: [
      "Venue access (up to 4 hours)",
      "Reception-style service",
      "Catering by Tardis",
      "Dedicated coordinator",
      "Audio/visual support",
    ],
  },
  {
    name: "The Celebration of Life",
    description:
      "A joyful tribute — because a life fully lived deserves more than a somber farewell. We help families create a warm, memory-filled gathering.",
    includes: [
      "Indoor or outdoor space",
      "Custom menu consultation",
      "Memory display station",
      "Photo slideshow support",
      "Floral arrangements",
    ],
  },
];

export const celebrateLifeGallery: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=1200&q=80", alt: "Serene gathering space", width: 1200, height: 800 },
  { src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80", alt: "Garden reception", width: 800, height: 1000 },
  { src: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=1200&q=80", alt: "Intimate indoor gathering", width: 1200, height: 800 },
];
