import React from 'react';

export default function ZaptBadge() {
  return (
    <div className="fixed bottom-4 left-4 z-40">
      <a 
        href="https://www.zapt.ai" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded-md shadow-sm hover:text-blue-600 transition-colors"
      >
        Made on ZAPT
      </a>
    </div>
  );
}