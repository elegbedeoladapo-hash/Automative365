'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setStatus('sent');
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    setTimeout(() => setStatus('idle'), 3000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'hello@363club.com',
      href: 'mailto:hello@363club.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+1 (555) 363-CLUB',
      href: 'tel:+15553632582',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Greater Sudbury, ON',
      href: '#',
    },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-neon-yellow text-sm tracking-[0.3em] uppercase mb-4">
            CONTACT US
          </p>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Get In <span className="text-neon-yellow">Touch</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Ready to join the club? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8">Let's Connect</h3>
            <p className="text-white/60 mb-12 leading-relaxed">
              Whether you're interested in membership, want to schedule a tour,
              or have questions about our facilities, we're here to help.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 glass-dark p-6 rounded-2xl group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-neon-yellow/10 rounded-xl flex items-center justify-center group-hover:bg-neon-yellow transition-all">
                    <info.icon size={24} className="text-neon-yellow group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">{info.label}</p>
                    <p className="font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 glass-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-yellow bg-transparent text-white placeholder-white/40"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 glass-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-yellow bg-transparent text-white placeholder-white/40"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white/80">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-6 py-4 glass-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-yellow bg-transparent text-white placeholder-white/40"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 glass-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-yellow bg-transparent text-white placeholder-white/40 resize-none"
                  placeholder="Tell us about your automotive passion..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  status === 'sent'
                    ? 'bg-green-500 text-white'
                    : 'bg-neon-yellow text-black hover:bg-yellow-300'
                }`}
              >
                {status === 'idle' && (
                  <>
                    Send Message <FiSend />
                  </>
                )}
                {status === 'sending' && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    ⏳
                  </motion.div>
                )}
                {status === 'sent' && '✓ Message Sent!'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
