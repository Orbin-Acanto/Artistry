export type Vendor = {
  name: string;
  category: string;
  description: string;
  website?: string;
};

export const vendorCategories = [
  "Floral Design",
  "Photography",
  "Videography",
  "Entertainment & Music",
  "Lighting & Production",
  "Transportation",
  "Beauty & Hair",
  "Stationery & Signage",
  "Officiants",
  "Event Rentals",
] as const;

export const vendors: Vendor[] = [
  {
    name: "Blooms & Co.",
    category: "Floral Design",
    description:
      "Award-winning floral designers specializing in romantic, garden-inspired arrangements for weddings and social events on Long Island.",
  },
  {
    name: "Meridian Photography",
    category: "Photography",
    description:
      "Boutique wedding and event photography studio known for timeless, editorial-style imagery that tells your story.",
  },
  {
    name: "Lumière Films",
    category: "Videography",
    description:
      "Cinematic wedding films and event highlight reels, crafted with artistry and attention to every emotion.",
  },
  {
    name: "Encore Entertainment",
    category: "Entertainment & Music",
    description:
      "Full-service entertainment agency offering live bands, DJs, string quartets, and custom performance packages.",
  },
  {
    name: "Illuminate Productions",
    category: "Lighting & Production",
    description:
      "Transformative lighting design and production services that bring your venue vision to life, indoors and out.",
  },
  {
    name: "Prestige Limousine",
    category: "Transportation",
    description:
      "Luxury transportation solutions for weddings and corporate events across Long Island and New York City.",
  },
  {
    name: "Glow Beauty Studio",
    category: "Beauty & Hair",
    description:
      "On-location bridal beauty team specializing in hair, makeup, and styling for weddings and special events.",
  },
  {
    name: "The Paper Atelier",
    category: "Stationery & Signage",
    description:
      "Bespoke stationery, signage, and printed goods for weddings and celebrations, designed with exquisite detail.",
  },
  {
    name: "Sacred Words Officiants",
    category: "Officiants",
    description:
      "Interfaith and non-denominational officiants who craft personalized, deeply meaningful ceremony scripts.",
  },
  {
    name: "TableScape Rentals",
    category: "Event Rentals",
    description:
      "Premium event rentals including linens, tableware, lounge furniture, and specialty décor for any celebration.",
  },
];
