import React from 'react';
import BrowserTopBar from './BrowserTopBar';
import EmailInterface from './EmailInterface';

const EmailPreview = () => {
  return (
    <div className="relative">
      <div className="bg-[#1E2028] rounded-lg overflow-hidden shadow-2xl">
        <BrowserTopBar />
        <EmailInterface />
      </div>
    </div>
  );
};

export default EmailPreview;