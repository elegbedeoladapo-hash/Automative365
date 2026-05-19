'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const userData = JSON.stringify({
      name: formData.email.split('@')[0],
      email: formData.email,
      phone: '',
      memberSince: new Date().toISOString(),
      tier: 'Premium',
    });

    document.cookie = `isAuthenticated=true; path=/; max-age=86400; SameSite=Lax`;
    document.cookie = `user=${encodeURIComponent(userData)}; path=/; max-age=86400; SameSite=Lax`;

    try {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', userData);
    } catch (err) {}

    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">

      <div
        className="fixed inset-0 overflow-hidden pointer-events-none select-none"
        style={{ zIndex: -1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-yellow/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md" style={{ zIndex: 10 }}>

        <Link href="/">
          <div className="w-16 h-16 bg-neon-yellow/10 rounded-xl flex items-center justify-center border border-neon-yellow/20 mx-auto mb-8 cursor-pointer">
            <span className="text-3xl font-bold text-neon-yellow">363</span>
          </div>
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Welcome <span className="text-neon-yellow">Back</span>
          </h1>
          <p className="text-white/60">Sign in to access your dashboard</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        <div className="glass-dark rounded-3xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-white/80">
              Email Address
            </label>
            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-yellow text-white placeholder-white/40"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-white/80">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-yellow text-white placeholder-white/40"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            style={{ zIndex: 20, position: 'relative' }}
            className="w-full py-4 bg-neon-yellow text-black rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 active:scale-95 transition-transform cursor-pointer"
          >
            {isLoading ? (
              <span>Loading...</span>
            ) : (
              <>
                Sign In <FiArrowRight />
              </>
            )}
          </button>

          <p className="text-center text-white/60 text-sm">
            Not a member?{' '}
            <Link href="/signup" className="text-neon-yellow hover:underline font-medium">
              Join Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}