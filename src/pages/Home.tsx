import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FaReact, FaJava, FaDocker, FaAws, FaNodeJs, FaDatabase, FaPython } from 'react-icons/fa'; // Example icons for some technologies
import { FaC } from 'react-icons/fa6';
import DeveloperImage from '../image/Developer.jpg';

export default function Home() {
  const technologies = [
    { icon: <FaC className="w-12 h-12" />, label: 'C', color: 'text-Yellow-500' },
    { icon: <FaJava className="w-12 h-12" />, label: 'Java', color: 'text-red-500' },
    { icon: <FaPython className="w-12 h-12" />, label: 'Python', color: 'text-pink-500' },
    { icon: <FaNodeJs className="w-12 h-12" />, label: 'Node.js', color: 'text-green-500' },
    { icon: <FaReact className="w-12 h-12" />, label: 'React', color: 'text-blue-500' },
    { icon: <FaDocker className="w-12 h-12" />, label: 'Docker', color: 'text-orange-500' },
    { icon: <FaAws className="w-12 h-12" />, label: 'AWS', color: 'text-yellow-500' },
    { icon: <FaDatabase className="w-12 h-12" />, label: 'MySQL', color: 'text-purple-500' },
    { icon: <FaDatabase className="w-12 h-12" />, label: 'MongoDB', color: 'text-green-700' }
    // Add more technologies with respective icons here
  ];

  return (
    <div className="relative min-h-screen pt-16">
      <section className="relative flex items-center min-h-screen">
        <div className="container flex flex-col items-center px-4 mx-auto sm:px-6 lg:px-8 md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="z-10 mb-8 text-center md:w-1/2 md:text-left md:mb-0"
          >
            <h1 className="mb-6 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text">
              Uvindu Herath
            </h1>
            <p className="mb-8 text-lg italic text-gray-100 md:text-xl dark:text-gray-100">
              "From Concept to Code, We Bring Ideas to Life."
            </p>
            <div className="mb-12">
              <p className="text-lg text-gray-100 md:text-xl dark:text-gray-100">
                I create innovative and user-friendly software solutions that
                bring your ideas to life. From intuitive websites to robust
                backend systems, I use the latest technologies to deliver
                scalable and effective results. Let's build something great
                together!
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 text-white transition-colors bg-purple-600 rounded-full hover:bg-purple-700"
              >
                View Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center px-6 py-3 text-purple-600 transition-colors border-2 border-purple-600 rounded-full dark:text-purple-400 hover:bg-purple-600 hover:text-white"
              >
                Read Blog
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
          <div className="z-10 md:w-1/2 h-[400px] md:h-[600px]">
            <img
              src={DeveloperImage}
              alt="Developer"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="relative py-20 bg-white/90 dark:bg-gray-800/50">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="z-10 mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-transparent md:text-4xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text">
              Technologies
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {technologies.map(({ icon, label, color }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                className="z-10 p-6 bg-white shadow-xl rounded-xl dark:bg-gray-900"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {label}
                  </h3>
                  <div className={`ml-4 ${color}`}>{icon}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
