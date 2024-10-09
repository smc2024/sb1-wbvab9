import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <motion.div
            className="w-full md:w-1/4 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <Heart className="text-pink-400 w-8 h-8 mr-2" />
              <span className="text-2xl font-bold">Samaa Medical Center</span>
            </div>
            <p className="text-indigo-200">Transforming lives through advanced dermatology and cosmetic treatments.</p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/4 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Team', 'Resources', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-indigo-200 hover:text-white transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="w-full md:w-1/4 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <p className="text-indigo-200 mb-2">123 Medical Center Dr</p>
            <p className="text-indigo-200 mb-2">City, State 12345</p>
            <p className="text-indigo-200 mb-2">Phone: (123) 456-7890</p>
            <p className="text-indigo-200">Email: info@samaamedical.com</p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors duration-300"
                >
                  <img
                    src={`https://simpleicons.org/icons/${social}.svg`}
                    alt={`${social} icon`}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 pt-8 border-t border-indigo-800 text-sm text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>&copy; 2023 Samaa Medical Center. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-indigo-200 hover:text-white mr-4 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">Terms of Service</a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;