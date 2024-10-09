import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Stethoscope, Zap, Scissors } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      <Icon className="w-16 h-16 text-pink-600 mb-6" />
      <h3 className="text-2xl font-semibold mb-4 text-indigo-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Dermatology",
      description: "Comprehensive skin care consultations and treatments for various dermatological conditions."
    },
    {
      icon: Zap,
      title: "Cosmetic Laser Treatments",
      description: "Advanced laser therapies for skin rejuvenation, hair removal, and scar reduction."
    },
    {
      icon: Scissors,
      title: "Hair Transplant",
      description: "State-of-the-art hair restoration techniques for natural-looking results."
    }
  ];

  return (
    <motion.section
      id="services"
      className="py-20 bg-gradient-to-b from-indigo-100 to-purple-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-indigo-800 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;