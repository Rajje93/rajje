import React from 'react';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1C1E2A] px-6 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-6">
          Get started today with a 25min intro call
        </h3>
        <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#8758FF] to-[#FF58F9] text-white font-medium flex items-center mx-auto mb-12">
          <Phone className="w-5 h-5 mr-2" />
          Book a Free Call
        </button>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white/60 text-sm">
          <div className="space-y-4">
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Lead Generation</a></li>
              <li><a href="#" className="hover:text-white transition">Marketing</a></li>
              <li><a href="#" className="hover:text-white transition">Analytics</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;