import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        className="w-full py-8 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-2xl text-white font-medium">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-white/60" />
        ) : (
          <ChevronDown className="w-6 h-6 text-white/60" />
        )}
      </button>
      {isOpen && (
        <div className="pb-8">
          <p className="text-white/80 text-lg leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;