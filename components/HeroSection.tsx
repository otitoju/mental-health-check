"use client";

import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center space-x-2 text-green-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-sm font-medium tracking-wide">A Safe Place</span>
            </motion.div>
            
            <div className="space-y-6">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Helping You
                <br />
                <span className="text-gray-800">Reconnect With</span>
                <br />
                <span className="text-gray-900">Your True Self</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Discover a supportive space where you can explore your thoughts, 
                heal from within, and rediscover the person you're meant to be.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-green-100 hover:bg-green-200 text-green-800 px-8 py-3 rounded-full transition-all duration-300">
                  Discover More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3 text-gray-700"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium">Contact Us</p>
                  <p className="text-sm">0761-8523-398</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="relative bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=700&fit=crop&crop=face"
                alt="Professional therapist in consultation"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ rotate: 180 }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-green-600" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
