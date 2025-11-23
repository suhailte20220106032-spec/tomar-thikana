import type { Metadata, Viewport } from "next";
import ClientProviders from "@/components/ClientProviders";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { generateOrganizationSchema, generateJsonLd } from "@/lib/structured-data";
import "./globals.css";

const SITE_URL = "https://tomar-thikana.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "তোমার ঠিকানা (Tomar Thikana) - Handmade Resin Jewelry, Custom Gifts | Dhaka, Bangladesh",
    template: "%s | তোমার ঠিকানা - Handmade Jewelry & Gifts Bangladesh",
  },
  description:
    "Shop 118+ handmade resin jewelry items in Bangladesh: jhumka earrings (৳120-990), preserved flower pendants, custom photo frames, personalized gifts. হাতে তৈরি গয়না, রেজিন জুয়েলারি, কাস্টম গিফট। Free delivery in Dhaka.",
  keywords: [
    "handmade jewelry Bangladesh",
    "resin jewelry Dhaka",
    "jhumka design Bangladesh",
    "হাতে তৈরি গয়না বাংলাদেশ",
    "রেজিন জুয়েলারি ঢাকা",
    "জুমকা ডিজাইন",
    "custom gift Dhaka",
    "কাস্টম গিফট ঢাকা",
    "preserved flower jewelry",
    "wedding jewelry Bangladesh",
    "বিয়ের গহনা",
    "personalized gifts Bangladesh",
    "photo frame customize",
    "handmade earrings Dhaka",
    "aesthetic jewelry Bangladesh",
  ],
  authors: [{ name: "তোমার ঠিকানা (Tomar Thikana)" }],
  creator: "তোমার ঠিকানা",
  publisher: "তোমার ঠিকানা",
  openGraph: {
    type: "website",
    locale: "en_BD",
    alternateLocale: ["bn_BD"],
    url: SITE_URL,
    siteName: "তোমার ঠিকানা - Tomar Thikana",
    title: "তোমার ঠিকানা - Handmade Resin Jewelry & Custom Gifts | Bangladesh",
    description:
      "Handmade resin jewelry, jhumka earrings, preserved flower pendants, custom gifts in Dhaka, Bangladesh. হাতে তৈরি গয়না, রেজিন জুয়েলারি। ৳80-৳1000",
    images: [
      {
        url: "/assets/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tomar Thikana - Handmade Resin Jewelry and Gifts Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "তোমার ঠিকানা - Handmade Resin Jewelry & Custom Gifts | Bangladesh",
    description:
      "Shop handmade resin jewelry, jhumka earrings, preserved flower pendants, custom gifts. হাতে তৈরি গয়না, রেজিন জুয়েলারি। ৳80-৳1000",
    images: ["/assets/hero-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en-BD">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={generateJsonLd(organizationSchema)}
          key="organization-jsonld"
        />
      </head>
      <body>
        <GoogleAnalytics measurementId="G-32CSH1ELTB" />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
