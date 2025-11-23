import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Delivery Areas in Dhaka - Gulshan, Dhanmondi, Bashundhara | তোমার ঠিকানা",
  description: "We deliver handmade resin jewelry across Dhaka: Gulshan, Dhanmondi, Niketon, Banasree, Bashundhara, Mirpur, Mohammadpur. Order via WhatsApp. ঢাকার সব এলাকায় ডেলিভারি। Free delivery on orders above ৳500.",
  keywords: [
    "delivery areas Dhaka",
    "free delivery Gulshan",
    "jewelry delivery Dhanmondi",
    "handmade gift delivery Bangladesh",
    "resin jewelry delivery Dhaka",
    "ডেলিভারি এলাকা ঢাকা",
    "গুলশান ডেলিভারি",
    "ধানমন্ডি ডেলিভারি",
  ],
  openGraph: {
    title: "Free Delivery Areas in Dhaka | তোমার ঠিকানা Delivery Coverage",
    description: "Free delivery across Dhaka for handmade resin jewelry. Gulshan, Dhanmondi, Bashundhara, Mirpur and more.",
  },
};

const deliveryAreas = [
  {
    zone: "Zone 1 - Premium Areas",
    zoneBn: "জোন ১ - প্রিমিয়াম এলাকা",
    deliveryTime: "24-48 hours",
    deliveryTimeBn: "২৪-৪৮ ঘন্টা",
    minOrder: "Free above ৳500",
    areas: [
      { name: "Gulshan", nameBn: "গুলশান", landmarks: "Near Gulshan Lake, DCC Market" },
      { name: "Banani", nameBn: "বনানী", landmarks: "Banani Graveyard, Kemal Ataturk Avenue" },
      { name: "Baridhara", nameBn: "বারিধারা", landmarks: "Baridhara Diplomatic Zone, J Block" },
      { name: "Dhanmondi", nameBn: "ধানমন্ডি", landmarks: "Dhanmondi Lake, Rabindra Sarobar" },
      { name: "Niketon", nameBn: "নিকেতন", landmarks: "Niketon Bus Stand" },
      { name: "Bashundhara", nameBn: "বসুন্ধরা", landmarks: "Bashundhara City, Bashundhara R/A" },
    ],
  },
  {
    zone: "Zone 2 - Central Dhaka",
    zoneBn: "জোন ২ - কেন্দ্রীয় ঢাকা",
    deliveryTime: "24-48 hours",
    deliveryTimeBn: "২৪-৪৮ ঘন্টা",
    minOrder: "Free above ৳500",
    areas: [
      { name: "Mirpur", nameBn: "মিরপুর", landmarks: "Mirpur 1, 2, 6, 10, 11, 12, 14" },
      { name: "Mohammadpur", nameBn: "মোহাম্মদপুর", landmarks: "Town Hall, Shyamoli" },
      { name: "Banasree", nameBn: "বনশ্রী", landmarks: "Banasree Block A, B, C, D" },
      { name: "Rampura", nameBn: "রামপুরা", landmarks: "TV Gate, Banasree Link Road" },
      { name: "Badda", nameBn: "বাড্ডা", landmarks: "Badda Link Road" },
      { name: "Uttara", nameBn: "উত্তরা", landmarks: "Uttara Sector 1-14, Azampur" },
    ],
  },
  {
    zone: "Zone 3 - Extended Areas",
    zoneBn: "জোন ৩ - সম্প্রসারিত এলাকা",
    deliveryTime: "48-72 hours",
    deliveryTimeBn: "৪৮-৭২ ঘন্টা",
    minOrder: "Free above ৳800",
    areas: [
      { name: "Motijheel", nameBn: "মতিঝিল", landmarks: "Shapla Chattar" },
      { name: "Paltan", nameBn: "পল্টন", landmarks: "Naya Paltan, Bijoy Nagar" },
      { name: "Khilgaon", nameBn: "খিলগাঁও", landmarks: "Khilgaon Flyover" },
      { name: "Malibagh", nameBn: "মালিবাগ", landmarks: "Malibagh Mor, Mouchak" },
      { name: "Shantinagar", nameBn: "শান্তিনগর", landmarks: "Shantinagar Crossing" },
      { name: "Tejgaon", nameBn: "তেজগাঁও", landmarks: "Farmgate, Karwan Bazar" },
    ],
  },
  {
    zone: "Zone 4 - Old Dhaka & Others",
    zoneBn: "জোন ৪ - পুরান ঢাকা ও অন্যান্য",
    deliveryTime: "48-72 hours",
    deliveryTimeBn: "৪৮-৭২ ঘন্টা",
    minOrder: "Free above ৳800",
    areas: [
      { name: "Wari", nameBn: "ওয়ারী", landmarks: "Wari Wireless Gate" },
      { name: "Gandaria", nameBn: "গেন্ডারিয়া", landmarks: "Gandaria Bus Stand" },
      { name: "Jatrabari", nameBn: "যাত্রাবাড়ী", landmarks: "Jatrabari Intersection" },
      { name: "Sayedabad", nameBn: "সায়েদাবাদ", landmarks: "Sayedabad Bus Terminal" },
      { name: "Demra", nameBn: "ডেমরা", landmarks: "Demra Ghat" },
      { name: "Lalbagh", nameBn: "লালবাগ", landmarks: "Lalbagh Fort" },
    ],
  },
];

