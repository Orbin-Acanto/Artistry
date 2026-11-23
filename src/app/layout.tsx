import type { Metadata } from "next";
import { Gilda_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BotIdClient } from "botid/client";
import ClickTracking from "@/components/ClickTracking";

const gildaDisplay = Gilda_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gilda",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eventsatartistry.com"),
  title: {
    default: "Artistry | Event Venue at Nassau County Museum of Art",
    template: "%s | Artistry Events",
  },
  description:
    "Weddings, corporate events and private celebrations at Artistry, the event venue inside Nassau County Museum of Art in Roslyn, NY on Long Island.",
  keywords: [
    "event venue Long Island",
    "wedding venue Nassau County",
    "corporate events Roslyn NY",
    "Nassau County Museum of Art events",
    "Artistry events venue",
    "wedding reception Long Island",
    "social events NY",
    "FIDI Hospitality",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Artistry Events",
    title: "Artistry | Event Venue at Nassau County Museum of Art",
    description:
      "Weddings, corporate events and private celebrations at Artistry, the event venue inside Nassau County Museum of Art in Roslyn, NY on Long Island.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Artistry at Nassau County Museum of Art",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artistry | Event Venue at Nassau County Museum of Art",
    description:
      "Weddings, corporate events and private celebrations at Artistry, the event venue inside Nassau County Museum of Art in Roslyn, NY on Long Island.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["EventVenue", "LocalBusiness"],
  name: "Artistry at Nassau County Museum of Art",
  alternateName: "Artistry Events",
  description:
    "Event venue inside Nassau County Museum of Art in Roslyn, NY, for weddings, corporate events, social celebrations and celebrations of life.",
  url: "https://www.eventsatartistry.com",
  logo: "https://www.eventsatartistry.com/media/images/logo/artistry-logo.svg",
  image: "https://www.eventsatartistry.com/og-image.jpg",
  telephone: "+12129715353",
  email: "info@eventsatartistry.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "One Museum Drive",
    addressLocality: "Roslyn",
    addressRegion: "NY",
    postalCode: "11576",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Roslyn" },
    { "@type": "County", name: "Nassau County" },
    { "@type": "AdministrativeArea", name: "Long Island" },
    { "@type": "City", name: "New York City" },
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Indoor Event Space", value: true },
    { "@type": "LocationFeatureSpecification", name: "Outdoor Event Space", value: true },
    { "@type": "LocationFeatureSpecification", name: "On-site Catering", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wedding Ceremonies", value: true },
    { "@type": "LocationFeatureSpecification", name: "Corporate Events", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
  ],
  sameAs: [
    "https://www.instagram.com/eventsatartistry",
    "https://www.facebook.com/eventsatartistry",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gildaDisplay.variable} ${montserrat.variable}`}
    >
      <head>
        <BotIdClient protect={[{ path: "/api/contact-form", method: "POST" }]} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <ClickTracking />
      </body>
    </html>
  );
}
