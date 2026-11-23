import { MetadataRoute } from "next";

const disallow = ["/thank-you", "/brochures/", "/sitemap$", "/api/"];

// Named crawlers ignore the * group, so each needs the same disallows.
const crawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: crawlers, allow: "/", disallow },
    ],
    sitemap: "https://www.eventsatartistry.com/sitemap.xml",
  };
}
