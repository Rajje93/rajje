import React from 'react';
import { Check, X } from 'lucide-react';
import ComparisonRow from './ComparisonRow';

const ComparisonTable = () => {
  const comparisonData = [
    {
      label: 'Time to get results',
      myoprocess: '21-30 Days',
      sdr: '3 Months',
      agency: '2-4 Weeks',
      diy: '3-6 Months'
    },
    {
      label: 'Failure rate',
      myoprocess: 'Unlikely',
      sdr: 'Medium',
      agency: 'High',
      diy: 'Very High'
    },
    {
      label: 'Price',
      myoprocess: 'Based On Results',
      sdr: '+$8,000/month',
      agency: '+$5K+ Media Buying Budget',
      diy: '$3K For Software, Tools + Time Wasted'
    },
    {
      label: 'Guarantees',
      myoprocess: true,
      sdr: false,
      agency: 'Rarely',
      diy: false
    }
  ];

  const renderCell = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-6 h-6 text-green-500 mx-auto" />
      ) : (
        <X className="w-6 h-6 text-red-500/90 mx-auto" />
      );
    }
    if (value === 'Rarely') {
      return <span className="text-yellow-500/90">{value}</span>;
    }
    return value;
  };

  return (
    <div className="bg-[#0D0B1F] px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Let's compare your options
          </span>
        </h2>

        {/* Table Container */}
        <div className="reactive-element effect-premium bg-[#1A1A3D]/30 backdrop-blur-sm rounded-2xl p-8 border border-white/5 relative group">
          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-purple-500/30 rounded-tl-2xl group-hover:border-purple-500/50 transition-colors duration-500"></div>
          <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-pink-500/30 rounded-tr-2xl group-hover:border-pink-500/50 transition-colors duration-500"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-pink-500/30 rounded-bl-2xl group-hover:border-pink-500/50 transition-colors duration-500"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-purple-500/30 rounded-br-2xl group-hover:border-purple-500/50 transition-colors duration-500"></div>

          <div className="relative z-10">
            {/* Header Row */}
            <div className="grid grid-cols-5 gap-4 mb-8 border-b border-white/10 pb-6">
              <div className="text-white/60"></div>
              {/* myoprocess column */}
              <div className="text-center relative group/item">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <div className="relative bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-xl mb-2 shadow-lg transform group-hover/item:scale-105 transition-transform duration-500">
                  <div className="text-white font-bold text-lg">myoprocess.</div>
                </div>
              </div>
              {/* Other columns */}
              {['Hiring an SDR', 'Marketing Agency', 'Do It Yourself'].map((title) => (
                <div key={title} className="text-center relative group/item">
                  <div className="relative bg-white/5 p-4 rounded-xl transform group-hover/item:scale-105 transition-transform duration-500">
                    <div className="text-white/80 font-medium">{title}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Rows */}
            <div className="space-y-2">
              {comparisonData.map((row, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-5 gap-4 py-6 border-b border-white/10 hover:bg-white/5 transition-all duration-300 rounded-lg px-4 group/row"
                >
                  <div className="text-white font-medium text-lg flex items-center">
                    <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                      {row.label}
                    </span>
                  </div>
                  <div className="text-center">
                    {row.label === 'Guarantees' ? (
                      renderCell(row.myoprocess)
                    ) : (
                      <div className="relative group/cell">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover/cell:opacity-100 blur-xl transition-opacity duration-500"></div>
                        <span className="relative text-white font-bold bg-gradient-to-r from-purple-400 to-pink-500 px-4 py-1 rounded-full transform group-hover/cell:scale-105 transition-transform duration-300">
                          {row.myoprocess}
                        </span>
                      </div>
                    )}
                  </div>
                  {[row.sdr, row.agency, row.diy].map((value, i) => (
                    <div key={i} className="text-center text-white/80 group-hover/row:text-white/90 transition-colors duration-300">
                      {renderCell(value)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;