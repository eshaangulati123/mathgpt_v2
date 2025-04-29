import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ChevronRight, Newspaper, BookOpen, ExternalLink } from 'lucide-react';

interface NewsItem {
  type: 'news';
  date: string;
  title: string;
  description: string;
  source: string;
  readTime: string;
  link: string;
  gradient: string;
}

interface BlogPost {
  type: 'blog';
  title: string;
  author: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
  link: string;
}

type TimelineItem = NewsItem | BlogPost;

const News = () => {
  const viewportOptions = {
    once: true,
    margin: "-100px"
  };

  const newsItems: NewsItem[] = [
    {
      type: 'news',
      date: "January 6, 2025",
      title: "Bay Area innovator uses AI to tackle California students' declining math skills",
      description: "A first-of-its-kind AI math tutoring program aims to help students improve their math skills and cut down on educators' workloads.",
      source: "Mercury News",
      readTime: "5 min read",
      link: "https://www.mercurynews.com/2025/01/06/bay-area-innovator-uses-ai-to-tackle-california-students-declining-math-skills/",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      type: 'news',
      date: "April 10, 2024",
      title: "GotIt! makes MathGPT free to all U.S. state and community colleges",
      description: "The new MathGPT Essentials Version includes course management, assignment management, and a grounded AI tutor.",
      source: "VentureBeat",
      readTime: "4 min read",
      link: "https://venturebeat.com/virtual/gotit-makes-mathgpt-free-to-all-u-s-state-and-community-colleges/",
      gradient: "from-indigo-600 to-indigo-800"
    },
    {
      type: 'news',
      date: "April 27, 2023",
      title: "MathGPT is incoming; how it fits into undergraduate math education",
      description: "The artificial intelligence-based program seeks to revolutionize the way we learn math.",
      source: "The State Press",
      readTime: "3 min read",
      link: "https://www.statepress.com/article/2023/04/mathgpt-math-education",
      gradient: "from-purple-600 to-purple-800"
    },
    {
      type: 'news',
      date: "October 21, 2024",
      title: "This Early Epic and Discord Investor Unveils MathGPT.ai to Bridge Learning Gaps",
      description: "As high failure rates and college closures are rampant across the nation, MathGPT.ai emerges as a solution.",
      source: "Business Wire",
      readTime: "5 min read",
      link: "https://www.businesswire.com/news/home/20241021174004/en/This-Early-Epic-and-Discord-Investor-Unveils-MathGPT.ai-to-Bridge-Learning-Gaps-As-High-Failure-Rates-and-College-Closures-Are-Rampant-Across-the-Nation",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      type: 'news',
      date: "October 16, 2024",
      title: "MathGPT AI Tutor Now Out of Beta",
      description: "The AI-powered math tutoring platform officially launches after successful beta testing.",
      source: "Campus Technology",
      readTime: "4 min read",
      link: "https://campustechnology.com/articles/2024/10/16/mathgpt-ai-tutor-now-out-of-beta.aspx",
      gradient: "from-indigo-600 to-indigo-800"
    },
    {
      type: 'news',
      date: "October 18, 2024",
      title: "How MathGPT Uses Generative AI to Make Mathematics More Accessible to Everyone",
      description: "Exploring the innovative approach of MathGPT in democratizing mathematics education.",
      source: "Forbes",
      readTime: "6 min read",
      link: "https://www.forbes.com/sites/stevenaquino/2024/10/18/how-mathgpt-uses-generative-ai-to-make-mathematics-more-accessible-to-everyone/",
      gradient: "from-purple-600 to-purple-800"
    }
  ];

  const blogPosts: BlogPost[] = [
    {
      type: 'blog',
      title: "From Tutor to Founder: Why I Built MathGPT.ai",
      author: "Hung Tran",
      date: "October 20, 2024",
      excerpt: "Most students weren't struggling because they lacked ability—they simply needed the right guidance and support to succeed in mathematics.",
      category: "Founder's Story",
      readTime: "8 min read",
      link: "https://www.mathgpt.ai/blog/from-tutor-to-founder"
    },
    {
      type: 'blog',
      title: "Comparing DeepSeek's R1, 6 Models and OpenAI's o1",
      author: "MathGPT AI R&D",
      date: "October 18, 2024",
      excerpt: "A deep dive into recall vs mathematical reasoning in LLMs and their impact on AI-powered education.",
      category: "Research",
      readTime: "6 min read",
      link: "https://www.mathgpt.ai/blog/comparing-deepseek-r1"
    },
    {
      type: 'blog',
      title: "Follow-Up with Deepseek-v3: Reasoning vs Recall",
      author: "MathGPT AI R&D",
      date: "October 16, 2024",
      excerpt: "Exploring the evolution of LLM performance on reasoning tasks and its implications for math education.",
      category: "Research",
      readTime: "7 min read",
      link: "https://www.mathgpt.ai/blog/deepseek-v3-followup"
    },
    {
      type: 'blog',
      title: "OpenAI's Reasoning Model o1 vs Google Gemini 2.0 Flash",
      author: "MathGPT AI R&D",
      date: "October 14, 2024",
      excerpt: "Comparative performance on math reasoning using latest models and their potential applications in education.",
      category: "Research",
      readTime: "5 min read",
      link: "https://www.mathgpt.ai/blog/openai-o1-vs-gemini2"
    },
    {
      type: 'blog',
      title: "Recall vs Reasoning: A Case Study with the MATH Dataset",
      author: "MathGPT AI R&D",
      date: "October 12, 2024",
      excerpt: "LLMs are redefining the boundaries of how we assess AI intelligence and its role in transforming education.",
      category: "Research",
      readTime: "6 min read",
      link: "https://www.mathgpt.ai/blog/recall-reasoning-math"
    }
  ];

  // Combine and sort all items by date
  const allItems: TimelineItem[] = [...newsItems, ...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
      </div>

      {/* Hero Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-600">
              <Newspaper className="mr-2 h-4 w-4" />
              Latest Updates
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-black via-blue-600 to-black">
              News & Announcements
            </h1>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
              Stay informed about the latest developments in AI-powered math education
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-[1px] h-full w-[2px] bg-blue-100"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {allItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline dot with glow effect */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-[7px] z-10"
                  initial={{ scale: 0.8, opacity: 0.7 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={viewportOptions}
                >
                  <div className="w-[14px] h-[14px] rounded-full bg-blue-600 relative">
                    <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-15"></div>
                    <motion.div
                      className="absolute -inset-2 rounded-full bg-blue-400"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: [0, 0.4, 0], scale: 1.4 }}
                      transition={{
                        duration: 1.3,
                        repeat: 1,
                        repeatType: "reverse"
                      }}
                      viewport={viewportOptions}
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {item.type === 'news' && (
                      <div className={`relative h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                        <div className="absolute inset-0 bg-grid-white/10" />
                        <div className="absolute top-4 left-4 bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                          {item.source}
                        </div>
                        <div className="text-white text-4xl font-bold opacity-20">
                          {item.source.charAt(0)}
                        </div>
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{item.date}</span>
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{item.readTime}</span>
                      </div>
                      {item.type === 'blog' && (
                        <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 mb-3">
                          {item.category}
                        </div>
                      )}
                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {item.title}
                      </h2>
                      {item.type === 'blog' && (
                        <p className="text-sm text-gray-500 mb-2">By {item.author}</p>
                      )}
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {item.type === 'news' ? item.description : item.excerpt}
                      </p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {item.type === 'news' ? 'Read more' : 'Read article'}
                        {item.type === 'news' ? (
                          <ExternalLink className="w-4 h-4 ml-2" />
                        ) : (
                          <ArrowRight className="w-4 h-4 ml-2" />
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;