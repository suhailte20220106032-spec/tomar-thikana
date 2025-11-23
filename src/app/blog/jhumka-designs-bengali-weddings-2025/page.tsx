/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ChevronRight, Heart, Sparkles, CheckCircle2, ShoppingBag, Star, AlertCircle, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";


export const metadata: Metadata = {
  title: "Top 10 Jhumka Designs for Bengali Weddings 2025 | তোমার ঠিকানা",
  description: "Top 10 jhumka designs for Bengali weddings 2025. Traditional & modern styles, price guide (৳120-৳990), matching tips with saree colors from Dhaka's premier jewelry shop.",
  keywords: [
    "jhumka design Bangladesh",
    "wedding jhumka Bangladesh",
    "bridal jhumka design",
    "Bengali wedding jewelry",
    "traditional jhumka",
    "jhumka for holud",
    "wedding earrings Bangladesh",
    "resin jhumka Bangladesh",
  ],
  openGraph: {
    title: "Top 10 Jhumka Designs for Bengali Weddings 2025",
    description: "Discover stunning jhumka designs for Bengali weddings. Traditional & modern styles (৳120-৳990) with saree matching tips.",
    images: ["/assets/products/earrings/990tk/black floral earring/main.jpg"],
  },
};

export default function JhumkaDesignPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-background to-card">
        <article className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-2xl shadow-soft overflow-hidden border border-border">
            {/* Hero Section */}
            <div className="relative h-[400px] w-full">
              <Image
                src="/assets/products/earrings/990tk/black floral earring/main.jpg"
                alt="Jhumka Designs for Bengali Weddings 2025"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white w-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary rounded-full text-sm font-semibold text-primary-foreground">
                      Wedding Guide
                    </span>
                    <span className="px-3 py-1 bg-accent rounded-full text-sm font-semibold text-accent-foreground">
                      Jhumka Designs
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-3 font-display text-white">
                    Top 10 Jhumka Designs for Bengali Weddings 2025
                  </h1>
                  <p className="text-xl text-white/90 font-bengali">
                    বাঙালি বিয়ের জন্য সেরা ১০টি ঝুমকা ডিজাইন ২০২৫
                  </p>
                </div>
              </div>
            </div>

            {/* Article Meta */}
            <div className="px-8 py-6 bg-secondary/30 border-b border-border">
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  <span>তোমার ঠিকানা Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>January 20, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>8 min read</span>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="px-8 py-12 prose prose-lg max-w-none">
              
              {/* Introduction */}
              <section className="mb-12">
                <p className="text-xl text-foreground leading-relaxed mb-6">
                  Planning a Bengali wedding? Finding the perfect <strong>jhumka design in Bangladesh</strong> is essential 
                  for completing your bridal look. This comprehensive guide showcases the top 10 jhumka designs for 2025, 
                  from traditional golden florals to modern resin crafts, perfect for your holud, wedding, or reception.
                </p>
                
                <div className="bg-secondary/50 border-l-4 border-primary p-6 rounded-r-lg my-8">
                  <p className="text-foreground mb-2">
                    <strong className="text-primary">Why Jhumkas for Bengali Weddings?</strong> Jhumkas (ঝুমকা) are the quintessential 
                    Bengali bridal earrings, symbolizing tradition, grace, and femininity. Their bell-shaped design creates 
                    elegant movement, making them perfect for wedding photography and dancing.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>What You'll Learn:</strong>
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  <li>10 stunning jhumka designs with prices (৳120-৳990)</li>
                  <li>How to match jhumkas with Bengali saree colors</li>
                  <li>Traditional vs modern jhumka styles</li>
                  <li>Where to buy quality jhumkas in Dhaka</li>
                  <li>Care tips to keep your jhumkas looking new</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed">
                  All jhumkas featured are from <strong className="text-foreground">তোমার ঠিকানা (Tomar Thikana)</strong>, 
                  Bangladesh's premier handmade resin jewelry shop with <strong>free delivery in Dhaka</strong>.
                </p>
              </section>

              {/* Top 10 Designs */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-2 font-display flex items-center gap-3">
                  <Star className="w-8 h-8 text-primary" />
                  10 Most Popular Jhumka Designs in Bangladesh 2025
                </h2>
                <p className="text-muted-foreground mb-8">
                  Each design is handcrafted with premium UV-resistant resin, real preserved flowers, and quality findings. 
                  Perfect for brides who want traditional elegance without heavy metal jewelry.
                </p>

                {/* Design #1 */}
                <div className="bg-card border-2 border-border rounded-xl p-6 mb-8 hover:shadow-soft transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">Black Floral Luxury Jhumka</h3>
                      <p className="text-sm text-muted-foreground mb-2 font-bengali">কালো ফুলের বিলাসবহুল ঝুমকা</p>
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <span className="text-2xl font-bold text-primary">৳990</span>
                        <span className="px-3 py-1 bg-accent/30 text-accent-foreground rounded-full text-sm font-semibold">
                          Premium Collection
                        </span>
                        <span className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm">
                          Wedding & Reception
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/assets/products/earrings/990tk/black floral earring/main.jpg"
                      alt="Black Floral Luxury Jhumka - Premium Bengali Wedding Earrings"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    <strong className="text-foreground">Why it's #1:</strong> This sophisticated black floral jhumka is 
                    our best-seller for Bengali weddings. The deep black resin base features preserved golden flowers, 
                    creating a stunning contrast perfect for both traditional red/maroon sarees and modern pastel wedding outfits. 
                    The intricate multi-layer design catches light beautifully in wedding photography.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <p className="font-semibold text-foreground mb-2">Perfect For:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Wedding day (main ceremony)</li>
                        <li>• Evening reception</li>
                        <li>• Red, maroon, or black sarees</li>
                        <li>• Formal photography sessions</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <p className="font-semibold text-foreground mb-2">Design Features:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Preserved golden flowers in black resin</li>
                        <li>• 5cm length (statement piece)</li>
                        <li>• Lightweight resin (10g per earring)</li>
                        <li>• Hypoallergenic hooks</li>
                      </ul>
                    </div>
                  </div>

                  <Link 
                    href="/products/ear-990-1" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    View Product Details
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                {/* Design #2 */}
                <div className="bg-card border-2 border-border rounded-xl p-6 mb-8 hover:shadow-soft transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">Pink Floral Designer Jhumka</h3>
                      <p className="text-sm text-muted-foreground mb-2 font-bengali">গোলাপী ফুলের ডিজাইনার ঝুমকা</p>
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <span className="text-2xl font-bold text-primary">৳990</span>
                        <span className="px-3 py-1 bg-accent/30 text-accent-foreground rounded-full text-sm font-semibold">
                          Premium Collection
                        </span>
                        <span className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm">
                          Holud & Mehendi
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/assets/products/earrings/990tk/floral earring pink/main.jpg"
                      alt="Pink Floral Designer Jhumka - Bengali Holud Wedding Earrings"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    <strong className="text-foreground">Perfect for Holud ceremonies!</strong> These romantic pink jhumkas 
                    feature real preserved roses encased in clear resin, creating a dreamy, feminine look. The soft pink 
                    tones complement yellow/orange holud sarees beautifully. Brides love these for their Instagram-worthy 
                    aesthetic and comfortable lightweight design.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <p className="font-semibold text-foreground mb-2">Perfect For:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Holud (turmeric) ceremony</li>
                        <li>• Mehendi events</li>
                        <li>• Yellow, orange, pink sarees</li>
                        <li>• Pre-wedding photoshoots</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <p className="font-semibold text-foreground mb-2">Design Features:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Real preserved pink roses</li>
                        <li>• Gradient pink & gold accents</li>
                        <li>• 4.5cm length (medium size)</li>
                        <li>• Crystal clear resin finish</li>
                      </ul>
                    </div>
                  </div>

                  <Link 
                    href="/products/ear-990-2" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    View Product Details
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                {/* Design #3 */}
                <div className="bg-card border-2 border-border rounded-xl p-6 mb-8 hover:shadow-soft transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">Premium Floral Cascade Jhumka</h3>
                      <p className="text-sm text-muted-foreground mb-2 font-bengali">প্রিমিয়াম ফুলের ক্যাসকেড ঝুমকা</p>
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <span className="text-2xl font-bold text-primary">৳800</span>
                        <span className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm">
                          All Wedding Events
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/assets/products/earrings/500tk/jhumka.jpg"
                      alt="Premium Floral Cascade Jhumka - Bengali Wedding Jewelry"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    <strong className="text-foreground">Versatile elegance!</strong> This multi-floral design features 
                    a cascading arrangement of preserved flowers in vibrant colors. Perfect for brides who want a statement 
                    piece that works with multiple outfit changes throughout wedding festivities. The layered design creates 
                    beautiful depth and dimension.
                  </p>

                  <div className="bg-secondary/30 p-4 rounded-lg mb-4">
                    <p className="font-semibold text-foreground mb-2">Why Brides Love It:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✓ Works with 5+ saree colors (red, green, blue, yellow, pink)</li>
                      <li>✓ Mid-range price with premium look (best value)</li>
                      <li>✓ Comfortable for 8+ hours of wear</li>
                      <li>✓ Complements both heavy and light makeup looks</li>
                    </ul>
                  </div>

                  <Link 
                    href="/products/ear-800-1" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    View Product Details
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                {/* Design #4 */}
                <div className="bg-card border-2 border-border rounded-xl p-6 mb-8 hover:shadow-soft transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">Golden Floral Jhumka</h3>
                      <p className="text-sm text-muted-foreground mb-2 font-bengali">সোনালী ফুলের ঝুমকা</p>
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <span className="text-2xl font-bold text-primary">৳500</span>
                        <span className="px-3 py-1 bg-accent/30 text-accent-foreground rounded-full text-sm font-semibold">
                          Best Seller
                        </span>
                        <span className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm">
                          Daily Wear & Parties
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/assets/products/earrings/500tk/floral jhumka(Gold)/main.jpg"
                      alt="Golden Floral Jhumka - Traditional Bengali Earrings"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    <strong className="text-foreground">Our #1 best-seller!</strong> These classic golden jhumkas are perfect 
                    for brides on a budget who don't want to compromise on style. The golden preserved flowers against 
                    clear resin create a timeless look that matches traditional red/maroon Bengali wedding sarees perfectly. 
                    At ৳500, it's affordable luxury.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <p className="font-semibold text-foreground mb-2">Perfect For:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Budget-conscious brides (৳500)</li>
                        <li>• Post-wedding wear (not just once!)</li>
                        <li>• Traditional red/gold sarees</li>
                        <li>• Guest attire for weddings</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <p className="font-semibold text-foreground mb-2">Customer Reviews:</p>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="text-sm ml-2">5.0/5</span>
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        "Wore it for my wedding & still wear it to parties!" - Priya, Dhaka
                      </p>
                    </div>
                  </div>

                  <Link 
                    href="/products/ear-500-1" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    View Product Details
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                {/* Design #5 */}
                <div className="bg-card border-2 border-border rounded-xl p-6 mb-8 hover:shadow-soft transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">Silver Rose Jhumka</h3>
                      <p className="text-sm text-muted-foreground mb-2 font-bengali">রুপালী গোলাপ ঝুমকা</p>
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <span className="text-2xl font-bold text-primary">৳500</span>
                        <span className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm">
                          Modern Traditional
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/assets/products/earrings/500tk/rose jhumka silver/IMG-20240802-WA0009.jpg"
                      alt="Silver Rose Jhumka - Modern Bengali Wedding Earrings"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    <strong className="text-foreground">Modern elegance meets tradition!</strong> Silver tones are trending 
                    in 2025 Bengali weddings, especially for brides wearing white/ivory/pastel sarees. These silver rose 
                    jhumkas offer a contemporary twist on traditional designs, perfect for modern brides who want something 
                    different from the typical gold/red combination.
                  </p>

                  <Link 
                    href="/products/ear-500-2" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    View Product Details
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                {/* Design #6 */}
                <div className="bg-card border-2 border-border rounded-xl p-6 mb-8 hover:shadow-soft transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      6
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">Purple Rose Jhumka</h3>
                      <p className="text-sm text-muted-foreground mb-2 font-bengali">বেগুনি গোলাপ ঝুমকা</p>
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <span className="text-2xl font-bold text-primary">৳500</span>
                        <span className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm">
                          Sangeet & Reception
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/assets/products/earrings/500tk/rose pruple jhumka/main.jpg"
                      alt="Purple Rose Jhumka - Contemporary Bengali Wedding Jewelry"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    <strong className="text-foreground">Bold & beautiful!</strong> Purple is the color of royalty and 
                    uniqueness. These purple rose jhumkas are perfect for brides who want to stand out at their sangeet 
                    or reception. They pair beautifully with navy blue, purple, or magenta sarees, and add a pop of color 
                    to neutral outfits.
                  </p>

                  <Link 
                    href="/products/ear-500-4" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    View Product Details
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                {/* Designs 7-10: Compact Format */}
                <div className="bg-secondary/30 border border-border rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">More Beautiful Jhumka Designs</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    
                    {/* Design #7 */}
                    <div className="bg-card p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">7</span>
                        <div>
                          <h4 className="font-bold text-foreground">Red Floral Jhumka</h4>
                          <p className="text-sm text-muted-foreground font-bengali">লাল ফুলের ঝুমকা</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Classic red for traditional brides. Perfect with red/maroon wedding sarees.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">৳500</span>
                        <Link href="/products?category=earrings" className="text-sm text-primary hover:underline">
                          View →
                        </Link>
                      </div>
                    </div>

                    {/* Design #8 */}
                    <div className="bg-card p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">8</span>
                        <div>
                          <h4 className="font-bold text-foreground">White Pearl Jhumka</h4>
                          <p className="text-sm text-muted-foreground font-bengali">সাদা মুক্তা ঝুমকা</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Elegant white pearls for minimalist brides. Pairs with ivory/white sarees.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">৳300</span>
                        <Link href="/products?category=earrings" className="text-sm text-primary hover:underline">
                          View →
                        </Link>
                      </div>
                    </div>

                    {/* Design #9 */}
                    <div className="bg-card p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">9</span>
                        <div>
                          <h4 className="font-bold text-foreground">Green Leaf Jhumka</h4>
                          <p className="text-sm text-muted-foreground font-bengali">সবুজ পাতার ঝুমকা</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Nature-inspired design with preserved leaves. Unique holud ceremony choice.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">৳400</span>
                        <Link href="/products?category=earrings" className="text-sm text-primary hover:underline">
                          View →
                        </Link>
                      </div>
                    </div>

                    {/* Design #10 */}
                    <div className="bg-card p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">10</span>
                        <div>
                          <h4 className="font-bold text-foreground">Mixed Floral Mini Jhumka</h4>
                          <p className="text-sm text-muted-foreground font-bengali">মিক্স ফুলের মিনি ঝুমকা</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Smaller size for everyday wear post-wedding. Comfortable & versatile.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">৳120</span>
                        <Link href="/products?category=earrings" className="text-sm text-primary hover:underline">
                          View →
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <Link 
                      href="/products?category=earrings" 
                      className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      View All Jhumka Designs
                    </Link>
                  </div>
                </div>
              </section>

              {/* Matching with Saree */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6 font-display flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-primary" />
                  How to Match Jhumka with Bengali Saree Colors
                </h2>

                <p className="text-muted-foreground mb-6">
                  The secret to stunning bridal styling? Perfect jhumka-saree coordination. Here's your complete 
                  color matching guide for Bengali weddings:
                </p>

                <div className="space-y-4">
                  {/* Red Saree */}
                  <div className="bg-card border-l-4 border-primary p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      🔴 Red/Maroon Saree (Traditional Wedding)
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      <strong>Best Match:</strong> Golden Floral Jhumka (৳500), Black Floral Luxury (৳990)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Why it works:</strong> Gold complements red's richness, while black creates dramatic contrast. 
                      Avoid red jhumkas with red sarees - too matchy looks flat in photos. Golden tones add depth and 
                      reflect light beautifully.
                    </p>
                  </div>

                  {/* Yellow Saree */}
                  <div className="bg-card border-l-4 border-accent p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      🟡 Yellow/Orange Saree (Holud Ceremony)
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      <strong>Best Match:</strong> Pink Floral Designer (৳990), Purple Rose (৳500), Green Leaf (৳400)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Why it works:</strong> Pink and purple create beautiful contrast with warm yellow tones. 
                      Green adds a fresh, natural vibe perfect for holud's turmeric theme. Avoid golden jhumkas - 
                      they blend in too much.
                    </p>
                  </div>

                  {/* White Saree */}
                  <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      ⚪ White/Ivory Saree (Modern Reception)
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      <strong>Best Match:</strong> Silver Rose (৳500), White Pearl (৳300), any colorful jhumka
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Why it works:</strong> White sarees are a blank canvas - they work with any jhumka color! 
                      Silver/white creates elegant minimalism, while colorful jhumkas (pink, purple, golden) become 
                      statement pieces against neutral background.
                    </p>
                  </div>

                  {/* Blue Saree */}
                  <div className="bg-card border-l-4 border-primary p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      🔵 Blue/Navy Saree (Sangeet/Reception)
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      <strong>Best Match:</strong> Golden Floral (৳500), Purple Rose (৳500), Silver Rose (৳500)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Why it works:</strong> Gold adds warmth to cool blue tones. Purple creates a regal, 
                      complementary color scheme. Silver provides modern elegance. Blue sarees are versatile with 
                      metallic jhumkas.
                    </p>
                  </div>
                </div>

                <div className="bg-accent/20 border border-accent rounded-lg p-6 mt-6">
                  <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    Pro Styling Tip from তোমার ঠিকানা
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    <strong>The 60-30-10 Rule:</strong> If your saree has 60% one color, 30% border color, and 10% 
                    accents, match your jhumka to the 30% border color for perfect coordination. For example: Red saree 
                    (60%) + golden border (30%) = golden jhumka is your best choice!
                  </p>
                </div>
              </section>

              {/* Price Guide */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6 font-display">
                  Jhumka Price Range for Bengali Weddings
                </h2>

                <p className="text-muted-foreground mb-6">
                  Understanding jhumka pricing helps you budget wisely for your wedding jewelry. Here's what to expect 
                  at different price points:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {/* Budget */}
                  <div className="bg-card border-2 border-border rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">৳120-৳300</div>
                    <h3 className="font-bold text-foreground mb-3">Budget-Friendly</h3>
                    <ul className="text-sm text-muted-foreground space-y-2 text-left">
                      <li>• Simple floral designs</li>
                      <li>• Smaller size (2-3cm)</li>
                      <li>• Single flower preservation</li>
                      <li>• Perfect for guests</li>
                      <li>• Everyday post-wedding wear</li>
                    </ul>
                    <Link 
                      href="/products?category=earrings&priceMax=300" 
                      className="mt-4 inline-block text-sm text-primary hover:underline"
                    >
                      Shop Budget Jhumkas →
                    </Link>
                  </div>

                  {/* Mid-Range */}
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary rounded-xl p-6 text-center relative overflow-hidden">
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">৳300-৳600</div>
                    <h3 className="font-bold text-foreground mb-3">Mid-Range Quality</h3>
                    <ul className="text-sm text-muted-foreground space-y-2 text-left">
                      <li>• Multi-flower arrangements</li>
                      <li>• Medium size (3-4cm)</li>
                      <li>• Quality resin & findings</li>
                      <li>• Main wedding events</li>
                      <li>• Best value for money</li>
                    </ul>
                    <Link 
                      href="/products?category=earrings" 
                      className="mt-4 inline-block text-sm text-primary hover:underline font-semibold"
                    >
                      Shop Mid-Range Jhumkas →
                    </Link>
                  </div>

                  {/* Premium */}
                  <div className="bg-card border-2 border-border rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">৳800-৳990</div>
                    <h3 className="font-bold text-foreground mb-3">Premium Collection</h3>
                    <ul className="text-sm text-muted-foreground space-y-2 text-left">
                      <li>• Complex multi-layer designs</li>
                      <li>• Statement size (4-5cm)</li>
                      <li>• Premium preserved flowers</li>
                      <li>• Main wedding ceremony</li>
                      <li>• Heirloom quality</li>
                    </ul>
                    <Link 
                      href="/products?category=earrings&priceMin=800" 
                      className="mt-4 inline-block text-sm text-primary hover:underline"
                    >
                      Shop Premium Jhumkas →
                    </Link>
                  </div>
                </div>

                <div className="bg-secondary/30 border border-border rounded-lg p-6">
                  <h3 className="font-bold text-foreground mb-3">💰 Smart Budget Allocation</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Wedding Planning Tip:</strong> Allocate your jewelry budget based on wear frequency:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Main wedding jhumka:</strong> ৳800-৳990 (you'll wear this once, but photos last forever!)</li>
                    <li>• <strong>Holud/Mehendi jhumka:</strong> ৳400-৳600 (still important, more casual setting)</li>
                    <li>• <strong>Reception jhumka:</strong> ৳300-৳500 (if changing outfit, go mid-range)</li>
                    <li>• <strong>Backup/guest jhumkas:</strong> ৳120-৳300 (for bridesmaid gifts or just-in-case backup)</li>
                  </ul>
                </div>
              </section>

              {/* Care Instructions */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6 font-display">
                  How to Care for Your Jhumkas
                </h2>

                <p className="text-muted-foreground mb-6">
                  Proper care ensures your wedding jhumkas stay beautiful for years. Quality resin jhumkas from 
                  তোমার ঠিকানা can last 3-5+ years with these simple care steps:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Do's */}
                  <div className="bg-card border-2 border-primary/30 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      Do's - Best Practices
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span><strong>Store in original box/pouch</strong> - Prevents scratches and dust accumulation</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span><strong>Clean with soft microfiber cloth</strong> - Gently wipe after each wear</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span><strong>Keep away from direct sunlight</strong> - UV can fade preserved flowers over years</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span><strong>Apply makeup before wearing</strong> - Hairspray/perfume after jhumkas on is fine</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span><strong>Store in dry, cool place</strong> - Room temperature (20-25°C) is perfect</span>
                      </li>
                    </ul>
                  </div>

                  {/* Don'ts */}
                  <div className="bg-card border-2 border-destructive/30 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <AlertCircle className="w-6 h-6 text-destructive" />
                      Don'ts - Avoid These
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="text-destructive font-bold">✗</span>
                        <span><strong>Never submerge in water</strong> - Resin is water-resistant, not waterproof. No swimming/showering!</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-destructive font-bold">✗</span>
                        <span><strong>Avoid harsh chemicals</strong> - No alcohol, bleach, or strong cleaning agents</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-destructive font-bold">✗</span>
                        <span><strong>Don't drop or squeeze</strong> - Resin can crack under pressure or impact</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-destructive font-bold">✗</span>
                        <span><strong>No extreme temperatures</strong> - Don't leave in hot car (40°C+) or freezer</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-destructive font-bold">✗</span>
                        <span><strong>Don't store with metal jewelry</strong> - Metal can scratch resin surface</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-accent/20 border border-accent rounded-lg p-6 mt-6">
                  <h3 className="font-bold text-foreground mb-2">🌟 Longevity Expectation</h3>
                  <p className="text-sm text-muted-foreground">
                    With proper care, তোমার ঠিকানা jhumkas last <strong>3-5+ years</strong> maintaining their original 
                    clarity and color. Many customers still wear their wedding jhumkas to parties years later! We use 
                    premium UV-resistant resin that won't yellow like cheap alternatives. Think of them as a lasting 
                    memory of your special day, not disposable jewelry.
                  </p>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-6 font-display">
                  Find Your Perfect Wedding Jhumka at তোমার ঠিকানা
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Choosing the right <strong>jhumka design for your Bengali wedding</strong> doesn't have to be overwhelming. 
                  Whether you're drawn to classic golden florals (৳500), romantic pink roses (৳990), or bold black statements 
                  (৳990), তোমার ঠিকানা offers quality handmade options for every bridal style and budget.
                </p>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
                    Quick Jhumka Selection Guide:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                    <div>
                      <p className="font-semibold text-foreground mb-2">If you want traditional elegance:</p>
                      <p className="text-sm">→ Golden Floral Jhumka (৳500)</p>
                      <p className="text-sm">→ Red Floral Jhumka (৳500)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">If you want modern luxury:</p>
                      <p className="text-sm">→ Black Floral Luxury (৳990)</p>
                      <p className="text-sm">→ Silver Rose Jhumka (৳500)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">If you're budget-conscious:</p>
                      <p className="text-sm">→ Mini Floral Jhumka (৳120)</p>
                      <p className="text-sm">→ White Pearl Jhumka (৳300)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">If you want something unique:</p>
                      <p className="text-sm">→ Purple Rose Jhumka (৳500)</p>
                      <p className="text-sm">→ Green Leaf Jhumka (৳400)</p>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  <strong>Why choose তোমার ঠিকানা for your wedding jhumkas?</strong>
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
                  <li><strong>118+ handmade designs</strong> - Largest online resin jewelry collection in Bangladesh</li>
                  <li><strong>Free delivery in Dhaka</strong> - Gulshan, Dhanmondi, Bashundhara, Uttara & more</li>
                  <li><strong>Premium quality materials</strong> - UV-resistant resin, real preserved flowers</li>
                  <li><strong>Affordable pricing</strong> - ৳120-৳990, wedding jewelry for all budgets</li>
                  <li><strong>Custom orders available</strong> - Match your exact saree color or theme</li>
                  <li><strong>Fast delivery</strong> - Ready jhumkas ship within 24 hours</li>
                </ul>

                <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 font-display">
                    Ready to Complete Your Bridal Look?
                  </h3>
                  <p className="mb-6 text-primary-foreground/90">
                    Browse our complete jhumka collection or contact us for personalized recommendations 
                    based on your wedding colors and style.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                      href="/products?category=earrings" 
                      className="inline-flex items-center px-8 py-4 bg-card text-foreground font-bold rounded-lg hover:bg-secondary transition-colors shadow-lg"
                    >
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      Browse All Jhumkas
                    </Link>
                    <Link 
                      href="/custom-order" 
                      className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent/90 transition-colors shadow-lg"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Request Custom Design
                    </Link>
                  </div>
                </div>
              </section>

              {/* Related Links */}
              <section className="mt-12 pt-8 border-t-2 border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Related Wedding Guides:
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link href="/blog/resin-jewelry-price-bangladesh-2025" className="block p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-border">
                    <h4 className="font-semibold text-primary mb-2">Resin Jewelry Price Guide</h4>
                    <p className="text-sm text-muted-foreground">Complete pricing breakdown (৳80-৳1000)</p>
                  </Link>
                  <Link href="/blog/eid-gift-ideas-bangladesh-2025" className="block p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-border">
                    <h4 className="font-semibold text-primary mb-2">Eid Gift Ideas</h4>
                    <p className="text-sm text-muted-foreground">50+ unique gift ideas for every budget</p>
                  </Link>
                  <Link href="/blog/preserved-flower-jewelry-guide-bangladesh" className="block p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-border">
                    <h4 className="font-semibold text-primary mb-2">Preserved Flower Guide</h4>
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
                "headline": "Top 10 Jhumka Designs for Bengali Weddings 2025",
                "description": "Discover the most stunning jhumka designs for Bengali weddings. Traditional & modern styles, price guide (৳120-৳990), matching tips with saree colors.",
                "image": "https://tomar-thikana.vercel.app/assets/products/earrings/990tk/black floral earring/main.jpg",
                "author": {
                  "@type": "Organization",
                  "name": "তোমার ঠিকানা"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "তোমার ঠিকানা",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://tomar-thikana.vercel.app/logo.png"
                  }
                },
                "datePublished": "2025-01-20",
                "dateModified": "2025-01-20"
              })
            }}
          />

          {/* HowTo Schema for Matching Guide */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "HowTo",
                "name": "How to Match Jhumka with Bengali Saree Colors",
                "description": "Complete guide to coordinating jhumka earrings with different saree colors for Bengali weddings",
                "step": [
                  {
                    "@type": "HowToStep",
                    "name": "Red/Maroon Saree",
                    "text": "Pair with golden or black jhumkas for best contrast and traditional look"
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Yellow/Orange Saree",
                    "text": "Choose pink, purple, or green jhumkas to create beautiful color contrast"
                  },
                  {
                    "@type": "HowToStep",
                    "name": "White/Ivory Saree",
                    "text": "Any jhumka color works - silver for minimalism or colorful for statement look"
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Blue/Navy Saree",
                    "text": "Golden, purple, or silver jhumkas complement cool blue tones perfectly"
                  }
                ]
              })
            }}
          />
        </article>
      </div>
     
    </>
  );
}
