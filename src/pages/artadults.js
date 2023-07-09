import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import colorful from "../icons/Group 1067.png";
import adultartdep from "../icons/Rectangle 83ad.png";
import {
  GiMusicalNotes,
  GiPaintBrush,
  GiDramaMasks,
  GiBallerinaShoes,
} from "react-icons/gi";
import { BsPencilSquare, BsArrowUpRight } from "react-icons/bs";
import adpainting from "../icons/Mask group.png";
import admusic from "../icons/Rectangle 87.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import musician from "../icons/Rectangle 92.png";
import adact from "../icons/Group 1068.png";
import adwrite from "../icons/Rectangle 129.png";
import addance from "../icons/Group 938.png";
import Patientcomments from "./patientcomments";
import Coach from "./coach";

export default function Artadults() {
  return (
    <div className="art">
      <div
        style={{
          backgroundImage: `url("${colorful}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          height: "calc(130vh - 50px)",
        }}
      >
        <Header className="instagram" />
        <Navbar />
        <div className="colorful">
          <h1 className="colorfulheading text-center">
            welcome to the colorful world of art
          </h1>
          <div className="colorfulwords text-center">
            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
            volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
            vitae felis convallis. Egestas enim diam ac nisi orci id tellus
            lobortis. Lacus in etiam rhoncus.
          </div>
        </div>
      </div>
      <div className="mastdiv">
        <div className="adultartdep">
          <div className="artsdep">
            <h2 className="artsdepheading">adults art department</h2>
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
          <div className="adultartdepimg">
            <LazyLoadImage
              src={adultartdep}
              className="img-fluid"
              alt="adultartdep"
            />
          </div>
        </div>
        <div className="adpainting">
          <div className="adpaintingimg">
            <LazyLoadImage
              src={adpainting}
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
        <div className="admusic">
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
          <div className="admusicimg">
            <LazyLoadImage
              src={admusic}
              className="img-fluid"
              alt="Mentalland music course"
            />
          </div>
        </div>
        <div className="musiccourse">
          <div className="musician">
            <img
              src={musician}
              className="pt-3 img-fluid"
              alt="learn music with mentalland Cameron Smith"
            />
          </div>
          <div className="musiclearn">
            Join us to learn music with{" "}
            <div className="cameron">CAMERON SMITH</div> April 2023
            <br />{" "}
            <Link to="/" className="learnMoreR">
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
          <div className="adactimg">
            <LazyLoadImage
              src={adact}
              className="img-fluid"
              alt="Mentalland act course"
            />
          </div>
        </div>
        <div className="adwrite">
          <div className="adwritingimg">
            <LazyLoadImage
              src={adwrite}
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
        <div className="addance">
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
          <div className="addanceimg">
            <LazyLoadImage
              src={addance}
              className="img-fluid"
              alt="Mentalland dance course"
            />
          </div>
        </div>
        <div className="instructors">
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
