import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      DEPRESSION: "DEPRESSION",
      Home: "Home",
      About: "About",
      "Our Services": "Our Services",
      "Contact Us": "Contact Us",
    },
  },
  fa: {
    translation: {
      DEPRESSION: "افسردگی",
      Home: "خانه",
      About: "درباره ما",
      "Our Services": "خدمات ما",
      "Contact Us": "تماس با ما",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
