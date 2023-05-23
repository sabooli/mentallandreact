import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import "./style.css";
import "./index.css";
import photo from "../icons/Rectangle 8.svg";
import star from "../icons/Star 9.svg";
import Explain from "./explain";
import { Link } from "react-router-dom";


export default function Counsel() {
    return (
      <div>
        <Header />
        <Navbar />
        <div className="contain">
          <div className="connect">
            <div className="bigbar">
              <div className="part">
                <img src={photo} className="photo" alt="personal" />
              </div>
              <div className="part container-fluid">
                <div className="sub who">
                  <h2 className="drname">Dr. Mary Green</h2>
                  <h3 className="dreducation">Ph.D in Psychology</h3>
                  <div className="level">
                    <img src={star} className="star" alt="rate" />
                    <span className="rate">4.9</span>
                    <span className="experience">+1000 Consultations</span>
                  </div>
                </div>
                <div className="row workField">
                  <div className="bgfield1">
                    <span className="field">Depression</span>
                  </div>
                  <div className="bgfield2">
                    <span className="field">Anxiety</span>
                  </div>
                  <div className="bgfield3">
                    <span className="field">Adjustment Issues</span>
                  </div>
                </div>
                <div className="hhh">
                  <Link to="/pages/consultantadults" className="counsel">
                    <div className="justnow">Start Counseling</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Explain />
        </div>
        <Footer />
      </div>
    );
}