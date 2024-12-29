import React from 'react';

const EmailInterface = () => {
  return (
    <div className="bg-[#1C1E2A] rounded-lg overflow-hidden shadow-xl">
      {/* Search Header */}
      <div className="p-4 border-b border-white/10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search mail"
            className="w-full bg-[#2A2D3E] text-white/60 px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-white/20 transition-colors"
          />
        </div>
      </div>

      {/* Email List Container */}
      <div className="h-[500px] overflow-y-auto">
        {/* Email Items */}
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="p-4 border-b border-white/10 hover:bg-[#2A2D3E] transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between mb-1">
              <span className="font-semibold text-white">Dream Team</span>
              <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">
                New
              </span>
            </div>
            <div className="text-white/60 text-sm line-clamp-2">
              New Booked Lead: Interested - We've received a new lead response from our latest campaign...
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailInterface;