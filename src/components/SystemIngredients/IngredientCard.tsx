import React from 'react';

interface IngredientCardProps {
  number: string;
  title: string;
  description: string;
}

const IngredientCard = ({ number, title, description }: IngredientCardProps) => {
  return (
    <div className="reactive-element bg-[#1A1A3D]/30 backdrop-blur-sm rounded-2xl p-8 border border-white/5 transition-all duration-300">
      <div className="relative z-10">
        <div className="text-sm font-medium text-purple-400 mb-4">{number}</div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default IngredientCard;