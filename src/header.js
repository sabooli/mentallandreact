import React, { useState } from "react";
import Flag from "./Flag";
import { Link, NavLink } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { MdOutlineWhatsapp } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";

export default function Header(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  return (
    <nav className="header">
      <div className="buttons">
        {isLoggedIn ? (
          <>
            <span className="profilePic">
              <CgProfile className="svg" />
            </span>
          </>
        ) : (
          <>
            {" "}
            <Link
              className="btn-head"
              to="https://portals.mentalland.com/login"
            >
              <span className="login">
                <BiLogIn className="svg" /> Login{" "}
              </span>
            </Link>{" "}
          </>
        )}

        <NavLink to="/pages/cart" className="btn-head">
          <span className="login">
            <BiShoppingBag className="svg" />
            Cart
          </span>
        </NavLink>
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
