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
import phone from "../icons/phone.svg";
import messages from "../icons/messages.svg";

export default function Counsel() {
    return (
      <div>
        <Header />
        <Navbar />
        <div className="contain">
          <div className="connect">
            <div className="bigbar">
              <img src={photo} className="photo" alt="personal" />
              <div className="row">
                <div className="comp col-lg-9">
                  <h2 className="drname">Dr. Mary Green</h2>
                  <h3 className="dreducation">Ph.D in Psychology</h3>
                  <div>
                    <div className="row rof">
                      <div className="bgfield1 ">
                        <span className="field">Depression</span>
                      </div>
                      <div className="bgfield2">
                        <span className="field">Anxiety</span>
                      </div>
                      <div className="bgfield3">
                        <span className="field">Adjustment Issues</span>
                      </div>
                    </div>
                    <div className="level dup">
                      <img src={star} className="star" alt="rate" />
                      <span className="rate">4.9</span>
                      <span className="experience">+1000 Consultations</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="bgphoconsult">
                    <span className="phoconsult">
                      <img src={phone} className="phone" alt="phone" />{" "}
                      Phone Consultation
                    </span>
                  </div>
                  <div className="bgtxconsult">
                    <span className="txconsult">
                      <img
                        src={messages}
                        className="messages"
                        alt="messages"
                      />
                      Text Consultation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}