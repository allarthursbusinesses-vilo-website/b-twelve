'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';

export default function Home() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header />
      
      <Hero />
      
      {/* Featured Section */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 animate-on-scroll">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1611082216849-b8566f103b0c?q=80&w=1000&auto=format&fit=crop" 
                alt="Product context" 
                className="w-full h-[600px] object-cover rounded-tl-[100px] rounded-br-[100px]"
              />
              <div className="absolute -bottom-10 -right-10 bg-bt-cream p-10 hidden md:block">
                <p className="font-serif italic text-3xl">Purity Defined</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 animate-on-scroll">
            <span className="text-bt-gold text-[10px] tracking-[0.5em] uppercase font-bold">The Provenance</span>
            <h2 className="text-4xl md:text-5xl mt-6 mb-10 leading-tight">HAND-INFUSED WITH CELESTIAL INTENT</h2>
            <p className="text-sm tracking-widest leading-relaxed text-bt-charcoal/70 mb-10">
              Every B Twelve formulation begins with wild-harvested botanicals, gathered in total alignment with lunar phases. We don't just create products; we orchestrate vibrational experiences for the discerning soul.
            </p>
            <button 
              onClick={() => setIsAuthOpen(true)}
              className="text-[10px] tracking-[0.3em] uppercase font-bold border-b-2 border-bt-gold pb-2 hover:text-bt-gold transition-colors"
            >
              Discovery our Process
            </button>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Trust Quote Section */}
      <section className="py-32 bg-bt-charcoal text-center text-bt-cream px-6">
        <div className="max-w-3xl mx-auto animate-on-scroll">
           <div className="text-bt-gold text-5xl mb-12 font-serif opacity-50">“</div>
           <p className="text-2xl md:text-3xl font-serif italic font-light tracking-wide leading-relaxed">
             "B Twelve is the first brand that understands apothecary as an art form. My morning ritual has been completely transformed into a sacred meditation."
           </p>
           <div className="mt-12">
             <p className="text-[10px] tracking-[0.4em] uppercase font-semibold">Elena Vance</p>
             <p className="text-[9px] tracking-widest text-bt-cream/40 mt-1 uppercase">Vogue Rituals Contributor</p>
           </div>
        </div>
      </section>

      {/* Auth Call to Action */}
      <section className="py-32 bg-bt-cream text-center px-6">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl mb-8 uppercase">Become a Patron</h2>
          <p className="text-sm tracking-[0.2em] max-w-xl mx-auto mb-10 text-bt-charcoal/60 leading-loose uppercase">
            Join our private guild to receive early access to seasonal batches and exclusive ritual guides.
          </p>
          <button 
            onClick={() => setIsAuthOpen(true)}
            className="px-12 py-4 bg-bt-charcoal text-white text-[10px] tracking-[0.3em] font-semibold uppercase hover:bg-bt-gold transition-all"
          >
            Create Your Account
          </button>
        </div>
      </section>

      <Footer />

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
      />
    </main>
  );
}
