"use client";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Clinical Psychologist",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop&crop=face",
      bio: "Dr. Johnson specializes in cognitive behavioral therapy and has over 10 years of experience helping clients overcome anxiety and depression."
    },
    {
      name: "Dr. Elena Ruiz",
      role: "Behavioral Psychologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=face",
      bio: "Dr. Ruiz focuses on behavioral interventions and mindfulness-based approaches to mental health wellness.",
      isHighlighted: true
    },
    {
      name: "Dr. Maria Santos",
      role: "Family Therapist", 
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop&crop=face",
      bio: "Dr. Santos specializes in family dynamics and relationship counseling with a focus on communication and conflict resolution."
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
            <span className="text-sm font-medium tracking-wide">Psychology</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Your Support<br />
            System Starts Here
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Our compassionate psychologists, therapists, and counselors 
            are here to walk with you.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              className="group perspective-1000"
            >
              <motion.div 
                className={`relative w-full h-96 preserve-3d cursor-pointer ${member.isHighlighted ? 'bg-green-100' : 'bg-gray-50'} rounded-3xl overflow-hidden`}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                {/* Front side - Image */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
                
                {/* Back side - Details */}
                <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 ${member.isHighlighted ? 'bg-green-600' : 'bg-gray-800'} rounded-3xl p-8 flex flex-col justify-center text-center text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className={`${member.isHighlighted ? 'text-green-100' : 'text-gray-300'} mb-4 font-medium`}>{member.role}</p>
                  <p className={`${member.isHighlighted ? 'text-green-50' : 'text-gray-200'} text-sm leading-relaxed mb-6`}>{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs">f</span>
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs">@</span>
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs">x</span>
                    </div>
                  </div>
                </div>
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
            All Team
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
