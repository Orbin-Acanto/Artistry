export type EventPackage = {
  name: string;
  subtitle?: string;
  description: string;
  includes: string[];
  /** Items inherited from a previous package — shown as "Everything in X, plus:" */
  inherits?: string;
  /** New items added on top of the inherited base */
  adds?: string[];
  minGuests?: string;
  highlight?: string;
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
      "The glass-walled Pavilion presents breathtaking views of manicured lawns and striking sculptures, complemented by direct access to the Mansion’s galleries. Designed with versatility in mind, the Tented Pavilion serves as an elegant backdrop for corporate events, weddings, and milestone occasions.",
    capacity: "Up to 125 guests",
    image: "/media/images/events/wedding/15.jpeg",
  },
  {
    name: "The Formal Garden",
    description:
      "The historic Formal Gardens present an enchanting, quintessential English landscape, offering an exquisite backdrop for everything from refined cocktail receptions and fairytale wedding ceremonies to corporate retreats and captivating photoshoots.",
    capacity: "Up to 500 guests",
    image: "/media/images/events/wedding/formal.jpg",
  },
  {
    name: "Great Lawn",
    description:
      "Transform your vision into reality on the magnificent blank canvas of the Great Lawn, an expansive and versatile setting designed to reflect your unique style. Our dedicated event services team will curate the ideal tenting and flooring solutions, creating a refined and seamless foundation for your perfect event.",
    capacity: "Up to 800 guests",
    image:
      "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Formal Library",
    description:
      "Discover the exquisite Frick Estate Library, an idyllic haven for hosting intimate gatherings within the mansion. This versatile space lends itself seamlessly to various event styles, whether it be an elegant cocktail reception, a vibrant DJ and dance area, or an additional space for events in the Tented Pavilion.",
    capacity: "Up to 40 guests",
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Collection Gallery",
    description:
      "Situated on the second floor of this storied estate, The Collection Gallery provides a versatile setting that can be tailored to a range of occasions, from business meetings to wedding receptions.",
    capacity: "Up to 100 guests",
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "East Terrace",
    description:
      "Elevate your experience with open-air cocktails or an elegant dinner on the East Terrace, a captivating setting with panoramic views of the serene pond and glimpses of the remarkable sculpture collection.",
    capacity: "Up to 250 guests",
    image: "/media/images/events/wedding/EastTerrace1.jpg",
  },
  {
    name: "North Terrace",
    description:
      "Capture the essence of beauty and artistic grandeur on the North Terrace, where sweeping views reveal some of the most unique and breathtaking sculptures. This exceptional setting not only showcases remarkable works of art but also offers a one of a kind historic backdrop in the prestigious Frick Estate.",
    capacity: "Up to 250 guests",
    image: "/media/images/events/wedding/NorthTerrace1.jpg",
  },
  {
    name: "Gazebo",
    description:
      "The open-air gazebo provides a stunning setting for elegant photography, refined cocktail gatherings, or intimate al fresco dining amid picturesque surroundings.",
    capacity: "Up to 50 guests",
    image: "/media/images/events/wedding/gazebo.jpg",
  },
];

// Ceremony-only packages (no minimum guest count)
export const weddingCeremonyPackages: EventPackage[] = [
  {
    name: "When Two Hearts Come Together",
    subtitle: "Intimate Ceremony",
    description:
      "For couples planning a close gathering, this package covers everything needed to hold a beautiful ceremony on the grounds.",
    includes: [
      "50 White Folding Chairs",
      "Two-Speaker Audio Sound System",
      "One Audio Technician",
      "One Wireless Microphone with Stand",
      "Wedding Aisle Runner",
    ],
  },
  {
    name: "Everlasting Love",
    subtitle: "Grand Ceremony",
    description:
      "Designed for larger ceremonies, this package provides full seating and professional audio production for every moment of your procession.",
    includes: [
      "100 White Folding Chairs",
      "Two-Speaker Audio Sound System",
      "One Audio Technician",
      "One Wireless Microphone with Stand",
      "Wedding Aisle Runner",
    ],
  },
];

