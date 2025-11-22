import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Heart, Sparkles, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 slide-up">
            <h1 className="font-display text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every piece we create carries a piece of our heart
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="slide-up relative aspect-video">
              <Image
                src='/assets/about-craft.jpg'
                alt="Crafting process"
                fill
                className="rounded-2xl shadow-soft object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6 slide-up">
              <h2 className="font-display text-3xl font-bold">
                Handcrafted with Love & Care
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                তোমার ঠিকানা was born from a passion for creating meaningful, personalized gifts that preserve memories and celebrate special moments. Each piece we craft tells a unique story.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in the beauty of handmade creations. From resin jewellery that captures nature&apos;s essence to custom photo frames that preserve precious memories, every item is made with meticulous attention to detail and genuine care.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to quality and customization ensures that your gift is not just an object, but a cherished keepsake that will be treasured for years to come.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center space-y-4 slide-up">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Handmade Excellence</h3>
              <p className="text-muted-foreground">
                Every piece is carefully crafted by hand, ensuring unique quality and character in each creation.
              </p>
            </div>
            <div className="text-center space-y-4 slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                <Sparkles className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Premium Materials</h3>
              <p className="text-muted-foreground">
                We use only the finest materials to ensure durability, beauty, and lasting memories.
              </p>
            </div>
            <div className="text-center space-y-4 slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Customer First</h3>
              <p className="text-muted-foreground">
                Your vision and satisfaction guide everything we do. We work closely with you to bring your ideas to life.
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="bg-secondary/30 rounded-3xl p-12">
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              Our Creative Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-display font-semibold">Consultation</h4>
                <p className="text-sm text-muted-foreground">
                  Share your vision and ideas with us
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="font-display font-semibold">Design</h4>
                <p className="text-sm text-muted-foreground">
                  We create a custom design just for you
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="font-display font-semibold">Crafting</h4>
                <p className="text-sm text-muted-foreground">
                  Handmade with care and precision
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mx-auto mb-4">
                  4
                </div>
                <h4 className="font-display font-semibold">Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  Beautiful packaging and delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
