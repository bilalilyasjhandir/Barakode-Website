import React from "react";
import { FaLaptopCode, FaMobileAlt, FaBrain, FaCloud, FaPalette, FaBug } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HireSection3() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const hiringOptions = [
    {
      icon: <FaLaptopCode className="text-2xl text-[#c18b13]" />,
      title: t("hire.section3.options.fullStack.title"),
      description: t("hire.section3.options.fullStack.description"),
      link: "/hire/full-stack"
    },
    {
      icon: <FaMobileAlt className="text-2xl text-[#c18b13]" />,
      title: t("hire.section3.options.mobile.title"),
      description: t("hire.section3.options.mobile.description"),
      link: "/hire/mobile-app"
    },
    {
      icon: <FaBrain className="text-2xl text-[#c18b13]" />,
      title: t("hire.section3.options.aiMl.title"),
      description: t("hire.section3.options.aiMl.description"),
      link: "/hire/ai-ml"
    },
    {
      icon: <FaCloud className="text-2xl text-[#c18b13]" />,
      title: t("hire.section3.options.cloud.title"),
      description: t("hire.section3.options.cloud.description"),
      link: "/hire/cloud"
    },
    {
      icon: <FaPalette className="text-2xl text-[#c18b13]" />,
      title: t("hire.section3.options.uiux.title"),
      description: t("hire.section3.options.uiux.description"),
      link: "/hire/ui-ux"
    },
    {
      icon: <FaBug className="text-2xl text-[#c18b13]" />,
      title: t("hire.section3.options.qa.title"),
      description: t("hire.section3.options.qa.description"),
      link: "/hire/qa"
    }
  ];

  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-black" data-theme="dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t("hire.section3.title")}
          </h2>
          <div className="w-20 h-1 bg-[#c18b13] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("hire.section3.subtitle")}
          </p>
        </div>

        <div className="space-y-6">
          {hiringOptions.map((option, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  {option.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {option.description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleNavigate(option.link)}
                className="bg-[#c18b13] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#a8760f] transition duration-300 whitespace-nowrap"
              >
                {t("hire.section3.viewDetails")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}