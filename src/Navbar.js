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
      <div className="menu-icon">
        <RxHamburgerMenu className="hamburger" onClick={handleShowNavbar} />
      </div>
      <div className={`nav-elements nav-right  ${showNavbar && "active"}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#02979d" : "#000b0c",
                background: isActive ? "#ecf7f7" : "#ecf7f7",
              })}
            >
              {t("Home")}
            </NavLink>
          </li>
          <li className="submenu">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#02979d" : "#000b0c",
                background: isActive ? "#ecf7f7" : "#ecf7f7",
              })}
              className="dropdown"
            >
              {t("OurServices")} <MdKeyboardArrowDown />
            </NavLink>
            <div className="dropdown-content">
              <NavLink to="/pages/psychology">{t("Psychology")}</NavLink>
              <ul className="branch">
                <li>
                  {" "}
                  <NavLink to="/pages/psychologyAdults">
                    {t("PsychologyAdults")}
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/pages/psychologyChildren">
                    {t("PsychologyChildren")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pages/seminars">{t("Seminars")}</NavLink>
                </li>
                <li>
                  <NavLink to="/pages/depressionadults">
                    {t("PsychologistsAdults")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pages/depressionchildren">
                    {t("PsychologistsChildren")}
                  </NavLink>
                </li>
              </ul>
              <NavLink to="/pages/art">{t("Art")}</NavLink>
              <ul className="branch">
                <li>
                  <NavLink to="/pages/artadults">{t("ArtAdults")}</NavLink>
                </li>
                <li>
                  <NavLink to="/pages/musicadults">{t("MusicAdults")}</NavLink>
                </li>
                <li>
                  <NavLink to="/pages/adultcoaches">
                    {t("CoachesAdults")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pages/artchildren">{t("ArtChildren")}</NavLink>
                </li>
                <li>
                  <NavLink to="/pages/musicchildren">
                    {t("MusicChildren")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pages/childrencoaches">
                    {t("CoachesChildren")}
                  </NavLink>
                </li>
              </ul>
              <NavLink to="/pages/business">{t("Business")}</NavLink>
              <ul className="branch">
                <li>
                  {" "}
                  <NavLink to="/pages/businessadults">
                    {t("BusinessForAdults")}
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/pages/businesschildren">
                    {t("BusinessForChildren")}
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/pages/jobopportunities">
                    {t("JobOpportunities")}
                  </NavLink>
                </li>
              </ul>
              <NavLink to="/pages/tourism">{t("Tourism")}</NavLink>
            </div>
          </li>
          <li className="submenu">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#02979d" : "#000b0c",
                background: isActive ? "#ecf7f7" : "#ecf7f7",
              })}
              className="dropdown"
            >
              {t("About")} <MdKeyboardArrowDown />
            </NavLink>
            <div className="dropdown-content">
              <NavLink to="/pages/aboutus">{t("AboutUs")}</NavLink>

              <NavLink to="/pages/positions">{t("Positions")}</NavLink>

              <NavLink to="/pages/joinus">{t("JoinUs")}</NavLink>
            </div>
          </li>
          <li>
            <NavLink
              to="/pages/contactus"
              style={({ isActive }) => ({
                color: isActive ? "#02979d" : "#000b0c",
                background: isActive ? "#ecf7f7" : "#ecf7f7",
              })}
            >
              {t("Contact")}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
