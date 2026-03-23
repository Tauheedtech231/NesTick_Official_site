// components/TechStackSlider.tsx
'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  Database, 
  Cloud, 
  Smartphone, 
  Server, 
  Brain,
  Sparkles,
  GitBranch,
  Figma,
  Terminal,
  LucideIcon
} from 'lucide-react';

interface Tech {
  id: number;
  name: string;
  icon:LucideIcon;
  color: string;
}

const TechStackSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Tech Stack Data
  const techStack: Tech[] = [
    { id: 1, name: "React.js", icon: Code2, color: "#61DAFB" },
    { id: 2, name: "Next.js", icon: Globe, color: "#FFFFFF" },
    { id: 3, name: "Node.js", icon: Server, color: "#68A063" },
    { id: 4, name: "Python", icon: Brain, color: "#3776AB" },
    { id: 5, name: "TypeScript", icon: Code2, color: "#3178C6" },
    { id: 6, name: "MongoDB", icon: Database, color: "#47A248" },
    { id: 7, name: "PostgreSQL", icon: Database, color: "#336791" },
    { id: 8, name: "AWS", icon: Cloud, color: "#FF9900" },
    { id: 9, name: "React Native", icon: Smartphone, color: "#61DAFB" },
    { id: 10, name: "Docker", icon: Server, color: "#2496ED" },
    { id: 11, name: "Kubernetes", icon: Cloud, color: "#326CE5" },
    { id: 12, name: "GraphQL", icon: Code2, color: "#E10098" },
    { id: 13, name: "Tailwind CSS", icon: Sparkles, color: "#06B6D4" },
    { id: 14, name: "Figma", icon: Figma, color: "#F24E1E" },
    { id: 15, name: "Git", icon: GitBranch, color: "#F05032" },
    { id: 16, name: "VSCode", icon: Terminal, color: "#007ACC" },
  ];

  // Duplicate tech for seamless infinite scroll (computed at build time, not in effect)
  const duplicatedTech = [...techStack, ...techStack, ...techStack];

  // Fixed particle positions
  const particles = [
    { top: '15%', left: '10%', delay: 0 },
    { top: '25%', left: '85%', delay: 1 },
    { top: '45%', left: '20%', delay: 2 },
    { top: '60%', left: '75%', delay: 0.5 },
    { top: '75%', left: '40%', delay: 1.5 },
    { top: '85%', left: '90%', delay: 2.5 },
    { top: '10%', left: '50%', delay: 3 },
    { top: '35%', left: '95%', delay: 0.8 },
    { top: '55%', left: '5%', delay: 1.8 },
    { top: '70%', left: '60%', delay: 2.2 },
    { top: '90%', left: '25%', delay: 1.2 },
    { top: '5%', left: '70%', delay: 2.8 },
    { top: '40%', left: '45%', delay: 0.3 },
    { top: '80%', left: '80%', delay: 1.3 },
    { top: '20%', left: '30%', delay: 2.3 },
    { top: '50%', left: '15%', delay: 0.6 },
    { top: '65%', left: '55%', delay: 1.6 },
    { top: '95%', left: '65%', delay: 2.6 },
    { top: '30%', left: '100%', delay: 0.9 },
    { top: '100%', left: '35%', delay: 1.9 },
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-[#020617] overflow-hidden">
      {/* Tech-inspired background - Circuit pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Digital grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]" />
        
        {/* Binary code effect - Fixed positions */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-5 md:left-10 text-[#6366F1] font-mono text-[8px] md:text-xs animate-pulse">
            01010100 01100101 01100011 01101000
          </div>
          <div className="absolute bottom-20 right-5 md:right-10 text-[#8B5CF6] font-mono text-[8px] md:text-xs animate-pulse delay-300">
            01010011 01110100 01100001 01100011 01101011
          </div>
          <div className="absolute top-1/2 left-10 md:left-1/4 text-[#6366F1]/30 font-mono text-[8px] md:text-[10px] animate-pulse delay-700">
            &lt;code&gt; &lt;/code&gt;
          </div>
          <div className="absolute bottom-1/3 right-10 md:right-1/4 text-[#8B5CF6]/30 font-mono text-[8px] md:text-[10px] animate-pulse delay-500">
            {`{ }`}
          </div>
        </div>

        {/* Floating particles effect - Fixed positions */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-[#6366F1]/20 rounded-full"
              style={{
                top: particle.top,
                left: particle.left,
                animation: `float ${3 + (i % 5)}s infinite ease-in-out`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-[#6366F1]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-[#8B5CF6]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Continuous Slider - No Cards, Just Icons & Text */}
        <div className="relative overflow-hidden" ref={sliderRef}>
          <motion.div
            className="flex gap-8 md:gap-12 lg:gap-16 items-center"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20, // Faster animation for both mobile and desktop
                ease: 'linear',
              },
            }}
          >
            {duplicatedTech.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.id}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center justify-center"
                >
                  {/* Icon with glow effect */}
                  <div className="relative group">
                    <div 
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                      style={{ 
                        background: tech.color, 
                        filter: 'blur(12px)',
                        width: '100%',
                        height: '100%'
                      }} 
                    />
                    <Icon 
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-300 hover:scale-110"
                      style={{ color: tech.color }}
                    />
                  </div>
                  
                  {/* Tech Name */}
                  <span className="text-[10px] sm:text-xs md:text-sm font-mono text-[#94A3B8] mt-1 sm:mt-2 whitespace-nowrap opacity-70 group-hover:opacity-100 transition-opacity">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-24 md:w-32 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-24 md:w-32 bg-gradient-to-l from-[#020617] via-[#020617]/80 to-transparent pointer-events-none" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          50% {
            transform: translateY(-15px) translateX(8px);
            opacity: 0.5;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
        
        .delay-700 {
          animation-delay: 700ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

export default TechStackSlider;