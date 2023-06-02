import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";
import {MdKeyboardArrowDown} from "react-icons/md";


export default function Navbar() {
  const { t } = useTranslation();
  const [showNavbar, setShowNavbar] = useState(false);

 const handleShowNavbar = () => {
  setShowNavbar(!showNavbar);
};

  return (
    <nav className="navbar nav">
      <h1 className="logo">MentalLand</h1>
      <div className="menu-icon" onClick={handleShowNavbar}>
        <RxHamburgerMenu />
      </div>
      <div className={`nav-elements nav-right  ${showNavbar && "active"}`}>
        <ul>
          <li>
            <NavLink to="/">{t("Home")}</NavLink>
          </li>
          <li className="submenu">
            <div className="dropdown">
              {t("Our Services")} <MdKeyboardArrowDown />
            </div>
            <div className="dropdown-content">
              <NavLink to="/pages/psychology">{t("Psychology")}</NavLink>
              <NavLink to="/pages/psychologyAdults">
                {t("Psychology-Adults")}
              </NavLink>
              <NavLink to="/pages/psychologyChildren">
                {t("Psychology-Children")}
              </NavLink>
              <NavLink to="/pages/seminars">{t("Seminars")}</NavLink>
              <NavLink to="/pages/depressionadults">{t("Depression")}</NavLink>
              <NavLink to="/pages/art">{t("Art")}</NavLink>
              <NavLink to="/pages/artadults">{t("Art-adults")}</NavLink>
            </div>
          </li>
          <li>
            <NavLink to="/pages/aboutus">
              {t("About")} <MdKeyboardArrowDown />
            </NavLink>
          </li>
          <li>
            <NavLink to="/pages/contactus">{t("Contact")}</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
