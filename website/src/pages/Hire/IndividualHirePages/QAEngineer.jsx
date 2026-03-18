import React from "react";
import HireSection1Template from "../HireTemplates/HireSection1Template";
import HirePricingSection from "../Components/HirePricingSection";
import HireSection2Template from "../HireTemplates/HireSection2Template";
import { useTranslation } from "react-i18next";

export default function QAEngineer() {
  const { t } = useTranslation();

  const pricingData = {
    starter: {
      features: t("individualHire.qa.starter.features", { returnObjects: true }),
      hourlyRate: t("individualHire.qa.starter.hourlyRate"),
      monthlyRate: t("individualHire.qa.starter.monthlyRate")
    },
    professional: {
      features: t("individualHire.qa.professional.features", { returnObjects: true }),
      hourlyRate: t("individualHire.qa.professional.hourlyRate"),
      monthlyRate: t("individualHire.qa.professional.monthlyRate")
    },
    enterprise: {
      features: t("individualHire.qa.enterprise.features", { returnObjects: true }),
      hourlyRate: t("individualHire.qa.enterprise.hourlyRate"),
      monthlyRate: t("individualHire.qa.enterprise.monthlyRate")
    }
  };

  return (
    <div>
      <HireSection1Template 
        title={t("individualHire.qa.title")}
        subtitle={t("individualHire.qa.subtitle")}
      />
      <HirePricingSection 
        role={t("individualHire.qa.role")}
        pricingData={pricingData}
      />
      <HireSection2Template />
    </div>
  );
}