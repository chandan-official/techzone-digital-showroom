import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Enquiry sent! We'll get back to you soon.");
  };

  return (
    <div className="container py-10">
      <h1 className="mb-2 font-heading text-3xl font-bold">Contact Us</h1>
      <p className="mb-8 text-muted-foreground">We'd love to hear from you. Visit us or drop a message!</p>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Map */}
        <div className="flex flex-col gap-6">
          <div className="aspect-video overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Store Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.6!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <span className="text-sm font-semibold">Address</span>
                <p className="text-xs text-muted-foreground">42, MG Road, Bengaluru 560001</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <span className="text-sm font-semibold">Phone</span>
                <p className="text-xs text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <span className="text-sm font-semibold">Email</span>
                <p className="text-xs text-muted-foreground">hello@techzonemobiles.in</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <span className="text-sm font-semibold">Hours</span>
                <p className="text-xs text-muted-foreground">Mon–Sat 10–9, Sun 11–7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
          <h2 className="mb-6 font-heading text-xl font-bold">Send an Enquiry</h2>
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-12 text-center">
              <span className="text-4xl">✅</span>
              <h3 className="font-heading text-lg font-semibold">Thank you!</h3>
              <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
              <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input placeholder="Your Name" required />
              <Input type="tel" placeholder="Phone Number" required />
              <Input type="email" placeholder="Email (optional)" />
              <Textarea placeholder="Your message or product enquiry..." rows={4} required />
              <Button variant="hero" size="lg" type="submit">Send Enquiry</Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
