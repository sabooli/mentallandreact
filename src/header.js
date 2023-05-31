import React from "react";
import phone from "./icons/Component 6.svg";
import linkedin from "./icons/Component 3.svg";
import instagram from "./icons/Component 4.svg";
import facebook from "./icons/Component 5.svg";
import twitter from "./icons/psychology.svg";
import Flag from "./Flag";
import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";

export default function Header() {
  return (
    <nav className="header">
      <div className="buttons">
        <Link to="/" className="btn-head">
          <span className="login">
            <BiLogIn className="svg" /> {""} Login
          </span>
        </Link>
        <Link to="/" className="btn-head">
          <span className="login">
            <BiShoppingBag className="svg" />
            {""}Cart
          </span>
        </Link>
      </div>
      <div>
        <span className="flag">
          <Flag />
        </span>
      </div>
      <div>
        <input type="search" placeholder="Search" className="search" />
      </div>
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
