import React from "react";

export default function Section2Template({ title, content }) {
  return (
    <section className="py-16 md:py-24 bg-white" data-theme="light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <div className="w-20 h-1 bg-[#c18b13] mx-auto mb-8"></div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}