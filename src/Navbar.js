import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Hamburger from "./icons/hamburger.svg";

export default function Navbar() {
  const { t } = useTranslation();
   const [showNavbar, setShowNavbar] = useState(false);

   const handleShowNavbar = () => {
     setShowNavbar(!showNavbar);
   };

     return (
    <nav className="navbar nav">
        <div className="logo">
          MentalLand
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
         <img src={Hamburger} alt="menu icon" />
        </div>
        <div className={`nav-elements nav-right  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/pages/Home">{t("Home")}</NavLink>
            </li>
            <li>
              <NavLink to="/pages/depressionadults">{t("Our Services")}</NavLink>
            </li>
            <li>
              <NavLink to="/pages/aboutus">{t("About")}</NavLink>
            </li>
            <li>
              <NavLink to="/pages/contactus">{t("Contact")}</NavLink>
            </li>
          </ul>
        </div>
    </nav>
     );
}