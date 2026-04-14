'use client';
import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Search, Menu } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bt-glass-header px-6 md:px-12 py-6 flex items-center justify-between ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="flex items-center gap-8">
        <Menu className="w-5 h-5 cursor-pointer" />
        <nav className="hidden md:flex gap-6 text-[10px] tracking-[0.2em] font-medium uppercase text-bt-charcoal/60">
          <a href="#" className="hover:text-bt-gold transition-colors">Apothecary</a>
          <a href="#" className="hover:text-bt-gold transition-colors">Rituals</a>
          <a href="#" className="hover:text-bt-gold transition-colors">Manifesto</a>
        </nav>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-2xl md:text-3xl tracking-[0.3em] font-serif font-medium">B TWELVE</h1>
      </div>

      <div className="flex items-center gap-6">
        <Search className="w-5 h-5 cursor-pointer hidden sm:block" />
        <User className="w-5 h-5 cursor-pointer" />
        <div className="relative cursor-pointer">
          <ShoppingBag className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-bt-gold text-white text-[8px] w-3 h-3 flex items-center justify-center rounded-full">0</span>
        </div>
      </div>
    </header>
  );
}
