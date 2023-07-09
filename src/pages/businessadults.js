import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import adbusiness from "../icons/Group 1252.png";
import Badone from "../icons/Group 953.png";
import Badtwo from "../icons/Group 953t.png";
import { Link } from "react-router-dom";
import Customercomments from "./customercomments";
import Position from "./position";
import Adultcourses from "./adultcourses";

export default function Businessadults() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url("${adbusiness}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            height: "calc(130vh - 50px)",
          }}
        >
          <Header className="linkedin" />
          <Navbar />
          <div className="adbeexpert">
            <h1 className="adbeexpertheading">
              let's start something big together
            </h1>
            <div className="adbeexpertwords">
              Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
              volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
              vitae felis convallis. Egestas enim diam ac nisi orci id tellus
              lobortis. Lacus in etiam rhoncus.
            </div>
            <Link className="adbeexpertReg">
              <span>Resigter now</span>
            </Link>
          </div>
        </div>
        <div className="business">
          <div className="courR">
          <Adultcourses heading="ADULT COURSES" /></div>
          <div className="businessadone">
            <div className="Badoneph">
            <img
              src={Badone}
              className="img-fluid"
              alt="digital marketing"
            /></div>
            <div className="Badone">
              <h2 className="Badoneheading">future of digital marketing</h2>
              <div className="Badonewords mb-5 mt-4">
                Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
                sit bibendum habitant integer a commodo. Malesuada bibendum
                libero sodales vitae interdum leo posuere. Rhoncus tincidunt
                sociis proin proin sit in tortor tincidunt. Sed semper malesuada
                eget faucibus suspendisse diam quam eleifend. Vestibulum egestas
                ultrices leo ut. Fusce porttitor pellentesque at consectetur
                bibendum turpis. Eu condimentum aliquam auctor duis accumsan
                cursus tristique pellentesque lorem. Eget cras proin.
              </div>
              <Link to="/" className="learnMore ">
                <span className="more">Learn more</span>
              </Link>
            </div>
          </div>
          <div className="businessadtwo">
            {" "}
            <div className="Badtwo">
              <h2 className="Badtwoheading">future of digital marketing</h2>
              <div className="Badtwowords mb-5 mt-4">
                Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
                sit bibendum habitant integer a commodo. Malesuada bibendum
                libero sodales vitae interdum leo posuere. Rhoncus tincidunt
                sociis proin proin sit in tortor tincidunt. Sed semper malesuada
                eget faucibus suspendisse diam quam eleifend. Vestibulum egestas
                ultrices leo ut. Fusce porttitor pellentesque at consectetur
                bibendum turpis. Eu condimentum aliquam auctor duis accumsan
                cursus tristique pellentesque lorem. Eget cras proin.
              </div>
              <Link to="/" className="learnMore ">
                <span className="more">Learn more</span>
              </Link>
            </div>
            <div className="Badtwoph">
            <img
              src={Badtwo}
              className="img-fluid"
              alt="digital marketing"
            /></div>
          </div>
          <div>
            <h3 className="ljo mb-5">the latest job opportunities</h3>
            <div className="posdesign">
              <Position /> <Position />
            </div>
            <div className="posdesign">
              <Position /> <Position />
            </div>
            <div className="posdesign">
              <Position /> <Position />
            </div>
            <div className="text-center">
            <Link to="/" className="seeAll mt-5 mb-3">
              <span className="see">See all</span>
            </Link></div>
            <div className="ljocases"> </div>
          </div>
          <div className="stussay">
            <Customercomments heading="What Our Students Say" />
          </div>
        </div>

        <Footer />
      </div>
    );
}