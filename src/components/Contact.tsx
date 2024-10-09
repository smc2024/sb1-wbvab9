import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactInfo = ({ icon: Icon, text }) => (
  <div className="flex items-center mb-6">
    <Icon className="w-8 h-8 text-blue-600 mr-4" />
    <span className="text-lg">{text}</span>
  </div>
);

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" ref={ref} className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-blue-800 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>
        <div className="flex flex-wrap -mx-4">
          <motion.div
            className="w-full md:w-1/2 px-4 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 px-4"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
              <ContactInfo icon={MapPin} text="123 Medical Center Dr, City, State 12345" />
              <ContactInfo icon={Phone} text="(123) 456-7890" />
              <ContactInfo icon={Mail} text="info@samaamedical.com" />
              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
                <div className="flex space-x-6">
                  {['facebook', 'twitter', 'instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    >
                      <img
                        src={`https://simpleicons.org/icons/${social}.svg`}
                        alt={`${social} icon`}
                        className="w-8 h-8"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;