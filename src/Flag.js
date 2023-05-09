import React, { useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Dropdown } from "react-bootstrap";
import flag from "./icons/En.svg";
import "./App.css";

export default function Flag() {
    const [language, setLanguage] = useState("English");

    function handleLanguageChange(newLanguage) {
    setLanguage(newLanguage);
    }

return (
  <Dropdown className="language">
    <Dropdown.Toggle variant="light bg-0 boder-0" >
      {language === "English" ? (
        <span className="Country">
          <img src={flag} className="flag" alt="English flag" /> EN
        </span>
      ) : (
        <span className="Country">
          <img src={flag} alt="Persian flag" /> PR
        </span>
      )}
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item onClick={() => handleLanguageChange("English")}>
        <img src={flag} alt="English flag" /> English
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleLanguageChange("Spanish")}>
        <img src={flag} alt="Persian flag" /> Persian
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);
}