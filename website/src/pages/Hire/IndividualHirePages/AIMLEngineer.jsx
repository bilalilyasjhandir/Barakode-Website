import React from "react";
import HireSection1Template from "../HireTemplates/HireSection1Template";
import HirePricingSection from "../Components/HirePricingSection";
import HireSection2Template from "../HireTemplates/HireSection2Template";
import { useTranslation } from "react-i18next";

export default function AIMLEngineer() {
  const { t } = useTranslation();

  const pricingData = {
    starter: {
      features: t("individualHire.aiMl.starter.features", { returnObjects: true }),
      hourlyRate: t("individualHire.aiMl.starter.hourlyRate"),
      monthlyRate: t("individualHire.aiMl.starter.monthlyRate")
    },
    professional: {
      features: t("individualHire.aiMl.professional.features", { returnObjects: true }),
      hourlyRate: t("individualHire.aiMl.professional.hourlyRate"),
      monthlyRate: t("individualHire.aiMl.professional.monthlyRate")
    },
    enterprise: {
      features: t("individualHire.aiMl.enterprise.features", { returnObjects: true }),
      hourlyRate: t("individualHire.aiMl.enterprise.hourlyRate"),
      monthlyRate: t("individualHire.aiMl.enterprise.monthlyRate")
    }
  };

  return (
    <div>
      <HireSection1Template 
        title={t("individualHire.aiMl.title")}
        subtitle={t("individualHire.aiMl.subtitle")}
      />
      <HirePricingSection 
        role={t("individualHire.aiMl.role")}
        pricingData={pricingData}
      />
      <HireSection2Template />
    </div>
  );
}