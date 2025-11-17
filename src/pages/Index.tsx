import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sparkles, Package } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import productResin from "@/assets/product-resin-1.jpg";
import productFrame from "@/assets/product-frame-1.jpg";
import productGift from "@/assets/product-gift-1.jpg";
import productMemory from "@/assets/product-memory-1.jpg";

const Index = () => {
  const featuredProducts = [
    {
      image: productResin,
      title: "Floral Resin Pendant",
      category: "Resin Jewellery",
      price: "৳850",
    },
    {
      image: productFrame,
      title: "Custom Photo Frame",
      category: "Photo Frames",
      price: "৳1,200",
    },
    {
      image: productGift,
      title: "Personalized Gift Box",
      category: "Custom Gifts",
      price: "৳1,500",
    },
    {
      image: productMemory,
      title: "Memory Keepsake",
      category: "Memory Preservation",
      price: "৳2,000",
    },
  ];

  const testimonials = [
    {
      name: "Ayesha Rahman",
      text: "The resin necklace I ordered was absolutely stunning! The attention to detail is incredible.",
      rating: 5,
    },
    {
      name: "Fahim Ahmed",
      text: "Perfect anniversary gift! The custom photo frame brought tears to my wife's eyes.",
      rating: 5,
    },
    {
      name: "Nusrat Jahan",
      text: "Exceptional quality and beautiful packaging. Will definitely order again!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 slide-up">
              <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight">
                Handcrafted Gifts,{" "}
                <span className="text-primary">Made with Love</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Every piece is uniquely crafted to preserve your special moments and create lasting memories.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="shadow-soft">
                  <Link to="/products">
                    Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/custom-order">Custom Order</Link>
                </Button>
              </div>
            </div>
            <div className="fade-in">
              <img
                src={heroImage}
                alt="Handmade gifts and jewelry"
                className="rounded-2xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 slide-up">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">100% Handmade</h3>
              <p className="text-muted-foreground">
                Every item is carefully crafted by hand with premium materials
              </p>
            </div>
            <div className="text-center space-y-4 slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">Fully Customizable</h3>
              <p className="text-muted-foreground">
                Personalize your gifts to make them truly unique and special
              </p>
            </div>
            <div className="text-center space-y-4 slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">Premium Quality</h3>
              <p className="text-muted-foreground">
                We ensure the highest quality in every piece we create
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
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
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground text-lg">
              Read the experiences of our happy customers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary/10 to-accent/20 rounded-3xl p-12 text-center">
            <h2 className="font-display text-4xl font-bold mb-4">
              Ready to Create Something Special?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let us help you craft the perfect gift for your loved ones. Every order is made with care and attention to detail.
            </p>
            <Button asChild size="lg" className="shadow-soft">
              <Link to="/custom-order">
                Start Your Custom Order <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
