import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BookOpen, Brain, MessageSquare, Code, Zap, Shield, Play, Terminal, Calculator, BookText } from 'lucide-react';

const Demo = () => {
  const viewportOptions = {
    once: true,
    margin: "-100px"
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 -z-10"></div>
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-lg bg-white/10 px-4 py-2 text-sm text-white mb-6 backdrop-blur-sm">
              <Play className="mr-2 h-4 w-4" />
              Live Demo
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white mb-6">
              Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">MathGPT</span> Live
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
                Try Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Watch Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
                    <p className="text-gray-600">Enter your math problem here...</p>
                  </div>
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                    Solve
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
                    <p className="text-gray-600">Solution will appear here...</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookText,
                title: "Algebra",
                description: "Solve quadratic equations with detailed explanations",
                example: "x² + 5x + 6 = 0"
              },
              {
                icon: Calculator,
                title: "Calculus",
                description: "Find derivatives and integrals step by step",
                example: "∫(2x + 3) dx"
              },
              {
                icon: Brain,
                title: "Statistics",
                description: "Calculate probabilities and analyze data",
                example: "P(X > 2) where X ~ N(0,1)"
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
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600 font-mono">{feature.example}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Video */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={viewportOptions}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-lg">
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/your-demo-video-id"
                  title="MathGPT Live Demo"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={viewportOptions}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white mb-6">
              Ready to Try MathGPT?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Experience the future of math education with our AI-powered tutor.
            </p>
            <div className="flex justify-center gap-4">
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
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Demo; 