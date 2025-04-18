import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About MathGPT
          </h1>
          <p className="text-xl mb-8">
            Transforming the future of mathematics education with AI-powered tools that students love and instructors trust.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#353337] mb-6">Our Mission</h2>
              <p className="text-lg text-[#353337] mb-6">
                At MathGPT, we're committed to democratizing access to quality mathematics education through advanced AI that adapts to each learner's unique needs.
              </p>
              <p className="text-lg text-[#353337] mb-6">
                We believe that mathematics is foundational to success in many disciplines, yet too many students struggle with traditional learning methods. Our AI-powered platform provides personalized guidance, step-by-step explanations, and adaptive challenges that build confidence and mastery.
              </p>
              <p className="text-lg text-[#353337]">
                For educators, we offer time-saving tools that enhance teaching capacity, provide insights into student progress, and create engaging learning experiences that are cheat-proof and effective.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-6 h-64 w-64 flex items-center justify-center shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-[#f7f7f8]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#353337] mb-12">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
                <img
                  src="https://ext.same-assets.com/3250228889/1417729087.png"
                  alt="Leadership team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#353337] mb-2">Dr. Sarah Johnson</h3>
              <p className="text-[#353337] font-medium text-blue-600 mb-3">Founder & CEO</p>
              <p className="text-[#353337] text-sm">
                Ph.D. in Applied Mathematics with over 15 years of experience in educational technology and AI research.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
                <img
                  src="https://ext.same-assets.com/3250228889/1045501045.png"
                  alt="Leadership team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#353337] mb-2">Michael Chen</h3>
              <p className="text-[#353337] font-medium text-blue-600 mb-3">CTO</p>
              <p className="text-[#353337] text-sm">
                Former AI Research Lead at Google with expertise in machine learning applications for educational platforms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
                <img
                  src="https://ext.same-assets.com/3250228889/1821207086.png"
                  alt="Leadership team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#353337] mb-2">Dr. Robert Kim</h3>
              <p className="text-[#353337] font-medium text-blue-600 mb-3">Chief Education Officer</p>
              <p className="text-[#353337] text-sm">
                Former mathematics professor with 20+ years of experience in curriculum development and educational psychology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#353337] mb-12">
            Our Journey
          </h2>
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* 2020 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-blue-600 mb-1">2020</h3>
                  <p className="font-medium text-[#353337]">MathGPT Founded</p>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-600 z-10"></div>
                <div className="flex-1 md:pl-8">
                  <p className="text-[#353337]">
                    MathGPT was founded with a vision to revolutionize mathematics education through artificial intelligence.
                  </p>
                </div>
              </div>

              {/* 2021 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-blue-600 mb-1">2021</h3>
                  <p className="font-medium text-[#353337]">First Product Launch</p>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-600 z-10"></div>
                <div className="flex-1 md:pl-8">
                  <p className="text-[#353337]">
                    Launched our first beta product, focusing on step-by-step solutions for algebra and calculus problems.
                  </p>
                </div>
              </div>

              {/* 2022 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-blue-600 mb-1">2022</h3>
                  <p className="font-medium text-[#353337]">Major Funding & Growth</p>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-600 z-10"></div>
                <div className="flex-1 md:pl-8">
                  <p className="text-[#353337]">
                    Secured significant funding and expanded our team to 50 employees across engineering, education, and AI research.
                  </p>
                </div>
              </div>

              {/* 2023 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-blue-600 mb-1">2023</h3>
                  <p className="font-medium text-[#353337]">Educational Partnerships</p>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-600 z-10"></div>
                <div className="flex-1 md:pl-8">
                  <p className="text-[#353337]">
                    Established partnerships with over 200 schools and universities, bringing MathGPT to more than 100,000 students.
                  </p>
                </div>
              </div>

              {/* 2024 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-blue-600 mb-1">2024</h3>
                  <p className="font-medium text-[#353337]">Global Expansion</p>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-600 z-10"></div>
                <div className="flex-1 md:pl-8">
                  <p className="text-[#353337]">
                    Expanded to international markets with support for multiple languages and launched enterprise solutions for educational institutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-[#f7f7f8]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#353337] mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">2M+</p>
              <p className="text-[#353337]">Active Users</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">50M+</p>
              <p className="text-[#353337]">Problems Solved</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-4xl md:text-5xl font-bold text-green-600 mb-2">200+</p>
              <p className="text-[#353337]">Educational Partners</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">96%</p>
              <p className="text-[#353337]">Student Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8">
            Experience the future of mathematics education with MathGPT.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup" className="px-8 py-3 bg-white text-indigo-900 font-medium rounded-md hover:bg-gray-100 transition-colors">
              Get Started
            </Link>
            <Link to="/contact" className="px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-indigo-800 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
