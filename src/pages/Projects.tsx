import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { image } from 'framer-motion/client';

const projects = [
  {
    title: 'Health Hive | Health Data Storage and Sharing System',
    description: 'A decentralized medical file-sharing system using blockchain and IPFS for secure storage and sharing.',
    technologies: ['Spring Boot','Docker','React','AWS','Keycloak','IPFS','MySQL','Ethereum','Tailwind CSS','Firebase',],
    previewUrl: '',
    github: 'https://github.com/herathua/healthhive',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1000&auto=format&fit=crop', // Fallback image
  },
  {
    title: 'Pothfolio | Portfolio Website',
    description: 'A responsive portfolio website built with React and Tailwind CSS.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'three.js'],
    previewUrl: 'http://uvinduherath.me/portfolio/',
    github: 'https://github.com/herathua/pothfolio',
    image: 'path/to/pothfolio-image.jpg', // Fallback image
  },
  {
    title: 'Data Package Comparison Platform',
    description:
      'Developing a responsive web application for comparing prepaid, postpaid, and broadband data packages from different providers.',
    technologies: ['Next.js', 'MongoDB', 'Node.js', 'Tailwind CSS', 'Express.js'],
    previewUrl: '', // No live preview
    github: 'https://github.com/herathua/Data-Package-Comparison-Platform',
    image: 'https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?q=80&w=870&auto=format&fit=crop', // Fallback image
  },
  {
    title: 'UOM Water Level Measurement System',
    description:
      'Mesure tank water levels using JSN-SR04T ultrasonic sensors and ESP32 devices, transmitting data via ESP NOW protocol.',
    technologies: ['ESP32', 'JSN-SR04T', 'FastAPI', 'MQTT', 'PostgreSQL', 'Grafana'],
    previewUrl: '',
    image: 'https://images.unsplash.com/photo-1629739884942-8678d138dd64?q=80&w=1770&auto=format&fit=crop', // Fallback image
    github: 'https://github.com/ieslabs-fituom/uom-wlm-project',
  },
  {
    title: 'Smart Dryer Solutions',
    description: 'Smart Dry Solutions is an automated drying machine using Arduino and IoT technology to optimize grain drying time.',
    technologies: ['C++', 'Arduino', 'Proteus', 'EasyEDA'],
    image: 'https://images.unsplash.com/photo-1553341640-9397992456f3?q=80&w=870&auto=format&fit=crop&q=80&w=800',
    github: 'https://drive.google.com/drive/folders/1SrkUGzjLQ4ySNEiybt-6eaGV4j0TJKhV',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text">
            Projects
          </h1>
          <p className="text-gray-400 dark:text-gray-400">
            Showcasing my work and contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden bg-white shadow-lg dark:bg-gray-900 rounded-xl"
            >
              {/* Conditional Rendering for Preview or Fallback */}
              <div className="relative h-64">
                {project.previewUrl ? (
                  <iframe
                    src={project.previewUrl}
                    className="w-full h-full border-none"
                    title={`${project.title} Preview`}
                    sandbox="allow-scripts allow-same-origin"
                  ></iframe>
                ) : (
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm text-purple-600 bg-purple-100 rounded-full dark:bg-purple-900 dark:text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
