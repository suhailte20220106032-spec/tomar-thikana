/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, MapPin, Store, ShoppingBag, BadgePercent, CheckCircle2, AlertCircle, Star, TrendingUp, Award, Truck, Layers, MessageCircle, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "10 Best Handmade Gift Shops in Dhaka 2025 [Ultimate Guide] | তোমার ঠিকানা",
  description: "10 best handmade gift shops in Dhaka 2025. Compare specialties, prices, delivery options & customization. Resin jewelry, crafts, boutique gifts & more.",
  keywords: [
    "handmade gift shop Dhaka",
    "gift shops in Dhaka",
    "handmade jewelry shop Bangladesh",
    "craft shops Dhaka",
    "best gift shop Dhaka",
    "resin jewelry Dhaka",
  ],
  openGraph: {
    title: "10 Best Handmade Gift Shops in Dhaka 2025 [Ultimate Guide]",
    description: "Compare Dhaka's top handmade gift shops: pricing, customization, delivery, pros & cons.",
    images: ["/assets/products/photoframe/1000tk/IMG-20240119-WA0000.jpg"],
  },
};

interface ShopEntry {
  name: string;
  area: string;
  priceRange: string;
  specialty: string;
  delivery: string;
  customization: string;
  rating: string;
  pros: string[];
  cons: string[];
}

const shops: ShopEntry[] = [
  {
    name: "তোমার ঠিকানা (Tomar Thikana)",
    area: "Online / Dhaka-wide",
    priceRange: "৳80-৳1000",
    specialty: "Resin jewelry, preserved flower gifts, custom photo frames",
    delivery: "Free inside Dhaka (24h ready stock)",
    customization: "Names, initials, colors, photos, bouquet preservation",
    rating: "4.8/5",
    pros: ["Largest verified resin collection", "Transparent pricing", "Fast free delivery", "Custom orders supported"],
    cons: ["Premium slots limited (book early)"]
  },
  {
    name: "Aarong",
    area: "Multiple outlets (Dhanmondi, Uttara, Gulshan)",
    priceRange: "৳250-৳4000+",
    specialty: "Traditional crafts, ethnic apparel, decor",
    delivery: "Paid courier / in-store shopping",
    customization: "Minimal (standard products)",
    rating: "4.6/5",
    pros: ["Brand trust", "High quality curation", "Great packaging"],
    cons: ["Higher price premium", "Limited personalization"]
  },
  {
    name: "Jatra Biroti",
    area: "Dhanmondi",
    priceRange: "৳200-৳3000",
    specialty: "Artisanal folk crafts, boho gifts",
    delivery: "Pickup / limited delivery",
    customization: "Not typical",
    rating: "4.4/5",
    pros: ["Authentic styling", "Unique folk aesthetics"],
    cons: ["Less functional gifts", "No rapid delivery"]
  },
  {
    name: "ArtsyCraft BD",
    area: "Online",
    priceRange: "৳150-৳1500",
    specialty: "Hand-painted decor, custom art plaques",
    delivery: "Courier (paid)",
    customization: "Design themes & names",
    rating: "4.5/5",
    pros: ["Creative artwork", "Mid-range pricing"],
    cons: ["Slower custom turnaround"]
  },
  {
    name: "Crafts by Nusrat",
    area: "Online / Social media",
    priceRange: "৳120-৳1200",
    specialty: "Polymer clay charms, keychains, miniature sets",
    delivery: "Courier (paid)",
    customization: "Character themes, names",
    rating: "4.3/5",
    pros: ["Cute aesthetics", "Good for kids/teens"],
    cons: ["Fragile miniatures", "Variable consistency"]
  },
  {
    name: "Paper Mint Studio",
    area: "Online",
    priceRange: "৳250-৳2500",
    specialty: "Handmade stationery, journals, memory books",
    delivery: "Courier (paid)",
    customization: "Names, cover themes",
    rating: "4.5/5",
    pros: ["Giftable packaging", "Keepsake value"],
    cons: ["Stock-based drops", "Higher notebook pricing"]
  },
  {
    name: "Resin Dreams BD",
    area: "Online",
    priceRange: "৳150-৳900",
    specialty: "Mixed resin coasters, trays, basic jewelry",
    delivery: "Courier (paid)",
    customization: "Color combos, glitter style",
    rating: "4.2/5",
    pros: ["Good variety", "Entry-level pricing"],
    cons: ["Less premium finish", "Limited floral work"]
  },
  {
    name: "GiftKart Dhaka",
    area: "Online aggregator",
    priceRange: "৳200-৳3500",
    specialty: "Mixed curated gifts (mugs, frames, custom prints)",
    delivery: "Courier (paid)",
    customization: "Print-based personalization",
    rating: "4.1/5",
    pros: ["One-stop bundle options", "Corporate gifting"],
    cons: ["Generic imports", "Quality variance"]
  },
  {
    name: "Clay & Bloom",
    area: "Online / occasional pop-ups",
    priceRange: "৳180-৳1800",
    specialty: "Pressed flowers + polymer clay fusion pieces",
    delivery: "Courier (paid)",
    customization: "Color palette & initials",
    rating: "4.4/5",
    pros: ["Hybrid designs", "Aesthetic Instagram presence"],
    cons: ["Inconsistent stock", "Longer pre-order window"]
  },
  {
    name: "Local Artisans (Facebook Groups)",
    area: "Various",
    priceRange: "৳100-৳900",
    specialty: "Wide range - variable quality",
    delivery: "Negotiated / courier",
    customization: "Depends on seller",
    rating: "3.8/5",
    pros: ["Low pricing", "Direct communication"],
    cons: ["Risk of inconsistency", "No guarantee policies"]
  }
];

