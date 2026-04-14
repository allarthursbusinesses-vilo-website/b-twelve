'use client';
import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop" 
          alt="Luxury Wellness" 
          className="w-full h-full object-cover brightness-95 scale-105"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 animate-on-scroll">
        <p className="text-[10px] tracking-[0.5em] uppercase mb-4 opacity-80">The Science of Presence</p>
        <h2 className="text-4xl md:text-7xl mb-8 leading-tight max-w-4xl">
          ELEVATE YOUR <br /> 
          <span className="italic font-normal">INTERNAL RADIANCE</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 bg-white text-bt-charcoal text-[10px] tracking-[0.2em] font-semibold uppercase hover:bg-bt-gold hover:text-white transition-all duration-500">
            Shop the Collection
          </button>
          <button className="px-10 py-4 bg-transparent border border-white text-white text-[10px] tracking-[0.2em] font-semibold uppercase hover:bg-white hover:text-bt-charcoal transition-all duration-500">
            View Rituals
          </button>
        </div>
      </div>
    </section>
  );
}
