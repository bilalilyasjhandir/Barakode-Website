import React from "react";
import ServicePageTemplate from "../ServiceTemplates/ServicePageTemplate";
import { useTranslation } from "react-i18next";

export default function MobileDevelopment() {
  const { t } = useTranslation();

  const section1Data = {
    title: t("individualServices.mobile.title"),
    subtitle: t("individualServices.mobile.subtitle"),
    buttonText: t("individualServices.mobile.buttonText")
  };

  const section2Data = {
    content: t("individualServices.mobile.content")
  };

  const section3Data = {
    technologies: {
      programmingLanguages: t("individualServices.mobile.programmingLanguages", { returnObjects: true }),
      frameworks: t("individualServices.mobile.frameworks", { returnObjects: true }),
      platforms: t("individualServices.mobile.platforms", { returnObjects: true })
    }
  };

  return (
    <ServicePageTemplate 
      pageTitle={t("individualServices.mobile.pageTitle")}
      section1Data={section1Data}
      section2Data={section2Data}
      section3Data={section3Data}
      overviewTitle={t("individualServices.mobile.overview")}
    />
  );
}