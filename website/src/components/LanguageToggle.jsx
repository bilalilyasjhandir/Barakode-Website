import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageToggle({ className = "" }) {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const toggleLanguage = () => {
    const newLang = isArabic ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-600 hover:border-light-cream transition-all duration-300 text-sm font-medium ${className}`}
      aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
      dir="ltr"
    >
      <span
        className={`transition-colors duration-300 ${
          !isArabic ? "text-light-cream font-bold" : "text-gray-400"
        }`}
      >
        EN
      </span>
      <span className="text-gray-500">|</span>
      <span
        className={`transition-colors duration-300 font-arabic ${
          isArabic ? "text-light-cream font-bold" : "text-gray-400"
        }`}
      >
        AR
      </span>
    </button>
  );
}
