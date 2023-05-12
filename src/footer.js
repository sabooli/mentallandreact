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
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4">
            <h1 className="fh1">MentalLand</h1>
            <div className="ftext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="fcalls">
              <img src={phone} className="fcall" alt="phone key" />
              <img src={linkedin} className="fcall" alt="linkedin key" />
              <img src={instagram} className="fcall" alt="instagram key" />
              <img src={facebook} className="fcall" alt="facebook key" />
              <img src={twitter} className="fcall" alt="twitter key" />
            </div>
          </div>
          <div className="col-lg-3">
            <h2 className="fh2">WRITE US</h2>
            <form action="#" id="form">
              <div className="form-outline mb-4">
                <div className="fname">Name</div>
                <input type="full name" className="formn" autoComplete="off" />
              </div>
            </form>
            <form action="#" id="form">
              <div className="femail">Email</div>
              <div className="form-outline mb-4">
                <input type="full name" className="forme" autoComplete="off" />
              </div>
            </form>
            <form action="#" id="form">
              <div className="fmessage mt-5">Message</div>
              <div className="form-outline mb-4">
                <input type="full name" className="formm" autoComplete="off" />
              </div>
            </form>
            <button className="fsmessage">
              <div className="fbt">Send Message</div>
            </button>
          </div>
          <div className="col-lg-5">
            <div className="row d-flex justify-content-evenly">
              <div className="col-lg-3 complinks">
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
              <div className="col-lg-2">
                <h2 className="fh22">Helpful Links</h2>
                <a href="#" className="fqaccess fhome">
                  Link 1
                </a>
                <a href="#" className="fqaccess">
                  Link 2
                </a>
                <a href="#" className="fqaccess">
                  Link 3
                </a>
                <a href="#" className="fqaccess">
                  Link 4
                </a>
                <a href="#" className="fqaccess">
                  Link 5
                </a>
              </div>

              <div className="copyright">
                Copyright © 2023 MentalLand Team. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
