import React from "react";
import ServicePageTemplate from "../ServiceTemplates/ServicePageTemplate";
import { useTranslation } from "react-i18next";

export default function WebDevelopment() {
  const { t } = useTranslation();

  const section1Data = {
    title: t("individualServices.web.title"),
    subtitle: t("individualServices.web.subtitle"),
    buttonText: t("individualServices.web.buttonText")
  };

  const section2Data = {
    content: t("individualServices.web.content")
  };

  const section3Data = {
    technologies: {
      programmingLanguages: t("individualServices.web.programmingLanguages", { returnObjects: true }),
      frameworks: t("individualServices.web.frameworks", { returnObjects: true }),
      platforms: t("individualServices.web.platforms", { returnObjects: true })
    }
  };

  return (
    <ServicePageTemplate 
      pageTitle={t("individualServices.web.pageTitle")}
      section1Data={section1Data}
      section2Data={section2Data}
      section3Data={section3Data}
      overviewTitle={t("individualServices.web.overview")}
    />
  );
}