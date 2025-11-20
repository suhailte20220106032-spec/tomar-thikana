"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const heroImages = [
    {
      src: "/assets/hero-image.jpg",
      alt: "Handmade gifts and jewelry",
    },
    {
      src: "/assets/product-resin-1.jpg",
      alt: "Beautiful resin jewelry",
    },
    {
      src: "/assets/product-frame-1.jpg",
      alt: "Custom photo frames",
    },
    {
      src: "/assets/product-gift-1.jpg",
      alt: "Personalized gift boxes",
    },
  ];

  return (
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
                <Link href="/products">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/custom-order">Custom Order</Link>
              </Button>
            </div>
          </div>
          <div className="fade-in">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[plugin.current]}
              className="w-full"
            >
              <CarouselContent>
                {heroImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-square md:aspect-auto md:h-[500px]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-2xl shadow-soft"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
