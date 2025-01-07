import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';

const CelebrationEffect = ({ isVisible }) => {
  if (!isVisible) return null;

  const createRibbons = () => {
    const ribbons = [];
    for (let i = 0; i < 20; i++) {
      ribbons.push(
        <motion.div
          key={`ribbon-${i}`}
          initial={{ y: -50, x: Math.random() * (window.innerWidth * 0.8), opacity: 0 }}
          animate={{
            y: window.innerHeight * 0.8,
            rotate: 360,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            ease: "linear"
          }}
          style={{
            position: 'fixed',
            width: '6px',
            height: '60px',
            background: 'linear-gradient(45deg, #1ba94c, #149c44)',
            zIndex: 1000,
            left: '50%',
            marginLeft: `-${Math.random() * 300 - 150}px`,
          }}
        />
      );
    }
    return ribbons;
  };

  const createFireworks = () => {
    const fireworks = [];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    for (let i = 0; i < 3; i++) {
      const baseX = centerX + (i - 1) * 200;
      const baseY = centerY - 100;
      
      for (let j = 0; j < 16; j++) {
        const angle = (j / 16) * Math.PI * 2;
        const distance = 150;
        
        fireworks.push(
          <motion.div
            key={`firework-${i}-${j}`}
            initial={{
              x: baseX,
              y: baseY,
              scale: 0,
              opacity: 1,
            }}
            animate={{
              x: baseX + Math.cos(angle) * distance,
              y: baseY + Math.sin(angle) * distance,
              scale: [0, 1, 0.5, 0],
              opacity: [1, 1, 0.8, 0],
            }}
            transition={{
              duration: 1.5,
              delay: 2 + i * 0.3,
              ease: "easeOut"
            }}
            style={{
              position: 'fixed',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: `hsl(${Math.random() * 360}, 100%, 50%)`,
              boxShadow: '0 0 8px currentColor',
              zIndex: 1000,
            }}
          />
        );
      }
      
      fireworks.push(
        <motion.div
          key={`flash-${i}`}
          initial={{
            x: baseX,
            y: baseY,
            scale: 0,
            opacity: 1,
          }}
          animate={{
            scale: [0, 4, 0],
            opacity: [1, 0.8, 0],
          }}
          transition={{
            duration: 0.5,
            delay: 2 + i * 0.3,
            ease: "easeOut"
          }}
          style={{
            position: 'fixed',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'white',
            boxShadow: '0 0 20px white',
            zIndex: 999,
          }}
        />
      );
    }
    
    return fireworks;
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      pointerEvents: 'none',
      zIndex: 1000 
    }}>
      {createRibbons()}
      {createFireworks()}
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [showCelebration, setShowCelebration] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const serviceID = 'service_21y31lw';
    const templateID = 'template_h467sbj';
    const userID = 'k7uMoQKf6xZbyDH4l';

    try {
      const response = await emailjs.send(
        serviceID,
        templateID,
        formData,
        userID
      );

      if (response.status === 200) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setShowCelebration(true);
        
        setTimeout(() => {
          setShowCelebration(false);
        }, 4000); // Reduced to 4 seconds to match animation duration
      } else {
        setStatus('Failed to send the message. Try again later.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16">
      <CelebrationEffect isVisible={showCelebration} />
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text">
            Get in Touch
          </h1>
          <p className="text-gray-100 dark:text-gray-400">
            Let's discuss your project or just say hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 bg-white shadow-lg dark:bg-gray-900 rounded-xl"
          >
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Colombo, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Linkedin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Linkedin</p>
                  <a href="https://www.linkedin.com/in/uvindu-herath" className="text-gray-600 dark:text-gray-400 hover:underline">
                    uvindu-herath
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Email</p>
                  <p className="text-gray-600 dark:text-gray-400">uvherath@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 bg-white shadow-lg dark:bg-gray-900 rounded-xl"
          >
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Send Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700"
              >
                Send Message
              </button>
              {status && <p className="mt-4 text-center text-gray-600 dark:text-gray-400">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}