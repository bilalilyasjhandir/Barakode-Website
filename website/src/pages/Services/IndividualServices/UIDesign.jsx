import React from "react";
import ServicePageTemplate from "../ServiceTemplates/ServicePageTemplate";
import { useTranslation } from "react-i18next";

export default function UIDesign() {
  const { t } = useTranslation();

  const section1Data = {
    title: t("individualServices.uiux.title"),
    subtitle: t("individualServices.uiux.subtitle"),
    buttonText: t("individualServices.uiux.buttonText")
  };

  const section2Data = {
    content: t("individualServices.uiux.content")
  };

  const section3Data = {
    technologies: {
      programmingLanguages: t("individualServices.uiux.programmingLanguages", { returnObjects: true }),
      frameworks: t("individualServices.uiux.frameworks", { returnObjects: true }),
      platforms: t("individualServices.uiux.platforms", { returnObjects: true })
    }
  };

  return (
    <ServicePageTemplate 
      pageTitle={t("individualServices.uiux.pageTitle")}
      section1Data={section1Data}
      section2Data={section2Data}
      section3Data={section3Data}
      overviewTitle={t("individualServices.uiux.overview")}
    />
  );
}