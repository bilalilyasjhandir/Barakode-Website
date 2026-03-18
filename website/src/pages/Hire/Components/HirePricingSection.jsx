import React, { useState } from "react";
import EmailCaptureModal from "@/components/ui/EmailCaptureModal";
import { ContactService } from '@/lib/supabase';
import { useTranslation } from "react-i18next";

export default function HirePricingSection({ role, pricingData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const { t } = useTranslation();

  const plans = [
    {
      title: t("individualHire.common.starterPlan"),
      subtitle: t("individualHire.common.starterSubtitle"),
      description: t("individualHire.common.starterDescription"),
      features: pricingData.starter.features,
      hourlyRate: pricingData.starter.hourlyRate,
      monthlyRate: pricingData.starter.monthlyRate,
      bgColor: "bg-white dark:bg-gray-900",
      borderColor: "border-gray-200 dark:border-gray-700"
    },
    {
      title: t("individualHire.common.professionalPlan"),
      subtitle: t("individualHire.common.professionalSubtitle"),
      description: t("individualHire.common.professionalDescription"),
      features: pricingData.professional.features,
      hourlyRate: pricingData.professional.hourlyRate,
      monthlyRate: pricingData.professional.monthlyRate,
      bgColor: "bg-gray-50 dark:bg-gray-800",
      borderColor: "border-[#c18b13]"
    },
    {
      title: t("individualHire.common.enterprisePlan"),
      subtitle: t("individualHire.common.enterpriseSubtitle"),
      description: t("individualHire.common.enterpriseDescription"),
      features: pricingData.enterprise.features,
      hourlyRate: pricingData.enterprise.hourlyRate,
      monthlyRate: pricingData.enterprise.monthlyRate,
      bgColor: "bg-white dark:bg-gray-900",
      borderColor: "border-gray-200 dark:border-gray-700"
    }
  ];

  const handleGetStarted = (planTitle) => {
    // Extract plan type from title (e.g., "Starter Plan" -> "Starter")
    const planType = planTitle.replace(" Plan", "");
    setSelectedPlan(planType);
    setIsModalOpen(true);
  };

  const handleEmailSubmit = async (email, planType) => {
    // Submit to the plans table with hire type
    const result = await ContactService.submitPlanSelection(email, planType, role);
    
    if (!result.success) {
      throw new Error(result.error || "Failed to submit plan selection");
    }
    
    return result.data;
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-black" data-theme="dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t("individualHire.common.hireA")} {role}
          </h2>
          <div className="w-20 h-1 bg-[#c18b13] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`${plan.bgColor} ${plan.borderColor} border rounded-xl p-8 transition-all duration-300 hover:shadow-xl flex flex-col h-full`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.title}
                </h3>
                <p className="text-[#c18b13] font-semibold mb-2">
                  {plan.subtitle}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg 
                        className="h-5 w-5 text-[#c18b13] mt-0.5 mr-2 flex-shrink-0" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <div className="mb-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                    {t("individualHire.common.startingFrom")}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {plan.hourlyRate}
                    </p>
                    <span className="text-gray-600 dark:text-gray-300">{t("individualHire.common.perHour")}</span>
                    <span className="text-gray-400 dark:text-gray-500">{t("individualHire.common.or")}</span>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {plan.monthlyRate}
                    </p>
                    <span className="text-gray-600 dark:text-gray-300">{t("individualHire.common.perMonth")}</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleGetStarted(plan.title)}
                  className="w-full bg-[#c18b13] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#a8760f] transition duration-300 transform hover:scale-[1.02]"
                >
                  {t("individualHire.common.getStarted")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <EmailCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planType={selectedPlan}
        onSubmit={handleEmailSubmit}
      />
    </section>
  );
}