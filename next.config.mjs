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
