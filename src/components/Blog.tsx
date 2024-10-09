import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BlogPost = ({ title, excerpt, image, delay }) => {
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
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read more</a>
      </div>
    </motion.div>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Tips for Healthy Skin",
      excerpt: "Discover simple yet effective ways to maintain radiant and healthy skin all year round.",
      image: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Understanding Hair Loss",
      excerpt: "Learn about the common causes of hair loss and available treatment options.",
      image: "https://images.unsplash.com/photo-1626015132713-4d6cad1cf63d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Laser Treatment: What to Expect",
      excerpt: "A comprehensive guide to laser treatments and their benefits for various skin conditions.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-blue-800 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Latest from Our Blog
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} delay={index * 0.2} />
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
            View All Posts
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;