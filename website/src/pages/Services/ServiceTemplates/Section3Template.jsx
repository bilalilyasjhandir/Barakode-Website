import React from "react";
import Folder from "@/components/ui/folder";
import { useTranslation } from "react-i18next";

export default function Section3Template({ technologies }) {
  const { t } = useTranslation();
  // If specific technologies are provided, use them; otherwise, use generic ones
  const programmingLanguages = technologies?.programmingLanguages || [
    "JavaScript", "Python", "Java", "C++", "TypeScript", "Go"
  ];
  
  const frameworks = technologies?.frameworks || [
    "React", "Vue.js", "Angular", "Node.js", "Express", "Django"
  ];
  
  const platforms = technologies?.platforms || [
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Firebase"
  ];

  return (
    <section className="h-screen w-full bg-gray-50 dark:bg-black flex items-center justify-center" data-theme="dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t("individualServices.common.technologiesTitle")}
          </h2>
          <div className="w-20 h-1 bg-[#c18b13] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("individualServices.common.technologiesSubtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Programming Languages Folder */}
          <div className="flex flex-col items-center">
            <Folder 
              color="#5227FF" 
              size={1.5} 
              items={programmingLanguages.map((lang, i) => (
                <div key={i} className="p-3 text-center">
                  <div className="text-sm font-bold text-black">{lang}</div>
                </div>
              ))}
            />
            <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">{t("individualServices.common.programmingLanguages")}</h3>
          </div>
          
          {/* Frameworks Folder */}
          <div className="flex flex-col items-center">
            <Folder 
              color="#FF6B35" 
              size={1.5} 
              items={frameworks.map((framework, i) => (
                <div key={i} className="p-3 text-center">
                  <div className="text-sm font-bold text-black">{framework}</div>
                </div>
              ))}
            />
            <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">{t("individualServices.common.frameworks")}</h3>
          </div>
          
          {/* Platforms Folder */}
          <div className="flex flex-col items-center">
            <Folder 
              color="#2ECC71" 
              size={1.5} 
              items={platforms.map((platform, i) => (
                <div key={i} className="p-3 text-center">
                  <div className="text-sm font-bold text-black">{platform}</div>
                </div>
              ))}
            />
            <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">{t("individualServices.common.platforms")}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}