import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./assets/locales/en.json";
import ru from "./assets/locales/ru.json";

i18n
  .use(LanguageDetector) // автоматически определяет язык (по браузеру, локалстораджу и т.п.)
  .use(initReactI18next); // подключаем к React

i18n.init({
    resources: { en: { translation: en }, ru: { translation: ru } },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

export default i18n;
