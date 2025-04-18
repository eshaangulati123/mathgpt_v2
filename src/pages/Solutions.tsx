import React from 'react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#353337] mb-6">
            See MathGPT in Action
          </h1>
          <p className="text-xl text-[#353337] mb-8">
            Watch our short video to see how easy it is to get MathGPT up and running in your classroom.
          </p>
          <Link to="/signup" className="inline-block px-6 py-3 rounded-md bg-[#353337] text-white font-medium hover:bg-black transition-colors">
            Create free account
          </Link>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="aspect-video w-full max-w-2xl bg-black shadow-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/c40SB-36GmQ"
              title="MathGPT Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Partner Institutions */}
      <section className="py-16 px-4 bg-[#f7f7f8]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl font-medium text-center text-[#353337] mb-12">
            Used and trusted by prestige institutions
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            <img src="https://ext.same-assets.com/3228818826/355611129.png" alt="Chattahoochee Technical College logo" className="h-16 w-auto" />
            <img src="https://ext.same-assets.com/3228818826/3890034039.png" alt="DeAnza College logo" className="h-16 w-auto" />
            <img src="https://ext.same-assets.com/3228818826/1421359194.png" alt="Angelo State University logo" className="h-16 w-auto" />
            <img src="https://ext.same-assets.com/3228818826/3109909551.png" alt="Taft College logo" className="h-16 w-auto" />
            <img src="https://ext.same-assets.com/3228818826/4290189750.png" alt="University of Maryland logo" className="h-16 w-auto" />
            <img src="https://ext.same-assets.com/3228818826/2609962720.png" alt="Pasadena City College logo" className="h-16 w-auto" />
            <img src="https://ext.same-assets.com/3228818826/1500406912.png" alt="Penn State logo" className="h-16 w-auto" />
            <img src="https://ext.same-assets.com/3228818826/2610703635.png" alt="Howard Community College logo" className="h-16 w-auto" />
            <img src="https://media.mathgpt.ai/wp/2024/10/10034921/Logo-19.png" alt="Santa Ana College logo" className="h-16 w-auto" />
            <img src="https://media.mathgpt.ai/wp/2024/10/10035010/Logo-17.png" alt="Fresno State logo" className="h-16 w-auto" />
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#353337] mb-12">
            How MathGPT Transforms Math Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-[#f7f7f8] rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold ml-3">Personalized Learning</h3>
              </div>
              <p className="text-[#353337]">
                MathGPT adapts to each student's learning style and pace, providing step-by-step explanations and tailored guidance that evolves with the student's progress.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-[#f7f7f8] rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold ml-3">Cheat-Proof System</h3>
              </div>
              <p className="text-[#353337]">
                Our innovative system generates unique problem variations for each student while maintaining the same learning objectives, ensuring academic integrity.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-[#f7f7f8] rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold ml-3">Time-Saving Tools</h3>
              </div>
              <p className="text-[#353337]">
                Instructors save valuable time with automated grading, insightful analytics, and ready-to-use course materials that can be customized to fit specific curriculum needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-[#f7f7f8]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#353337] mb-12">
            How MathGPT Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="w-full h-1 bg-gray-200 absolute top-4 left-0"></div>
                <div className="space-y-12 relative">
                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#353337] text-white flex items-center justify-center z-10">1</div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-[#353337] mb-2">Create Your Course</h3>
                      <p className="text-[#353337]">Choose from our library of pre-built courses or customize your own with our intuitive course builder.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#353337] text-white flex items-center justify-center z-10">2</div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-[#353337] mb-2">Assign to Students</h3>
                      <p className="text-[#353337]">Invite students to join your course with a simple link or code. Each student gets personalized assignments.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#353337] text-white flex items-center justify-center z-10">3</div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-[#353337] mb-2">Monitor Progress</h3>
                      <p className="text-[#353337]">Track student engagement, identify struggling concepts, and adapt your teaching strategies with our analytics dashboard.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://ext.same-assets.com/3250228889/1417729087.png"
                alt="MathGPT Dashboard Interface"
                className="w-full max-w-lg rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#353337] mb-6">
            Ready to transform your math classroom?
          </h2>
          <p className="text-xl text-[#353337] mb-8">
            Join thousands of instructors and students who have already discovered the power of MathGPT.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup" className="px-8 py-3 bg-[#353337] text-white font-medium rounded-md hover:bg-black transition-colors">
              Sign up for free
            </Link>
            <Link to="/pricing" className="px-8 py-3 border border-[#353337] text-[#353337] font-medium rounded-md hover:bg-gray-50 transition-colors">
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
