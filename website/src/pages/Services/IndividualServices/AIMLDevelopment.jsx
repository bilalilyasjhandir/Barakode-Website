import React from "react";
import ServicePageTemplate from "../ServiceTemplates/ServicePageTemplate";
import { useTranslation } from "react-i18next";

export default function AIMLDevelopment() {
  const { t } = useTranslation();

  const section1Data = {
    title: t("individualServices.aiMl.title"),
    subtitle: t("individualServices.aiMl.subtitle"),
    buttonText: t("individualServices.aiMl.buttonText")
  };

  const section2Data = {
    content: t("individualServices.aiMl.content")
  };

  const section3Data = {
    technologies: {
      programmingLanguages: t("individualServices.aiMl.programmingLanguages", { returnObjects: true }),
      frameworks: t("individualServices.aiMl.frameworks", { returnObjects: true }),
      platforms: t("individualServices.aiMl.platforms", { returnObjects: true })
    }
  };

  return (
    <ServicePageTemplate 
      pageTitle={t("individualServices.aiMl.pageTitle")}
      section1Data={section1Data}
      section2Data={section2Data}
      section3Data={section3Data}
      overviewTitle={t("individualServices.aiMl.overview")}
    />
  );
}