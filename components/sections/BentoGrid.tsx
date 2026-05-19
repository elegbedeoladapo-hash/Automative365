'use client';

import { motion } from 'framer-motion';
import { BsInstagram, BsFacebook, BsCart, BsStar } from 'react-icons/bs';
import { FiUsers, FiCalendar, FiMapPin, FiTool, FiShield } from 'react-icons/fi';
import { TbSteeringWheel, TbCar } from 'react-icons/tb';
import Link from 'next/link';

export default function BentoGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  } as const;

  return (
    <section className="min-h-screen bg-black py-20 px-4 md:px-8 lg:px-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-[1600px] mx-auto"
      >
        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          
          {/* What is 363? - Large Feature Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01, y: -8 }}
            transition={{ duration: 0.3 }}
            className="col-span-12 lg:col-span-6 glass-dark rounded-3xl p-8 md:p-12 group cursor-pointer relative overflow-hidden h-[400px] md:h-[500px]"
          >
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80"
                alt="Luxury Garage"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                What is 363?
              </h2>
              <p className="text-white/70 text-base md:text-lg max-w-md leading-relaxed mb-8">
                363 is the ultimate destination where passion, precision, and
                community converge. More than storage, it's a sanctuary for
                extraordinary cars and the enthusiasts who drive them.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-neon-yellow/10 rounded-xl flex items-center justify-center border border-neon-yellow/20 group-hover:bg-neon-yellow group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl group-hover:text-black transition-colors">↗</span>
                </div>
                <span className="text-white/60 group-hover:text-neon-yellow transition-colors">
                  Learn More
                </span>
              </div>
            </div>
          </motion.div>

          {/* Social Media + Weather Stack */}
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-4">
            {/* Garage Icon */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(202, 255, 51, 0.1)' }}
              className="glass-dark rounded-3xl h-28 flex items-center justify-center cursor-pointer transition-all group"
            >
              <BsCart size={36} className="text-neon-yellow group-hover:scale-110 transition-transform" />
            </motion.div>

            {/* Instagram */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(202, 255, 51, 0.1)' }}
              className="glass-dark rounded-3xl h-28 flex items-center justify-center cursor-pointer transition-all group border border-white/10"
            >
              <BsInstagram size={36} className="text-neon-yellow group-hover:scale-110 transition-transform" />
            </motion.div>

            {/* Facebook */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(202, 255, 51, 0.1)' }}
              className="glass-dark rounded-3xl h-28 flex items-center justify-center cursor-pointer transition-all group"
            >
              <BsFacebook size={36} className="text-neon-yellow group-hover:scale-110 transition-transform" />
            </motion.div>

            {/* Steering Wheel */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(202, 255, 51, 0.1)' }}
              className="glass-dark rounded-3xl h-28 flex items-center justify-center cursor-pointer transition-all group"
            >
              <TbSteeringWheel size={36} className="text-neon-yellow group-hover:scale-110 transition-transform" />
            </motion.div>
          </div>

          {/* Car of the Month - Tall Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01, y: -8 }}
            className="col-span-12 lg:col-span-3 glass-dark rounded-3xl overflow-hidden group cursor-pointer h-[400px] md:h-[500px] relative"
          >
            <img
              src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80"
              alt="Ferrari 296 GTB"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-3">
                <BsStar className="text-neon-yellow" size={16} />
                <p className="text-xs md:text-sm text-neon-yellow font-medium tracking-wide">
                  CAR OF THE MONTH
                </p>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">296 GTB</h3>
              <p className="text-white/60 text-sm md:text-base">Modified Ferrari</p>
            </div>

            <div className="absolute top-6 right-6">
              <motion.div
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl"
              >
                ⭐
              </motion.div>
            </div>
          </motion.div>

          {/* Social Amenities - Wide Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01, y: -8 }}
            className="col-span-12 md:col-span-6 glass-dark rounded-3xl overflow-hidden group cursor-pointer relative h-[350px]"
          >
            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80"
              alt="Social Amenities"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-10">
              <div className="w-16 h-16 bg-neon-yellow rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FiUsers size={28} className="text-black" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3">Social Amenities</h3>
              <p className="text-white/60 text-sm md:text-base max-w-md mb-4">
                Premium lounge, bar, gaming room, and exclusive member events
              </p>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-neon-yellow transition-all">
                <span className="text-2xl group-hover:text-black">↗</span>
              </div>
            </div>
          </motion.div>

          {/* Vehicle Amenities - Wide Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01, y: -8 }}
            className="col-span-12 md:col-span-6 glass-dark rounded-3xl overflow-hidden group cursor-pointer relative h-[350px]"
          >
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80"
              alt="Vehicle Amenities"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-10">
              <div className="w-16 h-16 bg-neon-yellow rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FiTool size={28} className="text-black" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3">Vehicle Amenities</h3>
              <p className="text-white/60 text-sm md:text-base max-w-md mb-4">
                Climate control, detailing, maintenance, and 24/7 security
              </p>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-neon-yellow transition-all">
                <span className="text-2xl group-hover:text-black">↗</span>
              </div>
            </div>
          </motion.div>

          {/* Security Card - NEW */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01, y: -8 }}
            className="col-span-12 md:col-span-4 glass-dark rounded-3xl p-8 cursor-pointer group relative overflow-hidden h-[280px]"
          >
            <div className="absolute inset-0 opacity-10">
              <img
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&q=80"
                alt="Security"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-neon-yellow/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon-yellow transition-all border border-neon-yellow/20">
                <FiShield size={32} className="text-neon-yellow group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Premium Security</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                24/7 surveillance, biometric access, and insurance coverage
              </p>
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-neon-yellow transition-all mt-auto">
                <span className="text-xl group-hover:text-black">↗</span>
              </div>
            </div>
          </motion.div>

          {/* Bottom Action Cards */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(202, 255, 51, 0.1)' }}
            className="col-span-12 md:col-span-4 glass-dark rounded-3xl p-8 cursor-pointer group h-[280px] flex flex-col"
          >
            <Link href="/membership" className="flex flex-col h-full">
              <div className="w-16 h-16 bg-neon-yellow/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon-yellow transition-all border border-neon-yellow/20">
                <FiUsers size={32} className="text-neon-yellow group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Become a Member</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
                Join an exclusive community of automotive enthusiasts
              </p>
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-neon-yellow transition-all">
                <span className="text-xl group-hover:text-black">↗</span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(202, 255, 51, 0.1)' }}
            className="col-span-12 md:col-span-4 glass-dark rounded-3xl p-8 cursor-pointer group h-[280px] flex flex-col"
          >
            <div className="w-16 h-16 bg-neon-yellow/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon-yellow transition-all border border-neon-yellow/20">
              <FiCalendar size={32} className="text-neon-yellow group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Upcoming Events</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
              Track days, car shows, and exclusive member gatherings
            </p>
            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-neon-yellow transition-all">
              <span className="text-xl group-hover:text-black">↗</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(202, 255, 51, 0.1)' }}
            className="col-span-12 md:col-span-4 glass-dark rounded-3xl p-8 cursor-pointer group h-[280px] flex flex-col"
          >
            <Link href="/contact" className="flex flex-col h-full">
              <div className="w-16 h-16 bg-neon-yellow/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon-yellow transition-all border border-neon-yellow/20">
                <FiMapPin size={32} className="text-neon-yellow group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Rent the Space</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
                Host your private events in our premium facility
              </p>
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-neon-yellow transition-all">
                <span className="text-xl group-hover:text-black">↗</span>
              </div>
            </Link>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}