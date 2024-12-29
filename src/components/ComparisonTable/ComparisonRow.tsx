import React from 'react';
import { Check, X } from 'lucide-react';

interface ComparisonRowProps {
  label: string;
  myoprocess: string | boolean;
  sdr: string;
  agency: string;
  diy: string;
}

const ComparisonRow = ({ label, myoprocess, sdr, agency, diy }: ComparisonRowProps) => {
  const renderCell = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-6 h-6 text-green-500" />
      ) : (
        <X className="w-6 h-6 text-red-500" />
      );
    }
    return value;
  };

  return (
    <div className="grid grid-cols-5 gap-4 py-6 border-b border-white/10">
      <div className="text-white font-medium">{label}</div>
      <div className="text-center text-white/80">{renderCell(myoprocess)}</div>
      <div className="text-center text-white/80">{renderCell(sdr)}</div>
      <div className="text-center text-white/80">{renderCell(agency)}</div>
      <div className="text-center text-white/80">{renderCell(diy)}</div>
    </div>
  );
};

export default ComparisonRow;