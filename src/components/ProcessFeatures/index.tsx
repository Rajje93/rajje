import React from 'react';
import FeatureCard from './FeatureCard';

const ProcessFeatures = () => {
  const features = [
    {
      title: 'Pain-focused offer refinement',
      description: 'We build your offer using industry-specific language and tone that resonate with your prospects\' pain points. We then align your offer to address these pain points directly, ensuring your investment drives real revenue growth and tangible returns. No fluff.',
      gradientFrom: 'purple-400',
      gradientTo: 'pink-500',
      sectionTitle: 'Understand Your Audience'
    },
    {
      title: 'Connect With Purpose',
      description: 'We fill your pipeline with leads that are actually interested in your service/product. We use "pain sniffing" to identify real prospect pains and then reaching out to offer specific solutions for their specific problem.',
      gradientFrom: 'purple-400',
      gradientTo: 'pink-500',
      sectionTitle: 'Target With Precision'
    },
    {
      title: 'Scale With Precision',
      description: 'Our team handles the "boring stuff" of systematic sales. As meetings begin to flow in, we\'ll help you refine offer. We also give you access to a personalized board that auto-populates with "meeting-ready" prospects along with instant notifications to your Slack to minimize response time.',
      gradientFrom: 'purple-400',
      gradientTo: 'pink-500',
      sectionTitle: 'Automate & Scale'
    }
  ];

  return (
    <section 
      id="services"
      className="bg-[#0D0B1F] px-6 py-24 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            id="services-section"
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-6"
          >
            Our Process
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A systematic approach to generating high-quality leads and closing deals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="reactive-element effect-premium h-full bg-[#1A1A3D]/30 backdrop-blur-sm rounded-xl p-8 border border-white/5">
                <div className="relative z-10 space-y-6">
                  {/* Step Number */}
                  <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg px-3 py-1">
                    <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      Step {index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFeatures;