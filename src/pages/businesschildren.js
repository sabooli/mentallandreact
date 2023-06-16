import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import chbusiness from "../icons/Group 1254.png";
import Bchone from "../icons/Rectangle 132.png";
import Bchtwo from "../icons/Group 949.png";
import Bchthree from "../icons/Group 952.png";
import { Link } from "react-router-dom";
import Customercomments from "./customercomments";
import Position from "./position";
import Adultcourses from "./adultcourses";

export default function Businessadults() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("${chbusiness}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "calc(130vh - 50px)",
        }}
      >
        <Header className="linkedin" />
        <Navbar />
        <div className="chbeexpert">
          <h1 className="chbeexpertheading">
            To be expert
            <br /> take your best course
          </h1>
          <div className="chbeexpertwords">
            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
            volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
            vitae felis convallis. Egestas enim diam ac nisi orci id tellus
            lobortis.
          </div>
          <Link className="chbeexpertReg">
            <span>Resigter now</span>
          </Link>
        </div>
      </div>
      <div className="business">
        <Adultcourses heading="CHILDREN & TEENAGERS COURSES" />
        <div className="businesschtwo chbubg">
          <div className="Badtwo">
            <h2 className="Badtwoheading">
              about digital marketing for children & teenagers
            </h2>
            <div className="Badtwowords mb-5 mt-4">
              Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
              sit bibendum habitant integer a commodo. Malesuada bibendum libero
              sodales vitae interdum leo posuere. Rhoncus tincidunt sociis proin
              proin sit in tortor tincidunt. Sed semper malesuada eget faucibus
              suspendisse diam quam eleifend. Vestibulum egestas ultrices leo
              ut. Fusce porttitor pellentesque at consectetur bibendum turpis.
              Eu condimentum aliquam auctor duis accumsan cursus tristique
              pellentesque lorem. Eget cras proin.
            </div>
            <Link to="/" className="learnMore ">
              <span className="more">Learn more</span>
            </Link>
          </div>
          <div className="Bchoneph">
            <img
              src={Bchone}
              className="img-fluid"
              alt="digital marketing for children"
            />
          </div>
        </div>
        <div className="businessadone">
          <div className="Bchtwoph">
            <img src={Bchtwo} className="img-fluid" alt="IT for children" />
          </div>{" "}
          <div className="Badone">
            <h2 className="Badoneheading">IT for children & TEENAGERS</h2>
            <div className="Badonewords mb-5 mt-4">
              Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
              sit bibendum habitant integer a commodo. Malesuada bibendum libero
              sodales vitae interdum leo posuere. Rhoncus tincidunt sociis proin
              proin sit in tortor tincidunt. Sed semper malesuada eget faucibus
              suspendisse diam quam eleifend. Vestibulum egestas ultrices leo
              ut. Fusce porttitor pellentesque at consectetur bibendum turpis.
              Eu condimentum aliquam auctor duis accumsan cursus tristique
              pellentesque lorem. Eget cras proin.
            </div>
            <Link to="/" className="learnMore">
              <span className="more">Learn more</span>
            </Link>
          </div>
        </div>
        <div className="businessadtwo">
          {" "}
          <div className="Badtwo">
            <h2 className="Badtwoheading">MBA and children</h2>
            <div className="Badtwowords mb-5 mt-4">
              Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
              sit bibendum habitant integer a commodo. Malesuada bibendum libero
              sodales vitae interdum leo posuere. Rhoncus tincidunt sociis proin
              proin sit in tortor tincidunt. Sed semper malesuada eget faucibus
              suspendisse diam quam eleifend. Vestibulum egestas ultrices leo
              ut. Fusce porttitor pellentesque at consectetur bibendum turpis.
              Eu condimentum aliquam auctor duis accumsan cursus tristique
              pellentesque lorem. Eget cras proin.
            </div>
            <Link to="/" className="learnMore ">
              <span className="more">Learn more</span>
            </Link>
          </div>
          <div className="Bchthreeph">
          <img
            src={Bchthree}
            className="img-fluid"
            alt="MBA for children"
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
          <Link to="/" className="seeAll mt-5 mb-3">
            <span className="see">See all</span>
          </Link>
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
