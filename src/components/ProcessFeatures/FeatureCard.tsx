import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

const FeatureCard = ({ title, description, gradientFrom, gradientTo }: FeatureCardProps) => {
  return (
    <div className="reactive-element effect-holo space-y-4 bg-[#1A1A3D]/30 backdrop-blur-sm rounded-2xl p-8 border border-white/5 transition-all duration-300">
      <div className="relative z-10">
        <h3 
          className={`text-3xl font-bold bg-gradient-to-r from-${gradientFrom} to-${gradientTo} bg-clip-text text-transparent`}
        >
          {title}
        </h3>
        <p className="text-white/80 text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;