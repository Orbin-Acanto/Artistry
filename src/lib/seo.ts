import type { Metadata } from "next";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

// Builds title, canonical, Open Graph and Twitter tags so every page gets its own.
export function pageMetadata({ title, description, path, image }: PageSeo): Metadata {
  const images = image
    ? [image]
    : [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Artistry at Nassau County Museum of Art" }];

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Artistry Events",
      url: path,
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image ?? "/og-image.jpg"],
    },
  };
}
