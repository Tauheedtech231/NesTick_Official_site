// components/Hero.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Code2, Cpu, Globe, Shield, Zap } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Dynamically import NetworkSphere with no SSR
const NetworkSphere = dynamic(() => import('./NetworkSphere'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[200px] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#6366F1] border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const Hero = () => {
  const [currentTech, setCurrentTech] = useState(0);
  
  // Tech stack array for animation
  const techStacks = [
    { name: 'React', icon: Code2, color: '#6366F1' },
    { name: 'Node.js', icon: Globe, color: '#22C55E' },
    { name: 'Python', icon: Cpu, color: '#8B5CF6' },
    { name: 'Next.js', icon: Zap, color: '#F59E0B' },
    { name: 'TypeScript', icon: Shield, color: '#3B82F6' },
  ];

  // Auto-cycle through tech stacks
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStacks.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [techStacks.length]);

  // Container variants - optimized
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  // Text variants - optimized
  const textVariants = {
    hidden: { 
      y: 15, 
      opacity: 0
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        mass: 0.6,
        duration: 0.5
      }
    }
  };

  // Badge variants
  const badgeVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        duration: 0.4
      }
    }
  };

  // Button variants - clear and optimized
  const buttonVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 12,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const CurrentIcon = techStacks[currentTech].icon;

  return (
    <section className="relative min-h-screen bg-[#020617] overflow-hidden pt-12 sm:pt-16 lg:pt-24">
      {/* Background orbs - reduced opacity */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 lg:w-64 h-48 lg:h-64 bg-[#6366F1]/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-56 lg:w-80 h-56 lg:h-80 bg-[#8B5CF6]/10 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Grid overlay - reduced opacity */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[calc(100vh-120px)] lg:min-h-[calc(100vh-140px)]">
          
          {/* Left side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0 w-full space-y-4 sm:space-y-6 pt-4 sm:pt-6 lg:pt-0 z-10 order-1"
          >
            {/* 🔥 Background Glow Effect */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-72 h-72 bg-[#6366F1]/20 blur-3xl rounded-full -z-10" />

            {/* Badge */}
            <motion.div variants={badgeVariants}>
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-full backdrop-blur-md">
                <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#6366F1]" />
                <span className="text-xs sm:text-sm font-medium text-[#6366F1] tracking-wide">
                  Welcome to Nestick Tech
                </span>
              </span>
            </motion.div>

            {/* 🔥 Heading (Improved Typography) */}
            <motion.div variants={textVariants} className="w-full">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] leading-[1.1] tracking-tight">
                Building{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                    Scalable Digital
                  </span>

                  {/* Gradient underline effect */}
                  <span className="absolute left-0 bottom-1 w-full h-2 bg-gradient-to-r from-[#6366F1]/40 to-[#8B5CF6]/40 blur-sm rounded-full"></span>
                </span>
                <br />
                Solutions
              </h1>
            </motion.div>

            {/* 🔥 Tech Stack */}
            <motion.div
              variants={textVariants}
              className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start"
            >
              <span className="text-sm sm:text-base lg:text-lg text-[#94A3B8]">Powered by</span>

              <div className="relative h-8 sm:h-10 lg:h-12 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTech}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-1.5 sm:gap-2"
                  >
                    <div
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br p-1.5 sm:p-2 shadow-md"
                      style={{
                        background: `linear-gradient(135deg, ${techStacks[currentTech].color}, ${techStacks[currentTech].color}80)`
                      }}
                    >
                      <CurrentIcon className="w-full h-full text-white" />
                    </div>

                    <span
                      className="text-base sm:text-lg lg:text-xl font-semibold"
                      style={{ color: techStacks[currentTech].color }}
                    >
                      {techStacks[currentTech].name}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* 🔥 Description */}
            <motion.p
              variants={textVariants}
              className="text-sm sm:text-base lg:text-lg text-[#94A3B8] max-w-xl leading-relaxed px-2 sm:px-0"
            >
              We design and develop high-performance web apps, AI-powered systems,
              and scalable digital solutions that accelerate your business growth.
            </motion.p>

            {/* 🔥 CTA Buttons */}
            <motion.div
              variants={containerVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md px-2 sm:px-0"
            >
              {/* Primary */}
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="flex-1">
                <Link
                  href="/get-started"
                  className="group relative block w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold rounded-xl overflow-hidden shadow-lg transition-all duration-300 text-center text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:translate-x-1 transition" />
                  </span>

                  {/* Glow hover effect */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></div>
                </Link>
              </motion.div>

              {/* Secondary */}
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="flex-1">
                <Link
                  href="/portfolio"
                  className="group block w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-[#0F172A]/80 backdrop-blur-md border border-[#1E293B] text-white font-semibold rounded-xl hover:border-[#6366F1] hover:bg-[#6366F1]/10 transition-all duration-300 text-center text-sm sm:text-base"
                >
                  View Portfolio
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Network Sphere - Visible on all devices, properly positioned */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.25, 
              duration: 0.6,
              ease: "easeOut"
            }}
            className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[420px] mt-4 sm:mt-6 lg:mt-0 order-2 lg:order-2 z-0"
          >
            {/* Gradient overlay to blend with background - prevents visual clutter */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent pointer-events-none z-10 lg:hidden" />
            
            {/* Decorative elements - smaller on mobile */}
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-[#6366F1]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-[#8B5CF6]/10 rounded-full blur-2xl" />
            
            {/* Network Sphere - slightly smaller on mobile to not overpower content */}
            <div className="w-full h-full scale-90 sm:scale-95 lg:scale-100">
              <NetworkSphere />
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#6366F1]/5 to-[#8B5CF6]/5 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient - REDUCED HEIGHT to minimize gap */}
      <div className="absolute bottom-0 left-0 w-full h-8 sm:h-10 lg:h-12 bg-gradient-to-t from-[#020617] to-transparent" />
    </section>
  );
};

export default Hero;