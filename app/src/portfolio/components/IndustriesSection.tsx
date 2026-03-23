// components/IndustriesSection.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  GraduationCap, 
  ShoppingBag, 
  Building2, 
  Rocket, 
  Landmark, 
  Plane, 
  Heart,
  Sparkles,
  ArrowRight,
  X,
  Send,
  CheckCircle,
  Phone,
  Mail,
  User,
  Building,
  Briefcase,
  LucideIcon
} from 'lucide-react';
import Link from 'next/link';

interface Industry {
  id: number;
  name: string;
  icon: LucideIcon;
  description: string;
  color: string;
  gradient: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  industry: string;
  projectDescription: string;
}

const IndustriesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    industry: '',
    projectDescription: '',
  });

  const industries: Industry[] = [
    {
      id: 1,
      name: "Education",
      icon: GraduationCap,
      description: "LMS platforms, student management systems, online learning solutions",
      color: "#6366F1",
      gradient: "from-[#6366F1] to-[#8B5CF6]",
    },
    {
      id: 2,
      name: "E-commerce",
      icon: ShoppingBag,
      description: "Online stores, payment integration, inventory management",
      color: "#22C55E",
      gradient: "from-[#22C55E] to-[#86EFAC]",
    },
    {
      id: 3,
      name: "Construction",
      icon: Building2,
      description: "Project management, resource planning, site monitoring",
      color: "#F59E0B",
      gradient: "from-[#F59E0B] to-[#FBBF24]",
    },
    {
      id: 4,
      name: "Startups",
      icon: Rocket,
      description: "MVP development, scaling solutions, tech strategy",
      color: "#EF4444",
      gradient: "from-[#EF4444] to-[#F87171]",
    },
    {
      id: 5,
      name: "Banking & Finance",
      icon: Landmark,
      description: "Secure transactions, compliance systems, analytics",
      color: "#3B82F6",
      gradient: "from-[#3B82F6] to-[#60A5FA]",
    },
    {
      id: 6,
      name: "Travel",
      icon: Plane,
      description: "Booking systems, travel management, customer portals",
      color: "#06B6D4",
      gradient: "from-[#06B6D4] to-[#0891B2]",
    },
    {
      id: 7,
      name: "Medical",
      icon: Heart,
      description: "Healthcare apps, patient management, telemedicine",
      color: "#EC489A",
      gradient: "from-[#EC489A] to-[#F472B6]",
    },
  ];

  const handleConsultancyClick = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        industry: '',
        projectDescription: '',
      });
      setSelectedIndustry('');
    }, 3000);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
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

  const introContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fromTopVariants: Variants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
      },
    },
  };

  const fromBottomVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
      },
    },
  };

  return (
    <>
      <section className="relative py-20 lg:py-28 bg-[#020617] overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366F1]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            variants={introContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <motion.div 
              variants={fromTopVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-[#0F172A] border border-[#1E293B]"
            >
              <Sparkles className="w-4 h-4 text-[#6366F1]" />
              <span className="text-xs lg:text-sm font-medium bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                Industries We Serve
              </span>
            </motion.div>
            <motion.h2 
              variants={fromTopVariants}
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#F8FAFC] mb-3"
            >
              Trusted by{' '}
              <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                Leading Industries
              </span>
            </motion.h2>
            <motion.p 
              variants={fromTopVariants}
              className="text-base md:text-lg text-[#94A3B8]"
            >
              Specialized digital solutions tailored for your industry&apos;s unique challenges
            </motion.p>
          </motion.div>

          {/* Industries Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6"
          >
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.id}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${industry.gradient} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-sm`} />
                  
                  <div className="relative bg-[#0F172A] border border-[#1E293B] rounded-xl p-6 hover:border-[#6366F1]/30 transition-all duration-300 h-full hover:-translate-y-1">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Industry Name */}
                    <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-[#6366F1] transition-colors duration-300">
                      {industry.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-12 pt-8 border-t border-[#1E293B]"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[#94A3B8] mb-4"
            >
              Ready to transform your business with cutting-edge digital solutions?
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#6366F1]/25 transition-all duration-300 hover:scale-105 group"
              >
                <span>Get Free Consultation</span>
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default IndustriesSection;