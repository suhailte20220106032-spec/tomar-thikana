import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Home - Handmade Resin Jewelry & Custom Gifts",
  description:
    "Browse 118+ handmade resin jewelry items: jhumka earrings, preserved flower pendants, photo frames, keychains, and custom gifts in Bangladesh. হাতে তৈরি গয়না, জুমকা, কাস্টম গিফট। ৳80-৳1000. Free delivery in Dhaka.",
  keywords: [
    "handmade jewelry Bangladesh",
    "resin jewelry Dhaka",
    "jhumka design",
    "preserved flower jewelry",
    "custom gift Bangladesh",
    "হাতে তৈরি গয়না",
    "রেজিন জুয়েলারি",
    "জুমকা",
    "কাস্টম গিফট",
  ],
  openGraph: {
    title: "তোমার ঠিকানা - Handmade Resin Jewelry & Custom Gifts | Bangladesh",
    description:
      "Browse 118+ handmade resin jewelry items: jhumka earrings, preserved flower pendants, custom gifts. হাতে তৈরি গয়না। ৳80-৳1000",
    images: ["/assets/hero-image.jpg"],
  },
  alternates: {
    canonical: "https://tomar-thikana.vercel.app",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <FeaturedProductsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
