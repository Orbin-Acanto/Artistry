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
  gallery: { src: string; alt: string }[];
};

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// ─── WEDDINGS LOCATION ───────────────────────────────────────────────────────────────
export const weddingPageLocations: EventLocation[] = [
  {
    name: "The Tented Pavilion",
    description:
      "Say your vows beneath the soaring glass-walled Pavilion, where manicured lawns and striking sculptures frame every moment. The Tented Pavilion seamlessly transitions from an intimate ceremony setting to a grand reception hall, with direct access to the Mansion's galleries adding an unmatched layer of elegance.",
    capacity: "Up to 125 guests",
    image: "/media/images/events/wedding/location/Tented Pavilion/1.jpeg",
    gallery: [
      {
        src: "/media/images/events/wedding/location/Tented Pavilion/1.jpeg",
        alt: "The Tented Pavilion wedding ceremony",
      },
      {
        src: "/media/images/events/wedding/location/Tented Pavilion/2.jpeg",
        alt: "The Tented Pavilion wedding ceremony",
      },
      {
        src: "/media/images/events/wedding/location/Tented Pavilion/3.jpeg",
        alt: "The Tented Pavilion wedding ceremony",
      },
      {
        src: "/media/images/events/wedding/location/Tented Pavilion/4.png",
        alt: "The Tented Pavilion wedding ceremony",
      },
    ],
  },
  {
    name: "The Formal Garden",
    description:
      "Exchange vows in the heart of a quintessential English landscape, where sculpted hedgerows and formal pathways create a naturally breathtaking aisle. The Formal Gardens have set the stage for countless fairytale ceremonies, offering an outdoor setting that feels both timeless and deeply personal.",
    capacity: "Up to 500 guests",
    image: "/media/images/events/wedding/location/Formal Gardens/1.jpeg",
    gallery: [
      {
        src: "/media/images/events/wedding/location/Formal Gardens/1.jpeg",
        alt: "The Formal Garden wedding ceremony",
      },
      {
        src: "/media/images/events/wedding/location/Formal Gardens/2.jpeg",
        alt: "The Formal Garden wedding ceremony",
      },
      {
        src: "/media/images/events/wedding/location/Formal Gardens/3.jpeg",
        alt: "The Formal Garden wedding ceremony",
      },
      {
        src: "/media/images/events/wedding/location/Formal Gardens/4.jpg",
        alt: "The Formal Garden wedding ceremony",
      },
    ],
  },
  {
    name: "Great Lawn",
    description:
      "The Great Lawn is a magnificent blank canvas — expansive enough to host your entire celebration under a custom tent, with sweeping views of the estate that make every photograph extraordinary. Our team will curate tenting, flooring, and lighting to bring your exact vision to life.",
    capacity: "Up to 800 guests",
    image: "/media/images/events/wedding/location/Great Lawn/1.jpeg",
    gallery: [
      {
        src: "/media/images/events/wedding/location/Great Lawn/1.jpeg",
        alt: "Great Lawn wedding reception",
      },
      {
        src: "/media/images/events/wedding/location/Great Lawn/2.jpeg",
        alt: "Great Lawn wedding reception",
      },
      {
        src: "/media/images/events/wedding/location/Great Lawn/3.jpeg",
        alt: "Great Lawn wedding reception",
      },
      {
        src: "/media/images/events/wedding/location/Great Lawn/4.jpeg",
        alt: "Great Lawn wedding reception",
      },
    ],
  },
  {
    name: "Formal Library",
    description:
      "The historic Frick Estate Library offers an intimate, warmly appointed setting for cocktail hours, quiet toasts, or a sophisticated lounge for your guests. Its rich character and storied atmosphere make it a distinctive complement to any ceremony held on the grounds.",
    capacity: "Up to 40 guests",
    image: "/media/images/events/wedding/location/Formal Library/1.jpeg",
    gallery: [
      {
        src: "/media/images/events/wedding/location/Formal Library/1.jpeg",
        alt: "Formal Library wedding gathering",
      },
      {
        src: "/media/images/events/wedding/location/Formal Library/2.jpeg",
        alt: "Formal Library wedding gathering",
      },
      {
        src: "/media/images/events/wedding/location/Formal Library/3.jpeg",
        alt: "Formal Library wedding gathering",
      },
      {
        src: "/media/images/events/wedding/location/Formal Library/4.jpeg",
        alt: "Formal Library wedding gathering",
      },
    ],
  },
  {
    name: "Collection Gallery",
    description:
      "Host your reception amid world-class art on the second floor of the Frick Estate. The Collection Gallery lends a cultured, one-of-a-kind backdrop to wedding dinners and cocktail hours, where fine art and fine dining share the same room.",
    capacity: "Up to 100 guests",
    image: "/media/images/events/wedding/location/Collection Gallery/1.jpeg",
    gallery: [
      {
        src: "/media/images/events/wedding/location/Collection Gallery/1.jpeg",
        alt: "Collection Gallery wedding reception",
      },
      {
        src: "/media/images/events/wedding/location/Collection Gallery/2.jpeg",
        alt: "Collection Gallery wedding reception",
      },
      {
        src: "/media/images/events/wedding/location/Collection Gallery/3.jpeg",
        alt: "Collection Gallery wedding reception",
      },
      {
        src: "/media/images/events/wedding/location/Collection Gallery/4.png",
        alt: "Collection Gallery wedding reception",
      },
    ],
  },
  {
    name: "East Terrace",
    description:
      "Celebrate with open sky above and serene pond views below on the East Terrace. Whether it is a golden-hour cocktail hour or an al fresco dinner as the sun sets over the sculpture garden, this terrace turns every moment into a memory worth keeping.",
    capacity: "Up to 250 guests",
    image: "/media/images/events/wedding/location/East Terrace/1.jpeg",
    gallery: [
      {
        src: "/media/images/events/wedding/location/East Terrace/1.jpeg",
        alt: "East Terrace wedding celebration",
      },
      {
        src: "/media/images/events/wedding/location/East Terrace/2.jpeg",
        alt: "East Terrace wedding celebration",
      },
      {
        src: "/media/images/events/wedding/location/East Terrace/3.jpg",
        alt: "East Terrace wedding celebration",
      },
      {
        src: "/media/images/events/wedding/location/East Terrace/4.jpeg",
        alt: "East Terrace wedding celebration",
      },
    ],
  },
  {
    name: "North Terrace",
    description:
      "The North Terrace places your celebration within a living sculpture garden, offering sweeping views of the estate's most remarkable works of art. With the grandeur of the Frick Estate as your backdrop, this space delivers a ceremony or reception setting unlike anything else on Long Island.",
    capacity: "Up to 250 guests",
    image: "/media/images/events/wedding/location/North Terrace/1.jpeg",
    gallery: [
      {
        src: "/media/images/events/wedding/location/North Terrace/1.jpeg",
        alt: "North Terrace wedding celebration",
      },
      {
        src: "/media/images/events/wedding/location/North Terrace/2.jpeg",
        alt: "North Terrace wedding celebration",
      },
      {
        src: "/media/images/events/wedding/location/North Terrace/3.jpeg",
        alt: "North Terrace wedding celebration",
      },
      {
        src: "/media/images/events/wedding/location/North Terrace/4.jpeg",
        alt: "North Terrace wedding celebration",
      },
    ],
  },
  {
    name: "Gazebo",
    description:
      "The open-air Gazebo is where intimate ceremonies, portrait sessions, and champagne toasts find their most romantic setting. Nestled within the estate grounds, it offers a picturesque, garden-framed moment that photographs beautifully and feels entirely your own.",
    capacity: "Up to 50 guests",
    image: "/media/images/events/wedding/location/Gazebo/1.jpeg",
    gallery: [
      {
        src: "/media/images/events/wedding/location/Gazebo/1.jpeg",
        alt: "Gazebo wedding ceremony",
      },
      {
        src: "/media/images/events/wedding/location/Gazebo/2.jpeg",
        alt: "Gazebo wedding ceremony",
      },
      {
        src: "/media/images/events/wedding/location/Gazebo/3.jpeg",
        alt: "Gazebo wedding ceremony",
      },
      {
        src: "/media/images/events/wedding/location/Gazebo/4.jpg",
        alt: "Gazebo wedding ceremony",
      },
    ],
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
    adds: ["5-Hour Full Spirits Bar", "Votive Candles & LED Uplighting"],
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

export const weddingGallery: GalleryImage[] = [
  { src: "/media/images/events/wedding/1.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/2.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/3.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/4.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/5.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/6.jpeg", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/7.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/8.jpeg", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/9.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/10.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/11.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/12.jpeg", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/13.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/14.jpeg", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/15.jpeg", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/16.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/17.jpeg", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/18.jpeg", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/19.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/20.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/21.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/22.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/23.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/24.jpeg", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/25.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/26.jpeg", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/27.jpeg", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/28.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/29.jpeg", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/30.jpeg", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/31.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/32.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/33.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/34.jpeg", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/35.jpeg", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/36.jpeg", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/37.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
  { src: "/media/images/events/wedding/38.png", alt: "Artistry wedding celebration", width: 1200, height: 900 },
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
      "This is one of the most significant days in a family's life. Artistry gives it the setting it deserves: beautiful grounds, attentive staff, and a team that treats your celebration as its own.",
    image: "/media/images/events/Social%20Events/IMG_2316.jpg",
    details:
      "We work closely with families from the first conversation through the final toast. Custom décor, kosher-friendly menu options, and entertainment coordination are all part of what we handle together.",
  },
  {
    name: "Communions & Confirmations",
    slug: "communions",
    description:
      "A child's spiritual milestone calls for a celebration that feels as meaningful as the occasion itself. Our spaces and staff make it easy to focus on what matters.",
    image: "/media/images/events/Social%20Events/H-22.jpg",
    details:
      "Whether you are hosting a small family lunch or a larger reception, we offer beautiful outdoor settings, personalized menus, and dedicated staffing to keep the day running smoothly.",
  },
  {
    name: "Milestone Celebrations",
    slug: "milestone",
    description:
      "A landmark birthday, a fiftieth anniversary, a retirement after decades of work. These moments deserve more than a banquet hall.",
    image: "/media/images/events/Social%20Events/20230510_172459.jpg",
    details:
      "Artistry has the spaces to host gatherings of any size, and a team that takes the time to get the details right. Bring your vision and we will take it from there.",
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
    adds: ["5-Hour Full Spirits Bar", "Votive Candles & LED Uplighting"],
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
    adds: ["5-Hour Full Spirits Bar", "Votive Candles & LED Uplighting"],
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

// ── Events index page ─────────────────────────────────────────────────────────

export const eventCards = [
  {
    title: "Weddings",
    description:
      "Exchange vows and celebrate surrounded by sculpture gardens, manicured grounds, and timeless architecture. Artistry offers multiple ceremony and reception spaces for weddings of any size.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    href: "/events/weddings",
    cta: "Explore Weddings",
  },
  {
    title: "Corporate Events",
    description:
      "From summer outings to award galas, dinners to conferences. Inspire your team and impress your clients in a setting that elevates every gathering.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    href: "/events/corporate",
    cta: "Explore Corporate",
  },
  {
    title: "Social Events",
    description:
      "Bar and Bat Mitzvahs, Communions, milestone celebrations and more. Honor life's most meaningful chapters with warmth, elegance, and unforgettable hospitality.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    href: "/events/social",
    cta: "Explore Social Events",
  },
  {
    title: "Celebrate Life",
    description:
      "A gentle, graceful space to honor a life well-lived. Artistry provides a beautiful and dignified setting for gatherings that celebrate legacy and love.",
    image:
      "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=800&q=80",
    href: "/events/celebrate-life",
    cta: "Explore Celebrate Life",
  },
];

// ── Weddings page ─────────────────────────────────────────────────────────────

export const weddingIntroImages = [
  {
    src: "/media/images/events/wedding/about/1.jpeg",
    alt: "Wedding reception florals at Artistry",
  },
  {
    src: "/media/images/events/wedding/about/2.jpeg",
    alt: "Formal wedding celebration at Artistry",
  },
  {
    src: "/media/images/events/wedding/about/3.jpeg",
    alt: "Wedding portrait near the gazebo at Artistry",
  },
];

// ── Wedding enhancements ──────────────────────────────────────────────────────

export type WeddingEnhancementGalleryImage = {
  src: string;
  alt: string;
};

export type WeddingEnhancement = {
  name: string;
  description: string;
  image: string;
  gallery: WeddingEnhancementGalleryImage[];
};

const createGallery = (
  title: string,
  sources: string[],
): WeddingEnhancementGalleryImage[] =>
  sources.map((src, index) => ({
    src,
    alt: `${title} inspiration ${index + 1}`,
  }));

export const weddingEnhancements: WeddingEnhancement[] = [
  {
    name: "Cocktail Reception Upgrades",
    description:
      "Enhance your celebration with curated beverage and cocktail experiences designed to impress. From handcrafted signature cocktails to premium spirits and refined wine selections, each offering is thoughtfully tailored to elevate every toast and create a memorable guest experience.",
    image:
      "/media/images/events/wedding/enhancement/Upgrade 1 - Cocktail Reception Upgrades/1.png",
    gallery: createGallery("Cocktail Reception Upgrades", [
      "/media/images/events/wedding/enhancement/Upgrade 1 - Cocktail Reception Upgrades/2.png",
      "/media/images/events/wedding/enhancement/Upgrade 1 - Cocktail Reception Upgrades/3.png",
      "/media/images/events/wedding/enhancement/Upgrade 1 - Cocktail Reception Upgrades/4.png",
      "/media/images/events/wedding/enhancement/Upgrade 1 - Cocktail Reception Upgrades/5.png",
    ]),
  },
  {
    name: "Floral & Design Packages",
    description:
      "Our floral and design enhancements transform your wedding into a work of art. Featuring custom installations, refined tablescapes, and luxurious blooms, we meticulously curate each element to create a setting that is both visually stunning and uniquely yours.",
    image:
      "/media/images/events/wedding/enhancement/Upgrade 2 - Floral & Design Packages/1.jpeg",
    gallery: createGallery("Floral & Design Packages", [
      "/media/images/events/wedding/enhancement/Upgrade 2 - Floral & Design Packages/2.jpg",
      "/media/images/events/wedding/enhancement/Upgrade 2 - Floral & Design Packages/3.png",
      "/media/images/events/wedding/enhancement/Upgrade 2 - Floral & Design Packages/4.jpg",
      "/media/images/events/wedding/enhancement/Upgrade 2 - Floral & Design Packages/5.png",
    ]),
  },
  {
    name: "Live Musical Performance",
    description:
      "Create a vibrant and unforgettable ambiance with live music tailored to your style. Whether it is a romantic harpist, a smooth jazz group, or a high-energy performance featuring electric violin, saxophone, and percussion, our curated talent brings sophistication, energy, and excitement to your special day.",
    image:
      "/media/images/events/wedding/enhancement/Upgrade 3 - Live Musical Performance/3.png",
    gallery: createGallery("Live Musical Performance", [
      "/media/images/events/wedding/enhancement/Upgrade 3 - Live Musical Performance/5.png",
      "/media/images/events/wedding/enhancement/Upgrade 3 - Live Musical Performance/1.png",
      "/media/images/events/wedding/enhancement/Upgrade 3 - Live Musical Performance/4.png",
      "/media/images/events/wedding/enhancement/Upgrade 3 - Live Musical Performance/2.png",
    ]),
  },
  {
    name: "Lighting",
    description:
      "Create a captivating atmosphere with layered lighting designed to transform your wedding from day to night. From warm uplighting and delicate pin-spot accents to custom gobos and dynamic intelligent lighting, every detail is crafted to evoke elegance, romance, and unforgettable moments.",
    image:
      "/media/images/events/wedding/enhancement/Upgrade 4 - Lighting/1.png",
    gallery: createGallery("Lighting", [
      "/media/images/events/wedding/enhancement/Upgrade 4 - Lighting/2.png",
      "/media/images/events/wedding/enhancement/Upgrade 4 - Lighting/3.png",
      "/media/images/events/wedding/enhancement/Upgrade 4 - Lighting/4.png",
      "/media/images/events/wedding/enhancement/Upgrade 4 - Lighting/5.png",
    ]),
  },
  {
    name: "Entertainment",
    description:
      "Enhance your wedding celebration with curated entertainment experiences designed to captivate and delight your guests. From hand-rolled cigar stations and elegant casino tables to engaging palm readers, strolling performers, and nostalgic retro arcade games, each offering is thoughtfully selected to create a dynamic, interactive, and unforgettable atmosphere tailored to your special day.",
    image:
      "/media/images/events/wedding/enhancement/Upgrade 5 - Entertainment/1.png",
    gallery: createGallery("Entertainment", [
      "/media/images/events/wedding/enhancement/Upgrade 5 - Entertainment/2.png",
      "/media/images/events/wedding/enhancement/Upgrade 5 - Entertainment/3.png",
      "/media/images/events/wedding/enhancement/Upgrade 5 - Entertainment/4.png",
      "/media/images/events/wedding/enhancement/Upgrade 5 - Entertainment/5.png",
    ]),
  },
  {
    name: "Photo Novelty",
    description:
      "Elevate your wedding experience with premium photo novelties and luxury photo booth activations designed to delight your guests and capture unforgettable moments. From elegantly styled backdrops to fully customized, brand-inspired details, each experience is tailored to reflect the unique vision of the bride and groom, creating interactive, share-worthy memories that last well beyond the celebration.",
    image:
      "/media/images/events/wedding/enhancement/Upgrade 6 - Photo Novelty/1.png",
    gallery: createGallery("Photo Novelty", [
      "/media/images/events/wedding/enhancement/Upgrade 6 - Photo Novelty/2.png",
      "/media/images/events/wedding/enhancement/Upgrade 6 - Photo Novelty/3.png",
      "/media/images/events/wedding/enhancement/Upgrade 6 - Photo Novelty/4.png",
      "/media/images/events/wedding/enhancement/Upgrade 6 - Photo Novelty/5.png",
    ]),
  },
  {
    name: "Food Trucks and Carts",
    description:
      "Enhance your wedding celebration with curated food truck and cart experiences, offering an elevated range of options, from classic hot dog and popcorn carts to luxurious caviar stations, as well as specialty coffee and tea carts, and more.",
    image:
      "/media/images/events/wedding/enhancement/Upgrade 7 - Food Trucks and Carts/1.png",
    gallery: createGallery("Food Trucks and Carts", [
      "/media/images/events/wedding/enhancement/Upgrade 7 - Food Trucks and Carts/2.png",
      "/media/images/events/wedding/enhancement/Upgrade 7 - Food Trucks and Carts/3.png",
      "/media/images/events/wedding/enhancement/Upgrade 7 - Food Trucks and Carts/4.png",
      "/media/images/events/wedding/enhancement/Upgrade 7 - Food Trucks and Carts/5.png",
    ]),
  },
  {
    name: "Dessert Sensation",
    description:
      "Add a touch of indulgence with our Dessert Sensation offerings, where creativity meets craftsmanship. From beautifully styled dessert stations to irresistible sweet bites, these upgrades create a delightful, interactive experience your guests will savor.",
    image:
      "/media/images/events/wedding/enhancement/Upgrade 8 - Dessert Sensation/1.png",
    gallery: createGallery("Dessert Sensation", [
      "/media/images/events/wedding/enhancement/Upgrade 8 - Dessert Sensation/2.png",
      "/media/images/events/wedding/enhancement/Upgrade 8 - Dessert Sensation/3.png",
      "/media/images/events/wedding/enhancement/Upgrade 8 - Dessert Sensation/4.png",
      "/media/images/events/wedding/enhancement/Upgrade 8 - Dessert Sensation/5.png",
    ]),
  },
];
