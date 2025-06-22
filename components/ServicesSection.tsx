"use client";

import { ArrowRight, Heart } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "Individual Counseling",
      description: "One-on-one sessions tailored to your personal needs"
    },
    {
      title: "Marriage Therapy", 
      description: "Strengthen your relationship with professional guidance",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop&crop=face"
    },
    {
      title: "Family Counseling",
      description: "Build stronger family bonds and communication"
    },
    {
      title: "Stress Management",
      description: "Learn effective techniques to manage daily stress"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Understanding Yourself<br />
            Is The <span className="text-green-600">Most Powerful</span><br />
            Form Of Self-Respect
          </h2>
          
          <motion.div 
            className="flex items-center justify-center space-x-4 text-green-600 mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center rotate-45">
              <div className="w-4 h-4 bg-green-600 rounded-sm"></div>
            </div>
            <Heart className="w-6 h-6 fill-current" />
            <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center rotate-45">
              <div className="w-4 h-4 bg-green-600 rounded-sm"></div>
            </div>
          </motion.div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center space-x-2 text-green-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium tracking-wide">Services</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Supporting You<br />
                Through Every Step
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We're here to walk beside you. Our approach is compassionate, 
                collaborative, and tailored to your unique journey.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  {service.image && (
                    <motion.img 
                      src={service.image}
                      alt={service.title}
                      className="w-12 h-12 rounded-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-5 h-5 text-green-600" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
