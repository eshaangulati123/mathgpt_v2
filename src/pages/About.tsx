import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Users, BookOpen, Clock, Award } from 'lucide-react';

const About = () => {
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
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center pt-[160px] pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-lg bg-white/10 px-4 py-2 text-sm text-white mb-6 backdrop-blur-sm">
              <Sparkles className="mr-2 h-4 w-4" />
              Our Story
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">MathGPT</span>
            </h1>
            <p className="text-xl/relaxed text-white/90 mb-8 max-w-2xl mx-auto">
              Transforming the future of mathematics education with AI-powered tools that students love and instructors trust.
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
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "10K+", label: "Active Students" },
              { icon: BookOpen, value: "50+", label: "Courses" },
              { icon: Clock, value: "24/7", label: "Support" },
              { icon: Award, value: "98%", label: "Satisfaction" }
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

      {/* Main Mission Section */}
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
              The MathGPT Mission
            </h2>
            <p className="text-xl/relaxed text-gray-600">
              To provide an AI-Powered, affordable, and comprehensive instructor and student-facing solution for higher education STEM classrooms, starting with math.
            </p>
          </motion.div>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={viewportOptions}
          >
            <p className="text-lg text-gray-600">
              MathGPT is an affordable web-based app built to amplify the teaching capacities of STEM educators. MathGPT blends advanced AI tutoring with easy-to-implement course and assignment management, making it immediately useful in a single classroom or an entire department.
            </p>
          </motion.div>
        </div>
      </section>

      {/* For Instructors Section */}
      <section className="w-full py-20 px-4">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={viewportOptions}
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                For Instructors
              </h2>
              <p className="text-lg text-gray-600">
                MathGPT is the teaching app that gives them the superpower to teach every student 1-on-1, all the time. MathGPT enables truly personalized education at scale, amplifying the abilities of any instructor.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-indigo-600 mb-2">Personalized Teaching</h3>
                  <p className="text-sm text-gray-600">Teach every student individually</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-indigo-600 mb-2">Scale Your Impact</h3>
                  <p className="text-sm text-gray-600">Reach more students effectively</p>
                </div>
              </div>
            </div>
            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={viewportOptions}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                <img
                  src="https://media.mathgpt.ai/wp/2024/10/10083844/Image-placeholder-6-1.png"
                  alt="Instructor using MathGPT"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* For Students Section */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={viewportOptions}
          >
            <motion.div
              className="relative group order-2 md:order-1"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={viewportOptions}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                <img
                  src="https://media.mathgpt.ai/wp/2024/10/11105719/Group-1000003461-3.png"
                  alt="Student using MathGPT"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </motion.div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                For Students
              </h2>
              <p className="text-lg text-gray-600">
                MathGPT is the judgement-free, conversational tutor they've always wanted. The AI tutor coaches them through any problem so they learn the material, anytime and from anywhere.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-indigo-600 mb-2">24/7 Support</h3>
                  <p className="text-sm text-gray-600">Learn at your own pace</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-indigo-600 mb-2">Personalized Help</h3>
                  <p className="text-sm text-gray-600">Get step-by-step guidance</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 px-4">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={viewportOptions}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
              Our Leadership Team
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Founder & CEO",
                bio: "Ph.D. in Applied Mathematics with over 15 years of experience in educational technology and AI research.",
                image: "https://media.mathgpt.ai/wp/2024/10/10101432/Hung-tran.png"
              },
              {
                name: "Michael Chen",
                role: "CTO",
                bio: "Former AI Research Lead at Google with expertise in machine learning applications for educational platforms.",
                image: "https://media.mathgpt.ai/wp/2024/10/10101523/Frame-1000005291.png"
              },
              {
                name: "Dr. Robert Kim",
                role: "Head of Education",
                bio: "Former Mathematics Department Chair with extensive experience in curriculum development and educational technology.",
                image: "https://media.mathgpt.ai/wp/2024/10/10101523/Frame-1000005291.png"
              }
            ].map((member, index) => (
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
                  <div className="aspect-square overflow-hidden rounded-xl mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Transform Your Math Education?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of educators and students who are already experiencing the future of math education.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-indigo-900 shadow-sm transition-colors hover:bg-white/90"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
