import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Student Success',
      description: 'MathGPT\'s Generative AI provides accurate, personalized tutoring that coaches students through their math challenges to foster real learning.',
      features: [
        'Foundational tutoring using AI generated practice problems',
        'Interactive videos and example tutoring',
        'AI Tutor available 24/7',
        'Better student outcomes'
      ]
    },
    {
      title: 'Institutional Success',
      description: 'Boost grades, graduation rates, retention rates, course completion rates, student satisfaction, and career success for entire student cohorts.',
      features: [
        'Collaborative community sharing',
        'Tailored institutional accounts',
        'Enhanced faculty support',
        'Improved student metrics'
      ]
    },
    {
      title: 'Effortless Integration',
      description: 'MathGPT fits easily and seamlessly into existing course structure, compatible with any curricular materials.',
      features: [
        'Fully functional standalone solution',
        'Compatible with any LMS',
        'Available through college bookstores',
        'Fully compatible with MyOpenMath'
      ]
    },
    {
      title: 'Complete Control',
      description: 'Instructors trust MathGPT to maintain full oversight using analytics-based dashboards.',
      features: [
        'Browser lock down for tests & quizzes',
        'Customizable gradebook',
        'Automatic grading',
        'Analytics-based dashboards'
      ]
    },
    {
      title: 'Affordable',
      description: 'MathGPT will always offer a zero-cost OER-friendly option, including OpenStax, to support students and instructors.',
      features: [
        'Zero-cost OER-friendly option',
        'Essentials and Advanced plans',
        'Institutional pricing available',
        'Minimal cost per student'
      ]
    },
    {
      title: 'Compliance Ready & Accessible',
      description: 'MathGPT includes accessibility-focused features and is designed with compliance in mind to meet the needs of all students.',
      features: [
        'ADA compliant',
        'VPAT compliant',
        'FERPA compliant',
        'Extended time and late submission options'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Why MathGPT?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MathGPT is the first and only AI system that can reliably and accurately interpret and tutor STEM curriculum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {benefit.description}
              </p>
              <ul className="space-y-3">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="/signup"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Create free instructor account
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits; 