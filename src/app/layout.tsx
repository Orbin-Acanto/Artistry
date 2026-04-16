import type { Metadata } from "next";
import { Gilda_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    default: "Artistry at Nassau County Museum of Art | Event Venue Roslyn, NY",
    template: "%s | Artistry Events",
  },
  description:
    "Artistry is a premier event venue at Nassau County Museum of Art in Roslyn, NY. Host weddings, corporate events, social celebrations, and milestone occasions surrounded by stunning art and lush grounds.",
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
    url: "https://www.eventsatartistry.com",
    siteName: "Artistry Events",
    title: "Artistry at Nassau County Museum of Art | Event Venue Roslyn, NY",
    description:
      "A premier event venue nestled within the Nassau County Museum of Art. Weddings, corporate events, and unforgettable celebrations on Long Island.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Artistry Event Venue at Nassau County Museum of Art",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artistry at Nassau County Museum of Art | Event Venue Roslyn, NY",
    description:
      "A premier event venue nestled within the Nassau County Museum of Art. Weddings, corporate events, and unforgettable celebrations on Long Island.",
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
  alternates: {
    canonical: "https://www.eventsatartistry.com",
  },
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
      <body className="antialiased">
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
