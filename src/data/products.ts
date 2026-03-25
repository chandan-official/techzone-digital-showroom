export interface Product {
  id: string;
  name: string;
  brand: string;
  category: "mobile" | "tablet" | "accessory";
  price: number;
  originalPrice?: number;
  image: string;
  specs: {
    ram?: string;
    storage?: string;
    camera?: string;
    battery?: string;
    display?: string;
  };
  badge?: string;
  emiAvailable: boolean;
  exchangeAvailable: boolean;
}

export const products: Product[] = [
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    category: "mobile",
    price: 159900,
    originalPrice: 169900,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop",
    specs: { ram: "8 GB", storage: "256 GB", camera: "48 MP", battery: "4441 mAh", display: "6.7\" OLED" },
    badge: "Limited Stock",
    emiAvailable: true,
    exchangeAvailable: true,
  },
  {
    id: "samsung-galaxy-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "mobile",
    price: 134999,
    originalPrice: 144999,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=600&fit=crop",
    specs: { ram: "12 GB", storage: "256 GB", camera: "200 MP", battery: "5000 mAh", display: "6.8\" AMOLED" },
    badge: "Best Seller",
    emiAvailable: true,
    exchangeAvailable: true,
  },
  {
    id: "oneplus-12",
    name: "OnePlus 12",
    brand: "OnePlus",
    category: "mobile",
    price: 64999,
    originalPrice: 69999,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&h=600&fit=crop",
    specs: { ram: "12 GB", storage: "256 GB", camera: "50 MP", battery: "5400 mAh", display: "6.82\" AMOLED" },
    emiAvailable: true,
    exchangeAvailable: true,
  },
  {
    id: "pixel-8-pro",
    name: "Google Pixel 8 Pro",
    brand: "Google",
    category: "mobile",
    price: 106999,
    originalPrice: 112999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop",
    specs: { ram: "12 GB", storage: "128 GB", camera: "50 MP", battery: "5050 mAh", display: "6.7\" LTPO OLED" },
    emiAvailable: true,
    exchangeAvailable: false,
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    brand: "Apple",
    category: "mobile",
    price: 79900,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop",
    specs: { ram: "6 GB", storage: "128 GB", camera: "48 MP", battery: "3877 mAh", display: "6.1\" OLED" },
    emiAvailable: true,
    exchangeAvailable: true,
  },
  {
    id: "samsung-galaxy-a55",
    name: "Samsung Galaxy A55",
    brand: "Samsung",
    category: "mobile",
    price: 39999,
    originalPrice: 44999,
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&h=600&fit=crop",
    specs: { ram: "8 GB", storage: "128 GB", camera: "50 MP", battery: "5000 mAh", display: "6.6\" AMOLED" },
    badge: "Value Pick",
    emiAvailable: true,
    exchangeAvailable: true,
  },
  {
    id: "ipad-air-m2",
    name: "iPad Air M2",
    brand: "Apple",
    category: "tablet",
    price: 74900,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop",
    specs: { ram: "8 GB", storage: "128 GB", camera: "12 MP", battery: "28.93 Wh", display: "11\" Liquid Retina" },
    emiAvailable: true,
    exchangeAvailable: false,
  },
  {
    id: "samsung-tab-s9",
    name: "Samsung Galaxy Tab S9",
    brand: "Samsung",
    category: "tablet",
    price: 74999,
    originalPrice: 84999,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&h=600&fit=crop",
    specs: { ram: "8 GB", storage: "128 GB", camera: "13 MP", battery: "8400 mAh", display: "11\" AMOLED" },
    emiAvailable: true,
    exchangeAvailable: true,
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro 2",
    brand: "Apple",
    category: "accessory",
    price: 24900,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&h=600&fit=crop",
    specs: {},
    emiAvailable: false,
    exchangeAvailable: false,
  },
  {
    id: "samsung-charger-45w",
    name: "Samsung 45W Super Fast Charger",
    brand: "Samsung",
    category: "accessory",
    price: 3499,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&h=600&fit=crop",
    specs: {},
    emiAvailable: false,
    exchangeAvailable: false,
  },
  {
    id: "apple-watch-series-9",
    name: "Apple Watch Series 9",
    brand: "Apple",
    category: "accessory",
    price: 41900,
    originalPrice: 44900,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop",
    specs: {},
    badge: "New Arrival",
    emiAvailable: true,
    exchangeAvailable: false,
  },
  {
    id: "oneplus-buds-pro-2",
    name: "OnePlus Buds Pro 2",
    brand: "OnePlus",
    category: "accessory",
    price: 11999,
    originalPrice: 13999,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=600&h=600&fit=crop",
    specs: {},
    emiAvailable: false,
    exchangeAvailable: false,
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);

export const brands = ["Apple", "Samsung", "OnePlus", "Google"];
export const categories = ["mobile", "tablet", "accessory"] as const;
