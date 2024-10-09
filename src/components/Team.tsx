import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TeamMember = ({ name, role, image, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      <img src={image} alt={name} className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-md" />
      <h3 className="text-2xl font-semibold mb-2">{name}</h3>
      <p className="text-blue-600 font-medium">{role}</p>
    </motion.div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Dermatologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Dr. Michael Lee",
      role: "Cosmetic Surgeon",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Dr. Emily Chen",
      role: "Hair Restoration Specialist",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-blue-800 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Expert Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;