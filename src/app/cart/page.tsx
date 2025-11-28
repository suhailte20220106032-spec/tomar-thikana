"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/products";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function CartPage() {
  const router = useRouter();
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
  const [removingId, setRemovingId] = useState<string | null>(null);

  const handleRemove = (productId: string, productName: string) => {
    setRemovingId(productId);
    removeItem(productId);
    toast.success("Removed from cart", {
      description: productName,
      duration: 2000,
    });
    setTimeout(() => setRemovingId(null), 300);
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1 || newQuantity > 99) return;
    updateQuantity(productId, newQuantity);
  };

  const totalPrice = getTotalPrice();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <main className="pt-32 pb-20 flex-1">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center py-20">
              <ShoppingBag className="w-20 h-20 mx-auto text-muted-foreground mb-6" />
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-muted-foreground mb-8 text-lg">
                Add some beautiful handmade items to your cart!
              </p>
              <Link href="/products">
                <Button size="lg">
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-20 flex-1">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Shopping Cart
            </h1>
            <p className="text-muted-foreground">
              {items.length} {items.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card 
                  key={item.id}
                  className={`transition-all duration-300 ${
                    removingId === item.id ? "opacity-0 scale-95" : "opacity-100"
                  }`}
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <Link href={`/products/${item.id}`} className="flex-shrink-0">
                        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-muted">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-300"
                            sizes="96px"
                          />
                        </div>
                      </Link>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <Link 
                          href={`/products/${item.id}`}
                          className="font-semibold text-base md:text-lg hover:text-primary transition-colors line-clamp-2"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">
                          {formatPrice(item.price)} each
                        </p>

                        {/* Quantity Controls - Mobile/Desktop */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="font-semibold min-w-[2ch] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              disabled={item.quantity >= 99}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          {/* Price & Remove */}
                          <div className="flex items-center gap-4">
                            <span className="font-bold text-lg text-primary">
                              {formatPrice(item.price * item.quantity)}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-destructive hover:text-destructive hover:bg-destructive/10"
                              onClick={() => handleRemove(item.id, item.name)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="font-display text-2xl font-bold mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Delivery</span>
                      <span className="font-medium text-green-600">FREE</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">{formatPrice(totalPrice)}</span>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full mb-4"
                    onClick={() => router.push("/checkout")}
                  >
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <Link href="/products">
                    <Button variant="outline" size="lg" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>

                  {/* Info */}
                  <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      🎁 Free delivery on all orders above ৳500 in Dhaka
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
