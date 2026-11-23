import { MetadataRoute } from "next";

const BASE_URL = "https://www.eventsatartistry.com";
const UPDATED = new Date("2026-11-23");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/events`, lastModified: UPDATED, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/events/weddings`, lastModified: UPDATED, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/events/corporate`, lastModified: UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/events/social`, lastModified: UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/events/celebrate-life`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tardis-catering`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about/location`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tardis-cafe`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about/history`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE_URL}/fidi`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/about/site-map`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.5 },
  ];
}
