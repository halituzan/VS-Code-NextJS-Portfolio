import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import trCommon from "../../public/locales/tr/common.json";
import enCommon from "../../public/locales/en/common.json";
import trFooter from "../../public/locales/tr/footer.json";
import enFooter from "../../public/locales/en/footer.json";

const resources = {
  tr: {
    common: trCommon,
    footer: trFooter,
  },
  en: {
    common: enCommon,
    footer: enFooter,
  },
};

const initLanguage = () => {
  i18n
    .use(initReactI18next)
    .init({
      compatibilityJSON: 'v3',
      lng: window.localStorage.getItem('lng') ?? 'tr',
      fallbackLng: window.localStorage.getItem('lng') ?? 'tr',
      resources,
      interpolation: {
        escapeValue: false,
      },
    })
}

export default { initLanguage }
