import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

const FeaturedProductsSection = () => {
  const featuredProducts = [
    {
      image: "/assets/product-resin-1.jpg",
      title: "Floral Resin Pendant",
      category: "Resin Jewellery",
      price: "৳850",
    },
    {
      image: "/assets/product-frame-1.jpg",
      title: "Custom Photo Frame",
      category: "Photo Frames",
      price: "৳1,200",
    },
    {
      image: "/assets/product-gift-1.jpg",
      title: "Personalized Gift Box",
      category: "Custom Gifts",
      price: "৳1,500",
    },
    {
      image: "/assets/product-memory-1.jpg",
      title: "Memory Keepsake",
      category: "Memory Preservation",
      price: "৳2,000",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg">
            Discover our handpicked collection of beautiful creations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product, index) => (
            <div key={index} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
