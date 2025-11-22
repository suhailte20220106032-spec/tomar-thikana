import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";
import RelatedProducts from "@/components/RelatedProducts";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {
  getProductById,
  getProductsByCategory,
  products,
} from "@/lib/products";
import {
  generateProductSchema,
  generateBreadcrumbSchema,
  generateJsonLd,
  getCategoryKeywords,
} from "@/lib/structured-data";

const SITE_URL = "https://tomar-thikana.vercel.app";

// Generate metadata for each product page
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = getProductById(params.id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you're looking for doesn't exist.",
    };
  }

  const categoryKeywords = getCategoryKeywords(product.category);

  return {
    title: `${product.name} - ৳${product.price}`,
    description: `${product.description} Price: ৳${product.price}. Handmade in Bangladesh. Free delivery in Dhaka. ${categoryKeywords}`,
    keywords: [
      product.name,
      product.category,
      "handmade jewelry Bangladesh",
      "resin jewelry Dhaka",
      ...categoryKeywords.split(", "),
    ],
    openGraph: {
      title: `${product.name} - ৳${product.price} | তোমার ঠিকানা`,
      description: `${product.description} Price: ৳${product.price}. Handmade in Bangladesh.`,
      images: [
        {
          url: product.mainImage,
          width: 800,
          height: 800,
          alt: product.name,
        },
        ...product.images.map((img) => ({
          url: img,
          width: 800,
          height: 800,
          alt: `${product.name} - Additional view`,
        })),
      ],
      url: `${SITE_URL}/products/${params.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - ৳${product.price}`,
      description: product.description,
      images: [product.mainImage],
    },
    alternates: {
      canonical: `${SITE_URL}/products/${params.id}`,
    },
  };
}

// Generate static params for all products (for static generation)
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  // Generate structured data
  const productSchema = generateProductSchema(product);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Products", url: `${SITE_URL}/products` },
    {
      name: product.category,
      url: `${SITE_URL}/products?category=${product.category}`,
    },
    { name: product.name },
  ]);

  // Get related products from same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Structured Data - Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(productSchema)}
        key="product-jsonld"
      />
      {/* Structured Data - Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(breadcrumbSchema)}
        key="breadcrumb-jsonld"
      />

      <Navigation />

      <div className="pt-32 pb-12 md:pb-16 flex-1 flex flex-col">
        <ProductDetail product={product} />
      </div>

      <RelatedProducts products={relatedProducts} categoryId={product.category} />

      <Footer />
    </div>
  );
}