export default function GiftShopsGuidePage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-background to-card">
        <article className="container mx-auto px-4 max-w-5xl">
          <div className="bg-card rounded-2xl shadow-soft overflow-hidden border border-border">
            {/* Hero */}
            <div className="relative h-[400px] w-full">
              <Image
                src="/assets/products/photoframe/1000tk/IMG-20240119-WA0000.jpg"
                alt="Handmade Gift Shops Dhaka Guide"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white w-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary rounded-full text-sm font-semibold text-primary-foreground">Shopping Guide</span>
                    <span className="px-3 py-1 bg-accent rounded-full text-sm font-semibold text-accent-foreground">Dhaka 2025</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl text-white font-bold mb-3 font-display">10 Best Handmade Gift Shops in Dhaka 2025</h1>
                  <p className="text-xl text-white/90 font-bengali">ঢাকার সেরা হাতে তৈরি গিফট শপ ২০২৫</p>
                </div>
              </div>
            </div>
            {/* Meta */}
            <div className="px-8 py-6 bg-secondary/30 border-b border-border">
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><User className="w-4 h-4 text-primary" /><span>তোমার ঠিকানা Team</span></div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /><span>January 30, 2025</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /><span>11 min read</span></div>
              </div>
            </div>
            {/* Content */}
            <div className="px-8 py-12 prose prose-lg max-w-none">
              {/* Intro */}
              <section className="mb-12">
                <p className="text-xl leading-relaxed mb-6">Searching for the <strong>best handmade gift shops in Dhaka (2025)</strong>? This ultimate guide compares <strong>10 top places</strong> for meaningful, locally crafted gifts—covering pricing, customization, delivery, strengths, and weaknesses. From premium <strong>resin jewelry</strong> and <strong>preserved flower frames</strong> to clay miniatures and handmade stationery, discover where to shop smartly based on purpose and budget.</p>
                <div className="bg-secondary/40 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                  <p className="mb-2"><strong className="text-primary">Fast Snapshot:</strong> Budget (৳100-৳400): keychains, bookmarks. Mid-range (৳400-৳900): pendants, floral earrings, clay decor. Premium (৳900-৳3000+): photo frames, curated gift bundles, boutique handcrafts.</p>
                  <p className="text-sm text-muted-foreground">Tip: Prioritize <strong>customizable handmade items</strong> for emotional impact—names, initials, meaningful flowers, or photos.</p>
                </div>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  <li>Transparent shop comparison table</li>
                  <li>Pros & cons of each store</li>
                  <li>Best gifts by occasion & budget</li>
                  <li>Dhaka delivery considerations</li>
                  <li>FAQ on choosing handmade shops</li>
                </ul>
                <p className="text-muted-foreground">We advocate for supporting <strong>local artisans</strong> while ensuring you receive durable, high-quality gifts—especially for milestone events (Eid, anniversaries, weddings).</p>
              </section>
              {/* Comparison Table */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3 font-display"><Store className="w-8 h-8 text-primary" /> Comparison: Dhaka Handmade Gift Shops</h2>
                <div className="overflow-x-auto rounded-xl border border-border mb-6">
                  <table className="w-full text-sm">
                    <thead className="bg-primary/10">
                      <tr>
                        <th className="px-4 py-3 text-left">Shop</th>
                        <th className="px-4 py-3 text-left">Area</th>
                        <th className="px-4 py-3 text-left">Price</th>
                        <th className="px-4 py-3 text-left">Specialty</th>
                        <th className="px-4 py-3 text-left">Delivery</th>
                        <th className="px-4 py-3 text-left">Customization</th>
                      </tr>
                    </thead>
                    <tbody>
                      {shops.map(s => (
                        <tr key={s.name} className="border-t hover:bg-secondary/30">
                          <td className="px-4 py-3 font-semibold">{s.name}</td>
                          <td className="px-4 py-3">{s.area}</td>
                          <td className="px-4 py-3">{s.priceRange}</td>
                          <td className="px-4 py-3">{s.specialty}</td>
                          <td className="px-4 py-3">{s.delivery}</td>
                          <td className="px-4 py-3">{s.customization}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-secondary/30 border border-border rounded-lg p-6">
                  <h3 className="font-bold mb-2 flex items-center gap-2"><BadgePercent className="w-5 h-5 text-primary" /> Pricing Insight</h3>
                  <p className="text-sm text-muted-foreground">Boutique outlets (Aarong, Jatra) carry a ~40–70% markup vs direct artisan brands like তোমার ঠিকানা or specialized online makers—especially for decor & accessory items.</p>
                </div>
              </section>
              {/* Highlight Tomar Thikana */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Why তোমার ঠিকানা Leads 2025 Handmade Gifting</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><Star className="w-6 h-6 text-primary" /> Strengths</h3>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                      <li>118+ verified handmade products</li>
                      <li>Resin + preserved flower craftsmanship</li>
                      <li>Free 24h Dhaka delivery (ready stock)</li>
                      <li>Customization without excessive surcharge</li>
                      <li>Eco-conscious small-batch production</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-destructive" /> Limitations</h3>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                      <li>Premium custom slots limited weekly</li>
                      <li>Not a physical showroom (online-first)</li>
                      <li>High-demand items sell out near Eid</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-primary/10 border border-primary rounded-lg p-6">
                  <h3 className="font-bold mb-2 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary" /> 2025 Growth Focus</h3>
                  <p className="text-sm text-muted-foreground">Expanding preserved bouquet service, faster outside-Dhaka logistics & curated combo gift sets for weddings and Eid.</p>
                </div>
              </section>
              {/* Individual Shop Notes */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Shop-by-Shop Breakdown</h2>
                <div className="space-y-6">
                  {shops.map(shop => (
                    <div key={shop.name} className="bg-card border-2 border-border rounded-xl p-6">
                      <div className="flex flex-wrap justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{shop.name}</h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1"><MapPin className="w-4 h-4" /> {shop.area}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold">Price: {shop.priceRange}</p>
                          <p className="text-xs text-muted-foreground">Rating: {shop.rating}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3"><strong>Specialty:</strong> {shop.specialty}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary/30 p-4 rounded-lg">
                          <p className="font-semibold mb-2 flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary" /> Pros</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {shop.pros.map(p => <li key={p}>• {p}</li>)}
                          </ul>
                        </div>
                        <div className="bg-secondary/30 p-4 rounded-lg">
                          <p className="font-semibold mb-2 flex items-center gap-1"><AlertCircle className="w-4 h-4 text-destructive" /> Cons</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {shop.cons.map(c => <li key={c}>• {c}</li>)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              {/* Best Gifts by Occasion */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Best Handmade Gifts by Occasion</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2">Eid / Festivals</h3>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                      <li>Personalized keychains (৳80-৳150)</li>
                      <li>Floral pendants (৳290-৳390)</li>
                      <li>Budget gift bundles (৳500)</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2">Anniversaries</h3>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                      <li>Preserved flower photo frame (৳750-৳1000)</li>
                      <li>Couple resin pendant (৳499)</li>
                      <li>Premium jhumka + pendant set (৳1390)</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2">Corporate / Appreciation</h3>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                      <li>Branded keychains (bulk)</li>
                      <li>Desk mini frame (৳500)</li>
                      <li>Custom notebook + bookmark set</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2">Wedding / Engagement</h3>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                      <li>Bridal preserved bouquet piece</li>
                      <li>Black floral luxury jhumka (৳990)</li>
                      <li>Memory frame + jewelry combo</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-accent/20 border border-accent rounded-lg p-6">
                  <h3 className="font-bold mb-2 flex items-center gap-2"><Award className="w-5 h-5 text-primary" /> High-Impact Combo Idea</h3>
                  <p className="text-sm text-muted-foreground">Frame (৳750) + Pendant (৳390) + Keychain (৳120) = ৳1260 total — covers memory, wearable, daily utility in one curated set.</p>
                </div>
              </section>
              {/* Delivery & Customization */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Delivery & Customization Checklist</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-secondary/30 p-6 rounded-xl border border-border">
                    <h3 className="font-bold mb-3 flex items-center gap-2"><Truck className="w-5 h-5 text-primary" /> Delivery Expectations</h3>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                      <li>Ready stock: 24h Dhaka (তোমার ঠিকানা)</li>
                      <li>Custom resin: 2–5 days</li>
                      <li>Boutique pickup: same day</li>
                      <li>Bulk corporate: 5–7 days</li>
                      <li>Outside Dhaka: +1–2 days transit</li>
                    </ul>
                  </div>
                  <div className="bg-secondary/30 p-6 rounded-xl border border-border">
                    <h3 className="font-bold mb-3 flex items-center gap-2"><Layers className="w-5 h-5 text-primary" /> Customization Types</h3>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                      <li>Names / initials engraving</li>
                      <li>Preserved flowers (personal supply)</li>
                      <li>Color palette & glitter style</li>
                      <li>Photo embedding (frames)</li>
                      <li>Combo packaging with Eid cards</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-primary/10 border border-primary rounded-lg p-6">
                  <h3 className="font-bold mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Ordering Strategy</h3>
                  <p className="text-sm text-muted-foreground">Plan premium or personalized gifts 7–10 days before event; secure fast-delivery items last. Confirm spelling for name engravings to avoid remakes.</p>
                </div>
              </section>
              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Choosing the Right Handmade Gift Shop</h2>
                <p className="text-muted-foreground mb-4">Select based on <strong>purpose + personalization + delivery speed</strong>. Boutique stores excel at curated aesthetics; direct artisan brands (like তোমার ঠিকানা) deliver better customization & price value; online marketplaces offer variety with quality variability.</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  <li><strong>For emotional keepsakes:</strong> Preserved flower frames & custom resin jewelry</li>
                  <li><strong>For budget gifting:</strong> Personalized keychains, bookmarks, mini bundles</li>
                  <li><strong>For premium impact:</strong> Multi-item curated combos (frame + pendant + earrings)</li>
                  <li><strong>For corporate:</strong> Bulk branding keychains or desk frames</li>
                </ul>
                <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 font-display">Ready to Shop Authentic Handmade Gifts?</h3>
                  <p className="mb-6 text-primary-foreground/90">Browse 118+ handmade pieces or request a personalized multi-item gift bundle. Free Dhaka delivery—fast & reliable.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/products" className="inline-flex items-center px-8 py-4 bg-card text-foreground font-bold rounded-lg hover:bg-secondary transition-colors shadow-lg"><ShoppingBag className="w-5 h-5 mr-2" /> Browse All Gifts</Link>
                    <Link href="/custom-order" className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent/90 transition-colors shadow-lg"><MessageCircle className="w-5 h-5 mr-2" /> Request Custom Bundle</Link>
                  </div>
                </div>
              </section>
              {/* Related */}
              <section className="mt-12 pt-8 border-t-2 border-border">
                <h3 className="text-xl font-bold mb-4">Related Guides:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link href="/blog/eid-gift-ideas-bangladesh-2025" className="block p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-border">
                    <h4 className="font-semibold text-primary mb-2">Eid Gift Ideas</h4>
                    <p className="text-sm text-muted-foreground">50+ gifts by budget</p>
                  </Link>
                  <Link href="/blog/preserved-flower-jewelry-guide-bangladesh" className="block p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-border">
                    <h4 className="font-semibold text-primary mb-2">Preserved Flower Guide</h4>
                    <p className="text-sm text-muted-foreground">Process & care</p>
                  </Link>
                  <Link href="/blog/resin-jewelry-price-bangladesh-2025" className="block p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-border">
                    <h4 className="font-semibold text-primary mb-2">Resin Price Guide</h4>
                    <p className="text-sm text-muted-foreground">Pricing (৳80-৳1000)</p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
          {/* JSON-LD Article */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "10 Best Handmade Gift Shops in Dhaka 2025 [Ultimate Guide]",
                "description": "Compare 10 best handmade gift shops in Dhaka: pricing, specialties, customization, delivery & pros/cons.",
                "image": "https://tomar-thikana.vercel.app/assets/products/photoframe/1000tk/IMG-20240119-WA0000.jpg",
                "author": {"@type": "Organization", "name": "তোমার ঠিকানা"},
                "publisher": {"@type": "Organization", "name": "তোমার ঠিকানা", "logo": {"@type": "ImageObject", "url": "https://tomar-thikana.vercel.app/logo.png"}},
                "datePublished": "2025-01-30",
                "dateModified": "2025-01-30"
              })
            }}
          />
          {/* ItemList Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "Top Handmade Gift Shops Dhaka 2025",
                "itemListElement": shops.map((s, i) => ({
                  "@type": "ListItem",
                  "position": i + 1,
                  "name": s.name
                }))
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
                  {"@type": "Question", "name": "What is the best handmade gift shop in Dhaka for customization?", "acceptedAnswer": {"@type": "Answer", "text": "তোমার ঠিকানা offers the widest range of customization: names, initials, preserved personal flowers, photo embedding, and combo bundles—plus free Dhaka delivery."}},
                  {"@type": "Question", "name": "Which Dhaka gift shops have budget-friendly options?", "acceptedAnswer": {"@type": "Answer", "text": "Local artisans via online pages, Crafts by Nusrat (miniatures), and তোমার ঠিকানা (keychains from ৳80) provide affordable handmade gifts."}},
                  {"@type": "Question", "name": "How early should I order custom handmade gifts?", "acceptedAnswer": {"@type": "Answer", "text": "Order 7–10 days before events for custom resin or floral pieces; ready stock items like keychains can ship in 24h inside Dhaka."}},
                  {"@type": "Question", "name": "Are boutique stores more expensive than artisan brands?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Boutiques like Aarong typically carry a 40–70% markup versus direct artisan brands due to retail overhead and brand premium."}},
                  {"@type": "Question", "name": "What handmade gifts have the highest emotional impact?", "acceptedAnswer": {"@type": "Answer", "text": "Preserved flower photo frames, personalized resin pendants, and curated multi-item combos (frame + pendant + keychain) deliver lasting emotional value."}}
                ]
              })
            }}
          />
        </article>
      </div>
    </>
  );
}
