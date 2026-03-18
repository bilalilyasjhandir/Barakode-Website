import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../locales/en/translation.json";
import ar from "../locales/ar/translation.json";

const RTL_LANGUAGES = ["ar", "he", "fa", "ur"];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "ar"],
    interpolation: {
      escapeValue: false, // React already escapes
    },
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },
  });

// Apply RTL/LTR direction based on current language
export function applyLanguageDirection(lng) {
  const dir = RTL_LANGUAGES.includes(lng) ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", lng);
  document.body.style.direction = dir;
}

// Apply on initial load
applyLanguageDirection(i18n.language);

// Listen for language changes
i18n.on("languageChanged", (lng) => {
  applyLanguageDirection(lng);
  localStorage.setItem("i18nextLng", lng);
});

export default i18n;
