import React, { useEffect, lazy, Suspense } from "react";
import useContent from "@/hooks/useContent";
import { useTranslation } from "react-i18next";
import { LoadingSection } from "@/components/ui/loading-spinner";

// ✅ Lazy imports for sections
const Section1 = lazy(() => import("./Components/Section1"));
const Section2 = lazy(() => import("./Components/Section2"));
const Section3 = lazy(() => import("./Components/Section3"));

export default function Portfolio() {
  const { portfoliopage } = useContent();
  const { t } = useTranslation();
  const { section1, section2, section3 } = portfoliopage;

  useEffect(() => {
    document.title = t("portfolio.pageTitle");
  }, [t]);

  return (
    <>
      <Suspense fallback={<LoadingSection />}>
        <Section1 content={section1} />
      </Suspense>

      <Suspense fallback={<LoadingSection />}>
        <Section2 content={section2} />
      </Suspense>

      <Suspense fallback={<LoadingSection />}>
        <Section3 content={section3} />
      </Suspense>
    </>
  );
}
