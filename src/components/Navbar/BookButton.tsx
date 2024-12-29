import React from 'react';
import { ArrowRight } from 'lucide-react';

const BookButton = () => {
  return (
    <button className="book-button reactive-element effect-premium relative group px-4 py-2 text-sm rounded-full overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8758FF] to-[#FF58F9]"></div>
      
      {/* Hover gradient shift */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF58F9] to-[#8758FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated glow effect */}
      <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-[20deg] group-hover:animate-shine"></div>
      
      {/* Glow border */}
      <div className="absolute inset-[-1px] bg-gradient-to-r from-[#8758FF] to-[#FF58F9] opacity-0 group-hover:opacity-30 blur-md transition-all duration-500"></div>
      
      {/* Button text */}
      <span className="relative flex items-center justify-center gap-2 font-medium text-white">
        Book more meetings
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </button>
  );
};

export default BookButton;