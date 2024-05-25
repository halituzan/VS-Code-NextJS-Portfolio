import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import trCommon from "../../public/locales/tr/common.json";
import enCommon from "../../public/locales/en/common.json";
import trFooter from "../../public/locales/tr/footer.json";
import enFooter from "../../public/locales/en/footer.json";
import trProfile from "../../public/locales/tr/profile.json";
import enProfile from "../../public/locales/en/profile.json";
import trSkills from "../../public/locales/tr/skills.json";
import enSkills from "../../public/locales/en/skills.json";
import trWorks from "../../public/locales/tr/works.json";
import enWorks from "../../public/locales/en/works.json";

const defaultLang = "tr";
const resources = {
  tr: {
    common: trCommon,
    footer: trFooter,
    profile: trProfile,
    skills: trSkills,
    works: trWorks,
  },
  en: {
    common: enCommon,
    footer: enFooter,
    profile: enProfile,
    skills: enSkills,
    works: enWorks,
  },
};

const initLanguage = () => {
  i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    lng: window.localStorage.getItem("lng") ?? defaultLang,
    fallbackLng: window.localStorage.getItem("lng") ?? defaultLang,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
};

export default { initLanguage };
