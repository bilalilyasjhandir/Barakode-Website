import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HireSection1Template from "./HireSection1Template";
import HireSection2Template from "./HireSection2Template";

export default function HirePageTemplate({ 
  pageTitle, 
  section1Data
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
      <HireSection1Template 
        title={section1Data.title}
        subtitle={section1Data.subtitle}
      />
    </div>
  );
}