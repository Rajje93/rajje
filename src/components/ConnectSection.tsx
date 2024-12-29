import React from 'react';

const ConnectSection = () => {
  return (
    <div className="bg-[#0D0B1F] px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              We connect you with your dream clients.
            </h2>
            <div className="space-y-4">
              <p className="text-xl text-white/80">
                We win you the deals; your sales team just takes the sales calls—a lot of them.
              </p>
              <p className="text-xl text-white/80">
                We're on track to $10,000M in pipeline for companies this year.
              </p>
            </div>
          </div>

          {/* Right Column - Email Preview */}
          <div className="relative">
            <div className="bg-[#1E2028] rounded-lg overflow-hidden shadow-2xl">
              {/* Browser-like top bar */}
              <div className="bg-[#2A2C35] px-4 py-2 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              {/* Email interface */}
              <div className="p-4">
                <div className="flex items-center space-x-4 mb-4">
                  <input
                    type="text"
                    placeholder="Search mail"
                    className="bg-[#2A2C35] text-white/60 px-4 py-2 rounded-md w-full"
                    readOnly
                  />
                </div>

                {/* Email list */}
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="border-b border-white/10 py-3 px-2 flex items-center space-x-4 hover:bg-white/5 transition-colors"
                  >
                    <div className="w-4 h-4 border border-white/30 rounded-sm"></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-medium">Dream Team</span>
                        <span className="bg-blue-500 text-xs text-white px-2 py-0.5 rounded">New</span>
                      </div>
                      <div className="text-white/60 text-sm truncate">
                        New Booked Lead: Interested - We've received a new lead response from our latest campaign...
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;