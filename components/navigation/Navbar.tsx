'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.8, 1]);
  const navBlur = useTransform(scrollY, [0, 100], [8, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Membership', href: '/membership' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.nav
        style={{ opacity: navOpacity }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            style={{ backdropFilter: `blur(${navBlur}px)` }}
            className="glass-dark rounded-2xl px-6 py-4 border border-white/10"
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-neon-yellow/10 rounded-xl flex items-center justify-center border border-neon-yellow/20">
                    <span className="text-2xl font-bold text-neon-yellow">363</span>
                  </div>
                  <span className="hidden md:block text-xl font-bold">
                    363 Club
                  </span>
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-2">
                {navItems.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-2.5 rounded-xl font-medium transition-all ${
                        pathname === item.href
                          ? 'bg-neon-yellow text-black'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </motion.button>
                  </Link>
                ))}
                
                <Link href="/login">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-2 px-6 py-2.5 border border-neon-yellow text-neon-yellow rounded-xl font-bold hover:bg-neon-yellow hover:text-black transition-all"
                  >
                    Login
                  </motion.button>
                </Link>

                <Link href="/signup">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(202, 255, 51, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-2 px-6 py-2.5 bg-neon-yellow text-black rounded-xl font-bold"
                  >
                    Join Now
                  </motion.button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center text-white"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pt-4 border-t border-white/10"
              >
                {navItems.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <motion.button
                      onClick={() => setIsOpen(false)}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full text-left py-3 px-4 rounded-xl mb-2 transition-all ${
                        pathname === item.href
                          ? 'bg-neon-yellow text-black font-bold'
                          : 'text-white/70 hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </motion.button>
                  </Link>
                ))}

                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <button className="w-full mt-2 py-3 border border-neon-yellow text-neon-yellow rounded-xl font-bold">
                    Login
                  </button>
                </Link>

                <Link href="/signup" onClick={() => setIsOpen(false)}>
                  <button className="w-full mt-3 py-3 bg-neon-yellow text-black rounded-xl font-bold">
                    Join Now
                  </button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}