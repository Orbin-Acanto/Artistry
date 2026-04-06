import { MetadataRoute } from "next";

const BASE_URL = "https://www.eventsatartistry.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about/history`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about/location`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about/site-map`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/events`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/events/weddings`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/events/corporate`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/events/social`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/events/celebrate-life`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/vendors`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tardis-catering`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/tardis-cafe`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE_URL}/fidi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/sitemap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
  ];
}
