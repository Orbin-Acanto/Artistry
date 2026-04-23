import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thank-you", "/brochures/", "/sitemap", "/api/"],
      },
    ],
    sitemap: "https://www.eventsatartistry.com/sitemap.xml",
  };
}
