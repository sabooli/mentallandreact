import React from "react"; 
import shopping from "./icons/shopping-bag.svg";
import login from "./icons/login.svg";
import "./App.css";

export default function Header() {
return (
  <nav className="header">
    <nav className="nav-left buttons">
      <button className="btn-head">
        <div className="login">
          <img src={login} className="svg" />
          Login
        </div>
      </button>
      <button className="btn-head">
        <div className="login">
          <img src={shopping} className="svg" />
          Cart
        </div>
      </button>
    </nav>
    <nav className="center"></nav>
    <nav className="nav-right"></nav>
  </nav>
);
}