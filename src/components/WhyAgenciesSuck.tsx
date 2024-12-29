import React from 'react';

const WhyAgenciesSuck = () => {
  return (
    <div className="bg-[#0D0B1F] px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">
          Why most lead gen agencies <span className="italic">suck</span>
        </h2>
        
        <div className="space-y-8 text-lg md:text-xl">
          <p className="text-white/80 max-w-4xl">
            99% of agencies rely on broad targeting, targeting by "persona" or "spray and pray". But the
            problem is today:
          </p>
          
          <p className="text-white/80 max-w-4xl font-medium">
            Buyers are overwhelmed with cold sales emails. Their inboxes are flooded with irrelevant
            junk.
          </p>
          
          <p className="text-white/80 max-w-4xl">
            The idea is simple, yet most don't implement it: target prospects based on the specific
            business pains you can solve, rather than just their job title and company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyAgenciesSuck;