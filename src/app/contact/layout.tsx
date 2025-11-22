import type { Metadata } from "next";

const SITE_URL = "https://tomar-thikana.vercel.app";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Contact তোমার ঠিকানা (Tomar Thikana) for custom orders, inquiries about handmade jewelry, resin gifts, and personalized items. যোগাযোগ করুন। Located in Dhaka, Bangladesh. WhatsApp, Facebook, Instagram available.",
  keywords: [
    "contact Tomar Thikana",
    "jewelry shop contact Bangladesh",
    "custom gift order Dhaka",
    "যোগাযোগ",
    "কাস্টম অর্ডার",
  ],
  openGraph: {
    title: "Contact তোমার ঠিকানা - Handmade Jewelry & Gifts | Bangladesh",
    description:
      "Get in touch for custom orders and inquiries. WhatsApp, Facebook, Instagram. যোগাযোগ করুন।",
    images: ["/assets/hero-image.jpg"],
    url: `${SITE_URL}/contact`,
  },
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