const deliveryFeatures = [
  {
    icon: ShoppingBag,
    title: "Free Delivery",
    titleBn: "ফ্রি ডেলিভারি",
    description: "On orders above ৳500 in Zone 1 & 2",
    descriptionBn: "জোন ১ ও ২ এ ৳৫০০+ অর্ডারে",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    titleBn: "দ্রুত ডেলিভারি",
    description: "24-72 hours delivery time",
    descriptionBn: "২৪-৭২ ঘন্টা ডেলিভারি সময়",
  },
  {
    icon: Phone,
    title: "Easy Ordering",
    titleBn: "সহজ অর্ডার",
    description: "Order via WhatsApp or Facebook",
    descriptionBn: "হোয়াটসঅ্যাপ বা ফেসবুকে অর্ডার করুন",
  },
  {
    icon: MapPin,
    title: "Track Delivery",
    titleBn: "ডেলিভারি ট্র্যাক",
    description: "Get updates via WhatsApp",
    descriptionBn: "হোয়াটসঅ্যাপে আপডেট পান",
  },
];

export default function DeliveryAreasPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="pt-32 pb-20 flex-1">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Free Delivery Areas in Dhaka
            </h1>
            <p className="text-2xl md:text-3xl text-primary mb-4">
              ঢাকার সব এলাকায় ডেলিভারি সেবা
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We deliver handmade resin jewelry, custom gifts, and personalized items across Dhaka. 
              Fast, reliable delivery to your doorstep. আমরা ঢাকার সব এলাকায় হাতে তৈরি রেজিন জুয়েলারি এবং কাস্টম গিফট ডেলিভারি করি।
            </p>
          </div>

          {/* Delivery Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {deliveryFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{feature.titleBn}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{feature.description}</p>
                  <p className="text-sm text-muted-foreground">{feature.descriptionBn}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Delivery Zones */}
          <div className="space-y-8 mb-12">
            <h2 className="font-display text-3xl font-bold text-center mb-8">
              Delivery Zones & Coverage Areas
              <span className="block text-xl text-muted-foreground mt-2">
                ডেলিভারি জোন এবং কভারেজ এলাকা
              </span>
            </h2>

            {deliveryAreas.map((zone, zoneIndex) => (
              <Card key={zoneIndex} className="overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl">{zone.zone}</CardTitle>
                      <p className="text-lg text-muted-foreground">{zone.zoneBn}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        {zone.deliveryTime}
                      </Badge>
                      <Badge variant="default" className="text-sm">
                        {zone.minOrder}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {zone.areas.map((area, areaIndex) => (
                      <div key={areaIndex} className="p-4 border rounded-lg hover:border-primary transition-colors">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-lg">{area.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{area.nameBn}</p>
                            {area.landmarks && (
                              <p className="text-xs text-muted-foreground">
                                📍 {area.landmarks}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* How to Order Section */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center">
                How to Order | কিভাবে অর্ডার করবেন
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">
                    1
                  </div>
                  <h3 className="font-semibold text-lg">Choose Your Product</h3>
                  <p className="text-sm text-muted-foreground">
                    Browse our 118+ handmade items
                    <br />
                    আমাদের ১১৮+ পণ্য দেখুন
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">
                    2
                  </div>
                  <h3 className="font-semibold text-lg">Contact Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Order via WhatsApp or Facebook
                    <br />
                    হোয়াটসঅ্যাপ বা ফেসবুকে অর্ডার করুন
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">
                    3
                  </div>
                  <h3 className="font-semibold text-lg">Receive Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Get it at your doorstep in 24-72 hours
                    <br />
                    ২৪-৭২ ঘন্টায় পেয়ে যান
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link href="/products">
                  <Button size="lg" className="shadow-lg">
                    Browse Products | পণ্য দেখুন
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="font-display text-2xl font-bold mb-4">
              Delivery Information | ডেলিভারি তথ্য
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Delivery Charges | ডেলিভারি চার্জ</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✅ Zone 1 & 2: FREE on orders ৳500+ | জোন ১ ও ২: ৳৫০০+ অর্ডারে ফ্রি</li>
                  <li>✅ Zone 3 & 4: FREE on orders ৳800+ | জোন ৩ ও ৪: ৳৮০০+ অর্ডারে ফ্রি</li>
                  <li>📦 Below minimum order: ৳60-৳100 delivery charge | ন্যূনতম অর্ডারের নিচে: ৳৬০-৳১০০</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Payment Methods | পেমেন্ট পদ্ধতি</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>💵 Cash on Delivery (COD) | ক্যাশ অন ডেলিভারি</li>
                  <li>📱 bKash/Nagad/Rocket | বিকাশ/নগদ/রকেট</li>
                  <li>🏦 Bank Transfer | ব্যাংক ট্রান্সফার</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Can't find your area? Contact us for delivery availability.
              <br />
              <span className="text-foreground">
                আপনার এলাকা খুঁজে পাচ্ছেন না? ডেলিভারি সম্পর্কে জানতে যোগাযোগ করুন।
              </span>
            </p>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us | যোগাযোগ করুন
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
