import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      apiUrl: "https://www.mentalland.com/api/V1/homepage/faqs_english",
      eventUrl: "https://www.mentalland.com/api/V1/homepage/events_english",
      articleUrl: "https://www.mentalland.com/api/V1/homepage/blogs_en_list",
      DEPRESSION: "DEPRESSION",
      Home: "Home",
      About: "About",
      OurServices: "Our Services",
      Psychology: "Psychology",
      PsychologyAdults: "Psychology-Adults",
      PsychologyChildren: "Psychology-Children",
      Seminars: "Seminars",
      PsychologistsAdults: "List of Psychologists-Adults",
      PsychologistsChildren: "List of Psychologists-Children",
      Art: "Art",
      ArtAdults: "Art-Adults",
      MusicAdults: "Music-Adults",
      CoachesAdults: "Coaches-Adults",
      ArtChildren: "Art-Children",
      MusicChildren: "Music-Children",
      CoachesChildren: "Coaches-Children",
      Business: "Business",
      BusinessForAdults: "Business for Adults",
      BusinessForChildren: "Business for Children",
      JobOpportunities: "Job Opportunities",
      Tourism: "Tourism",
      Contact: "Contact Us",
      Positions: "Positions",
      AboutUs: "About Us",
      JoinUs: "Join Us",
      GeneralEvents: "General Events",
      GeneralSeminars: "General Seminars",
      SpecializedEvents: "Specialized Events",
      SpecializedSeminars: "Specialized Seminars",
    },
  },
  fa: {
    translation: {
      apiUrl: "https://www.mentalland.com/api/V1/homepage/faqs_persian",
      eventUrl: "https://www.mentalland.com/api/V1/homepage/events_persian",
      articleUrl: "https://www.mentalland.com/api/V1/homepage/blogs_fa_list",
      DEPRESSION: "افسردگی",
      Home: "خانه",
      About: "درباره ما",
      OurServices: "خدمات ما",
      Psychology: "روانشناسی",
      PsychologyAdults: "روانشناسی-بزرگسالان",
      PsychologyChildren: "روانشناسی-کودکان",
      Seminars: "سمینارها",
      PsychologistsAdults: "فهرست مشاورین-بزرگسالان",
      PsychologistsChildren: "فهرست مشاورین-کودکان",
      Art: "هنر",
      ArtAdults: "هنر-بزرگسالان",
      MusicAdults: "موسیقی-بزرگسالان",
      CoachesAdults: "مربیان-بزرگسالان",
      ArtChildren: "هنر-کودکان",
      MusicChildren: "موسیقی-کودکان",
      CoachesChildren: "مربیان-کودکان",
      Business: "کسب و کار",
      BusinessForAdults: "کسب و کار بزرگسالان",
      BusinessForChildren: "کسب و کار کودکان",
      JobOpportunities: "فرصتهای شغلی",
      Tourism: "گردشگری",
      Contact: "تماس با ما",
      Positions: "موقعیت شغلی",
      AboutUs: "دربارۀ ما",
      JoinUs: "عضویت",
      GeneralEvents: "ایونتهای عمومی",
      GeneralSeminars: "سمینارهای عمومی",
      SpecializedEvents: "ایونتهای تخصصی",
      SpecializedSeminars: "سمینارهای تخصصی",
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
