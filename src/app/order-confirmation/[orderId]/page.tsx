"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/products";
import { CheckCircle2, Package, Clock, Loader2, ArrowRight, Home } from "lucide-react";
import type { Order } from "@/lib/cart";

export default function OrderConfirmationPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.orderId as string;
  
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!orderId) {
      router.push("/");
      return;
    }

    async function fetchOrder() {
      try {
        const response = await fetch(`/api/orders?id=${orderId}`);
        if (!response.ok) {
          throw new Error("Order not found");
        }
        const data = await response.json();
        setOrder(data.order);
      } catch (err) {
        console.error("Failed to fetch order:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchOrder();
  }, [orderId, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <main className="pt-32 pb-20 flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Loading order details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <main className="pt-32 pb-20 flex-1">
          <div className="container mx-auto px-4 max-w-4xl text-center py-20">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Order Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              We couldn&apos;t find the order you&apos;re looking for.
            </p>
            <Link href="/">
              <Button size="lg">
                <Home className="mr-2 h-5 w-5" />
                Go to Home
              </Button>
            </Link>
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
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Order Confirmed!
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Thank you for your order, <strong>{order.customerInfo.name}</strong>!
            </p>
            <p className="text-muted-foreground">
              We&apos;ve received your order and will contact you shortly via phone to confirm delivery details.
            </p>
          </div>

          {/* Order ID Card */}
          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Order ID</p>
                  <p className="font-mono font-bold text-lg text-primary">{order.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">Order Date</p>
                  <p className="font-medium">
                      {new Date(order.createdAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        timeZone: "Asia/Dhaka",
                      })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Timeline */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="font-display text-xl font-bold mb-6">What&apos;s Next?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Order Placed</h3>
                    <p className="text-sm text-muted-foreground">
                      Your order has been received successfully
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Order Confirmation Call</h3>
                    <p className="text-sm text-muted-foreground">
                      We&apos;ll call you within 24 hours to confirm details and payment method
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <Package className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Delivery</h3>
                    <p className="text-sm text-muted-foreground">
                      Your order will be delivered within 2-3 business days in Dhaka
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Order Items */}
            <Card>
              <CardContent className="p-6">
                <h2 className="font-display text-xl font-bold mb-4">Order Items</h2>
                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative w-16 h-16 rounded bg-muted flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm line-clamp-2">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.quantity} × {formatPrice(item.price)}
                        </p>
                        <p className="text-sm font-semibold text-primary">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between items-center">
                  <span className="font-bold">Total</span>
                  <span className="text-xl font-bold text-primary">
                    {formatPrice(order.totalAmount)}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card>
              <CardContent className="p-6">
                <h2 className="font-display text-xl font-bold mb-4">Delivery Information</h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Name</p>
                    <p className="font-medium">{order.customerInfo.name}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Phone</p>
                    <p className="font-medium">{order.customerInfo.phone}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Email</p>
                    <p className="font-medium">{order.customerInfo.email}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Address</p>
                    <p className="font-medium">{order.customerInfo.address}</p>
                  </div>
                  {order.customerInfo.notes && (
                    <div>
                      <p className="text-muted-foreground mb-1">Notes</p>
                      <p className="font-medium italic">{order.customerInfo.notes}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Info */}
          <Card className="mb-8 bg-secondary/50">
            <CardContent className="p-6">
              <h2 className="font-display text-xl font-bold mb-4">Payment Information</h2>
              <p className="text-sm text-muted-foreground mb-3">
                Payment options will be confirmed during our call:
              </p>
              <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                <li>Cash on Delivery (COD)</li>
                <li>bKash/Nagad (Mobile Banking)</li>
                <li>Bank Transfer</li>
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Continue Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center p-6 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">
              Questions about your order?
            </p>
            <p className="font-medium">
              📞 WhatsApp us or 📧 Email: tomarthikanaaa@gmail.com
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Note: You will not receive an email confirmation (we&apos;ll call you instead)
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
