import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "@/locales/translations.json";

i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: "en",                 // force default to English
    fallbackLng: "en",
    supportedLngs: ["en", "zh"],
    interpolation: { escapeValue: false },
    react: { useSuspense: false } // simpler rendering for troubleshooting
  });

export default i18n;