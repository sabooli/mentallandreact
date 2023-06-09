import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import colorful from "../icons/Group 1067.png";
import adultartdep from "../icons/adultart.svg";
import {
  GiMusicalNotes,
  GiPaintBrush,
  GiDramaMasks,
  GiBallerinaShoes,
} from "react-icons/gi";
import { BsPencilSquare, BsArrowUpRight } from "react-icons/bs";
import adpainting from "../icons/Rectangle 79.svg";
import admusic from "../icons/Rectangle 87.svg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import musician from "../icons/Rectangle 92.svg";
import adact from "../icons/Group 1068.svg";
import adwrite from "../icons/Rectangle 129.svg";
import addance from "../icons/Group 938.svg";
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
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
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
          <LazyLoadImage
            src={adultartdep}
            className="adultartdepimg"
            alt="adultartdep"
          />
        </div>
        <div className="adpainting">
          <LazyLoadImage
            src={adpainting}
            height={460}
            className="adpaintingimg"
            alt="Mentalland painting course"
          />
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
          <LazyLoadImage
            height={460}
            src={admusic}
            className="admusicimg"
            alt="Mentalland music course"
          />
        </div>
        <div className="musiccourse">
          <LazyLoadImage
            src={musician}
            height={380}
            className="musician"
            alt="learn music with mentalland Camero Smith"
          />
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
          <LazyLoadImage
            src={adact}
            height={480}
            className="adactimg"
            alt="Mentalland act course"
          />
        </div>
        <div className="adwrite">
          <LazyLoadImage
            src={adwrite}
            height={460}
            className="adwritingimg"
            alt="Mentalland writing course"
          />
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
          <LazyLoadImage
            src={addance}
            height={450}
            className="addanceimg"
            alt="Mentalland dance course"
          />
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
