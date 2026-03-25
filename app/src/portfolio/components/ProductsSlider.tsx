// components/PartnersSlider.tsx
'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface Partner {
  id: number;
  name: string;
  logo?: string;
}

const PartnersSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const partners: Partner[] = [
    { id: 1, name: "Pixsy Studio" },
    { id: 2, name: "Skeler Security" },
    { id: 3, name: "Digitally Develop" },
    { id: 4, name: "UMT" },
  ];

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

  // Floating particles positions
  const particles = [
    { top: '10%', left: '5%', delay: 0, size: 'w-1 h-1' },
    { top: '20%', left: '90%', delay: 1, size: 'w-1.5 h-1.5' },
    { top: '35%', left: '15%', delay: 2, size: 'w-0.5 h-0.5' },
    { top: '50%', left: '85%', delay: 0.5, size: 'w-1 h-1' },
    { top: '65%', left: '25%', delay: 1.5, size: 'w-1.5 h-1.5' },
    { top: '80%', left: '75%', delay: 2.5, size: 'w-0.5 h-0.5' },
    { top: '15%', left: '45%', delay: 3, size: 'w-1 h-1' },
    { top: '45%', left: '95%', delay: 0.8, size: 'w-1.5 h-1.5' },
    { top: '70%', left: '8%', delay: 1.8, size: 'w-0.5 h-0.5' },
    { top: '85%', left: '55%', delay: 2.2, size: 'w-1 h-1' },
    { top: '5%', left: '70%', delay: 1.2, size: 'w-1.5 h-1.5' },
    { top: '55%', left: '40%', delay: 2.8, size: 'w-0.5 h-0.5' },
  ];

  // Animation variants
  const fromRightVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const fromBottomVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative py-12 sm:py-12 lg:py-12  bg-gradient-to-b from-[#0A0F1E] to-[#020617] overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(99,102,241,0.03)_25%,rgba(99,102,241,0.03)_50%,transparent_50%,transparent_75%,rgba(99,102,241,0.03)_75%)] bg-[size:40px_40px] animate-[shift_20s_linear_infinite]" />
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#6366F1]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#06B6D4]/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className={`absolute ${particle.size} bg-[#6366F1]/30 rounded-full`}
            style={{
              top: particle.top,
              left: particle.left,
              animation: `float ${3 + (i % 4)}s infinite ease-in-out`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-8 md:mb-12"
        >
          {/* Badge - animates from left */}
          <motion.div 
            variants={badgeVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse" />
            <span className="text-xs md:text-sm font-mono text-[#6366F1] tracking-wider">TRUSTED PARTNERS</span>
          </motion.div>
          
          {/* Heading - animates from right */}
          <motion.h2 
            variants={fromRightVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-[#E2E8F0] to-[#94A3B8] bg-clip-text text-transparent"
          >
            Collaborations That Drive Innovation
          </motion.h2>
        </motion.div>

        {/* Marquee Container - animates from bottom */}
        <motion.div 
          variants={fromBottomVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={sliderRef}
            className="flex gap-12 md:gap-16 lg:gap-20 items-center"
            style={{
              animation: `scroll ${isHovered ? 'paused' : '25s'} linear infinite`,
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center transition-all duration-300">
                  {/* Logo Placeholder with Icon */}
                  <div className="relative mb-2 md:mb-3">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6366F1]/20 to-[#8B5CF6]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                    <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] flex items-center justify-center border border-[#334155] group-hover:border-[#6366F1]/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#6366F1]/20">
                      <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                        {partner.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Partner Name */}
                  <span className="text-xs sm:text-sm md:text-base font-semibold text-[#E2E8F0] group-hover:text-[#6366F1] transition-colors duration-300 text-center whitespace-nowrap">
                    {partner.name}
                  </span>
                  
                  {/* Subtle underline effect */}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] group-hover:w-full transition-all duration-300 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-l from-[#020617] via-[#020617]/80 to-transparent pointer-events-none" />
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          25% {
            opacity: 0.3;
          }
          50% {
            transform: translateY(-12px) translateX(6px);
            opacity: 0.5;
          }
          75% {
            opacity: 0.3;
          }
        }
        
        @keyframes shift {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 80px 80px;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </section>
  );
};

export default PartnersSlider;