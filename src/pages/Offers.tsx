import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Percent, RefreshCw, CreditCard, Gift, ArrowRight } from "lucide-react";

const offers = [
  {
    title: "Festival Season Sale",
    desc: "Up to 25% off on all Samsung smartphones. Limited period offer!",
    icon: Percent,
    badge: "Hot Deal",
  },
  {
    title: "Exchange & Save",
    desc: "Get up to ₹15,000 off when you exchange your old phone. Any brand accepted.",
    icon: RefreshCw,
    badge: "Popular",
  },
  {
    title: "No-Cost EMI",
    desc: "Easy monthly installments starting from ₹999/month on all products above ₹10,000.",
    icon: CreditCard,
    badge: "EMI",
  },
  {
    title: "Combo Deals",
    desc: "Buy any smartphone and get 20% off on accessories. Mix & match!",
    icon: Gift,
    badge: "Bundle",
  },
];

const Offers = () => (
  <div className="container py-10">
    <h1 className="mb-2 font-heading text-3xl font-bold">Offers & Deals</h1>
    <p className="mb-8 text-muted-foreground">Don't miss out on our best deals and exclusive offers</p>

    {/* Banner */}
    <div className="mb-10 rounded-2xl bg-gradient-hero p-8 text-center text-primary-foreground sm:p-12">
      <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">Mega Sale is Live! 🎉</h2>
      <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80">
        Flat discounts, exchange bonuses, and free accessories on top brands. Hurry, limited stock!
      </p>
      <Button variant="secondary" size="xl" className="mt-6" asChild>
        <Link to="/products">Shop Now <ArrowRight className="ml-1 h-5 w-5" /></Link>
      </Button>
    </div>

    <div className="grid gap-6 sm:grid-cols-2">
      {offers.map((o) => (
        <div key={o.title} className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-card">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <o.icon className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-heading font-semibold">{o.title}</h3>
              <Badge variant="secondary" className="text-[10px]">{o.badge}</Badge>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{o.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Offers;
