import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog - Jewelry Tips & Guides | তোমার ঠিকানা",
  description: "Expert guides on handmade jewelry, resin crafts, gift ideas, and Bengali wedding jewelry. Tips from Dhaka's premier handmade jewelry shop.",
  keywords: [
    "jewelry blog Bangladesh",
    "resin jewelry tips",
    "wedding jewelry guide",
    "handmade jewelry tips",
    "gift ideas Bangladesh",
    "jewelry care guide",
  ],
  openGraph: {
    title: "Blog - Jewelry Tips & Guides | তোমার ঠিকানা",
    description: "Expert guides on handmade jewelry, resin crafts, gift ideas, and Bengali wedding jewelry.",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
