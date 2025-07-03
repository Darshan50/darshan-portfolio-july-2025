import React from 'react';
import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="h-6 w-6 text-blue-400" />
            <span className="text-white font-semibold">DevPortfolio</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            © 2024 John Developer. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;