"use client";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const BlogSection = () => {
  const articles = [
    {
      number: "01",
      title: "Why Your Brain Loves Overthinking — And How To Quiet It"
    },
    {
      number: "02", 
      title: "The Psychology Of Procrastination: It's Not Laziness, It's Fear",
      description: "Learn what your delay tactics are really trying to protect you from — and how to turn avoidance into action."
    },
    {
      number: "03",
      title: "What Happens In Your Brain When You Finally Say 'No'"
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

  const articleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center justify-center space-x-2 text-green-600 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Heart className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium tracking-wide">Psychology Today</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Fresh Perspectives<br />
            On Mental Health
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Our latest articles offer insight, support, and inspiration 
            for your mental wellness journey.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="space-y-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {articles.map((article, index) => (
            <motion.div 
              key={article.number}
              variants={articleVariants}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(249, 250, 251, 1)",
                transition: { duration: 0.2 }
              }}
              className="group flex items-start justify-between py-8 border-b border-gray-100 cursor-pointer rounded-lg transition-all duration-300 px-4"
            >
              <div className="flex items-start space-x-8">
                <motion.span 
                  className="text-2xl font-bold text-gray-300 group-hover:text-green-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {article.number}
                </motion.span>
                <div className="space-y-2">
                  <motion.h3 
                    className="text-2xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {article.title}
                  </motion.h3>
                  {article.description && (
                    <motion.p 
                      className="text-gray-600 max-w-2xl"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      {article.description}
                    </motion.p>
                  )}
                </div>
              </div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-6 h-6 text-green-600 flex-shrink-0 mt-2" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button className="bg-green-100 hover:bg-green-200 text-green-800 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
            All Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
