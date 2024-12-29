import React from 'react';

const FooterNavigation = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white">Navigation</h3>
      <ul className="space-y-3">
        <li>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            Fulfillment Policy
          </a>
        </li>
        <li>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterNavigation;