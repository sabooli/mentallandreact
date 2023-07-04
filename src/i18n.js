import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      apiUrl: "https://www.mentalland.com/api/V1/homepage/faqs_english",
      eventUrl: "https://www.mentalland.com/api/V1/homepage/events_english",
      articleUrl : "https://www.mentalland.com/api/V1/homepage/blogs_en_list",
      DEPRESSION: "DEPRESSION",
      Home: "Home",
      About: "About",
      OurServices: "Our Services",
      Contact: "Contact Us",
      Positions: "Positions",
      AboutUs: "About Us",
      JoinUs: "Join Us",
      "GeneralEvents": "General Events",
      "GeneralSeminars": "General Seminars",
      "SpecializedEvents": "Specialized Events",
      "SpecializedSeminars": "Specialized Seminars",
      
    },
  },
  fa: {
    translation: {
      apiUrl: "https://www.mentalland.com/api/V1/homepage/faqs_persian",
      eventUrl: "https://www.mentalland.com/api/V1/homepage/events_persian",
      articleUrl : "https://www.mentalland.com/api/V1/homepage/blogs_fa_list",
      DEPRESSION: "افسردگی",
      Home: "خانه",
      About: "درباره ما",
      OurServices: "خدمات ما",
      Contact: "تماس با ما",
      Positions: "فرصتهای شغلی",
      AboutUs: "دربارۀ ما",
      JoinUs: "عضویت",
      "GeneralEvents": "ایونتهای عمومی",
      "GeneralSeminars": "سمینارهای عمومی",
      "SpecializedEvents": "ایونتهای تخصصی",
      "SpecializedSeminars": "سمینارهای تخصصی",
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
