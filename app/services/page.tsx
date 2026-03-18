// app/services/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Globe2,
  ShoppingCart,
  GraduationCap,
  Smartphone,
  Cpu,
  Shield,
  Search,
  Sparkles,
  Code2,
  Database,
  Cloud,
  Lock,
  Palette,
  BarChart,
  ArrowRight,
  X,
} from 'lucide-react';

interface Service {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  gradient: string;
}

const ServicesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const searchRef = useRef<HTMLInputElement>(null);

  // All services data
  const allServices: Service[] = [
    {
      id: 1,
      icon: Globe2,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks.',
      longDescription: 'We build responsive, high-performance web applications using Next.js, React, and Node.js. Our solutions are scalable, secure, and optimized for search engines.',
      category: 'Development',
      technologies: ['Next.js', 'React', 'Node.js', 'TypeScript'],
      gradient: 'from-[#6366F1] to-[#8B5CF6]',
    },
    {
      id: 2,
      icon: ShoppingCart,
      title: 'POS Systems',
      description: 'Intelligent point of sale solutions for retail.',
      longDescription: 'Complete POS solutions with inventory management, real-time analytics, customer management, and seamless payment integration for retail businesses.',
      category: 'Business',
      technologies: ['React', 'Node.js', 'MongoDB', 'Payment APIs'],
      gradient: 'from-[#8B5CF6] to-[#6366F1]',
    },
    {
      id: 3,
      icon: GraduationCap,
      title: 'LMS Platforms',
      description: 'Comprehensive learning management systems.',
      longDescription: 'Feature-rich LMS platforms with interactive courses, assessments, progress tracking, and certification management for educational institutions.',
      category: 'Education',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'WebRTC'],
      gradient: 'from-[#22C55E] to-[#86EFAC]',
    },
    {
      id: 4,
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications.',
      longDescription: 'We develop iOS and Android apps with exceptional user experiences using React Native and Flutter, ensuring smooth performance on all devices.',
      category: 'Development',
      technologies: ['React Native', 'Flutter', 'Firebase', 'iOS/Android'],
      gradient: 'from-[#F59E0B] to-[#FBBF24]',
    },
    {
      id: 5,
      icon: Cpu,
      title: 'AI Solutions',
      description: 'Cutting-edge AI and machine learning solutions.',
      longDescription: 'Custom AI models for automation, predictive analytics, natural language processing, and computer vision to optimize your business operations.',
      category: 'AI/ML',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI'],
      gradient: 'from-[#EF4444] to-[#F87171]',
    },
    {
      id: 6,
      icon: Shield,
      title: 'IT / Cyber Security',
      description: 'Comprehensive security for your infrastructure.',
      longDescription: 'Security audits, threat monitoring, penetration testing, and protection against cyber threats to keep your digital assets safe.',
      category: 'Security',
      technologies: ['Network Security', 'Encryption', 'SIEM', 'Firewalls'],
      gradient: 'from-[#3B82F6] to-[#60A5FA]',
    },
    {
      id: 7,
      icon: Database,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration.',
      longDescription: 'Cloud architecture design, migration services, and management across AWS, Azure, and Google Cloud platforms.',
      category: 'Infrastructure',
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'],
      gradient: 'from-[#06B6D4] to-[#0891B2]',
    },
    {
      id: 8,
      icon: Code2,
      title: 'DevOps Services',
      description: 'Streamlined development and operations.',
      longDescription: 'CI/CD pipeline setup, infrastructure automation, monitoring, and performance optimization for faster and reliable deployments.',
      category: 'Infrastructure',
      technologies: ['Jenkins', 'GitHub Actions', 'Terraform', 'Ansible'],
      gradient: 'from-[#F97316] to-[#FB923C]',
    },
    {
      id: 9,
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Data-driven insights for better decisions.',
      longDescription: 'Business intelligence dashboards, data visualization, and analytics solutions to help you make informed decisions.',
      category: 'Data',
      technologies: ['Power BI', 'Tableau', 'Python', 'SQL'],
      gradient: 'from-[#EC4899] to-[#F472B6]',
    },
  ];

  // Categories
  const categories = ['All', 'Development', 'Business', 'Education', 'AI/ML', 'Security', 'Infrastructure', 'Data'];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.longDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // Focus search input on mount
  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);

  // Optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 12,
        mass: 0.5,
      },
    },
  };

  // Hero section animations - elements come from different sides
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const headingVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 12,
        mass: 0.6,
      },
    },
  };

  const descriptionVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 12,
        mass: 0.6,
        delay: 0.1,
      },
    },
  };

  const searchVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
        mass: 0.5,
        delay: 0.2,
      },
    },
  };

  const filtersVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
        mass: 0.5,
        delay: 0.3,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="relative">
          <div className="w-12 h-12 border-2 border-[#6366F1] border-t-transparent rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-[#6366F1] animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#020617] pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#1E293B]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 via-transparent to-[#8B5CF6]/5" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#6366F1]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#8B5CF6]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto"
          >
            {/* Badge - Scale animation */}
            <motion.div variants={badgeVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-[#6366F1]" />
              <span className="text-sm font-medium text-[#6366F1]">Our Services</span>
            </motion.div>

            {/* Heading - Comes from left */}
            <motion.h1 
              variants={headingVariants}
              className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#F8FAFC] mb-4"
            >
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </motion.h1>

            {/* Description - Comes from right */}
            <motion.p 
              variants={descriptionVariants}
              className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto"
            >
              Explore our comprehensive range of digital solutions designed to help your business thrive in the modern world.
            </motion.p>

            {/* Search Bar - Comes from bottom */}
            <motion.div 
              variants={searchVariants}
              className="max-w-2xl mx-auto relative"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search services by name, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-[#0F172A] border border-[#1E293B] rounded-xl text-[#F8FAFC] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1]/20 transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#6366F1] transition-colors duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </motion.div>

            {/* Category Filters - Comes from bottom with delay */}
            <motion.div 
              variants={filtersVariants}
              className="flex flex-wrap justify-center gap-2 mt-6"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#6366F1] text-white shadow-lg shadow-[#6366F1]/25'
                      : 'bg-[#0F172A] border border-[#1E293B] text-[#94A3B8] hover:border-[#6366F1] hover:text-[#6366F1]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Results count */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-[#94A3B8] mt-6"
            >
              Showing {filteredServices.length} of {allServices.length} services
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filteredServices.length > 0 ? (
              <motion.div
                key="services"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
              >
                {filteredServices.map((service) => {
                  const Icon = service.icon;
                  
                  return (
                    <motion.div
                      key={service.id}
                      variants={itemVariants}
                      layout
                      whileHover={{ y: -4 }}
                      className="group relative"
                    >
                      {/* Card Border Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-sm`} />
                      
                      {/* Card */}
                      <div className="relative bg-[#0F172A] border border-[#1E293B] rounded-xl p-6 hover:border-[#6366F1]/30 transition-all duration-300 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} p-3 transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-300`}>
                            <Icon className="w-full h-full text-white" />
                          </div>
                          <span className="text-xs px-2 py-1 bg-[#1E293B] text-[#94A3B8] rounded-lg border border-transparent group-hover:border-[#6366F1]/30 transition-colors duration-300">
                            {service.category}
                          </span>
                        </div>

                        {/* Content */}
                        <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-[#6366F1] transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-sm text-[#94A3B8] mb-4 line-clamp-2">
                          {service.longDescription}
                        </p>

                        {/* Technologies */}
                        <div className="mt-auto">
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {service.technologies.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-2 py-1 bg-[#1E293B] text-[#94A3B8] rounded-lg"
                              >
                                {tech}
                              </span>
                            ))}
                            {service.technologies.length > 3 && (
                              <span className="text-xs px-2 py-1 bg-[#1E293B] text-[#94A3B8] rounded-lg">
                                +{service.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Corner Accent */}
                        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                          <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform rotate-12 translate-x-6 -translate-y-6`} />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-[#0F172A] rounded-full flex items-center justify-center border border-[#1E293B]">
                  <Search className="w-8 h-8 text-[#94A3B8]" />
                </div>
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">No services found</h3>
                <p className="text-[#94A3B8] mb-6">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="px-6 py-3 bg-[#6366F1] text-white rounded-xl hover:bg-[#8B5CF6] transition-all duration-300 hover:shadow-lg hover:shadow-[#6366F1]/25"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[#1E293B] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-[#94A3B8] mb-8">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#6366F1]/25 transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;