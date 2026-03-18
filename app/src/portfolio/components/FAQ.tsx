// components/FAQ.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Mail, MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What services does Nestick Tech offer?",
      answer: "We offer a comprehensive range of digital solutions including Web Development, POS Systems, LMS Platforms, Mobile Apps, AI Solutions, and IT/Cyber Security services. Our team specializes in creating custom, scalable solutions tailored to your business needs.",
    },
    {
      id: 2,
      question: "How long does it take to develop a project?",
      answer: "Project timelines vary depending on complexity and requirements. A typical web application can take 2-4 months, while more complex projects like AI systems or comprehensive POS solutions may take 4-6 months. We provide detailed timelines during the consultation phase.",
    },
    {
      id: 3,
      question: "What technologies do you use?",
      answer: "We use modern technologies including React, Next.js, Node.js, Python, TypeScript, MongoDB, PostgreSQL, and various cloud platforms. Our tech stack is chosen to ensure scalability, performance, and maintainability of your project.",
    },
    {
      id: 4,
      question: "Do you provide ongoing support after launch?",
      answer: "Yes, we offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements. We have flexible support plans to suit different business needs.",
    },
    {
      id: 5,
      question: "How much does a typical project cost?",
      answer: "Project costs vary based on requirements, complexity, and timeline. We provide transparent pricing and detailed quotes after understanding your specific needs. Contact us for a free consultation and estimate.",
    },
    {
      id: 6,
      question: "Can you integrate with existing systems?",
      answer: "Absolutely! We specialize in integrating new solutions with your existing infrastructure. Whether it's legacy systems, third-party APIs, or existing databases, we ensure seamless integration and data flow.",
    },
    {
      id: 7,
      question: "What is your development process?",
      answer: "Our process includes: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development & Testing, 4) Deployment & Launch, and 5) Ongoing Support. We follow agile methodology with regular client updates.",
    },
    {
      id: 8,
      question: "Do you work with startups?",
      answer: "Yes, we love working with startups! We offer flexible engagement models and scalable solutions that grow with your business. Our team helps startups from MVP development to full-scale products.",
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 8, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 8,
        mass: 0.4,
        duration: 0.3,
      },
    },
  };

  return (
    <section className="relative py-16 lg:py-20 bg-[#020617] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#6366F1]/5 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#8B5CF6]/5 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Left aligned */}
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mb-10 lg:mb-12 text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-[#6366F1]" />
            <span className="text-sm font-medium text-[#6366F1]">FAQ</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-3">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-[#94A3B8] max-w-2xl">
            Find answers to common questions about our services and process.
          </p>
          
          <div className="mt-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full" />
          </div>
        </motion.div>

        {/* FAQ Items - Full width */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          {faqData.map((faq) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="mb-2 w-full"
            >
              <div
                className={`bg-[#0F172A] border border-[#1E293B] rounded-xl overflow-hidden transition-all duration-200 w-full ${
                  openItems.includes(faq.id) ? 'shadow-md shadow-[#6366F1]/10' : ''
                }`}
              >
                {/* Question Button - Full width */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-4 py-3.5 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-2 flex-1">
                    <span className="w-5 h-5 rounded-full bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] text-[10px] font-bold">
                      {faq.id}
                    </span>
                    <span className="text-[#F8FAFC] text-sm lg:text-base font-medium group-hover:text-[#6366F1] transition-colors duration-200">
                      {faq.question}
                    </span>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex-shrink-0 ml-2"
                  >
                    <ChevronDown className={`w-4 h-4 ${
                      openItems.includes(faq.id) ? 'text-[#6366F1]' : 'text-[#94A3B8]'
                    }`} />
                  </motion.div>
                </button>

                {/* Answer Panel - Full width */}
                <AnimatePresence>
                  {openItems.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-3.5 pt-2 border-t border-[#1E293B]">
                        <div className="flex gap-2">
                          <div className="w-5 flex-shrink-0" /> {/* Spacer for alignment with number */}
                          <p className="text-[#94A3B8] text-xs lg:text-sm leading-relaxed flex-1">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Still Have Questions - Full width */}
        <motion.div
          initial={{ y: 8, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="w-full mt-10 lg:mt-12"
        >
          <div className="bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10 border border-[#1E293B] rounded-xl p-6 lg:p-8 text-center">
            <h3 className="text-lg lg:text-xl font-bold text-[#F8FAFC] mb-2">
              Still Have Questions?
            </h3>
            
            <p className="text-[#94A3B8] text-sm mb-5 max-w-lg mx-auto">
              Can't find the answer you're looking for? Reach out to our team.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#6366F1]/25 transition-all duration-200 text-xs sm:text-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact Us
              </Link>
              
              <Link
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#0F172A] border border-[#1E293B] text-white font-medium rounded-lg hover:border-[#6366F1] hover:bg-[#6366F1]/5 transition-all duration-200 text-xs sm:text-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Us
              </Link>
              
              <Link
                href="/live-chat"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#0F172A] border border-[#1E293B] text-white font-medium rounded-lg hover:border-[#6366F1] hover:bg-[#6366F1]/5 transition-all duration-200 text-xs sm:text-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Live Chat
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;