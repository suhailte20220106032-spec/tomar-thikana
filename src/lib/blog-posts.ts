export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleBn?: string;
  excerpt: string;
  content?: string; // For future MDX support
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  featuredImage: string;
  readTime: number; // minutes
  metaDescription: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "resin-jewelry-price-bangladesh-2025",
    title: "Resin Jewelry Price in Bangladesh 2025: Complete Buying Guide",
    titleBn: "রেজিন জুয়েলারি দাম বাংলাদেশ ২০২৫: সম্পূর্ণ গাইড",
    excerpt: "Complete guide to resin jewelry prices in Bangladesh. Learn about price ranges (৳80-৳1000), quality factors, and where to buy authentic handmade resin jewelry in Dhaka.",
    author: "তোমার ঠিকানা Team",
    publishDate: "2025-01-15",
    category: "Buying Guide",
    tags: ["resin jewelry", "price guide", "Bangladesh", "handmade jewelry", "shopping guide"],
    featuredImage: "/assets/products/earrings/500tk/floral jhumka(Gold)/main.jpg",
    readTime: 10,
    metaDescription: "Complete resin jewelry price guide Bangladesh 2025. Compare prices (৳80-৳1000), learn quality factors, and find best places to buy authentic handmade jewelry in Dhaka.",
    keywords: [
      "resin jewelry price Bangladesh",
      "resin jewelry price bd",
      "handmade jewelry price Bangladesh",
      "resin earrings price",
      "resin pendant price Bangladesh",
    ],
  },
  {
    id: "2",
    slug: "jhumka-designs-bengali-weddings-2025",
    title: "Top 10 Jhumka Designs for Bengali Weddings 2025",
    titleBn: "বাঙালি বিয়ের জন্য সেরা ১০টি ঝুমকা ডিজাইন ২০২৫",
    excerpt: "Discover the most stunning jhumka designs for Bengali weddings. From traditional golden florals to modern resin designs, find perfect jhumka for your special day.",
    author: "তোমার ঠিকানা Team",
    publishDate: "2025-01-20",
    category: "Wedding Guide",
    tags: ["jhumka", "Bengali wedding", "bridal jewelry", "wedding earrings", "traditional jewelry"],
    featuredImage: "/assets/products/earrings/990tk/black floral earring/main.jpg",
    readTime: 8,
    metaDescription: "Top 10 jhumka designs for Bengali weddings 2025. Traditional & modern styles, price guide (৳120-৳990), matching tips with saree colors from Dhaka's premier jewelry shop.",
    keywords: [
      "jhumka design Bangladesh",
      "wedding jhumka Bangladesh",
      "bridal jhumka design",
      "Bengali wedding jewelry",
      "traditional jhumka",
    ],
  },
  {
    id: "3",
    slug: "eid-gift-ideas-bangladesh-2025",
    title: "50+ Eid Gift Ideas in Bangladesh 2025 (৳80-৳1000)",
    titleBn: "ঈদ উপহার আইডিয়া বাংলাদেশ ২০২৫",
    excerpt: "50+ unique Eid gift ideas for every budget. Handmade jewelry, personalized keychains, photo frames & more. Perfect gifts for family, friends & colleagues in Bangladesh.",
    author: "তোমার ঠিকানা Team",
    publishDate: "2025-02-10",
    category: "Gift Guide",
    tags: ["Eid gifts", "gift ideas", "handmade gifts", "personalized gifts", "Bangladesh"],
    featuredImage: "/assets/products/keychain/390tk/floral keychains/main.jpg",
    readTime: 9,
    metaDescription: "50+ Eid gift ideas Bangladesh 2025 (৳80-৳1000). Handmade jewelry, personalized items, photo frames. Budget-friendly gifts with free Dhaka delivery from তোমার ঠিকানা.",
    keywords: [
      "eid gift ideas Bangladesh",
      "eid gifts bd",
      "handmade eid gifts",
      "personalized eid gifts",
      "eid gifts for wife",
    ],
  },
  {
    id: "4",
    slug: "preserved-flower-jewelry-guide-bangladesh",
    title: "Preserved Flower Jewelry in Bangladesh: Complete Guide 2025",
    titleBn: "প্রিজার্ভড ফ্লাওয়ার জুয়েলারি গাইড",
    excerpt: "Everything about preserved flower jewelry in Bangladesh. Learn the resin preservation process, care tips, pricing, and why these unique pieces make perfect gifts.",
    author: "তোমার ঠিকানা Team",
    publishDate: "2025-01-25",
    category: "Product Guide",
    tags: ["preserved flowers", "resin jewelry", "flower jewelry", "handmade", "care guide"],
    featuredImage: "/assets/products/pendant/499tk/floral pendant premium/main.jpg",
    readTime: 7,
    metaDescription: "Complete guide to preserved flower jewelry Bangladesh. Learn resin preservation process, care tips, pricing (৳290-৳990), and why flower jewelry makes meaningful gifts.",
    keywords: [
      "preserved flower jewelry Bangladesh",
      "flower resin jewelry",
      "preserved flower pendant",
      "resin flower earrings",
      "flower jewelry care",
    ],
  },
  {
    id: "5",
    slug: "best-handmade-gift-shops-dhaka-2025",
    title: "10 Best Handmade Gift Shops in Dhaka 2025 [Ultimate Guide]",
    titleBn: "ঢাকার সেরা হাতে তৈরি গিফট শপ ২০২৫",
    excerpt: "Comprehensive guide to Dhaka's best handmade gift shops. Compare prices, specialties, delivery options, and find perfect handcrafted gifts for every occasion.",
    author: "তোমার ঠিকানা Team",
    publishDate: "2025-01-30",
    category: "Shopping Guide",
    tags: ["gift shops", "Dhaka shopping", "handmade gifts", "local shops", "shopping guide"],
    featuredImage: "/assets/products/photoframe/1000tk/IMG-20240119-WA0000.jpg",
    readTime: 11,
    metaDescription: "10 best handmade gift shops in Dhaka 2025. Compare specialties, prices, delivery options. From resin jewelry to traditional crafts - ultimate shopping guide.",
    keywords: [
      "handmade gift shop Dhaka",
      "gift shops in Dhaka",
      "handmade jewelry shop Bangladesh",
      "craft shops Dhaka",
      "where to buy gifts Dhaka",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags.includes(tag));
}

export const blogCategories = [
  "All",
  "Buying Guide",
  "Wedding Guide",
  "Gift Guide",
  "Product Guide",
  "Shopping Guide",
];
