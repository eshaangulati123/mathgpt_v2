import type React from 'react';
import { useState } from 'react';

const Signup = () => {
  const [formStep, setFormStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [accountType, setAccountType] = useState('student');

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    console.log({
      email,
      password,
      name,
      accountType
    });
    setFormStep(3);
  };

  return (
    <div className="py-16">
      <div className="max-w-lg mx-auto">
        {formStep === 1 && (
          <div className="bg-white rounded-xl shadow-md border border-[var(--border)]/20 p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Create Your MathGPT Account</h1>
              <p className="text-[var(--foreground)]/70">Start your journey to better math understanding</p>
            </div>

            <form onSubmit={handleNextStep}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  placeholder="you@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  placeholder="Create a secure password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-xs text-[var(--foreground)]/60 mt-1">Must be at least 8 characters</p>
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--accent)] text-white font-semibold py-3 rounded-lg hover:bg-[var(--accent)]/90 transition-colors"
              >
                Continue
              </button>

              <div className="mt-6 text-center">
                <p className="text-sm text-[var(--foreground)]/70">
                  Already have an account? <a href="#" className="text-[var(--accent)] font-medium">Sign in</a>
                </p>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-[var(--border)]/20">
              <p className="text-sm text-center text-[var(--foreground)]/70 mb-4">Or continue with</p>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-2 border border-[var(--border)] rounded-lg hover:bg-[var(--background)]/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <span>Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-2 border border-[var(--border)] rounded-lg hover:bg-[var(--background)]/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-5 h-5 fill-[#000000]">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  <span>Apple</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {formStep === 2 && (
          <div className="bg-white rounded-xl shadow-md border border-[var(--border)]/20 p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Complete Your Profile</h1>
              <p className="text-[var(--foreground)]/70">Just a few more details to personalize your experience</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  placeholder="Your name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">I am a...</label>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className={`p-4 border rounded-lg text-center cursor-pointer transition-colors ${
                      accountType === 'student'
                        ? 'border-[var(--accent)] bg-[var(--accent)]/10'
                        : 'border-[var(--border)] hover:bg-[var(--background)]/50'
                    }`}
                    onClick={() => setAccountType('student')}
                  >
                    <div className="flex justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="font-medium">Student</span>
                  </div>
                  <div
                    className={`p-4 border rounded-lg text-center cursor-pointer transition-colors ${
                      accountType === 'educator'
                        ? 'border-[var(--accent)] bg-[var(--accent)]/10'
                        : 'border-[var(--border)] hover:bg-[var(--background)]/50'
                    }`}
                    onClick={() => setAccountType('educator')}
                  >
                    <div className="flex justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                      </svg>
                    </div>
                    <span className="font-medium">Educator</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex-1 bg-[var(--background)] text-[var(--foreground)] font-semibold py-3 rounded-lg hover:bg-[var(--background)]/80 transition-colors"
                  onClick={() => setFormStep(1)}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[var(--accent)] text-white font-semibold py-3 rounded-lg hover:bg-[var(--accent)]/90 transition-colors"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        )}

        {formStep === 3 && (
          <div className="bg-white rounded-xl shadow-md border border-[var(--border)]/20 p-8 text-center">
            <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-3xl font-bold mb-2">Account Created!</h1>
            <p className="text-[var(--foreground)]/70 mb-8">
              Welcome to MathGPT! Your account has been successfully created. Get ready to revolutionize your math learning experience.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="bg-[var(--accent)] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[var(--accent)]/90 transition-colors inline-block"
              >
                Go to Dashboard
              </a>
              <a
                href="#"
                className="text-[var(--accent)] font-medium"
              >
                Take a tour of MathGPT
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Features Highlight */}
      {formStep < 3 && (
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Choose MathGPT?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Step-by-Step Solutions",
                description: "Get detailed explanations for any math problem, from basic algebra to advanced calculus.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              },
              {
                title: "Interactive Visualizations",
                description: "See math concepts come alive with dynamic, interactive graphs and visual tools.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                )
              },
              {
                title: "Personalized Learning",
                description: "Adaptive technology that adjusts to your learning style and pace for maximum effectiveness.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                )
              },
            ].map((feature, index) => (
              <div key={feature.title} className="bg-white p-6 rounded-xl shadow-sm border border-[var(--border)]/20">
                <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-4 text-[var(--accent)]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[var(--foreground)]/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Social Proof */}
      {formStep < 3 && (
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <p className="text-[var(--foreground)]/90 text-lg italic mb-4">
            "MathGPT transformed my relationship with mathematics. The step-by-step explanations and visualizations
            helped me understand concepts I had struggled with for years."
          </p>
          <p className="font-medium">— Sarah K., College Student</p>
        </div>
      )}
    </div>
  );
};

export default Signup;
