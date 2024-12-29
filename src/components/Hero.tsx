import React from 'react';
import Stats from './Stats';
import ClientLogos from './ClientLogos';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#0D0B1F] overflow-hidden perspective-1000">
      {/* Advanced Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated 3D Grid */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] animate-grid-spin"></div>
        
        {/* Animated Gradient Spheres */}
        <div className="absolute top-1/4 -left-[10%] w-[600px] h-[600px] animate-morph-slow">
          <div className="absolute inset-0 bg-gradient-conic from-purple-600/40 via-blue-600/40 to-purple-600/40 rounded-full blur-3xl animate-spin-slower"></div>
          <div className="absolute inset-[20%] bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-2xl animate-float-slow"></div>
        </div>
        
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] animate-morph-delayed">
          <div className="absolute inset-0 bg-gradient-conic from-pink-600/30 via-purple-600/30 to-pink-600/30 rounded-full blur-3xl animate-spin-slow"></div>
          <div className="absolute inset-[20%] bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full blur-2xl animate-float-delayed"></div>
        </div>

        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
            <div className="absolute inset-0 animate-lines">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-[2px] w-full"
                  style={{
                    top: `${i * 10}%`,
                    left: 0,
                    background: 'linear-gradient(90deg, transparent, rgba(135,88,255,0.1), transparent)',
                    transform: `rotate(${i % 2 ? 1 : -1}deg)`,
                    animation: `moveLines ${8 + i * 0.5}s linear infinite`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,11,31,0)_0%,rgba(13,11,31,0.7)_100%)]"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 pt-32 text-center">
        {/* Animated Tag Line */}
        <div className="inline-block relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative px-6 py-2 rounded-full bg-[rgba(26,26,61,0.8)] backdrop-blur-sm border border-purple-500/30 group-hover:border-purple-500/50 transition-all duration-500">
            <span className="text-white/80 text-sm font-medium bg-gradient-to-r from-white to-white/70 bg-clip-text">
              Automate your lead acquisition
            </span>
          </div>
        </div>

        {/* Animated Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight mt-8 perspective">
          <span className="inline-block animate-gradient-x bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent bg-[length:200%_auto] hover:animate-pulse transition-all duration-500">
            We build hands-off growth systems
          </span>
          <br />
          <span className="text-white relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-transparent after:via-purple-500/50 after:to-transparent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500">
            for B2B leaders.
          </span>
        </h1>

        {/* Enhanced Subheading */}
        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed backdrop-blur-sm relative">
          <span className="relative z-10">
            We've Helped Our Clients Unlock Over 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
              $10,000,000
            </span> 
            In Potential Deals
          </span>
        </p>

        {/* Animated CTA Button */}
        <button className="relative group px-6 py-3 text-base rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(135,88,255,0.3)]">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#8758FF] to-[#FF58F9]"></div>
          
          {/* Hover gradient shift */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF58F9] to-[#8758FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Animated glow effect */}
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-[20deg] group-hover:animate-shine"></div>
          
          {/* Glow border */}
          <div className="absolute inset-[-1px] bg-gradient-to-r from-[#8758FF] to-[#FF58F9] opacity-0 group-hover:opacity-30 blur-md transition-all duration-500"></div>
          
          {/* Button text */}
          <span className="relative flex items-center justify-center gap-2 font-medium text-white">
            Book more meetings
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </span>
        </button>

        {/* Year Indicator */}
        <div className="mt-24 mb-12 text-center relative group perspective">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
          <h2 className="relative text-4xl font-medium bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent mb-2">
            In 2024
          </h2>
          <p className="relative text-xl text-white/60">We generated our clients:</p>
        </div>

        {/* Stats Section */}
        <Stats />

        {/* Client Logos */}
        <ClientLogos />
      </div>
    </div>
  );
};

export default Hero;