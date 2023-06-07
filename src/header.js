import React from "react";
import Flag from "./Flag";
import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { MdOutlineWhatsapp } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";

export default function Header(props) {
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
        <MdOutlineWhatsapp className={props.className} />
        <CiLinkedin className={props.className} />
        <IoLogoInstagram className={props.className} />
        <TiSocialFacebook className={props.className} />
        <TiSocialTwitter className={props.className} />
      </div>
    </nav>
  );
}
