// components/TestimonialsSlider.tsx
'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

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

  // Duplicate testimonials for seamless infinite scroll (computed at build time)
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="relative py-20 lg:py-24 bg-[#020617] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#6366F1]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Left Aligned */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-[#0F172A] border border-[#1E293B]">
            <Quote className="w-4 h-4 text-[#6366F1]" />
            <span className="text-xs lg:text-sm font-medium text-[#94A3B8]">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-3">
            What Our{' '}
            <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#94A3B8]">
            Don&apos;t just take our word for it — hear from some of our satisfied clients
          </p>
          
          {/* Decorative line */}
          <div className="mt-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full" />
          </div>
        </motion.div>

        {/* Continuous Slider */}
        <div className="relative overflow-hidden" ref={sliderRef}>
          <motion.div
            className="flex gap-6"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[350px] md:w-[400px]"
              >
                <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-6 h-full hover:border-[#6366F1] transition-all duration-300 group">
                  {/* Rating stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? 'text-[#F59E0B] fill-[#F59E0B]'
                            : 'text-[#1E293B]'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-[#F8FAFC] text-sm mb-6 line-clamp-4">
                    {testimonial.content}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#6366F1]">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <h4 className="text-[#F8FAFC] font-semibold text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-[#94A3B8]">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default TestimonialsSlider;