// components/Footer.tsx
'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  Facebook,
  Youtube,
  ArrowRight,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Reduced quick links - only main pages
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Tech Stack', href: '/tech-stack' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Reduced services - only core services
  const services = [
    { name: 'Web Development', href: '/services' },
    { name: 'Mobile Apps', href: '/services' },
    { name: 'AI Solutions', href: '/services' },
    { name: 'Cyber Security', href: '/services' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/nesticktech', color: 'hover:text-[#6366F1]' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/nesticktech', color: 'hover:text-[#0A66C2]' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/nesticktech', color: 'hover:text-[#1DA1F2]' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/nesticktech', color: 'hover:text-[#E4405F]' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'nesticktech@gmail.com', href: 'mailto:nesticktech@gmail.com' },
    { icon: Phone, text: '+92 (300) 123-4567', href: 'tel:+923001234567' },
    { icon: MapPin, text: 'Johar Town, Lahore', href: 'https://maps.google.com' },
  ];

  // Animation variants
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants:Variants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 8,
        mass: 0.4,
      },
    },
  };

  return (
    <footer className="relative bg-[#020617] border-t border-[#1E293B] overflow-hidden">
      {/* Background decorative elements - more subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#6366F1]/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#8B5CF6]/5 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-6">
        {/* Main Footer Content - Reduced height */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8"
        >
          {/* Company Info - Logo and Description */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <Link href="/" className="inline-block group mb-3">
              <span className="text-xl lg:text-2xl font-bold text-white">
                Nestick Tech
              </span>
            </Link>
            
            <p className="text-[#94A3B8] text-xs leading-relaxed mb-4 max-w-sm">
              Building scalable digital solutions for modern businesses. We help startups and enterprises transform their ideas into powerful applications.
            </p>

            {/* Contact Info - Compact */}
            <div className="space-y-2">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center gap-2 text-[#94A3B8] hover:text-[#6366F1] transition-colors duration-200 group"
                  >
                    <Icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    <span className="text-xs">{item.text}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links - Compact */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-[#F8FAFC] font-semibold text-base mb-3">Quick Links</h3>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#94A3B8] hover:text-[#6366F1] text-xs transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-2.5 h-2.5 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services - Compact */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="text-[#F8FAFC] font-semibold text-base mb-3">Our Services</h3>
            <ul className="space-y-1.5">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-[#94A3B8] hover:text-[#6366F1] text-xs transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-2.5 h-2.5 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Only - Removed Newsletter */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="text-[#F8FAFC] font-semibold text-base mb-3">Connect With Us</h3>
            
            {/* Social Links - Compact */}
            <div>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 rounded-lg bg-[#0F172A] border border-[#1E293B] flex items-center justify-center text-[#94A3B8] ${social.color} hover:border-[#6366F1] transition-all duration-200 group`}
                      aria-label={social.name}
                    >
                      <Icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    </Link>
                  );
                })}
              </div>
              
              {/* Simple social handles */}
              <div className="mt-3 space-y-1">
                <p className="text-xs text-[#94A3B8]">@nesticktech on all platforms</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="mt-8 lg:mt-10 pt-4 border-t border-[#1E293B]"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            {/* Copyright */}
            <p className="text-[#94A3B8] text-xs text-center md:text-left">
              © {currentYear} Nestick Tech. All rights reserved.
            </p>

            {/* Made with love */}
            <p className="text-[#94A3B8] text-xs flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-[#EF4444] fill-[#EF4444] animate-pulse" /> in Lahore
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-3">
              <Link href="/privacy" className="text-[#94A3B8] hover:text-[#6366F1] text-xs transition-colors duration-200">
                Privacy
              </Link>
              <span className="text-[#1E293B]">•</span>
              <Link href="/terms" className="text-[#94A3B8] hover:text-[#6366F1] text-xs transition-colors duration-200">
                Terms
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;