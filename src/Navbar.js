import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
     return (
         <nav className="nav">
           <div className="nav-left">
             MentalLand
           </div>
           <div className="nav-right">
             <ul className="ul">
               <li className="list">
                 <Link to="/pages/Home" className="link">
                  {t("Home")} 
                 </Link>
               </li>
               <li className="list">
                 <Link to="/pages/depressionadults" className="link">
                  {t("Our Services")} 
                 </Link>
               </li>
               <li className="list">
                 <Link to="/pages/aboutus" className="link">
                  {t("About")} 
                 </Link>
               </li>
               <li className="list last">
                 <Link to="/pages/contactus" className="link">
                  {t("Contact Us")} 
                 </Link>
               </li>
             </ul>
           </div>
         </nav>
     
     );
}

