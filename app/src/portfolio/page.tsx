// app/portfolio/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ExternalLink, 
  Github, 
  Search, 
  Filter, 
  ArrowLeft,
  X,
  Sparkles,
  Code2,
  Globe,
  Smartphone,
  Shield,
  Cpu,
  BookOpen,
  ShoppingCart,
  ArrowRight
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
  icon: React.ElementType;
}

const PortfolioPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // All projects data with high-quality images
  const allProjects: Project[] = [
    {
      id: 1,
      title: 'POS System',
      description: 'Smart point-of-sale system for business management',
      longDescription: 'Complete POS solution with inventory tracking, sales analytics, employee management, and multi-store support. Includes real-time reporting and customer loyalty programs.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'Redux'],
      category: 'Business',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-[#6366F1] to-[#8B5CF6]',
      icon: ShoppingCart,
    },
    {
      id: 2,
      title: 'LMS Platform',
      description: 'Learning management system for educational institutes',
      longDescription: 'Comprehensive platform with course creation, student progress tracking, quizzes, certification management, and video conferencing integration.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind'],
      category: 'Education',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-[#8B5CF6] to-[#6366F1]',
      icon: BookOpen,
    },
    {
      id: 3,
      title: 'AI Chatbot',
      description: 'AI-powered chatbot for automation',
      longDescription: 'Intelligent chatbot with natural language processing, sentiment analysis, multi-language support, and seamless integration with websites, Slack, and WhatsApp.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2106&auto=format&fit=crop',
      tags: ['Python', 'TensorFlow', 'OpenAI', 'FastAPI', 'React'],
      category: 'AI/ML',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-[#22C55E] to-[#86EFAC]',
      icon: Cpu,
    },
    {
      id: 4,
      title: 'Inventory System',
      description: 'Advanced inventory and stock management',
      longDescription: 'Real-time inventory tracking, automated reordering, supplier management, barcode scanning, and detailed reporting dashboard with predictive analytics.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
      tags: ['React', 'Node.js', 'MySQL', 'Redis', 'Docker'],
      category: 'Business',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-[#F59E0B] to-[#FBBF24]',
      icon: ShoppingCart,
    },
    {
      id: 5,
      title: 'Healthcare App',
      description: 'Telemedicine platform for healthcare providers',
      longDescription: 'Secure telemedicine platform with video consultations, appointment scheduling, electronic health records, prescription management, and payment processing.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
      tags: ['React Native', 'Node.js', 'PostgreSQL', 'WebRTC', 'Firebase'],
      category: 'Healthcare',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-[#3B82F6] to-[#60A5FA]',
      icon: Smartphone,
    },
    {
      id: 6,
      title: 'E-Learning Platform',
      description: 'Interactive learning platform for kids',
      longDescription: 'Gamified learning platform with interactive lessons, progress tracking, parent dashboard, and adaptive learning paths based on student performance.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop',
      tags: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Tailwind'],
      category: 'Education',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-[#EC4899] to-[#F472B6]',
      icon: BookOpen,
    },
    {
      id: 7,
      title: 'Cybersecurity Suite',
      description: 'Enterprise security monitoring system',
      longDescription: 'Comprehensive security suite with threat detection, vulnerability scanning, incident response, compliance reporting, and real-time alerts.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop',
      tags: ['Python', 'React', 'Node.js', 'Elasticsearch', 'Docker'],
      category: 'Security',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-[#EF4444] to-[#F87171]',
      icon: Shield,
    },
    {
      id: 8,
      title: 'Real Estate Platform',
      description: 'Property management and listing platform',
      longDescription: 'Complete real estate solution with property listings, virtual tours, mortgage calculator, agent dashboard, and lead management system.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Mapbox', 'Stripe'],
      category: 'Business',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-[#06B6D4] to-[#0891B2]',
      icon: Globe,
    },
    {
      id: 9,
      title: 'Analytics Dashboard',
      description: 'Business intelligence and analytics platform',
      longDescription: 'Powerful analytics dashboard with real-time data visualization, custom reports, predictive analytics, and integration with multiple data sources.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      tags: ['React', 'D3.js', 'Node.js', 'ClickHouse', 'Redis'],
      category: 'Analytics',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-[#F97316] to-[#FB923C]',
      icon: Code2,
    },
  ];

  // Categories
  const categories = ['All', 'Business', 'Education', 'AI/ML', 'Healthcare', 'Security', 'Analytics'];

  // Filter projects based on search and category
  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    
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

  // Animation variants - smooth and optimized
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 12,
        mass: 0.5,
      },
    },
  };

  const heroVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smoothness
      },
    },
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-2 border-[#6366F1] border-t-transparent rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-[#6366F1] animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#020617] pt-20 lg:pt-24">
      {/* Hero Section with bottom-to-top animation */}
      <section className="relative overflow-hidden border-b border-[#1E293B]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 via-transparent to-[#8B5CF6]/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366F1]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#8B5CF6]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto"
          >
            {/* Back to home - appears first */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link 
                href="/"
                className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#6366F1] transition-colors duration-300 mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
            </motion.div>

            {/* Main heading with gradient */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Our{' '}
              <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                Portfolio
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              className="text-lg text-[#94A3B8] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Explore our complete collection of successful projects and innovative solutions.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search projects by name, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-[#0F172A] border border-[#1E293B] rounded-xl text-[#F8FAFC] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#6366F1] transition-all duration-300"
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

            {/* Category Filters */}
            <motion.div 
              className="flex flex-wrap justify-center gap-2 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
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
              className="text-sm text-[#94A3B8] mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Showing {filteredProjects.length} of {allProjects.length} projects
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key="projects"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {filteredProjects.map((project) => {
                  const Icon = project.icon;
                  
                  return (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      layout
                      onHoverStart={() => setHoveredId(project.id)}
                      onHoverEnd={() => setHoveredId(null)}
                      className="group relative"
                    >
                      {/* Card Border Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md`} />
                      
                      {/* Main Card */}
                      <div className="relative bg-[#0F172A] border border-[#1E293B] rounded-xl overflow-hidden hover:border-transparent transition-all duration-300 hover:-translate-y-2">
                        
                        {/* Image Container */}
                        <div className="relative w-full h-56 overflow-hidden">
                          <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 z-10`} />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent z-10" />
                          
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          
                          {/* Category Badge */}
                          <span className="absolute top-3 left-3 z-20 px-2.5 py-1 bg-[#0F172A]/90 backdrop-blur-sm border border-[#1E293B] rounded-lg text-xs font-medium text-[#94A3B8]">
                            {project.category}
                          </span>

                          {/* Links */}
                          <div className="absolute top-3 right-3 z-20 flex gap-2">
                            {project.liveUrl && (
                              <Link
                                href={project.liveUrl}
                                target="_blank"
                                className="p-2 bg-[#0F172A]/90 backdrop-blur-sm border border-[#1E293B] rounded-lg hover:border-[#6366F1] hover:text-[#6366F1] transition-all duration-300"
                                aria-label="Live Preview"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </Link>
                            )}
                            {project.githubUrl && (
                              <Link
                                href={project.githubUrl}
                                target="_blank"
                                className="p-2 bg-[#0F172A]/90 backdrop-blur-sm border border-[#1E293B] rounded-lg hover:border-[#6366F1] hover:text-[#6366F1] transition-all duration-300"
                                aria-label="View Code"
                              >
                                <Github className="w-4 h-4" />
                              </Link>
                            )}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-start gap-3 mb-3">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} p-2 flex-shrink-0`}>
                              <Icon className="w-full h-full text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#6366F1] transition-colors duration-300">
                                {project.title}
                              </h3>
                              <p className="text-xs text-[#6366F1]">{project.category}</p>
                            </div>
                          </div>
                          
                          <p className="text-sm text-[#94A3B8] mb-4 line-clamp-2">
                            {project.longDescription}
                          </p>

                          {/* Tech Stack Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.slice(0, 4).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2.5 py-1 bg-[#1E293B] text-[#94A3B8] rounded-lg border border-transparent hover:border-[#6366F1] hover:text-[#6366F1] transition-colors duration-300"
                              >
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > 4 && (
                              <span className="text-xs px-2.5 py-1 bg-[#1E293B] text-[#94A3B8] rounded-lg">
                                +{project.tags.length - 4}
                              </span>
                            )}
                          </div>

                          {/* View Details Button */}
                          <Link
                            href={`/portfolio/${project.id}`}
                            className="inline-flex items-center gap-2 text-sm font-medium text-[#6366F1] group-hover:gap-3 transition-all duration-300"
                          >
                            View Details
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
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
                <div className="w-24 h-24 mx-auto mb-6 bg-[#0F172A] rounded-full flex items-center justify-center border border-[#1E293B]">
                  <Search className="w-10 h-10 text-[#94A3B8]" />
                </div>
                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-3">No projects found</h3>
                <p className="text-[#94A3B8] mb-8 max-w-md mx-auto">
                  We couldn't find any projects matching your search criteria. Try adjusting your filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="px-6 py-3 bg-[#6366F1] text-white rounded-xl hover:bg-[#8B5CF6] transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-[#1E293B] py-16 lg:py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-[#94A3B8] mb-8">
            Let's discuss how we can bring your ideas to life with our expertise.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#6366F1]/25 transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.section>
    </main>
  );
};

export default PortfolioPage;