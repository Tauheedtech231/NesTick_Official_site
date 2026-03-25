// app/blogs/[id]/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { 
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  Twitter,
  Linkedin,
  Facebook,
  Link as LinkIcon,
  ChevronRight,
  Sparkles,
  Quote
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
  authorBio?: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

// Sample blog content generator
const getBlogContent = (blog: Blog) => {
  return `
    <div class="blog-content">
      <p class="lead">${blog.excerpt}</p>
      
      <h2>Introduction</h2>
      <p>In today's rapidly evolving digital landscape, staying ahead of the curve is essential for businesses and professionals alike. ${blog.title} represents a significant shift in how we approach modern challenges and opportunities.</p>
      
      <h2>Understanding the Landscape</h2>
      <p>The ${blog.category.toLowerCase()} sector has witnessed unprecedented growth over the past few years. With new technologies emerging daily, professionals need to adapt quickly to remain competitive. This comprehensive guide will walk you through everything you need to know about ${blog.title.toLowerCase()}.</p>
      
      <blockquote>
        "Innovation distinguishes between a leader and a follower." - Steve Jobs
      </blockquote>
      
      <h2>Key Insights and Trends</h2>
      <p>Our analysis reveals several key trends shaping the future of ${blog.category.toLowerCase()}. From artificial intelligence integration to enhanced user experiences, the landscape is transforming rapidly.</p>
      
      <h3>1. Emerging Technologies</h3>
      <p>New tools and platforms are revolutionizing how we approach ${blog.category.toLowerCase()}. Companies that embrace these technologies early gain significant competitive advantages.</p>
      
      <h3>2. Best Practices</h3>
      <p>Industry leaders have developed proven methodologies that deliver results. Implementing these best practices can dramatically improve outcomes and efficiency.</p>
      
      <h2>Practical Applications</h2>
      <p>Understanding theory is important, but practical application is where real value emerges. Here are actionable strategies you can implement today:</p>
      <ul>
        <li>Start with a clear strategy and measurable goals</li>
        <li>Invest in the right tools and technologies</li>
        <li>Build a skilled team with diverse expertise</li>
        <li>Continuously measure and optimize performance</li>
        <li>Stay updated with industry trends and innovations</li>
      </ul>
      
      <h2>Case Studies</h2>
      <p>Several organizations have already achieved remarkable results by implementing these strategies. Their success stories provide valuable insights and inspiration for your journey.</p>
      
      <h2>Future Outlook</h2>
      <p>The future of ${blog.category.toLowerCase()} looks promising. With continued innovation and adoption, we can expect to see even more exciting developments in the coming years.</p>
      
      <h2>Conclusion</h2>
      <p>${blog.title} represents a significant opportunity for growth and innovation. By staying informed and adopting best practices, you can position yourself for success in this dynamic field.</p>
      
      <p>Ready to take the next step? Contact our team of experts to learn how we can help you navigate this exciting journey.</p>
    </div>
  `;
};

