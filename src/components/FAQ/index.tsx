import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why do this instead of hiring an SDR?",
      answer: (
        <>
          <p className="mb-4">
            <span className="text-purple-400 font-semibold">$8,595/mo minimum</span> is what you'd pay a single good SDR—except for 17x the output. You're also on the hook for benefits, severance, and there's no guarantee they'll deliver what you want them to.
          </p>
          <p>
            Our system is simply quantitatively & qualitatively better for the vast majority of companies under $3M/yr: you pay less, get results faster.
          </p>
        </>
      )
    },
    {
      question: "How much more cost-effective is this, really?",
      answer: (
        <>
          <p className="mb-4">
            When you take into account payroll, benefits, severance, and the opportunity cost of hiring, our service is <span className="text-purple-400 font-semibold">~30% of the price</span> of hiring in-house and <span className="text-purple-400 font-semibold">~70% of the price</span> of hiring an agency.
          </p>
          <p>
            You also get access to two world-class ops executives that have helped scale several 8-figure companies, as well as a 100% satisfaction guarantee.
          </p>
        </>
      )
    },
    {
      question: "How does payment work?",
      answer: (
        <p>
          Our pricing is mostly based on results. When you click one of the payment options above, you'll be taken to a Stripe Checkout page. After you pay, we'll automatically create a subscription for you that renews on the same day every month. You can cancel or pause at any time.
        </p>
      )
    },
    {
      question: "How quickly do we see results?",
      answer: (
        <>
          <p className="mb-4">
            We don't waste 14 days on "warm-up" nonsense or infrastructure fluff like other lead gen agencies. While they're busy warming up domains, <span className="text-white font-medium">we're busy delivering results</span>.
          </p>
          <p>
            We can get started in just a few days, and you'll start seeing results within <span className="text-purple-400 font-semibold">3–5 days</span>. Most of our clients see a positive ROI within the first month—no delays, no excuses.
          </p>
        </>
      )
    },
    {
      question: "What's your refund policy?",
      answer: (
        <>
          <p className="mb-4">
            If you're not 100% satisfied with your service, we'll keep working for free until you are.
          </p>
          <p>
            We are committed to ensuring your satisfaction and will work diligently to address any concerns during your notice period.
          </p>
        </>
      )
    }
  ];

  return (
    <section className="bg-[#0D0B1F] px-6 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Commonly asked questions
            </span>
          </h2>
          <p className="text-xl text-white/70">
            Everything you need to know about working with us
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="reactive-element effect-premium bg-[#1A1A3D]/30 backdrop-blur-sm rounded-xl border border-white/5 hover:border-purple-500/20 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
              >
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-purple-400 transition-transform duration-300 flex-shrink-0
                    ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out
                  ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 pb-6 text-white/70 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-6">
            Have more questions?
          </p>
          <button className="reactive-element relative group px-8 py-4 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8758FF] to-[#FF58F9]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF58F9] to-[#8758FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative text-white font-medium">
              Let's talk
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;