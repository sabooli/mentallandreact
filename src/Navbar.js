import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


export default function Navbar() {
  const { t } = useTranslation();
     return (
      
       <div>
         <nav className="navbar nav navbar-expand-lg">
           <div className="nav-left">MentalLand</div>
           <button
             className="navbar-toggler"
             type="button"
             data-toggle="collapse"
             data-target="#navbarNavDropdown"
             aria-controls="navbarNavDropdown"
             aria-expanded="false"
             aria-label="Toggle navigation"
           >
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNavDropdown">
             <ul className="navbar-nav ul">
               <li className="nav-item list">
                 <Link to="/pages/Home" className="nav-link">
                   {t("Home")}
                 </Link>
               </li>
               <li className="nav-item list">
                 <Link to="/pages/depressionadults" className="nav-link">
                   {t("Our Services")}
                 </Link>
               </li>
               <li className="nav-item list">
                 <Link to="/pages/aboutus" className="nav-link">
                   {t("About")}
                 </Link>
               </li>
               <li className="nav-item list">
                 <Link to="/pages/contactus" className="nav-link">
                   {t("Contact Us")}
                 </Link>
               </li>
              
             </ul>
           </div>
         </nav>
         <nav className="nav navbar-expand-lg">
           <div className="nav-left">MentalLand</div>
           <div className="nav-right">
             <button
               className="navbar-toggler"
               type="button"
               data-toggle="collapse"
               data-target="#navbarNavDropdown"
               aria-controls="navbarNavDropdown"
               aria-expanded="false"
               aria-label="Toggle navigation"
             >
               <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNavDropdown">
               <ul className="navbar-nav">
                 <li className="nav-item list">
                   <Link to="/pages/Home" className="nav-link">
                     {t("Home")}
                   </Link>
                 </li>
                 <li className="nav-item">
                   <Link to="/pages/depressionadults" className="nav-link">
                     {t("Our Services")}
                   </Link>
                 </li>
                 <li className="nav-item">
                   <Link to="/pages/aboutus" className="nav-link">
                     {t("About")}
                   </Link>
                 </li>
                 <li className="nav-item">
                   <Link to="/pages/contactus" className="nav-link">
                     {t("Contact Us")}
                   </Link>
                 </li>
               </ul>
             </div>
           </div>
         </nav>
       </div>
     );
}

