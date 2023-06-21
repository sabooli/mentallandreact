import React from "react";
import openRoleImg from "../icons/Rectangle 101job.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Openrole() {
  return (
    <div className="rolebar">
      <div className="roleimg">
        <img src={openRoleImg} className="img-fluid" alt="open positions in mentalland" />
      </div>
      <div className="rolebarcontext">
        <div className="roleform">
          <span className="roletitle">Graphic Designer</span>
          <span className="originRole">Today</span>
        </div>
        <div>Remote</div>
        <div className="roletime">
          <span>Mon-Fri</span>
          <span>Full-Time</span>
          <span>$20-$30 An Hour</span>
        </div>
        <div className="posexp">
          -Lorem ipsum dolor sit amet consectetur. Sit at senectus diam eg
          <br />
          -Lorem ipsum dolor sit amet consectetur.
        </div>
        <Link to="/" className="gotorole text-center">
          <HiArrowLongRight className="arrow" />
        </Link>
      </div>
    </div>
  );
}
