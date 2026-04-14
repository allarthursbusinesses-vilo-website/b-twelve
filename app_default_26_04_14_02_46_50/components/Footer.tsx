import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-bt-charcoal text-bt-cream py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-3xl font-serif mb-8 tracking-[0.2em]">B TWELVE</h3>
          <p className="text-[10px] tracking-widest leading-relaxed text-bt-cream/60">
            A boutique collection of high-efficacy botanicals and ritual tools designed for the conscious voyager.
          </p>
        </div>
        
        <div>
          <h3 className="text-[10px] tracking-[0.3em] font-semibold uppercase mb-8">Navigation</h3>
          <ul className="space-y-4 text-[10px] tracking-[0.1em] text-bt-cream/60 uppercase">
            <li><a href="#" className="hover:text-bt-gold transition-colors">Shop All</a></li>
            <li><a href="#" className="hover:text-bt-gold transition-colors">Our Ethos</a></li>
            <li><a href="#" className="hover:text-bt-gold transition-colors">Journal</a></li>
            <li><a href="#" className="hover:text-bt-gold transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
           <h3 className="text-[10px] tracking-[0.3em] font-semibold uppercase mb-8">Support</h3>
           <ul className="space-y-4 text-[10px] tracking-[0.1em] text-bt-cream/60 uppercase">
            <li><a href="#" className="hover:text-bt-gold transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-bt-gold transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-bt-gold transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-bt-gold transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] tracking-[0.3em] font-semibold uppercase mb-8">Manifesto</h3>
          <p className="text-[10px] tracking-widest text-bt-cream/60 mb-6 italic">
            Join the inner circle for rituals and releases.
          </p>
          <div className="flex border-b border-bt-cream/20 py-2">
            <input 
              type="email" 
              placeholder="ESSENCE@EMAIL.COM" 
              className="bg-transparent text-[10px] uppercase outline-none flex-grow"
            />
            <button className="text-[10px] tracking-widest font-semibold hover:text-bt-gold transition-colors">O</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-bt-cream/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] tracking-widest uppercase opacity-40">
        <p>© 2024 B TWELVE BOUTIQUE. ALL RIGHTS RESERVED.</p>
        <p>DESIGNED BY THE AESTHESIA COLLECTIVE</p>
      </div>
    </footer>
  );
}
