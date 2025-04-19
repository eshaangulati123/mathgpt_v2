import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // Animation effect on scroll
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('animate-fadeIn');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    // Trigger once on load
    animateOnScroll();

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section with Glass Morphism and Animation */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 min-h-[680px] px-4 py-20 overflow-hidden">
        {/* Background animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-blue-400 opacity-10 animate-float"></div>
          <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-purple-400 opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 left-1/3 w-40 h-40 rounded-full bg-indigo-400 opacity-10 animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between z-10">
          {/* Hero Text with Animation */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 animate-fadeInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#353337] mb-6 leading-tight">
              AI-Powered Tutoring & Teaching that <span className="text-blue-600">Students Love</span> and <span className="text-indigo-600">Instructors Trust</span>
            </h1>
            <p className="text-lg text-[#353337] mb-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              MathGPT is transforming the future of post-secondary education with personalized learning experiences.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-br from-indigo-600 to-blue-600 text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: '0.6s' }}
            >
              Create free account
              <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Hero Image with Glass Effect */}
          <div className="lg:w-1/2 relative animate-fadeInRight">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-2xl blur-3xl transform -rotate-6 scale-105"></div>
            <img
              src="https://ext.same-assets.com/600722722/2097852064.png"
              alt="MathGPT interface with student and tutor"
              className="relative w-full h-auto max-w-[550px] mx-auto rounded-xl shadow-2xl"
            />
            {/* Floating badges */}
            <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-xl animate-float">
              <div className="flex items-center">
                <div className="bg-green-500 h-3 w-3 rounded-full mr-2"></div>
                <span className="text-sm font-medium">99.8% Accuracy Rate</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-xl animate-float" style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center">
                <div className="bg-blue-500 h-3 w-3 rounded-full mr-2"></div>
                <span className="text-sm font-medium">24/7 AI Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Logo Bar - right after hero */}
      <section className="py-10 overflow-hidden bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-lg md:text-xl font-semibold text-center text-[#353337] mb-8">
            Trusted by <span className="text-blue-600">prestigious institutions</span>
          </h3>

          <div className="relative w-full overflow-hidden">
            <div className="logos-container">
              <div className="logos-scroll animate-scroll-logos">
                {logos.map((logo, index) => (
                  <div
                    key={`${logo.alt}-${index}`}
                    className="logo-item"
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="h-16 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
                {/* Duplicate logos for seamless scrolling */}
                {logos.map((logo, index) => (
                  <div
                    key={`${logo.alt}-duplicate-${index}`}
                    className="logo-item"
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="h-16 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is MathGPT Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://ext.same-assets.com/600722722/1706907034.png"
                alt="MathGPT in action"
                className="relative w-full h-auto max-w-[500px] mx-auto rounded-lg shadow-lg transition transform group-hover:scale-[1.01] duration-300"
              />
            </div>
          </div>
          <div className="lg:w-1/2 mb-10 lg:mb-0 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-[#353337] mb-4 relative">
              What is MathGPT?
              <div className="h-1 w-20 bg-blue-500 mt-2"></div>
            </h2>
            <p className="text-lg text-[#353337] mb-6">
              An AI-powered, cheat-proof math tutor and time-saving course manager that unleashes teaching potential to build student confidence and achieve success.
            </p>
            <Link to="/features" className="inline-flex items-center px-6 py-3 rounded-md bg-[#353337] text-white font-medium shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              Explore MathGPT
              <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#353337] mb-4 animate-on-scroll">
            Find out what our most successful instructors say about us
          </h2>
          <p className="text-lg text-center text-[#353337] mb-12 max-w-3xl mx-auto animate-on-scroll">
            It's always the best source to hear from others who have already worked with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll">
              <div className="text-4xl text-blue-600 mb-4">❝</div>
              <p className="text-lg text-[#353337] mb-6">
                Integrating MathGPT into my classroom has been a transformative experience. It serves as a first line of defense in supporting our students, acting like an instant tutor that offers immediate help with mathematical questions at any level.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg mr-4">AB</div>
                <div>
                  <div className="font-semibold">Adrienne Baldwin</div>
                  <div className="text-sm text-gray-600">Chattahoochee Technical College</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll">
              <div className="text-4xl text-indigo-600 mb-4">❝</div>
              <p className="text-lg text-[#353337] mb-6">
                I like that MathGPT gave the students a way to engage with AI to learn, but with academic controls for correctness and safeguarding the final answer.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-lg mr-4">JT</div>
                <div>
                  <div className="font-semibold">Jesse Taylor</div>
                  <div className="text-sm text-gray-600">Angelo State University</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#353337] mb-4 animate-on-scroll">
            Affordable, Transparent Pricing
          </h2>
          <p className="text-lg text-center text-[#353337] mb-10 animate-on-scroll">
            Low cost & no cost options to suit any classroom or institution.
          </p>

          <div className="flex justify-center mb-12">
            <Link to="/pricing" className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-on-scroll">
              Learn more
              <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Features Comparison */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* AI Tutor */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
                  <img 
                    loading="lazy" 
                    decoding="async" 
                    width="1232" 
                    height="960" 
                    src="https://media.mathgpt.ai/wp/2024/10/14085522/feature-ai-tutor.png" 
                    alt="AI Tutor feature" 
                    className="w-full h-auto rounded-t-xl"
                    srcSet="https://media.mathgpt.ai/wp/2024/10/14085522/feature-ai-tutor.png 1232w, https://media.mathgpt.ai/wp/2024/10/14085522/feature-ai-tutor-300x234.png 300w, https://media.mathgpt.ai/wp/2024/10/14085522/feature-ai-tutor-1024x798.png 1024w, https://media.mathgpt.ai/wp/2024/10/14085522/feature-ai-tutor-768x598.png 768w"
                    sizes="(max-width: 1232px) 100vw, 1232px"
                  />
                  <div className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#353337] mb-4">
                      AI Tutor
                    </h2>
                    <p className="text-lg text-[#353337] mb-6">
                      MathGPT is the first and only AI system that can reliably and accurately interpret and tutor STEM education.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {["Accurate", "Conversational", "Always available"].map((feature, index) => (
                        <li key={feature} className="flex items-start" style={{ animationDelay: `${index * 0.2}s` }}>
                          <span className="flex-shrink-0 h-6 w-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/features" className="inline-flex items-center px-5 py-2 rounded-md bg-blue-600 text-white font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-0.5">
                      Learn more
                      <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Course & Assignment Manager */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
                  <img 
                    loading="lazy" 
                    decoding="async" 
                    width="1232" 
                    height="960" 
                    src="https://media.mathgpt.ai/wp/2024/10/14085829/feature-course-assignment-manager.png" 
                    alt="Course & Assignment Manager feature" 
                    className="w-full h-auto rounded-t-xl"
                    srcSet="https://media.mathgpt.ai/wp/2024/10/14085829/feature-course-assignment-manager.png 1232w, https://media.mathgpt.ai/wp/2024/10/14085829/feature-course-assignment-manager-300x234.png 300w, https://media.mathgpt.ai/wp/2024/10/14085829/feature-course-assignment-manager-1024x798.png 1024w, https://media.mathgpt.ai/wp/2024/10/14085829/feature-course-assignment-manager-768x598.png 768w"
                    sizes="(max-width: 1232px) 100vw, 1232px"
                  />
                  <div className="p-8">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#353337] mb-4">
                      Course & Assignment Manager
                    </h2>
                    <p className="text-lg text-[#353337] mb-6">
                      MathGPT is pioneering the first AI-powered Teaching and Learning App designed to amplify the capacities of college math instructors.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {["Scalable", "Cheat-proof", "Time-saving"].map((feature, index) => (
                        <li key={feature} className="flex items-start" style={{ animationDelay: `${index * 0.2}s` }}>
                          <span className="flex-shrink-0 h-6 w-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/solutions" className="inline-flex items-center px-5 py-2 rounded-md bg-indigo-600 text-white font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-0.5">
                      Learn more
                      <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[#f7f7f8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#353337] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-center text-[#353337] mb-12">
            Get answers to common questions about MathGPT
          </p>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <details className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                <h3 className="text-lg font-medium text-[#353337] group-hover:text-blue-600 transition-colors duration-200">
                  How does MathGPT ensure academic integrity?
                </h3>
                <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-4 pb-4 text-[#353337] border-t border-gray-100 pt-4">
                MathGPT uses advanced algorithms to generate unique problem variations for each student while maintaining the same learning objectives. Our system also includes features like browser lockdown for tests and real-time monitoring tools for instructors.
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                <h3 className="text-lg font-medium text-[#353337] group-hover:text-blue-600 transition-colors duration-200">
                  Can MathGPT integrate with my existing LMS?
                </h3>
                <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-4 pb-4 text-[#353337] border-t border-gray-100 pt-4">
                Yes! MathGPT is designed to work seamlessly with popular Learning Management Systems. We support LTI integration and can sync grades automatically with your existing gradebook.
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                <h3 className="text-lg font-medium text-[#353337] group-hover:text-blue-600 transition-colors duration-200">
                  What subjects does MathGPT cover?
                </h3>
                <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-4 pb-4 text-[#353337] border-t border-gray-100 pt-4">
                MathGPT covers a wide range of mathematics subjects including Algebra, Calculus, Statistics, Linear Algebra, and more. We're constantly expanding our content library based on instructor feedback.
              </div>
            </details>

            {/* FAQ Item 4 */}
            <details className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                <h3 className="text-lg font-medium text-[#353337] group-hover:text-blue-600 transition-colors duration-200">
                  How does the AI tutoring work?
                </h3>
                <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-4 pb-4 text-[#353337] border-t border-gray-100 pt-4">
                Our AI tutor provides step-by-step guidance, adapting to each student's learning style and pace. It uses natural language processing to understand questions and provides detailed explanations with visual aids when needed.
              </div>
            </details>

            {/* FAQ Item 5 */}
            <details className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                <h3 className="text-lg font-medium text-[#353337] group-hover:text-blue-600 transition-colors duration-200">
                  What kind of support do you offer?
                </h3>
                <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-4 pb-4 text-[#353337] border-t border-gray-100 pt-4">
                We provide 24/7 technical support, dedicated customer success managers for institutions, comprehensive documentation, and regular training sessions. Our team is always available to help you make the most of MathGPT.
              </div>
            </details>
          </div>

          <div className="text-center mt-12">
            <p className="text-[#353337] mb-6">Still have questions?</p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-[#353337] text-white font-medium shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us
              <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper data
const logos = [
  { src: "https://ext.same-assets.com/600722722/355611129.png", alt: "Institution logo 1" },
  { src: "https://ext.same-assets.com/600722722/3890034039.png", alt: "Institution logo 2" },
  { src: "https://ext.same-assets.com/600722722/1421359194.png", alt: "Institution logo 3" },
  { src: "https://ext.same-assets.com/600722722/3109909551.png", alt: "Institution logo 4" },
  { src: "https://ext.same-assets.com/600722722/4290189750.png", alt: "Institution logo 5" },
  { src: "https://ext.same-assets.com/600722722/2610703635.png", alt: "Institution logo 6" },
  { src: "https://media.mathgpt.ai/wp/2024/10/10034921/Logo-19.png", alt: "Institution logo 7" },
  { src: "https://media.mathgpt.ai/wp/2024/10/10035010/Logo-17.png", alt: "Institution logo 8" },
  { src: "https://media.mathgpt.ai/wp/2024/10/10035118/Logo-18.png", alt: "Institution logo 9" },
  { src: "https://media.mathgpt.ai/wp/2024/10/10034717/Logo-8.png", alt: "Institution logo 10" },
];

export default Home;
