'use client';

import { motion } from 'framer-motion';
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import Link from 'next/link';

export default function Footer() {
  const links = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Membership', href: '/membership' },
      { name: 'Events', href: '#' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Vehicle Storage', href: '#' },
      { name: 'Detailing', href: '#' },
      { name: 'Concierge', href: '#' },
      { name: 'Track Days', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  const socials = [
    { icon: BsInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: BsFacebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: BsTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:hello@363club.com', label: 'Email' },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-16 h-16 bg-neon-yellow/10 rounded-xl flex items-center justify-center mb-6 border border-neon-yellow/20"
            >
              <span className="text-3xl font-bold text-neon-yellow">363</span>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">363 Car & Social Club</h3>
            <p className="text-white/60 leading-relaxed mb-6">
              Where passion takes the wheel. The ultimate destination for automotive enthusiasts.
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(202, 255, 51, 0.1)' }}
                  className="w-12 h-12 glass-dark rounded-xl flex items-center justify-center transition-all"
                >
                  <social.icon size={20} className="text-neon-yellow" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-neon-yellow transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-neon-yellow transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-neon-yellow transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} 363 Car & Social Club. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Crafted with ❤️ for automotive enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
}
