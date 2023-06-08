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
   console.log("Clicked");
   console.log(showNavbar);
};

  return (
    <nav className="navbar nav">
      <h1 className="logo">MentalLand</h1>
      <div className="menu-icon">
        <RxHamburgerMenu className="hamburger" onClick={handleShowNavbar} />
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
              <ul className="branch">
                <li>
                  {" "}
                  <NavLink to="/pages/psychologyAdults">
                    {t("Psychology-Adults")}
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/pages/psychologyChildren">
                    {t("Psychology-Children")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pages/seminars">{t("Seminars")}</NavLink>
                </li>
                <li>
                  <NavLink to="/pages/depressionadults">
                    {t("List of Psychologists - Adults")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pages/depressionchildren">
                    {t("List of Psychologists - Children")}
                  </NavLink>
                </li>
              </ul>
              <NavLink to="/pages/art">{t("Art")}</NavLink>
              <ul className="branch">
                <li>
                  <NavLink to="/pages/artadults">{t("Art-adults")}</NavLink>
                </li>
                <li>
                  <NavLink to="/pages/musicadults">{t("Music-adults")}</NavLink>
                </li>
                <li>
                  <NavLink to="/pages/adultcoaches">
                    {t("Coaches-adults")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pages/artchildren">{t("Art-children")}</NavLink>
                </li>
                <li>
                  <NavLink to="/pages/musicchildren">
                    {t("Music-children")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pages/childrencoaches">
                    {t("Coaches-children")}
                  </NavLink>
                </li>
              </ul>
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
