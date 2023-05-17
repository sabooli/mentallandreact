import React from "react";
import "./index.css";
import star from "../icons/Star 9.svg";
import phone from "../icons/call-calling.svg";
import messages from "../icons/messages.svg";
import { Link } from "react-router-dom";
import photo from "../icons/Rectangle 8.svg";

export default function Doctors() {
  return (
    <div className="bar">
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
        <div className="sub method">
          <div className="bgphoconsult">
            <span className="phoconsult">
              <img src={phone} className="phone pe-2" alt="phone" /> Phone
              Consultation
            </span>
          </div>
          <div className="bgtxconsult">
            <span className="txconsult">
              <img src={messages} className="messages pe-2" alt="messages" />
              Text Consultation
            </span>
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
            <div className="justnow">Start Counseling</div><span className="short">Counsel</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
