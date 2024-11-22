import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';
//import StarsBackground from './components/StarsBackground';


function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative min-h-screen transition-colors duration-300 bg-gradient-to-b from-gray-900 to-gray-100 dark:from-gray-800 dark:to-gray-900">

          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
export default App;
