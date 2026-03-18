import React from "react";
import ServicePageTemplate from "../ServiceTemplates/ServicePageTemplate";
import { useTranslation } from "react-i18next";

export default function QATesting() {
  const { t } = useTranslation();

  const section1Data = {
    title: t("individualServices.qa.title"),
    subtitle: t("individualServices.qa.subtitle"),
    buttonText: t("individualServices.qa.buttonText")
  };

  const section2Data = {
    content: t("individualServices.qa.content")
  };

  const section3Data = {
    technologies: {
      programmingLanguages: t("individualServices.qa.programmingLanguages", { returnObjects: true }),
      frameworks: t("individualServices.qa.frameworks", { returnObjects: true }),
      platforms: t("individualServices.qa.platforms", { returnObjects: true })
    }
  };

  return (
    <ServicePageTemplate 
      pageTitle={t("individualServices.qa.pageTitle")}
      section1Data={section1Data}
      section2Data={section2Data}
      section3Data={section3Data}
      overviewTitle={t("individualServices.qa.overview")}
    />
  );
}