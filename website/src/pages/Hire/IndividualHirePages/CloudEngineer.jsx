import React from "react";
import HireSection1Template from "../HireTemplates/HireSection1Template";
import HirePricingSection from "../Components/HirePricingSection";
import HireSection2Template from "../HireTemplates/HireSection2Template";
import { useTranslation } from "react-i18next";

export default function CloudEngineer() {
  const { t } = useTranslation();

  const pricingData = {
    starter: {
      features: t("individualHire.cloud.starter.features", { returnObjects: true }),
      hourlyRate: t("individualHire.cloud.starter.hourlyRate"),
      monthlyRate: t("individualHire.cloud.starter.monthlyRate")
    },
    professional: {
      features: t("individualHire.cloud.professional.features", { returnObjects: true }),
      hourlyRate: t("individualHire.cloud.professional.hourlyRate"),
      monthlyRate: t("individualHire.cloud.professional.monthlyRate")
    },
    enterprise: {
      features: t("individualHire.cloud.enterprise.features", { returnObjects: true }),
      hourlyRate: t("individualHire.cloud.enterprise.hourlyRate"),
      monthlyRate: t("individualHire.cloud.enterprise.monthlyRate")
    }
  };

  return (
    <div>
      <HireSection1Template 
        title={t("individualHire.cloud.title")}
        subtitle={t("individualHire.cloud.subtitle")}
      />
      <HirePricingSection 
        role={t("individualHire.cloud.role")}
        pricingData={pricingData}
      />
      <HireSection2Template />
    </div>
  );
}