import React from "react";
import ServicePageTemplate from "../ServiceTemplates/ServicePageTemplate";
import { useTranslation } from "react-i18next";

export default function CloudDevelopment() {
  const { t } = useTranslation();

  const section1Data = {
    title: t("individualServices.cloud.title"),
    subtitle: t("individualServices.cloud.subtitle"),
    buttonText: t("individualServices.cloud.buttonText")
  };

  const section2Data = {
    content: t("individualServices.cloud.content")
  };

  const section3Data = {
    technologies: {
      programmingLanguages: t("individualServices.cloud.programmingLanguages", { returnObjects: true }),
      frameworks: t("individualServices.cloud.frameworks", { returnObjects: true }),
      platforms: t("individualServices.cloud.platforms", { returnObjects: true })
    }
  };

  return (
    <ServicePageTemplate 
      pageTitle={t("individualServices.cloud.pageTitle")}
      section1Data={section1Data}
      section2Data={section2Data}
      section3Data={section3Data}
      overviewTitle={t("individualServices.cloud.overview")}
    />
  );
}