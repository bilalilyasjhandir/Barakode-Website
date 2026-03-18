import React from "react";
import HireSection1Template from "../HireTemplates/HireSection1Template";
import HirePricingSection from "../Components/HirePricingSection";
import HireSection2Template from "../HireTemplates/HireSection2Template";
import { useTranslation } from "react-i18next";

export default function UIUXDesigner() {
  const { t } = useTranslation();

  const pricingData = {
    starter: {
      features: t("individualHire.uiux.starter.features", { returnObjects: true }),
      hourlyRate: t("individualHire.uiux.starter.hourlyRate"),
      monthlyRate: t("individualHire.uiux.starter.monthlyRate")
    },
    professional: {
      features: t("individualHire.uiux.professional.features", { returnObjects: true }),
      hourlyRate: t("individualHire.uiux.professional.hourlyRate"),
      monthlyRate: t("individualHire.uiux.professional.monthlyRate")
    },
    enterprise: {
      features: t("individualHire.uiux.enterprise.features", { returnObjects: true }),
      hourlyRate: t("individualHire.uiux.enterprise.hourlyRate"),
      monthlyRate: t("individualHire.uiux.enterprise.monthlyRate")
    }
  };

  return (
    <div>
      <HireSection1Template 
        title={t("individualHire.uiux.title")}
        subtitle={t("individualHire.uiux.subtitle")}
      />
      <HirePricingSection 
        role={t("individualHire.uiux.role")}
        pricingData={pricingData}
      />
      <HireSection2Template />
    </div>
  );
}