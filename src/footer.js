import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineWhatsapp } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";

export default function Footer() {
  return (
    <footer className="CompInfo">
      <div className="main-container">
        <div className="column summary">
          <h1 className="fh1">MentalLand</h1>
          <div className="ftext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div className="fcalls">
            <MdOutlineWhatsapp className="facebook" />
            <CiLinkedin className="facebook" />
            <IoLogoInstagram className="facebook" />
            <TiSocialFacebook className="facebook" />
            <TiSocialTwitter className="facebook" />
          </div>
        </div>
        <div className="column first">
          <div className="fh2">WRITE US</div>
          <div className="fname">Name
          <input type="full name" className="formn" autoComplete="off" /></div>

          <div className="femail">Email
          <input type="full name" className="forme" autoComplete="off" /></div>

          <div className="fmessage">Message
          <textarea type="full name" className="formm" autoComplete="off" /></div>

          <button className="fsmessage">
            <div className="fbt">Send Message</div>
          </button>
        </div>

        <div className="column web">
          <div className="inner-column">
            <div className="fh22">Quick Access</div>
            <Link to="/pages/Home" className="fqaccess fhome">
              Home
            </Link>
            <br />
            <Link to="/pages/depressionadults" className="fqaccess">
              Our Services
            </Link>
            <br />
            <Link to="/pages/aboutus" className="fqaccess">
              About
            </Link>
            <br />
            <Link to="/pages/contactus" className="fqaccess">
              Contact Us
            </Link>
            <br />
            <Link to="/pages/contactus" className="fqaccess">
              Articles
            </Link>
          </div>
          <div className="inner-column">
            <div className="fh22">Helpful Links</div>
            <Link to="/pages/aboutus" className="fqaccess fhome">
              Link 1
            </Link>
            <br />
            <Link to="/pages/aboutus" className="fqaccess">
              Link 2
            </Link>
            <br />
            <Link to="/pages/aboutus" className="fqaccess">
              Link 3
            </Link>
            <br />
            <Link to="/pages/aboutus" className="fqaccess">
              Link 4
            </Link>
            <br />
            <Link to="/pages/aboutus" className="fqaccess">
              Link 5
            </Link>
          </div>
          <div className="bottom">
            copyright © 2023 mentalland team. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}