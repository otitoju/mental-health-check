"use client";

import { Heart, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const PricingSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
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
            <span className="text-sm font-medium tracking-wide">Pricing Plan</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Invest In Your<br />
            Wellbeing
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Choose a plan that empowers you to feel better, 
            think clearer, and live fully.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex justify-center items-center gap-4 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-green-600 font-semibold">01</span>
          </motion.div>
          <div className="w-16 h-0.5 bg-gray-300"></div>
          <motion.div 
            className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-gray-400 font-semibold">02</span>
          </motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className="bg-green-50 rounded-3xl p-8 relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Plan</h3>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-gray-600 text-lg">$</span>
                <motion.span 
                  className="text-5xl font-bold text-green-600"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  100
                </motion.span>
                <span className="text-gray-600 ml-2">/Month</span>
              </div>
              <p className="text-gray-600 text-sm">
                Perfect for individuals seeking<br />
                occasional support.
              </p>
            </motion.div>
            
            <motion.ul 
              className="space-y-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.li 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1 }}
                viewport={{ once: true }}
              >
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">2 sessions per month (45 mins each)</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.1 }}
                viewport={{ once: true }}
              >
                <Check className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Email support between sessions</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <Check className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Personalized progress tracking</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.3 }}
                viewport={{ once: true }}
              >
                <Check className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Access to monthly webinars</span>
              </motion.li>
            </motion.ul>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full">
                Choose Package
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bg-white border border-gray-200 rounded-3xl p-8"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Standard Plan</h3>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-gray-600 text-lg">$</span>
                <motion.span 
                  className="text-5xl font-bold text-green-600"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  180
                </motion.span>
                <span className="text-gray-600 ml-2">/Month</span>
              </div>
              <p className="text-gray-600 text-sm">
                Ideal for ongoing support and steady<br />
                growth.
              </p>
            </motion.div>
            
            <motion.ul 
              className="space-y-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <motion.li 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">4 sessions per month (45 mins each)</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.3 }}
                viewport={{ once: true }}
              >
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Priority email & chat support</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                viewport={{ once: true }}
              >
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Customized mental wellness plan</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.5 }}
                viewport={{ once: true }}
              >
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Access to monthly webinars</span>
              </motion.li>
            </motion.ul>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              viewport={{ once: true }}
            >
              <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 py-3 rounded-full">
                Choose Package
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
