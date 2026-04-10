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
    name: "The Tented Pavilion",
    description:
      "The glass-walled Pavilion offers panoramic views of the surrounding lawns and sculptures and direct access to the Mansion's galleries. Versatility reigns supreme in the Tented Pavilion, making it the ideal venue for a myriad of events, from corporate gatherings to weddings and milestone celebrations.",
    capacity: "Up to 300 guests",
    image: "/media/images/events/wedding/15.jpeg",
  },
  {
    name: "The Formal Garden",
    description:
      "The historical and enchanting Formal Gardens offer a quintessential English garden setting that serves as the perfect picturesque backdrop for a myriad of events. From sophisticated cocktail receptions and fairy-tale wedding ceremonies to corporate retreats and captivating photoshoots.",
    capacity: "Up to 150 guests",
    image: "/media/images/events/wedding/formal.jpg",
  },
  {
    name: "Great Lawn",
    description:
      "Transform your visions into reality on the magnificent blank canvas of the Great Lawn, a versatile and expansive space awaiting your unique touch. Our dedicated event services team stands ready to provide the ideal tent size and flooring options to set the perfect stage.",
    capacity: "Up to 250 guests",
    image:
      "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Formal Library",
    description:
      "Discover the exquisite Frick Estate Library, an idyllic haven for hosting intimate gatherings within the mansion. This versatile space lends itself seamlessly to various event styles, whether it be an elegant cocktail reception, a vibrant DJ and dance area, or an additional space for events in the Tented Pavilion.",
    capacity: "Up to 500 guests",
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Collection Gallery",
    description:
      "Situated on the second floor of this storied estate, The Collection Gallery provides a versatile setting that can be tailored to a range of occasions, from business meetings to wedding receptions.",
    capacity: "Up to 500 guests",
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "East Terrace",
    description:
      "Experience open-air cocktails or a delightful dinner on the East Terrace, a truly captivating space that offers panoramic views of the serene pond and glimpses of the stunning sculpture collection.",
    capacity: "Up to 500 guests",
    image: "/media/images/events/wedding/EastTerrace1.jpg",
  },
  {
    name: "North Terrace",
    description:
      "Capture the essence of beauty and artistic grandeur on the North Terrace, where you'll be treated to a spectacular view of some of the most unique and breathtaking art sculptures. This exceptional vantage point not only showcases wonderful artwork but also provides a one-of-a-kind historical backdrop - the prestigious Frick Estate.",
    capacity: "Up to 500 guests",
    image: "/media/images/events/wedding/NorthTerrace1.jpg",
  },
  {
    name: "Gazebo",
    description:
      "The open air Gazebo stands as the perfect location for photographs, a sophisticated cocktail party or an intimate sit-down dinner while guests enjoy the fresh air and beautiful scenery.",
    capacity: "Up to 500 guests",
    image: "/media/images/events/wedding/gazebo.jpg",
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
      "Floral design consultation",
      "Ceremony setup and breakdown",
      "Bar service",
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
      "Ceremony setup and breakdown",
      "Dedicated maitre d'",
      "Dance floor",
      "Custom lighting package",
    ],
  },
];

export const weddingEnhancements: EventEnhancement[] = [
  {
    name: "Floral Design Package",
    description: "Lush arrangements curated by our preferred floral partners.",
  },
  {
    name: "Sunset Photography Hour",
    description: "A dedicated golden-hour session on the estate grounds.",
  },
  {
    name: "Cocktail Hour Upgrade",
    description:
      "Expanded station menu with artisan canapés and specialty cocktails.",
  },
  {
    name: "Live Musical Performance",
    description:
      "String quartet, jazz trio, or acoustic duo during cocktail hour.",
  },
  {
    name: "Dessert Station",
    description: "Artisan pastry display, gelato bar, or custom macaron tower.",
  },
  {
    name: "Photo Booth Experience",
    description: "Branded backdrop and instant prints for your guests.",
  },
  {
    name: "Late Night Snack Station",
    description:
      "Comfort bites served during dancing — sliders, fries, and more.",
  },
  {
    name: "Overnight Floral Preservation",
    description:
      "Professional preservation of your bridal bouquet as a keepsake.",
  },
];

