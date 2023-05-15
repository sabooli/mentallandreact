import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import phone from "./icons/Component 6.svg";
import linkedin from "./icons/Component 3.svg";
import instagram from "./icons/Component 4.svg";
import facebook from "./icons/Component 5.svg";
import twitter from "./icons/psychology.svg";
import "./App.css";

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
            <img src={phone} className="fcall" alt="phone key" />
            <img src={linkedin} className="fcall" alt="linkedin key" />
            <img src={instagram} className="fcall" alt="instagram key" />
            <img src={facebook} className="fcall" alt="facebook key" />
            <img src={twitter} className="fcall" alt="twitter key" />
          </div>
        </div>
        <div className="column first">
          <h2 className="fh2">WRITE US</h2>
          <div className="fname">Name</div>
          <input type="full name" className="formn" autoComplete="off" />

          <div className="femail">Email</div>
          <input type="full name" className="forme" autoComplete="off" />

          <div className="fmessage">Message</div>
          <input type="full name" className="formm" autoComplete="off" />

          <button className="fsmessage">
            <div className="fbt">Send Message</div>
          </button>
        </div>

        <div className="column web">
          <div className="inner-column">
            <h2 className="fh22">Quick Access</h2>
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
            <h2 className="fh22">Helpful Links</h2>
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