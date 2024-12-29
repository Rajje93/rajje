import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <div className="bg-gradient-to-b from-[#0D0B1F] to-[#1C1E2A] px-6 py-32">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <p className="text-white/80">No credit card required.</p>
        
        <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Get started today with a 25min intro call
        </h2>
        
        <h3 className="text-4xl md:text-6xl font-bold text-white">
          With Saad
        </h3>

        <div className="pt-8">
          <button className="group px-8 py-4 text-xl rounded-full bg-white text-[#0D0B1F] hover:bg-white/90 transition-all duration-200 flex items-center gap-2 mx-auto">
            Book More Meetings 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;