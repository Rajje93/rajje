import React from 'react';

interface MetricCardProps {
  label: string;
  value: string;
  suffix?: string;
}

const MetricCard = ({ label, value, suffix }: MetricCardProps) => {
  return (
    <div className="space-y-1">
      <p className="text-purple-300/80 text-lg">{label}</p>
      <p className="text-4xl font-bold text-white">
        {value}
        {suffix && <span className="text-purple-300/80 text-2xl ml-1">{suffix}</span>}
      </p>
    </div>
  );
};

export default MetricCard;