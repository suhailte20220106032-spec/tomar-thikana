// src/lib/products.ts

export interface Product {
  id: string;
  name: string;
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
    name: "Rose Petal Drop Earrings",
    description: "Delicate handcrafted rose petal earrings with elegant drop design, perfect for adding a romantic touch to any outfit",
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
    name: "Golden Floral Jhumka Earrings",
    description: "Exquisite traditional jhumka earrings with intricate golden floral designs, handcrafted resin work perfect for weddings and festive occasions",
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
    name: "Silver Rose Jhumka Earrings",
    description: "Beautiful silver-toned jhumka earrings featuring preserved rose designs, perfect blend of traditional elegance and contemporary style",
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
    name: "Golden Rose Jhumka Earrings",
    description: "Stunning golden jhumka earrings adorned with rose patterns, handcrafted resin jewelry ideal for special celebrations",
    price: 500,
    category: "earrings",
    images: [
      "/assets/products/earrings/500tk/rose jhumka(Gold)/FB_IMG_1713540492448.jpg",
    ],
    mainImage: "/assets/products/earrings/500tk/rose jhumka(Gold)/FB_IMG_1713540492448.jpg",
  },
  {
    id: "ear-500-4",
    name: "Purple Rose Jhumka Earrings",
    description: "Elegant purple-toned rose jhumka earrings with preserved floral elements in resin, unique handcrafted design for elegant occasions",
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
    name: "Premium Floral Cascade Earrings",
    description: "Luxurious handcrafted earrings with cascading floral designs and premium resin work, featuring intricate detailing perfect for weddings and elegant occasions",
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
    name: "Elegant Rose Garden Earrings",
    description: "Sophisticated rose garden themed statement earrings with premium quality handcrafted resin and preserved flowers",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0001.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0001.jpg",
  },
  {
    id: "ear-800-3",
    name: "Crystal Bloom Statement Earrings",
    description: "Bold statement earrings featuring crystal-clear resin with blooming flower designs, perfect for special events and parties",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0002.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0002.jpg",
  },
  {
    id: "ear-800-4",
    name: "Butterfly Garden Earrings",
    description: "Enchanting butterfly garden design earrings handcrafted with preserved natural elements in premium quality resin",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0003.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0003.jpg",
  },
  {
    id: "ear-800-5",
    name: "Moonlight Blossom Earrings",
    description: "Ethereal moonlight-inspired earrings with delicate blossom designs, premium handcrafted resin jewelry for elegant style",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0004.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0004.jpg",
  },
  {
    id: "ear-800-6",
    name: "Vintage Pearl Elegance Earrings",
    description: "Classic vintage-style earrings with pearl accents and floral resin work, timeless elegance for any special occasion",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0005.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0005.jpg",
  },
  {
    id: "ear-800-7",
    name: "Golden Botanical Earrings",
    description: "Premium botanical themed statement earrings with golden accents and preserved natural elements in handcrafted resin",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0006.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0006.jpg",
  },
  {
    id: "ear-800-8",
    name: "Sunset Romance Earrings",
    description: "Romantic sunset-colored statement earrings with floral elements and beautiful gradient effect in premium quality resin",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0007.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0007.jpg",
  },
  {
    id: "ear-800-9",
    name: "Celestial Dreams Earrings",
    description: "Dreamy celestial-inspired statement earrings with star and moon motifs in handcrafted premium resin jewelry",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0008.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0008.jpg",
  },
  {
    id: "ear-800-10",
    name: "Ocean Treasure Earrings",
    description: "Ocean-inspired statement earrings with blue hues and preserved floral elements in premium handcrafted resin design",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0009.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0009.jpg",
  },
  {
    id: "ear-800-11",
    name: "Enchanted Forest Earrings",
    description: "Mystical forest-themed statement earrings with preserved natural elements in resin, unique handcrafted design",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250904-WA0010.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250904-WA0010.jpg",
  },
  {
    id: "ear-800-12",
    name: "Art Nouveau Floral Earrings",
    description: "Art Nouveau inspired floral statement earrings with elegant curved designs and premium resin craftsmanship",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250905-WA0000.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250905-WA0000.jpg",
  },
  {
    id: "ear-800-13",
    name: "Tropical Paradise Earrings",
    description: "Vibrant tropical-themed statement earrings with exotic floral designs in colorful handcrafted resin jewelry",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250905-WA0002.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250905-WA0002.jpg",
  },
  {
    id: "ear-800-14",
    name: "Crystal Waterfall Earrings",
    description: "Cascading crystal waterfall design statement earrings with premium resin and flowing floral elements",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250905-WA0003.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250905-WA0003.jpg",
  },
  {
    id: "ear-800-15",
    name: "Spring Meadow Earrings",
    description: "Fresh spring meadow inspired statement earrings with delicate floral touches in handcrafted premium resin",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250905-WA0004.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250905-WA0004.jpg",
  },
  {
    id: "ear-800-16",
    name: "Stardust Shimmer Earrings",
    description: "Shimmering stardust effect statement earrings with glitter and preserved floral elements in premium quality resin",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250905-WA0005.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250905-WA0005.jpg",
  },
  {
    id: "ear-800-17",
    name: "Royal Garden Collection Earrings",
    description: "Regal garden-themed statement earrings with premium detailing and handcrafted luxury resin jewelry craftsmanship",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250905-WA0006.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250905-WA0006.jpg",
  },
  {
    id: "ear-800-18",
    name: "Aurora Borealis Earrings",
    description: "Northern lights inspired statement earrings with mesmerizing color gradients in premium handcrafted resin",
    price: 800,
    category: "earrings",
    images: [
      "/assets/products/earrings/800tk/IMG-20250905-WA0007.jpg",
    ],
    mainImage: "/assets/products/earrings/800tk/IMG-20250905-WA0007.jpg",
  },
  {
    id: "ear-800-19",
    name: "Vintage Lace Pattern Earrings",
    description: "Delicate lace pattern statement earrings in premium resin, vintage-inspired design with modern elegance",
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
    name: "Black Floral Luxury Earrings",
    description: "Sophisticated black floral statement earrings with premium gold accents, luxury handcrafted resin jewelry perfect for elegant evening occasions",
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
    name: "Pink Floral Designer Earrings",
    description: "Exquisite pink floral designer statement earrings with premium quality handcrafted resin and preserved rose elements",
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
    name: "Islamic Calligraphy Keychain",
    description: "Beautiful Islamic calligraphy keychains with elegant Arabic designs in handcrafted resin, perfect accessories for daily use and thoughtful gifts",
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
    name: "Letter M Personalized Keychain",
    description: "Customized letter M initial keychain in colorful handcrafted resin, perfect personalized gift accessory for names starting with M",
    price: 80,
    category: "keychains",
    images: [
      "/assets/products/keychain/80tk/letter m/IMG-20241203-WA0001.jpg",
    ],
    mainImage: "/assets/products/keychain/80tk/letter m/IMG-20241203-WA0001.jpg",
  },
  {
    id: "key-80-3",
    name: "Letter P Custom Keychain",
    description: "Personalized letter P initial keychain with beautiful floral design in handcrafted resin, ideal accessory for custom gifts",
    price: 80,
    category: "keychains",
    images: [
      "/assets/products/keychain/80tk/letter p/IMG-20250322-WA0005.jpg",
    ],
    mainImage: "/assets/products/keychain/80tk/letter p/IMG-20250322-WA0005.jpg",
  },
  {
    id: "key-80-4",
    name: "Letter Z Alphabet Keychain",
    description: "Colorful letter Z initial keychain with decorative elements in handcrafted resin, custom alphabet accessory for personalization",
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
    name: "Letter N Initial Keychain",
    description: "Handcrafted letter N initial keychain with beautiful resin design, personalized alphabet accessory perfect for gifts",
    price: 80,
    category: "keychains",
    images: [
      "/assets/products/keychain/80tk/Letter- N/IMG_20240907_083616_540.jpg",
    ],
    mainImage: "/assets/products/keychain/80tk/Letter- N/IMG_20240907_083616_540.jpg",
  },
  {
    id: "key-80-6",
    name: "Oval Floral Keychain Collection",
    description: "Elegant oval-shaped keychains with preserved flowers in resin, variety of vibrant colors available for everyday accessories",
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
    name: "Letter S Personalized Keychain",
    description: "Custom letter S initial keychain with premium finish and floral elements in handcrafted resin, perfect accessory for personalization",
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
    name: "Letter V Alphabet Keychain",
    description: "Stylish letter V initial keychain in colorful handcrafted resin, perfect personalized gift accessory with unique design",
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
    name: "Panda Theme Double-Sided Keychain",
    description: "Adorable panda-themed double-sided design keychain with premium resin craft, perfect for animal lovers and unique gifts",
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
    name: "Spider Theme Double-Sided Keychain",
    description: "Unique spider-themed double-sided design keychain with creative resin work, perfect for superhero fans and collectors",
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
    name: "Floral Alphabet Keychain Collection",
    description: "Premium floral alphabet keychains with preserved flowers and customizable letter designs, perfect for personalized gifts and accessories",
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
    name: "Daisy Flower Pendant Necklace",
    description: "Fresh daisy flower pendant preserved in crystal clear resin, delicate handcrafted jewelry perfect for nature lovers and everyday wear",
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
    name: "Botanical Floral Pendant Collection",
    description: "Beautiful botanical pendant necklaces with preserved flowers in resin, handcrafted jewelry available in various vibrant floral designs",
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
    name: "Rose Petal Pendant Necklace",
    description: "Romantic rose petal pendant with preserved petals in crystal resin, elegant handcrafted jewelry perfect for special occasions",
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
    name: "Black & Pink Gradient Pendant",
    description: "Stunning black and pink gradient pendant with premium handcrafted resin jewelry featuring modern artistic design",
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
    name: "Butterfly Garden Pendant Necklace",
    description: "Enchanting butterfly garden pendant with preserved natural elements in premium resin jewelry, perfect for nature enthusiasts",
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
    name: "Premium Floral Pendant Necklace",
    description: "Luxury floral pendant with intricate preserved flower designs in premium quality handcrafted resin jewelry",
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
    name: "Regular Floral Pendant Collection",
    description: "Beautiful floral pendant necklaces with preserved flowers in handcrafted resin jewelry, available in various vibrant colors",
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
    name: "Natural Leaf Pendant Necklace",
    description: "Organic leaf pendant with real preserved leaves in crystal resin, nature-inspired handcrafted jewelry for botanical lovers",
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
    name: "Pink Rose Garden Pendant",
    description: "Delicate pink rose pendant with preserved petals in resin, romantic handcrafted jewelry perfect for elegant style",
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
    name: "Premium Black Rose Pendant",
    description: "Elegant black rose pendant necklace with luxury preserved rose in premium resin, perfect for sophisticated occasions",
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
    name: "Round Rose Pendant Necklace",
    description: "Classic round rose pendant with preserved flowers in resin, timeless handcrafted jewelry design",
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
    name: "Teardrop Rose Pendant Necklace",
    description: "Elegant teardrop-shaped rose pendant with romantic preserved flower design in premium handcrafted resin",
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
    name: "Anniversary Celebration Photo Frame",
    description: "Beautiful handcrafted anniversary photo frame with resin floral elements, perfect gift for celebrating special love milestones and memories",
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
    name: "Premium Memory Photo Frame",
    description: "Luxury handcrafted photo frame with resin flowers and premium quality finish, perfect frame for cherished wedding and birthday memories",
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
    name: "Designer Fashion Sunglasses",
    description: "Stylish designer sunglasses with UV protection and resin accents, trendy eyewear perfect for fashion-forward looks",
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
    name: "Floral Pressed Bookmark",
    description: "Delicate pressed flower bookmark preserved in clear resin, beautiful handcrafted reading accessory for book lovers and readers",
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
    name: "Islamic Calligraphy Bookmark",
    description: "Premium Islamic bookmark with beautiful Arabic calligraphy design in handcrafted resin, perfect accessory for Quran and Islamic books",
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
    name: "Pink Floral Tassel Bookmark",
    description: "Elegant pink floral bookmark with decorative tassel design in premium handcrafted resin, perfect for book enthusiasts",
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
    name: "Purple Floral Resin Bracelet",
    description: "Stunning purple floral bracelet with preserved flowers encased in resin, handcrafted wrist jewelry perfect for elegant occasions",
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
    name: "Premium Rose Petal Resin Pen",
    description: "Luxury handcrafted pen with preserved rose petals in resin, premium quality writing instrument perfect for gifts and office use",
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
    name: "Regular Floral Resin Pen",
    description: "Beautiful floral design resin pen with preserved flowers, handcrafted writing accessory perfect for daily use",
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
    name: "Floral Resin Phone Cover",
    description: "Protective phone case with beautiful floral resin design and preserved flowers, handcrafted smartphone cover with unique style",
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
    name: "Birthday Celebration Resin Frame",
    description: "Personalized birthday frame with handcrafted resin flowers, decorative frame perfect for special birthday gifts and memories",
    price: 850,
    category: "frames",
    images: [
      "/assets/products/others/resin frame/Birthday frame.jpg",
    ],
    mainImage: "/assets/products/others/resin frame/Birthday frame.jpg",
  },
  {
    id: "dframe-2",
    name: "Gold & White Wedding Calendar Frame",
    description: "Luxurious gold and white flower calendar frame with premium handcrafted resin work, perfect for wedding gifts and anniversaries",
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
    name: "Floral Resin Ring",
    description: "Delicate floral design ring with preserved flowers in resin, handcrafted jewelry perfect for everyday elegance",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20240621-WA0005.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20240621-WA0005.jpg",
  },
  {
    id: "ring-2",
    name: "Nature Garden Ring",
    description: "Nature-inspired garden ring with botanical elements in resin, handcrafted jewelry for nature lovers",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0028.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0028.jpg",
  },
  {
    id: "ring-3",
    name: "Crystal Flower Ring",
    description: "Crystal-clear flower ring with preserved petals in resin, elegant handcrafted jewelry",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0029.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0029.jpg",
  },
  {
    id: "ring-4",
    name: "Botanical Element Ring",
    description: "Organic botanical ring with natural plant elements preserved in resin, unique handcrafted design",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0030.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0030.jpg",
  },
  {
    id: "ring-5",
    name: "Ocean Wave Ring",
    description: "Ocean-inspired wave ring with blue hues in resin, handcrafted jewelry with flowing design",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0031.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0031.jpg",
  },
  {
    id: "ring-6",
    name: "Garden Bloom Ring",
    description: "Blooming garden flowers preserved in ring form, colorful handcrafted resin jewelry",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0032.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0032.jpg",
  },
  {
    id: "ring-7",
    name: "Sunset Colors Ring",
    description: "Warm sunset gradient ring design with beautiful color transition in handcrafted resin",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0033.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0033.jpg",
  },
  {
    id: "ring-8",
    name: "Starlight Shimmer Ring",
    description: "Starlight-inspired ring with glitter elements in resin, sparkling handcrafted jewelry",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0034.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0034.jpg",
  },
  {
    id: "ring-9",
    name: "Rainbow Garden Ring",
    description: "Vibrant rainbow colors in garden design, multicolor handcrafted resin ring",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0035.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0035.jpg",
  },
  {
    id: "ring-10",
    name: "Pastel Dream Ring",
    description: "Soft pastel colored ring design in resin, dreamy handcrafted jewelry in gentle hues",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0036.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0036.jpg",
  },
  {
    id: "ring-11",
    name: "Vintage Charm Ring",
    description: "Vintage-style charm ring with floral elements in resin, classic handcrafted design",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0037.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0037.jpg",
  },
  {
    id: "ring-12",
    name: "Butterfly Garden Ring",
    description: "Delicate butterfly in garden scene ring with preserved elements, nature-inspired handcrafted resin jewelry",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0038.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0038.jpg",
  },
  {
    id: "ring-13",
    name: "Moonlight Bloom Ring",
    description: "Moonlit blooms ring design with ethereal floral elements, handcrafted resin jewelry",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0039.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0039.jpg",
  },
  {
    id: "ring-14",
    name: "Spring Meadow Ring",
    description: "Fresh spring meadow design ring with botanical elements, vibrant handcrafted resin jewelry",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0040.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0040.jpg",
  },
  {
    id: "ring-15",
    name: "Golden Petals Ring",
    description: "Golden petal design ring with shimmer effect in resin, elegant handcrafted jewelry",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0041.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0041.jpg",
  },
  {
    id: "ring-16",
    name: "Crystal Garden Ring",
    description: "Crystal elements in garden ring design with sparkling resin, handcrafted jewelry",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0042.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0042.jpg",
  },
  {
    id: "ring-17",
    name: "Enchanted Forest Ring",
    description: "Mystical enchanted forest ring design with magical elements, handcrafted resin jewelry",
    price: 350,
    category: "rings",
    images: [
      "/assets/products/others/ring/IMG-20250322-WA0043.jpg",
    ],
    mainImage: "/assets/products/others/ring/IMG-20250322-WA0043.jpg",
  },
  {
    id: "ring-18",
    name: "Elegant Flora Ring",
    description: "Elegant floral arrangement ring with sophisticated design, handcrafted resin jewelry",
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
