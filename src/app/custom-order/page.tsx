"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";
import { toast } from "sonner";

export default function CustomOrderPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productType: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Order submitted! We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      productType: "",
      description: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12 slide-up">
            <h1 className="font-display text-5xl font-bold mb-4">Custom Order</h1>
            <p className="text-muted-foreground text-lg">
              Let's create something special together. Share your vision with us!
            </p>
          </div>

          {/* Form */}
          <Card className="slide-up border-border shadow-soft">
            <CardHeader>
              <CardTitle className="font-display text-2xl">Order Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+880 xxx-xxxxxx"
                      required
                    />
                  </div>
                </div>

                {/* Product Type */}
                <div className="space-y-2">
                  <Label htmlFor="productType">Product Type *</Label>
                  <Select
                    value={formData.productType}
                    onValueChange={(value) => handleChange("productType", value)}
                    required
                  >
                    <SelectTrigger id="productType">
                      <SelectValue placeholder="Select product type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="resin-jewellery">Resin Jewellery</SelectItem>
                      <SelectItem value="photo-frame">Photo Frame</SelectItem>
                      <SelectItem value="gift-box">Gift Box</SelectItem>
                      <SelectItem value="memory-keepsake">Memory Keepsake</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Describe Your Vision *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    placeholder="Tell us about your custom order... What colors, themes, or special elements would you like?"
                    rows={6}
                    required
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <Label htmlFor="file">Upload Reference Images (Optional)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <input
                      type="file"
                      id="file"
                      className="hidden"
                      accept="image/*"
                      multiple
                    />
                    <label htmlFor="file" className="cursor-pointer">
                      <Upload className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        PNG, JPG up to 10MB
                      </p>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full shadow-soft">
                  Submit Custom Order
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll review your order and contact you within 24 hours
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
