"use client";

import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Willson",
      role: "Marketing Manager",
      content: "I Never Thought Therapy Could Make Such A Difference In My Life. When I First Started, I Was Overwhelmed, Anxious, And Constantly Questioning Myself. I Didn't Really Believe That Talking About My Problems Would Help—But I Was Desperate For A Change. From The Very First Session, I Felt Heard And Understood In A Way I Hadn't Before.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-4 mb-8">
            <motion.h2 
              className="text-6xl font-bold text-gray-900"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Testi-
            </motion.h2>
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex -space-x-2">
                <motion.div 
                  className="w-12 h-12 bg-green-100 rounded-full border-2 border-white"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div 
                  className="w-12 h-12 bg-blue-100 rounded-full border-2 border-white"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div 
                  className="w-12 h-12 bg-pink-100 rounded-full border-2 border-white"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div 
                  className="w-12 h-12 bg-yellow-100 rounded-full border-2 border-white"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-medium">1.2k+ Supported</p>
                <p>Client Around World</p>
              </div>
            </motion.div>
          </div>
          <motion.h2 
            className="text-6xl font-bold text-gray-900"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            monial
          </motion.h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src={testimonials[0].image}
              alt={testimonials[0].name}
              className="w-full max-w-md h-96 object-cover rounded-3xl shadow-lg mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-6xl text-green-200"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              "
            </motion.div>
            <motion.blockquote 
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {testimonials[0].content}
            </motion.blockquote>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-green-600 font-semibold text-lg">{testimonials[0].name}</p>
              <p className="text-gray-500">{testimonials[0].role}</p>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-green-600 font-bold">01</span>
              </motion.div>
              <div className="w-12 h-0.5 bg-gray-200"></div>
              <motion.div 
                className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-gray-400 font-bold">02</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
