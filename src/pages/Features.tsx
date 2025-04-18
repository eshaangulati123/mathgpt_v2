import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div className="w-full">
      {/* Why MathGPT Section */}
      <section className="bg-[#f7f7f8] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#353337] mb-6">
            Why MathGPT
          </h1>
          <p className="text-lg text-[#353337] max-w-2xl mb-8">
            MathGPT is the first and only AI system that can reliably and accurately interpret and tutor STEM curriculum.
          </p>
          <ul className="space-y-3 mb-8 max-w-2xl">
            <li className="flex items-start">
              <span className="text-[#353337] mr-2">•</span>
              <span>For instructors: MathGPT helps you scale while turbocharging your teaching capacity.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#353337] mr-2">•</span>
              <span>For students: MathGPT helps you learn while never feeling left behind.</span>
            </li>
          </ul>
          <div className="mt-6">
            <img
              src="https://ext.same-assets.com/3250228889/1417729087.png"
              alt="MathGPT Interface"
              className="w-full max-w-2xl h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-[#353337] mb-12">
            Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* AI Tutor */}
            <div className="flex flex-col">
              <div className="h-64 bg-[#f7f7f8] rounded-lg mb-6 overflow-hidden">
                <img
                  src="https://ext.same-assets.com/3250228889/1045501045.png"
                  alt="AI Tutor Interface"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#353337] mb-3">
                AI Tutor
              </h3>
              <p className="text-[#353337] mb-4">
                MathGPT includes an accurate, conversational experience AI Tutor that coaches students through math problems by prompting, guiding, and encouraging students on their learning journey.
              </p>
              <p className="text-[#353337]">
                Rather than simply giving answers, the Tutor asks students thought-provoking questions alongside the material, deepening their understanding of key concepts. This empowers instructors to support every student with limitless personalized tutoring.
              </p>
            </div>

            {/* Course & Assignment Manager */}
            <div className="flex flex-col">
              <div className="h-64 bg-[#f7f7f8] rounded-lg mb-6 overflow-hidden">
                <img
                  src="https://ext.same-assets.com/3250228889/1821207086.png"
                  alt="Course & Assignment Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#353337] mb-3">
                Course & Assignment Manager
              </h3>
              <p className="text-[#353337] mb-4">
                MathGPT accelerates an instructor's course development with a simple content management platform that helps them build dynamic course materials such as access to a growing library of vetted and customizable courses. The system creates unique, cheat-proof formative assessments for each student automatically.
              </p>
              <p className="text-[#353337]">
                Regardless of course, all course content and assignments are enhanced by MathGPT's AI Tutor, providing a seamless learning experience for every student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Sections */}
      <section className="py-16 px-4 bg-[#f7f7f8]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#353337] mb-12">
            Benefits
          </h2>

          {/* Student Success */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="flex justify-center">
              <img
                src="https://ext.same-assets.com/3250228889/710266577.png"
                alt="Student Success"
                className="h-40 w-auto"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-[#353337] mb-3">
                Student Success
              </h3>
              <p className="text-[#353337] mb-4">
                MathGPT's Generative AI provides accurate, personalized tutoring that coaches students through their math challenges to foster real learning.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#353337] mr-2">•</span>
                  <span>Foundational learning using AI-generated practice problems, interactive videos, reflective learning, all leading to better student outcomes.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#353337] mr-2">•</span>
                  <span>AI Tutor is infinitely patient and available to students 24/7.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Institutional Success */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="flex justify-center">
              <img
                src="https://ext.same-assets.com/3250228889/965203637.png"
                alt="Institutional Success"
                className="h-40 w-auto"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-[#353337] mb-3">
                Institutional Success
              </h3>
              <p className="text-[#353337] mb-4">
                Schools achieve metrics that matter: increased course completion rates, student satisfaction, and career success for entire student cohorts.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#353337] mr-2">•</span>
                  <span>Collaborative community sharing to inspire and exchange new teaching strategies.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#353337] mr-2">•</span>
                  <span>Tailored institutional accounts for enhanced visibility.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Effortless Integration */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="flex justify-center">
              <img
                src="https://ext.same-assets.com/3250228889/3860528601.png"
                alt="Effortless Integration"
                className="h-40 w-auto"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-[#353337] mb-3">
                Effortless Integration
              </h3>
              <p className="text-[#353337] mb-4">
                MathGPT fits easily and seamlessly into existing institutional systems, course designs, and materials. It's also fully functional as a standalone solution, or as a complement to an existing LMS.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#353337] mr-2">•</span>
                  <span>Easily available through college bookstores, including access code distribution.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#353337] mr-2">•</span>
                  <span>Fully compatible with MyOpenMath.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Complete Control */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="flex justify-center">
              <img
                src="https://ext.same-assets.com/3250228889/3701680159.png"
                alt="Complete Control"
                className="h-40 w-auto"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-[#353337] mb-3">
                Complete Control
              </h3>
              <p className="text-[#353337] mb-4">
                Instructors trust MathGPT to maintain full oversight using analytics-based dashboards, whether used for a single assignment or a complete course.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#353337] mr-2">•</span>
                  <span>Browser lock down for tests & quizzes.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#353337] mr-2">•</span>
                  <span>Customizable gradebook with automatic syncing.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Affordable */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="flex justify-center">
              <img
                src="https://ext.same-assets.com/3250228889/2018117347.png"
                alt="Affordable"
                className="h-40 w-auto"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-[#353337] mb-3">
                Affordable
              </h3>
              <p className="text-[#353337] mb-4">
                MathGPT will always offer a zero-cost OER-friendly option, including hopefully, to support students and instructors. Expanded capabilities are available at nominal cost per student.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#353337] mr-2">•</span>
                  <span>Essentials and Advanced plans available.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#353337] mr-2">•</span>
                  <span>Institutional pricing available by request.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 px-4 bg-[#f1ecf9]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#353337] mb-6">
            Compliance Ready & Accessible
          </h2>
          <p className="text-lg text-[#353337] mb-8">
            MathGPT includes accessibility-focused features, such as extended time and late submission options on assignments. MathGPT is designed with compliance and accessibility in mind to meet the needs of all students, and complies with ADA, W3C, WCAG.
          </p>
          <Link to="/signup" className="inline-block px-6 py-3 rounded-md bg-[#353337] text-white font-medium hover:bg-black transition-colors">
            Create free account
          </Link>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#353337] mb-8">
            Our Technology
          </h2>
          <ul className="space-y-4 list-disc pl-6">
            <li className="text-[#353337]">
              <span className="font-medium">Comprehensive, domain-aware AI</span> - Designed to adapt and scale with the needs and priorities of the learning environment.
            </li>
            <li className="text-[#353337]">
              <span className="font-medium">Utilizes proprietary methods and neural networks</span> - For highly accurate computations.
            </li>
            <li className="text-[#353337]">
              <span className="font-medium">Deep, contextualized instructional material</span> - For precise and effective solutions.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Features;
