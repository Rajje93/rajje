import React from 'react';

const ConnectSection = () => {
  const emails = [
    {
      sender: "Dream Team",
      status: "New",
      subject: "High-Value Lead Secured",
      preview: "Fortune 500 company interested in our enterprise solution. Meeting scheduled for tomorrow.",
      time: "2m ago"
    },
    {
      sender: "Sales Pipeline",
      status: "Urgent",
      subject: "Meeting Confirmed: Microsoft",
      preview: "Senior Decision Maker confirmed for strategy discussion. Preparing materials now.",
      time: "5m ago"
    },
    {
      sender: "Lead Generation",
      status: "Hot Lead",
      subject: "Tesla Shows Interest",
      preview: "Direct response from Tesla's Head of Innovation. Requesting immediate follow-up.",
      time: "12m ago"
    },
    {
      sender: "Dream Team",
      status: "Success",
      subject: "Deal Closed: $500K",
      preview: "Major enterprise client signed! Full details and next steps enclosed.",
      time: "25m ago"
    },
    {
      sender: "Sales Pipeline",
      status: "New",
      subject: "Amazon Web Services Lead",
      preview: "AWS team requesting product demo. High-priority prospect identified.",
      time: "45m ago"
    }
  ];

  return (
    <div className="bg-[#0D0B1F] px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  We connect you with
                </span>
                <br />
                <span className="text-white">your dream clients.</span>
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-white/80 leading-relaxed">
                  We win you the deals; your sales team just takes the sales calls
                  <span className="text-white font-medium">—a lot of them.</span>
                </p>
                <p className="text-xl">
                  <span className="text-white/80">We're on track to </span>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-bold">
                    $10,000M
                  </span>
                  <span className="text-white/80"> in pipeline for companies this year.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Email Dashboard */}
          <div className="relative flex justify-end">
            <div className="reactive-element effect-premium w-full lg:w-[35%] xl:w-[400px] h-[600px] bg-[#1C1E2A] rounded-xl overflow-hidden shadow-2xl flex flex-col">
              <div className="relative z-10">
                {/* Dashboard Title */}
                <div className="p-4 bg-[#1C1E2A] border-b border-white/10">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                    Live Feed - Latest Bookings
                  </h3>
                </div>

                {/* Search Header */}
                <div className="p-4 border-b border-white/10 bg-[#1C1E2A] sticky top-0">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search leads"
                      className="w-full bg-[#2A2D3E] text-white placeholder-white/40 px-4 py-3 rounded-lg
                               border border-white/5 focus:outline-none focus:border-white/20
                               shadow-lg transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Email List */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                  {emails.map((email, index) => (
                    <div 
                      key={index}
                      className="group transition-all duration-200 cursor-pointer hover:bg-[#2A2D3E]"
                    >
                      <div className="px-4 py-3 border-b border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-[15px] text-white/90">{email.sender}</span>
                            <span className="text-[11px] bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-0.5 rounded-full font-medium">
                              {email.status}
                            </span>
                          </div>
                          <span className="text-xs text-white/40">{email.time}</span>
                        </div>
                        <div className="space-y-1">
                          <div className="font-medium text-[13px] text-white/90">{email.subject}</div>
                          <div className="text-[13px] text-white/50 line-clamp-1">{email.preview}</div>
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
    </div>
  );
};

export default ConnectSection;