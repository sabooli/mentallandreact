import React, { useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Dropdown } from "react-bootstrap";
import flag from "./icons/En.svg";
import "./App.css";
import { useTranslation } from "react-i18next";


export default function Flag() {
    const [language, setLanguage] = useState("en");
    const { t, i18n } = useTranslation();


    function handleLanguageChange(newLanguage) {
    setLanguage(newLanguage);
     i18n.changeLanguage(newLanguage);

     if (newLanguage === "fa") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    } 
    
    }

return (
  <Dropdown className="language">
    <Dropdown.Toggle variant="0 bg-0 boder-0" className="toggle">
      {language === "en" ? (
        <span className="Country" >
          <img src={flag} className="flag" alt="English flag" /> EN{" "}
        </span>
      ) : (
        <span className="Country">
          <img src={flag} alt="Persian flag" /> PR{" "}
        </span>
      )}
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item onClick={() => handleLanguageChange("en")}>
        <img src={flag} alt="English flag" /> {t("English")}
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleLanguageChange("fa")}>
        <img src={flag} alt="Persian flag" /> {t("فارسی")}
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);
}