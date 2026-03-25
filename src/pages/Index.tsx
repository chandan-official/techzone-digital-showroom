import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products, formatPrice } from "@/data/products";
import { ArrowRight, Smartphone, Tablet, Headphones, RefreshCw, CreditCard, Percent, Star, MapPin, Phone } from "lucide-react";

const featuredProducts = products.filter((p) => p.category === "mobile").slice(0, 3);

const categories = [
  { label: "Mobiles", icon: Smartphone, to: "/products", desc: "Latest smartphones" },
  { label: "Tablets", icon: Tablet, to: "/products?cat=tablet", desc: "Powerful tablets" },
  { label: "Accessories", icon: Headphones, to: "/accessories", desc: "Chargers, cases & more" },
];

const highlights = [
  { icon: RefreshCw, label: "Exchange Offers", desc: "Trade your old phone for a great deal" },
  { icon: CreditCard, label: "Easy EMI", desc: "No-cost EMI starting from ₹999/month" },
  { icon: Percent, label: "Best Discounts", desc: "Up to 25% off on top brands" },
];

const testimonials = [
  { name: "Rahul M.", text: "Best prices in the city! Got my iPhone 15 Pro here with exchange and saved ₹15,000.", rating: 5 },
  { name: "Priya S.", text: "Amazing customer service. They helped me pick the perfect phone within my budget.", rating: 5 },
  { name: "Arun K.", text: "Authentic products with warranty. Very trustworthy store, been buying here for 3 years.", rating: 5 },
];

const Index = () => (
  <div className="flex flex-col">
    {/* Hero */}
    <section className="relative overflow-hidden bg-secondary/30">
      <div className="container relative z-10 flex flex-col items-center gap-8 py-20 text-center lg:py-28">
        <div className="animate-fade-in">
          <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
            ✨ New Arrivals — iPhone 15, Galaxy S24 & more
          </span>
        </div>
        <h1 className="animate-fade-in font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl" style={{ animationDelay: "0.1s" }}>
          Latest Smartphones.
          <br />
          <span className="text-gradient">Best Prices.</span> Trusted Store.
        </h1>
        <p className="max-w-xl animate-fade-in text-lg text-muted-foreground" style={{ animationDelay: "0.2s" }}>
          Explore the widest range of genuine smartphones, tablets & accessories with easy EMI, exchange offers, and unbeatable pricing.
        </p>
        <div className="flex animate-fade-in flex-wrap justify-center gap-4" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="xl" asChild>
            <Link to="/products">View Products <ArrowRight className="ml-1 h-5 w-5" /></Link>
          </Button>
          <Button variant="whatsapp" size="xl" asChild>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
      {/* Decorative blur */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
    </section>

    {/* Featured Products */}
    <section className="container py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Featured Smartphones</h2>
          <p className="mt-1 text-sm text-muted-foreground">Handpicked top sellers this week</p>
        </div>
        <Link to="/products" className="hidden text-sm font-medium text-primary hover:underline sm:block">
          View all →
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>

    {/* Categories */}
    <section className="bg-secondary/30 py-16">
      <div className="container">
        <h2 className="mb-8 text-center font-heading text-2xl font-bold sm:text-3xl">Shop by Category</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              to={cat.to}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                <cat.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-lg font-semibold">{cat.label}</h3>
              <p className="text-sm text-muted-foreground">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Highlights */}
    <section className="container py-16">
      <h2 className="mb-8 text-center font-heading text-2xl font-bold sm:text-3xl">Why Shop With Us</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {highlights.map((h) => (
          <div key={h.label} className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center shadow-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <h.icon className="h-6 w-6" />
            </div>
            <h3 className="font-heading font-semibold">{h.label}</h3>
            <p className="text-sm text-muted-foreground">{h.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonials */}
    <section className="bg-secondary/30 py-16">
      <div className="container">
        <h2 className="mb-8 text-center font-heading text-2xl font-bold sm:text-3xl">What Our Customers Say</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4 text-sm text-muted-foreground">"{t.text}"</p>
              <span className="text-sm font-semibold">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Store Location */}
    <section className="container py-16">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">Visit Our Store</h2>
        <p className="max-w-md text-muted-foreground">
          Drop by our showroom to experience the latest gadgets hands-on. Expert staff ready to help!
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> 42, MG Road, Bengaluru 560001</span>
          <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 98765 43210</span>
        </div>
        <Button variant="outline" size="lg" asChild>
          <Link to="/contact">Get Directions</Link>
        </Button>
      </div>
    </section>
  </div>
);

export default Index;
