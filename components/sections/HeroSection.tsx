'use client';

import { motion } from 'framer-motion';
import { BsCloudRain } from 'react-icons/bs';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source
            src="/videos/hero.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/90" />
      </div>

      {/* Weather Widget - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-28 right-8 glass-dark rounded-2xl px-6 py-4 z-10 hidden md:block"
      >
        <p className="text-sm text-white/60 mb-1">Greater Sudbury, ON</p>
        <div className="flex items-center gap-3">
          <span className="text-xl font-light">Light</span>
          <span className="text-3xl font-bold">18°C</span>
          <BsCloudRain size={24} className="text-blue-400" />
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-neon-yellow text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-medium"
          >
            363 CAR AND SOCIAL CLUB
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
          >
            Where passion takes
            <br />
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              the wheel
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-base md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Secure storage, on-demand car care and exclusive member amenities.
            <br className="hidden md:block" />
            363 puts your automotive lifestyle in the driver's seat.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(202, 255, 51, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-10 py-4 bg-neon-yellow text-black rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all z-20 relative"
          >
            Explore Membership
          </motion.button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-neon-yellow rounded-full" />
        </motion.div>
        <p className="text-white/40 text-xs mt-3 tracking-wider">SCROLL</p>
      </motion.div>
    </section>
  );
}