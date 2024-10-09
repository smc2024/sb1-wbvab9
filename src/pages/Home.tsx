import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
{
  name: 'Sarah Johnson',
  comment: "Samaa Medical transformed my skin. I've never felt more confident!",
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
},

  {
    name: 'Michael Chen',
    comment: 'The hair transplant results exceeded my expectations. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
 {
  name: 'Emily Rodriguez',
  comment: "The laser treatments have given me a youthful glow. I'm thrilled with the results!",
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
}

];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 opacity-70 z-10" />
        <div className="relative z-20 text-center text-white">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your Beauty
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience world-class dermatology and cosmetic treatments
          </motion.p>
          <motion.button
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Book an Appointment
          </motion.button>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-indigo-100 to-purple-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const TestimonialCard = ({ name, comment, image, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <p className="text-gray-600 italic mb-4">"{comment}"</p>
        <p className="text-indigo-600 font-semibold">{name}</p>
      </div>
    </motion.div>
  );
};

export default Home;