'use client';
import React from 'react';

const products = [
  { id: 1, title: "SOLAR ELIXIR", price: "$84.00", image: "https://images.unsplash.com/photo-1615485242231-13768f700466?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "LUNAR TEA DUST", price: "$62.00", image: "https://images.unsplash.com/photo-1594631252845-29fc458651d7?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "AURA SERUM", price: "$120.00", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, title: "GROUNDING OIL", price: "$48.00", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1000&auto=format&fit=crop" },
  { id: 5, title: "ZENITH BARK", price: "$35.00", image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=1000&auto=format&fit=crop" },
];

export default function Marquee() {
  // Triple the items to ensure seamless loop on all screens
  const doubledProducts = [...products, ...products, ...products, ...products];

  return (
    <section className="py-32 overflow-hidden bg-bt-cream">
      <div className="mb-20 text-center px-4 animate-on-scroll">
        <h2 className="text-3xl md:text-5xl mb-4 uppercase">Daily Rituals</h2>
        <div className="w-12 h-[1px] bg-bt-gold mx-auto mb-4"></div>
        <p className="text-[10px] tracking-[0.3em] text-bt-charcoal/60 uppercase">Curated energy for the modern spirit</p>
      </div>

      <div className="relative">
        <div className="bt-marquee-track">
          {doubledProducts.map((product, index) => (
            <div key={`${product.id}-${index}`} className="bt-product-card group">
              <div className="overflow-hidden rounded-[12px] relative aspect-square">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-sm tracking-widest font-semibold">{product.title}</h3>
                  <p className="font-serif italic text-bt-gold text-lg mt-1">{product.price}</p>
                </div>
              </div>
              <button className="bt-btn-atc">
                ADD TO RITUAL
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
