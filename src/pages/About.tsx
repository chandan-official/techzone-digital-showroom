import { ShieldCheck, Award, Banknote, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "100% Authentic", desc: "Every product is genuine with official brand warranty." },
  { icon: Award, title: "10+ Years Trusted", desc: "Serving Bengaluru since 2014 with thousands of happy customers." },
  { icon: Banknote, title: "Best Pricing", desc: "We match or beat any authorized dealer's price, guaranteed." },
  { icon: HeartHandshake, title: "After-Sales Support", desc: "Dedicated support for repairs, returns, and warranty claims." },
];

const About = () => (
  <div className="container py-10">
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">About TechZone Mobiles</h1>
      <p className="text-lg text-muted-foreground">
        We are Bengaluru's most trusted mobile shop, offering the latest smartphones, tablets, and accessories at the best prices. With over 10 years in the business, we've built a reputation for authenticity, reliability, and exceptional customer care.
      </p>
    </div>

    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {reasons.map((r) => (
        <div key={r.title} className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center shadow-card">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <r.icon className="h-7 w-7" />
          </div>
          <h3 className="font-heading font-semibold">{r.title}</h3>
          <p className="text-sm text-muted-foreground">{r.desc}</p>
        </div>
      ))}
    </div>

    <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-border bg-secondary/30 p-8 text-center">
      <h2 className="mb-3 font-heading text-xl font-bold">Our Mission</h2>
      <p className="text-muted-foreground">
        To make premium technology accessible to everyone by providing genuine products, transparent pricing, flexible payment options, and world-class customer service — all under one roof.
      </p>
    </div>
  </div>
);

export default About;
