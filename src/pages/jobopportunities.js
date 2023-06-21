import React from "react";
import job from "../icons/Group 1255 (1).png"
import Header from "../header";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Footer from "../footer";
import Form from "react-bootstrap/Form";


export default function Jobopp() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url("${job}")`,
            backgroundSize: "cover",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            height: "calc(130vh - 50px)",
          }}
        >
          <Header className="linkedin" />
          <Navbar />
          <div className="jobM">
            <h1 className="jobH">
              Get your <br />
              dream job <br /> today
            </h1>
            <div className="jobT">
              Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
              volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
              vitae felis convallis.
            </div>
            <div className="jobL">
              <Link to="/" className="jobBR">
                <span className="more">Build Resume</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="jobchoose">  
          <div className="selecting"> <div>What</div>
          <Form>
            <Form.Select aria-label="wid">
              <option>Select the Field...</option>
              <option value="1">Depression</option>
              <option value="2">Anxiety</option>
              <option value="3">Unhealthy Eating</option>
              <option value="4">
                Life Transitions, Relationship Difficulties
              </option>
              <option value="5">Adjustment Issues</option>
            </Form.Select></Form>
          </div>
          
          <div className="selecting"><div>Where</div>
            <Form.Select aria-label="wid">
              <option>City, State, Zip code or Remote... </option>
            </Form.Select>
          </div>
          <div className="jobsearch">
            <Link to="#" className="jobsearchT">
Search jobs  </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
}