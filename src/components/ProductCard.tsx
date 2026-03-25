import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => (
  <Link
    to={`/products/${product.id}`}
    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
  >
    {product.badge && (
      <span className="absolute left-3 top-3 z-10 rounded-full bg-gradient-hero px-3 py-1 text-xs font-semibold text-primary-foreground">
        {product.badge}
      </span>
    )}
    <div className="flex aspect-square items-center justify-center overflow-hidden bg-secondary/50 p-6">
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="flex flex-1 flex-col gap-1 p-4">
      <span className="text-xs font-medium text-muted-foreground">{product.brand}</span>
      <h3 className="font-heading text-sm font-semibold leading-tight">{product.name}</h3>
      {product.specs.ram && (
        <span className="text-xs text-muted-foreground">
          {product.specs.ram} · {product.specs.storage}
        </span>
      )}
      <div className="mt-auto flex items-baseline gap-2 pt-2">
        <span className="font-heading text-lg font-bold text-primary">{formatPrice(product.price)}</span>
        {product.originalPrice && (
          <span className="text-xs text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
        )}
      </div>
      <div className="flex gap-1.5 pt-1">
        {product.emiAvailable && <Badge variant="secondary" className="text-[10px]">EMI</Badge>}
        {product.exchangeAvailable && <Badge variant="secondary" className="text-[10px]">Exchange</Badge>}
      </div>
    </div>
  </Link>
);

export default ProductCard;
