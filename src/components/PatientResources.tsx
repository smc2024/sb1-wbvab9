import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, HelpCircle, Download } from 'lucide-react';

const ResourceCard = ({ icon: Icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      <Icon className="w-12 h-12 text-blue-600 mr-6 flex-shrink-0" />
      <div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const PatientResources = () => {
  const resources = [
    {
      icon: FileText,
      title: "Patient Consultations",
      description: "Learn about our consultation process and what to expect during your visit."
    },
    {
      icon: HelpCircle,
      title: "FAQs",
      description: "Find answers to commonly asked questions about our treatments and procedures."
    },
    {
      icon: Download,
      title: "Downloadable Forms",
      description: "Access and download important forms for your appointment."
    }
  ];

  return (
    <section id="resources" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-blue-800 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Patient Resources
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} delay={index * 0.2} />
          ))}
        </div>
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
          >
            Download New Patient Forms
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PatientResources;