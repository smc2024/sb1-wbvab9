import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white bg-opacity-80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Heart className="text-pink-600 w-8 h-8 mr-2" />
          <span className={`text-xl font-bold ${isScrolled ? 'text-indigo-800' : 'text-white'}`}>
            Samaa Medical
          </span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {['Home', 'About', 'Services', 'Team', 'Resources', 'Blog', 'Contact'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`${
                    isScrolled ? 'text-indigo-800' : 'text-white'
                  } hover:text-pink-600 transition-colors`}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;