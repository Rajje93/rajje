import React from 'react';
import MetricCard from './MetricCard';

interface CaseStudyCardProps {
  title: string;
  description: string;
  revenue: string;
  meetings: string;
  meetingsLabel: string;
  pipelineRevenue: string;
  averageDealValue: string;
  totalMeetings: string;
  isFirst?: boolean;
}

const CaseStudyCard = ({
  title,
  description,
  revenue,
  meetings,
  meetingsLabel,
  pipelineRevenue,
  averageDealValue,
  totalMeetings,
  isFirst
}: CaseStudyCardProps) => {
  return (
    <div 
      id="first-case-study"
      className="grid lg:grid-cols-[1fr,1.2fr] gap-20 items-start mb-32"
    >
      {/* Left Column - Text Content */}
      <div className="space-y-10">
        <div className="space-y-6">
          <h2 
            id="case-studies-section"
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            {title}
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="reactive-element effect-premium bg-[#1A1A3D]/30 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:bg-[#1A1A3D]/50 transition-colors">
            <p className="text-white/60 text-sm mb-3">Added to sales pipeline/month</p>
            <p className="text-3xl font-bold text-white">{revenue}</p>
          </div>
          <div className="reactive-element effect-premium bg-[#1A1A3D]/30 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:bg-[#1A1A3D]/50 transition-colors">
            <p className="text-white/60 text-sm mb-3">{meetingsLabel}</p>
            <p className="text-3xl font-bold text-white">{meetings}</p>
          </div>
        </div>
      </div>

      {/* Right Column - Dashboard Visual */}
      <div className="relative">
        <div className="reactive-element effect-premium bg-[#1A1A3D]/30 backdrop-blur-sm rounded-xl p-8 border border-white/5 hover:bg-[#1A1A3D]/50 transition-colors">
          <div className="relative z-10 space-y-8">
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "New Pipeline Revenue", value: pipelineRevenue },
                { label: "Average Deal Value", value: averageDealValue },
                { label: "Total Meetings", value: totalMeetings }
              ].map((metric, index) => (
                <div key={index} className="reactive-element effect-premium bg-[#1A1A3D]/30 backdrop-blur-sm rounded-xl p-5 border border-white/5 hover:bg-[#1A1A3D]/50 transition-colors">
                  <p className="text-white/60 text-sm mb-3">{metric.label}</p>
                  <p className="text-xl font-bold text-white">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="reactive-element effect-premium bg-[#1A1A3D]/30 backdrop-blur-sm rounded-xl p-10 border border-white/5 hover:bg-[#1A1A3D]/50 transition-colors">
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent mb-4">
                  {revenue}
                </div>
                <div className="text-lg text-purple-300/80">Sales Pipeline added/month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;