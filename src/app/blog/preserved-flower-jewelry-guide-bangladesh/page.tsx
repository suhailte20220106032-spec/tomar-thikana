/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, Leaf, Flower2, Heart, Sparkles, ShoppingBag, ChevronRight, CheckCircle2, AlertCircle, Droplets, Recycle, ShieldCheck, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Preserved Flower Jewelry in Bangladesh: Complete Guide 2025 | তোমার ঠিকানা",
  description: "Complete guide to preserved flower jewelry Bangladesh 2025. Learn resin preservation process, pricing (৳290-৳990), durability, care, and where to buy.",
  keywords: [
    "preserved flower jewelry Bangladesh",
    "flower resin jewelry",
    "preserved flower pendant",
    "resin flower earrings",
    "flower jewelry care",
    "handmade floral jewelry bd",
  ],
  openGraph: {
    title: "Preserved Flower Jewelry in Bangladesh: Complete Guide 2025",
    description: "Learn how preserved flower resin jewelry is made, priced, and cared for in Bangladesh (৳290-৳990).",
    images: ["/assets/products/pendant/499tk/floral pendant premium/main.jpg"],
  },
};

export default function PreservedFlowerJewelryGuidePage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-background to-card">
        <article className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-2xl shadow-soft overflow-hidden border border-border">
            {/* Hero */}
            <div className="relative h-[380px] w-full">
              <Image
                src="/assets/products/pendant/499tk/floral pendant premium/main.jpg"
                alt="Preserved Flower Jewelry Guide Bangladesh"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white w-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary rounded-full text-sm font-semibold text-primary-foreground">Product Guide</span>
                    <span className="px-3 py-1 bg-accent rounded-full text-sm font-semibold text-accent-foreground">Preserved Flowers</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-3 font-display text-white">Preserved Flower Jewelry in Bangladesh: Complete Guide 2025</h1>
                  <p className="text-xl text-white/90 font-bengali">প্রিজার্ভড ফুলের জুয়েলারি গাইড বাংলাদেশ ২০২৫</p>
                </div>
              </div>
            </div>
            {/* Meta */}
            <div className="px-8 py-6 bg-secondary/30 border-b border-border">
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><User className="w-4 h-4 text-primary" /><span>তোমার ঠিকানা Team</span></div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /><span>January 25, 2025</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /><span>7 min read</span></div>
              </div>
            </div>
            {/* Content */}
            <div className="px-8 py-12 prose prose-lg max-w-none">
              {/* Introduction */}
              <section className="mb-12">
                <p className="text-xl leading-relaxed mb-6">
                  Curious about <strong>preserved flower jewelry in Bangladesh</strong>? This guide explains how real flowers are dried, preserved, and transformed into long-lasting resin pendants, earrings, rings, and frames. Whether you're buying for yourself, gifting, or planning a custom romantic piece—understanding the process helps you pick quality items that last <strong>3–5+ years</strong>.
                </p>
                <div className="bg-secondary/40 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                  <p className="mb-2"><strong className="text-primary">Quick Summary:</strong> Preserved flower jewelry prices range from <strong>৳290 (pendants)</strong> to <strong>৳990 (premium earrings)</strong>. High-quality epoxy resin + properly dried flowers = clarity, color retention & durability.</p>
                  <p className="text-sm text-muted-foreground">Low-cost pieces often yellow or brown because of poor drying or cheap resin. Always ask the seller about materials.</p>
                </div>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  <li>Step-by-step resin preservation process</li>
                  <li>Flower types that work best (rose, leaf, baby's breath)</li>
                  <li>Price ranges & value comparison</li>
                  <li>Care tips to prevent fading/yellowing</li>
                  <li>How to order custom preserved pieces</li>
                </ul>
                <p className="text-muted-foreground">All examples use products from <strong>তোমার ঠিকানা</strong>, Bangladesh's trusted handmade floral jewelry shop with <strong>free Dhaka delivery</strong>.</p>
              </section>
              {/* How Preservation Works */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3 font-display"><Flower2 className="w-8 h-8 text-primary" /> How Real Flowers Become Jewelry</h2>
                <p className="text-muted-foreground mb-6">The preservation process is a balance of timing, drying technique, and resin chemistry. A mistake in any stage can cause brown petals, trapped bubbles, or cloudy finish.</p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2">Step-by-Step Process</h3>
                    <ol className="list-decimal pl-6 text-sm text-muted-foreground space-y-1">
                      <li><strong>Selection:</strong> Fresh, vibrant flowers (no moisture damage).</li>
                      <li><strong>Drying:</strong> Silica gel / press drying (2–7 days).</li>
                      <li><strong>Sealing:</strong> Optional matte seal to lock color.</li>
                      <li><strong>Mold Prep:</strong> Clean silicone molds free of dust.</li>
                      <li><strong>First Pour:</strong> Thin resin layer cures ~12h.</li>
                      <li><strong>Placement:</strong> Flowers positioned with tweezers.</li>
                      <li><strong>Final Pour:</strong> Bubble-free deep layer applied.</li>
                      <li><strong>Curing:</strong> 24–48h at stable room temperature.</li>
                      <li><strong>Finishing:</strong> Sand, polish edges, attach findings.</li>
                    </ol>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2">Quality Indicators</h3>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                      <li>Crystal clarity (no haze)</li>
                      <li>Petal color still vivid</li>
                      <li>No surface bubbles / pits</li>
                      <li>Smooth, rounded edges</li>
                      <li>Secure hypoallergenic hooks</li>
                      <li>Balanced composition (not crowded)</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-primary/10 border border-primary rounded-lg p-6">
                  <h3 className="font-bold mb-2 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Why Premium Resin Matters</h3>
                  <p className="text-sm text-muted-foreground">Cheap polyester resin = yellowing, strong odor, brittle finish. তোমার ঠিকানা uses UV-resistant epoxy that stays clear 3–5+ years and is skin-safe.</p>
                </div>
              </section>
              {/* Flower Types */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3 font-display"><Leaf className="w-8 h-8 text-primary" /> Best Flowers & Elements for Resin</h2>
                <p className="text-muted-foreground mb-6">Not all flowers preserve equally. Petal density, moisture content, and pigment stability affect final results.</p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-bold mb-2">Roses</h3>
                    <p className="text-sm text-muted-foreground">Symbolic & vibrant. Works for pendants, earrings, frames. Deep red & pink retain color best.</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-bold mb-2">Baby's Breath</h3>
                    <p className="text-sm text-muted-foreground">Adds delicate texture. Ideal filler for larger oval molds.</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-bold mb-2">Leaves</h3>
                    <p className="text-sm text-muted-foreground">Flat, easy to dry. Green tones contrast clear resin beautifully.</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-bold mb-2">Pressed Petals</h3>
                    <p className="text-sm text-muted-foreground">Useful for minimalist geometric pendants & bookmarks.</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-bold mb-2">Single Bloom</h3>
                    <p className="text-sm text-muted-foreground">Looks premium in teardrop pendant molds (featured piece).</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-bold mb-2">Glitter & Accents</h3>
                    <p className="text-sm text-muted-foreground">Enhances negative space; use lightly for premium aesthetic.</p>
                  </div>
                </div>
                <div className="bg-accent/20 border border-accent rounded-lg p-6">
                  <h3 className="font-bold mb-2 flex items-center gap-2"><Heart className="w-5 h-5 text-primary" /> Custom Memory Flowers</h3>
                  <p className="text-sm text-muted-foreground">Bridal bouquet petals or anniversary flowers can be preserved if shipped/delivered fresh within 24h. Message us for handling instructions.</p>
                </div>
              </section>
              {/* Pricing */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4 font-display">Preserved Flower Jewelry Pricing (৳290-৳990)</h2>
                <p className="text-muted-foreground mb-6">Understanding pricing helps you pick the right balance of design complexity vs. budget.</p>
                <div className="overflow-x-auto mb-6 rounded-lg">
                  <table className="w-full text-sm border border-border">
                    <thead className="bg-primary/10">
                      <tr>
                        <th className="px-4 py-3 text-left">Item Type</th>
                        <th className="px-4 py-3 text-left">Price Range</th>
                        <th className="px-4 py-3 text-left">Typical Features</th>
                        <th className="px-4 py-3 text-left">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-semibold">Pendants</td>
                        <td className="px-4 py-3">৳290-৳499</td>
                        <td className="px-4 py-3">Single bloom / initial / leaf</td>
                        <td className="px-4 py-3">Daily wear / gifts</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-semibold">Earrings</td>
                        <td className="px-4 py-3">৳300-৳990</td>
                        <td className="px-4 py-3">Studs → premium dangles</td>
                        <td className="px-4 py-3">Fashion / events</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-semibold">Rings</td>
                        <td className="px-4 py-3">৳350-৳650</td>
                        <td className="px-4 py-3">Encased mini petals</td>
                        <td className="px-4 py-3">Statement accessory</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-semibold">Photo Frames</td>
                        <td className="px-4 py-3">৳500-৳1000</td>
                        <td className="px-4 py-3">Layered florals + photo</td>
                        <td className="px-4 py-3">Anniversary / premium gift</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-secondary/30 border border-border rounded-lg p-6 mb-6">
                  <h3 className="font-bold mb-2 flex items-center gap-2"><Sparkles className="w-5 h-5 text-primary" /> Value Tips</h3>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                    <li>Choose simple pendant (৳290) + earrings (৳300) combo instead of one premium (save ৳400).</li>
                    <li>Initial + flower costs the same as plain bloom (maximize personalization).</li>
                    <li>Frames offer highest emotional ROI for milestone gifts.</li>
                  </ul>
                </div>
                <Link href="/products?category=pendant" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"><ShoppingBag className="w-5 h-5 mr-2" /> Browse Floral Pendants</Link>
              </section>
              {/* Care */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Care & Longevity (Keep Colors Fresh)</h2>
                <p className="text-muted-foreground mb-6">Proper care prevents UV fading, moisture damage, and surface scratching.</p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card border-2 border-primary/30 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><CheckCircle2 className="w-6 h-6 text-primary" /> Do's</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Store in pouch / box</li>
                      <li>✓ Wipe with microfiber cloth</li>
                      <li>✓ Keep away from prolonged direct sun</li>
                      <li>✓ Apply perfume before wearing</li>
                      <li>✓ Remove before intense physical activity</li>
                    </ul>
                  </div>
                  <div className="bg-card border-2 border-destructive/30 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-destructive" /> Don'ts</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✗ No soaking in water</li>
                      <li>✗ Avoid harsh chemicals / alcohol</li>
                      <li>✗ Don’t leave in hot car (40°C+)</li>
                      <li>✗ Avoid sharp metal contact</li>
                      <li>✗ Don’t force bend large pieces</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-accent/20 border border-accent rounded-lg p-6">
                  <h3 className="font-bold mb-2 flex items-center gap-2"><Droplets className="w-5 h-5 text-primary" /> Expected Lifespan</h3>
                  <p className="text-sm text-muted-foreground">Quality preserved flower jewelry from তোমার ঠিকানা lasts <strong>3–5+ years</strong> with normal wear if stored properly. Minor dullness from micro-scratches can be polished professionally.</p>
                </div>
              </section>
              {/* Sustainability */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Sustainability & Ethical Considerations</h2>
                <p className="text-muted-foreground mb-6">Preserved flower jewelry reduces waste by extending the life of organic materials that would otherwise be discarded. Local sourcing supports Bangladeshi micro-farms & home growers.</p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-bold mb-2">Reduced Waste</h3>
                    <p className="text-sm text-muted-foreground">Blooms repurposed instead of wilting.</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-bold mb-2">Local Craft</h3>
                    <p className="text-sm text-muted-foreground">Supports artisan economy & skills.</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-bold mb-2">Longevity</h3>
                    <p className="text-sm text-muted-foreground">Wearable 3–5 years vs fresh flowers (days).</p>
                  </div>
                </div>
                <div className="bg-secondary/30 border border-border rounded-lg p-6 mt-6">
                  <h3 className="font-bold mb-2 flex items-center gap-2"><Recycle className="w-5 h-5 text-primary" /> End of Life</h3>
                  <p className="text-sm text-muted-foreground">Resin pieces can be repurposed into keepsake frames or recycled through specialized services (ask us). Metal findings are removable for reuse.</p>
                </div>
              </section>
              {/* Custom Orders */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Ordering Custom Preserved Flower Jewelry</h2>
                <p className="text-muted-foreground mb-6">Want to preserve a special bouquet (wedding, anniversary, proposal)? Follow this streamlined custom order workflow.</p>
                <div className="bg-primary/10 border border-primary rounded-lg p-6 mb-6">
                  <ol className="list-decimal pl-6 text-sm text-muted-foreground space-y-1">
                    <li>Contact via <Link href="/custom-order" className="text-primary underline">custom order form</Link> or Messenger.</li>
                    <li>Send clear photos + quantity of flowers.</li>
                    <li>Receive design mock & price confirmation.</li>
                    <li>Deliver flowers (Dhaka) within 24h of event.</li>
                    <li>Production (2–5 days depending on item).</li>
                    <li>Final QC + delivery (FREE inside Dhaka).</li>
                  </ol>
                </div>
                <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 font-display">Preserve Your Memories Today</h3>
                  <p className="mb-6 text-primary-foreground/90">Turn meaningful flowers into wearable art. Limited custom slots weekly—book early.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/products?category=pendant" className="inline-flex items-center px-8 py-4 bg-card text-foreground font-bold rounded-lg hover:bg-secondary transition-colors shadow-lg"><ShoppingBag className="w-5 h-5 mr-2" /> Browse Floral Collection</Link>
                    <Link href="/custom-order" className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent/90 transition-colors shadow-lg"><MessageCircle className="w-5 h-5 mr-2" /> Start Custom Order</Link>
                  </div>
                </div>
              </section>
              {/* Related */}
              <section className="mt-12 pt-8 border-t-2 border-border">
                <h3 className="text-xl font-bold mb-4">Related Guides:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link href="/blog/resin-jewelry-price-bangladesh-2025" className="block p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-border">
                    <h4 className="font-semibold text-primary mb-2">Resin Jewelry Price</h4>
                    <p className="text-sm text-muted-foreground">Prices (৳80-৳1000) explained</p>
                  </Link>
                  <Link href="/blog/jhumka-designs-bengali-weddings-2025" className="block p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-border">
                    <h4 className="font-semibold text-primary mb-2">Wedding Jhumkas</h4>
                    <p className="text-sm text-muted-foreground">Top 10 designs for 2025</p>
                  </Link>
                  <Link href="/blog/eid-gift-ideas-bangladesh-2025" className="block p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-border">
                    <h4 className="font-semibold text-primary mb-2">Eid Gift Ideas</h4>
                    <p className="text-sm text-muted-foreground">50+ gifts (৳80-৳1000)</p>
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
                "headline": "Preserved Flower Jewelry in Bangladesh: Complete Guide 2025",
                "description": "Guide to preserved flower jewelry: process, pricing (৳290-৳990), care, and custom ordering in Bangladesh.",
                "image": "https://tomar-thikana.vercel.app/assets/products/pendant/499tk/floral pendant premium/main.jpg",
                "author": {"@type": "Organization", "name": "তোমার ঠিকানা"},
                "publisher": {"@type": "Organization", "name": "তোমার ঠিকানা", "logo": {"@type": "ImageObject", "url": "https://tomar-thikana.vercel.app/logo.png"}},
                "datePublished": "2025-01-25",
                "dateModified": "2025-01-25"
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
                  {"@type": "Question", "name": "What is preserved flower jewelry?", "acceptedAnswer": {"@type": "Answer", "text": "Preserved flower jewelry uses real dried flowers sealed in clear epoxy resin to create durable pendants, earrings, rings, and frames. Proper drying preserves color and structure for 3–5+ years."}},
                  {"@type": "Question", "name": "How much does preserved flower jewelry cost in Bangladesh?", "acceptedAnswer": {"@type": "Answer", "text": "Prices range from ৳290-৳499 for pendants, ৳300-৳990 for earrings, ৳350-৳650 for rings, and ৳500-৳1000 for photo frames depending on complexity and materials."}},
                  {"@type": "Question", "name": "How long does preserved flower resin jewelry last?", "acceptedAnswer": {"@type": "Answer", "text": "High-quality pieces made with UV-resistant epoxy resin last 3–5+ years with proper care (avoid harsh chemicals, store away from direct sun)."}},
                  {"@type": "Question", "name": "Can I use my own flowers (wedding bouquet)?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Send or deliver fresh petals within 24 hours. We dry them using silica gel or pressing techniques before casting in resin. Custom orders take 2–5 days."}},
                  {"@type": "Question", "name": "How do I care for preserved flower jewelry?", "acceptedAnswer": {"@type": "Answer", "text": "Store in a pouch, wipe gently with a microfiber cloth, avoid soaking and strong chemicals, and keep away from long direct sunlight exposure to prevent fading."}}
                ]
              })
            }}
          />
        </article>
      </div>
    </>
  );
}
