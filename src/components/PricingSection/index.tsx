import React from 'react';
import PricingCard from './PricingCard';

const PricingSection = () => {
  const standardFeatures = [
    { text: '10 Ideal clients in 30 days guaranteed' },
    { text: 'Ad-hoc sales system build.' },
    { text: 'Save 15+ hours a week from prospecting.' },
    { text: 'Pause or cancel anytime' },
    { text: 'Expand to new markets' }
  ];

  const premiumFeatures = [
    { text: '10 Ideal clients in 30 days guaranteed' },
    { text: 'Ad-hoc sales system build.' },
    { text: 'Save 15+ hours a week from prospecting.' },
    { text: 'Pause or cancel anytime' },
    { text: 'Expand to new markets' }
  ];

  const enterpriseFeatures = [
    { text: 'Documentation with every solution' },
    { text: '45-minute systems consultation' },
    { text: 'Discounted subscription' },
    { text: 'Pause or cancel anytime' },
    { text: 'Expand to new markets' }
  ];

  return (
    <section 
      id="pricing"
      className="bg-[#0D0B1F] px-6 py-24 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 
            id="pricing-section"
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Your investment
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We get started within 24h, handle everything for you, you sign dream clients with speed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative isolate">
          <PricingCard
            title="Standard"
            price="$3,458"
            features={standardFeatures}
            ctaText="Get started today"
            ctaStyle="secondary"
          />
          <div className="md:scale-105 md:-mt-2 relative z-10">
            <PricingCard
              title="Commit to 3 months & save $2,000"
              price="$8,374"
              features={premiumFeatures}
              ctaText="Sign up now →"
              ctaStyle="gradient"
              isPopular={true}
            />
          </div>
          <PricingCard
            title="Need more clients?"
            subtitle="Custom"
            price="Custom"
            features={enterpriseFeatures}
            ctaText="Let's talk"
            ctaStyle="primary"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;