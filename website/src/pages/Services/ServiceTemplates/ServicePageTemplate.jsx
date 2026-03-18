import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Section1Template from "./Section1Template";
import Section2Template from "./Section2Template";
import Section3Template from "./Section3Template";

export default function ServicePageTemplate({ 
  pageTitle, 
  section1Data, 
  section2Data, 
  section3Data,
  overviewTitle 
}) {
  const location = useLocation();

  useEffect(() => {
    document.title = `Barakode | ${pageTitle}`;
  }, [pageTitle]);

  // Scroll to section if hash is present in URL
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      {/* Section 1: Hero Section */}
      <Section1Template 
        title={section1Data.title}
        subtitle={section1Data.subtitle}
        buttonText={section1Data.buttonText}
      />
      
      {/* Section 2: Overview */}
      <Section2Template 
        title={overviewTitle || "Overview"}
        content={section2Data.content}
      />
      
      {/* Section 3: Technologies */}
      <Section3Template 
        technologies={section3Data.technologies}
      />
    </div>
  );
}