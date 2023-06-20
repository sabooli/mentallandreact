import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      apiUrl: "https://www.mentalland.com/api/V1/homepage/faqs_english",
      DEPRESSION: "DEPRESSION",
      Home: "Home",
      About: "About",
      OurServices: "Our Services",
      Contact: "Contact Us",
      Positions: "Positions",
      AboutUs: "About Us",
      JoinUs: "Join Us",
    },
  },
  fa: {
    translation: {
      apiUrl: "https://www.mentalland.com/api/V1/homepage/faqs_persian",
      DEPRESSION: "افسردگی",
      Home: "خانه",
      About: "درباره ما",
      OurServices: "خدمات ما",
      Contact: "تماس با ما",
      Positions: "فرصتهای شغلی",
      AboutUs: "دربارۀ ما",
      JoinUs: "عضویت",
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
