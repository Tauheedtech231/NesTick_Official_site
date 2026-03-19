// app/tech-stack/page.tsx
'use client';

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, X, Braces, Box, Code2, Server, Cpu, Terminal, Database, 
  Cloud, GitBranch, Smartphone, Figma, Zap
} from "lucide-react";

interface TechItem {
  id: number;
  name: string;
  category: string;
  icon: React.ReactNode;
  gradient: string;
}

const TechStackPage = () => {
  const [selected, setSelected] = useState<TechItem | null>(null);
  const [circleSize, setCircleSize] = useState(500);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isDesktop, setIsDesktop] = useState(false);
  
  const resizeTimeout = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    const calculateSize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      setIsDesktop(vw >= 1024);
      
      if (vw >= 1024) {
        const minSize = Math.min(vw * 0.45, vh * 0.7, 700);
        setCircleSize(minSize);
      } else {
        const minSize = Math.min(vw * 0.8, vh * 0.4, 450);
        setCircleSize(minSize);
      }
    };

    calculateSize();

    const handleResize = () => {
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      resizeTimeout.current = setTimeout(calculateSize, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
    };
  }, []);

  const techStack: TechItem[] = [
    { id:1, name:"React", category:"Frontend", icon: <Braces />, gradient:"from-[#6366F1] to-[#8B5CF6]" },
    { id:2, name:"Next.js", category:"Frontend", icon: <Box />, gradient:"from-[#8B5CF6] to-[#6366F1]" },
    { id:3, name:"TypeScript", category:"Frontend", icon: <Code2 />, gradient:"from-[#22C55E] to-[#86EFAC]" },
    { id:4, name:"Vue.js", category:"Frontend", icon: <Braces />, gradient:"from-[#3B82F6] to-[#60A5FA]" },
    { id:5, name:"Node.js", category:"Backend", icon: <Server />, gradient:"from-[#F59E0B] to-[#FBBF24]" },
    { id:6, name:"Python", category:"Backend", icon: <Cpu />, gradient:"from-[#EF4444] to-[#F87171]" },
    { id:7, name:"Java", category:"Backend", icon: <Terminal />, gradient:"from-[#F97316] to-[#FB923C]" },
    { id:8, name:"MongoDB", category:"Database", icon: <Database />, gradient:"from-[#3B82F6] to-[#60A5FA]" },
    { id:9, name:"PostgreSQL", category:"Database", icon: <Database />, gradient:"from-[#06B6D4] to-[#0891B2]" },
    { id:10, name:"AWS", category:"Cloud", icon: <Cloud />, gradient:"from-[#F97316] to-[#FB923C]" },
    { id:11, name:"Docker", category:"DevOps", icon: <Box />, gradient:"from-[#EC4899] to-[#F472B6]" },
    { id:12, name:"Git", category:"DevOps", icon: <GitBranch />, gradient:"from-[#F97316] to-[#FB923C]" },
    { id:13, name:"React Native", category:"Mobile", icon: <Smartphone />, gradient:"from-[#6366F1] to-[#8B5CF6]" },
    { id:14, name:"Flutter", category:"Mobile", icon: <Smartphone />, gradient:"from-[#22C55E] to-[#86EFAC]" },
    { id:15, name:"TensorFlow", category:"AI/ML", icon: <Cpu />, gradient:"from-[#22C55E] to-[#86EFAC]" },
    { id:16, name:"Figma", category:"Design", icon: <Figma />, gradient:"from-[#8B5CF6] to-[#6366F1]" },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud', 'DevOps', 'Mobile', 'AI/ML', 'Design'];
  const filteredTech = activeCategory === 'All' ? techStack : techStack.filter(t => t.category === activeCategory);
  
  const ringSizes = {
    large: isDesktop ? circleSize * 1.3 : circleSize * 1.2,
    medium: circleSize,
    small: isDesktop ? circleSize * 0.75 : circleSize * 0.7,
    orbit: isDesktop ? circleSize * 0.75 : circleSize * 0.7
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start lg:justify-center bg-[#020617] py-12 lg:py-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <div className="absolute inset-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #6366F1 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#6366F1]/10 via-transparent to-[#8B5CF6]/10" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header - Extra top margin */}
        <div className="text-center max-w-2xl px-4 mb-8 lg:mb-12 mt-20 lg:mt-28">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-[#0F172A] border border-[#1E293B]">
            <div className="w-4 h-4 text-[#6366F1]">
              <Sparkles />
            </div>
            <span className="text-xs lg:text-sm font-medium text-[#6366F1]">Tech Stack</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#F8FAFC]">
            Our Technology Stack
          </h2>
          <p className="mt-3 lg:mt-4 text-sm sm:text-base lg:text-lg text-[#94A3B8]">
            Modern technologies we use to build scalable solutions
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 lg:mb-16">
          {categories.map(c => (
            <button key={c} onClick={() => setActiveCategory(c)} 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory===c ? 'bg-[#6366F1] text-white shadow-lg shadow-[#6366F1]/25' 
                : 'bg-[#0F172A] border border-[#1E293B] text-[#94A3B8] hover:border-[#6366F1] hover:text-[#6366F1]'}`}>
              {c}
            </button>
          ))}
        </div>

        {/* Orbit Container */}
        <div className="relative w-full flex items-center justify-center overflow-visible min-h-[350px] sm:min-h-[400px] lg:min-h-[500px]">
          {/* Outer Rings */}
          <div className="relative flex items-center justify-center" style={{ width: ringSizes.large, height: ringSizes.large }}>
            {/* Ring 1 - Largest */}
            <div className="absolute rounded-full border border-[#6366F1]/20" style={{ width: ringSizes.large, height: ringSizes.large }} />
            
            {/* Ring 2 - Middle */}
            <div className="absolute rounded-full border border-[#8B5CF6]/15" style={{ width: ringSizes.medium, height: ringSizes.medium }} />
            
            {/* Ring 3 - Smallest */}
            <div className="absolute rounded-full border border-[#22C55E]/10" style={{ width: ringSizes.small, height: ringSizes.small }} />
            
            {/* Center Logo */}
            <div className="absolute z-20 text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] p-[2px]">
                <div className="w-full h-full rounded-full bg-[#020617] flex items-center justify-center">
                  <span className="text-xs lg:text-sm font-bold text-[#F8FAFC] px-2">Nestick Tech</span>
                </div>
              </div>
            </div>
            
            {/* Rotating Orbit with Tech Icons */}
            <div className="absolute" style={{ width: ringSizes.orbit, height: ringSizes.orbit }}>
              <motion.div 
                className="relative w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {filteredTech.slice(0, 12).map((tech, index) => {
                  const angle = (index / Math.min(filteredTech.length, 12)) * 360;
                  const radius = ringSizes.orbit / 2;

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
                        className="relative rounded-full border-2 border-[#1E293B] bg-[#0F172A] shadow-xl hover:scale-110 transition duration-300 pointer-events-auto group"
                        style={{ 
                          width: isDesktop ? 80 : 60,
                          height: isDesktop ? 80 : 60,
                          marginLeft: isDesktop ? -40 : -30,
                          marginTop: isDesktop ? -40 : -30,
                        }}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full`} />
                        <div className="relative w-full h-full flex items-center justify-center">
                          <div className={`w-${isDesktop ? 8 : 6} h-${isDesktop ? 8 : 6} text-white`}>
                            {tech.icon}
                          </div>
                        </div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#0F172A] border border-[#1E293B] px-2 py-1 rounded text-xs text-[#F8FAFC] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          {tech.name}
                        </div>
                      </motion.button>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Grid View */}
        <div className="mt-12 lg:mt-16 w-full">
          <h3 className="text-lg font-semibold text-[#F8FAFC] text-center mb-6">All Technologies</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredTech.map(tech => (
              <button key={tech.id} onClick={() => setSelected(tech)}
                className="bg-[#0F172A] border border-[#1E293B] rounded-xl p-4 flex flex-col items-center gap-2 hover:border-[#6366F1] transition-all duration-300 group hover:-translate-y-1">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tech.gradient} p-2`}>
                  <div className="w-full h-full text-white">
                    {tech.icon}
                  </div>
                </div>
                <span className="text-xs font-medium text-[#F8FAFC]">{tech.name}</span>
                <span className="text-[10px] text-[#94A3B8]">{tech.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-center text-sm text-[#94A3B8] mt-8">
          Showing {filteredTech.length} technologies
        </p>
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
              <div className={`h-2 bg-gradient-to-r ${selected.gradient}`} />
              
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-[#1E293B] rounded-full flex items-center justify-center text-[#94A3B8] hover:bg-[#2D3A4F] hover:text-[#F8FAFC] transition-colors z-10"
              >
                <div className="w-5 h-5">
                  <X />
                </div>
              </button>

              <div className="p-8">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${selected.gradient} animate-pulse`} style={{ animationDuration: '2s' }} />
                  <div className="absolute inset-1 rounded-full bg-[#0F172A] flex items-center justify-center">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selected.gradient} p-3`}>
                      <div className="w-full h-full text-white">
                        {selected.icon}
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">{selected.name}</h3>
                <span className="inline-block px-3 py-1 bg-[#1E293B] text-[#94A3B8] text-xs rounded-full mb-4">{selected.category}</span>
                <p className="text-[#94A3B8] text-sm mb-6">Part of our modern technology stack at Nestick Tech</p>

                <div className="flex justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
                  <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                  <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TechStackPage;