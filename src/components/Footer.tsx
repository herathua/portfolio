import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 text-gray-600 dark:text-gray-400 md:mb-0">
            © {new Date().getFullYear()} Uvindu Herath. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/herathua"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/uvindu-herath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:uvherath@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400"
            >
              <Mail className="w-6 h-6" />
            </a>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
}