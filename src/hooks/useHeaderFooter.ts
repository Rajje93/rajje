import { useEffect } from 'react';

export const useHeaderFooter = () => {
  useEffect(() => {
    // Get the elements
    const navbar = document.querySelector('header');
    const footer = document.querySelector('footer');
    const bookButtons = document.querySelectorAll('.book-button');

    // Add classes and styles
    if (navbar) {
      navbar.className = "fixed top-0 left-0 right-0 bg-[#1C1E2A]/90 backdrop-blur-sm z-50 border-b border-white/5";
    }

    if (footer) {
      footer.className = "relative bg-[#0D0B1F] overflow-hidden";
    }

    // Update button text
    bookButtons.forEach(button => {
      if (button.textContent?.includes('Book a Free Call')) {
        button.textContent = 'Book more meetings';
      }
    });
  }, []);
}; 