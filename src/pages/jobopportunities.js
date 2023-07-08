import React, { useState } from "react";
import job from "../icons/Group 1255 (1).png"
import Header from "../header";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Footer from "../footer";
import Form from "react-bootstrap/Form";
import { CgSortAz } from "react-icons/cg";
import Position from "./position";
import Positioninfo from "./PositionInfo";


export default function Jobopp() {
  const [positionInfo, setPositionInfo] = useState(false);

  const handleBackClick = () => {
      setPositionInfo(false);
    }

 const handleBoxClick = () => {
      setPositionInfo(true);
    };
    
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
          <div className="selecting">
            {" "}
            <div>What</div>
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
              </Form.Select>
            </Form>
          </div>

          <div className="selecting">
            <div>Where</div>
            <Form.Select aria-label="wid">
              <option>City, State, Zip code or Remote... </option>
            </Form.Select>
          </div>
          <div className="jobsearch">
            <Link to="#" className="jobsearchT">
              Search jobs{" "}
            </Link>
          </div>
        </div>
        <div className="jobopportunitieslist">
          <div className="jobfilters">
            <Form.Select
              className="formselect"
              aria-label="Disabled select example"
            >
              <option className="text-center d-none">Remote</option>
              <option>From Asia</option>
              <option>From Europe</option>
            </Form.Select>
            <button className="dropdown">Intership</button>

            <Form.Select
              className="formselect"
              aria-label="Disabled select example"
            >
              <option className="text-center d-none">Job Type</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
            </Form.Select>
            <Form.Select
              className="formselect"
              aria-label="Disabled select example"
            >
              <option className="text-center d-none">Education</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
            </Form.Select>
            <Form.Select
              className="formselect"
              aria-label="Disabled select example"
            >
              <option className="text-center d-none">Salary</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
            </Form.Select>
            <Form.Select
              className="formselect"
              aria-label="Disabled select example"
            >
              <option className="text-center d-none">Experience</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
            </Form.Select>
            <Form.Select
              className="formselect"
              aria-label="Disabled select example"
            >
              <option className="text-center d-none">Facilities</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
            </Form.Select>
            <Form.Select
              className="formselect"
              aria-label="Disabled select example"
            >
              <option className="text-center d-none">Date Posted</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
            </Form.Select>
          </div>
          <button className="topjob mb-4">
            <CgSortAz style={{ fontSize: 24, marginInlineEnd: 5 }} />
            Latest
          </button>
          {positionInfo ? (
            <div>
              <div className="Positionslistanddetail">
                <div className="positiondisplay">
                  <Position onClick={handleBoxClick} />
                  <Position onClick={handleBoxClick} />
                  <Position onClick={handleBoxClick} />
                </div>
                <div className="posinfodisplay">
                  <Positioninfo />
                </div>
              </div>
              <Link onClick={handleBackClick} className="backpls">
                Back
              </Link>
            </div>
          ) : (
            <div className="positionnotdetail">
              <Position onClick={handleBoxClick} />
              <Position onClick={handleBoxClick} />
              <Position onClick={handleBoxClick} />
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
}