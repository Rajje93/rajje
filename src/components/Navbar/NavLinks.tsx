import React from 'react';

const NavLinks = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const sectionPosition = section.offsetTop;
      const offsetPosition = sectionPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Add scroll margin to sections via CSS
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      section[id] {
        scroll-margin-top: 80px;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <nav className="hidden md:flex items-center space-x-8">
      <button 
        onClick={() => scrollToSection('case-studies')}
        className="text-white/80 hover:text-white transition-colors cursor-pointer"
      >
        Case Studies
      </button>
      <button 
        onClick={() => scrollToSection('services')}
        className="text-white/80 hover:text-white transition-colors cursor-pointer"
      >
        Services
      </button>
      <button 
        onClick={() => scrollToSection('pricing')}
        className="text-white/80 hover:text-white transition-colors cursor-pointer"
      >
        Pricing
      </button>
    </nav>
  );
};

export default NavLinks;