import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const accessories = products.filter((p) => p.category === "accessory");

const Accessories = () => (
  <div className="container py-10">
    <h1 className="mb-2 font-heading text-3xl font-bold">Accessories</h1>
    <p className="mb-8 text-muted-foreground">Chargers, earphones, covers, smartwatches & more</p>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {accessories.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  </div>
);

export default Accessories;
