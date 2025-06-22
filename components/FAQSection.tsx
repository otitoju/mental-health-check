"use client";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What Is Therapy And How Does It Work?",
      answer: "Therapy is a safe, confidential space where you can explore thoughts, feelings, and behaviors with a licensed psychologist to improve your mental well-being."
    },
    {
      question: "How Do I Know If I Need Therapy?",
      answer: "Consider therapy if you're experiencing persistent feelings of sadness, anxiety, stress, relationship difficulties, or if you want to develop better coping strategies and personal growth."
    },
    {
      question: "Is Everything I Share In Therapy Confidential?",
      answer: "Yes, everything you share in therapy is confidential. There are only a few legal exceptions, such as if there's an immediate risk of harm to yourself or others."
    },
    {
      question: "How Do I Choose The Right Psychologist For Me?",
      answer: "Look for a licensed professional who specializes in your specific concerns, has experience with your age group, and with whom you feel comfortable and understood."
    },
    {
      question: "What Should I Expect In My First Session?",
      answer: "Your first session will focus on getting to know you, understanding your concerns, discussing your goals, and explaining how therapy works. It's normal to feel nervous - your therapist will help you feel comfortable."
    },
    {
      question: "What If I Don't Feel Comfortable With My Therapist?",
      answer: "It's important to feel comfortable with your therapist. If you don't feel a good connection after a few sessions, it's perfectly okay to discuss this or seek a different therapist who might be a better fit."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
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
            <span className="text-sm font-medium tracking-wide">FAQs</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Here's What You<br />
            Need To Know
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            We've answered the most common questions to help you 
            feel informed, supported, and confident.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.2 }
                }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-white rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="px-8 py-6 text-left text-lg font-medium text-gray-900 hover:no-underline hover:text-green-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
