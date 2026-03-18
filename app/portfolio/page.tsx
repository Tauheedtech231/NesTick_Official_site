// components/Portfolio.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

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
}

const Portfolio = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'POS System',
      description: 'Smart point-of-sale system for business management',
      longDescription: 'Complete POS solution with inventory tracking, sales analytics, employee management, and multi-store support.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      category: 'Business',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-[#6366F1] to-[#8B5CF6]',
    },
    {
      id: 2,
      title: 'LMS Platform',
      description: 'Learning management system for educational institutes',
      longDescription: 'Comprehensive platform with course creation, student progress tracking, quizzes, and certification management.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
      category: 'Education',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-[#8B5CF6] to-[#6366F1]',
    },
    {
      id: 3,
      title: 'AI Chatbot',
      description: 'AI-powered chatbot for automation',
      longDescription: 'Intelligent chatbot with natural language processing, sentiment analysis, and seamless integration with popular platforms.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2106&auto=format&fit=crop',
      tags: ['Python', 'TensorFlow', 'OpenAI', 'FastAPI'],
      category: 'AI/ML',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-[#22C55E] to-[#86EFAC]',
    },
    {
      id: 4,
      title: 'Inventory System',
      description: 'Advanced inventory and stock management',
      longDescription: 'Real-time inventory tracking, automated reordering, supplier management, and detailed reporting dashboard.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
      tags: ['React', 'Node.js', 'MySQL', 'Redis'],
      category: 'Business',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-[#F59E0B] to-[#FBBF24]',
    },
  ];

  // Animation variants - optimized for performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
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
        stiffness: 70,
        damping: 12,
        mass: 0.5,
      },
    },
  };

  const headerVariants = {
    hidden: { y: -15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-24 bg-[#020617] overflow-hidden"
    >
      {/* Background decorative elements - very subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#6366F1]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay - subtle */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-3">
            Our{' '}
            <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#94A3B8]">
            Explore some of our recent work and successful projects.
          </p>
          
          {/* Decorative line */}
          <div className="flex justify-center mt-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full" />
          </div>
        </motion.div>

        {/* Projects Grid - Show only first 3 projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.slice(0, 3).map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative"
            >
              {/* Card Border Glow Effect - subtle */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-md`} />
              
              {/* Main Card */}
              <div className="relative bg-[#0F172A] border border-[#1E293B] rounded-xl overflow-hidden hover:border-transparent transition-all duration-300 hover:-translate-y-2">
                
                {/* Image Container */}
                <div className="relative w-full h-48 overflow-hidden">
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
                  <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-[#6366F1] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-[#94A3B8] mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-[#1E293B] text-[#94A3B8] rounded-lg border border-transparent hover:border-[#6366F1] hover:text-[#6366F1] transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
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

                {/* Corner Accent - subtle */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform rotate-12 translate-x-6 -translate-y-6`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12 lg:mt-16"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F172A] border border-[#1E293B] text-[#F8FAFC] font-medium rounded-xl hover:border-[#6366F1] hover:bg-[#6366F1]/5 transition-all duration-300 group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;