import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import colorful from "../icons/Group 1250 (1).png";
import childartdep from "../icons/Rectangle 83.png";
import {
  GiMusicalNotes,
  GiPaintBrush,
  GiDramaMasks,
  GiBallerinaShoes,
} from "react-icons/gi";
import { BsPencilSquare, BsArrowUpRight } from "react-icons/bs";
import chpainting from "../icons/Group 974.png";
import chmusic from "../icons/Group 940.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import musician from "../icons/Rectangle 92.png";
import chact from "../icons/Group 942.png";
import chwrite from "../icons/Group 1069.png";
import chdance from "../icons/Group 943.png";
import Patientcomments from "./patientcomments";
import Coach from "./coach";

export default function Artchildren() {
  return (
    <div className="art">
      <div
        style={{
          backgroundImage: `url("${colorful}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          height: "calc(130vh - 50px)",
        }}
      >
        <Header className="instagram" />
        <Navbar />
        <div className="colorfulch">
          <div className="thumbnail">
            <h1 className="colorfulchheading text-center">Let's Enjoy! </h1>
            <div className="colorfulchwords text-center">
              Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
              volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
              vitae felis convallis. Egestas enim diam ac nisi.
            </div>
          </div>
        </div>
      </div>
      <div className="mastdiv">
        <div className="adultartdep">
          <div className="artsdep">
            <h2 className="artsdepheading">children art department</h2>
            <ul>
              <li className="here">
                <GiMusicalNotes className="svg" /> Music{" "}
                <BsArrowUpRight className="floatR" />
              </li>
              <hr />
              <li>
                <GiPaintBrush className="svg" /> Painting
                <BsArrowUpRight className="floatR" />
              </li>
              <hr />
              <li>
                <GiDramaMasks className="svg" /> Acting
                <BsArrowUpRight className="floatR" />
              </li>
              <hr />
              <li>
                <BsPencilSquare className="svg" /> Writing
                <BsArrowUpRight className="floatR" />
              </li>
              <hr />
              <li>
                <GiBallerinaShoes className="svg" /> Dancing
                <BsArrowUpRight className="floatR" />
              </li>
              <hr />
            </ul>
          </div>
          <div className="childartdepimg">
            <LazyLoadImage
              src={childartdep}
              className="img-fluid childartdep"
              alt="adultartdep"
            />
          </div>
        </div>
        <div className="adpainting">
          <div className="adpaintingimg">
            <LazyLoadImage
              src={chpainting}
              className="img-fluid"
              alt="Mentalland painting course"
            />
          </div>
          <div>
            <h2 className="adpaintingheading">mentalland painting course</h2>
            <div className="adpaintingwords">
              Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
              sit bibendum habitant integer a commodo. Malesuada bibendum libero
              sodales vitae interdum leo posuere. Rhoncus tincidunt sociis proin
              proin sit in tortor tincidunt. Sed semper malesuada eget faucibus
              suspendisse diam quam eleifend. Vestibulum egestas ultrices leo
              ut. <br /> Fusce porttitor pellentesque at consectetur bibendum
              turpis. Eu condimentum aliquam auctor duis accumsan cursus
              tristique pellentesque lorem. Eget cras proin.
            </div>
            <Link to="/" className="learnMore ">
              <span className="more">Learn more</span>
            </Link>
          </div>
        </div>
        <div className="chmusic">
          <div>
            <h2 className="admusicheading">our music courses</h2>
            <div className="admusicwords">
              Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
              sit bibendum habitant integer a commodo. Malesuada bibendum libero
              sodales vitae interdum leo posuere. Rhoncus tincidunt sociis proin
              proin sit in tortor tincidunt. Sed semper malesuada eget faucibus
              suspendisse diam quam eleifend. Vestibulum egestas ultrices leo
              ut. <br /> Fusce porttitor pellentesque at consectetur bibendum
              turpis. Eu condimentum aliquam auctor duis accumsan cursus
              tristique pellentesque lorem. Eget cras proin.
            </div>
            <Link to="/" className="learnMore ">
              <span className="more">Learn more</span>
            </Link>
          </div>
          <div className="chmusicimg">
            <LazyLoadImage
              src={chmusic}
              className="img-fluid"
              alt="Mentalland music course"
            />
          </div>
        </div>
        <div className="musiccourse">
          <div className="musician">
            <img
              src={musician}
              className="img-fluid"
              alt="learn music with mentalland Camero Smith"
            />
          </div>
          <div className="musiclearn">
            Let's Strat Playing Guitar
            <div className="cameron mb-4 mt-4">This April</div>
            <Link to="/" className="learnMoreR mt-3">
              <span className="moreR">Register Now</span>
            </Link>
          </div>
        </div>
        <div className="adact">
          <div>
            <h2 className="adactheading">
              Be an actor/actress in mentalland art department
            </h2>
            <div className="adactwords">
              Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
              sit bibendum habitant integer a commodo. Malesuada bibendum libero
              sodales vitae interdum leo posuere. Rhoncus tincidunt sociis proin
              proin sit in tortor tincidunt. Sed semper malesuada eget faucibus
              suspendisse diam quam eleifend. Vestibulum egestas ultrices leo
              ut. <br /> Fusce porttitor pellentesque at consectetur bibendum
              turpis. Eu condimentum aliquam auctor duis accumsan cursus
              tristique pellentesque lorem. Eget cras proin.
            </div>
            <Link to="/" className="learnMore ">
              <span className="more">Learn more</span>
            </Link>
          </div>
          <div className="chactimg">
            <LazyLoadImage
              src={chact}
              className="img-fluid"
              alt="Mentalland act course"
            />
          </div>
        </div>
        <div className="adwrite">
          <div className="adwritingimg">
            <LazyLoadImage
              src={chwrite}
              className="img-fluid"
              alt="Mentalland writing course"
            />
          </div>
          <div>
            <h2 className="adwritingheading">
              best writing courses in mentalland
            </h2>
            <div className="adwritingwords">
              Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
              sit bibendum habitant integer a commodo. Malesuada bibendum libero
              sodales vitae interdum leo posuere. Rhoncus tincidunt sociis proin
              proin sit in tortor tincidunt. Sed semper malesuada eget faucibus
              suspendisse diam quam eleifend. Vestibulum egestas ultrices leo
              ut. <br /> Fusce porttitor pellentesque at consectetur bibendum
              turpis. Eu condimentum aliquam auctor duis accumsan cursus
              tristique pellentesque lorem. Eget cras proin.
            </div>
            <Link to="/" className="learnMore ">
              <span className="more">Learn more</span>
            </Link>
          </div>
        </div>
        <div className="chdance">
          <div>
            <h2 className="addanceheading">enjoy Dancing </h2>
            <div className="addancewords">
              Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
              sit bibendum habitant integer a commodo. Malesuada bibendum libero
              sodales vitae interdum leo posuere. Rhoncus tincidunt sociis proin
              proin sit in tortor tincidunt. Sed semper malesuada eget faucibus
              suspendisse diam quam eleifend. Vestibulum egestas ultrices leo
              ut. <br /> Fusce porttitor pellentesque at consectetur bibendum
              turpis. Eu condimentum aliquam auctor duis accumsan cursus
              tristique pellentesque lorem. Eget cras proin.
            </div>
            <Link to="/" className="learnMore ">
              <span className="more">Learn more</span>
            </Link>
          </div>
          <div className="chdanceimg">
            <LazyLoadImage
              src={chdance}
              className="img-fluid"
              alt="Mentalland dance course"
            />
          </div>
        </div>
        <div className="chinstructors">
          <div className="instructorlist">
            <Coach />
          </div>
        </div>
        <div className="studentcomments">
          <Patientcomments heading="What Our Students Say About US" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
