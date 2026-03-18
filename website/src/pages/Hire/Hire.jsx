import React, { useEffect } from "react";
import useContent from "@/hooks/useContent";
import { useTranslation } from "react-i18next";
import HireSection1 from "./Components/HireSection1";
import HireSection2 from "./Components/HireSection2";
import HireSection3 from "./Components/HireSection3";

export default function Hire() {
  const { hirepage } = useContent();
  const { t } = useTranslation();
  const { section1, section2 } = hirepage;

  useEffect(() => {
    document.title = t("hire.pageTitle");
  }, [t]);

  return (
    <>
      <HireSection1 content={section1} />
      <HireSection2 content={section2} />
      <HireSection3 />
    </>
  );
}