import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="about"
      ref={ref}
      className="py-20 bg-gradient-to-b from-purple-100 to-indigo-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-indigo-800 mb-12"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          About Samaa Medical Center
        </motion.h2>
        <div className="flex flex-wrap items-center">
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Samaa Medical Center"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 md:pl-12"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-700 mb-6 text-lg">
              At Samaa Medical Center, we are dedicated to providing exceptional dermatological and cosmetic care. Our mission is to enhance your natural beauty and boost your confidence through advanced treatments and personalized care.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              With state-of-the-art facilities and a team of experienced professionals, we offer a wide range of services including dermatology consultations, laser treatments, and hair transplant procedures.
            </p>
            <blockquote className="border-l-4 border-pink-600 pl-4 italic text-gray-600 text-lg">
              "The team at Samaa Medical Center transformed my skin. I've never felt more confident!" - Sarah T.
            </blockquote>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;