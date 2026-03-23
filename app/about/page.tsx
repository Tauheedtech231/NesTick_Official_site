// app/about/page.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  Sparkles,
  ArrowRight,
  Briefcase,
  Code,
  Palette,
  Megaphone,
  Crown,
  Mail,
  Phone,
  MapPin,
  MessageSquare
} from 'lucide-react';
import TechStackPage from '../tech-stack/page';

const AboutPage = () => {
  // Company stats
  const stats = [
    { label: 'Projects Completed', value: '50+', icon: Award },
    { label: 'Happy Clients', value: '30+', icon: Users },
    { label: 'Years Experience', value: '5+', icon: Target },
    { label: 'Team Members', value: '6+', icon: Heart },
  ];

  // Team members data with hierarchy
  const teamMembers = [
    {
      id: 1,
      name: 'Hamza Hassan',
      role: 'Chief Executive Officer',
      level: 'executive',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop',
      icon: Crown,
      color: 'from-[#6366F1] to-[#8B5CF6]',
    },
    {
      id: 2,
      name: 'Abdullah Amin',
      role: 'Senior Business Analyst',
      level: 'management',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
      icon: Briefcase,
      color: 'from-[#22C55E] to-[#86EFAC]',
    },
    {
      id: 3,
      name: 'Haris Ashar',
      role: 'Business Developer',
      level: 'management',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
      icon: Briefcase,
      color: 'from-[#F59E0B] to-[#FBBF24]',
    },
    {
      id: 4,
      name: 'Tauheed',
      role: 'Web Developer',
      level: 'technical',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop',
      icon: Code,
      color: 'from-[#EF4444] to-[#F87171]',
    },
    {
      id: 5,
      name: 'Miss Maryam',
      role: 'Creative Lead',
      level: 'creative',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop',
      icon: Palette,
      color: 'from-[#EC4899] to-[#F472B6]',
    },
    {
      id: 6,
      name: 'Miss Palwasha',
      role: 'Marketing Lead',
      level: 'marketing',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
      icon: Megaphone,
      color: 'from-[#06B6D4] to-[#0891B2]',
    },
  ];

  // Contact info
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Us',
      value: 'nesticktech@gmail.com',
      href: 'mailto:nesticktech@gmail.com',
      color: 'from-[#6366F1] to-[#8B5CF6]',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '+92 (300) 123-4567',
      href: 'tel:+923001234567',
      color: 'from-[#22C55E] to-[#86EFAC]',
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Johar Town, Lahore',
      href: 'https://maps.google.com/?q=Johar+Town+Lahore',
      color: 'from-[#F59E0B] to-[#FBBF24]',
    },
    {
      icon: MessageSquare,
      label: 'Live Chat',
      value: 'Mon-Fri: 9AM - 6PM',
      href: '/contact',
      color: 'from-[#EF4444] to-[#F87171]',
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants:Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
        mass: 0.5,
      },
    },
  };

  const lineVariants:Variants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const horizontalLineVariants:Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#020617] pt-20 lg:pt-24 overflow-hidden relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          alt="Team Collaboration"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/95 to-[#020617]" />
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-[url('/grid-pattern.svg')] opacity-5 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-[#0F172A]/80 backdrop-blur-sm border border-[#1E293B]">
            <Users className="w-4 h-4 text-[#6366F1]" />
            <span className="text-xs lg:text-sm font-medium bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              About Us
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-4xl lg:text-4xl xl:text-7xl font-bold text-[#F8FAFC] mb-4">
            Who We{' '}
            <span className="text-white">
              Are
            </span>
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-[#94A3B8] max-w-2xl mx-auto">
            We&apos;re a passionate team of developers, designers, and strategists dedicated to building innovative digital solutions that help businesses thrive.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 lg:mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#0F172A]/80 backdrop-blur-sm border border-[#1E293B] rounded-xl p-5 text-center group hover:border-[#6366F1] transition-all duration-300"
              >
                <Icon className="w-6 h-6 text-[#6366F1] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-xl lg:text-2xl font-bold text-[#F8FAFC]">{stat.value}</div>
                <div className="text-xs text-[#94A3B8]">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Our Story Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#F8FAFC]">
              Our{' '}
              <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                Story
              </span>
            </h2>
            <p className="text-sm lg:text-base text-[#94A3B8] leading-relaxed">
              Founded in 2020, Nestick Tech started with a simple mission: to help businesses leverage technology for growth and innovation. What began as a small team of passionate developers has grown into a full-service digital agency serving clients worldwide.
            </p>
            <p className="text-sm lg:text-base text-[#94A3B8] leading-relaxed">
              Today, we&apos;re proud to have delivered 50+ successful projects across various industries, from e-commerce and education to healthcare and finance.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#F8FAFC]">
              Our{' '}
              <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <p className="text-sm lg:text-base text-[#94A3B8] leading-relaxed">
              To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We believe in building long-term partnerships with our clients, understanding their unique challenges, and delivering solutions that exceed expectations.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#6366F1]/25 transition-all duration-300 group"
              >
                Work With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
        <TechStackPage/>

        {/* Team Hierarchy - Complete Tree Structure */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-[#F8FAFC] text-center mb-12">
            Our{' '}
            <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Team Structure
            </span>
          </h2>

          {/* Tree Container */}
          <div className="relative flex flex-col items-center">
            {/* Level 1: CEO */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative z-10 mb-16"
            >
              <div className="relative">
                {/* Vertical line down from CEO */}
                <motion.div 
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className="absolute -bottom-12 left-1/2 w-0.5 h-12 bg-gradient-to-b from-[#6366F1] to-transparent"
                  style={{ transformOrigin: 'top' }}
                />
                
                <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] p-[2px] rounded-xl">
                  <div className="bg-[#0F172A] rounded-xl p-5 w-72">
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#6366F1]">
                        <Image
                          src={teamMembers[0].image}
                          alt={teamMembers[0].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-base font-bold text-[#F8FAFC]">{teamMembers[0].name}</p>
                        <p className="text-xs text-[#6366F1]">{teamMembers[0].role}</p>
                      </div>
                      <Crown className="w-5 h-5 text-[#6366F1]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Horizontal line connector for management level */}
            <div className="relative w-full max-w-2xl h-0.5 mb-16">
              <motion.div 
                variants={horizontalLineVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
                className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#6366F1] to-transparent"
                style={{ transformOrigin: 'left' }}
              />
              
              {/* Vertical lines down to management */}
              <motion.div 
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.7 }}
                className="absolute -bottom-8 left-1/4 w-0.5 h-8 bg-gradient-to-b from-[#6366F1] to-transparent"
                style={{ transformOrigin: 'top' }}
              />
              <motion.div 
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.7 }}
                className="absolute -bottom-8 right-1/4 w-0.5 h-8 bg-gradient-to-b from-[#6366F1] to-transparent"
                style={{ transformOrigin: 'top' }}
              />
            </div>

            {/* Level 2: Management */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 w-full max-w-2xl">
              {teamMembers.slice(1, 3).map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  <div className="relative">
                    {/* Horizontal line connectors from management to next level */}
                    <motion.div 
                      variants={horizontalLineVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 1.3 }}
                      className="absolute -bottom-12 left-1/2 w-32 h-0.5 bg-gradient-to-r from-[#22C55E] to-transparent"
                      style={{ 
                        transformOrigin: 'left',
                        display: index === 0 ? 'block' : 'none'
                      }}
                    />
                    <motion.div 
                      variants={horizontalLineVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 1.3 }}
                      className="absolute -bottom-12 right-1/2 w-32 h-0.5 bg-gradient-to-l from-[#F59E0B] to-transparent"
                      style={{ 
                        transformOrigin: 'right',
                        display: index === 1 ? 'block' : 'none'
                      }}
                    />
                    
                    {/* Vertical lines down to next level */}
                    <motion.div 
                      variants={lineVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 1.4 }}
                      className="absolute -bottom-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-[#22C55E] to-transparent"
                      style={{ 
                        transformOrigin: 'top',
                        display: index === 0 ? 'block' : 'none'
                      }}
                    />
                    <motion.div 
                      variants={lineVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 1.4 }}
                      className="absolute -bottom-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-[#F59E0B] to-transparent"
                      style={{ 
                        transformOrigin: 'top',
                        display: index === 1 ? 'block' : 'none'
                      }}
                    />
                    
                    <div className={`bg-gradient-to-r ${member.color} p-[2px] rounded-xl`}>
                      <div className="bg-[#0F172A] rounded-xl p-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#22C55E]" style={{ borderColor: index === 0 ? '#22C55E' : '#F59E0B' }}>
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#F8FAFC]">{member.name}</p>
                            <p className="text-xs" style={{ color: index === 0 ? '#22C55E' : '#F59E0B' }}>{member.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Level 3 Connectors - Horizontal line between management and technical */}
            <div className="relative w-full max-w-4xl h-0.5 mb-16">
              <motion.div 
                variants={horizontalLineVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.5 }}
                className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#22C55E] via-[#F59E0B] to-[#EF4444]"
                style={{ transformOrigin: 'left' }}
              />
              
              {/* Vertical lines down to technical team */}
              {[0, 1, 2].map((i) => (
                <motion.div 
                  key={i}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.6 + i * 0.1 }}
                  className="absolute -bottom-8 w-0.5 h-8 bg-gradient-to-b"
                  style={{ 
                    left: `${25 + i * 25}%`,
                    background: i === 0 ? 'linear-gradient(to bottom, #EF4444, transparent)' : 
                                i === 1 ? 'linear-gradient(to bottom, #EC4899, transparent)' : 
                                'linear-gradient(to bottom, #06B6D4, transparent)',
                    transformOrigin: 'top'
                  }}
                />
              ))}
            </div>

            {/* Level 3: Technical & Creative */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
              {teamMembers.slice(3, 6).map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  <div className={`bg-gradient-to-r ${member.color} p-[2px] rounded-xl`}>
                    <div className="bg-[#0F172A] rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2" style={{ borderColor: member.color.split(' ')[1] }}>
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#F8FAFC]">{member.name}</p>
                          <p className="text-xs" style={{ color: member.color.split(' ')[1] }}>{member.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Us Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.0 }}
          className="mt-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-[#F8FAFC] text-center mb-8">
            Get In{' '}
            <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 2.1 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm`} />
                  <Link
                    href={info.href}
                    className="relative block bg-[#0F172A]/80 backdrop-blur-sm border border-[#1E293B] rounded-xl p-5 hover:border-[#6366F1]/30 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${info.color} p-2.5 mb-3`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xs font-medium text-[#94A3B8] mb-1">{info.label}</h3>
                    <p className="text-xs lg:text-sm text-[#F8FAFC] font-medium">{info.value}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4 }}
            className="text-center mt-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#6366F1]/25 transition-all duration-300 group"
            >
              <MessageSquare className="w-4 h-4" />
              Send us a Message
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default AboutPage;