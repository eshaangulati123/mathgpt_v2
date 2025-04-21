import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BookOpen, Brain, MessageSquare, Code, Zap, Shield, Play, Terminal, Calculator, BookText, Users, Clock, Award, ChevronRight } from 'lucide-react';

const Demo = () => {
  const viewportOptions = {
    once: true,
    margin: "-100px"
  };

  return (
    <div className="w-full -mt-24">
      {/* Hero Section */}
      <section className="w-full min-h-[80vh] relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 rounded-b-[50%]">
        <div className="absolute inset-0 bg-grid-white/[0.05] -z-10 rounded-b-[50%]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 -z-10 rounded-b-[50%]"></div>
        <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center pt-[160px] pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-lg bg-white/10 px-4 py-2 text-sm text-white mb-6 backdrop-blur-sm">
              <Sparkles className="mr-2 h-4 w-4" />
              Interactive Demo
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">MathGPT</span> Live
            </h1>
            <p className="text-xl/relaxed text-white/90 mb-8 max-w-2xl mx-auto">
              Try our AI-powered math tutor in real-time. See how it solves problems, explains concepts, and adapts to your learning style.
            </p>
            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/signup"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-indigo-900 shadow-sm transition-colors hover:bg-white/90"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-8 md:py-12 bg-white">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Users, value: "10K+", label: "Problems Solved" },
              { icon: BookOpen, value: "50+", label: "Math Topics" },
              { icon: Clock, value: "24/7", label: "AI Support" },
              { icon: Award, value: "98%", label: "Accuracy" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={viewportOptions}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="w-full py-12 md:py-16 px-4 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={viewportOptions}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 mb-6">
              Try It Yourself
            </h2>
            <p className="text-xl/relaxed text-gray-600">
              Enter any math problem and see how MathGPT solves it step by step.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={viewportOptions}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Problem Solver</h3>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg">
                    <textarea 
                      className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-400 resize-none"
                      placeholder="Enter your math problem here..."
                      rows={4}
                    />
                  </div>
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Solve Problem
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={viewportOptions}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Step-by-Step Solution</h3>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg min-h-[200px]">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                        <p className="text-gray-900">Step 1: Analyze the problem</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                        <p className="text-gray-900">Step 2: Apply relevant formulas</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                        <p className="text-gray-900">Step 3: Solve step by step</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                        <p className="text-gray-900">Step 4: Verify the solution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="w-full py-12 md:py-16 px-4">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={viewportOptions}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 mb-6">
              How It Works
            </h2>
            <p className="text-xl/relaxed text-gray-600">
              See MathGPT in action with these real-world examples.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: BookText,
                title: "Algebra",
                description: "Solve quadratic equations with detailed explanations",
                example: "x² + 5x + 6 = 0",
                steps: ["Factor the equation", "Find roots", "Verify solution"]
              },
              {
                icon: Calculator,
                title: "Calculus",
                description: "Find derivatives and integrals step by step",
                example: "∫(2x + 3) dx",
                steps: ["Identify function", "Apply rules", "Simplify result"]
              },
              {
                icon: Brain,
                title: "Statistics",
                description: "Calculate probabilities and analyze data",
                example: "P(X > 2) where X ~ N(0,1)",
                steps: ["Define distribution", "Calculate probability", "Interpret result"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={viewportOptions}
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                  <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-3 rounded-lg mb-4">
                    <p className="text-sm font-mono text-gray-900">{feature.example}</p>
                  </div>
                  <div className="space-y-2">
                    {feature.steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-indigo-600" />
                        <p className="text-sm text-gray-600">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Video */}
      <section className="w-full py-12 md:py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={viewportOptions}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="aspect-video w-full bg-black shadow-lg overflow-hidden rounded-xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/c40SB-36GmQ"
                  title="MathGPT Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Demo; 