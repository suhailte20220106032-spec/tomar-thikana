import type { Metadata } from "next";
import { generateFAQSchema, generateJsonLd } from "@/lib/structured-data";
import GoogleAnalytics from '@/components/GoogleAnalytics';

const SITE_URL = "https://tomar-thikana.vercel.app";

export const metadata: Metadata = {
  title: "Custom Order - Personalized Gifts & Jewelry",
  description:
    "Order custom handmade resin jewelry, personalized photo frames, name keychains, and unique gifts from তোমার ঠিকানা (Tomar Thikana). কাস্টম অর্ডার দিন। Custom jhumka, pendants, preserved flower jewelry. Bangladesh delivery.",
  keywords: [
    "custom order Bangladesh",
    "personalized jewelry Dhaka",
    "custom gift order",
    "কাস্টম অর্ডার",
    "কাস্টমাইজড গিফট",
    "customized keychain",
    "personalized photo frame",
    "custom jhumka design",
  ],
  openGraph: {
    title: "Custom Order - Personalized Handmade Gifts | তোমার ঠিকানা",
    description:
      "Order custom handmade jewelry, personalized gifts. কাস্টম অর্ডার দিন। Free consultation.",
    images: ["/assets/hero-image.jpg"],
    url: `${SITE_URL}/custom-order`,
  },
  alternates: {
    canonical: `${SITE_URL}/custom-order`,
  },
};

export default function CustomOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // FAQ Schema for custom order page
  const faqSchema = generateFAQSchema([
    {
      question: "How do I place a custom order?",
      answer:
        "Fill out our custom order form with your requirements, including product type, design preferences, and any special requests. Upload reference images if available. We'll contact you within 24 hours to discuss details and pricing.",
    },
    {
      question: "What products can be customized?",
      answer:
        "We can customize almost all our products including jhumka earrings, pendants, photo frames, keychains, bookmarks, and more. You can choose colors, add names, dates, photos, or preserved flowers of your choice.",
    },
    {
      question: "How long does a custom order take?",
      answer:
        "Custom orders typically take 5-10 business days depending on the complexity of the design. Rush orders may be available for an additional fee. We'll provide an estimated completion date when confirming your order.",
    },
    {
      question: "What is the minimum order quantity?",
      answer:
        "We accept orders for single custom pieces. There is no minimum order quantity. Bulk orders for weddings or events may receive special pricing.",
    },
    {
      question: "Can I see a preview before production?",
      answer:
        "Yes! We provide design mockups or sketches for approval before starting production on custom orders. You can request changes until you're satisfied with the design.",
    },
    {
      question: "Do you deliver custom orders outside Dhaka?",
      answer:
        "Yes, we deliver custom orders across Bangladesh. Delivery charges apply based on location. We use reliable courier services to ensure safe delivery of your custom items.",
    },
  ]);

  return (
    <>
      <GoogleAnalytics measurementId="G-32CSH1ELTB" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(faqSchema)}
        key="faq-jsonld"
      />
      {children}
    </>
  );
}
