import fs from "fs";
import path from "path";

// Copy pdfjs worker to public/ so it is served statically.
// Runs at build time — keeps the worker version in sync with pdfjs-dist automatically.
const workerSrc = path.resolve("node_modules/pdfjs-dist/build/pdf.worker.min.js");
const workerDest = path.resolve("public/pdf.worker.min.js");
if (fs.existsSync(workerSrc)) {
  fs.copyFileSync(workerSrc, workerDest);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // 301 redirects from the old static site that lived at the root of www.eventsatartistry.com.
    // Google has these exact URLs indexed — each one must redirect to the closest new page.
    return [
      // ── Home ──────────────────────────────────────────────────────────
      { source: "/index.html", destination: "/", permanent: true },

      // ── Weddings ──────────────────────────────────────────────────────
      { source: "/weddings.html", destination: "/events/weddings", permanent: true },

      // ── Venue spaces → Weddings (all old venue detail pages) ──────────
      { source: "/north-terrace.html",      destination: "/events/weddings", permanent: true },
      { source: "/tented-pavilion.html",    destination: "/events/weddings", permanent: true },
      { source: "/gazebo.html",             destination: "/events/weddings", permanent: true },
      { source: "/great-lawn.html",         destination: "/events/weddings", permanent: true },
      { source: "/east-terrace.html",       destination: "/events/weddings", permanent: true },
      { source: "/formal-gardens.html",     destination: "/events/weddings", permanent: true },
      { source: "/library.html",            destination: "/events/weddings", permanent: true },
      { source: "/collection-gallery.html", destination: "/events/weddings", permanent: true },

      // ── Packages ──────────────────────────────────────────────────────
      { source: "/general-packages.html",  destination: "/events",           permanent: true },
      { source: "/corporate-packages.html", destination: "/events/corporate", permanent: true },

      // ── History ───────────────────────────────────────────────────────
      { source: "/history.html", destination: "/about/history", permanent: true },

      // ── Gallery / Videos ──────────────────────────────────────────────
      { source: "/gallery.html", destination: "/events", permanent: true },
      { source: "/videos.html",  destination: "/events", permanent: true },
    ];
  },

  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
