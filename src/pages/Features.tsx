import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  BookOpen,
  Users,
  Shield,
  Settings,
  DollarSign,
  Accessibility,
  Zap,
  Sparkles,
  ArrowRight,
  Check,
  ChevronRight,
} from 'lucide-react';

const Features = () => {
  const viewportOptions = {
    once: true,
    margin: "-100px"
  };

  const features = [
    {
      icon: Brain,
      title: "AI Tutor",
      description: "MathGPT includes an accurate, conversational Generative AI Tutor that coaches students through any concept or problem by prompting, guiding, and encouraging students on their learning journey.",
      details: [
        "Thought-provoking questions to deepen understanding",
        "Reliable support that scales to every student",
        "Limitless personalized tutoring"
      ],
      image: "https://media.mathgpt.ai/wp/2024/10/10094136/Image-placeholder-11.png"
    },
    {
      icon: BookOpen,
      title: "Course & Assignment Manager",
      description: "MathGPT accelerates course development using a Generative AI-powered interface to blend textbook and curricular materials, plus access to a growing library of vetted courses.",
      details: [
        "AI-created unique, cheat-proof assessments",
        "Automatic grading system",
        "Seamless learning experience integration"
      ],
      image: "https://media.mathgpt.ai/wp/2024/10/10081812/Image-placeholder-8-1.png"
    },
    {
      icon: Shield,
      title: "Complete Control",
      description: "Instructors maintain full oversight using analytics-based dashboards, whether used for a single assignment or a complete course.",
      details: [
        "Browser lock down for tests & quizzes",
        "Customizable gradebook",
        "Automatic grading system"
      ],
      image: "https://media.mathgpt.ai/wp/2024/10/10081830/Image-placeholder-1-2.png"
    },
    {
      icon: DollarSign,
      title: "Affordable",
      description: "MathGPT offers a zero-cost OER-friendly option, including OpenStax, to support students and instructors. Expanded capabilities are available at minimal cost per student.",
      details: [
        "Essentials and Advanced plans available",
        "Institutional pricing options",
        "OER-friendly options"
      ],
      image: "https://media.mathgpt.ai/wp/2024/10/10081842/Image-placeholder-2-2.png"
    },
    {
      icon: Accessibility,
      title: "Compliance Ready & Accessible",
      description: "MathGPT includes accessibility-focused features and is designed to meet the needs of all students, compliant with ADA, VPAT, and FERPA standards.",
      details: [
        "Extended time options",
        "Late submission flexibility",
        "ADA and VPAT compliant"
      ],
      image: "https://media.mathgpt.ai/wp/2024/10/10094408/Image-placeholder-13.png"
    }
  ];

  const benefits = [
    {
      title: "Student Success",
      description: "MathGPT's Generative AI provides accurate, personalized tutoring that coaches students through their math challenges to foster real learning.",
      features: [
        "Foundational tutoring with AI-generated practice problems",
        "Interactive videos and example tutoring",
        "24/7 availability with infinite patience"
      ]
    },
    {
      title: "Institutional Success",
      description: "Boost grades, graduation rates, retention rates, course completion rates, student satisfaction, and career success for entire student cohorts.",
      features: [
        "Collaborative community sharing",
        "Tailored institutional accounts",
        "Enhanced faculty support"
      ]
    },
    {
      title: "Effortless Integration",
      description: "MathGPT fits easily and seamlessly into existing course structure, compatible with any curricular materials.",
      features: [
        "College bookstore availability",
        "MyOpenMath compatibility",
        "LMS integration options"
      ]
    }
  ];

  return (
    <div className="w-full -mt-24">
      {/* Hero Section */}
      <section className="w-full min-h-[70vh] relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-b-[30%]">
        <div className="absolute inset-0 bg-grid-white/[0.05] -z-10 rounded-b-[30%]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 -z-10 rounded-b-[30%]"></div>
        <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center pt-[120px] pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://media.mathgpt.ai/wp/2024/10/14142203/benefits-heading.png"
              alt="Benefits of MathGPT"
              className="w-full max-w-3xl mx-auto mb-8"
            />
            <p className="text-xl/relaxed text-white/90 mb-6 max-w-2xl mx-auto">
              Discover how MathGPT's advanced features can revolutionize your math education experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-5 md:px-7 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500 mb-3">
              Core Features
            </h2>
            <p className="text-xl text-gray-600">
              Experience the power of AI-driven math education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={viewportOptions}
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-3 rounded-2xl shadow-lg h-full">
                  {feature.image && (
                    <div className="mb-2 overflow-hidden rounded-xl">
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-auto rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-400/10 group-hover:from-blue-500/20 group-hover:to-blue-400/20 transition-colors mb-2">
                    <feature.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <ChevronRight className="h-3 w-3 text-blue-600" />
                        <span className="text-xs text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container px-5 md:px-7 max-w-5xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500 mb-3">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Experience the transformative impact of MathGPT on education
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={viewportOptions}
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 mb-2">{benefit.description}</p>
                  <ul className="space-y-1">
                    {benefit.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <ChevronRight className="h-3 w-3 text-blue-600" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-5 md:px-7 max-w-5xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500 mb-3">
              Our Technology
            </h2>
            <div className="grid gap-4 md:grid-cols-3 mb-8">
              {[
                {
                  title: "Comprehensive Approach",
                  description: "Stakeholder-focused approach that aligns with the values and priorities of the learning environment."
                },
                {
                  title: "Proprietary Methods",
                  description: "Utilizes proprietary methods and exclusive datasets to deliver highly accurate computations."
                },
                {
                  title: "Deep Understanding",
                  description: "Deep, unparalleled understanding of educational material for precise and effective solutions."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={viewportOptions}
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="relative group max-w-4xl mx-auto p-3">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="https://media.mathgpt.ai/wp/2024/10/10082108/illustration-1-1-1024x788.png"
                alt="MathGPT Technology Illustration"
                className="relative w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;