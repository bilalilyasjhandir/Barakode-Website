import React from "react";
import HireSection1Template from "../HireTemplates/HireSection1Template";
import HirePricingSection from "../Components/HirePricingSection";
import HireSection2Template from "../HireTemplates/HireSection2Template";
import { useTranslation } from "react-i18next";

export default function FullStackDeveloper() {
  const { t } = useTranslation();

  const pricingData = {
    starter: {
      features: t("individualHire.fullStack.starter.features", { returnObjects: true }),
      hourlyRate: t("individualHire.fullStack.starter.hourlyRate"),
      monthlyRate: t("individualHire.fullStack.starter.monthlyRate")
    },
    professional: {
      features: t("individualHire.fullStack.professional.features", { returnObjects: true }),
      hourlyRate: t("individualHire.fullStack.professional.hourlyRate"),
      monthlyRate: t("individualHire.fullStack.professional.monthlyRate")
    },
    enterprise: {
      features: t("individualHire.fullStack.enterprise.features", { returnObjects: true }),
      hourlyRate: t("individualHire.fullStack.enterprise.hourlyRate"),
      monthlyRate: t("individualHire.fullStack.enterprise.monthlyRate")
    }
  };

  return (
    <div>
      <HireSection1Template 
        title={t("individualHire.fullStack.title")}
        subtitle={t("individualHire.fullStack.subtitle")}
      />
      <HirePricingSection 
        role={t("individualHire.fullStack.role")}
        pricingData={pricingData}
      />
      <HireSection2Template />
    </div>
  );
}