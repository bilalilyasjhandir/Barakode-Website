import React, { useEffect, lazy, Suspense } from "react";
import useContent from "@/hooks/useContent";
import { useTranslation } from "react-i18next";
import { LoadingSection } from "@/components/ui/loading-spinner";

// Lazy import each section component
const Section1 = lazy(() => import("./Components/Section1/Section1"));
const Section2 = lazy(() => import("./Components/Section2/Section2"));
const Section3 = lazy(() => import("./Components/Section3/Section3"));
const Section4 = lazy(() => import("./Components/Section4/Section4"));
// const Section5 = lazy(() => import("./Components/Section5/Section5")); // included even if not used
const Section6 = lazy(() => import("./Components/Section6/Section6"));
const Section7 = lazy(() => import("./Components/Section7/Section7"));
const Section8 = lazy(() => import("./Components/Section8/Section8"));
import { StickyBanner } from "@/components/ui/sticky-banner";

export default function Home() {
  const { homepage } = useContent();
  const { t } = useTranslation();
  const {
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
  } = homepage;

  useEffect(() => {
    document.title = t("home.pageTitle");
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

      <Suspense fallback={<LoadingSection />}>
        <Section4 content={section4} />
      </Suspense>

      {/* You skipped Section5 in your original render — add if needed */}
      {/* <Suspense fallback={<div>Loading Section 5...</div>}>
        <Section5 content={section5} />
      </Suspense> */}

      <Suspense fallback={<div>{t("common.loading")}</div>}>
        <Section6 content={section6} />
      </Suspense>

      <Suspense fallback={<div>{t("common.loading")}</div>}>
        <Section7 content={section7} />
      </Suspense>

      <Suspense fallback={<div>{t("common.loading")}</div>}>
        <Section8 content={section8} />
      </Suspense>
             <StickyBanner hideOnScroll className="bg-black text-white">
        <p className="text-sm font-medium">
          <a href="/contact-us" className="underline">{t("home.specialOffer")}
</a>.
        </p>
      </StickyBanner>
    </>
  );
}
