import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const Features = () => {
  return (
    <div className="bg-[#1C1E2A] px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">
          Why most lead gen agencies <span className="text-[#FF58F9]">suck</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-medium mb-2">Wrong Approach</h3>
                <p className="text-white/60">They focus on vanity metrics that don't translate to real revenue growth.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-medium mb-2">Poor Execution</h3>
                <p className="text-white/60">Generic templates and spray-and-pray tactics that waste your budget.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-medium mb-2">Our Approach</h3>
                <p className="text-white/60">Targeted campaigns with proven ROI, focused on quality leads that convert.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-medium mb-2">Data-Driven Results</h3>
                <p className="text-white/60">Every campaign is optimized based on real performance data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;