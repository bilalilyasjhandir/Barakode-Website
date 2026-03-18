import React from "react";
import { FaCheckCircle, FaClock, FaUsers, FaLightbulb, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function HireSection2({ content }) {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FaCheckCircle className="text-2xl text-[#c18b13]" />,
      title: t("hire.section2.features.preVetted.title"),
      description: t("hire.section2.features.preVetted.description")
    },
    {
      icon: <FaClock className="text-2xl text-[#c18b13]" />,
      title: t("hire.section2.features.rapidOnboarding.title"),
      description: t("hire.section2.features.rapidOnboarding.description")
    },
    {
      icon: <FaUsers className="text-2xl text-[#c18b13]" />,
      title: t("hire.section2.features.dedicatedSupport.title"),
      description: t("hire.section2.features.dedicatedSupport.description")
    },
    {
      icon: <FaLightbulb className="text-2xl text-[#c18b13]" />,
      title: t("hire.section2.features.innovative.title"),
      description: t("hire.section2.features.innovative.description")
    },
    {
      icon: <FaChartLine className="text-2xl text-[#c18b13]" />,
      title: t("hire.section2.features.performance.title"),
      description: t("hire.section2.features.performance.description")
    },
    {
      icon: <FaShieldAlt className="text-2xl text-[#c18b13]" />,
      title: t("hire.section2.features.secure.title"),
      description: t("hire.section2.features.secure.description")
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" data-theme="light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {content.title}
          </h2>
          <div className="w-20 h-1 bg-[#c18b13] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#c18b13] transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}