export const weddingGallery: GalleryImage[] = [
  {
    src: "/media/images/events/wedding/1.jpeg",
    alt: "Artistry wedding celebration",
    width: 1200,
    height: 800,
  },
  {
    src: "/media/images/events/wedding/2.jpeg",
    alt: "Artistry wedding celebration",
    width: 1200,
    height: 800,
  },
  {
    src: "/media/images/events/wedding/3.jpeg",
    alt: "Artistry wedding celebration",
    width: 1200,
    height: 800,
  },
  {
    src: "/media/images/events/wedding/4.jpeg",
    alt: "Artistry wedding celebration",
    width: 1200,
    height: 800,
  },
  {
    src: "/media/images/events/wedding/5.jpeg",
    alt: "Artistry wedding celebration",
    width: 1200,
    height: 800,
  },
  {
    src: "/media/images/events/wedding/6.jpeg",
    alt: "Artistry wedding celebration",
    width: 1200,
    height: 800,
  },
  {
    src: "/media/images/events/wedding/7.jpeg",
    alt: "Artistry wedding celebration",
    width: 1200,
    height: 800,
  },
  {
    src: "/media/images/events/wedding/8.jpeg",
    alt: "Artistry wedding celebration",
    width: 1200,
    height: 800,
  },
  {
    src: "/media/images/events/wedding/9.jpeg",
    alt: "Artistry wedding celebration",
    width: 1200,
    height: 800,
  },
  {
    src: "/media/images/events/wedding/10.jpeg",
    alt: "Artistry wedding celebration",
    width: 1200,
    height: 800,
  },
  {
    src: "/media/images/events/wedding/11.jpeg",
    alt: "Artistry wedding celebration",
    width: 1200,
    height: 800,
  },
  {
    src: "/media/images/events/wedding/12.jpeg",
    alt: "Artistry wedding celebration",
    width: 1200,
    height: 800,
  },
  {
    src: "/media/images/events/wedding/13.jpeg",
    alt: "Artistry wedding celebration",
    width: 1200,
    height: 800,
  },
  {
    src: "/media/images/events/wedding/14.jpeg",
    alt: "Artistry wedding celebration",
    width: 1200,
    height: 800,
  },
  {
    src: "/media/images/events/wedding/15.jpeg",
    alt: "Artistry wedding celebration",
    width: 1200,
    height: 800,
  },
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
    capacity: "50 – 300 guests",
    image: "/media/images/events/corporate/bbq.png",
    highlights: [
      "Custom BBQ stations",
      "Lawn games & activities",
      "Open bar packages",
      "Branded signage options",
    ],
  },
  {
    name: "Corporate Dinners",
    slug: "dinners",
    description:
      "Host a refined client dinner or executive gathering in one of our intimate, beautifully appointed dining spaces, with menus curated by Tardis Catering.",
    capacity: "10 – 150 guests",
    image: "/media/images/events/corporate/dinner.jpg",
    highlights: [
      "Private dining rooms",
      "Custom prix-fixe menus",
      "Sommelier service",
      "A/V capabilities",
    ],
  },
  {
    name: "Meetings & Conferences",
    slug: "meetings",
    description:
      "State-of-the-art meeting spaces within an inspiring artistic environment — the ideal setting to drive creativity and focus for your team.",
    capacity: "10 – 200 guests",
    image: "/media/images/events/corporate/meeting.jpg",
    highlights: [
      "A/V & presentation tech",
      "Breakout room options",
      "Catering packages",
      "Natural light",
    ],
  },
  {
    name: "Cocktail Receptions",
    slug: "cocktail",
    description:
      "Sophisticated cocktail receptions among world-class art — perfect for client entertaining, product launches, and networking events.",
    capacity: "50 – 400 guests",
    image: "/media/images/events/corporate/cocktail.jpg",
    highlights: [
      "Passed hors d'oeuvres",
      "Custom bar program",
      "Lounge furniture options",
      "Gallery access",
    ],
  },
  {
    name: "Awards & Presentations",
    slug: "awards",
    description:
      "A grand, memorable stage for your company's most important moments — from award ceremonies to annual galas and product reveals.",
    capacity: "100 – 500 guests",
    image: "/media/images/events/corporate/awards.jpg",
    highlights: [
      "Stage & podium setup",
      "Full A/V & lighting",
      "Dinner or reception service",
      "Red carpet options",
    ],
  },
];

