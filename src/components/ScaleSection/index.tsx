import React from 'react';
import Signature from './Signature';

const ScaleSection = () => {
  return (
    <div className="bg-[#0D0B1F] px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          The new way to scale.
        </h2>
        
        <p className="text-xl text-white/80 leading-relaxed">
          Cold email has a frustrating tradeoff: either <span className="text-white">you sacrifice quality for volume ( spray and pray )</span>, or you spend way too much money for people to sit around and write one or two great emails a day. Our Approach is different. Every email we send is timely and relevant, and <span className="text-white">we can do it at infinite scale. We win you millions in pipeline.</span>
        </p>

        <p className="text-xl text-white/80 leading-relaxed">
          Scaling personalized cold outbound is also easy to do wrong—which has consequences for both your brand (making you look bad) and your business (losing you money). When you work with us, you're in good hands.
        </p>

        <p className="text-xl text-white/80 leading-relaxed">
          We've sent millions of emails, <span className="text-white">generated nearly $10M in pipeline</span>, and are neurotically obsessed with getting the little details right so everything goes smoothly.
        </p>

        <Signature />
      </div>
    </div>
  );
};

export default ScaleSection;