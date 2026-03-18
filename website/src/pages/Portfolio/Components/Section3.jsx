import React from 'react';
import { PDFViewer } from '@/components/ui/pdf-viewer';

const Section3 = ({content}) => {
  return (
    <div className="bg-gradient-to-b from-white via-[#fff9e6] to-[#fffef7] text-gray-900 py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#c18b34] to-[#e0b352] bg-clip-text text-transparent">
            {content.title}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* PDF Case Studies Grid */}
        <PDFViewer caseStudies={content.caseStudies} />
      </div>
    </div>
  );
};

export default Section3;