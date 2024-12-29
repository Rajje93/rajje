import React from 'react';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  features: PricingFeature[];
  ctaText: string;
  ctaStyle?: 'primary' | 'secondary' | 'gradient';
  subtitle?: string;
  isPopular?: boolean;
}

const PricingCard = ({ title, price, features, ctaText, ctaStyle = 'primary', subtitle, isPopular }: PricingCardProps) => {
  return (
    <div className="relative group">
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-3 inset-x-0 flex justify-center z-20">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-xl">
            <div className="px-6 py-1.5 text-sm font-medium text-white">
              Most Popular
            </div>
          </div>
        </div>
      )}

      {/* Card Container */}
      <div className={`reactive-element effect-premium h-full bg-[#1A1A3D]/30 backdrop-blur-sm border border-white/5 p-8 flex flex-col
        ${isPopular ? 'shadow-[0_0_40px_rgba(139,92,246,0.1)] border-purple-500/20 rounded-b-2xl rounded-t-none mt-3' : 'rounded-2xl'}`}
      >
        <div className="relative z-10 space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">
              {title}
            </h3>
            {subtitle && (
              <p className="text-white/60 text-sm">{subtitle}</p>
            )}
          </div>

          {/* Price */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">{price}</span>
              <span className="text-lg text-white/60">/month</span>
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-4 flex-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-white/80 group/item">
                <Check className="w-5 h-5 text-purple-400 mt-0.5 group-hover/item:text-purple-300 transition-colors" />
                <span className="group-hover/item:text-white transition-colors">
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className={`
            relative w-full py-4 px-6 rounded-xl font-medium transition-all duration-300
            ${isPopular ? 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]' : 'group-hover:shadow-lg'}
            ${ctaStyle === 'gradient' 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-[1.02]' 
              : ctaStyle === 'secondary'
                ? 'bg-white/10 text-white hover:bg-white/20'
                : 'bg-white text-[#0D0B1F] hover:bg-gray-100'
            }
          `}>
            <div className="relative flex items-center justify-center gap-2">
              <span>{ctaText}</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;