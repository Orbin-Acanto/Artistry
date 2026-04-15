export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "History of the Property", href: "/about/history" },
      { label: "Location & Directors", href: "/about/location" },
      { label: "Site Map", href: "/about/site-map" },
    ],
  },
  {
    label: "Events",
    href: "/events",
    children: [
      {
        label: "Weddings",
        href: "/events/weddings",
      },
      {
        label: "Corporate Events",
        href: "/events/corporate",
      },
      {
        label: "Social Events",
        href: "/events/social",
      },
      {
        label: "Celebrate Life",
        href: "/events/celebrate-life",
      },
    ],
  },
  {
    label: "Brochures",
    href: "/brochures/corporate",
    children: [
      { label: "Corporate", href: "/brochures/corporate" },
      { label: "Wedding", href: "/brochures/wedding" },
      { label: "Social Events", href: "/brochures/social" },
    ],
  },
  {
    label: "Tardis Catering",
    href: "/tardis-catering",
    children: [
      { label: "Who We Are", href: "/tardis-catering" },
      { label: "Tardis Cafe", href: "/tardis-cafe" },
    ],
  },
  {
    label: "FIDI",
    href: "/fidi",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];
