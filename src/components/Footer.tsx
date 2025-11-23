import { Heart, Instagram, Facebook, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-semibold mb-4">
              তোমার ঠিকানা | Tomar Thikana
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              <span className="font-semibold text-foreground">
                Handmade Resin Jewelry & Custom Gifts in Bangladesh
              </span>
              <br />
              হাতে তৈরি রেজিন জুয়েলারি এবং কাস্টম গিফট বাংলাদেশ
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              Shop 118+ handmade items: Jhumka earrings (৳120-৳990), Resin pendants (৳290-৳499), 
              Photo frames (৳500-৳1000), Keychains (৳80-৳390), Bookmarks, Bracelets, Rings, Pens & more.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              <span className="font-semibold">📍 Service Areas:</span> Gulshan, Dhanmondi, Bashundhara, 
              Banasree, Mirpur, Niketon, Uttara, Mohammadpur & all over Dhaka, Bangladesh.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/tomarthikanaaa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/tomarthikanaaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="mailto:tomarthikanaaa@gmail.com" 
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Product Categories
              <span className="block text-sm font-normal text-muted-foreground">পণ্য বিভাগ</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=earrings" className="text-muted-foreground hover:text-primary transition-colors">
                  Earrings | কানের দুল
                </Link>
              </li>
              <li>
                <Link href="/products?category=pendants" className="text-muted-foreground hover:text-primary transition-colors">
                  Pendants | পেন্ডেন্ট
                </Link>
              </li>
              <li>
                <Link href="/products?category=keychains" className="text-muted-foreground hover:text-primary transition-colors">
                  Keychains | চাবির রিং
                </Link>
              </li>
              <li>
                <Link href="/products?category=photoframes" className="text-muted-foreground hover:text-primary transition-colors">
                  Photo Frames | ফটো ফ্রেম
                </Link>
              </li>
              <li>
                <Link href="/products?category=bookmarks" className="text-muted-foreground hover:text-primary transition-colors">
                  Bookmarks | বুকমার্ক
                </Link>
              </li>
              <li>
                <Link href="/products?category=bracelets" className="text-muted-foreground hover:text-primary transition-colors">
                  Bracelets | ব্রেসলেট
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Quick Links
              <span className="block text-sm font-normal text-muted-foreground">দ্রুত লিংক</span>
            </h4>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  All Products | সব পণ্য
                </Link>
              </li>
              <li>
                <Link href="/custom-order" className="text-muted-foreground hover:text-primary transition-colors">
                  Custom Order | কাস্টম অর্ডার
                </Link>
              </li>
              <li>
                <Link href="/delivery-areas" className="text-muted-foreground hover:text-primary transition-colors">
                  Delivery Areas | ডেলিভারি এলাকা
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us | আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact | যোগাযোগ
                </Link>
              </li>
            </ul>
            
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">
                <span className="font-semibold">Keywords:</span> Handmade resin jewelry Bangladesh, 
                Jhumka earrings Dhaka, Custom gifts Bangladesh, Photo frame customize Dhaka
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="text-center mb-4">
            <p className="text-sm text-muted-foreground mb-2">
              🎁 Handmade Resin Jewelry & Custom Gifts | হাতে তৈরি রেজিন জুয়েলারি ও কাস্টম গিফট
            </p>
            <p className="text-xs text-muted-foreground">
              📦 Free Delivery in Dhaka (Gulshan, Dhanmondi, Bashundhara) | 
              💰 Price Range: ৳80-৳1000 | 
              📱 Order: WhatsApp, Facebook, Instagram
            </p>
          </div>
          <p className="text-muted-foreground text-center flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-primary fill-primary" /> by তোমার ঠিকানা © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
