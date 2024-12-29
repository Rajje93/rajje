import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import BookButton from './BookButton';

interface NavbarProps {
  onCaseStudiesClick: () => void;
  onServicesClick: () => void;
  onPricingClick: () => void;
}

const Navbar = ({ onCaseStudiesClick, onServicesClick, onPricingClick }: NavbarProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1C1E2A]/90 backdrop-blur-sm z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <NavLinks 
            onCaseStudiesClick={onCaseStudiesClick}
            onServicesClick={onServicesClick}
            onPricingClick={onPricingClick}
          />
          <BookButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;