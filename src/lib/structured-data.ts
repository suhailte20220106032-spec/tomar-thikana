// Structured Data (JSON-LD) Schema Generators for SEO
// Schema.org compliant structured data for rich snippets in search results

import { Product } from "./products";

const SITE_URL = "https://tomar-thikana.vercel.app";
const BUSINESS_NAME = "তোমার ঠিকানা (Tomar Thikana)";

// Organization Schema - Use in root layout
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: BUSINESS_NAME,
    description: "Handmade resin jewelry and custom gifts in Bangladesh",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    image: `${SITE_URL}/assets/hero-image.jpg`,
    telephone: "", // Add when available
    email: "", // Add when available
    sameAs: [
      "https://www.facebook.com/tomarthikanaaa",
      "https://www.instagram.com/tomarthikanaaa/",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
      addressLocality: "Dhaka",
      addressRegion: "Dhaka Division",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.8103, // Dhaka coordinates
      longitude: 90.4125,
    },
    priceRange: "৳৳",
    currenciesAccepted: "BDT",
    paymentAccepted: ["Cash", "Mobile Banking", "bKash", "Nagad"],
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
  };
}

// Product Schema - Use in product detail pages
export function generateProductSchema(product: Product) {
  const categoryMap: Record<string, string> = {
    earrings: "Earrings",
    keychains: "Keychains",
    pendants: "Pendants & Necklaces",
    photoframes: "Photo Frames",
    sunglasses: "Sunglasses",
    bookmarks: "Bookmarks",
    bracelets: "Bracelets",
    rings: "Rings",
    pens: "Pens",
    phonecovers: "Phone Covers",
    frames: "Decorative Frames",
  };

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((img) => `${SITE_URL}${img}`),
    brand: {
      "@type": "Brand",
      name: BUSINESS_NAME,
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/products/${product.id}`,
      priceCurrency: "BDT",
      price: product.price.toString(),
      priceValidUntil: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      )
        .toISOString()
        .split("T")[0],
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: BUSINESS_NAME,
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "BD",
        },
      },
    },
    category: categoryMap[product.category] || product.category,
    material: "Resin, Preserved Flowers, Handcrafted",
    audience: {
      "@type": "PeopleAudience",
      geographicArea: {
        "@type": "AdministrativeArea",
        name: "Bangladesh",
      },
    },
  };
}

// BreadcrumbList Schema - Use in product and category pages
interface BreadcrumbItem {
  name: string;
  url?: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}

// LocalBusiness Schema - Use in about page
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE_URL,
    name: BUSINESS_NAME,
    image: `${SITE_URL}/assets/hero-image.jpg`,
    description:
      "Handmade resin jewelry, jhumka earrings, preserved flower pendants, custom photo frames and personalized gifts in Dhaka, Bangladesh. হাতে তৈরি গয়না, রেজিন জুয়েলারি, কাস্টম গিফট।",
    url: SITE_URL,
    telephone: "", // Add when available
    priceRange: "৳80 - ৳1000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "", // Add when available
      addressLocality: "Dhaka",
      addressRegion: "Dhaka Division",
      postalCode: "", // Add when available
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.8103,
      longitude: 90.4125,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/tomarthikanaaa",
      "https://www.instagram.com/tomarthikanaaa/",
    ],
    currenciesAccepted: "BDT",
    paymentAccepted: ["Cash", "Mobile Banking", "bKash", "Nagad"],
  };
}

// FAQPage Schema - Use in custom order page
interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// WebPage Schema - Use in static pages
interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
}

export function generateWebPageSchema({
  title,
  description,
  url,
  imageUrl,
}: WebPageSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    ...(imageUrl && { image: imageUrl }),
    publisher: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    inLanguage: ["en-BD", "bn-BD"],
  };
}

// ItemList Schema - Use in product listing pages
export function generateItemListSchema(products: Product[], listName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        image: `${SITE_URL}${product.mainImage}`,
        url: `${SITE_URL}/products/${product.id}`,
        offers: {
          "@type": "Offer",
          price: product.price.toString(),
          priceCurrency: "BDT",
        },
      },
    })),
  };
}

// Helper function to inject JSON-LD into page
export function generateJsonLd(schema: object) {
  return {
    __html: JSON.stringify(schema),
  };
}

// Category keywords for SEO
export const categoryKeywords: Record<string, string> = {
  earrings:
    "jhumka design Bangladesh, handmade earrings Dhaka, resin earrings, preserved flower earrings, wedding jewelry",
  keychains:
    "customized keychain Bangladesh, personalized keychain, name keychain Dhaka, custom gift",
  pendants:
    "pendant Bangladesh, Islamic calligraphy pendant, preserved flower pendant, handmade necklace Dhaka",
  photoframes:
    "photo frame customize Bangladesh, custom photo frame Dhaka, personalized frame, resin frame",
  sunglasses: "sunglasses Bangladesh, aesthetic sunglasses Dhaka",
  bookmarks:
    "resin bookmark Bangladesh, handmade bookmark, custom bookmark Dhaka",
  bracelets: "bracelet Bangladesh, handmade bracelet Dhaka, resin bracelet",
  rings: "handmade ring Bangladesh, resin ring Dhaka, custom ring",
  pens: "custom pen Bangladesh, personalized pen Dhaka",
  phonecovers: "phone cover Bangladesh, custom phone case Dhaka",
  frames:
    "decorative frame Bangladesh, resin frame Dhaka, handmade frame, wall decor",
};

// Get category-specific keywords for product descriptions
export function getCategoryKeywords(categoryId: string): string {
  return categoryKeywords[categoryId] || "";
}
