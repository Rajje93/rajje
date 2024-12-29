import React from 'react';
import EmailCard from './EmailCard';

const EmailDashboard = () => {
  const emails = [
    {
      sender: "Dream Team",
      status: "New",
      subject: "New Booked Lead: Interested",
      preview: "We've received a new lead response from our latest campaign..."
    },
    {
      sender: "Sales Pipeline",
      status: "New",
      subject: "Meeting Scheduled",
      preview: "Your next sales call has been confirmed for tomorrow at 2 PM..."
    },
    {
      sender: "Lead Generation",
      status: "New",
      subject: "New Prospect Alert",
      preview: "A high-value prospect has shown interest in our enterprise solution..."
    },
    {
      sender: "Client Success",
      status: "Update",
      subject: "Campaign Performance",
      preview: "Your latest campaign has generated 25 new qualified leads..."
    }
  ].concat(Array(4).fill({
    sender: "Dream Team",
    status: "New",
    subject: "New Booked Lead: Interested",
    preview: "We've received a new lead response from our latest campaign..."
  }));

  return (
    <div className="w-full lg:w-[35%] xl:w-[400px] h-[600px] bg-[#1C1E2A] rounded-xl overflow-hidden shadow-2xl flex flex-col">
      {/* Dashboard Title */}
      <div className="p-4 bg-[#1C1E2A] border-b border-white/10">
        <h3 className="text-xl font-semibold text-white">
          Inbox - Latest Bookings
        </h3>
      </div>

      {/* Search Header */}
      <div className="p-4 border-b border-white/10 bg-[#1C1E2A] sticky top-0">
        <div className="relative">
          <input
            type="text"
            placeholder="Search mail"
            className="w-full bg-[#2A2D3E] text-white placeholder-white/40 px-4 py-3 rounded-lg
                     border border-white/5 focus:outline-none focus:border-white/20
                     shadow-lg transition-all text-sm"
          />
        </div>
      </div>

      {/* Email List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {emails.map((email, index) => (
          <EmailCard 
            key={index}
            {...email}
            isLast={index === emails.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailDashboard; 