// Full reception packages (50 guest minimum)
export const weddingPackages: EventPackage[] = [
  {
    name: "The Celebration",
    subtitle: "Package One",
    description:
      "A cocktail hour followed by a full reception with beer, wine, and a buffet dinner. The foundation of a complete wedding evening at Artistry.",
    minGuests: "50 Guest Minimum",
    includes: [
      "1-Hour Cocktail Reception + 4-Hour Reception",
      "5-Hour Beer & Wine Bar",
      "Butlered Passed Hors D'Oeuvres (3 Hot & 3 Cold)",
      "One-Hour Buffet Service",
      "Dinner Buffet & Butler Service Dessert",
      "In-House China, Glassware & Flatware",
      "Tables, Chairs, Bars & Crisp House Linens",
    ],
  },
  {
    name: "The Garden Affair",
    subtitle: "Package Two",
    description:
      "All of Package One, with a full spirits bar and LED uplighting added to set the mood from cocktail hour through the last dance.",
    minGuests: "50 Guest Minimum",
    includes: [
      "1-Hour Cocktail Reception + 4-Hour Reception",
      "5-Hour Full Spirits Bar",
      "Butlered Passed Hors D'Oeuvres (3 Hot & 3 Cold)",
      "One-Hour Buffet Service",
      "Dinner Buffet & Butler Service Dessert",
      "In-House China, Glassware & Flatware",
      "Tables, Chairs, Bars & Crisp House Linens",
      "Votive Candles & LED Uplighting",
    ],
    inherits: "Package One",
    adds: [
      "5-Hour Full Spirits Bar",
      "Votive Candles & LED Uplighting",
    ],
  },
  {
    name: "The Grand Soirée",
    subtitle: "Package Three",
    description:
      "All of Package Two, with a Farmers Market Display and gold table settings added for a more dressed evening.",
    minGuests: "50 Guest Minimum",
    includes: [
      "1-Hour Cocktail Reception + 4-Hour Reception",
      "5-Hour Full Spirits Bar",
      "Butlered Passed Hors D'Oeuvres (3 Hot & 3 Cold)",
      "Farmers Market Display",
      "One-Hour Buffet Service",
      "Dinner Buffet & Butler Service Dessert",
      "Gold Chargers, Gold Silverware & Napkin Rings",
      "In-House China, Glassware & Flatware",
      "Tables, Chairs, Bars & Crisp House Linens",
      "Votive Candles & LED Uplighting",
    ],
    inherits: "Package Two",
    adds: [
      "Farmers Market Display",
      "Gold Chargers, Gold Silverware & Napkin Rings",
    ],
  },
  {
    name: "The Artistry Signature",
    subtitle: "Package Four",
    description:
      "All of Package Three, with plated service throughout: a first course, salad, choice of entrées, and dessert, plus butler-served wine at the table.",
    minGuests: "50 Guest Minimum",
    includes: [
      "1-Hour Cocktail Reception + 4-Hour Reception",
      "5-Hour Full Spirits Bar",
      "Butler-Served Wine During Dinner",
      "Butlered Passed Hors D'Oeuvres (3 Hot & 3 Cold)",
      "Farmers Market Display",
      "Four-Hour Buffet Reception",
      "Plated First Course, Salad & Choice of Entrées",
      "Plated Dessert",
      "Gold Chargers, Gold Silverware & Napkin Rings",
      "In-House China, Glassware & Flatware",
      "Tables, Chairs, Bars & Crisp House Linens",
      "Votive Candles & LED Uplighting",
    ],
    inherits: "Package Three",
    adds: [
      "Butler-Served Wine During Dinner",
      "Four-Hour Buffet Reception",
      "Plated First Course, Salad & Choice of Entrées",
      "Plated Dessert",
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
    image: "/media/images/events/Social%20Events/IMG_2316.jpg",
    details:
      "Our team works closely with families to craft a deeply personal experience — from the ceremony to the reception, with custom décor, kosher-friendly menu options, and entertainment coordination.",
  },
  {
    name: "Communions & Confirmations",
    slug: "communions",
    description:
      "Mark a child's spiritual milestone with an elegant celebration surrounded by art, nature, and exceptional hospitality.",
    image: "/media/images/events/Social%20Events/H-22.jpg",
    details:
      "Intimate and refined, our communion packages include beautiful outdoor spaces, personalized menus, and dedicated event staffing.",
  },
  {
    name: "Milestone Celebrations",
    slug: "milestone",
    description:
      "Birthdays, anniversaries, retirements, and beyond — every milestone deserves a setting as extraordinary as the moment itself.",
    image: "/media/images/events/Social%20Events/20230510_172459.jpg",
    details:
      "From intimate gatherings to grand celebrations, Artistry offers flexible spaces and fully customizable experiences for every kind of milestone.",
  },
];

export const socialPackages: EventPackage[] = [
  {
    name: "The Celebration",
    subtitle: "Package One",
    description:
      "A cocktail hour followed by a full reception with beer, wine, and a buffet dinner. A solid starting point for any social event.",
    minGuests: "50 Guest Minimum",
    includes: [
      "1-Hour Cocktail Reception + 4-Hour Reception",
      "5-Hour Beer & Wine Bar",
      "Butlered Passed Hors D'Oeuvres (3 Hot & 3 Cold)",
      "One-Hour Buffet Service",
      "Dinner Buffet & Butler Service Dessert",
      "In-House China, Glassware & Flatware",
      "Tables, Chairs, Bars & Crisp House Linens",
    ],
  },
  {
    name: "The Gathering",
    subtitle: "Package Two",
    description:
      "All of Package One, with a full spirits bar and LED uplighting added to bring the right energy to the room.",
    minGuests: "50 Guest Minimum",
    includes: [
      "1-Hour Cocktail Reception + 4-Hour Reception",
      "5-Hour Full Spirits Bar",
      "Butlered Passed Hors D'Oeuvres (3 Hot & 3 Cold)",
      "One-Hour Buffet Service",
      "Dinner Buffet & Butler Service Dessert",
      "In-House China, Glassware & Flatware",
      "Tables, Chairs, Bars & Crisp House Linens",
      "Votive Candles & LED Uplighting",
    ],
    inherits: "Package One",
    adds: [
      "5-Hour Full Spirits Bar",
      "Votive Candles & LED Uplighting",
    ],
  },
  {
    name: "The Grand Occasion",
    subtitle: "Package Three",
    description:
      "All of Package Two, with a Farmers Market Display and gold table settings for a more polished evening.",
    minGuests: "50 Guest Minimum",
    includes: [
      "1-Hour Cocktail Reception + 4-Hour Reception",
      "5-Hour Full Spirits Bar",
      "Butlered Passed Hors D'Oeuvres (3 Hot & 3 Cold)",
      "Farmers Market Display",
      "One-Hour Buffet Service",
      "Dinner Buffet & Butler Service Dessert",
      "Gold Chargers, Gold Silverware & Napkin Rings",
      "In-House China, Glassware & Flatware",
      "Tables, Chairs, Bars & Crisp House Linens",
      "Votive Candles & LED Uplighting",
    ],
    inherits: "Package Two",
    adds: [
      "Farmers Market Display",
      "Gold Chargers, Gold Silverware & Napkin Rings",
    ],
  },
  {
    name: "The Artistry Experience",
    subtitle: "Package Four",
    description:
      "All of Package Three, with plated service throughout: first course, salad, choice of entrées, dessert, and butler-served wine at the table.",
    minGuests: "50 Guest Minimum",
    includes: [
      "1-Hour Cocktail Reception + 4-Hour Reception",
      "5-Hour Full Spirits Bar",
      "Butler-Served Wine During Dinner",
      "Butlered Passed Hors D'Oeuvres (3 Hot & 3 Cold)",
      "Farmers Market Display",
      "Four-Hour Buffet Reception",
      "Plated First Course, Salad & Choice of Entrées",
      "Plated Dessert",
      "Gold Chargers, Gold Silverware & Napkin Rings",
      "In-House China, Glassware & Flatware",
      "Tables, Chairs, Bars & Crisp House Linens",
      "Votive Candles & LED Uplighting",
    ],
    inherits: "Package Three",
    adds: [
      "Butler-Served Wine During Dinner",
      "Four-Hour Buffet Reception",
      "Plated First Course, Salad & Choice of Entrées",
      "Plated Dessert",
    ],
  },
];

export const socialGallery: GalleryImage[] = [
  {
    src: "/media/images/events/Social%20Events/H-23.jpg",
    alt: "Elegant reception setup at Artistry",
    width: 5472,
    height: 3648,
  },
  {
    src: "/media/images/events/Social%20Events/H-25.jpg",
    alt: "Floral tablescape with gold chargers",
    width: 3865,
    height: 5797,
  },
  {
    src: "/media/images/events/Social%20Events/20230908_152912-edit.jpg",
    alt: "Tented celebration with floral centerpieces at Artistry",
    width: 4000,
    height: 3000,
  },
  {
    src: "/media/images/events/Social%20Events/IMG_7501.jpg",
    alt: "Blue and white reception table setting",
    width: 3024,
    height: 4032,
  },
  {
    src: "/media/images/events/Social%20Events/H-24.jpg",
    alt: "Suspended floral chandelier over fountain at Artistry",
    width: 3478,
    height: 5217,
  },
  {
    src: "/media/images/events/Social%20Events/IMG_6127.jpg",
    alt: "White and gold banquet hall setup at Artistry",
    width: 4032,
    height: 3024,
  },
];

// ─── CELEBRATE LIFE ──────────────────────────────────────────────────────────

export const celebrateLifePackages: EventPackage[] = [
  {
    name: "The Gathering",
    subtitle: "Package One",
    description:
      "A cocktail hour followed by a full reception with beer, wine, and a buffet dinner. Room for family and friends to gather, share a meal, and take their time.",
    minGuests: "50 Guest Minimum",
    includes: [
      "1-Hour Cocktail Reception + 4-Hour Reception",
      "5-Hour Beer & Wine Bar",
      "Butlered Passed Hors D'Oeuvres (3 Hot & 3 Cold)",
      "One-Hour Buffet Service",
      "Dinner Buffet & Butler Service Dessert",
      "In-House China, Glassware & Flatware",
      "Tables, Chairs, Bars & Crisp House Linens",
    ],
  },
  {
    name: "The Remembrance",
    subtitle: "Package Two",
    description:
      "All of Package One, with a full spirits bar and candlelit LED uplighting to create a warm, settled atmosphere throughout the evening.",
    minGuests: "50 Guest Minimum",
    includes: [
      "1-Hour Cocktail Reception + 4-Hour Reception",
      "5-Hour Full Spirits Bar",
      "Butlered Passed Hors D'Oeuvres (3 Hot & 3 Cold)",
      "One-Hour Buffet Service",
      "Dinner Buffet & Butler Service Dessert",
      "In-House China, Glassware & Flatware",
      "Tables, Chairs, Bars & Crisp House Linens",
      "Votive Candles & LED Uplighting",
    ],
    inherits: "Package One",
    adds: [
      "5-Hour Full Spirits Bar",
      "Votive Candles & LED Uplighting",
    ],
  },
  {
    name: "The Legacy",
    subtitle: "Package Three",
    description:
      "All of Package Two, with a Farmers Market Display and gold table settings for a more considered, memorable table.",
    minGuests: "50 Guest Minimum",
    includes: [
      "1-Hour Cocktail Reception + 4-Hour Reception",
      "5-Hour Full Spirits Bar",
      "Butlered Passed Hors D'Oeuvres (3 Hot & 3 Cold)",
      "Farmers Market Display",
      "One-Hour Buffet Service",
      "Dinner Buffet & Butler Service Dessert",
      "Gold Chargers, Gold Silverware & Napkin Rings",
      "In-House China, Glassware & Flatware",
      "Tables, Chairs, Bars & Crisp House Linens",
      "Votive Candles & LED Uplighting",
    ],
    inherits: "Package Two",
    adds: [
      "Farmers Market Display",
      "Gold Chargers, Gold Silverware & Napkin Rings",
    ],
  },
  {
    name: "The Artistry Tribute",
    subtitle: "Package Four",
    description:
      "All of Package Three, with full plated service: first course, salad, entrée, and dessert served at the table, with wine poured throughout dinner.",
    minGuests: "50 Guest Minimum",
    includes: [
      "1-Hour Cocktail Reception + 4-Hour Reception",
      "5-Hour Full Spirits Bar",
      "Butler-Served Wine During Dinner",
      "Butlered Passed Hors D'Oeuvres (3 Hot & 3 Cold)",
      "Farmers Market Display",
      "Four-Hour Buffet Reception",
      "Plated First Course, Salad & Choice of Entrées",
      "Plated Dessert",
      "Gold Chargers, Gold Silverware & Napkin Rings",
      "In-House China, Glassware & Flatware",
      "Tables, Chairs, Bars & Crisp House Linens",
      "Votive Candles & LED Uplighting",
    ],
    inherits: "Package Three",
    adds: [
      "Butler-Served Wine During Dinner",
      "Four-Hour Buffet Reception",
      "Plated First Course, Salad & Choice of Entrées",
      "Plated Dessert",
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
