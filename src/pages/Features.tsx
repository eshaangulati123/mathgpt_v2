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
} from 'lucide-react';

const Features = () => {
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
      image: "https://media.mathgpt.ai/wp/2024/10/16000139/mgpt-web2.png"
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
      image: "https://media.mathgpt.ai/wp/2024/10/15225425/mgpt_web1.png"
    },
    {
      icon: Shield,
      title: "Complete Control",
      description: "Instructors maintain full oversight using analytics-based dashboards, whether used for a single assignment or a complete course.",
      details: [
        "Browser lock down for tests & quizzes",
        "Customizable gradebook",
        "Automatic grading system"
      ]
    },
    {
      icon: DollarSign,
      title: "Affordable",
      description: "MathGPT offers a zero-cost OER-friendly option, including OpenStax, to support students and instructors. Expanded capabilities are available at minimal cost per student.",
      details: [
        "Essentials and Advanced plans available",
        "Institutional pricing options",
        "OER-friendly options"
      ]
    },
    {
      icon: Accessibility,
      title: "Compliance Ready & Accessible",
      description: "MathGPT includes accessibility-focused features and is designed to meet the needs of all students, compliant with ADA, VPAT, and FERPA standards.",
      details: [
        "Extended time options",
        "Late submission flexibility",
        "ADA and VPAT compliant"
      ]
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
    <div className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 relative bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col items-center mb-12">
                <img 
                  src="https://media.mathgpt.ai/wp/2024/10/14142203/benefits-heading.png" 
                  alt="Why MathGPT" 
                  className="w-full max-w-3xl h-auto mb-8"
                />
                <div className="text-center max-w-3xl">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4">
                    The First and Only AI System for STEM Education
                  </h1>
                  <p className="text-xl text-gray-600">
                    MathGPT is the first and only AI system that can reliably and accurately interpret and tutor STEM curriculum.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">For Instructors</h3>
                  <p className="text-gray-600">MathGPT saves you time while turbocharging your teaching capacity.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">For Students</h3>
                  <p className="text-gray-600">MathGPT helps you learn while never feeling left behind.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600">
              Discover how MathGPT's advanced features can transform your math learning experience.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
              >
                {feature.image && (
                  <div className="mb-4">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                )}
                <div className="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors"></div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/10 to-blue-600/10 group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
                <ul className="mt-4 space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Experience the transformative impact of MathGPT on education.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-4">
              Our Technology
            </h2>
            <div className="grid gap-6 md:grid-cols-3 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-600">Comprehensive, stakeholder-focused approach that aligns with the values and priorities of the learning environment.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-600">Utilizes proprietary methods and exclusive datasets to deliver highly accurate computations.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-600">Deep, unparalleled understanding of educational material for precise and effective solutions.</p>
              </div>
            </div>
            <div className="relative group max-w-4xl mx-auto p-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://media.mathgpt.ai/wp/2024/10/14085522/feature-ai-tutor.png"
                alt="MathGPT Technology"
                className="relative w-full h-auto rounded-lg shadow-lg transition transform group-hover:scale-[1.01] duration-300"
                style={{ maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features; 