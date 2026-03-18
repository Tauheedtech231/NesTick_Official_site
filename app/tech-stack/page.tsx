// app/tech-stack/page.tsx
'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles,
  Code2,
  Server,
  Database,
  Globe,
  Smartphone,
  Cpu,
  Cloud,
  Shield,
  Braces,
  Box,
  GitBranch,
  Terminal,
  Figma,
  Zap,
  X
} from "lucide-react";

interface TechItem {
  id: number;
  name: string;
  category: string;
  icon: React.ElementType;
  gradient: string;
  color: string;
}

const TechStackPage = () => {
  const [selected, setSelected] = useState<TechItem | null>(null);
  const [mounted, setMounted] = useState(false);
  const [circleSize, setCircleSize] = useState(500);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    setMounted(true);
    
    // Calculate circle size based on viewport
    const calculateSize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      
      if (vw >= 1024) {
        const minSize = Math.min(vw * 0.45, vh * 0.7, 700);
        setCircleSize(minSize);
      } else {
        const minSize = Math.min(vw * 0.8, vh * 0.4, 450);
        setCircleSize(minSize);
      }
    };

    calculateSize();
    window.addEventListener('resize', calculateSize);
    return () => window.removeEventListener('resize', calculateSize);
  }, []);

  // Tech Stack Data
  const techStack: TechItem[] = [
    // Frontend
    {
      id: 1,
      name: "React",
      category: "Frontend",
      icon: Braces,
      gradient: "from-[#6366F1] to-[#8B5CF6]",
      color: "#6366F1",
    },
    {
      id: 2,
      name: "Next.js",
      category: "Frontend",
      icon: Box,
      gradient: "from-[#8B5CF6] to-[#6366F1]",
      color: "#8B5CF6",
    },
    {
      id: 3,
      name: "TypeScript",
      category: "Frontend",
      icon: Code2,
      gradient: "from-[#22C55E] to-[#86EFAC]",
      color: "#22C55E",
    },
    {
      id: 4,
      name: "Vue.js",
      category: "Frontend",
      icon: Braces,
      gradient: "from-[#3B82F6] to-[#60A5FA]",
      color: "#3B82F6",
    },
    {
      id: 5,
      name: "Tailwind CSS",
      category: "Frontend",
      icon: Code2,
      gradient: "from-[#06B6D4] to-[#0891B2]",
      color: "#06B6D4",
    },
    // Backend
    {
      id: 6,
      name: "Node.js",
      category: "Backend",
      icon: Server,
      gradient: "from-[#F59E0B] to-[#FBBF24]",
      color: "#F59E0B",
    },
    {
      id: 7,
      name: "Python",
      category: "Backend",
      icon: Cpu,
      gradient: "from-[#EF4444] to-[#F87171]",
      color: "#EF4444",
    },
    {
      id: 8,
      name: "Java",
      category: "Backend",
      icon: Terminal,
      gradient: "from-[#F97316] to-[#FB923C]",
      color: "#F97316",
    },
    {
      id: 9,
      name: "PHP",
      category: "Backend",
      icon: Server,
      gradient: "from-[#8B5CF6] to-[#6366F1]",
      color: "#8B5CF6",
    },
    {
      id: 10,
      name: "Go",
      category: "Backend",
      icon: Code2,
      gradient: "from-[#06B6D4] to-[#0891B2]",
      color: "#06B6D4",
    },
    // Database
    {
      id: 11,
      name: "MongoDB",
      category: "Database",
      icon: Database,
      gradient: "from-[#3B82F6] to-[#60A5FA]",
      color: "#3B82F6",
    },
    {
      id: 12,
      name: "PostgreSQL",
      category: "Database",
      icon: Database,
      gradient: "from-[#06B6D4] to-[#0891B2]",
      color: "#06B6D4",
    },
    {
      id: 13,
      name: "MySQL",
      category: "Database",
      icon: Database,
      gradient: "from-[#F59E0B] to-[#FBBF24]",
      color: "#F59E0B",
    },
    {
      id: 14,
      name: "Redis",
      category: "Database",
      icon: Zap,
      gradient: "from-[#EF4444] to-[#F87171]",
      color: "#EF4444",
    },
    // Cloud & DevOps
    {
      id: 15,
      name: "AWS",
      category: "Cloud",
      icon: Cloud,
      gradient: "from-[#F97316] to-[#FB923C]",
      color: "#F97316",
    },
    {
      id: 16,
      name: "Docker",
      category: "DevOps",
      icon: Box,
      gradient: "from-[#EC4899] to-[#F472B6]",
      color: "#EC4899",
    },
    {
      id: 17,
      name: "Kubernetes",
      category: "DevOps",
      icon: Box,
      gradient: "from-[#6366F1] to-[#8B5CF6]",
      color: "#6366F1",
    },
    {
      id: 18,
      name: "Git",
      category: "DevOps",
      icon: GitBranch,
      gradient: "from-[#F97316] to-[#FB923C]",
      color: "#F97316",
    },
    // Mobile
    {
      id: 19,
      name: "React Native",
      category: "Mobile",
      icon: Smartphone,
      gradient: "from-[#6366F1] to-[#8B5CF6]",
      color: "#6366F1",
    },
    {
      id: 20,
      name: "Flutter",
      category: "Mobile",
      icon: Smartphone,
      gradient: "from-[#22C55E] to-[#86EFAC]",
      color: "#22C55E",
    },
    {
      id: 21,
      name: "Swift",
      category: "Mobile",
      icon: Code2,
      gradient: "from-[#F59E0B] to-[#FBBF24]",
      color: "#F59E0B",
    },
    {
      id: 22,
      name: "Kotlin",
      category: "Mobile",
      icon: Code2,
      gradient: "from-[#EF4444] to-[#F87171]",
      color: "#EF4444",
    },
    // AI/ML
    {
      id: 23,
      name: "TensorFlow",
      category: "AI/ML",
      icon: Cpu,
      gradient: "from-[#22C55E] to-[#86EFAC]",
      color: "#22C55E",
    },
    {
      id: 24,
      name: "PyTorch",
      category: "AI/ML",
      icon: Cpu,
      gradient: "from-[#EF4444] to-[#F87171]",
      color: "#EF4444",
    },
    // Security
    {
      id: 25,
      name: "Security",
      category: "Security",
      icon: Shield,
      gradient: "from-[#EF4444] to-[#F87171]",
      color: "#EF4444",
    },
    // Design
    {
      id: 26,
      name: "Figma",
      category: "Design",
      icon: Figma,
      gradient: "from-[#8B5CF6] to-[#6366F1]",
      color: "#8B5CF6",
    },
  ];

  // Categories
  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud', 'DevOps', 'Mobile', 'AI/ML', 'Security', 'Design'];

  // Filter tech items
  const filteredTech = activeCategory === 'All' 
    ? techStack 
    : techStack.filter(tech => tech.category === activeCategory);

  // Desktop/Responsive check
  const isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 1024 : false;
  
  const ringSizes = {
    large: isDesktop ? circleSize * 1.3 : circleSize * 1.2,
    medium: circleSize,
    small: isDesktop ? circleSize * 0.75 : circleSize * 0.7,
    orbit: isDesktop ? circleSize * 0.75 : circleSize * 0.7
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        mass: 0.5,
      },
    },
  };

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 8,
        mass: 0.6,
      },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#020617] pt-20 lg:pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#22C55E]/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl mx-auto mb-8 lg:mb-12"
        >
          <motion.div 
            variants={badgeVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-[#0F172A] border border-[#1E293B]"
          >
            <Sparkles className="w-4 h-4 text-[#6366F1]" />
            <span className="text-xs lg:text-sm font-medium text-[#94A3B8]">
              Our Technology Stack
            </span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-7xl font-bold text-[#F8FAFC]">
            Tech <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">Stack</span>
          </h1>
          
          <p className="mt-3 lg:mt-4 text-sm sm:text-base lg:text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Modern technologies we use to build scalable and innovative solutions
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-2 mb-12 lg:mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#6366F1] text-white shadow-lg shadow-[#6366F1]/25'
                  : 'bg-[#0F172A] border border-[#1E293B] text-[#94A3B8] hover:border-[#6366F1] hover:text-[#6366F1]'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Orbit Container */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative w-full flex items-center justify-center overflow-visible min-h-[400px] lg:min-h-[600px]"
        >
          {/* Outer Rings */}
          <div 
            className="relative flex items-center justify-center"
            style={{ 
              width: ringSizes.large,
              height: ringSizes.large
            }}
          >
            {/* Ring 1 - Largest */}
            <div 
              className="absolute rounded-full border border-[#6366F1]/20"
              style={{ 
                width: ringSizes.large,
                height: ringSizes.large
              }}
            ></div>
            
            {/* Ring 2 - Middle */}
            <div 
              className="absolute rounded-full border border-[#8B5CF6]/15"
              style={{ 
                width: ringSizes.medium,
                height: ringSizes.medium
              }}
            ></div>
            
            {/* Ring 3 - Smallest */}
            <div 
              className="absolute rounded-full border border-[#22C55E]/10"
              style={{ 
                width: ringSizes.small,
                height: ringSizes.small
              }}
            ></div>
            
            {/* Center Tech Name - Nestick Tech */}
            <div className="absolute z-20 text-center">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] p-[2px]">
                <div className="w-full h-full rounded-full bg-[#020617] flex items-center justify-center">
                  <span className="text-xs lg:text-sm font-bold text-[#F8FAFC] text-center px-2">
                    Nestick Tech
                  </span>
                </div>
              </div>
            </div>
            
            {/* Rotating Orbit with Tech Icons */}
            <div 
              className="absolute"
              style={{ 
                width: ringSizes.orbit,
                height: ringSizes.orbit
              }}
            >
              <motion.div 
                className="relative w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                {filteredTech.slice(0, 12).map((tech, index) => {
                  const angle = (index / Math.min(filteredTech.length, 12)) * 360;
                  const radius = ringSizes.orbit / 2;
                  const Icon = tech.icon;

                  return (
                    <div
                      key={tech.id}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
                        transformOrigin: '0 0',
                      }}
                    >
                      <motion.button
                        onClick={() => setSelected(tech)}
                        className="relative rounded-full border-2 border-[#1E293B] bg-[#0F172A] shadow-xl hover:scale-110 transition duration-300 pointer-events-auto overflow-hidden group"
                        style={{ 
                          width: isDesktop ? 80 : 60,
                          height: isDesktop ? 80 : 60,
                          marginLeft: isDesktop ? -40 : -30,
                          marginTop: isDesktop ? -40 : -30,
                        }}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Gradient overlay on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                        
                        {/* Icon */}
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Icon 
                            className="w-6 h-6 lg:w-8 lg:h-8" 
                            style={{ color: tech.color }}
                          />
                        </div>

                        {/* Tech name tooltip on hover */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#0F172A] border border-[#1E293B] px-2 py-1 rounded text-xs text-[#F8FAFC] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          {tech.name}
                        </div>

                        {/* Hover effect ring */}
                        <div className={`absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[${tech.color}]/50 transition-all duration-300`}></div>
                      </motion.button>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Tech Grid View (for mobile/tablet fallback) */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="lg:hidden mt-16"
        >
          <h3 className="text-xl font-bold text-[#F8FAFC] text-center mb-6">All Technologies</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {filteredTech.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.button
                  key={tech.id}
                  onClick={() => setSelected(tech)}
                  className="bg-[#0F172A] border border-[#1E293B] rounded-xl p-4 flex flex-col items-center gap-2 hover:border-[#6366F1] transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tech.gradient} p-2`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <span className="text-xs font-medium text-[#F8FAFC]">{tech.name}</span>
                  <span className="text-[10px] text-[#94A3B8]">{tech.category}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Results count */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-[#94A3B8] mt-8 lg:mt-12"
        >
          Showing {filteredTech.length} technologies
        </motion.p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0F172A] border border-[#1E293B] rounded-3xl max-w-sm w-full text-center shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top gradient bar */}
              <div className={`h-2 bg-gradient-to-r ${selected.gradient}`}></div>
              
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-[#1E293B] rounded-full flex items-center justify-center text-[#94A3B8] hover:bg-[#2D3A4F] hover:text-[#F8FAFC] transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                {/* Icon with gradient ring */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${selected.gradient} animate-pulse`} style={{ animationDuration: '2s' }}></div>
                  <div className="absolute inset-1 rounded-full bg-[#0F172A] flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selected.gradient} p-4`}>
                      <selected.icon className="w-full h-full text-white" />
                    </div>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">
                  {selected.name}
                </h3>

                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-[#1E293B] text-[#94A3B8] text-xs rounded-full mb-4">
                  {selected.category}
                </span>

                {/* Simple message */}
                <p className="text-[#94A3B8] text-sm mb-6">
                  Part of our modern technology stack at Nestick Tech
                </p>

                {/* Decorative dots */}
                <div className="flex justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#6366F1]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#8B5CF6]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default TechStackPage;