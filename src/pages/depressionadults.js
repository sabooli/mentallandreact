import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import "./index.css";
import Filter from "./filter";
import Doctors from "./Doctors";


export default function Services() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="address"></div>
      <div className="maincontent">
        <h1 className="Dep">Depression</h1>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 d-none d-lg-block">
          <Filter />
        </div>
        <div className="col-lg-8">
          <div className="row threeitems ms-5">
            <div className="col-lg-3">
              <button className="top">
                <div className="Trated">Top rated</div>
              </button>
            </div>
            <div className="col-lg-6">
              <div className="flexContainer">
                <input
                  type="search"
                  placeholder="Write the name..."
                  className="phname"
                />
                <button type="submit" className="find">
                  <div className="fitext">Search</div>
                </button>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="number">740 Psychologists</div>
            </div>
          </div>
          <Doctors />
        </div>
      </div>

      <Footer />
    </div>
  );
}
