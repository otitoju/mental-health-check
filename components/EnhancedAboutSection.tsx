"use client";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const EnhancedAboutSection = () => {
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
          <h2 className="text-5xl font-bold text-gray-900 mb-8">About Us</h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=500&fit=crop&crop=face"
              alt="Therapist in consultation"
              className="w-full h-96 object-cover rounded-3xl shadow-lg"
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
              className="flex items-center space-x-2 text-green-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium tracking-wide">Who We Are</span>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-lg leading-relaxed">
                We are a team of licensed psychologists, therapists, and mental 
                health professionals dedicated to helping individuals navigate 
                life's challenges with compassion and clarity.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Whether you're seeking support for anxiety, depression, 
                relationship struggles, burnout, or simply want to grow, we're here 
                to walk beside you — not just as professionals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <Button className="bg-green-100 hover:bg-green-200 text-green-800 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop&crop=face"
                alt="Support session"
                className="w-48 h-32 object-cover rounded-2xl shadow-md"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAboutSection;
