export type WeddingEnhancementGalleryImage = {
  src: string;
  alt: string;
};

export type WeddingEnhancement = {
  name: string;
  description: string;
  image: string;
  gallery: WeddingEnhancementGalleryImage[];
};

const createGallery = (
  title: string,
  sources: string[],
): WeddingEnhancementGalleryImage[] =>
  sources.map((src, index) => ({
    src,
    alt: `${title} inspiration ${index + 1}`,
  }));

export const weddingEnhancements: WeddingEnhancement[] = [
  {
    name: "Cocktail Reception Upgrades",
    description:
      "Enhance your celebration with curated beverage and cocktail experiences designed to impress. From handcrafted signature cocktails to premium spirits and refined wine selections, each offering is thoughtfully tailored to elevate every toast and create a memorable guest experience.",
    image: "/media/images/events/wedding/1.jpeg",
    gallery: createGallery("Cocktail Reception Upgrades", [
      "/media/images/events/wedding/1.jpeg",
      "/media/images/events/wedding/2.jpeg",
      "/media/images/events/wedding/3.jpeg",
      "/media/images/events/wedding/4.jpeg",
      "/media/images/events/wedding/5.jpeg",
      "/media/images/events/wedding/6.jpeg",
    ]),
  },
  {
    name: "Floral & Design Packages",
    description:
      "Our floral and design enhancements transform your wedding into a work of art. Featuring custom installations, refined tablescapes, and luxurious blooms, we meticulously curate each element to create a setting that is both visually stunning and uniquely yours.",
    image: "/media/images/events/wedding/flower.jpg",
    gallery: createGallery("Floral & Design Packages", [
      "/media/images/events/wedding/flower.jpg",
      "/media/images/events/wedding/7.jpeg",
      "/media/images/events/wedding/8.jpeg",
      "/media/images/events/wedding/9.jpeg",
      "/media/images/events/wedding/10.jpeg",
      "/media/images/events/wedding/11.jpeg",
    ]),
  },
  {
    name: "Live Musical Performance",
    description:
      "Create a vibrant and unforgettable ambiance with live music tailored to your style. Whether it is a romantic harpist, a smooth jazz group, or a high-energy performance featuring electric violin, saxophone, and percussion, our curated talent brings sophistication, energy, and excitement to your special day.",
    image: "/media/images/events/wedding/gazebo.jpg",
    gallery: createGallery("Live Musical Performance", [
      "/media/images/events/wedding/gazebo.jpg",
      "/media/images/events/wedding/12.jpeg",
      "/media/images/events/wedding/13.jpeg",
      "/media/images/events/wedding/14.jpeg",
      "/media/images/events/wedding/15.jpeg",
      "/media/images/events/wedding/EastTerrace1.jpg",
    ]),
  },
  {
    name: "Lighting",
    description:
      "Create a captivating atmosphere with layered lighting designed to transform your wedding from day to night. From warm uplighting and delicate pin-spot accents to custom gobos and dynamic intelligent lighting, every detail is crafted to evoke elegance, romance, and unforgettable moments.",
    image: "/media/images/events/wedding/formal.jpg",
    gallery: createGallery("Lighting", [
      "/media/images/events/wedding/formal.jpg",
      "/media/images/events/wedding/2.jpeg",
      "/media/images/events/wedding/5.jpeg",
      "/media/images/events/wedding/8.jpeg",
      "/media/images/events/wedding/11.jpeg",
      "/media/images/events/wedding/NorthTerrace1.jpg",
    ]),
  },
  {
    name: "Entertainment",
    description:
      "Enhance your wedding celebration with curated entertainment experiences designed to captivate and delight your guests. From hand-rolled cigar stations and elegant casino tables to engaging palm readers, strolling performers, and nostalgic retro arcade games, each offering is thoughtfully selected to create a dynamic, interactive, and unforgettable atmosphere tailored to your special day.",
    image: "/media/images/events/wedding/6.jpeg",
    gallery: createGallery("Entertainment", [
      "/media/images/events/wedding/6.jpeg",
      "/media/images/events/wedding/7.jpeg",
      "/media/images/events/wedding/9.jpeg",
      "/media/images/events/wedding/12.jpeg",
      "/media/images/events/wedding/14.jpeg",
      "/media/images/events/wedding/15.jpeg",
    ]),
  },
  {
    name: "Photo Novelty",
    description:
      "Elevate your wedding experience with premium photo novelties and luxury photo booth activations designed to delight your guests and capture unforgettable moments. From elegantly styled backdrops to fully customized, brand-inspired details, each experience is tailored to reflect the unique vision of the bride and groom, creating interactive, share-worthy memories that last well beyond the celebration.",
    image: "/media/images/events/wedding/3.jpeg",
    gallery: createGallery("Photo Novelty", [
      "/media/images/events/wedding/3.jpeg",
      "/media/images/events/wedding/4.jpeg",
      "/media/images/events/wedding/8.jpeg",
      "/media/images/events/wedding/10.jpeg",
      "/media/images/events/wedding/13.jpeg",
      "/media/images/events/wedding/gazebo.jpg",
    ]),
  },
  {
    name: "Food Trucks and Carts",
    description:
      "Enhance your wedding celebration with curated food truck and cart experiences, offering an elevated range of options, from classic hot dog and popcorn carts to luxurious caviar stations, as well as specialty coffee and tea carts, and more.",
    image: "/media/images/events/wedding/EastTerrace1.jpg",
    gallery: createGallery("Food Trucks and Carts", [
      "/media/images/events/wedding/EastTerrace1.jpg",
      "/media/images/events/wedding/1.jpeg",
      "/media/images/events/wedding/5.jpeg",
      "/media/images/events/wedding/9.jpeg",
      "/media/images/events/wedding/13.jpeg",
      "/media/images/events/wedding/NorthTerrace1.jpg",
    ]),
  },
  {
    name: "Dessert Sensation",
    description:
      "Add a touch of indulgence with our Dessert Sensation offerings, where creativity meets craftsmanship. From beautifully styled dessert stations to irresistible sweet bites, these upgrades create a delightful, interactive experience your guests will savor.",
    image: "/media/images/events/wedding/11.jpeg",
    gallery: createGallery("Dessert Sensation", [
      "/media/images/events/wedding/11.jpeg",
      "/media/images/events/wedding/2.jpeg",
      "/media/images/events/wedding/4.jpeg",
      "/media/images/events/wedding/6.jpeg",
      "/media/images/events/wedding/10.jpeg",
      "/media/images/events/wedding/12.jpeg",
    ]),
  },
];
