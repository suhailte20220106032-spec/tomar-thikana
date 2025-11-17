import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import productResin from "@/assets/product-resin-1.jpg";
import productFrame from "@/assets/product-frame-1.jpg";
import productGift from "@/assets/product-gift-1.jpg";
import productMemory from "@/assets/product-memory-1.jpg";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Products" },
    { id: "gifts", label: "Custom Gifts" },
    { id: "jewellery", label: "Resin Jewellery" },
    { id: "frames", label: "Photo Frames" },
    { id: "custom", label: "Custom Orders" },
  ];

  const products = [
    {
      image: productResin,
      title: "Floral Resin Pendant",
      category: "jewellery",
      categoryName: "Resin Jewellery",
      price: "৳850",
    },
    {
      image: productFrame,
      title: "Custom Photo Frame",
      category: "frames",
      categoryName: "Photo Frames",
      price: "৳1,200",
    },
    {
      image: productGift,
      title: "Personalized Gift Box",
      category: "gifts",
      categoryName: "Custom Gifts",
      price: "৳1,500",
    },
    {
      image: productMemory,
      title: "Memory Keepsake",
      category: "custom",
      categoryName: "Memory Preservation",
      price: "৳2,000",
    },
    {
      image: productResin,
      title: "Ocean Wave Bracelet",
      category: "jewellery",
      categoryName: "Resin Jewellery",
      price: "৳950",
    },
    {
      image: productFrame,
      title: "Anniversary Frame Set",
      category: "frames",
      categoryName: "Photo Frames",
      price: "৳1,800",
    },
    {
      image: productGift,
      title: "Birthday Gift Bundle",
      category: "gifts",
      categoryName: "Custom Gifts",
      price: "৳2,200",
    },
    {
      image: productMemory,
      title: "Wedding Memory Box",
      category: "custom",
      categoryName: "Custom Orders",
      price: "৳2,500",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

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
              <div key={index} className="slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <ProductCard
                  image={product.image}
                  title={product.title}
                  category={product.categoryName}
                  price={product.price}
                />
              </div>
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
};

export default Products;
