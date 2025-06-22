"use client";
import { Phone, Mail, MapPin, Facebook, Instagram, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-green-600 rounded-full opacity-90"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">PSYCOVE</h3>
                <p className="text-xs text-green-200 uppercase tracking-wide">Psychology & Mental Health</p>
              </div>
            </div>
            <p className="text-green-100 leading-relaxed">
              Taking care of your mental health isn't 
              a luxury — it's a step toward becoming 
              your most authentic self.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Link</h4>
              <ul className="space-y-3 text-green-100 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-3 text-green-100 text-sm">
                <div className="mt-8">
                  <a href="#" className="hover:text-white transition-colors">FAQs</a>
                </div>
                <div>
                  <a href="#" className="hover:text-white transition-colors">Articles</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-green-100 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-green-300" />
                <span>KLLG St, No.99, Pku City, ID 28239</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-300" />
                <span>www.hellodomainsite.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-300" />
                <span>0761-8523-398</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-600 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Get In Touch</h3>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Facebook className="w-5 h-5 text-green-700" />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-green-700" />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-green-700" />
                </div>
              </div>
            </div>
            
            <div className="flex items-center bg-white rounded-full p-2 w-full max-w-md">
              <input 
                type="email" 
                placeholder="Email"
                className="flex-1 px-4 py-2 text-gray-700 bg-transparent outline-none"
              />
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full">
                Subscribe Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-green-600">
            <p className="text-green-200 text-sm">
              Copyright © 2025 Rometheme. All Rights Reserved.
            </p>
            <div className="w-12 h-12 border border-green-500 rounded-full flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-green-300 -rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
