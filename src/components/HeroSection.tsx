"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
      alt: "Handmade resin jewelry Bangladesh - তোমার ঠিকানা - Free delivery Dhaka",
    },
    {
      src: "/assets/product-resin-1.jpg",
      alt: "Beautiful resin jewelry Bangladesh - Handmade earrings pendants - Price ৳80-৳1000",
    },
    {
      src: "/assets/product-frame-1.jpg",
      alt: "Custom photo frames Dhaka - Personalized gift Bangladesh - Handmade resin frames",
    },
    {
      src: "/assets/product-gift-1.jpg",
      alt: "Personalized gift boxes Bangladesh - Custom gifts Dhaka - Handmade gift shop",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 slide-up">
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight">
              Handmade Resin Jewelry & Custom Gifts in Bangladesh
              <span className="block text-3xl md:text-4xl mt-4 text-primary">
                হাতে তৈরি রেজিন জুয়েলারি ও কাস্টম গিফট | ঢাকা
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Shop 118+ handmade items: Jhumka earrings ৳120-৳990, Resin pendants, Photo frames, Keychains. 
              <span className="block mt-2 font-semibold text-foreground">
                Free delivery in Dhaka (Gulshan, Dhanmondi, Bashundhara, Mirpur, Banasree, Niketon)
              </span>
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
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover rounded-2xl shadow-soft"
                        priority={index === 0}
                        quality={85}
                        sizes="(max-width: 768px) 100vw, 50vw"
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
