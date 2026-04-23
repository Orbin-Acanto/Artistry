export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  {
    label: "About",
    href: "/about/history",
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
    label: "Tardi's Catering",
    href: "/tardis-catering",
  },
  {
    label: "Vendors",
    href: "#",
    children: [
      {
        label: "MME Worldwide",
        href: "https://www.mmeink.com/",
        external: true,
      },
      {
        label: "Mikey Mike Events",
        href: "https://www.mikeymikeevents.com/",
        external: true,
      },
      {
        label: "Tardi's Catering",
        href: "https://www.tardiscatering.com/",
        external: true,
      },
      {
        label: "W Kosher Events",
        href: "https://www.wkosherevents.com/",
        external: true,
      },
      {
        label: "Event Rentals",
        href: "https://www.eventproprentals.com/",
        external: true,
      },
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
