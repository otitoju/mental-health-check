"use client";
import { Facebook, Instagram, X } from "lucide-react";
import { motion } from "framer-motion";

const DailyQuoteSection = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-6xl font-bold text-green-200 mb-8 tracking-wider"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            DAILY QUOTE
          </motion.div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-32 h-32 rounded-full overflow-hidden mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face"
                  alt="Dr. Elena Ruiz"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-gray-900 mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Dr. Elena Ruiz
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Behavioral Psychologist
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="flex-1 max-w-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.blockquote 
                className="text-2xl lg:text-3xl font-light text-gray-700 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                "Growth Happens When We{" "}
                <span className="font-semibold text-gray-900">Move Beyond Fear</span>{" "}
                & Into{" "}
                <span className="font-light text-gray-500">Self-Reflection.</span>"
              </motion.blockquote>
              
              <motion.div 
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <span className="text-gray-600 text-sm">Share On :</span>
                <div className="flex gap-3">
                  <motion.div 
                    className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Facebook className="w-4 h-4 text-white" />
                  </motion.div>
                  <motion.div 
                    className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Instagram className="w-4 h-4 text-white" />
                  </motion.div>
                  <motion.div 
                    className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DailyQuoteSection;
