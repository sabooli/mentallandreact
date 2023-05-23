import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import "./style.css";
import group from "../icons/Group 1077.svg";
import story from "../icons/Group 1102.svg";
import "swiper/swiper-bundle.css";
import whatsapp from "../icons/whatsapp.svg";
import linkedin from "../icons/iconoir_linkedin.svg";
import instagram from "../icons/instagram.svg";
import join from "../icons/Group 1090.svg";
import { Link } from "react-router-dom";
import arrowLeft from "../icons/arrow-left.svg";
import Teamslider from "./teamslider";

export default function About() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="main-contain">
        <div className="about">
          <h1 className="easy">We are here to make your life easier</h1>
          <div className="how">
            Lorem ipsum dolor sit amet consectetur. Nunc pharetra massa velit
            consectetur lectus erat. Tincidunt dis egestas aliquet adipiscing
            donec. Sed cras vulputate amet scelerisque. Varius etiam enim velit
            arcu arcu eget. Nunc a quis enim nibh posuere cras aenean purus.
            Nulla sagittis semper cum rhoncus varius quis vitae venenatis nibh.
            Senectus fames quisque porta vitae facilisis commodo consequat.
            Feugiat enim odio in sed condimentum. Id et purus est risus.
          </div>
          <img src={group} className="group" alt="happy life" />
        </div>
        <div className="story">
          <div className="ours">
            <h2 className="st">Our Story</h2>
            <div className="handstory">
              Lorem ipsum dolor sit amet consectetur. Nunc pharetra massa velit
              consectetur lectus erat. Tincidunt dis egestas aliquet adipiscing
              donec. Sed cras vulputate amet scelerisque. Varius etiam enim
              velit arcu arcu eget. Nunc a quis enim nibh posuere cras aenean
              purus. Nulla sagittis semper cum rhoncus varius quis vitae
              venenatis nibh. Senectus fames quisque porta vitae facilisis
              commodo consequat. Feugiat enim odio in sed condimentum. Id et
              purus est risus.
            </div>
          </div>
          <img src={story} className="img-fluid hand" alt="our story" />
        </div>
        <div className="team">
          <h2 className="st">Our Team</h2>
          <div className="ourteam">
            Lorem ipsum dolor sit amet consectetur. Nunc pharetra massa velit
            consectetur lectus erat. Tincidunt dis egestas aliquet adipiscing
            donec. Sed cras vulputate amet scelerisque. Varius etiam enim velit
            arcu arcu eget. Nunc a quis enim nibh posuere cras aenean purus.
            Nulla sagittis semper cum rhoncus varius quis vitae venenatis nibh.
          </div>
          <Teamslider />
          <div className="Complementary">
            Lorem ipsum dolor sit amet consectetur. Nunc pharetra massa velit
            consectetur lectus erat. Tincidunt dis egestas aliquet adipiscing
            donec. Sed cras vulputate amet scelerisque. Varius etiam enim velit
            arcu arcu eget. Nunc a quis enim nibh posuere cras aenean purus.
            Nulla sagittis semper cum rhoncus varius quis vitae venenatis nibh.
            <br />
            <img src={whatsapp} className="callIcon" alt="call Icon" />
            <img src={linkedin} className="callIcon" alt="call Icon" />
            <img src={instagram} className="callIcon" alt="call Icon" />
          </div>
       
        <div className="final">
          <div className="join">
            <h1 className="jot">Join Our Team</h1>
            <img src={join} className="joinot"/>
          </div>
          <div className="position">
            Lorem ipsum dolor sit amet consectetur. Nunc pharetra massa velit
            consectetur lectus erat. Tincidunt dis egestas aliquet adipiscing
            donec. Sed cras vulputate amet scelerisque.<br />
            <div className="openPosition"><Link to="/" className="to"><span className="op">see open positions<img src={arrowLeft} /></span></Link></div>
          </div>
        </div>
      </div> </div>
      <Footer />
    </div>
  );
}
