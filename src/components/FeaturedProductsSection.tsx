import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts, formatPrice, categories } from "@/lib/products";

export default function FeaturedProductsSection() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-20 bg-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 slide-up">
          <h2 className="font-display text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of unique handcrafted items
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.slice(0, 8).map((product, index) => (
            <Link 
              key={product.id} 
              href={`/products/${product.id}`}
              className="slide-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
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

        <div className="text-center slide-up">
          <Link href="/products">
            <Button size="lg" className="rounded-full">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}