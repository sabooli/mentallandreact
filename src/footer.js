import React from "react";
import { Link } from "react-router-dom";
import wphone from "./icons/Component 6w.svg";
import wlinkedin from "./icons/Component 3w.svg";
import winstagram from "./icons/Component 4w.svg";
import wfacebook from "./icons/Component 5w.svg";
import wtwitter from "./icons/mainw.svg";

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
            <img src={wphone} className="fcall" alt="phone key" />
            <img src={wlinkedin} className="fcall" alt="linkedin key" />
            <img src={winstagram} className="fcall" alt="instagram key" />
            <img src={wfacebook} className="fcall" alt="facebook key" />
            <img src={wtwitter} className="fcall" alt="twitter key" />
          </div>
        </div>
        <div className="column first">
          <div className="fh2">WRITE US</div>
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