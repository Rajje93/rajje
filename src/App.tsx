import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyAgenciesSuck from './components/WhyAgenciesSuck';
import ComparisonSection from './components/ComparisonSection';
import ConnectSection from './components/ConnectSection';
import ProcessFeatures from './components/ProcessFeatures';
import RevenueMetrics from './components/RevenueMetrics';
import SystemIngredients from './components/SystemIngredients';
import ComparisonTable from './components/ComparisonTable';
import PricingSection from './components/PricingSection';
import FAQ from './components/FAQ';
import ScaleSection from './components/ScaleSection';
import Footer from './components/Footer';
import { useReactiveEffect } from './hooks/useReactiveEffect';
import { useHeaderFooter } from './hooks/useHeaderFooter';

function App() {
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      const headerHeight = 100; // Adjust based on your header height
      const elementPosition = ref.current.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#1C1E2A]">
      <Navbar 
        onCaseStudiesClick={() => scrollToRef(caseStudiesRef)}
        onServicesClick={() => scrollToRef(servicesRef)}
        onPricingClick={() => scrollToRef(pricingRef)}
      />
      <Hero />
      <WhyAgenciesSuck />
      <ComparisonSection />
      <div ref={caseStudiesRef}>
        <ConnectSection />
      </div>
      <div ref={servicesRef}>
        <ProcessFeatures />
      </div>
      <SystemIngredients />
      <RevenueMetrics />
      <ComparisonTable />
      <div ref={pricingRef}>
        <PricingSection />
      </div>
      <FAQ />
      <ScaleSection />
      <Footer />
    </div>
  );
}

export default App;