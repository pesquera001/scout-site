"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, Star, Plus, Minus, Truck, Shield, 
  ArrowRight, CheckCircle, Package
} from "lucide-react";
import { motion } from "framer-motion";

const ScoutHead = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Courier+Prime:wght@400;700&family=JetBrains+Mono:wght@300;400;500;700&family=Space+Mono:wght@400;700&display=swap');

    :root {
      --white-canvas: #F9F8F5;
      --worn-denim: #708B91;
      --prairie-clay: #B9856F;
      --saddle-dust: #E5D3BD;
      --smoke-tin: #78736E;
      --font-retro-display: 'Bebas Neue', sans-serif;
      --font-retro-mono: 'JetBrains Mono', monospace;
      --font-retro-typewriter: 'Courier Prime', monospace;
    }

    body {
      background-color: var(--white-canvas);
      color: var(--smoke-tin);
      font-family: var(--font-retro-mono);
      font-weight: 400;
    }
    
    .font-display {
      font-family: var(--font-retro-display);
      letter-spacing: 0.05em;
    }
    
    .font-mono {
      font-family: var(--font-retro-mono);
    }
    
    .font-typewriter {
      font-family: var(--font-retro-typewriter);
    }
    
    .retro-shadow {
      text-shadow: 2px 2px 0px var(--saddle-dust);
    }
  `}</style>
);

const Nav = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white-canvas/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center border-b border-saddle-dust/50">
        <div className="text-2xl font-display font-bold tracking-[0.3em] text-worn-denim">
          <a href="/">SCOUT</a>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="font-mono text-sm font-light hover:text-worn-denim transition-colors tracking-wide">HOME</a>
          <a href="/clients" className="font-mono text-sm font-light hover:text-worn-denim transition-colors tracking-wide">CLIENTS</a>
          <a href="/shop" className="font-mono text-sm font-light text-worn-denim tracking-wide">SHOP</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button 
            variant="outline"
            className="relative border-worn-denim text-worn-denim hover:bg-worn-denim hover:text-white font-mono"
          >
            <ShoppingCart className="w-4 h-4" />
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-prairie-clay text-white w-5 h-5 text-xs flex items-center justify-center p-0">
                {cartCount}
              </Badge>
            )}
          </Button>
          <Button 
            className="bg-worn-denim text-white hover:bg-smoke-tin font-typewriter text-sm font-bold tracking-wide px-6 py-2"
          >
            GET_QUOTE
          </Button>
        </div>
      </div>
    </header>
  );
};

const HeroSection = () => (
  <section className="pt-32 pb-16 md:pt-40 md:pb-24">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="outline" className="border-prairie-clay text-prairie-clay mb-6">
          SCOUT_MERCH
        </Badge>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-worn-denim leading-tight retro-shadow mb-8">
          CLEAN_THREADS.
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl font-typewriter text-smoke-tin/80 leading-relaxed tracking-wide mb-10">
          Premium workwear and lifestyle pieces. Pressed whites, utility details, 
          and the kind of quality that shows up clean every time.
        </p>
        <Button 
          size="lg" 
          className="bg-worn-denim text-white hover:bg-smoke-tin font-typewriter font-bold tracking-wide px-8 py-4 text-base"
        >
          SHOP_COLLECTION
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  </section>
);

const ProductGrid = () => {
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const products = [
    {
      id: 1,
      name: "SCOUT_WORK_SHIRT",
      description: "Cream twill with utility detailing. Pressed and professional.",
      price: 89,
      originalPrice: null,
      category: "apparel",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Cream", "Stone"],
      rating: 5,
      reviews: 24,
      badge: "BESTSELLER"
    },
    {
      id: 2,
      name: "RANCH_WORK_HAT",
      description: "Wide brim, sun protection. Vintage workwear meets modern style.",
      price: 45,
      originalPrice: null,
      category: "accessories",
      colors: ["Tan", "Charcoal"],
      rating: 5,
      reviews: 18,
      badge: null
    },
    {
      id: 3,
      name: "UTILITY_TOOL_ROLL",
      description: "Soft leather pouch for the professional. Handcrafted quality.",
      price: 125,
      originalPrice: null,
      category: "gear",
      colors: ["Natural", "Chestnut"],
      rating: 5,
      reviews: 12,
      badge: "LIMITED"
    },
    {
      id: 4,
      name: "SCOUT_DENIM_JACKET",
      description: "Worn denim aesthetic. Blue-collar grace in every stitch.",
      price: 165,
      originalPrice: 195,
      category: "apparel",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Worn Denim", "Raw Indigo"],
      rating: 5,
      reviews: 31,
      badge: "SALE"
    },
    {
      id: 5,
      name: "DEADPAN_TEE",
      description: "Minimal logo. Maximum comfort. Scout doesn't advertise.",
      price: 35,
      originalPrice: null,
      category: "apparel",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["White Canvas", "Smoke"],
      rating: 5,
      reviews: 42,
      badge: null
    },
    {
      id: 6,
      name: "WORK_BOOT_LACES",
      description: "Heavy-duty laces for serious boots. The details matter.",
      price: 18,
      originalPrice: null,
      category: "accessories",
      colors: ["Brown", "Black"],
      rating: 5,
      reviews: 8,
      badge: null
    },
    {
      id: 7,
      name: "SCOUT_CANVAS_PANTS",
      description: "Tan canvas durability. Built for the long haul.",
      price: 95,
      originalPrice: null,
      category: "apparel",
      sizes: ["28", "30", "32", "34", "36", "38"],
      colors: ["Tan", "Olive"],
      rating: 5,
      reviews: 19,
      badge: null
    },
    {
      id: 8,
      name: "SQUEEGEE_KEYCHAIN",
      description: "Miniature precision tool. Conversation starter.",
      price: 25,
      originalPrice: null,
      category: "accessories",
      colors: ["Brass", "Steel"],
      rating: 5,
      reviews: 35,
      badge: "GIFT"
    },
    {
      id: 9,
      name: "RANCH_FLANNEL",
      description: "Heavyweight flannel for off-duty comfort. Prairie clay colorway.",
      price: 75,
      originalPrice: null,
      category: "apparel",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Prairie Clay", "Forest"],
      rating: 5,
      reviews: 26,
      badge: "NEW"
    }
  ];

  const updateQuantity = (productId: number, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) + change)
    }));
  };

  const addToCart = (productId: number) => {
    const quantity = quantities[productId] || 1;
    alert(`Added ${quantity} item(s) to cart. Scout works. Cart fills.`);
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-worn-denim retro-shadow mb-6">
            SCOUT_COLLECTION
          </h2>
          <p className="font-typewriter text-lg text-smoke-tin/80 max-w-2xl mx-auto tracking-wide">
            Honest workwear. No corners cut.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-2 border-saddle-dust/50 hover:border-worn-denim/50 transition-all duration-300 group">
                <CardContent className="p-0">
                  {/* Product Image Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-saddle-dust to-prairie-clay relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-white/80">
                      <div className="text-center">
                        <Package className="w-12 h-12 mx-auto mb-4 opacity-70" />
                        <div className="font-display text-xl tracking-wide">
                          {product.name.replace(/_/g, ' ')}
                        </div>
                      </div>
                    </div>
                    
                    {/* Product Badge */}
                    {product.badge && (
                      <Badge 
                        className={`absolute top-4 left-4 ${
                          product.badge === 'SALE' ? 'bg-prairie-clay' :
                          product.badge === 'NEW' ? 'bg-worn-denim' :
                          product.badge === 'LIMITED' ? 'bg-smoke-tin' :
                          'bg-worn-denim'
                        } text-white`}
                      >
                        {product.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-mono font-bold text-lg text-smoke-tin tracking-wide mb-2">
                        {product.name}
                      </h3>
                      <p className="font-typewriter text-sm text-smoke-tin/80 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(product.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-prairie-clay text-prairie-clay" />
                        ))}
                      </div>
                      <span className="font-typewriter text-sm text-smoke-tin/70">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Sizes/Colors */}
                    <div className="space-y-2">
                      {product.sizes && (
                        <div>
                          <span className="font-mono text-xs text-smoke-tin/70 tracking-wide">SIZES:</span>
                          <div className="flex gap-1 mt-1">
                            {product.sizes.map(size => (
                              <Badge key={size} variant="outline" className="text-xs">
                                {size}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      <div>
                        <span className="font-mono text-xs text-smoke-tin/70 tracking-wide">COLORS:</span>
                        <div className="flex gap-1 mt-1">
                          {product.colors.map(color => (
                            <Badge key={color} variant="outline" className="text-xs">
                              {color}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3">
                      <span className="font-display text-2xl text-worn-denim">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="font-typewriter text-lg text-smoke-tin/50 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Quantity & Add to Cart */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border-2 border-saddle-dust rounded">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="p-2 hover:bg-saddle-dust/20 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 font-mono">
                          {quantities[product.id] || 1}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="p-2 hover:bg-saddle-dust/20 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <Button 
                        onClick={() => addToCart(product.id)}
                        className="flex-1 bg-worn-denim hover:bg-smoke-tin text-white font-typewriter font-bold tracking-wide"
                      >
                        ADD_TO_CART
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ShippingInfo = () => (
  <section className="py-20 md:py-28 bg-white/50">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="w-16 h-16 bg-worn-denim/10 rounded-full flex items-center justify-center mx-auto">
            <Truck className="w-8 h-8 text-worn-denim" />
          </div>
          <h3 className="font-mono font-bold text-lg text-smoke-tin tracking-wide">
            FREE_SHIPPING
          </h3>
          <p className="font-typewriter text-smoke-tin/80 text-sm">
            Orders over $75. We don't charge extra for doing our job.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="w-16 h-16 bg-worn-denim/10 rounded-full flex items-center justify-center mx-auto">
            <Shield className="w-8 h-8 text-worn-denim" />
          </div>
          <h3 className="font-mono font-bold text-lg text-smoke-tin tracking-wide">
            QUALITY_GUARANTEE
          </h3>
          <p className="font-typewriter text-smoke-tin/80 text-sm">
            Built to last. If it doesn't, we'll make it right.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="w-16 h-16 bg-worn-denim/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-worn-denim" />
          </div>
          <h3 className="font-mono font-bold text-lg text-smoke-tin tracking-wide">
            EASY_RETURNS
          </h3>
          <p className="font-typewriter text-smoke-tin/80 text-sm">
            30 days. No questions. Scout works both ways.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white-canvas pt-16 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
        <div className="md:col-span-1">
          <h3 className="text-2xl font-display font-bold tracking-[0.3em] text-worn-denim">SCOUT</h3>
        </div>
        <div>
          <h4 className="font-mono font-bold mb-4 text-smoke-tin tracking-wide">NAVIGATE</h4>
          <ul className="space-y-3 font-typewriter text-smoke-tin/80">
            <li><a href="/" className="hover:text-worn-denim tracking-wide">HOME</a></li>
            <li><a href="/clients" className="hover:text-worn-denim tracking-wide">CLIENTS</a></li>
            <li><a href="/shop" className="hover:text-worn-denim tracking-wide">SHOP</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono font-bold mb-4 text-smoke-tin tracking-wide">CONTACT</h4>
          <ul className="space-y-3 font-typewriter text-smoke-tin/80">
            <li className="tracking-wide">(555) 123-CLEAN</li>
            <li className="tracking-wide">hello@scout.work</li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono font-bold mb-4 text-smoke-tin tracking-wide">SHOP</h4>
          <ul className="space-y-3 font-typewriter text-smoke-tin/80">
            <li className="tracking-wide">SIZE_GUIDE</li>
            <li className="tracking-wide">SHIPPING_INFO</li>
            <li className="tracking-wide">RETURNS</li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t-2 border-saddle-dust/30 text-center">
        <p className="font-typewriter text-sm text-smoke-tin/60 tracking-wide">© 2025 SCOUT_WINDOW_CLEANING. SHOW_UP_CLEAN. LEAVE_CLEANER.</p>
      </div>
    </div>
  </footer>
);

export default function Shop() {
  return (
    <>
      <ScoutHead />
      <Nav />
      <main className="pt-20">
        <HeroSection />
        <ProductGrid />
        <ShippingInfo />
      </main>
      <Footer />
    </>
  );
} 