import React from "react";
import Upcoming from "./upcoming";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";


export default function Seminars() {
    return (
      <div>
        <Header className="whatsapp" />
        <Navbar />
        <div className="seminars">
          <div className="sliders">
            <div className="spzseminars">
              <Upcoming heading="Specialized Seminars" color="#fafefe" />
            </div>
            <div className="spzevents">
              <Upcoming heading="Specialized Events" color="#fafefe" />
            </div>
            <div className="genseminars">
              <Upcoming heading="General Seminars" color="#fafefe" />
            </div>
            <div className="genevents">
              <Upcoming heading="General Events" color="#fafefe" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}