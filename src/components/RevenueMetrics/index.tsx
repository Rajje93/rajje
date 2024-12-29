import React, { useRef } from 'react';
import CaseStudyCard from './CaseStudyCard';

const RevenueMetrics = () => {
  const firstCaseStudyRef = useRef<HTMLDivElement>(null);

  // Make the ref accessible globally
  React.useEffect(() => {
    (window as any).scrollToFirstCaseStudy = () => {
      firstCaseStudyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Adjust for header
      setTimeout(() => {
        window.scrollBy(0, -100);
      }, 100);
    };
  }, []);

  const caseStudies = [
    {
      title: "Real prospects, real revenue",
      description: "We secured seven new major partnerships for our client, resulting in over $250,000 in revenue.",
      revenue: "+$145,000",
      meetings: "15",
      meetingsLabel: "Meetings/month",
      pipelineRevenue: "$145,000",
      averageDealValue: "$4,000",
      totalMeetings: "15"
    },
    {
      title: "+$70,000 in new revenue added in 3 months",
      description: "ForPlayers was able to raise prices and add over $70,000 in revenue.",
      revenue: "+$70,221",
      meetings: "13",
      meetingsLabel: "Meetings/month",
      pipelineRevenue: "$70,000",
      averageDealValue: "$23,000",
      totalMeetings: "13"
    },
    {
      title: "Multiple new clients from multiple new markets",
      description: "Our client went from operating locally to operating globally. We were able to get them a meeting with Indeed.",
      revenue: "+$85,000",
      meetings: "4",
      meetingsLabel: "High-ticket clients",
      pipelineRevenue: "$85,000",
      averageDealValue: "$3,000",
      totalMeetings: "4"
    }
  ];

  return (
    <section 
      id="case-studies"
      className="bg-[#0D0B1F] px-6 py-24 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {caseStudies.map((study, index) => (
          <div 
            key={index}
            ref={index === 0 ? firstCaseStudyRef : null}
          >
            <CaseStudyCard {...study} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RevenueMetrics;