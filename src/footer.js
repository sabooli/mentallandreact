import React from "react";
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
              <img src={phone} className="call" alt="phone key" />
              <img src={linkedin} className="call" alt="linkedin key" />
              <img src={instagram} className="call" alt="instagram key" />
              <img src={facebook} className="call" alt="facebook key" />
              <img src={twitter} className="call" alt="twitter key" />
            </div>
          </div>
          <div className="col-lg-4">
            <h2 className="fh2">WRITE US</h2>
            <form action="#" id="form">
              <div class="form-outline mb-4">
                <div className="fname">Name</div>
                <input type="full name" className="formn" autocomplete="off" />
              </div>
            </form>
            <form action="#" id="form">
              <div className="femail">Email</div>
              <div class="form-outline mb-4">
                <input type="full name" className="forme" autocomplete="off" />
              </div>
            </form>
            <form action="#" id="form">
              <div className="fmessage mt-5">Message</div>
              <div class="form-outline mb-4">
                <input type="full name" className="formm" autocomplete="off" />
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="row d-flex justify-content-evenly">
              <div className="col-lg-2">
                <h2 className="fh22">Quick Access</h2>
                <a>Home</a>
                <a>Our Services</a>
                <a>About</a>
                <a>Contact Us</a>
                <a>Articles</a>
              </div>
              <div className="col-lg-2">
                <h2 className="fh22">Helpful Links</h2>
              </div>
              <a>Link 1</a>
              <a>Link 2</a>
              <a>Link 3</a>
              <a>Link 4</a>
              <a>Link 5</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
