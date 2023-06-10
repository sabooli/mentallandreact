import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import adbusiness from "../icons/Group 1252.png";
import Badone from "../icons/GroupBad1.svg";
import Badtwo from "../icons/GroupBad2.svg";
import { Link } from "react-router-dom";
import Customercomments from "./customercomments";



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
          <Header className="whatsapp" />
          <Navbar />
        </div>
        <div className="business">
          <div className="businessadone">
            <img src={Badone} width="100%" height={480} />
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
            <img src={Badtwo} width="100%" height={460} />
          </div>
          <div>
            <h3 className="ljo mb-5">the latest job opportunities</h3>
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