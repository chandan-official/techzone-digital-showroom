import { Link } from "react-router-dom";
import { Smartphone, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/50">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-heading text-lg font-bold">
            <Smartphone className="h-5 w-5 text-primary" />
            TechZone <span className="text-gradient">Mobiles</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Your trusted destination for the latest smartphones, tablets, and accessories at the best prices.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-heading font-semibold">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/products" className="transition-colors hover:text-foreground">Products</Link>
            <Link to="/accessories" className="transition-colors hover:text-foreground">Accessories</Link>
            <Link to="/offers" className="transition-colors hover:text-foreground">Offers</Link>
            <Link to="/about" className="transition-colors hover:text-foreground">About Us</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-heading font-semibold">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</span>
            <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@techzonemobiles.in</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> MG Road, Bengaluru</span>
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-heading font-semibold">Store Hours</h4>
          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
            <span>Mon – Sat: 10 AM – 9 PM</span>
            <span>Sunday: 11 AM – 7 PM</span>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} TechZone Mobiles. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
