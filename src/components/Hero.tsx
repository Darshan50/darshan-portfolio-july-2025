import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Darshan <span className="text-blue-400">Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Backend Developer 
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I build scalable backend systems, APIs, and infrastructure that power modern applications. 
            Passionate about clean code, performance optimization, and solving complex problems.
          </p>
          
{/*           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
  <a
    href="/Darshan-Resume.pdf"
    download
    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
  >
    <span>Download Resume</span>  
  </a>
  <button 
    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
    className="px-8 py-3 border border-blue-400 text-blue-400 hover:bg-white-400 hover:text-white rounded-lg font-medium transition-colors"
  >
    Get In Touch
  </button>
</div> */}


          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Darshan50" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/darshan-thakkar-688506194/" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:darshanthakkar501@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
