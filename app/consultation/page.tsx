// app/consultation/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Sparkles,
  Send,
  CheckCircle,
  Phone,
  Mail,
  User,
  Building,
  Briefcase,
  ArrowRight,
  Calendar,
  Clock,
  MessageSquare,
  Star,
  Shield,
  Rocket
} from 'lucide-react';
import Link from 'next/link';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  industry: string;
  projectDescription: string;
  preferredTime: string;
  budget: string;
}

const ConsultationPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    industry: '',
    projectDescription: '',
    preferredTime: '',
    budget: '',
  });

  const industries = [
    'Education',
    'E-commerce',
    'Construction',
    'Startups',
    'Banking & Finance',
    'Travel',
    'Medical',
    'Other'
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
  ];

  const budgetRanges = [
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Not sure yet',
  ];

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
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        industry: '',
        projectDescription: '',
        preferredTime: '',
        budget: '',
      });
    }, 5000);
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 12,
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
    <main className="min-h-screen bg-[#020617] pt-20 lg:pt-24">
      <section ref={sectionRef} className="relative py-20 lg:py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366F1]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6366F1]/5 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Info */}
            <motion.div
              variants={introContainerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div 
                variants={fromTopVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F172A] border border-[#1E293B]"
              >
                <Sparkles className="w-4 h-4 text-[#6366F1]" />
                <span className="text-sm font-medium bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                  Free Consultation
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1 
                variants={fromTopVariants}
                className="text-4xl md:text-5xl lg:text-5xl font-bold"
              >
                <span className="text-[#F8FAFC]">Let&apos;s Build Your</span>
                <br />
                <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                  Digital Future
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                variants={fromTopVariants}
                className="text-lg text-[#94A3B8] leading-relaxed"
              >
                Schedule a free consultation with our experts. We&apos;ll discuss your business needs, 
                explore opportunities, and create a tailored roadmap for your digital transformation.
              </motion.p>

              {/* Features Grid */}
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
              >
                {[
                  { icon: Clock, text: "30-Minute Session", color: "#6366F1" },
                  { icon: MessageSquare, text: "Expert Advice", color: "#22C55E" },
                  { icon: Star, text: "No Obligation", color: "#F59E0B" },
                  { icon: Shield, text: "100% Confidential", color: "#EF4444" },
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-center gap-3 p-3 bg-[#0F172A]/50 rounded-lg border border-[#1E293B]"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-[${feature.color}]/10 flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-[#6366F1]" />
                      </div>
                      <span className="text-sm text-[#F8FAFC]">{feature.text}</span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                variants={fromBottomVariants}
                className="pt-8 border-t border-[#1E293B]"
              >
                <p className="text-sm text-[#94A3B8] mb-4">
                  Trusted by 200+ businesses worldwide
                </p>
                <div className="flex gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] border-2 border-[#020617] flex items-center justify-center"
                      >
                        <span className="text-xs text-white font-bold">CEO</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                    ))}
                  </div>
                  <span className="text-sm text-[#94A3B8]">4.9/5 Rating</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-2xl blur-xl opacity-20" />
              
              <div className="relative bg-[#0F172A] border border-[#1E293B] rounded-2xl p-6 sm:p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Request Your Free Consultation
                    </h2>

                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-[#020617] border border-[#1E293B] rounded-lg text-white focus:outline-none focus:border-[#6366F1] transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-[#020617] border border-[#1E293B] rounded-lg text-white focus:outline-none focus:border-[#6366F1] transition-colors"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-[#020617] border border-[#1E293B] rounded-lg text-white focus:outline-none focus:border-[#6366F1] transition-colors"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                        Company Name *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <input
                          type="text"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-[#020617] border border-[#1E293B] rounded-lg text-white focus:outline-none focus:border-[#6366F1] transition-colors"
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>

                    {/* Industry */}
                    <div>
                      <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                        Industry *
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <select
                          name="industry"
                          required
                          value={formData.industry}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-[#020617] border border-[#1E293B] rounded-lg text-white focus:outline-none focus:border-[#6366F1] transition-colors appearance-none"
                        >
                          <option value="">Select your industry</option>
                          {industries.map((industry) => (
                            <option key={industry} value={industry}>
                              {industry}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Preferred Time Slot */}
                    <div>
                      <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                        Preferred Time Slot *
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <select
                          name="preferredTime"
                          required
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-[#020617] border border-[#1E293B] rounded-lg text-white focus:outline-none focus:border-[#6366F1] transition-colors appearance-none"
                        >
                          <option value="">Select a time slot</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                        Budget Range *
                      </label>
                      <div className="relative">
                        <Rocket className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <select
                          name="budget"
                          required
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-[#020617] border border-[#1E293B] rounded-lg text-white focus:outline-none focus:border-[#6366F1] transition-colors appearance-none"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div>
                      <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                        Project Description *
                      </label>
                      <textarea
                        name="projectDescription"
                        required
                        rows={4}
                        value={formData.projectDescription}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#020617] border border-[#1E293B] rounded-lg text-white focus:outline-none focus:border-[#6366F1] transition-colors resize-none"
                        placeholder="Tell us about your project, goals, and requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#6366F1]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Schedule Free Consultation
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-center text-[#94A3B8]">
                      By submitting, you agree to our{' '}
                      <Link href="/privacy" className="text-[#6366F1] hover:underline">
                        Privacy Policy
                      </Link>
                    </p>
                  </form>
                ) : (
                  // Success Message
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-4 bg-green-500/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Consultation Scheduled!
                    </h3>
                    <p className="text-[#94A3B8] mb-4">
                      Thank you for booking a consultation with us. Our team will contact you shortly to confirm the details.
                    </p>
                    <p className="text-sm text-[#6366F1]">
                      A confirmation email has been sent to {formData.email}
                    </p>
                    <button
                      onClick={() => window.location.reload()}
                      className="mt-6 inline-flex items-center gap-2 px-6 py-2 bg-[#0F172A] border border-[#1E293B] text-white rounded-lg hover:border-[#6366F1] transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Book Another Consultation
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ConsultationPage;