'use client';
import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleAuth = async (type: 'signup' | 'login') => {
    setLoading(true);
    setError(null);
    
    const { error } = type === 'signup' 
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
    } else {
      onClose();
      alert(type === 'signup' ? 'Check your email for confirmation!' : 'Logged in successfully!');
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-bt-charcoal/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-bt-cream w-full max-w-md p-10 md:p-14 shadow-2xl">
        <button onClick={onClose} className="absolute top-6 right-6">
          <X className="w-5 h-5 text-bt-charcoal/40 hover:text-bt-charcoal transition-colors " />
        </button>
        
        <div className="text-center mb-10">
          <h2 className="text-3xl mb-4">MEMBER ACCESS</h2>
          <p className="text-[10px] tracking-widest uppercase text-bt-charcoal/60">Unlock exclusive botanical pricing</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 text-[10px] p-3 mb-6 tracking-wider text-center border border-red-100">
            {error.toUpperCase()}
          </div>
        )}

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[9px] tracking-widest uppercase font-semibold">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-bt-white border border-black/5 p-4 text-xs focus:border-bt-gold outline-none transition-colors" 
              placeholder="YOUR@EMAIL.COM"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] tracking-widest uppercase font-semibold">Secret Key</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-bt-white border border-black/5 p-4 text-xs focus:border-bt-gold outline-none transition-colors" 
              placeholder="••••••••"
            />
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <button 
              disabled={loading}
              onClick={() => handleAuth('login')}
              className="w-full py-4 bg-bt-charcoal text-white text-[10px] tracking-[0.2em] font-semibold uppercase hover:bg-bt-gold transition-all"
            >
              {loading ? 'Authenticating...' : 'Sign In'}
            </button>
            <button 
              disabled={loading}
              onClick={() => handleAuth('signup')}
              className="w-full py-4 bg-transparent border border-black/10 text-bt-charcoal text-[10px] tracking-[0.2em] font-semibold uppercase hover:border-bt-gold transition-all"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
