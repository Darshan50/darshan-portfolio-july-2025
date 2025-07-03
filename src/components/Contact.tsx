import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Get In Touch
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-blue-600 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <a href="mailto:darshanthakkar501@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                darshanthakkar501@gmail.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <a href="tel:+918401971991" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                +91 84019-71991
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <p className="text-gray-400 text-sm">Ahmedabad, Gujarat</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Darshan50" className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600 transition-colors">
              <Github className="h-5 w-5 text-white" />
            </a>
            <a href="https://linkedin.com/in/darshan-thakkar-688506194/" className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600 transition-colors">
              <Linkedin className="h-5 w-5 text-white" />
            </a>
            {/* <a href="#" className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600 transition-colors">
              <Twitter className="h-5 w-5 text-white" />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;