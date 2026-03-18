import React from "react";
import HireSection1Template from "../HireTemplates/HireSection1Template";
import HirePricingSection from "../Components/HirePricingSection";
import HireSection2Template from "../HireTemplates/HireSection2Template";
import { useTranslation } from "react-i18next";

export default function MobileAppDeveloper() {
  const { t } = useTranslation();

  const pricingData = {
    starter: {
      features: t("individualHire.mobileApp.starter.features", { returnObjects: true }),
      hourlyRate: t("individualHire.mobileApp.starter.hourlyRate"),
      monthlyRate: t("individualHire.mobileApp.starter.monthlyRate")
    },
    professional: {
      features: t("individualHire.mobileApp.professional.features", { returnObjects: true }),
      hourlyRate: t("individualHire.mobileApp.professional.hourlyRate"),
      monthlyRate: t("individualHire.mobileApp.professional.monthlyRate")
    },
    enterprise: {
      features: t("individualHire.mobileApp.enterprise.features", { returnObjects: true }),
      hourlyRate: t("individualHire.mobileApp.enterprise.hourlyRate"),
      monthlyRate: t("individualHire.mobileApp.enterprise.monthlyRate")
    }
  };

  return (
    <div>
      <HireSection1Template 
        title={t("individualHire.mobileApp.title")}
        subtitle={t("individualHire.mobileApp.subtitle")}
      />
      <HirePricingSection 
        role={t("individualHire.mobileApp.role")}
        pricingData={pricingData}
      />
      <HireSection2Template />
    </div>
  );
}