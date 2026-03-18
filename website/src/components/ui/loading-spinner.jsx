import React from 'react';

export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-[#1a1a1a]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#c18b34]/30 border-t-[#c18b34] rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[#e0b352]/30 border-t-[#e0b352] rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        </div>
      </div>
    </div>
  );
};

export const LoadingSection = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-12 h-12 border-4 border-[#c18b34]/30 border-t-[#c18b34] rounded-full animate-spin"></div>
    </div>
  );
};
