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
      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      <Icon className="w-16 h-16 text-blue-600 mb-6" />
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
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
    <section id="services" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-blue-800 mb-16"
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
    </section>
  );
};

export default Services;