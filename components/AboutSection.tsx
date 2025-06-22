"use client";
import { motion } from "framer-motion";

const AboutSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Your Journey to Wellness Starts Here
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that everyone deserves a safe space to explore their inner world, 
              process their experiences, and grow into their authentic self. Our approach 
              combines evidence-based therapy with compassionate care.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="space-y-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-6 h-6 bg-green-600 rounded-full opacity-80"></div>
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-gray-900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Safe Environment
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
              >
                A judgment-free space where you can be completely yourself
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="space-y-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-6 h-6 bg-green-600 rounded-full opacity-80"></div>
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-gray-900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Expert Care
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Professional guidance tailored to your unique needs
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="space-y-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-6 h-6 bg-green-600 rounded-full opacity-80"></div>
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-gray-900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Personal Growth
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Tools and insights to help you thrive in all areas of life
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
