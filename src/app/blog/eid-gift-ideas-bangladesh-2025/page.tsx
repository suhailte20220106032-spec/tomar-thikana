/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, Gift, Sparkles, Heart, ShoppingBag, ChevronRight, Star, MessageCircle, ListChecks, BadgePercent, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "50+ Eid Gift Ideas in Bangladesh 2025 (৳80-৳1000) | তোমার ঠিকানা",
  description: "50+ Eid gift ideas Bangladesh 2025 (৳80-৳1000). Handmade resin jewelry, personalized keychains, pendants, photo frames & more with free Dhaka delivery.",
  keywords: [
    "eid gift ideas Bangladesh",
    "eid gifts bd",
    "handmade eid gifts",
    "personalized eid gifts",
    "eid gifts for wife",
    "eid gifts for mother",
    "eid gifts for sister",
    "eid gifts for friend",
  ],
  openGraph: {
    title: "50+ Eid Gift Ideas in Bangladesh 2025 (৳80-৳1000)",
    description: "Discover 50+ unique handmade Eid gift ideas for every budget in Bangladesh.",
    images: ["/assets/products/keychain/390tk/floral keychains/main.jpg"],
  },
};

export default function EidGiftIdeasPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-background to-card">
        <article className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-2xl shadow-soft overflow-hidden border border-border">
            {/* Hero */}
            <div className="relative h-[380px] w-full">
              <Image
                src="/assets/products/keychain/390tk/floral keychains/main.jpg"
                alt="Eid Gift Ideas Bangladesh 2025"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white w-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary rounded-full text-sm font-semibold text-primary-foreground">Eid 2025</span>
                    <span className="px-3 py-1 bg-accent rounded-full text-sm font-semibold text-accent-foreground">Gift Guide</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-3 font-display text-white">
                    50+ Eid Gift Ideas in Bangladesh 2025 (৳80-৳1000)
                  </h1>
                  <p className="text-xl text-white/90 font-bengali">৫০+ ঈদের উপহার আইডিয়া বাংলাদেশ ২০২৫</p>
                </div>
              </div>
            </div>

            {/* Meta */}
            <div className="px-8 py-6 bg-secondary/30 border-b border-border">
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><User className="w-4 h-4 text-primary" /><span>তোমার ঠিকানা Team</span></div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /><span>February 10, 2025</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /><span>9 min read</span></div>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 py-12 prose prose-lg max-w-none">
              {/* Intro */}
              <section className="mb-12">
                <p className="text-xl leading-relaxed mb-6">
                  Looking for <strong>Eid gift ideas in Bangladesh 2025</strong>? This curated guide gives you 50+ unique, meaningful, and budget-friendly gifts ranging from <strong>৳80 to ৳1000</strong>. Whether you need a thoughtful gift for your wife, mother, sister, husband, friends, colleagues, or children—this list covers handmade, personalized, and premium options from <strong>তোমার ঠিকানা</strong>, Bangladesh's leading handmade resin jewelry & gift shop with <strong>free delivery in Dhaka</strong>.
                </p>
                <div className="bg-secondary/40 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                  <p className="mb-2"><strong className="text-primary">Quick Overview:</strong> Budget gifts start at ৳80 (keychains), personalized pendants at ৳290, premium floral jewelry at ৳500-৳990, and luxury photo frames at ৳1000. All items are handmade & customizable.</p>
                  <p className="text-sm text-muted-foreground">Tip: Order <strong>10–15 days before Eid</strong> to guarantee stock & custom personalization.</p>
                </div>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  <li>Gift ideas organized by price & recipient category</li>
                  <li>Handmade, personalized & locally crafted options</li>
                  <li>Combo suggestions to save money</li>
                  <li>Delivery & customization tips</li>
                  <li>FAQ section for common Eid gift questions</li>
                </ul>
                <p className="text-muted-foreground">All gifts featured are available from <strong>তোমার ঠিকানা</strong>—trusted by 200+ customers for premium resin craftsmanship.</p>
              </section>

              {/* Price Range */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3 font-display"><BadgePercent className="w-8 h-8 text-primary" /> Eid Gifts by Price Range</h2>
                <p className="text-muted-foreground mb-6">Choose gifts based on your Eid budget. These curated lists maximize value while keeping emotional impact high.</p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-card border-2 border-border rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">Under ৳200</div>
                    <ul className="text-sm text-muted-foreground space-y-2 text-left">
                      <li>• Personalized keychains (৳80-৳150)</li>
                      <li>• Mini floral earrings (৳120)</li>
                      <li>• Bookmarks (৳99-৳199)</li>
                      <li>• Eid themed charms</li>
                    </ul>
                    <Link href="/products?category=keychain" className="inline-block mt-4 text-sm text-primary hover:underline">Browse Budget Gifts →</Link>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary rounded-xl p-6 text-center relative overflow-hidden">
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">Most Popular</div>
                    <div className="text-2xl font-bold text-primary mb-2">৳200-৳500</div>
                    <ul className="text-sm text-muted-foreground space-y-2 text-left">
                      <li>• Flower pendants (৳290-৳390)</li>
                      <li>• Mid-range resin earrings (৳300-৳500)</li>
                      <li>• Combo: Keychain + Pendant</li>
                      <li>• Personalized initial jewelry</li>
                    </ul>
                    <Link href="/products?category=pendant" className="inline-block mt-4 text-sm text-primary hover:underline">Shop Mid-Range →</Link>
                  </div>
                  <div className="bg-card border-2 border-border rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">৳500-৳1000</div>
                    <ul className="text-sm text-muted-foreground space-y-2 text-left">
                      <li>• Premium floral jhumka (৳500-৳990)</li>
                      <li>• Luxury photo frames (৳500-৳1000)</li>
                      <li>• High-end gift bundle sets</li>
                      <li>• Custom preserved-flower sets</li>
                    </ul>
                    <Link href="/products?category=earrings&priceMin=500" className="inline-block mt-4 text-sm text-primary hover:underline">View Premium →</Link>
                  </div>
                </div>
                <div className="bg-secondary/30 border border-border rounded-lg p-6">
                  <h3 className="font-bold mb-3 flex items-center gap-2"><Gift className="w-5 h-5 text-primary" /> Smart Eid Budget Strategy</h3>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                    <li><strong>Family (Primary):</strong> Allocate 50% of budget (pendants, earrings, photo frames)</li>
                    <li><strong>Friends & Colleagues:</strong> 30% (keychains, bookmarks, small combos)</li>
                    <li><strong>Children:</strong> 10% (colorful keychains, mini charms)</li>
                    <li><strong>Emergency / Last Minute:</strong> 10% (ready stock items)</li>
                  </ul>
                </div>
              </section>

              {/* Gifts by Recipient */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3 font-display"><Heart className="w-8 h-8 text-primary" /> Eid Gift Ideas by Recipient</h2>
                <p className="text-muted-foreground mb-8">Match gifts to who you're buying for. Personalization and preserved flower themes create emotional impact—perfect for Eid.</p>
                <div className="space-y-8">
                  <div className="bg-card border-2 border-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">For Wife / Fiancée</h3>
                    <p className="text-sm text-muted-foreground mb-3">Romantic and premium pieces she can wear after Eid too.</p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Premium Black Floral Jhumka (৳990)</li>
                      <li>Preserved Rose Pendant (৳390)</li>
                      <li>Luxury Photo Frame with Couple Photo (৳1000)</li>
                      <li>Golden Floral Jhumka (৳500)</li>
                      <li>Combo: Pendant + Jhumka + Keychain (৳1500 total)</li>
                    </ul>
                  </div>
                  <div className="bg-card border-2 border-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">For Mother</h3>
                    <p className="text-sm text-muted-foreground mb-3">Elegant, meaningful, and practical gifts showing gratitude.</p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Classic Golden Floral Pendant (৳390)</li>
                      <li>Silver Rose Jhumka (৳500)</li>
                      <li>Personalized Name Keychain (৳120)</li>
                      <li>Bookmark + Pendant Combo (৳500)</li>
                      <li>Photo Frame (Family Portrait) (৳1000)</li>
                    </ul>
                  </div>
                  <div className="bg-card border-2 border-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">For Sister</h3>
                    <p className="text-sm text-muted-foreground mb-3">Trendy and colorful designs to match festive outfits.</p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Purple Rose Jhumka (৳500)</li>
                      <li>Pink Floral Designer Jhumka (৳990)</li>
                      <li>Initial Pendant (৳290)</li>
                      <li>Floral Keychain (৳150)</li>
                      <li>Mini Earrings Set (৳300)</li>
                    </ul>
                  </div>
                  <div className="bg-card border-2 border-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">For Husband / Brother</h3>
                    <p className="text-sm text-muted-foreground mb-3">Functional yet personalized gifts.</p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Personalized Initial Keychain (৳120)</li>
                      <li>Dual-Side Premium Keychain (৳390)</li>
                      <li>Bookmark + Keychain Combo (৳450)</li>
                      <li>Photo Frame (৳500-৳1000)</li>
                      <li>Resin Desk Decor (Custom) (৳700)</li>
                    </ul>
                  </div>
                  <div className="bg-card border-2 border-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">For Friends</h3>
                    <p className="text-sm text-muted-foreground mb-3">Affordable but thoughtful—ideal for group gifting.</p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Friendship Floral Keychain (৳150)</li>
                      <li>Matching Mini Earrings Pair (৳240)</li>
                      <li>Customized Initial Pendant (৳290)</li>
                      <li>Gift Bundle (Keychain + Pendant) (৳480)</li>
                      <li>Small Photo Frame (৳500)</li>
                    </ul>
                  </div>
                  <div className="bg-card border-2 border-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">For Colleagues</h3>
                    <p className="text-sm text-muted-foreground mb-3">Professional yet festive.</p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Minimal Floral Pendant (৳290)</li>
                      <li>Name Keychain (৳120)</li>
                      <li>Bookmark (৳99)</li>
                      <li>Corporate Appreciation Combo (৳400)</li>
                      <li>Desk Mini Photo Frame (৳500)</li>
                    </ul>
                  </div>
                  <div className="bg-card border-2 border-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">For Children</h3>
                    <p className="text-sm text-muted-foreground mb-3">Colorful & safe resin gifts.</p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Alphabet Keychain (৳80)</li>
                      <li>Color Glitter Pendant (৳290)</li>
                      <li>Name Bookmark (৳199)</li>
                      <li>Mini Charm Set (৳250)</li>
                      <li>Gift Bundle (Keychain + Bookmark) (৳280)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Highlighted Handmade Categories */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3 font-display"><Sparkles className="w-8 h-8 text-primary" /> Top Handmade Eid Gift Categories</h2>
                <p className="text-muted-foreground mb-6">These categories dominate Eid gifting demand in 2025—high emotional value, personalized, and reusable. Perfect for memorable exchanges.</p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card border-2 border-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">Resin Pendants (৳290-৳499)</h3>
                    <p className="text-sm text-muted-foreground mb-3">Preserved flowers + initial customization. Light, elegant & meaningful.</p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Rose Pendant (৳390)</li>
                      <li>Golden Floral Pendant (৳390)</li>
                      <li>Initial Monogram (৳290)</li>
                      <li>Couple Pendant (৳499)</li>
                    </ul>
                    <Link href="/products?category=pendant" className="inline-flex items-center mt-4 text-sm text-primary hover:underline">Browse Pendants <ChevronRight className="w-4 h-4 ml-1" /></Link>
                  </div>
                  <div className="bg-card border-2 border-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">Resin Earrings (৳120-৳990)</h3>
                    <p className="text-sm text-muted-foreground mb-3">From budget studs to premium jhumka—versatile festive styling.</p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Mini Floral Earrings (৳120)</li>
                      <li>Golden Floral Jhumka (৳500)</li>
                      <li>Purple Rose Jhumka (৳500)</li>
                      <li>Black Floral Luxury Jhumka (৳990)</li>
                    </ul>
                    <Link href="/products?category=earrings" className="inline-flex items-center mt-4 text-sm text-primary hover:underline">Browse Earrings <ChevronRight className="w-4 h-4 ml-1" /></Link>
                  </div>
                  <div className="bg-card border-2 border-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">Personalized Keychains (৳80-৳390)</h3>
                    <p className="text-sm text-muted-foreground mb-3">Best-selling budget Eid gifts—names, initials, dual-side designs.</p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Alphabet Initial (৳80)</li>
                      <li>Name Tag (৳120)</li>
                      <li>Floral Keychain (৳150)</li>
                      <li>Dual Side Premium (৳390)</li>
                    </ul>
                    <Link href="/products?category=keychain" className="inline-flex items-center mt-4 text-sm text-primary hover:underline">Browse Keychains <ChevronRight className="w-4 h-4 ml-1" /></Link>
                  </div>
                  <div className="bg-card border-2 border-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">Photo Frames (৳500-৳1000)</h3>
                    <p className="text-sm text-muted-foreground mb-3">High emotional impact—preserve milestone memories of family & friendship.</p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Standard Floral Frame (৳500)</li>
                      <li>Couple Memory Frame (৳750)</li>
                      <li>Premium Luxury Frame (৳1000)</li>
                      <li>Custom Layout (৳1000+)</li>
                    </ul>
                    <Link href="/products?category=photoframe" className="inline-flex items-center mt-4 text-sm text-primary hover:underline">Browse Frames <ChevronRight className="w-4 h-4 ml-1" /></Link>
                  </div>
                </div>
                <div className="bg-accent/20 border border-accent rounded-lg p-6">
                  <h3 className="font-bold mb-2 flex items-center gap-2"><Star className="w-5 h-5 text-primary" /> Combo Recommendations</h3>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                    <li><strong>Romantic Set:</strong> Pendant + Premium Jhumka + Frame (৳1000-৳2300)</li>
                    <li><strong>Budget Friendship:</strong> 3 Floral Keychains + 2 Mini Earrings (৳840)</li>
                    <li><strong>Family Pack:</strong> 2 Pendants + 2 Keychains + Frame (৳1500-৳1900)</li>
                    <li><strong>Corporate Appreciation:</strong> 10 Name Keychains (Bulk discount possible)</li>
                  </ul>
                </div>
              </section>

              {/* Custom & Delivery */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3 font-display"><ListChecks className="w-8 h-8 text-primary" /> Customization & Delivery Tips</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-secondary/30 p-6 rounded-xl border border-border">
                    <h3 className="font-bold mb-3">Customization Options</h3>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                      <li>Names / Initials (FREE for keychains)</li>
                      <li>Couple / Family photos (frames)</li>
                      <li>Flower color matching (pendants)</li>
                      <li>Dual-layer preserved elements</li>
                      <li>Gift packaging & Eid message card</li>
                    </ul>
                  </div>
                  <div className="bg-secondary/30 p-6 rounded-xl border border-border">
                    <h3 className="font-bold mb-3">Delivery Timeline</h3>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                      <li>Ready Stock: 24h inside Dhaka</li>
                      <li>Custom Pendant: 2-3 days</li>
                      <li>Premium Frame: 3-5 days</li>
                      <li>Bulk Corporate: 5-7 days</li>
                      <li>Outside Dhaka: Add 1-2 days</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-primary/10 border border-primary rounded-lg p-6">
                  <h3 className="font-bold mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Ordering Strategy</h3>
                  <p className="text-sm text-muted-foreground">Finalize your gift list early. Place custom orders first (pendants, frames), then bulk small gifts 7–10 days before Eid. Always confirm spelling for personalized items.</p>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Make Eid 2025 Memorable with Meaningful Gifts</h2>
                <p className="text-muted-foreground mb-4">From <strong>৳80 keychains</strong> to <strong>৳1000 premium frames</strong>, these <strong>Eid gift ideas</strong> balance emotion, personalization, and value. Handmade resin pieces from তোমার ঠিকানা stand out in a sea of generic gifts—lasting long after Eid celebrations end.</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  <li><strong>Locally handmade, not mass-produced</strong></li>
                  <li><strong>Customization builds emotional connection</strong></li>
                  <li><strong>Affordable pricing with premium look</strong></li>
                  <li><strong>Free Dhaka delivery saves cost</strong></li>
                  <li><strong>Reusable fashion & decor items</strong></li>
                </ul>
                <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 font-display">Ready to Start Eid Shopping?</h3>
                  <p className="mb-6 text-primary-foreground/90">Browse 118+ handmade gifts or request fully personalized Eid designs. Limited premium stock—order early!</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/products" className="inline-flex items-center px-8 py-4 bg-card text-foreground font-bold rounded-lg hover:bg-secondary transition-colors shadow-lg"><ShoppingBag className="w-5 h-5 mr-2" /> Browse All Gifts</Link>
                    <Link href="/custom-order" className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent/90 transition-colors shadow-lg"><MessageCircle className="w-5 h-5 mr-2" /> Request Custom Design</Link>
                  </div>
                </div>
              </section>

              {/* Related */}
              <section className="mt-12 pt-8 border-t-2 border-border">
                <h3 className="text-xl font-bold mb-4">Related Guides:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link href="/blog/resin-jewelry-price-bangladesh-2025" className="block p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-border">
                    <h4 className="font-semibold text-primary mb-2">Resin Jewelry Price Guide</h4>
                    <p className="text-sm text-muted-foreground">Pricing breakdown (৳80-৳1000)</p>
                  </Link>
                  <Link href="/blog/jhumka-designs-bengali-weddings-2025" className="block p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-border">
                    <h4 className="font-semibold text-primary mb-2">Wedding Jhumka Designs</h4>
                    <p className="text-sm text-muted-foreground">Top 10 designs for 2025</p>
                  </Link>
                  <Link href="/blog/preserved-flower-jewelry-guide-bangladesh" className="block p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-border">
                    <h4 className="font-semibold text-primary mb-2">Preserved Flower Jewelry</h4>
                    <p className="text-sm text-muted-foreground">How resin preservation works</p>
                  </Link>
                </div>
              </section>

            </div>
          </div>

          {/* JSON-LD Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "50+ Eid Gift Ideas in Bangladesh 2025 (৳80-৳1000)",
                "description": "Discover 50+ Eid gift ideas across budgets (৳80-৳1000): handmade resin jewelry, personalized pendants, keychains, photo frames.",
                "image": "https://tomar-thikana.vercel.app/assets/products/keychain/390tk/floral keychains/main.jpg",
                "author": {"@type": "Organization", "name": "তোমার ঠিকানা"},
                "publisher": {"@type": "Organization", "name": "তোমার ঠিকানা", "logo": {"@type": "ImageObject", "url": "https://tomar-thikana.vercel.app/logo.png"}},
                "datePublished": "2025-02-10",
                "dateModified": "2025-02-10"
              })
            }}
          />
          {/* ItemList Schema for Gift Categories */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "Top Eid Gift Categories 2025",
                "itemListElement": [
                  {"@type": "ListItem", "position": 1, "name": "Personalized Keychains", "url": "https://tomar-thikana.vercel.app/products?category=keychain"},
                  {"@type": "ListItem", "position": 2, "name": "Preserved Flower Pendants", "url": "https://tomar-thikana.vercel.app/products?category=pendant"},
                  {"@type": "ListItem", "position": 3, "name": "Premium Floral Jhumka", "url": "https://tomar-thikana.vercel.app/products?category=earrings"},
                  {"@type": "ListItem", "position": 4, "name": "Luxury Photo Frames", "url": "https://tomar-thikana.vercel.app/products?category=photoframe"},
                  {"@type": "ListItem", "position": 5, "name": "Bookmarks", "url": "https://tomar-thikana.vercel.app/products?category=others"},
                  {"@type": "ListItem", "position": 6, "name": "Combo Gift Sets", "url": "https://tomar-thikana.vercel.app/products"},
                  {"@type": "ListItem", "position": 7, "name": "Children's Alphabet Keychains", "url": "https://tomar-thikana.vercel.app/products?category=keychain"},
                  {"@type": "ListItem", "position": 8, "name": "Initial Monogram Pendants", "url": "https://tomar-thikana.vercel.app/products?category=pendant"},
                  {"@type": "ListItem", "position": 9, "name": "Corporate Appreciation Gifts", "url": "https://tomar-thikana.vercel.app/products"},
                  {"@type": "ListItem", "position": 10, "name": "Romantic Couple Frames", "url": "https://tomar-thikana.vercel.app/products?category=photoframe"}
                ]
              })
            }}
          />
          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {"@type": "Question", "name": "What are the best Eid gifts under ৳200?", "acceptedAnswer": {"@type": "Answer", "text": "Under ৳200 you can gift personalized keychains (৳80-৳150), mini floral earrings (৳120), and bookmarks (৳99-৳199). These are affordable yet meaningful handmade items."}},
                  {"@type": "Question", "name": "What are premium Eid gift ideas for wife in Bangladesh?", "acceptedAnswer": {"@type": "Answer", "text": "Premium Eid gifts include Black Floral Luxury Jhumka (৳990), preserved rose pendant (৳390), and a customized luxury photo frame (৳1000). Combo bundles create extra emotional value."}},
                  {"@type": "Question", "name": "Where can I buy personalized Eid gifts in Dhaka?", "acceptedAnswer": {"@type": "Answer", "text": "তোমার ঠিকানা offers personalized resin pendants, keychains, frames, and combos with free Dhaka delivery. Names, initials, photos, and flower colors can be customized."}},
                  {"@type": "Question", "name": "How early should I order Eid gifts in 2025?", "acceptedAnswer": {"@type": "Answer", "text": "Order 10–15 days before Eid for custom items. Ready stock (keychains, basic pendants) can be delivered within 24 hours inside Dhaka, but premium frames and large combos require 3–5 days."}},
                  {"@type": "Question", "name": "Are handmade resin gifts durable?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Quality resin jewelry and decor from তোমার ঠিকানা use UV-resistant epoxy resin lasting 3–5+ years with proper care. They do not tarnish like metal or fade quickly."}}
                ]
              })
            }}
          />
        </article>
      </div>
    </>
  );
}
