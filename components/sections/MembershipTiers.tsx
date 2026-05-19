'use client';

import { motion } from 'framer-motion';
import { BsCheck2 } from 'react-icons/bs';

export default function MembershipTiers() {
  const tiers = [
    {
      name: 'Executive',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for the passionate enthusiast',
      features: [
        'Climate-controlled storage',
        'Monthly detailing service',
        'Access to social amenities',
        '24/7 vehicle access',
        'Premium lounge access',
        'Member events access',
      ],
      popular: false,
      gradient: 'from-gray-600 to-gray-800',
    },
    {
      name: 'Premium',
      price: '$5,000',
      period: '/month',
      description: 'For the discerning collector',
      features: [
        'Everything in Executive',
        'Priority vehicle detailing',
        'Concierge service',
        'Private event space access',
        'Track day reservations',
        'Valet parking service',
        'Complimentary car wash',
        'Photography services',
      ],
      popular: true,
      gradient: 'from-neon-yellow to-yellow-600',
    },
    {
      name: 'Elite',
      price: '$10,000',
      period: '/month',
      description: 'The ultimate automotive lifestyle',
      features: [
        'Everything in Premium',
        'Dedicated bay assignment',
        'Personal vehicle curator',
        'Unlimited detailing',
        'Private lounge area',
        'Transportation services',
        'Insurance consultation',
        'Global access network',
        'VIP event invitations',
        'Personal concierge 24/7',
      ],
      popular: false,
      gradient: 'from-purple-600 to-pink-600',
    },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-neon-yellow text-sm tracking-[0.3em] uppercase mb-4">
            MEMBERSHIP
          </p>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Choose Your <span className="text-neon-yellow">Tier</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Join an exclusive community where automotive passion meets luxury lifestyle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative glass-dark rounded-3xl p-8 ${
                tier.popular ? 'ring-2 ring-neon-yellow' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-yellow text-black px-6 py-1.5 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-2">{tier.name}</h3>
                <p className="text-white/60 text-sm mb-6">{tier.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">{tier.price}</span>
                  <span className="text-white/60">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-neon-yellow/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <BsCheck2 className="text-neon-yellow" size={16} />
                    </div>
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  tier.popular
                    ? 'bg-neon-yellow text-black hover:bg-yellow-300'
                    : 'glass-effect hover:bg-white/10'
                }`}
              >
                Select {tier.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}