"use client";


import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-green-600 rounded-full opacity-80"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">PSYCOVE</h1>
              <p className="text-xs text-gray-600 uppercase tracking-wide">Psychology & Mental Health</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Homepage</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">About Us</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Contact Us</a>
          </nav>
          
          <Button variant="outline" className="md:hidden" size="sm">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
