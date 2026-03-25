import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products, brands, categories } from "@/data/products";
import { Button } from "@/components/ui/button";

const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under ₹25K", min: 0, max: 25000 },
  { label: "₹25K – ₹50K", min: 25000, max: 50000 },
  { label: "₹50K – ₹1L", min: 50000, max: 100000 },
  { label: "Above ₹1L", min: 100000, max: Infinity },
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("cat") || "all";
  const [brand, setBrand] = useState("all");
  const [category, setCategory] = useState(initialCat);
  const [priceIdx, setPriceIdx] = useState(0);

  const filtered = useMemo(() => {
    const range = priceRanges[priceIdx];
    return products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (brand !== "all" && p.brand !== brand) return false;
      if (p.price < range.min || p.price > range.max) return false;
      return true;
    });
  }, [brand, category, priceIdx]);

  return (
    <div className="container py-10">
      <h1 className="mb-2 font-heading text-3xl font-bold">Our Products</h1>
      <p className="mb-8 text-muted-foreground">Browse our complete range of smartphones, tablets & more</p>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-6">
        <div>
          <span className="mb-2 block text-xs font-semibold text-muted-foreground">Category</span>
          <div className="flex flex-wrap gap-1.5">
            <Button variant={category === "all" ? "default" : "outline"} size="sm" onClick={() => setCategory("all")}>All</Button>
            {categories.map((c) => (
              <Button key={c} variant={category === c ? "default" : "outline"} size="sm" onClick={() => setCategory(c)} className="capitalize">
                {c === "mobile" ? "Mobiles" : c === "tablet" ? "Tablets" : "Accessories"}
              </Button>
            ))}
          </div>
        </div>
        <div>
          <span className="mb-2 block text-xs font-semibold text-muted-foreground">Brand</span>
          <div className="flex flex-wrap gap-1.5">
            <Button variant={brand === "all" ? "default" : "outline"} size="sm" onClick={() => setBrand("all")}>All</Button>
            {brands.map((b) => (
              <Button key={b} variant={brand === b ? "default" : "outline"} size="sm" onClick={() => setBrand(b)}>{b}</Button>
            ))}
          </div>
        </div>
        <div>
          <span className="mb-2 block text-xs font-semibold text-muted-foreground">Price</span>
          <div className="flex flex-wrap gap-1.5">
            {priceRanges.map((r, i) => (
              <Button key={r.label} variant={priceIdx === i ? "default" : "outline"} size="sm" onClick={() => setPriceIdx(i)}>{r.label}</Button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-muted-foreground">No products found matching your filters.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
