import React, { useState } from "react";
import "./home.css";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import homepsychology from "../icons/Rectangle 11home.svg";
import { Link } from "react-router-dom";
import { FaSuitcase } from "react-icons/fa";

export default function Home(data) {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  }; 
  return (
    <div>
      <Header />
      <Navbar />
      <div>
        <div className="subsume">
          <div className="home">
            <div className="partI">
              <h2 className="ourServices">Our Professional Services</h2>
              <div className="summarize">
                <span
                  className={activeButton === 0 ? "activecase" : ""}
                  onClick={() => handleButtonClick(0)}
                >
                  <div className="boxy">
                    <h3 className="heading">Psychology</h3>
                  </div>
                </span>
                <span
                  className={activeButton === 1 ? "activecase" : ""}
                  onClick={() => handleButtonClick(1)}
                >
                  <div className="boxy">
                    <h3 className="heading">
                      <br />
                      Business
                    </h3>
                  </div>
                </span>
                <span
                  className={activeButton === 2 ? "activecase" : ""}
                  onClick={() => handleButtonClick(2)}
                >
                  <div className="boxy">
                    <h3 className="heading">Art</h3>
                  </div>
                </span>
              </div>
              <div className="setup">
                <div className="homepsy">
                  <div className="words">
                    Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                    mollis sit tortor proin proin sagittis. Id nec suspendisse
                    lacus erat. Vivamus orci bibendum at purus elit. Vel
                    vehicula donec amet a dolor sollicitudin ut. Lectus cursus
                    ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque
                    egestas in nec luctus ornare amet. In pellentesque volutpat
                    urna ultrices vitae. Sed magna vitae placerat eu leo potenti
                    semper id. Sed elementum eget adipiscing nisl in vestibulum.
                    Volutpat.
                  </div>
                  <Link to="/" className="learnMore">
                    <span className="more">Learn more</span>
                  </Link>
                </div>
                <div>
                  <img
                    src={homepsychology}
                    className="homepsychology"
                    alt="psychology"
                  />
                </div>
              </div>
            </div>
            <div className="partII">
              <h2 className="introduction">Who We are</h2>
              <div className="introwords">
                Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                mollis sit tortor proin proin sagittis. Id nec suspendisse lacus
                erat. Vivamus orci bibendum at purus elit. Vel vehicula donec
                amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat
                nulla enim. Nisl phasellus viverra quisque egestas in nec luctus
                ornare amet. In pellentesque volutpat urna ultrices vitae. Sed
                magna vitae placerat eu leo potenti semper id. Sed elementum
                eget adipiscing nisl in vestibulum. Volutpat.
              </div>
              <div className="circles">
                <figure>
                  <div className="bigcircle firstyear">
                    <div className="circle">
                      <span className="establishyear">2019</span>
                    </div>
                  </div>
                  <figcaption className="circlecaption">
                    Created with Love
                  </figcaption>
                </figure>
                <figure>
                  <div className="bigcircle shadow">
                    {" "}
                    <div className="circle">
                      <span className="establishyear">2020</span>
                    </div>
                  </div>
                  <figcaption className="circlecaption">
                    Art Academy Added
                  </figcaption>
                </figure>{" "}
                <figure>
                  <div className="bigcircle shadow">
                    {" "}
                    <div className="circle">
                      <span className="establishyear">2021</span>
                    </div>
                  </div>
                  <figcaption className="circlecaption">
                    BEing the first mental website in Iran
                  </figcaption>
                </figure>{" "}
                <figure>
                  <div className="bigcircle shadow">
                    {" "}
                    <div className="circle">
                      <span className="establishyear">2023</span>
                    </div>
                  </div>
                  <figcaption className="circlecaption">
                    redesigned, improved and expanded{" "}
                  </figcaption>
                </figure>
              </div>
              <div className="text-center">
                <Link to="/" className="learnMore">
                  <span className="more">Learn more</span>
                </Link>
              </div>
            </div>
            <div className="partIII">
              <h3 className="vision">Our vision & Mission</h3>
              <div className="visionwords">
                Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                mollis sit tortor proin proin sagittis. Id nec suspendisse lacus
                erat. Vivamus orci bibendum at purus elit. Vel vehicula donec
                amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat
                nulla enim. Nisl phasellus viverra quisque egestas in nec luctus
                ornare amet. In pellentesque volutpat urna ultrices vitae.
              </div>
              <div className="mission"></div>
            </div>
          </div>
        </div>
        Home
        <Link to="/pages/psychology">Psychology</Link>
        <br />
        <Link to="/pages/psychologyAdults">Psychology-adults</Link>
        <br />
        <Link to="/pages/psychologyChildren">Psychology-children</Link>
        <br />
        <Link to="/pages/seminars">Seminars</Link>
      </div>
      <Footer />
    </div>
  );
}
