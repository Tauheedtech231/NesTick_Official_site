// components/TestimonialsSlider.tsx
'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const TestimonialsSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
      content: "Nestick Tech transformed our business with their innovative POS system. The team's expertise and dedication to quality are unmatched.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "EduFuture Labs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
      content: "The LMS platform they built for us is exceptional. Our students love the intuitive interface, and the analytics dashboard gives us valuable insights.",
      rating: 5,
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Product Manager",
      company: "HealthPlus Solutions",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop",
      content: "Working with Nestick Tech on our healthcare app was a game-changer. Their attention to security and user experience is remarkable.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Founder",
      company: "RetailPro",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
      content: "The inventory management system they developed streamlined our entire operation. We've seen a 40% increase in efficiency.",
      rating: 5,
    },
    {
      id: 5,
      name: "Emily Watson",
      role: "Director of Operations",
      company: "Global Logistics Co.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      content: "Their AI chatbot solution has revolutionized our customer service. Response times are down by 60%.",
      rating: 5,
    },
    {
      id: 6,
      name: "James Kim",
      role: "Head of Engineering",
      company: "FinTech Innovations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      content: "The cybersecurity audit and implementation they provided gave us peace of mind. Their expertise is top-notch.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants :Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    }),
  };

  const imageVariants:Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    }),
  };

  return (
    <section className="relative py-12 lg:py-16 bg-[#020617] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#6366F1]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3 bg-[#0F172A] border border-[#1E293B]">
            <Quote className="w-4 h-4 text-[#6366F1]" />
            <span className="text-xs font-medium text-[#94A3B8]">
              Client Testimonials
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-2">
            What Our{' '}
            <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          
          <p className="text-sm text-[#94A3B8] max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from some of our satisfied clients
          </p>
          
          {/* Decorative line */}
          <div className="mt-3 flex justify-center">
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full" />
          </div>
        </motion.div>

        {/* Main Testimonial Container - Reduced Height */}
        <div className="relative bg-[#0F172A] border border-[#1E293B] rounded-2xl overflow-hidden">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#020617] border border-[#1E293B] flex items-center justify-center hover:border-[#6366F1] hover:bg-[#6366F1]/10 transition-all duration-300 group"
          >
            <ChevronLeft className="w-4 h-4 text-[#94A3B8] group-hover:text-[#6366F1]" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#020617] border border-[#1E293B] flex items-center justify-center hover:border-[#6366F1] hover:bg-[#6366F1]/10 transition-all duration-300 group"
          >
            <ChevronRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#6366F1]" />
          </button>

          {/* Content Container - Reduced min-height */}
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[280px] md:min-h-[320px]">
            {/* Left Side - Image */}
            <div className="relative h-[200px] md:h-auto overflow-hidden bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`image-${currentIndex}`}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent md:bg-gradient-to-r md:from-[#0F172A] md:via-transparent md:to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side - Review Content - Reduced padding */}
            <div className="p-5 md:p-6 flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`content-${currentIndex}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-3"
                >
                  {/* Quote Icon - Smaller */}
                  <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                    <Quote className="w-3.5 h-3.5 text-white" />
                  </div>

                  {/* Review Content - Smaller text, reduced spacing */}
                  <p className="text-xs text-[#F8FAFC] leading-relaxed line-clamp-4">
                    {testimonials[currentIndex].content}
                  </p>

                  {/* Rating Stars - Smaller */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-2.5 h-2.5 ${
                          i < testimonials[currentIndex].rating
                            ? 'text-[#F59E0B] fill-[#F59E0B]'
                            : 'text-[#1E293B]'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Author Info - Smaller text */}
                  <div>
                    <h4 className="text-xs font-semibold text-[#F8FAFC]">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-[10px] text-[#94A3B8]">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots Indicator - Reduced padding */}
          <div className="flex justify-center gap-1.5 py-3 border-t border-[#1E293B]">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-5 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]'
                    : 'w-1 bg-[#1E293B] hover:bg-[#6366F1]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;