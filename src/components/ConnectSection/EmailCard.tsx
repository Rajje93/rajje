import React from 'react';

interface EmailCardProps {
  sender: string;
  status: string;
  subject: string;
  preview: string;
  isLast?: boolean;
}

const EmailCard = ({ sender, status, subject, preview, isLast }: EmailCardProps) => {
  return (
    <div 
      className={`group transition-colors duration-200 cursor-pointer hover:bg-[#2A2D3E] 
                ${!isLast ? 'border-b border-white/10' : ''}`}
    >
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-1">
          <span className="font-medium text-[15px] text-white/90">{sender}</span>
          <span className="text-[11px] bg-[#2196F3] text-white px-2 py-0.5 rounded-full font-medium">
            {status}
          </span>
        </div>
        <div className="text-[#CCCCCC] text-[13px] line-clamp-1">
          <span className="font-medium">{subject}</span>
          <span className="text-white/40"> - {preview}</span>
        </div>
      </div>
    </div>
  );
};

export default EmailCard; 