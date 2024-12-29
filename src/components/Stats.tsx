import React from 'react';

interface Stat {
  value: string;
  label: string;
}

const Stats = () => {
  const stats: Stat[] = [
    { value: '+1,111,288$', label: 'New revenue' },
    { value: '+2,028', label: 'Sales meetings' },
    { value: '+10,280,288$', label: 'Sales pipelines' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="rounded-3xl bg-[#1A1A3D]/50 backdrop-blur-sm border border-white/5 p-8 text-center"
        >
          <div className="text-3xl md:text-4xl font-bold text-white mb-2">
            {stat.value}
          </div>
          <div className="text-white/60 text-lg">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;