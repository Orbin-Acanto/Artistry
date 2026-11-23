export type Faq = {
  question: string;
  answer: string;
  link?: { label: string; href: string };
};

export const faqGroups: { title: string; items: Faq[] }[] = [
  {
    title: "The Venue",
    items: [
      {
        question: "Where is Artistry located?",
        answer:
          "Artistry is inside Nassau County Museum of Art at One Museum Dr, Roslyn, NY 11576. The museum is on Long Island's North Shore, just off Northern Blvd (Route 25A).",
        link: { label: "Location and directions", href: "/about/location" },
      },
      {
        question: "Who runs Artistry?",
        answer:
          "Artistry is operated by FIDI Hospitality. FIDI also runs FiDi Mezzanine and 48 Wall Street in Manhattan's Financial District.",
        link: { label: "About FIDI Hospitality", href: "/fidi" },
      },
      {
        question: "What event spaces does Artistry have?",
        answer:
          "Artistry has eight event spaces, indoors and outdoors. They are the Tented Pavilion, the Formal Garden, the Great Lawn, the Formal Library, the Collection Gallery, the East Terrace, the North Terrace and the Gazebo. You can use one space or combine several.",
        link: { label: "See every space on the venue map", href: "/about/site-map" },
      },
      {
        question: "How many guests can Artistry hold?",
        answer:
          "Artistry can host up to 800 guests on the Great Lawn. For a lawn event, our team arranges the tenting, flooring and lighting. The Formal Garden holds up to 500 guests.",
        link: { label: "Compare spaces", href: "/about/site-map" },
      },
      {
        question: "How many guests fit in each space?",
        answer:
          "Capacity ranges from 40 guests in the Formal Library to 800 on the Great Lawn. The Formal Garden holds up to 500, the East and North Terraces up to 250 each, the Tented Pavilion up to 125, the Collection Gallery up to 100 and the Gazebo up to 50. By setup, the Formal Library seats 40 for a luncheon or dinner or 60 standing, the Collection Gallery seats 80 lecture style, and the Formal Garden seats 200.",
      },
      {
        question: "Can guests see the art during an event?",
        answer:
          "Yes, guests are welcome to view the art on exhibit and stroll the grounds during your event. The Tented Pavilion has direct access to the mansion's galleries, and the Collection Gallery is on the mansion's second floor.",
      },
    ],
  },
  {
    title: "Events We Host",
    items: [
      {
        question: "What kinds of events does Artistry host?",
        answer:
          "Artistry hosts weddings, corporate events, social celebrations and celebrations of life. Corporate events include dinners, meetings, cocktail receptions, award ceremonies and summer outings. Social events include Bar and Bat Mitzvahs, Communions, Confirmations and milestone celebrations.",
        link: { label: "All event types", href: "/events" },
      },
      {
        question: "Can we have our wedding ceremony and reception at Artistry?",
        answer:
          "Yes, you can hold both on the estate. Ceremonies can take place in the Formal Garden, at the Gazebo, on the North Terrace or in the Tented Pavilion. Ceremony packages include 50 or 100 white folding chairs, a two-speaker sound system with an audio technician, a wireless microphone and an aisle runner.",
        link: { label: "Weddings at Artistry", href: "/events/weddings" },
      },
      {
        question: "What do the wedding reception packages include?",
        answer:
          "Every reception package includes a 1-hour cocktail reception, a 4-hour reception and a 5-hour bar. Package One starts with beer and wine, passed hors d'oeuvres and a buffet dinner. Higher packages add a full spirits bar, LED uplighting, a Farmers Market Display, gold table settings and plated dinner service.",
        link: { label: "Wedding packages", href: "/events/weddings" },
      },
      {
        question: "Does Artistry host corporate meetings and conferences?",
        answer:
          "Yes, Artistry hosts meetings and conferences for 10 to 200 guests. They come with A/V and presentation tech, breakout room options and catering packages. Corporate dinners seat 10 to 150, cocktail receptions hold 50 to 400 and award events 100 to 500.",
        link: { label: "Corporate events", href: "/events/corporate" },
      },
      {
        question: "Does Artistry host Bar and Bat Mitzvahs?",
        answer:
          "Yes, Artistry hosts Bar and Bat Mitzvahs along with Communions, Confirmations and milestone celebrations. The team works with each family on custom décor, kosher-friendly menu options and entertainment coordination.",
        link: { label: "Social events", href: "/events/social" },
      },
      {
        question: "Can we hold a celebration of life or memorial gathering?",
        answer:
          "Yes, Artistry hosts celebration of life and memorial gatherings for 20 guests or 200. You can gather in the gardens, the pavilion or on the terraces. One coordinator handles setup, timing and staffing so your family can be present.",
        link: { label: "Celebrate Life gatherings", href: "/events/celebrate-life" },
      },
      {
        question: "Is A/V and lighting available?",
        answer:
          "Yes, A/V and lighting can be arranged for your event. Corporate events can include presentation tech, a stage and podium, and full A/V and lighting. Wedding lighting upgrades range from warm uplighting and pin spots to custom gobos and intelligent lighting.",
      },
    ],
  },
  {
    title: "Catering and Bar",
    items: [
      {
        question: "Who caters events at Artistry?",
        answer:
          "Tardi's Catering is the exclusive caterer at Artistry. Every menu is built with the client, with plated dinners, buffets, small plates and food stations. Vegan, vegetarian and gluten-free selections are available.",
        link: { label: "Tardi's Catering", href: "/tardis-catering" },
      },
      {
        question: "Can we bring our own caterer?",
        answer:
          "No, Tardi's Catering is the exclusive caterer at Artistry. Artistry also works with an exclusive vendor for event services, so check with your coordinator before booking any outside vendor.",
      },
      {
        question: "Is there a bar?",
        answer:
          "Yes, every reception package includes a 5-hour bar. Package One has beer and wine, and Packages Two to Four have a full spirits bar. Prosecco and signature cocktails can be added.",
      },
      {
        question: "Is there a cafe at the museum?",
        answer:
          "Yes, Tardi's Cafe is on the museum grounds and serves coffee, light fare and pastries. It is open Tuesday to Sunday from 10am to 4pm and closed on Mondays.",
        link: { label: "Tardi's Cafe", href: "/tardis-cafe" },
      },
    ],
  },
  {
    title: "Pricing and Booking",
    items: [
      {
        question: "How much does an event at Artistry cost?",
        answer:
          "Packages are priced per person, and pricing is shared on request. The venue rental fee is separate from package pricing. Our brochures note that a 24% service charge and New York State sales tax are added to packages.",
        link: { label: "Request pricing", href: "/#contact" },
      },
      {
        question: "Is there a minimum guest count?",
        answer:
          "Yes, reception packages have a 50 guest minimum. Ceremony-only packages have no minimum guest count.",
      },
      {
        question: "How do I schedule a tour?",
        answer:
          "Fill out the inquiry form, email info@eventsatartistry.com or call 212.971.5353 to schedule a visit. Our Director of Sales is the first point of contact for new inquiries.",
        link: { label: "Contact the team", href: "/#contact" },
      },
      {
        question: "What should I have ready when I inquire?",
        answer:
          "Have your event type, guest count and preferred date ready. The inquiry form also asks for a start time, any backup dates and how you heard about us, and you can attach PDF, Word or image files.",
        link: { label: "Start an inquiry", href: "/#contact" },
      },
    ],
  },
  {
    title: "Getting Here",
    items: [
      {
        question: "How far is Artistry from Manhattan?",
        answer:
          "Artistry is about 30 minutes from Manhattan by car. The venue sits off Northern Blvd (Route 25A) in Roslyn.",
        link: { label: "Directions", href: "/about/location" },
      },
      {
        question: "Is there parking?",
        answer: "Yes, there is ample free parking on site.",
      },
      {
        question: "Can guests get to Artistry by train?",
        answer:
          "Yes, take the LIRR Port Washington Branch to Roslyn Station. The venue is a short taxi or rideshare ride from the station.",
      },
    ],
  },
];
