// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Sparkles,
  MessageSquare,
  Users,
  Globe
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Us',
      value: 'nesticktech@gmail.com',
      href: 'mailto:nesticktech@gmail.com',
      color: 'from-[#6366F1] to-[#8B5CF6]',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '+92 (300) 123-4567',
      href: 'tel:+923001234567',
      color: 'from-[#22C55E] to-[#86EFAC]',
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Johar Town, Lahore, Pakistan',
      href: 'https://maps.google.com/?q=Johar+Town+Lahore',
      color: 'from-[#F59E0B] to-[#FBBF24]',
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Mon-Fri: 9AM - 6PM PKT',
      href: '#',
      color: 'from-[#EF4444] to-[#F87171]',
    },
  ];

  const teamMembers = [
    {
      name: 'Abdullah Amin',
      role: 'Senior Business Analyst',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
      color: 'from-[#6366F1] to-[#8B5CF6]',
    },
    {
      name: 'Haris Ashar',
      role: 'Business Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
      color: 'from-[#22C55E] to-[#86EFAC]',
    },
    {
      name: 'Tauheed',
      role: 'Web Developer',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop',
      color: 'from-[#F59E0B] to-[#FBBF24]',
    },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/nesticktech', color: 'hover:text-[#6366F1]' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/nesticktech', color: 'hover:text-[#0A66C2]' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/nesticktech', color: 'hover:text-[#1DA1F2]' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/nesticktech', color: 'hover:text-[#E4405F]' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/nesticktech', color: 'hover:text-[#1877F2]' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        type: 'spring',
        stiffness: 40,
        damping: 8,
        mass: 0.6,
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#020617] pt-20 lg:pt-24 overflow-hidden relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
          alt="Office Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/95 to-[#020617]" />
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#22C55E]/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-[url('/grid-pattern.svg')] opacity-5 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-[#0F172A]/80 backdrop-blur-sm border border-[#1E293B]">
            <MessageSquare className="w-4 h-4 text-[#6366F1]" />
            <span className="text-xs lg:text-sm font-medium text-[#94A3B8]">
              Get in Touch
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-3xl lg:text-5xl xl:text-7xl font-bold text-[#F8FAFC] mb-4">
            Contact{' '}
            <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 lg:mb-16"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm`} />
                <Link
                  href={info.href}
                  className="relative block bg-[#0F172A]/80 backdrop-blur-sm border border-[#1E293B] rounded-xl p-5 hover:border-[#6366F1]/30 transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${info.color} p-2.5 mb-3`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-[#94A3B8] mb-1">{info.label}</h3>
                  <p className="text-sm lg:text-base text-[#F8FAFC] font-medium">{info.value}</p>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2"
          >
            <motion.div variants={itemVariants} className="bg-[#0F172A]/80 backdrop-blur-sm border border-[#1E293B] rounded-2xl p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-[#F8FAFC] mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#94A3B8] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#020617]/80 border border-[#1E293B] rounded-lg text-[#F8FAFC] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1]/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#94A3B8] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#020617]/80 border border-[#1E293B] rounded-lg text-[#F8FAFC] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1]/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone & Subject Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#94A3B8] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#020617]/80 border border-[#1E293B] rounded-lg text-[#F8FAFC] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1]/20 transition-all duration-300"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#94A3B8] mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#020617]/80 border border-[#1E293B] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1]/20 transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project Discussion">Project Discussion</option>
                      <option value="Support">Support</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#020617]/80 border border-[#1E293B] rounded-lg text-[#F8FAFC] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1]/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#6366F1]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {/* Form Status Messages */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-lg text-[#22C55E]"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-lg text-[#EF4444]"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm">Something went wrong. Please try again.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Meet the Team - With Images */}
            <motion.div variants={itemVariants} className="bg-[#0F172A]/80 backdrop-blur-sm border border-[#1E293B] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-[#6366F1]" />
                <h3 className="text-lg font-semibold text-[#F8FAFC]">Our Team</h3>
              </div>
              
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#6366F1] transition-all duration-300">
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20`} />
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#6366F1] transition-colors">
                        {member.name}
                      </p>
                      <p className="text-xs text-[#94A3B8]">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Location - Johar Town, Lahore */}
            <motion.div variants={itemVariants} className="bg-[#0F172A]/80 backdrop-blur-sm border border-[#1E293B] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#6366F1]" />
                <h3 className="text-lg font-semibold text-[#F8FAFC]">Our Location</h3>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm text-[#F8FAFC] font-medium">Johar Town, Lahore</p>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  We're located in the heart of Johar Town, Lahore. Easy access from main boulevard and nearby commercial areas.
                </p>
                
                {/* Location Image */}
                <div className="relative w-full h-32 rounded-lg overflow-hidden mt-3 group">
                  <Image
                    src="https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2070&auto=format&fit=crop"
                    alt="Johar Town Lahore"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent" />
                  <Link 
                    href="https://maps.google.com/?q=Johar+Town+Lahore" 
                    target="_blank"
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#0F172A]/90 backdrop-blur-sm border border-[#1E293B] px-3 py-1.5 rounded-lg text-xs text-[#94A3B8] hover:text-[#6366F1] hover:border-[#6366F1] transition-all duration-300 flex items-center gap-1"
                  >
                    <MapPin className="w-3 h-3" />
                    View on Maps
                  </Link>
                </div>
              </div>
            </motion.div>

       
         
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;