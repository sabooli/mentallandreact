import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";

export default function Navbar() {
     return (
       <BrowserRouter>
         <nav className="nav">
           <div className="nav-left">
             MentalLand
           </div>
           <div className="nav-right">
             <ul className="ul">
               <li className="list">
                 <Link to="/pages/Home" className="link">
                   Home
                 </Link>
               </li>
               <li className="list">
                 <Link to="/pages/depressionadults" className="link">
                   Our Services
                 </Link>
               </li>
               <li className="list">
                 <Link to="/pages/aboutus" className="link">
                   About
                 </Link>
               </li>
               <li className="list last">
                 <Link to="/pages/contactus" className="link">
                   Contact Us
                 </Link>
               </li>
             </ul>
           </div>
         </nav>
       </BrowserRouter>
     );
}

