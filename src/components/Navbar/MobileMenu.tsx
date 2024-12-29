import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu = ({ isOpen, onToggle }: MobileMenuProps) => {
  return (
    <div className="md:hidden">
      <button 
        onClick={onToggle}
        className="text-white p-2 hover:text-[#8758FF] transition-colors duration-300"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1C1E2A]/90 backdrop-blur-sm border-t border-white/10">
          <nav className="flex flex-col space-y-4 p-6">
            <a href="#case-studies" className="text-white hover:text-[#8758FF] transition-colors duration-300">
              Case Studies
            </a>
            <a href="#services" className="text-white hover:text-[#8758FF] transition-colors duration-300">
              Services
            </a>
            <a href="#pricing" className="text-white hover:text-[#8758FF] transition-colors duration-300">
              Pricing
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;