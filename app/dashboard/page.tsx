'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  FiUser, FiTruck, FiCalendar, FiLock,
  FiStar, FiSettings, FiLogOut, FiMenu, FiX
} from 'react-icons/fi';

interface UserData {
  name: string;
  email: string;
  phone: string;
  memberSince: string;
  tier: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (!isAuth) { router.push('/login'); return; }
    const userData = localStorage.getItem('user');
    if (userData) setUser(JSON.parse(userData));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    router.push('/');
  };

  const navItems = [
    { icon: FiUser, label: 'Profile', href: '#' },
    { icon: FiTruck, label: 'My Vehicles', href: '#' },
    { icon: FiCalendar, label: 'Events', href: '#' },
    { icon: FiLock, label: 'Security', href: '#' },
    { icon: FiStar, label: 'Membership', href: '#' },
    { icon: FiSettings, label: 'Settings', href: '#' },
  ];

  if (!user) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
        <span className="text-4xl font-bold text-neon-yellow">363</span>
      </motion.div>
    </div>
  );

  const memberDate = new Date(user.memberSince).toLocaleDateString('en-US', {
    month: 'short', year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-black flex">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-neutral-950 border-r border-white/10 z-30
        flex flex-col transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        {/* Logo */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-neon-yellow/10 rounded-xl flex items-center justify-center border border-neon-yellow/30">
              <span className="text-sm font-bold text-neon-yellow">363</span>
            </div>
            <span className="font-bold text-white text-lg">363 Club</span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white/60">
            <FiX size={20} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all"
              onClick={() => setSidebarOpen(false)}
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{label}</span>
            </Link>
          ))}
        </nav>

        {/* User + Logout */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-neon-yellow/20 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-neon-yellow">
                {user.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <p className="text-sm text-white/80 font-medium truncate">{user.name}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all w-full"
          >
            <FiLogOut size={18} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-h-screen overflow-y-auto">

        {/* Top bar (mobile) */}
        <div className="sticky top-0 z-10 bg-black/80 backdrop-blur border-b border-white/10 px-4 py-4 flex items-center justify-between lg:hidden">
          <button onClick={() => setSidebarOpen(true)} className="text-white">
            <FiMenu size={24} />
          </button>
          <span className="text-neon-yellow font-bold text-lg">363 Club</span>
          <div className="w-8 h-8 rounded-full bg-neon-yellow/20 flex items-center justify-center">
            <span className="text-xs font-bold text-neon-yellow">
              {user.name.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>

        {/* Page content */}
        <div className="p-4 md:p-8 max-w-4xl mx-auto">

          {/* Welcome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              Welcome back,{' '}
              <span className="text-neon-yellow block sm:inline">{user.name}</span>
            </h1>
            <p className="text-white/50 text-sm md:text-base">Here's your 363 Club dashboard</p>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
          >
            {[
              { icon: FiStar, label: 'Membership Tier', value: user.tier },
              { icon: FiCalendar, label: 'Member Since', value: memberDate },
              { icon: FiTruck, label: 'Vehicles Stored', value: '0' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 sm:flex-col sm:items-start sm:gap-3">
                <div className="w-10 h-10 rounded-xl bg-neon-yellow/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-neon-yellow" />
                </div>
                <div>
                  <p className="text-white/50 text-xs mb-1">{label}</p>
                  <p className="text-white font-bold text-lg">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: FiTruck, label: 'Book Detailing' },
                { icon: FiCalendar, label: 'Reserve Track' },
                { icon: FiStar, label: 'View Events' },
                { icon: FiUser, label: 'Edit Profile' },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 hover:bg-white/10 hover:border-neon-yellow/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-neon-yellow/10 flex items-center justify-center group-hover:bg-neon-yellow/20 transition-all">
                    <Icon size={18} className="text-neon-yellow" />
                  </div>
                  <span className="text-xs text-white/70 text-center font-medium group-hover:text-white transition-colors">{label}</span>
                </button>
              ))}
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}