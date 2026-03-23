// app/blogs/page.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { useRef, useState, useMemo, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search,
  X,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen,
  ChevronRight
} from 'lucide-react';

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

const BlogsPage = () => {
  const sectionRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Categories
  const categories = ['All', 'Technology', 'Business', 'Development', 'AI/ML', 'Startup', 'Productivity'];

  // Blogs Data
  const blogs: Blog[] = useMemo(() => [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the web development landscape, from AI-powered development to edge computing and beyond.',
      content: 'Full content here...',
      category: 'Technology',
      tags: ['Web Development', 'Trends', 'AI', 'Future Tech'],
      author: 'Sarah Johnson',
      authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
      date: 'Mar 15, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop',
      featured: true,
    },
    {
      id: 2,
      title: 'How AI is Transforming Digital Marketing Strategies',
      excerpt: 'Discover how artificial intelligence is revolutionizing marketing campaigns, personalization, and customer engagement.',
      content: 'Full content here...',
      category: 'AI/ML',
      tags: ['AI', 'Marketing', 'Automation', 'Personalization'],
      author: 'Michael Chen',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
      date: 'Mar 12, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
      featured: false,
    },
    {
      id: 3,
      title: 'Building Scalable Applications with Next.js 14',
      excerpt: 'Learn best practices for building high-performance, scalable web applications using the latest Next.js features.',
      content: 'Full content here...',
      category: 'Development',
      tags: ['Next.js', 'React', 'Performance', 'Scalability'],
      author: 'David Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
      date: 'Mar 10, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
      featured: true,
    },
    {
      id: 4,
      title: 'The Complete Guide to Modern POS Systems',
      excerpt: 'Everything you need to know about choosing and implementing a point of sale system for your retail business.',
      content: 'Full content here...',
      category: 'Business',
      tags: ['POS', 'Retail', 'Business', 'Technology'],
      author: 'Aisha Patel',
      authorImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop',
      date: 'Mar 8, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
      featured: false,
    },
    {
      id: 5,
      title: 'Startup Success: From Idea to Market in 6 Months',
      excerpt: 'A step-by-step guide for entrepreneurs on how to validate ideas, build MVPs, and launch successful products.',
      content: 'Full content here...',
      category: 'Startup',
      tags: ['Startup', 'MVP', 'Business', 'Entrepreneurship'],
      author: 'Emily Watson',
      authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
      date: 'Mar 5, 2024',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop',
      featured: false,
    },
    {
      id: 6,
      title: 'Mastering Remote Team Productivity',
      excerpt: 'Proven strategies and tools to keep your remote team engaged, productive, and connected.',
      content: 'Full content here...',
      category: 'Productivity',
      tags: ['Remote Work', 'Productivity', 'Team Management', 'Tools'],
      author: 'James Kim',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
      date: 'Mar 3, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
      featured: false,
    },
    {
      id: 7,
      title: 'Understanding Machine Learning Algorithms',
      excerpt: 'A beginner-friendly guide to ML algorithms and their real-world applications.',
      content: 'Full content here...',
      category: 'AI/ML',
      tags: ['Machine Learning', 'AI', 'Data Science', 'Algorithms'],
      author: 'Sarah Johnson',
      authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
      date: 'Feb 28, 2024',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
      featured: false,
    },
    {
      id: 8,
      title: 'The Rise of Low-Code Development',
      excerpt: 'How low-code platforms are changing the way businesses build applications.',
      content: 'Full content here...',
      category: 'Technology',
      tags: ['Low-Code', 'Development', 'Business', 'Innovation'],
      author: 'Michael Chen',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
      date: 'Feb 25, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop',
      featured: false,
    },
    {
      id: 9,
      title: 'E-commerce Trends: What\'s Working in 2024',
      excerpt: 'Latest trends and strategies for successful e-commerce businesses.',
      content: 'Full content here...',
      category: 'Business',
      tags: ['E-commerce', 'Marketing', 'Sales', 'Trends'],
      author: 'Aisha Patel',
      authorImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop',
      date: 'Feb 22, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop',
      featured: false,
    },
  ], []);

  // Filter blogs based on search and category
  const filteredBlogs = useMemo(() => {
    let filtered = blogs;
    
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query) ||
        blog.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }
    
    return filtered;
  }, [searchQuery, selectedCategory, blogs]);

  const featuredBlogs = blogs.filter(blog => blog.featured);
  const regularBlogs = filteredBlogs.filter(blog => !blog.featured);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('All');
  }, []);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
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
    <main className="min-h-screen bg-[#020617] pt-20 lg:pt-24">
      <section
        ref={sectionRef}
        className="relative py-20 lg:py-24 bg-[#020617] overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366F1]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Section - Direct animation without InView */}
          <motion.div
            variants={introContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
          >
            <motion.div 
              variants={fromTopVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F172A] border border-[#1E293B] mb-4"
            >
              <BookOpen className="w-4 h-4 text-[#6366F1]" />
              <span className="text-sm font-medium bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                Our Blog
              </span>
            </motion.div>

            <motion.h2 
              variants={fromTopVariants}
              className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-3"
            >
              Insights &{' '}
              <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                Perspectives
              </span>
            </motion.h2>

            <motion.p 
              variants={fromTopVariants}
              className="text-base text-[#94A3B8] leading-relaxed max-w-2xl mx-auto"
            >
              Stay updated with the latest trends, insights, and expert perspectives from our team.
            </motion.p>

            <motion.div 
              variants={fromBottomVariants}
              className="flex flex-wrap justify-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
                <span className="text-sm text-[#94A3B8]">50+ Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                <span className="text-sm text-[#94A3B8]">Weekly Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                <span className="text-sm text-[#94A3B8]">Expert Insights</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-3xl mx-auto mb-8"
          >
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-xl opacity-0 transition-opacity duration-300 ${isSearchFocused ? 'opacity-20' : ''}`} />
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-[#94A3B8]" />
                <input
                  type="text"
                  placeholder="Search articles by title, category, or tags..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full bg-[#0F172A] border border-[#1E293B] rounded-xl py-4 pl-12 pr-12 text-[#F8FAFC] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#6366F1] transition-colors duration-300"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 p-1 rounded-full hover:bg-[#1E293B] transition-colors"
                  >
                    <X className="w-4 h-4 text-[#94A3B8]" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#6366F1] text-white shadow-lg shadow-[#6366F1]/25'
                    : 'bg-[#0F172A] border border-[#1E293B] text-[#94A3B8] hover:border-[#6366F1] hover:text-[#6366F1]'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Results Count */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-sm text-[#94A3B8]">
              Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'}
            </span>
          </div>

          {/* Featured Blog Section */}
          {featuredBlogs.length > 0 && selectedCategory === 'All' && !searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-16"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#6366F1]" />
                Featured Article
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredBlogs.slice(0, 1).map((blog) => (
                  <Link href={`/blogs/${blog.id}`} key={blog.id} className="group">
                    <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl overflow-hidden hover:border-[#6366F1]/30 transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-[#6366F1] text-white text-xs font-medium rounded-full">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-xs text-[#6366F1]">{blog.category}</span>
                          <div className="flex items-center gap-1 text-xs text-[#94A3B8]">
                            <Calendar className="w-3 h-3" />
                            {blog.date}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-[#94A3B8]">
                            <Clock className="w-3 h-3" />
                            {blog.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#6366F1] transition-colors duration-300 line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-[#94A3B8] mb-4 line-clamp-2">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                              <Image
                                src={blog.authorImage}
                                alt={blog.author}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="text-sm text-[#94A3B8]">{blog.author}</span>
                          </div>
                          <span className="text-[#6366F1] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* Blogs Grid */}
          {filteredBlogs.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {(selectedCategory !== 'All' || searchQuery ? filteredBlogs : regularBlogs).map((blog) => (
                <motion.div
                  key={blog.id}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-lg" />
                  
                  <Link href={`/blogs/${blog.id}`} className="block relative bg-[#0F172A] border border-[#1E293B] rounded-xl overflow-hidden hover:border-transparent transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-xs px-2 py-1 bg-[#6366F1]/10 text-[#6366F1] rounded-full">
                          {blog.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-[#94A3B8]">
                          <Calendar className="w-3 h-3" />
                          {blog.date}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-[#94A3B8]">
                          <Clock className="w-3 h-3" />
                          {blog.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6366F1] transition-colors duration-300 line-clamp-2">
                        {blog.title}
                      </h3>
                      
                      <p className="text-sm text-[#94A3B8] mb-3 line-clamp-2">
                        {blog.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="relative w-6 h-6 rounded-full overflow-hidden">
                            <Image
                              src={blog.authorImage}
                              alt={blog.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-xs text-[#94A3B8]">{blog.author}</span>
                        </div>
                        <span className="text-[#6366F1] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-[#0F172A] rounded-full flex items-center justify-center border border-[#1E293B]">
                <Search className="w-8 h-8 text-[#94A3B8]" />
              </div>
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">No articles found</h3>
              <p className="text-[#94A3B8] mb-6">
                Try adjusting your search or filter to find what you&apos;re looking for.
              </p>
              <button
                onClick={clearSearch}
                className="px-6 py-3 bg-[#6366F1] text-white rounded-xl hover:bg-[#8B5CF6] transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
};

export default BlogsPage;