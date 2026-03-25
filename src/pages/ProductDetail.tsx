import { useParams, Link } from "react-router-dom";
import { products, formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingBag, MessageCircle, RefreshCw, CreditCard, CheckCircle2 } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container flex flex-col items-center gap-4 py-20">
        <h1 className="font-heading text-2xl font-bold">Product not found</h1>
        <Button asChild><Link to="/products">Back to Products</Link></Button>
      </div>
    );
  }

  const specs = Object.entries(product.specs).filter(([, v]) => v);

  return (
    <div className="container py-10">
      <Link to="/products" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to Products
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary/30">
          {product.badge && (
            <span className="absolute left-4 top-4 z-10 rounded-full bg-gradient-hero px-3 py-1 text-xs font-semibold text-primary-foreground">
              {product.badge}
            </span>
          )}
          <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-5">
          <div>
            <span className="text-sm font-medium text-muted-foreground">{product.brand}</span>
            <h1 className="mt-1 font-heading text-3xl font-bold">{product.name}</h1>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="font-heading text-3xl font-extrabold text-primary">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
            )}
            {product.originalPrice && (
              <Badge variant="secondary" className="text-xs font-semibold text-primary">
                Save {formatPrice(product.originalPrice - product.price)}
              </Badge>
            )}
          </div>

          {/* Specs */}
          {specs.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {specs.map(([key, value]) => (
                <div key={key} className="rounded-xl border border-border bg-secondary/50 p-3">
                  <span className="block text-xs text-muted-foreground capitalize">{key}</span>
                  <span className="font-heading text-sm font-semibold">{value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Offers */}
          <div className="flex flex-col gap-2 rounded-xl border border-border bg-secondary/30 p-4">
            <h3 className="text-sm font-semibold">Available Offers</h3>
            {product.emiAvailable && (
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <CreditCard className="h-4 w-4 text-primary" /> No-cost EMI starting ₹999/mo
              </span>
            )}
            {product.exchangeAvailable && (
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <RefreshCw className="h-4 w-4 text-primary" /> Exchange your old device & save more
              </span>
            )}
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" /> 100% genuine with brand warranty
            </span>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <Button variant="hero" size="lg" className="flex-1">
              <ShoppingBag className="mr-2 h-5 w-5" /> Buy Now
            </Button>
            <Button variant="whatsapp" size="lg" className="flex-1" asChild>
              <a href={`https://wa.me/919876543210?text=Hi! I'm interested in ${product.name}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> Enquire on WhatsApp
              </a>
            </Button>
          </div>

          <Button variant="outline" size="lg">
            Check Availability in Store
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
