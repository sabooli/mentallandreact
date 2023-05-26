import React from "react";
import shopping from "./icons/shopping-bag.svg";
import login from "./icons/login.svg";
import phone from "./icons/Component 6.svg";
import linkedin from "./icons/Component 3.svg";
import instagram from "./icons/Component 4.svg";
import facebook from "./icons/Component 5.svg";
import twitter from "./icons/psychology.svg";
import Flag from "./Flag";
import "./App.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="header">
      <div className="buttons">
        <Link to="/" className="btn-head">
          <span className="login">
            <img src={login} className="svg" alt="login key" />
            {""}Login</span>
        </Link>
        <Link to="/" className="btn-head">
          <span className="login">
            <img src={shopping} className="svg" alt="shopping" />
            {""}Cart</span>
        </Link></div>
        <div>
        <span className="flag">
          <Flag />
        </span></div>
        <div>
        <input type="search" placeholder="Search" className="search" /></div>
      <div className="calls">
        <img src={phone} className="call" alt="phone key" />
        <img src={linkedin} className="call" alt="linkedin key" />
        <img src={instagram} className="call" alt="instagram key" />
        <img src={facebook} className="call" alt="facebook key" />
        <img src={twitter} className="call" alt="twitter key" />
      </div>
    </nav>
  );
}
