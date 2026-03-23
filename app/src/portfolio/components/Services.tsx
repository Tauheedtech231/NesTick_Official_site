'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Service {
  id: number;
  icon: string; // Simple emoji icon
  title: string;
  description: string;
  color: string;
  gradient: string;
}

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.2,
    margin: "-50px 0px"
  });

  const services: Service[] = [
    {
      id: 1,
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like Next.js, React, and Node.js for scalable performance.',
      color: '#6366F1',
      gradient: 'from-[#6366F1] to-[#8B5CF6]',
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications for Android and iOS with exceptional user experiences.',
      color: '#8B5CF6',
      gradient: 'from-[#8B5CF6] to-[#6366F1]',
    },
    {
      id: 3,
      icon: '🍎',
      title: 'iOS Development',
      description: 'Native iOS applications built with Swift and SwiftUI for premium Apple ecosystem experiences.',
      color: '#22C55E',
      gradient: 'from-[#22C55E] to-[#86EFAC]',
    },
    {
      id: 4,
      icon: '💼',
      title: 'Enterprise Software (CRM/ERP)',
      description: 'Custom CRM and ERP solutions to streamline business operations, manage clients, and optimize workflows.',
      color: '#F59E0B',
      gradient: 'from-[#F59E0B] to-[#FBBF24]',
    },
    {
      id: 5,
      icon: '🎨',
      title: 'UI/UX Design & Prototyping',
      description: 'User-centered design solutions with interactive prototypes for seamless digital experiences.',
      color: '#EF4444',
      gradient: 'from-[#EF4444] to-[#F87171]',
    },
    {
      id: 6,
      icon: '⚙️',
      title: 'API Integration & Backend',
      description: 'Robust backend systems and API integrations for scalable, secure, and high-performance applications.',
      color: '#3B82F6',
      gradient: 'from-[#3B82F6] to-[#60A5FA]',
    },
  ];

  // Container variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  // Item variants
  const itemVariants: Variants = {
    hidden: { 
      y: 15, 
      opacity: 0,
      scale: 0.98
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 12,
        mass: 0.5,
        duration: 0.5
      },
    },
  };

  // Header variants
  const headerVariants: Variants = {
    hidden: { 
      x: -15, 
      opacity: 0 
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 40,
        damping: 10,
        mass: 0.6,
        duration: 0.6
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-24 bg-[#020617] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#6366F1]/5 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#8B5CF6]/5 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl mb-8 sm:mb-10 lg:mb-16 text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-full mb-3 sm:mb-4">
            <span className="text-[#6366F1]">✨</span>
            <span className="text-xs sm:text-sm font-medium text-[#6366F1]">Our Services</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4 leading-tight">
            Comprehensive Digital{' '}
            <span className="text-white">
              Solutions
            </span>
          </h2>
          
          {/* Description - Updated Subheading */}
          <p className="text-sm sm:text-base lg:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            Complete solutions tailored for your business needs
          </p>
          
          {/* Decorative line */}
          <div className="mt-3 sm:mt-5">
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full" />
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 auto-rows-fr"
        >
          {services.map((service) => {
            return (
              <Link href="/services" key={service.id} className="block h-full">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    y: -4,
                    transition: { type: 'spring', stiffness: 200, damping: 15 }
                  }}
                  className="group relative cursor-pointer h-full"
                >
                  {/* Border glow effect */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm"
                    style={{ 
                      background: `linear-gradient(to right, ${service.color}, ${service.color}80)`
                    }}
                  />
                  
                  {/* Main Card */}
                  <div className="relative bg-[#0F172A] border border-[#1E293B] rounded-xl p-4 sm:p-5 lg:p-6 hover:border-[#6366F1]/20 transition-all duration-300 h-full flex flex-col">
                    
                    {/* Icon Container - Using emoji */}
                    <div className="relative mb-3 sm:mb-4 flex-shrink-0">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-300`}>
                        <span className="text-xl sm:text-2xl lg:text-3xl">
                          {service.icon}
                        </span>
                      </div>
                      
                      {/* Glow effect behind icon */}
                      <div 
                        className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"
                        style={{ background: `linear-gradient(to right, ${service.color}, ${service.color}40)` }}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-[#6366F1] transition-colors duration-300 flex-shrink-0">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed line-clamp-3 flex-grow">
                      {service.description}
                    </p>

                    {/* Arrow indicator on hover */}
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1 flex-shrink-0">
                      <ArrowRight className="w-4 h-4 text-[#6366F1]" />
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                      <div 
                        className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform rotate-12 translate-x-6 -translate-y-6"
                        style={{ 
                          background: `linear-gradient(to bottom right, ${service.color}, ${service.color}80)`
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>

        {/* CTA for more services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              View All Services
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;