// All blogs data (matching the main page)
const allBlogs: Blog[] = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the latest trends shaping the web development landscape, from AI-powered development to edge computing and beyond.',
    content: '',
    category: 'Technology',
    tags: ['Web Development', 'Trends', 'AI', 'Future Tech'],
    author: 'Sarah Johnson',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    authorBio: 'Sarah is a Senior Web Developer with over 10 years of experience in building scalable web applications. She specializes in React, Next.js, and modern web technologies.',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'How AI is Transforming Digital Marketing Strategies',
    excerpt: 'Discover how artificial intelligence is revolutionizing marketing campaigns, personalization, and customer engagement.',
    content: '',
    category: 'AI/ML',
    tags: ['AI', 'Marketing', 'Automation', 'Personalization'],
    author: 'Michael Chen',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    authorBio: 'Michael is a Digital Marketing Strategist and AI enthusiast. He helps businesses leverage AI to enhance their marketing efforts.',
    date: 'Mar 12, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 3,
    title: 'Building Scalable Applications with Next.js 14',
    excerpt: 'Learn best practices for building high-performance, scalable web applications using the latest Next.js features.',
    content: '',
    category: 'Development',
    tags: ['Next.js', 'React', 'Performance', 'Scalability'],
    author: 'David Rodriguez',
    authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
    authorBio: 'David is a Full Stack Developer and Next.js expert. He has built scalable applications for Fortune 500 companies.',
    date: 'Mar 10, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 4,
    title: 'The Complete Guide to Modern POS Systems',
    excerpt: 'Everything you need to know about choosing and implementing a point of sale system for your retail business.',
    content: '',
    category: 'Business',
    tags: ['POS', 'Retail', 'Business', 'Technology'],
    author: 'Aisha Patel',
    authorImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop',
    authorBio: 'Aisha is a Business Technology Consultant specializing in retail solutions and POS systems.',
    date: 'Mar 8, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 5,
    title: 'Startup Success: From Idea to Market in 6 Months',
    excerpt: 'A step-by-step guide for entrepreneurs on how to validate ideas, build MVPs, and launch successful products.',
    content: '',
    category: 'Startup',
    tags: ['Startup', 'MVP', 'Business', 'Entrepreneurship'],
    author: 'Emily Watson',
    authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    authorBio: 'Emily is a Startup Mentor and Product Manager who has helped over 50 startups successfully launch.',
    date: 'Mar 5, 2024',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 6,
    title: 'Mastering Remote Team Productivity',
    excerpt: 'Proven strategies and tools to keep your remote team engaged, productive, and connected.',
    content: '',
    category: 'Productivity',
    tags: ['Remote Work', 'Productivity', 'Team Management', 'Tools'],
    author: 'James Kim',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    authorBio: 'James is a Team Productivity Coach and Remote Work Specialist.',
    date: 'Mar 3, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 7,
    title: 'Understanding Machine Learning Algorithms',
    excerpt: 'A beginner-friendly guide to ML algorithms and their real-world applications.',
    content: '',
    category: 'AI/ML',
    tags: ['Machine Learning', 'AI', 'Data Science', 'Algorithms'],
    author: 'Sarah Johnson',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    authorBio: 'Sarah is a Senior Web Developer with over 10 years of experience in building scalable web applications.',
    date: 'Feb 28, 2024',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 8,
    title: 'The Rise of Low-Code Development',
    excerpt: 'How low-code platforms are changing the way businesses build applications.',
    content: '',
    category: 'Technology',
    tags: ['Low-Code', 'Development', 'Business', 'Innovation'],
    author: 'Michael Chen',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    authorBio: 'Michael is a Digital Marketing Strategist and AI enthusiast.',
    date: 'Feb 25, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 9,
    title: 'E-commerce Trends: What\'s Working in 2024',
    excerpt: 'Latest trends and strategies for successful e-commerce businesses.',
    content: '',
    category: 'Business',
    tags: ['E-commerce', 'Marketing', 'Sales', 'Trends'],
    author: 'Aisha Patel',
    authorImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop',
    authorBio: 'Aisha is a Business Technology Consultant specializing in retail solutions.',
    date: 'Feb 22, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop',
    featured: false,
  },
];

const BlogDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = parseInt(params.id as string);
    const foundBlog = allBlogs.find(b => b.id === id);
    
    if (foundBlog) {
      // Generate content for the blog
      const blogWithContent = {
        ...foundBlog,
        content: getBlogContent(foundBlog)
      };
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBlog(blogWithContent);
      
      // Find related blogs (same category, different id)
      const related = allBlogs
        .filter(b => b.category === foundBlog.category && b.id !== foundBlog.id)
        .slice(0, 3);
      setRelatedBlogs(related);
    } else {
      // Redirect to blogs page if blog not found
      router.push('/blogs');
    }
  }, [params.id, router]);

  const handleShare = async (platform?: string) => {
    const url = window.location.href;
    const title = blog?.title || '';
    
    if (platform === 'copy') {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    }
  };

  // Animation variants
  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#6366F1] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#020617] pt-20 lg:pt-24">
      <article className="relative py-12 lg:py-16 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366F1]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#6366F1] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blogs
            </Link>
          </motion.div>

          {/* Blog Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainerVariants}
            className="mb-8"
          >
            <motion.div variants={fadeInUpVariants} className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-[#6366F1]/10 text-[#6366F1] text-sm font-medium rounded-full">
                {blog.category}
              </span>
              {blog.featured && (
                <span className="px-3 py-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-sm font-medium rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Featured
                </span>
              )}
            </motion.div>

            <motion.h1 
              variants={fadeInUpVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4"
            >
              {blog.title}
            </motion.h1>

            <motion.p 
              variants={fadeInUpVariants}
              className="text-lg text-[#94A3B8] leading-relaxed mb-6"
            >
              {blog.excerpt}
            </motion.p>

            <motion.div 
              variants={fadeInUpVariants}
              className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-b border-[#1E293B]"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={blog.authorImage}
                      alt={blog.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{blog.author}</p>
                    <p className="text-xs text-[#94A3B8]">Author</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#94A3B8]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blog.readTime}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className="p-2 rounded-lg bg-[#0F172A] border border-[#1E293B] hover:border-[#6366F1] transition-colors"
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-[#6366F1] text-[#6366F1]' : 'text-[#94A3B8]'}`} />
                </button>
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="p-2 rounded-lg bg-[#0F172A] border border-[#1E293B] hover:border-[#6366F1] transition-colors"
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-[#94A3B8]'}`} />
                </button>
                <div className="relative">
                  <button
                    onClick={() => setShowShare(!showShare)}
                    className="p-2 rounded-lg bg-[#0F172A] border border-[#1E293B] hover:border-[#6366F1] transition-colors"
                  >
                    <Share2 className="w-4 h-4 text-[#94A3B8]" />
                  </button>
                  {showShare && (
                    <div className="absolute right-0 mt-2 bg-[#0F172A] border border-[#1E293B] rounded-lg shadow-xl overflow-hidden z-10 min-w-[160px]">
                      <button
                        onClick={() => handleShare('twitter')}
                        className="w-full px-4 py-2 text-left text-sm text-[#94A3B8] hover:bg-[#1E293B] hover:text-white transition-colors flex items-center gap-2"
                      >
                        <Twitter className="w-4 h-4" /> Twitter
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="w-full px-4 py-2 text-left text-sm text-[#94A3B8] hover:bg-[#1E293B] hover:text-white transition-colors flex items-center gap-2"
                      >
                        <Linkedin className="w-4 h-4" /> LinkedIn
                      </button>
                      <button
                        onClick={() => handleShare('facebook')}
                        className="w-full px-4 py-2 text-left text-sm text-[#94A3B8] hover:bg-[#1E293B] hover:text-white transition-colors flex items-center gap-2"
                      >
                        <Facebook className="w-4 h-4" /> Facebook
                      </button>
                      <button
                        onClick={() => handleShare('copy')}
                        className="w-full px-4 py-2 text-left text-sm text-[#94A3B8] hover:bg-[#1E293B] hover:text-white transition-colors flex items-center gap-2 border-t border-[#1E293B]"
                      >
                        <LinkIcon className="w-4 h-4" /> {copied ? 'Copied!' : 'Copy Link'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
          </motion.div>

          {/* Blog Content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-2 mb-8 pt-4 border-t border-[#1E293B]"
          >
            <Tag className="w-4 h-4 text-[#94A3B8]" />
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#0F172A] border border-[#1E293B] rounded-full text-xs text-[#94A3B8] hover:border-[#6366F1] hover:text-[#6366F1] transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </motion.div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-r from-[#0F172A] to-[#1E1B3E] rounded-2xl p-6 mb-12 border border-[#2D2B4E]"
          >
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={blog.authorImage}
                  alt={blog.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{blog.author}</h3>
                <p className="text-sm text-[#94A3B8] mb-3">
                  {blog.authorBio || 'Technology enthusiast and industry expert with years of experience in the field.'}
                </p>
                <div className="flex items-center gap-3">
                  <button className="text-sm text-[#6366F1] hover:text-[#8B5CF6] transition-colors flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    Contact Author
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Related Posts */}
          {relatedBlogs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#6366F1]" />
                Related Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    href={`/blogs/${relatedBlog.id}`}
                    className="group bg-[#0F172A] border border-[#1E293B] rounded-xl overflow-hidden hover:border-[#6366F1]/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-[#6366F1]">{relatedBlog.category}</span>
                      <h4 className="text-sm font-semibold text-white mt-2 mb-1 line-clamp-2 group-hover:text-[#6366F1] transition-colors">
                        {relatedBlog.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                        <Calendar className="w-3 h-3" />
                        {relatedBlog.date}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 text-center bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10 rounded-2xl p-8 border border-[#1E293B]"
          >
            <Quote className="w-8 h-8 text-[#6366F1] mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Enjoyed this article?</h3>
            <p className="text-[#94A3B8] mb-4">
              Subscribe to our newsletter to get more insights like this delivered to your inbox.
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-[#0F172A] border border-[#1E293B] rounded-lg text-white placeholder:text-[#94A3B8] focus:outline-none focus:border-[#6366F1]"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-lg hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </article>

      <style jsx global>{`
        .blog-content {
          color: #E2E8F0;
          line-height: 1.8;
        }
        
        .blog-content h2 {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 2rem 0 1rem;
          color: #F8FAFC;
        }
        
        .blog-content h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin: 1.5rem 0 1rem;
          color: #F8FAFC;
        }
        
        .blog-content p {
          margin-bottom: 1.2rem;
          color: #94A3B8;
        }
        
        .blog-content .lead {
          font-size: 1.2rem;
          font-weight: 500;
          color: #C4B5FD;
          border-left: 3px solid #6366F1;
          padding-left: 1rem;
          margin: 1.5rem 0;
        }
        
        .blog-content blockquote {
          margin: 1.5rem 0;
          padding: 1rem 1.5rem;
          background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1));
          border-left: 3px solid #6366F1;
          font-style: italic;
          color: #C4B5FD;
          border-radius: 0.5rem;
        }
        
        .blog-content ul, 
        .blog-content ol {
          margin: 1rem 0;
          padding-left: 1.5rem;
          color: #94A3B8;
        }
        
        .blog-content li {
          margin: 0.5rem 0;
        }
        
        .blog-content code {
          background: #0F172A;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
          color: #C4B5FD;
        }
        
        .blog-content pre {
          background: #0F172A;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1rem 0;
        }
        
        .blog-content a {
          color: #6366F1;
          text-decoration: underline;
        }
        
        .blog-content a:hover {
          color: #8B5CF6;
        }
      `}</style>
    </main>
  );
};

export default BlogDetailPage;