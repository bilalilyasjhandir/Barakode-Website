import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Section4 = ({ content }) => {
  const { t } = useTranslation();
  // Map service names to their respective links
  const serviceLinks = {
    "Web Development": "/service/web",
    "Mobile Development": "/service/mobile",
    "UI/UX Design": "/service/ui-ux",
    "AI/ML Development": "/service/ai-ml",
    "Cloud Development": "/service/cloud",
    "QA & Testing": "/service/qa-testing"  // Changed from Digital Marketing to QA & Testing
  };

  return (
    <div className="bg-white py-16 md:px-section-lg px-section-sm">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {content.title}
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          {content.subtitle}
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {content.services.map((service, index) => {
            // Update the service title mapping
            const serviceName = service.title === "Digital Marketing" ? "QA & Testing" : service.title;
            const serviceLink = serviceLinks[serviceName] || "#";
            
            return (
              <Link 
                to={serviceLink}
                key={index}
                className="group block w-full h-full"
              >
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#c18b13] transition-colors">
                    {serviceName}  {/* Use the updated service name */}
                  </h2>
                  <div className="space-y-2 text-gray-700 flex-grow">
                    {service.description.map((line, i) => (
                      <p
                        key={i}
                        className="flex items-start gap-3 text-sm sm:text-base md:text-lg leading-relaxed"
                      >
                        <span className="flex-shrink-0 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#c18b13"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5"
                          >
                            <path d="m6 17 5-5-5-5" />
                            <path d="m13 17 5-5-5-5" />
                          </svg>
                        </span>
                        <span className="text-left">{line}</span>
                      </p>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="text-[#c18b13] font-medium flex items-center">
                      {t("common.learnMore")}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section4;