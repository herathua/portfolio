import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com'; // Import Email.js SDK

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Your Email.js service details (use your own user ID and template ID)
    const serviceID = 'service_21y31lw';  // Find this in Email.js dashboard
    const templateID = 'template_h467sbj'; // Find this in Email.js dashboard
    const userID = 'k7uMoQKf6xZbyDH4l';  // Use your Email.js user ID

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
      } else {
        setStatus('Failed to send the message. Try again later.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
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
