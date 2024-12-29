import React from 'react';
import { Menu, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-opacity-90 bg-[#1C1E2A] backdrop-blur-sm z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Menu className="h-6 w-6 text-white/80 lg:hidden" />
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white transition">Case Studies</a>
            <a href="#" className="text-white/80 hover:text-white transition">Services</a>
            <a href="#" className="text-white/80 hover:text-white transition">Pricing</a>
          </div>
        </div>
        <button className="flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#8758FF] to-[#FF58F9] text-white font-medium">
          <Phone className="w-4 h-4 mr-2" />
          Book a Free Call
        </button>
      </div>
    </nav>
  );
};

export default Navbar;