import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Check,
  Zap,
  Shield,
  BarChart,
  Users,
  Globe,
  Sparkles,
  ArrowRight,
  Star,
  ChevronRight,
  Layers,
  Code,
  Cpu,
  Database,
  LineChart,
  Settings,
  Workflow,
  MessageSquare,
  Award,
  Lightbulb,
} from 'lucide-react';

const Pricing = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const viewportOptions = {
    once: true,
    margin: "-100px"
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-12 lg:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-black/[0.02] -z-10"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="inline-flex items-center rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-600">
                <Sparkles className="mr-2 h-4 w-4" />
                Pricing
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-black via-blue-600 to-black">
                Simple, Transparent Pricing
              </h1>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Choose the plan that's right for your educational needs. Start with our free plan and upgrade as you grow.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="w-full py-8 md:py-12 lg:py-16 relative">
          <div className="absolute inset-0 bg-grid-black/[0.02] -z-10"></div>
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-4 md:grid-cols-3">
                {/* Essentials Plan */}
                <motion.div
                  className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={viewportOptions}
                >
                  <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">Essentials</h3>
                      <div className="inline-flex items-center rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-600">
                        Free
                      </div>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">$0</span>
                      <span className="ml-1 text-sm text-gray-500">/month</span>
                    </div>
                    <p className="text-gray-600">Perfect for individual educators and small classes</p>
                    <ul className="space-y-2">
                      {[
                        "AI Course & Assignment Manager",
                        "Unlimited AI Tutored course content",
                        "5 AI Tutored assignments per course",
                        "Basic analytics and reporting"
                      ].map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          viewport={viewportOptions}
                        >
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10">
                            <Check className="h-3 w-3 text-blue-600" />
                          </div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Link
                      to="/signup"
                      className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>

                {/* Advanced Plan */}
                <motion.div
                  className="group relative overflow-hidden rounded-xl border border-blue-600 shadow-md shadow-blue-600/10 scale-105 z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={viewportOptions}
                >
                  <div className="absolute inset-px rounded-t-lg bg-gradient-to-br from-blue-600 to-blue-800 -z-10 opacity-20 blur-md"></div>
                  <div className="relative bg-white p-6">
                    <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors"></div>
                    <div className="mx-auto mb-4 w-fit rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 px-4 py-1 text-xs font-semibold text-blue-600">
                      Most Popular
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">Advanced</h3>
                        <div className="inline-flex items-center rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-600">
                          Best Value
                        </div>
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold">$25</span>
                        <span className="ml-1 text-sm text-gray-500">/student/course</span>
                      </div>
                      <p className="text-gray-600">Ideal for growing institutions and departments</p>
                      <ul className="space-y-2">
                        {[
                          "Everything in Essentials",
                          "Unlimited AI Tutored assignments",
                          "Advanced analytics and reporting",
                          "Priority support",
                          "Custom integrations"
                        ].map((feature, i) => (
                          <motion.li
                            key={i}
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={viewportOptions}
                          >
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10">
                              <Check className="h-3 w-3 text-blue-600" />
                            </div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <Link
                        to="/signup"
                        className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>

                {/* Institutional Plan */}
                <motion.div
                  className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={viewportOptions}
                >
                  <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">Institutional</h3>
                      <div className="inline-flex items-center rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-600">
                        Custom
                      </div>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">Custom</span>
                      <span className="ml-1 text-sm text-gray-500">pricing</span>
                    </div>
                    <p className="text-gray-600">For large institutions with advanced needs</p>
                    <ul className="space-y-2">
                      {[
                        "Everything in Advanced",
                        "Unlimited users and courses",
                        "API access and custom integrations",
                        "Dedicated account manager",
                        "Advanced security features",
                        "Custom analytics dashboard"
                      ].map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          viewport={viewportOptions}
                        >
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10">
                            <Check className="h-3 w-3 text-blue-600" />
                          </div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
                    >
                      Contact Sales
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-8 md:py-12 lg:py-16 relative bg-gray-50/50">
          <div className="absolute inset-0 bg-grid-black/[0.02] -z-10"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="inline-flex items-center rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-600">
                <Lightbulb className="mr-2 h-4 w-4" />
                FAQ
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-black via-blue-600 to-black">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-8 max-w-3xl mx-auto">
              <div className="grid gap-4">
                {[
                  {
                    question: "Is there really a free version?",
                    answer: "Yes! The Essentials plan is completely free and provides access to AI Course & Assignment Manager, unlimited AI Tutored course content, and 5 AI Tutored assignments per course."
                  },
                  {
                    question: "How does the pricing for the Advanced plan work?",
                    answer: "The Advanced plan is priced at $25 per student, per course. This provides unlimited AI Tutored assignments and all features of the Essentials plan."
                  },
                  {
                    question: "What's included in the Institutional Plan?",
                    answer: "The Institutional Plan includes everything in the Advanced plan, plus API integrations, administrative analytics, and can be deployed across entire departments. Contact us for custom pricing based on your institution's needs."
                  },
                  {
                    question: "Do you offer educational discounts?",
                    answer: "Yes! Our pricing is already education-focused, and we offer additional discounts for large institutions. Contact us to learn more about our educational pricing options."
                  }
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={viewportOptions}
                  >
                    <div className="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors"></div>
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-8 md:py-12 lg:py-16 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900">
          <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to transform math education?
                </h2>
                <p className="max-w-[600px] text-gray-200 text-lg md:text-xl">
                  Start with MathGPT today and experience the difference in your classroom.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-blue-700"
                >
                  Try for Free
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-8 py-3 text-sm font-medium text-gray-200 shadow-lg transition-colors hover:bg-white/5"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
