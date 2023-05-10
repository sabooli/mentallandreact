import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import "./index.css";
import Filter from "./filter";


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
        <div className="col-lg-4">
          <Filter />
        </div>
        <div className="col-lg-8"></div>
      </div>
      <Footer />
    </div>
  );
}
