import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { formatPrice, categories } from "@/lib/products";
import type { Product } from "@/lib/products";

interface RelatedProductsProps {
  products: Product[];
  categoryId: string;
}

export default function RelatedProducts({
  products,
  categoryId,
}: RelatedProductsProps) {
  if (products.length === 0) return null;

  const categoryLabel =
    categories.find((cat) => cat.id === categoryId)?.label || categoryId;

  return (
    <div className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold">
            Related Products
          </h2>
          <Link href={`/products?category=${categoryId}`}>
            <Button variant="outline" size="sm" className="md:size-default">
              View All {categoryLabel}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <ProductCard
                image={product.mainImage}
                title={product.name}
                category={categoryLabel}
                price={formatPrice(product.price)}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
