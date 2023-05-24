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
  let doctors = [
    {
      name: "Dr. Smith",
      about:
        "Dr. Smith is an experienced cardiologist with a focus on prevention and lifestyle modification.",
      comments: [
        "I felt very reassured after my appointment with Dr. Smith",
        "Highly recommend Dr. Smith for heart health concerns",
      ],
      weeklyPlan: [
        "Monday: 9am - 12pm: Office hours",
        "Wednesday: 1pm - 5pm: Hospital rounds",
        "Saturday: 10am - 2pm: Cardiology clinic",
      ],
    },
    {
      name: "Dr. Lee",
      about:
        "Dr. Lee is a general practitioner with a passion for holistic health and wellness.",
      comments: [
        "Dr. Lee really takes the time to listen to me and my concerns",
        "I appreciate how Dr. Lee looks at the whole picture, not just individual symptoms",
      ],
      weeklyPlan: [
        "Tuesday: 10am - 12pm: Office hours",
        "Thursday: 2pm - 5pm: Home visits",
        "Friday: 9am - 12pm: Holistic medicine clinic",
      ],
    },
    {
      name: "Dr. Chang",
      about:
        "Dr. Chang is a renowned neurosurgeon who has pioneered new techniques in brain surgery.",
      comments: [
        "I am so grateful to Dr. Chang for saving my life",
        "Dr. Chang made me feel at ease during a very stressful time",
      ],
      weeklyPlan: [
        "Monday: 1pm - 5pm: Office hours",
        "Wednesday: 9am - 12pm: Surgery consultations",
        "Thursday: 9am - 2pm: Hospital surgeries",
      ],
    },
  ];
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
          <Explain data={doctors} />
        </div>
        <Footer />
      </div>
    );
}