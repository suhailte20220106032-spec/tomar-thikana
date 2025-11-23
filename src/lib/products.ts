// src/lib/products.ts

export interface Product {
  id: string;
  name: string;
  nameBn?: string; // Bengali name for bilingual SEO
  description: string;
  price: number;
  category: string;
  images: string[]; // Array of images for carousel in product detail page
  mainImage: string; // Primary image to display in product cards
  featured?: boolean;
}

export const categories = [
  { id: "all", label: "All Products" },
  { id: "earrings", label: "Earrings" },
  { id: "keychains", label: "Keychains" },
  { id: "pendants", label: "Pendants" },
  { id: "photoframes", label: "Photo Frames" },
  { id: "sunglasses", label: "Sunglasses" },
  { id: "bookmarks", label: "Bookmarks" },
  { id: "bracelets", label: "Bracelets" },
  { id: "rings", label: "Rings" },
  { id: "pens", label: "Pens" },
  { id: "phonecovers", label: "Phone Covers" },
  { id: "frames", label: "Decorative Frames" },
];

export const products: Product[] = [
  // ============ EARRINGS - 120tk ============
  {
    id: "ear-120-1",
    name: "Rose Petal Drop Earrings - Handmade Resin Jewelry",
    nameBn: "গোলাপ পাপড়ি ঝুলন্ত কানের দুল",
    description: "Delicate handcrafted rose petal earrings with elegant drop design. হাতে তৈরি রেজিন জুয়েলারি। Perfect handmade resin jewelry for weddings and parties in Bangladesh. Price: ৳120. Free delivery in Dhaka (Gulshan, Dhanmondi, Bashundhara, Mirpur). Order via WhatsApp.",
    price: 120,
    category: "earrings",
    images: [
      "/assets/products/earrings/120tk/rose patel earrings/IMG-20250120-WA0000.jpg",
      "/assets/products/earrings/120tk/rose patel earrings/IMG-20250120-WA0002.jpg",
    ],
    mainImage: "/assets/products/earrings/120tk/rose patel earrings/IMG-20250120-WA0000.jpg",
    featured: true,
  },

  // ============ EARRINGS - 500tk ============
  {
    id: "ear-500-1",
    name: "Golden Floral Jhumka Earrings - Handmade Resin Jewelry",
    nameBn: "সোনালী ফুলের ঝুমকা কানের দুল",
    description: "Exquisite traditional jhumka earrings with golden floral designs. হাতে তৈরি রেজিন ঝুমকা। Handmade resin jewelry Bangladesh perfect for weddings and festive occasions. Price: ৳500. Free delivery in Dhaka (Gulshan, Dhanmondi, Bashundhara). Traditional Bengali jewelry design.",
    price: 500,
    category: "earrings",
    images: [
      "/assets/products/earrings/500tk/floral jhumka(Gold)/main.jpg",
      "/assets/products/earrings/500tk/floral jhumka(Gold)/IMG-20240802-WA0006.jpg",
      "/assets/products/earrings/500tk/floral jhumka(Gold)/IMG-20240802-WA0007.jpg",
      "/assets/products/earrings/500tk/floral jhumka(Gold)/IMG-20240802-WA0008.jpg",
    ],
    mainImage: "/assets/products/earrings/500tk/floral jhumka(Gold)/main.jpg",
    featured: true,
  },
  {
    id: "ear-500-2",
    name: "Silver Rose Jhumka Earrings - Handmade Resin Jewelry",
    nameBn: "রূপালী গোলাপ ঝুমকা দুল",
    description: "Beautiful silver-toned jhumka earrings with preserved rose designs. হাতে তৈরি ঝুমকা ডিজাইন। Handmade resin jewelry perfect for Bengali weddings in Dhaka. Price: ৳500. Free delivery in Gulshan, Dhanmondi, Bashundhara, Mirpur. Traditional meets modern elegance.",
    price: 500,
    category: "earrings",
    images: [
      "/assets/products/earrings/500tk/rose jhumka silver/IMG-20240802-WA0009.jpg",
      "/assets/products/earrings/500tk/rose jhumka silver/IMG-20240802-WA0010.jpg",
      "/assets/products/earrings/500tk/rose jhumka silver/IMG-20240802-WA0013.jpg",
      "/assets/products/earrings/500tk/rose jhumka silver/IMG-20240802-WA0014.jpg",
      "/assets/products/earrings/500tk/rose jhumka silver/IMG-20240802-WA0015.jpg",
      "/assets/products/earrings/500tk/rose jhumka silver/IMG-20240802-WA0019.jpg",
      "/assets/products/earrings/500tk/rose jhumka silver/IMG-20240825-WA0008.jpg",
      "/assets/products/earrings/500tk/rose jhumka silver/IMG-20240829-WA0000.jpg",
      "/assets/products/earrings/500tk/rose jhumka silver/IMG_20240821_222259_850.jpg",
    ],
    mainImage: "/assets/products/earrings/500tk/rose jhumka silver/IMG-20240802-WA0009.jpg",
    featured: true,
  },
  {
    id: "ear-500-3",
    name: "Golden Rose Jhumka Earrings - Handmade Resin Jewelry",
    nameBn: "সোনালী গোলাপ ঝুমকা",
    description: "Stunning golden jhumka earrings with rose patterns. সোনালী ঝুমকা ডিজাইন। Handmade resin jewelry Bangladesh ideal for special celebrations and weddings. Price: ৳500. Free delivery in Dhaka areas (Gulshan, Banasree, Niketon). Perfect gift choice.",
    price: 500,
    category: "earrings",
    images: [
      "/assets/products/earrings/500tk/rose jhumka(Gold)/FB_IMG_1713540492448.jpg",
    ],
    mainImage: "/assets/products/earrings/500tk/rose jhumka(Gold)/FB_IMG_1713540492448.jpg",
  },
  {
    id: "ear-500-4",
    name: "Purple Rose Jhumka Earrings - Handmade Resin Jewelry",
    nameBn: "বেগুনি গোলাপ ঝুমকা",
    description: "Elegant purple rose jhumka earrings with preserved flowers in resin. রেজিন জুয়েলারি বাংলাদেশ। Handmade resin jewelry perfect for elegant occasions in Dhaka. Price: ৳500. Free delivery Gulshan, Dhanmondi, Bashundhara. Unique floral design.",
    price: 500,
    category: "earrings",
    images: [
      "/assets/products/earrings/500tk/rose pruple jhumka/main.jpg",
      "/assets/products/earrings/500tk/rose pruple jhumka/IMG-20240802-WA0011.jpg",
      "/assets/products/earrings/500tk/rose pruple jhumka/IMG-20240802-WA0012.jpg",
      "/assets/products/earrings/500tk/rose pruple jhumka/IMG-20240802-WA0016.jpg",
      "/assets/products/earrings/500tk/rose pruple jhumka/IMG-20240802-WA0018.jpg",
    ],
    mainImage: "/assets/products/earrings/500tk/rose pruple jhumka/main.jpg",
  },

  // ============ EARRINGS - 800tk ============
  {
    id: "ear-800-1",
    name: "Premium Floral Cascade Earrings - Handmade Resin Jewelry",
    nameBn: "প্রিমিয়াম ফুলের ঝুলন্ত কানের দুল",
    description: "Luxurious handcrafted earrings with cascading floral designs. হাতে তৈরি রেজিন গহনা। Premium resin jewelry Bangladesh perfect for weddings and elegant occasions in Dhaka. Price: ৳800. Free delivery in Gulshan, Dhanmondi, Bashundhara, Banasree. Intricate premium detailing.",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0000.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0000.jpg",
    featured: true,
  },
  {
    id: "ear-800-2",
    name: "Elegant Rose Garden Earrings - Handmade Resin Jewelry",
    nameBn: "গোলাপ বাগান কানের দুল",
    description: "Sophisticated rose garden themed statement earrings. হাতে তৈরি প্রিমিয়াম গহনা। Premium handmade resin jewelry Bangladesh with preserved flowers. Price: ৳800. Free delivery Dhaka (Gulshan, Dhanmondi, Mirpur). Perfect for special events.",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0001.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0001.jpg",
  },
  {
    id: "ear-800-3",
    name: "Crystal Bloom Statement Earrings - Handmade Resin Jewelry",
    nameBn: "ক্রিস্টাল ফুল কানের দুল",
    description: "Bold statement earrings featuring crystal-clear resin with blooming flowers. হাতে তৈরি রেজিন জুয়েলারি। Handmade resin jewelry perfect for parties and special events in Bangladesh. Price: ৳800. Free delivery in Dhaka areas. Modern elegant design.",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0002.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0002.jpg",
  },
  {
    id: "ear-800-4",
    name: "Butterfly Garden Earrings - Handmade Resin Jewelry",
    nameBn: "প্রজাপতি বাগান কানের দুল",
    description: "Enchanting butterfly garden design earrings with preserved natural elements. হাতে তৈরি গহনা। Premium handmade resin jewelry Bangladesh. Price: ৳800. Free delivery Gulshan, Dhanmondi, Bashundhara. Perfect gift for nature lovers in Dhaka.",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0003.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0003.jpg",
  },
  {
    id: "ear-800-5",
    name: "Moonlight Blossom Earrings - Handmade Resin Jewelry",
    nameBn: "চাঁদের আলো ফুল কানের দুল",
    description: "Ethereal moonlight-inspired earrings with delicate blossom designs. রেজিন জুয়েলারি বাংলাদেশ। Premium handmade resin jewelry for elegant style in Dhaka. Price: ৳800. Free delivery Dhaka areas (Gulshan, Banasree, Niketon). Unique design.",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0004.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0004.jpg",
  },
  {
    id: "ear-800-6",
    name: "Vintage Pearl Elegance Earrings - Handmade Resin Jewelry",
    nameBn: "ভিনটেজ মুক্তা কানের দুল",
    description: "Classic vintage-style earrings with pearl accents and floral resin work. হাতে তৈরি রেজিন গহনা। Timeless handmade resin jewelry Bangladesh for special occasions. Price: ৳800. Free delivery in Dhaka (Gulshan, Dhanmondi, Bashundhara). Premium quality craftsmanship.",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0005.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0005.jpg",
  },
  {
    id: "ear-800-7",
    name: "Golden Botanical Earrings - Handmade Resin Jewelry",
    nameBn: "সোনালী রেজিন কানের দুল",
    description: "Premium botanical themed statement earrings with golden accents. হাতে তৈরি প্রিমিয়াম গহনা। Handmade resin jewelry Bangladesh with preserved natural elements. Price: ৳800. Free delivery Gulshan, Dhanmondi, Mirpur. Elegant botanical design.",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0006.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0006.jpg",
  },
  {
    id: "ear-800-8",
    name: "Sunset Romance Earrings - Handmade Resin Jewelry",
    nameBn: "সন্ধ্যার রঙ কানের দুল",
    description: "Romantic sunset-colored statement earrings with floral elements. রেজিন জুয়েলারি ঢাকা। Beautiful gradient effect in premium quality handmade resin jewelry Bangladesh. Price: ৳800. Free delivery in Dhaka areas. Perfect for weddings.",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0007.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0007.jpg",
  },
  {
    id: "ear-800-9",
    name: "Celestial Dreams Earrings - Handmade Resin Jewelry",
    nameBn: "চাঁদ তারা কানের দুল",
    description: "Dreamy celestial-inspired statement earrings with star and moon motifs. হাতে তৈরি রেজিন গহনা। Premium handmade resin jewelry Bangladesh. Price: ৳800. Free delivery Gulshan, Dhanmondi, Bashundhara. Unique celestial design.",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0008.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0008.jpg",
  },
  {
    id: "ear-800-10",
    name: "Ocean Treasure Earrings - Handmade Resin Jewelry",
    nameBn: "সমুদ্র কানের দুল",
    description: "Ocean-inspired statement earrings with blue hues and preserved flowers. রেজিন জুয়েলারি বাংলাদেশ। Premium handmade resin jewelry in Dhaka. Price: ৳800. Free delivery Gulshan, Dhanmondi, Mirpur. Ocean-themed design.",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0009.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0009.jpg",
  },
  {
    id: "ear-800-11",
    name: "Enchanted Forest Earrings - Handmade Resin Jewelry",
    nameBn: "জাদুকরী বন কানের দুল",
    description: "Mystical forest-themed statement earrings with preserved natural elements. হাতে তৈরি রেজিন জুয়েলারি। Unique handmade resin jewelry Bangladesh. Price: ৳800. Free delivery in Dhaka (Gulshan, Dhanmondi, Bashundhara). Nature-inspired design.",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0010.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0010.jpg",
  },
  {
    id: "ear-800-12",
    name: "Art Nouveau Floral Earrings - Handmade Resin Jewelry",
    nameBn: "আর্ট নুভো ফুলের কানের দুল",
    description: "Art Nouveau inspired floral statement earrings with elegant curved designs. হাতে তৈরি রেজিন জুয়েলারি। Premium handmade resin jewelry Bangladesh with artistic craftsmanship. Price: ৳800. Free delivery in Dhaka (Gulshan, Dhanmondi, Bashundhara).",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250905-WA0000.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250905-WA0000.jpg",
  },
  {
    id: "ear-800-13",
    name: "Tropical Paradise Earrings - Handmade Resin Jewelry",
    nameBn: "ট্রপিক্যাল ফুলের কানের দুল",
    description: "Vibrant tropical-themed statement earrings with exotic floral designs. রঙিন রেজিন জুয়েলারি। Colorful handmade resin jewelry Bangladesh perfect for summer style. Price: ৳800. Free delivery Gulshan, Dhanmondi, Mirpur.",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250905-WA0002.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250905-WA0002.jpg",
  },
  {
    id: "ear-800-14",
    name: "Crystal Waterfall Earrings - Handmade Resin Jewelry",
    nameBn: "ক্রিস্টাল জলপ্রপাত কানের দুল",
    description: "Cascading crystal waterfall design statement earrings with flowing floral elements. হাতে তৈরি প্রিমিয়াম গহনা। Premium handmade resin jewelry Bangladesh with unique design. Price: ৳800. Free delivery in Dhaka areas.",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250905-WA0003.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250905-WA0003.jpg",
  },
  {
    id: "ear-800-15",
    name: "Spring Meadow Earrings - Handmade Resin Jewelry",
    nameBn: "বসন্ত ফুলের কানের দুল",
    description: "Fresh spring meadow inspired statement earrings with delicate floral touches. বসন্তের গহনা। Handmade resin jewelry Bangladesh perfect for spring occasions. Price: ৳800. Free delivery Gulshan, Dhanmondi, Bashundhara.",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250905-WA0004.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250905-WA0004.jpg",
  },
  {
    id: "ear-800-16",
    name: "Stardust Shimmer Earrings - Handmade Resin Jewelry",
    nameBn: "তারার ঝলক কানের দুল",
    description: "Shimmering stardust effect statement earrings with glitter and preserved flowers. ঝলমলে গহনা। Premium handmade resin jewelry Bangladesh with sparkle effect. Price: ৳800. Free delivery in Dhaka (Gulshan, Dhanmondi, Mirpur).",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250905-WA0005.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250905-WA0005.jpg",
  },
  {
    id: "ear-800-17",
    name: "Royal Garden Collection Earrings - Handmade Resin Jewelry",
    nameBn: "রাজকীয় বাগান কানের দুল",
    description: "Regal garden-themed statement earrings with premium detailing. রাজকীয় ডিজাইন। Luxury handmade resin jewelry Bangladesh craftsmanship. Price: ৳800. Free delivery Gulshan, Dhanmondi, Bashundhara, Mirpur.",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250905-WA0006.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250905-WA0006.jpg",
  },
  {
    id: "ear-800-18",
    name: "Aurora Borealis Earrings - Handmade Resin Jewelry",
    nameBn: "অরোরা রঙের কানের দুল",
    description: "Northern lights inspired statement earrings with mesmerizing color gradients. রঙিন গ্রেডিয়েন্ট ডিজাইন। Premium handmade resin jewelry Bangladesh with unique color effect. Price: ৳800. Free delivery in Dhaka areas.",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250905-WA0007.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250905-WA0007.jpg",
  },
  {
    id: "ear-800-19",
    name: "Vintage Lace Pattern Earrings - Handmade Resin Jewelry",
    nameBn: "ভিনটেজ লেইস কানের দুল",
    description: "Delicate lace pattern statement earrings in premium resin. ভিনটেজ ডিজাইন। Vintage-inspired handmade resin jewelry Bangladesh with modern elegance. Price: ৳800. Free delivery Gulshan, Dhanmondi, Bashundhara.",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250905-WA0008.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250905-WA0008.jpg",
  },

  // ============ EARRINGS - 990tk ============
  {
    id: "ear-990-1",
    name: "Black Floral Luxury Earrings - Premium Handmade Resin Jewelry",
    nameBn: "কালো ফুলের প্রিমিয়াম কানের দুল",
    description: "Sophisticated black floral statement earrings with premium gold accents. লাক্সারি হাতে তৈরি গহনা। Luxury handmade resin jewelry Bangladesh perfect for elegant evening occasions. Price: ৳990. Free delivery in Dhaka (Gulshan, Dhanmondi, Bashundhara, Mirpur). Premium quality craftsmanship.",
    price: 990,
    category: "earrings",
    images: [
      "/assets/products/earrings/990tk/black floral earring/main.jpg",
      "/assets/products/earrings/990tk/black floral earring/IMG-20240804-WA0002.jpg",
      "/assets/products/earrings/990tk/black floral earring/IMG-20240805-WA0002.jpg",
      "/assets/products/earrings/990tk/black floral earring/IMG-20240805-WA0003.jpg",
      "/assets/products/earrings/990tk/black floral earring/IMG-20240805-WA0004.jpg",
      "/assets/products/earrings/990tk/black floral earring/IMG-20240825-WA0001.jpg",
      "/assets/products/earrings/990tk/black floral earring/IMG-20240825-WA0004.jpg",
    ],
    mainImage: "/assets/products/earrings/990tk/black floral earring/main.jpg",
    featured: true,
  },
  {
    id: "ear-990-2",
    name: "Pink Floral Designer Earrings - Premium Handmade Resin Jewelry",
    nameBn: "গোলাপি ফুলের ডিজাইনার কানের দুল",
    description: "Exquisite pink floral designer statement earrings with preserved rose elements. প্রিমিয়াম রেজিন জুয়েলারি। Premium quality handmade resin jewelry Bangladesh. Price: ৳990. Free delivery in Dhaka areas (Gulshan, Banasree, Niketon). Perfect for weddings.",
    price: 990,
    category: "earrings",
    images: [
      "/assets/products/earrings/990tk/floral earring pink/main.jpg",
      "/assets/products/earrings/990tk/floral earring pink/IMG-20240807-WA0002.jpg",
      "/assets/products/earrings/990tk/floral earring pink/IMG-20240807-WA0003.jpg",
      "/assets/products/earrings/990tk/floral earring pink/IMG-20240807-WA0004.jpg",
      "/assets/products/earrings/990tk/floral earring pink/IMG_20240829_000510_819.jpg",
    ],
    mainImage: "/assets/products/earrings/990tk/floral earring pink/main.jpg",
    featured: true,
  },

  // ============ KEYCHAINS - 80tk ============
  {
    id: "key-80-1",
    name: "Islamic Calligraphy Keychain - Handmade Resin Gift",
    nameBn: "ইসলামিক ক্যালিগ্রাফি চাবির রিং",
    description: "Beautiful Islamic calligraphy keychains with elegant Arabic designs. হাতে তৈরি ইসলামিক গিফট। Handmade resin gift Bangladesh perfect for daily use and thoughtful Islamic gifts. Price: ৳80. Free delivery in Dhaka (Gulshan, Dhanmondi, Bashundhara). Affordable Islamic keychains.",
    price: 80,
    category: "keychains",
    images: [
      "/assets/products/keychain/80tk/islamic keychains/main.jpg",
      "/assets/products/keychain/80tk/islamic keychains/IMG-20250322-WA0006.jpg",
      "/assets/products/keychain/80tk/islamic keychains/IMG-20250614-WA0004.jpg",
      "/assets/products/keychain/80tk/islamic keychains/IMG-20250614-WA0005.jpg",
      "/assets/products/keychain/80tk/islamic keychains/IMG-20250614-WA0007.jpg",
      "/assets/products/keychain/80tk/islamic keychains/IMG-20250614-WA0008.jpg",
      "/assets/products/keychain/80tk/islamic keychains/IMG-20250614-WA0009.jpg",
      "/assets/products/keychain/80tk/islamic keychains/IMG-20250614-WA0010.jpg",
    ],
    mainImage: "/assets/products/keychain/80tk/islamic keychains/main.jpg",
    featured: true,
  },
  {
    id: "key-80-2",
    name: "Letter M Personalized Keychain - Custom Resin Gift",
    nameBn: "এম অক্ষর চাবির রিং",
    description: "Customized letter M initial keychain in colorful handcrafted resin. পার্সনালাইজড গিফট। Perfect personalized gift accessory for names starting with M in Bangladesh. Price: ৳80. Free delivery Dhaka (Gulshan, Dhanmondi, Bashundhara).",
    price: 80,
    category: "keychains",
    images: [
      "/assets/products/keychain/80tk/letter m/IMG-20241203-WA0001.jpg",
    ],
    mainImage: "/assets/products/keychain/80tk/letter m/IMG-20241203-WA0001.jpg",
  },
  {
    id: "key-80-3",
    name: "Letter P Custom Keychain - Personalized Gift Bangladesh",
    nameBn: "পি অক্ষর চাবির রিং",
    description: "Personalized letter P initial keychain with beautiful floral design. হাতে তৈরি কাস্টম গিফট। Handmade resin gift Bangladesh ideal accessory for custom gifts. Price: ৳80. Free delivery in Dhaka.",
    price: 80,
    category: "keychains",
    images: [
      "/assets/products/keychain/80tk/letter p/IMG-20250322-WA0005.jpg",
    ],
    mainImage: "/assets/products/keychain/80tk/letter p/IMG-20250322-WA0005.jpg",
  },
  {
    id: "key-80-4",
    name: "Letter Z Alphabet Keychain - Custom Resin Gift",
    nameBn: "জেড অক্ষর চাবির রিং",
    description: "Colorful letter Z initial keychain with decorative elements. হাতে তৈরি রেজিন গিফট। Handmade resin gift Bangladesh custom alphabet accessory for personalization. Price: ৳80. Free delivery Gulshan, Dhanmondi, Mirpur.",
    price: 80,
    category: "keychains",
    images: [
      "/assets/products/keychain/80tk/letter z/IMG-20241220-WA0000.jpg",
      "/assets/products/keychain/80tk/letter z/IMG-20241220-WA0001.jpg",
      "/assets/products/keychain/80tk/letter z/IMG-20241220-WA0002.jpg",
      "/assets/products/keychain/80tk/letter z/IMG-20241220-WA0003.jpg",
      "/assets/products/keychain/80tk/letter z/IMG-20241220-WA0005.jpg",
      "/assets/products/keychain/80tk/letter z/IMG-20241220-WA0006.jpg",
    ],
    mainImage: "/assets/products/keychain/80tk/letter z/IMG-20241220-WA0000.jpg",
  },
  {
    id: "key-80-5",
    name: "Letter N Initial Keychain - Personalized Gift Bangladesh",
    nameBn: "এন অক্ষর চাবির রিং",
    description: "Handcrafted letter N initial keychain with beautiful resin design. পার্সনালাইজড চাবির রিং। Personalized alphabet accessory perfect for gifts in Bangladesh. Price: ৳80. Free delivery in Dhaka areas.",
    price: 80,
    category: "keychains",
    images: [
      "/assets/products/keychain/80tk/Letter- N/IMG_20240907_083616_540.jpg",
    ],
    mainImage: "/assets/products/keychain/80tk/Letter- N/IMG_20240907_083616_540.jpg",
  },
  {
    id: "key-80-6",
    name: "Oval Floral Keychain Collection - Handmade Resin Gift",
    nameBn: "ফুলের চাবির রিং কালেকশন",
    description: "Elegant oval-shaped keychains with preserved flowers in resin. হাতে তৈরি রেজিন গিফট। Handmade resin gift Bangladesh available in vibrant colors for everyday accessories. Price: ৳80. Free delivery Dhaka (Gulshan, Dhanmondi, Mirpur). Custom gift choice.",
    price: 80,
    category: "keychains",
    images: [
      "/assets/products/keychain/80tk/oval keychains/IMG-20250322-WA0002.jpg",
      "/assets/products/keychain/80tk/oval keychains/IMG-20250322-WA0003.jpg",
      "/assets/products/keychain/80tk/oval keychains/IMG-20250322-WA0004.jpg",
      "/assets/products/keychain/80tk/oval keychains/IMG-20250322-WA0011.jpg",
      "/assets/products/keychain/80tk/oval keychains/IMG-20250322-WA0012.jpg",
      "/assets/products/keychain/80tk/oval keychains/IMG-20250322-WA0013.jpg",
    ],
    mainImage: "/assets/products/keychain/80tk/oval keychains/IMG-20250322-WA0002.jpg",
  },

  // ============ KEYCHAINS - 99tk ============
  {
    id: "key-99-1",
    name: "Letter S Personalized Keychain - Custom Resin Gift",
    nameBn: "এস অক্ষর চাবির রিং",
    description: "Custom letter S initial keychain with premium finish and floral elements. হাতে তৈরি গিফট। Handmade resin gift Bangladesh perfect accessory for personalization. Price: ৳99. Free delivery Dhaka (Gulshan, Dhanmondi, Bashundhara).",
    price: 99,
    category: "keychains",
    images: [
      "/assets/products/keychain/99tk/letter s/IMG-20240904-WA0003.jpg",
      "/assets/products/keychain/99tk/letter s/IMG-20240904-WA0013.jpg",
      "/assets/products/keychain/99tk/letter s/IMG-20240904-WA0014.jpg",
      "/assets/products/keychain/99tk/letter s/IMG-20240904-WA0015.jpg",
      "/assets/products/keychain/99tk/letter s/IMG_20240905_232313_842.jpg",
      "/assets/products/keychain/99tk/letter s/IMG_20240905_232313_887.jpg",
    ],
    mainImage: "/assets/products/keychain/99tk/letter s/IMG-20240904-WA0003.jpg",
  },
  {
    id: "key-99-2",
    name: "Letter V Alphabet Keychain - Personalized Gift Bangladesh",
    nameBn: "ভি অক্ষর চাবির রিং",
    description: "Stylish letter V initial keychain in colorful handcrafted resin. কাস্টম গিফট। Perfect personalized gift accessory Bangladesh with unique design. Price: ৳99. Free delivery in Dhaka areas (Gulshan, Dhanmondi, Mirpur).",
    price: 99,
    category: "keychains",
    images: [
      "/assets/products/keychain/99tk/letter v/IMG-20250322-WA0001.jpg",
    ],
    mainImage: "/assets/products/keychain/99tk/letter v/IMG-20250322-WA0001.jpg",
  },

  // ============ KEYCHAINS - 390tk ============
  {
    id: "key-390-1",
    name: "Panda Theme Double-Sided Keychain - Custom Resin Gift",
    nameBn: "পান্ডা থিম চাবির রিং",
    description: "Adorable panda-themed double-sided design keychain with premium resin craft. হাতে তৈরি কাস্টম গিফট। Perfect for animal lovers and unique gifts in Bangladesh. Price: ৳390. Free delivery Dhaka (Gulshan, Dhanmondi, Bashundhara). Custom keychain design.",
    price: 390,
    category: "keychains",
    images: [
      "/assets/products/keychain/390tk/double side design/panda-theme/main.jpg",
      "/assets/products/keychain/390tk/double side design/panda-theme/IMG-20250322-WA0010.jpg",
    ],
    mainImage: "/assets/products/keychain/390tk/double side design/panda-theme/main.jpg",
    featured: true,
  },
  {
    id: "key-390-2",
    name: "Spider Theme Double-Sided Keychain - Custom Resin Gift",
    nameBn: "স্পাইডার থিম চাবির রিং",
    description: "Unique spider-themed double-sided design keychain with creative resin work. কাস্টম গিফট ঢাকা। Perfect for superhero fans and collectors in Bangladesh. Price: ৳390. Free delivery Gulshan, Dhanmondi, Bashundhara. Handmade custom gift.",
    price: 390,
    category: "keychains",
    images: [
      "/assets/products/keychain/390tk/double side design/spider-Theme/main.jpg",
      "/assets/products/keychain/390tk/double side design/spider-Theme/IMG-20250322-WA0008.jpg",
    ],
    mainImage: "/assets/products/keychain/390tk/double side design/spider-Theme/main.jpg",
    featured: true,
  },
  {
    id: "key-390-3",
    name: "Floral Alphabet Keychain Collection - Personalized Gift Bangladesh",
    nameBn: "ফুলের অক্ষর চাবির রিং",
    description: "Premium floral alphabet keychains with preserved flowers and customizable letters. পার্সনালাইজড গিফট। Perfect personalized gift Bangladesh and custom accessories. Price: ৳390. Free delivery in Dhaka (Gulshan, Dhanmondi, Mirpur). Handmade custom keychain.",
    price: 390,
    category: "keychains",
    images: [
      "/assets/products/keychain/390tk/floral keychains/main.jpg",
      "/assets/products/keychain/390tk/floral keychains/IMG-20250120-WA0003.jpg",
      "/assets/products/keychain/390tk/floral keychains/IMG-20250120-WA0004.jpg",
      "/assets/products/keychain/390tk/floral keychains/IMG-20250120-WA0005.jpg",
      "/assets/products/keychain/390tk/floral keychains/IMG-20250120-WA0006.jpg",
      "/assets/products/keychain/390tk/floral keychains/IMG-20250120-WA0007.jpg",
      "/assets/products/keychain/390tk/floral keychains/IMG-20250120-WA0008.jpg",
    ],
    mainImage: "/assets/products/keychain/390tk/floral keychains/main.jpg",
  },

  // ============ PENDANTS - 290tk ============
  {
    id: "pen-290-1",
    name: "Daisy Flower Pendant Necklace - Handmade Resin Jewelry",
    nameBn: "ডেজি ফুল পেন্ডেন্ট",
    description: "Fresh daisy flower pendant preserved in crystal clear resin. হাতে তৈরি পেন্ডেন্ট। Delicate handmade resin jewelry Bangladesh perfect for nature lovers and everyday wear. Price: ৳290. Free delivery Dhaka.",
    price: 290,
    category: "pendants",
    images: [
      "/assets/products/pendant/290tk/daisy pendant/IMG_20240627_231200_045.jpg",
      "/assets/products/pendant/290tk/daisy pendant/IMG_20240627_231200_263.jpg",
    ],
    mainImage: "/assets/products/pendant/290tk/daisy pendant/IMG_20240627_231200_045.jpg",
  },
  {
    id: "pen-290-2",
    name: "Botanical Floral Pendant Collection - Handmade Resin Jewelry",
    nameBn: "ফুলের পেন্ডেন্ট নেকলেস",
    description: "Beautiful botanical pendant necklaces with preserved flowers in resin. হাতে তৈরি পেন্ডেন্ট। Handmade resin jewelry Bangladesh available in various vibrant floral designs. Price: ৳290. Free delivery Dhaka (Gulshan, Dhanmondi, Bashundhara). Pendant necklace Bangladesh.",
    price: 290,
    category: "pendants",
    images: [
      "/assets/products/pendant/290tk/floral pendants/main.jpg",
      "/assets/products/pendant/290tk/floral pendants/IMG-20250322-WA0017.jpg",
      "/assets/products/pendant/290tk/floral pendants/IMG-20250322-WA0018.jpg",
      "/assets/products/pendant/290tk/floral pendants/IMG-20250322-WA0019.jpg",
      "/assets/products/pendant/290tk/floral pendants/IMG-20250322-WA0020.jpg",
      "/assets/products/pendant/290tk/floral pendants/IMG_20240902_230812.png",
    ],
    mainImage: "/assets/products/pendant/290tk/floral pendants/main.jpg",
    featured: true,
  },
  {
    id: "pen-290-3",
    name: "Rose Petal Pendant Necklace - Handmade Resin Jewelry",
    nameBn: "গোলাপ পাপড়ি পেন্ডেন্ট",
    description: "Romantic rose petal pendant with preserved petals in crystal resin. গোলাপ পেন্ডেন্ট। Elegant handmade resin jewelry Bangladesh perfect for special occasions. Price: ৳290. Free delivery in Dhaka (Gulshan, Dhanmondi, Bashundhara).",
    price: 290,
    category: "pendants",
    images: [
      "/assets/products/pendant/290tk/rose pendant/IMG_20240626_221435_002.jpg",
      "/assets/products/pendant/290tk/rose pendant/IMG_20240626_221435_122.jpg",
      "/assets/products/pendant/290tk/rose pendant/IMG_20240901_184539.jpg",
      "/assets/products/pendant/290tk/rose pendant/IMG_20240901_184607.jpg",
    ],
    mainImage: "/assets/products/pendant/290tk/rose pendant/IMG_20240626_221435_002.jpg",
  },

  // ============ PENDANTS - 499tk ============
  {
    id: "pen-499-1",
    name: "Black & Pink Gradient Pendant - Handmade Resin Jewelry",
    nameBn: "কালো গোলাপি পেন্ডেন্ট",
    description: "Stunning black and pink gradient pendant with modern artistic design. আধুনিক ডিজাইন। Premium handmade resin jewelry Bangladesh with unique color blend. Price: ৳499. Free delivery Dhaka (Gulshan, Dhanmondi, Mirpur).",
    price: 499,
    category: "pendants",
    images: [
      "/assets/products/pendant/499tk/black pink pendant/IMG-20250310-WA0008.jpg",
      "/assets/products/pendant/499tk/black pink pendant/IMG-20250310-WA0009.jpg",
    ],
    mainImage: "/assets/products/pendant/499tk/black pink pendant/IMG-20250310-WA0008.jpg",
  },
  {
    id: "pen-499-2",
    name: "Butterfly Garden Pendant Necklace - Handmade Resin Jewelry",
    nameBn: "প্রজাপতি বাগান পেন্ডেন্ট",
    description: "Enchanting butterfly garden pendant with preserved natural elements. হাতে তৈরি রেজিন জুয়েলারি। Premium resin jewelry perfect for nature enthusiasts in Bangladesh. Price: ৳499. Free delivery Dhaka (Gulshan, Dhanmondi, Bashundhara). Pendant necklace Bangladesh.",
    price: 499,
    category: "pendants",
    images: [
      "/assets/products/pendant/499tk/butterfly pendant/main.jpg",
      "/assets/products/pendant/499tk/butterfly pendant/IMG-20250310-WA0003.jpg",
      "/assets/products/pendant/499tk/butterfly pendant/IMG-20250310-WA0004.jpg",
      "/assets/products/pendant/499tk/butterfly pendant/IMG-20250310-WA0005.jpg",
      "/assets/products/pendant/499tk/butterfly pendant/IMG-20250310-WA0006.jpg",
      "/assets/products/pendant/499tk/butterfly pendant/IMG-20250310-WA0007.jpg",
    ],
    mainImage: "/assets/products/pendant/499tk/butterfly pendant/main.jpg",
    featured: true,
  },
  {
    id: "pen-499-3",
    name: "Premium Floral Pendant Necklace - Handmade Resin Jewelry",
    nameBn: "প্রিমিয়াম ফুলের পেন্ডেন্ট",
    description: "Luxury floral pendant with intricate preserved flower designs. লাক্সারি হাতে তৈরি গহনা। Premium quality handmade resin jewelry Bangladesh. Price: ৳499. Free delivery in Dhaka (Gulshan, Dhanmondi, Mirpur, Banasree). Pendant necklace Bangladesh best quality.",
    price: 499,
    category: "pendants",
    images: [
      "/assets/products/pendant/499tk/floral pendant premium/main.jpg",
      "/assets/products/pendant/499tk/floral pendant premium/IMG-20241028-WA0017.jpg",
      "/assets/products/pendant/499tk/floral pendant premium/IMG-20241028-WA0018.jpg",
      "/assets/products/pendant/499tk/floral pendant premium/IMG-20241028-WA0019.jpg",
    ],
    mainImage: "/assets/products/pendant/499tk/floral pendant premium/main.jpg",
    featured: true,
  },
  {
    id: "pen-499-4",
    name: "Regular Floral Pendant Collection - Handmade Resin Jewelry",
    nameBn: "ফুলের পেন্ডেন্ট কালেকশন",
    description: "Beautiful floral pendant necklaces with preserved flowers in resin. হাতে তৈরি পেন্ডেন্ট। Handmade resin jewelry Bangladesh available in various vibrant colors. Price: ৳499. Free delivery in Dhaka areas.",
    price: 499,
    category: "pendants",
    images: [
      "/assets/products/pendant/499tk/floral pendant-regular/main.png",
      "/assets/products/pendant/499tk/floral pendant-regular/2.jpg",
      "/assets/products/pendant/499tk/floral pendant-regular/IMG-20240906-WA0000.jpg",
      "/assets/products/pendant/499tk/floral pendant-regular/IMG-20250322-WA0015.jpg",
      "/assets/products/pendant/499tk/floral pendant-regular/IMG_20240905_232313_748.jpg",
      "/assets/products/pendant/499tk/floral pendant-regular/IMG_20240905_232313_798.jpg",
    ],
    mainImage: "/assets/products/pendant/499tk/floral pendant-regular/main.png",
  },
  {
    id: "pen-499-5",
    name: "Natural Leaf Pendant Necklace - Handmade Resin Jewelry",
    nameBn: "পাতার পেন্ডেন্ট",
    description: "Organic leaf pendant with real preserved leaves in crystal resin. প্রাকৃতিক পাতার গহনা। Nature-inspired handmade resin jewelry Bangladesh for botanical lovers. Price: ৳499. Free delivery Dhaka (Gulshan, Dhanmondi, Bashundhara).",
    price: 499,
    category: "pendants",
    images: [
      "/assets/products/pendant/499tk/leaf pendant/main.jpg",
      "/assets/products/pendant/499tk/leaf pendant/IMG-20240802-WA0003.jpg",
      "/assets/products/pendant/499tk/leaf pendant/IMG-20240802-WA0005.jpg",
      "/assets/products/pendant/499tk/leaf pendant/IMG_20240819_212559_950.jpg",
      "/assets/products/pendant/499tk/leaf pendant/IMG_20240819_212600_044.jpg",
    ],
    mainImage: "/assets/products/pendant/499tk/leaf pendant/main.jpg",
  },
  {
    id: "pen-499-6",
    name: "Pink Rose Garden Pendant - Handmade Resin Jewelry",
    nameBn: "গোলাপি গোলাপ পেন্ডেন্ট",
    description: "Delicate pink rose pendant with preserved petals in resin. রোমান্টিক পেন্ডেন্ট। Romantic handmade resin jewelry Bangladesh perfect for elegant style. Price: ৳499. Free delivery in Dhaka.",
    price: 499,
    category: "pendants",
    images: [
      "/assets/products/pendant/499tk/pink rose pendant/IMG_20240902_230836.png",
      "/assets/products/pendant/499tk/pink rose pendant/IMG_20240907_083616_384.jpg",
    ],
    mainImage: "/assets/products/pendant/499tk/pink rose pendant/IMG_20240902_230836.png",
  },
  {
    id: "pen-499-7",
    name: "Premium Black Rose Pendant - Handmade Resin Jewelry",
    nameBn: "কালো গোলাপ পেন্ডেন্ট",
    description: "Elegant black rose pendant necklace with luxury preserved rose. প্রিমিয়াম রেজিন জুয়েলারি। Premium resin jewelry Bangladesh perfect for sophisticated occasions. Price: ৳499. Free delivery Dhaka (Gulshan, Dhanmondi, Bashundhara). Rose pendant necklace.",
    price: 499,
    category: "pendants",
    images: [
      "/assets/products/pendant/499tk/Premium Black Rose Pendant/FB_IMG_1742256020796.jpg",
      "/assets/products/pendant/499tk/Premium Black Rose Pendant/FB_IMG_1742256023824.jpg",
    ],
    mainImage: "/assets/products/pendant/499tk/Premium Black Rose Pendant/FB_IMG_1742256020796.jpg",
    featured: true,
  },
  {
    id: "pen-499-8",
    name: "Round Rose Pendant Necklace - Handmade Resin Jewelry",
    nameBn: "গোল গোলাপ পেন্ডেন্ট",
    description: "Classic round rose pendant with preserved flowers in resin. ক্লাসিক ডিজাইন। Timeless handmade resin jewelry Bangladesh design. Price: ৳499. Free delivery Dhaka (Gulshan, Dhanmondi, Mirpur).",
    price: 499,
    category: "pendants",
    images: [
      "/assets/products/pendant/499tk/Rose pendant Round/main.jpg",
      "/assets/products/pendant/499tk/Rose pendant Round/IMG_20240902_230707.png",
      "/assets/products/pendant/499tk/Rose pendant Round/IMG_20240902_230732.png",
    ],
    mainImage: "/assets/products/pendant/499tk/Rose pendant Round/main.jpg",
  },
  {
    id: "pen-499-9",
    name: "Teardrop Rose Pendant Necklace - Handmade Resin Jewelry",
    nameBn: "টিয়ারড্রপ গোলাপ পেন্ডেন্ট",
    description: "Elegant teardrop-shaped rose pendant with romantic preserved flower design. হাতে তৈরি পেন্ডেন্ট। Premium handmade resin jewelry Bangladesh. Price: ৳499. Free delivery in Dhaka areas.",
    price: 499,
    category: "pendants",
    images: [
      "/assets/products/pendant/499tk/Teardrop Rose Pendant/main.png",
      "/assets/products/pendant/499tk/Teardrop Rose Pendant/2_20240902_230558_0001.png",
    ],
    mainImage: "/assets/products/pendant/499tk/Teardrop Rose Pendant/main.png",
  },

  // ============ PHOTO FRAMES - 500tk ============
  {
    id: "frame-500-1",
    name: "Anniversary Celebration Photo Frame - Custom Gift Bangladesh",
    nameBn: "বার্ষিকী ফটো ফ্রেম",
    description: "Beautiful handcrafted anniversary photo frame with resin floral elements. কাস্টম গিফট ঢাকা। Perfect custom gift Bangladesh for celebrating special love milestones and memories. Price: ৳500. Free delivery in Dhaka (Gulshan, Dhanmondi, Bashundhara). Photo frame customize Dhaka.",
    price: 500,
    category: "photoframes",
    images: [
      "/assets/products/photoframe/500tk/1x/ani2.jpg",
      "/assets/products/photoframe/500tk/1x/aniversary.jpg",
    ],
    mainImage: "/assets/products/photoframe/500tk/1x/ani2.jpg",
    featured: true,
  },

  // ============ PHOTO FRAMES - 1000tk ============
  {
    id: "frame-1000-1",
    name: "Premium Memory Photo Frame - Custom Gift Bangladesh",
    nameBn: "প্রিমিয়াম মেমোরি ফটো ফ্রেম",
    description: "Luxury handcrafted photo frame with resin flowers and premium quality finish. কাস্টম ফটো ফ্রেম। Perfect frame for cherished wedding and birthday memories in Bangladesh. Price: ৳1000. Free delivery Dhaka (Gulshan, Dhanmondi, Bashundhara). Photo frame customize Dhaka premium.",
    price: 1000,
    category: "photoframes",
    images: [
      "/assets/products/photoframe/1000tk/IMG-20240119-WA0000.jpg",
      "/assets/products/photoframe/1000tk/IMG20240408172627.jpg",
    ],
    mainImage: "/assets/products/photoframe/1000tk/IMG-20240119-WA0000.jpg",
    featured: true,
  },

  // ============ SUNGLASSES - 890tk ============
  {
    id: "sun-890-1",
    name: "Designer Fashion Sunglasses - Stylish Eyewear Bangladesh",
    nameBn: "ডিজাইনার সানগ্লাস",
    description: "Stylish designer sunglasses with UV protection and resin accents. ফ্যাশন সানগ্লাস বাংলাদেশ। Trendy eyewear perfect for fashion-forward looks in Dhaka. Price: ৳890. Free delivery Gulshan, Dhanmondi, Bashundhara. Sunglass Bangladesh online.",
    price: 890,
    category: "sunglasses",
    images: [
      "/assets/products/sunglass/890tk/2_20240327_161203_0001.png",
      "/assets/products/sunglass/890tk/IMG-20240510-WA0006.jpg",
    ],
    mainImage: "/assets/products/sunglass/890tk/2_20240327_161203_0001.png",
    featured: true,
  },

  // ============ BOOKMARKS - 99tk ============
  {
    id: "book-99-1",
    name: "Floral Pressed Bookmark - Handmade Gift Bangladesh",
    nameBn: "ফুলের বুকমার্ক",
    description: "Delicate pressed flower bookmark preserved in clear resin. হাতে তৈরি বুকমার্ক। Beautiful handmade gift Bangladesh reading accessory for book lovers. Price: ৳99. Free delivery Dhaka (Gulshan, Dhanmondi, Bashundhara).",
    price: 99,
    category: "bookmarks",
    images: [
      "/assets/products/others/bookmark/99tk/IMG-20240921-WA0000.jpg",
      "/assets/products/others/bookmark/99tk/IMG-20250203-WA0009.jpg",
    ],
    mainImage: "/assets/products/others/bookmark/99tk/IMG-20240921-WA0000.jpg",
  },

  // ============ BOOKMARKS - 199tk ============
  {
    id: "book-199-1",
    name: "Islamic Calligraphy Bookmark - Handmade Gift Bangladesh",
    nameBn: "ইসলামিক বুকমার্ক",
    description: "Premium Islamic bookmark with beautiful Arabic calligraphy design. হাতে তৈরি ইসলামিক উপহার। Handmade resin gift Bangladesh perfect accessory for Quran and Islamic books. Price: ৳199. Free delivery Dhaka (Gulshan, Dhanmondi, Mirpur). Islamic gift Bangladesh.",
    price: 199,
    category: "bookmarks",
    images: [
      "/assets/products/others/bookmark/199tk/islamic bookmark/IMG20241029224133.jpg",
    ],
    mainImage: "/assets/products/others/bookmark/199tk/islamic bookmark/IMG20241029224133.jpg",
    featured: true,
  },
  {
    id: "book-199-2",
    name: "Pink Floral Tassel Bookmark - Handmade Gift Bangladesh",
    nameBn: "গোলাপি ফুলের বুকমার্ক",
    description: "Elegant pink floral bookmark with decorative tassel design. হাতে তৈরি রেজিন গিফট। Premium handmade resin gift Bangladesh perfect for book enthusiasts. Price: ৳199. Free delivery in Dhaka.",
    price: 199,
    category: "bookmarks",
    images: [
      "/assets/products/others/bookmark/199tk/pink bookmark/IMG20250720214936.jpg",
      "/assets/products/others/bookmark/199tk/pink bookmark/IMG20250720214959.jpg",
    ],
    mainImage: "/assets/products/others/bookmark/199tk/pink bookmark/IMG20250720214936.jpg",
  },

  // ============ BRACELETS ============
  {
    id: "brac-1",
    name: "Purple Floral Resin Bracelet - Handmade Jewelry Bangladesh",
    nameBn: "বেগুনি ফুলের ব্রেসলেট",
    description: "Stunning purple floral bracelet with preserved flowers encased in resin. হাতে তৈরি ব্রেসলেট। Handmade wrist jewelry Bangladesh perfect for elegant occasions. Price: ৳450. Free delivery in Dhaka (Gulshan, Dhanmondi, Bashundhara). Bracelate Bangladesh handmade.",
    price: 450,
    category: "bracelets",
    images: [
      "/assets/products/others/bracelate/purple bracelate/IMG-20240829-WA0003.jpg",
      "/assets/products/others/bracelate/purple bracelate/IMG-20240829-WA0005.jpg",
      "/assets/products/others/bracelate/purple bracelate/IMG-20250322-WA0027.jpg",
      "/assets/products/others/bracelate/purple bracelate/received_872981408135506.jpeg",
    ],
    mainImage: "/assets/products/others/bracelate/purple bracelate/IMG-20240829-WA0003.jpg",
    featured: true,
  },

  // ============ PENS ============
  {
    id: "pen-1",
    name: "Premium Rose Petal Resin Pen - Handmade Gift Bangladesh",
    nameBn: "গোলাপ পাপড়ি রেজিন কলম",
    description: "Luxury handcrafted pen with preserved rose petals in resin. হাতে তৈরি কলম। Premium quality writing instrument Bangladesh perfect for gifts and office use. Price: ৳250. Free delivery Dhaka (Gulshan, Dhanmondi, Bashundhara). Pen Bangladesh custom.",
    price: 250,
    category: "pens",
    images: [
      "/assets/products/others/pen/Premium Rose patel pen/IMG-20250203-WA0001.jpg",
      "/assets/products/others/pen/Premium Rose patel pen/IMG-20250203-WA0002.jpg",
      "/assets/products/others/pen/Premium Rose patel pen/IMG-20250203-WA0003.jpg",
      "/assets/products/others/pen/Premium Rose patel pen/IMG-20250203-WA0004.jpg",
    ],
    mainImage: "/assets/products/others/pen/Premium Rose patel pen/IMG-20250203-WA0001.jpg",
    featured: true,
  },
  {
    id: "pen-2",
    name: "Regular Floral Resin Pen - Handmade Gift Bangladesh",
    nameBn: "ফুলের রেজিন কলম",
    description: "Beautiful floral design resin pen with preserved flowers. হাতে তৈরি কলম। Handmade gift Bangladesh writing accessory perfect for daily use. Price: ৳250. Free delivery Dhaka (Gulshan, Dhanmondi, Mirpur).",
    price: 250,
    category: "pens",
    images: [
      "/assets/products/others/pen/Regular Pen/IMG-20240921-WA0003.jpg",
      "/assets/products/others/pen/Regular Pen/IMG-20240921-WA0006.jpg",
      "/assets/products/others/pen/Regular Pen/IMG-20241105-WA0004.jpg",
    ],
    mainImage: "/assets/products/others/pen/Regular Pen/IMG-20240921-WA0003.jpg",
  },

  // ============ PHONE COVERS ============
  {
    id: "phone-1",
    name: "Floral Resin Phone Cover - Handmade Phone Case Bangladesh",
    nameBn: "ফুলের রেজিন ফোন কভার",
    description: "Protective phone case with beautiful floral resin design and preserved flowers. হাতে তৈরি ফোন কভার। Handmade smartphone cover Bangladesh with unique style. Price: ৳650. Free delivery in Dhaka (Gulshan, Dhanmondi, Bashundhara). Phone cover customize Bangladesh.",
    price: 650,
    category: "phonecovers",
    images: [
      "/assets/products/others/phoneCover/IMG-20240906-WA0005.jpg",
      "/assets/products/others/phoneCover/IMG-20240906-WA0007.jpg",
    ],
    mainImage: "/assets/products/others/phoneCover/IMG-20240906-WA0005.jpg",
    featured: true,
  },

  // ============ DECORATIVE FRAMES ============
  {
    id: "dframe-1",
    name: "Birthday Celebration Resin Frame - Custom Gift Bangladesh",
    nameBn: "জন্মদিনের ফ্রেম",
    description: "Personalized birthday frame with handcrafted resin flowers. জন্মদিনের উপহার। Decorative frame perfect for special birthday gifts and memories in Bangladesh. Price: ৳850. Free delivery Dhaka.",
    price: 850,
    category: "frames",
    images: [
      "/assets/products/others/resin frame/Birthday frame.jpg",
    ],
    mainImage: "/assets/products/others/resin frame/Birthday frame.jpg",
  },
  {
    id: "dframe-2",
    name: "Gold & White Wedding Calendar Frame - Custom Gift Bangladesh",
    nameBn: "সোনালী বিয়ের ফ্রেম",
    description: "Luxurious gold and white flower calendar frame with premium handcrafted resin work. হাতে তৈরি বিয়ের উপহার। Perfect for wedding gifts and anniversaries in Bangladesh. Price: ৳850. Free delivery Dhaka (Gulshan, Dhanmondi, Bashundhara). Resin frame handmade wedding gift.",
    price: 850,
    category: "frames",
    images: [
      "/assets/products/others/resin frame/Personalised Resin Gold and White flower Calendar Frame Handmade wedding Gift Birthday.jpeg",
    ],
    mainImage: "/assets/products/others/resin frame/Personalised Resin Gold and White flower Calendar Frame Handmade wedding Gift Birthday.jpeg",
    featured: true,
  },

  // ============ RINGS ============
  {
    id: "ring-1",
    name: "Floral Resin Ring - Handmade Jewelry Bangladesh",
    nameBn: "ফুলের রেজিন আংটি",
    description: "Delicate floral design ring with preserved flowers in resin. হাতে তৈরি আংটি। Handmade resin jewelry Bangladesh perfect for everyday elegance. Price: ৳350. Free delivery Dhaka (Gulshan, Dhanmondi, Bashundhara).",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20240621-WA0005.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20240621-WA0005.jpg",
  },
  {
    id: "ring-2",
    name: "Nature Garden Ring - Handmade Resin Jewelry",
    nameBn: "প্রকৃতির বাগান আংটি",
    description: "Nature-inspired garden ring with botanical elements in resin. হাতে তৈরি গহনা। Handmade resin jewelry Bangladesh for nature lovers. Price: ৳350. Free delivery in Dhaka areas.",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0028.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0028.jpg",
  },
  {
    id: "ring-3",
    name: "Crystal Flower Ring - Handmade Resin Jewelry",
    nameBn: "ক্রিস্টাল ফুল আংটি",
    description: "Crystal-clear flower ring with preserved petals in resin. হাতে তৈরি রেজিন জুয়েলারি। Elegant handmade resin jewelry Bangladesh. Price: ৳350. Free delivery Gulshan, Dhanmondi, Mirpur.",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0029.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0029.jpg",
  },
  {
    id: "ring-4",
    name: "Botanical Element Ring - Handmade Resin Jewelry",
    nameBn: "বোটানিক্যাল আংটি",
    description: "Organic botanical ring with natural plant elements preserved in resin. প্রাকৃতিক উপাদান। Unique handmade resin jewelry Bangladesh design. Price: ৳350. Free delivery in Dhaka.",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0030.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0030.jpg",
  },
  {
    id: "ring-5",
    name: "Ocean Wave Ring - Handmade Resin Jewelry",
    nameBn: "সমুদ্র ঢেউ আংটি",
    description: "Ocean-inspired wave ring with blue hues in resin. সমুদ্রের ডিজাইন। Handmade resin jewelry Bangladesh with flowing design. Price: ৳350. Free delivery Dhaka (Gulshan, Dhanmondi, Bashundhara).",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0031.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0031.jpg",
  },
  {
    id: "ring-6",
    name: "Garden Bloom Ring - Handmade Resin Jewelry",
    nameBn: "বাগান ফুল আংটি",
    description: "Blooming garden flowers preserved in ring form. রঙিন ফুলের আংটি। Colorful handmade resin jewelry Bangladesh. Price: ৳350. Free delivery in Dhaka areas.",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0032.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0032.jpg",
  },
  {
    id: "ring-7",
    name: "Sunset Colors Ring - Handmade Resin Jewelry",
    nameBn: "সন্ধ্যার রঙ আংটি",
    description: "Warm sunset gradient ring design with beautiful color transition. সন্ধ্যার রঙের ডিজাইন। Handmade resin jewelry Bangladesh. Price: ৳350. Free delivery Dhaka (Gulshan, Dhanmondi, Mirpur).",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0033.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0033.jpg",
  },
  {
    id: "ring-8",
    name: "Starlight Shimmer Ring - Handmade Resin Jewelry",
    nameBn: "তারার ঝলক আংটি",
    description: "Starlight-inspired ring with glitter elements in resin. ঝলমলে আংটি। Sparkling handmade resin jewelry Bangladesh. Price: ৳350. Free delivery in Dhaka areas.",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0034.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0034.jpg",
  },
  {
    id: "ring-9",
    name: "Rainbow Garden Ring - Handmade Resin Jewelry",
    nameBn: "রংধনু বাগান আংটি",
    description: "Vibrant rainbow colors in garden design. রংধনু রঙের আংটি। Multicolor handmade resin jewelry Bangladesh. Price: ৳350. Free delivery Dhaka (Gulshan, Dhanmondi, Bashundhara).",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0035.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0035.jpg",
  },
  {
    id: "ring-10",
    name: "Pastel Dream Ring - Handmade Resin Jewelry",
    nameBn: "পাস্টেল স্বপ্ন আংটি",
    description: "Soft pastel colored ring design in resin. নরম রঙের আংটি। Dreamy handmade resin jewelry Bangladesh in gentle hues. Price: ৳350. Free delivery in Dhaka.",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0036.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0036.jpg",
  },
  {
    id: "ring-11",
    name: "Vintage Charm Ring - Handmade Resin Jewelry",
    nameBn: "ভিনটেজ আংটি",
    description: "Vintage-style charm ring with floral elements in resin. ভিনটেজ ডিজাইন। Classic handmade resin jewelry Bangladesh design. Price: ৳350. Free delivery Gulshan, Dhanmondi, Mirpur.",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0037.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0037.jpg",
  },
  {
    id: "ring-12",
    name: "Butterfly Garden Ring - Handmade Resin Jewelry",
    nameBn: "প্রজাপতি বাগান আংটি",
    description: "Delicate butterfly in garden scene ring with preserved elements. প্রজাপতি ডিজাইন। Nature-inspired handmade resin jewelry Bangladesh. Price: ৳350. Free delivery in Dhaka areas.",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0038.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0038.jpg",
  },
  {
    id: "ring-13",
    name: "Moonlight Bloom Ring - Handmade Resin Jewelry",
    nameBn: "চাঁদের আলো ফুল আংটি",
    description: "Moonlit blooms ring design with ethereal floral elements. চাঁদের ডিজাইন। Handmade resin jewelry Bangladesh. Price: ৳350. Free delivery Dhaka (Gulshan, Dhanmondi, Bashundhara).",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0039.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0039.jpg",
  },
  {
    id: "ring-14",
    name: "Spring Meadow Ring - Handmade Resin Jewelry",
    nameBn: "বসন্ত মাঠ আংটি",
    description: "Fresh spring meadow design ring with botanical elements. বসন্তের ফুল। Vibrant handmade resin jewelry Bangladesh. Price: ৳350. Free delivery in Dhaka.",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0040.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0040.jpg",
  },
  {
    id: "ring-15",
    name: "Golden Petals Ring - Handmade Resin Jewelry",
    nameBn: "সোনালী পাপড়ি আংটি",
    description: "Golden petal design ring with shimmer effect in resin. সোনালী ডিজাইন। Elegant handmade resin jewelry Bangladesh. Price: ৳350. Free delivery Gulshan, Dhanmondi, Mirpur.",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0041.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0041.jpg",
  },
  {
    id: "ring-16",
    name: "Crystal Garden Ring - Handmade Resin Jewelry",
    nameBn: "ক্রিস্টাল বাগান আংটি",
    description: "Crystal elements in garden ring design with sparkling resin. ঝলমলে বাগান। Handmade resin jewelry Bangladesh. Price: ৳350. Free delivery in Dhaka areas.",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0042.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0042.jpg",
  },
  {
    id: "ring-17",
    name: "Enchanted Forest Ring - Handmade Resin Jewelry",
    nameBn: "জাদুকরী বন আংটি",
    description: "Mystical enchanted forest ring design with magical elements. জাদুকরী ডিজাইন। Handmade resin jewelry Bangladesh. Price: ৳350. Free delivery Dhaka (Gulshan, Dhanmondi, Bashundhara).",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0043.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0043.jpg",
  },
  {
    id: "ring-18",
    name: "Elegant Flora Ring - Handmade Resin Jewelry",
    nameBn: "এলিগ্যান্ট ফুল আংটি",
    description: "Elegant floral arrangement ring with sophisticated design. মার্জিত ফুলের ডিজাইন। Handmade resin jewelry Bangladesh. Price: ৳350. Free delivery in Dhaka.",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250324-WA0000.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250324-WA0000.jpg",
  },
];

// Helper function to get products by category
export function getProductsByCategory(categoryId: string): Product[] {
  if (categoryId === "all") return products;
  return products.filter((product) => product.category === categoryId);
}

// Helper function to get featured products
export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

// Helper function to get product by ID
export function getProductById(productId: string): Product | undefined {
  return products.find((product) => product.id === productId);
}

// Helper function to format price
export function formatPrice(price: number): string {
  return `৳${price.toLocaleString()}`;
}
