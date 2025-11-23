import { MetadataRoute } from "next";
import { products, categories } from "@/lib/products";

const SITE_URL = "https://tomar-thikana.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/custom-order`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Delivery Areas page (Phase 2)
    {
      url: `${SITE_URL}/delivery-areas`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Blog index (content hub)
    {
      url: `${SITE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Blog articles (Phase 3)
    {
      url: `${SITE_URL}/blog/resin-jewelry-price-bangladesh-2025`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog/jhumka-designs-bengali-weddings-2025`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog/eid-gift-ideas-bangladesh-2025`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog/preserved-flower-jewelry-guide-bangladesh`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog/best-handmade-gift-shops-dhaka-2025`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic product pages (all 118 products)
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${SITE_URL}/products/${product.id}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: product.featured ? 0.8 : 0.6,
  }));

  // Category filter pages
  const categoryPages: MetadataRoute.Sitemap = categories
    .filter((category) => category.id !== "all") // Skip "all" category
    .map((category) => ({
      url: `${SITE_URL}/products?category=${category.id}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  return [...staticPages, ...productPages, ...categoryPages];
}