export const corporateGallery: GalleryImage[] = [
  {
    src: "/media/images/events/corporate/1.jpg",
    alt: "Cocktail reception on terrace",
    width: 800,
    height: 1000,
  },
  {
    src: "/media/images/events/corporate/2.jpg",
    alt: "Corporate dinner at Artistry",
    width: 1200,
    height: 800,
  },
  {
    src: "/media/images/events/corporate/3.jpg",
    alt: "Awards ceremony night",
    width: 1200,
    height: 800,
  },
  {
    src: "/media/images/events/corporate/4.jpg",
    alt: "Conference meeting room setup",
    width: 800,
    height: 800,
  },
  {
    src: "/media/images/events/corporate/5.jpg",
    alt: "Conference meeting room setup",
    width: 800,
    height: 800,
  },
  {
    src: "/media/images/events/corporate/6.jpg",
    alt: "Conference meeting room setup",
    width: 800,
    height: 800,
  },
  {
    src: "/media/images/events/corporate/7.jpg",
    alt: "Conference meeting room setup",
    width: 800,
    height: 800,
  },
  {
    src: "/media/images/events/corporate/8.jpg",
    alt: "Conference meeting room setup",
    width: 800,
    height: 800,
  },
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
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
    details:
      "Our team works closely with families to craft a deeply personal experience — from the ceremony to the reception, with custom décor, kosher-friendly menu options, and entertainment coordination.",
  },
  {
    name: "Communions & Confirmations",
    slug: "communions",
    description:
      "Mark a child's spiritual milestone with an elegant celebration surrounded by art, nature, and exceptional hospitality.",
    image:
      "https://images.unsplash.com/photo-1519671282429-b8b6e7b93966?auto=format&fit=crop&w=800&q=80",
    details:
      "Intimate and refined, our communion packages include beautiful outdoor spaces, personalized menus, and dedicated event staffing.",
  },
  {
    name: "Milestone Celebrations",
    slug: "milestone",
    description:
      "Birthdays, anniversaries, retirements, and beyond — every milestone deserves a setting as extraordinary as the moment itself.",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
    details:
      "From intimate gatherings to grand celebrations, Artistry offers flexible spaces and fully customizable experiences for every kind of milestone.",
  },
];

export const socialPackages: EventPackage[] = [
  {
    name: "The Celebration",
    description:
      "A complete package for milestone social events, covering venue, catering, and coordination.",
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
    description:
      "Designed for smaller, more personal celebrations of up to 75 guests.",
    includes: [
      "Private dining space",
      "3-course dinner",
      "Bar service",
      "Dedicated server team",
    ],
  },
];

export const socialGallery: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
    alt: "Milestone celebration at Artistry",
    width: 1200,
    height: 800,
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
    alt: "Bar Mitzvah reception",
    width: 800,
    height: 1000,
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    alt: "Communion celebration",
    width: 1200,
    height: 800,
  },
  {
    src: "https://images.unsplash.com/photo-1519671282429-b8b6e7b93966?auto=format&fit=crop&w=800&q=80",
    alt: "Anniversary dinner",
    width: 800,
    height: 800,
  },
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
  {
    src: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=1200&q=80",
    alt: "Serene gathering space",
    width: 1200,
    height: 800,
  },
  {
    src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80",
    alt: "Garden reception",
    width: 800,
    height: 1000,
  },
  {
    src: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=1200&q=80",
    alt: "Intimate indoor gathering",
    width: 1200,
    height: 800,
  },
];
