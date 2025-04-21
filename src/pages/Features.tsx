import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Check,
  Zap,
  Shield,
  BarChart,
  Users,
  Globe,
  Sparkles,
  ArrowRight,
  Star,
  ChevronRight,
  Layers,
  Code,
  Cpu,
  Database,
  LineChart,
  Settings,
  Workflow,
  MessageSquare,
  Award,
  Lightbulb,
} from 'lucide-react';

const Features = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const viewportOptions = {
    once: true,
    margin: "-100px"
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-black/[0.02] -z-10"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-600">
                <Sparkles className="mr-2 h-4 w-4" />
                Why MathGPT
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-black via-blue-600 to-black">
                The Future of Math Education
              </h1>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                MathGPT is the first and only AI system that can reliably and accurately interpret and tutor STEM curriculum.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/signup" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/demo" className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50">
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50/50 relative">
          <div className="absolute inset-0 bg-grid-black/[0.02] -z-10"></div>
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center rounded-lg bg-blue-500/10 px-3 py-1 text-sm mb-4 text-blue-600">
                <Sparkles className="mr-2 h-4 w-4" />
                Core Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-black via-blue-600 to-black">
                Powerful Tools for Modern Education
              </h2>
              <p className="max-w-[600px] mx-auto mt-4 text-gray-600 md:text-xl/relaxed">
                Everything you need to enhance math education and boost student success
              </p>
            </div>

            <div className="grid gap-12 lg:gap-24">
              {/* AI Tutor Feature */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-3 mb-4">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black">AI Tutor</h3>
                  <p className="text-gray-600 mb-6">
                    MathGPT includes an accurate, conversational experience AI Tutor that coaches students through math problems by prompting, guiding, and encouraging students on their learning journey.
                  </p>
                  <ul className="grid gap-3">
                    {[
                      "24/7 personalized tutoring",
                      "Thought-provoking questions",
                      "Deep conceptual understanding",
                      "Real-time feedback",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10">
                          <Check className="h-3.5 w-3.5 text-blue-600" />
                        </div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 md:order-2 relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-2xl blur-lg -z-10"></div>
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-1">
                    <img
                      src="https://ext.same-assets.com/3250228889/1045501045.png"
                      alt="AI Tutor Interface"
                      className="rounded-xl overflow-hidden aspect-video object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Course Manager Feature */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-2xl blur-lg -z-10"></div>
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-1">
                    <img
                      src="https://ext.same-assets.com/3250228889/1821207086.png"
                      alt="Course & Assignment Manager"
                      className="rounded-xl overflow-hidden aspect-video object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-3 mb-4">
                    <Layers className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black">Course & Assignment Manager</h3>
                  <p className="text-gray-600 mb-6">
                    MathGPT accelerates course development with a simple content management platform that helps build dynamic course materials and creates unique, cheat-proof formative assessments.
                  </p>
                  <ul className="grid gap-3">
                    {[
                      "Growing library of vetted courses",
                      "Cheat-proof assessments",
                      "Customizable content",
                      "Seamless integration",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10">
                          <Check className="h-3.5 w-3.5 text-blue-600" />
                        </div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-grid-black/[0.02] -z-10"></div>
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center rounded-lg bg-blue-500/10 px-3 py-1 text-sm mb-4 text-blue-600">
                <Sparkles className="mr-2 h-4 w-4" />
                Benefits
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-black via-blue-600 to-black">
                Transform Your Math Education
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Users className="h-6 w-6 text-blue-600" />,
                  title: "Student Success",
                  description: "MathGPT's Generative AI provides accurate, personalized tutoring that coaches students through their math challenges to foster real learning.",
                  features: [
                    "Foundational learning with AI-generated practice problems",
                    "Interactive videos and reflective learning",
                    "24/7 availability and infinite patience"
                  ]
                },
                {
                  icon: <Globe className="h-6 w-6 text-blue-600" />,
                  title: "Institutional Success",
                  description: "Schools achieve metrics that matter: increased course completion rates, student satisfaction, and career success for entire student cohorts.",
                  features: [
                    "Collaborative community sharing",
                    "Tailored institutional accounts",
                    "Enhanced visibility and analytics"
                  ]
                },
                {
                  icon: <Settings className="h-6 w-6 text-blue-600" />,
                  title: "Effortless Integration",
                  description: "MathGPT fits easily into existing institutional systems, course designs, and materials, whether as a standalone solution or LMS complement.",
                  features: [
                    "College bookstore availability",
                    "MyOpenMath compatibility",
                    "Seamless LMS integration"
                  ]
                }
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={viewportOptions}
                >
                  <div className="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors"></div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/10 to-blue-600/10 group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-black">{benefit.title}</h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                  <ul className="mt-4 space-y-2">
                    {benefit.features.map((feature, j) => (
                      <motion.li
                        key={j}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: j * 0.1 }}
                        viewport={viewportOptions}
                      >
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10">
                          <Check className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 -z-10"></div>
          <div className="absolute inset-0 bg-grid-white/[0.05] -z-10"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to transform math education?
                </h2>
                <p className="max-w-[600px] text-white/80 md:text-xl/relaxed">
                  Join thousands of educators already using MathGPT.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/signup" className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-white/90">
                  Try for Free
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-transparent px-8 py-3 text-sm font-medium text-white hover:bg-white/10">
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Features;
