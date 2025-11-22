"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { categories, getProductsByCategory, formatPrice } from "@/lib/products";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    if (categoryParam && categories.some(cat => cat.id === categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts = getProductsByCategory(activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 slide-up">
            <h1 className="font-display text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Browse our collection of handmade gifts, resin jewellery, and custom creations
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 slide-up">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <Link 
                key={product.id} 
                href={`/products/${product.id}`}
                className="slide-up" 
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard
                  image={product.mainImage}
                  title={product.name}
                  category={categories.find(cat => cat.id === product.category)?.label || product.category}
                  price={formatPrice(product.price)}
                />
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}