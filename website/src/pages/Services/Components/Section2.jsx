import React from "react";
import { Icon } from "@/components/ui/evervault-card";
import { useTranslation } from "react-i18next";

export function EvervaultCard({ title, features }) {
  const { t } = useTranslation();
  return (
    <div className="border border-black/[0.3] dark:border-white/[0.2] flex flex-col items-start mx-auto p-4 relative h-full w-full">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <h2 className="dark:text-white inline-flex gap-3 justify-center items-center text-black mt-4 font-bold text-center text-2xl pb-5">
        <img src="/imgs/singularity-removebg-preview.png" className="ms-2 h-10 w-10" alt="Barakode – AI and software development company" />{" "}
        {title}
      </h2>
      <ul className="pb-10">
        {features.map((feature, idx) => {
          return (
            <>
              <li key={idx} className="py-3 inline-flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c18b13"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check-icon lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>{" "}
                {feature}
              </li>{" "}
              <br />
            </>
          );
        })}
      </ul>
<a
      href={`https://wa.me/923030608736?text=${encodeURIComponent(`Hi Barakode, I'm interested in the ${title} package. Can you provide more details?`)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm md:text-base font-semibold rounded-full px-6 py-3 mt-auto transition-all duration-300 ease-in-out transform bg-light-cream text-black dark:text-white shadow-md hover:shadow-xl hover:scale-105 hover:bg-dark-cream hover:text-white dark:hover:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-yellow-400/50"
    >
      {t("common.quoteNow")}
    </a>



    </div>
  );
}

const Section2 = ({content}) => {

  return (
    <div className="bg-white py-16 md:px-section-lg px-section-sm" data-theme="light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
{content.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        </p>
        </div>

        <div className="border-t border-gray-200 w-20 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {content.packages.map((pkg, index) => (
            <EvervaultCard
              title={pkg.title}
              key={index}
              features={pkg.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
