import React from 'react';

const BrowserTopBar = () => {
  return (
    <div className="bg-[#2A2C35] px-4 py-2 flex items-center space-x-2">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
    </div>
  );
};

export default BrowserTopBar;