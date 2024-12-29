import React from 'react';
import { X, Check } from 'lucide-react';

const ComparisonSection = () => {
  const traditionalApproach = [
    {
      title: 'Generic Outreach:',
      description: 'Messaging is too broad and fails to resonate with prospect\'s unique pain points.'
    },
    {
      title: 'Missed Opportunities:',
      description: 'You might overlook potential clients who need your help but don\'t fit the usual criteria.'
    },
    {
      title: 'Wasted Resources:',
      description: 'Time and effort are spent on leads that aren\'t interested, leading to you losing money and time.'
    },
    {
      title: 'Advertising Cost Spiral:',
      description: 'When generic cold emails fail to convert, companies panic-pivot to paid ads, and spend way too much cash on pricey PPC campaigns and inflated CPAs - a budget-draining cycle that rarely solves the core prospecting problem.'
    },
    {
      title: 'Opportunity Cost Creep:',
      description: 'While your team wastes billable hours chasing unqualified prospects, your competitors are closing deals.'
    }
  ];

  const myoProcessWay = [
    {
      title: 'Personalized Messaging:',
      description: 'We speak directly to the issues your prospects face, making them more relevant and timely.'
    },
    {
      title: 'Better Conversion Rates:',
      description: 'Prospects are more likely to buy from you when they see you providing solutions to their problems (simple math).'
    },
    {
      title: 'No time wasted on prospection:',
      description: 'We target leads that really need your services, making your outreach more effective.'
    },
    {
      title: 'Build Trust:',
      description: 'Showing you understand their challenges and can solve their problem helps build trust and get them on retainers aka long-term relationships for your business.'
    },
    {
      title: 'Faster Revenue Generation:',
      description: 'By targeting only the most relevant prospects, the myoProcess Method shortens the sales cycle to close deals quicker and get cash flowing faster, accelerating revenue.'
    }
  ];

  return (
    <div className="bg-[#0D0B1F] px-6 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
            What 99% of SDRS/lead gen agencies do
          </h3>
          <p className="text-white/80 text-xl mb-8">
            Let's target all CFOs at manufacturing companies with 1000+ employees.
          </p>
          <div className="space-y-6">
            {traditionalApproach.map((item, index) => (
              <div key={index} className="flex gap-4">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="text-white font-medium">{item.title}</span>
                  <span className="text-white/80"> {item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="reactive-element space-y-8 bg-[#1A1A3D]/30 p-8 rounded-2xl backdrop-blur-sm">
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
              The "myoProcessWay"
            </h3>
            <p className="text-white/80 text-xl mb-8">
              Let's target companies struggling with cash flow management or looking to automate their financial reporting processes.
            </p>
            <div className="space-y-6">
              {myoProcessWay.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-white font-medium">{item.title}</span>
                    <span className="text-white/80"> {item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;