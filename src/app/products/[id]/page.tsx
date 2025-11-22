"use client";

import { useParams } from "next/navigation";
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
} from "@/lib/products";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">
              Sorry, we couldn't find the product you're looking for.
            </p>
            <Link href="/products">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related products from same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="pt-32 pb-12 md:pb-16 flex-1 flex flex-col">
        <ProductDetail product={product} />
      </div>

      <RelatedProducts products={relatedProducts} categoryId={product.category} />

      <Footer />
    </div>
  );
}
