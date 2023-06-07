import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import musicbg from "../icons/Group 1067-.png";
import Gui from "../icons/Guitar.svg";
import Pia from "../icons/Piano.svg";
import Si from "../icons/Sing.svg";
import Tru from "../icons/Trumpet.svg";
import Vio from "../icons/Violin.svg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Guitarad from "../icons/Union.svg";
import Pianoad from "../icons/Group 1135.svg";
import Singad from "../icons/Group 1138.svg";
import Violinad from "../icons/Group 1136.svg";
import Patientcomments from "./patientcomments";

export default function Musicadults() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url("${musicbg}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center center",
            height: "calc(130vh - 50px)",
          }}
        >
          <Header className="instagram" />
          <Navbar />
          <div className="musicforadults">
            <h1 className="musicforadultsheading text-center">
              Music is Everything{" "}
            </h1>
            <div className="musicforadultswords text-center">
              Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
              volutpat quis in erat. Sit aenean eget nascetur mus non.
            </div>
          </div>
        </div>
        <div className="wholecontent">
          <div className="musicHall text-center">
            <img
              src={Gui}
              className="instrument"
              alt="Mentalland music course"
            />
            <img
              src={Pia}
              className="instrument"
              alt="Mentalland music course"
            />
            <img
              src={Si}
              className="instrument"
              alt="Mentalland music course"
            />
            <img
              src={Tru}
              className="instrument"
              alt="Mentalland music course"
            />
            <img
              src={Vio}
              className="instrument"
              alt="Mentalland music course"
            />
          </div>

          <div className="adpainting">
            <LazyLoadImage
              src={Guitarad}
              height={460}
              className="adpaintingimg"
              alt="Mentalland guitar course for adults"
            />
            <div>
              <h2 className="adpaintingheading">Guitar course</h2>
              <div className="adpaintingwords">
                Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
                sit bibendum habitant integer a commodo. Malesuada bibendum
                libero sodales vitae interdum leo posuere. Rhoncus tincidunt
                sociis proin proin sit in tortor tincidunt. Sed semper malesuada
                eget faucibus suspendisse diam quam eleifend. Vestibulum egestas
                ultrices leo ut. <br /> Fusce porttitor pellentesque at
                consectetur bibendum turpis. Eu condimentum aliquam auctor duis
                accumsan cursus tristique pellentesque lorem. Eget cras proin.
              </div>
              <Link to="/" className="learnMore ">
                <span className="more">Register Now</span>
              </Link>
            </div>
          </div>
          <div className="admusic">
            <div>
              <h2 className="admusicheading">Piano Course</h2>
              <div className="admusicwords">
                Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
                sit bibendum habitant integer a commodo. Malesuada bibendum
                libero sodales vitae interdum leo posuere. Rhoncus tincidunt
                sociis proin proin sit in tortor tincidunt. Sed semper malesuada
                eget faucibus suspendisse diam quam eleifend. Vestibulum egestas
                ultrices leo ut. <br /> Fusce porttitor pellentesque at
                consectetur bibendum turpis. Eu condimentum aliquam auctor duis
                accumsan cursus tristique pellentesque lorem. Eget cras proin.
              </div>
              <Link to="/" className="learnMore ">
                <span className="more">Register Now</span>
              </Link>
            </div>
            <LazyLoadImage
              height={460}
              src={Pianoad}
              className="admusicimg"
              alt="Mentalland piano course for adults"
            />
          </div>
          <div className="adwrite">
            <LazyLoadImage
              src={Singad}
              height={460}
              className="adwritingimg"
              alt="Mentalland singing course for adults"
            />
            <div>
              <h2 className="adwritingheading">Singing course </h2>
              <div className="adwritingwords">
                Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
                sit bibendum habitant integer a commodo. Malesuada bibendum
                libero sodales vitae interdum leo posuere. Rhoncus tincidunt
                sociis proin proin sit in tortor tincidunt. Sed semper malesuada
                eget faucibus suspendisse diam quam eleifend. Vestibulum egestas
                ultrices leo ut. <br /> Fusce porttitor pellentesque at
                consectetur bibendum turpis. Eu condimentum aliquam auctor duis
                accumsan cursus tristique pellentesque lorem. Eget cras proin.
              </div>
              <Link to="/" className="learnMore ">
                <span className="more">Register Now</span>
              </Link>
            </div>
          </div>
          <div className="addance">
            <div>
              <h2 className="addanceheading">Trumpet Course </h2>
              <div className="addancewords">
                Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
                sit bibendum habitant integer a commodo. Malesuada bibendum
                libero sodales vitae interdum leo posuere. Rhoncus tincidunt
                sociis proin proin sit in tortor tincidunt. Sed semper malesuada
                eget faucibus suspendisse diam quam eleifend. Vestibulum egestas
                ultrices leo ut. <br /> Fusce porttitor pellentesque at
                consectetur bibendum turpis. Eu condimentum aliquam auctor duis
                accumsan cursus tristique pellentesque lorem. Eget cras proin.
              </div>
              <Link to="/" className="learnMore ">
                <span className="more">Learn more</span>
              </Link>
            </div>
            <LazyLoadImage
              src={Singad}
              height={450}
              className="addanceimg"
              alt="Mentalland trumpet course for adults"
            />
          </div>

          <div className="adwrite">
            <LazyLoadImage
              src={Violinad}
              height={460}
              className="adwritingimg"
              alt="Mentalland violin course for adults"
            />
            <div>
              <h2 className="adwritingheading">Violin course </h2>
              <div className="adwritingwords">
                Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
                sit bibendum habitant integer a commodo. Malesuada bibendum
                libero sodales vitae interdum leo posuere. Rhoncus tincidunt
                sociis proin proin sit in tortor tincidunt. Sed semper malesuada
                eget faucibus suspendisse diam quam eleifend. Vestibulum egestas
                ultrices leo ut. <br /> Fusce porttitor pellentesque at
                consectetur bibendum turpis. Eu condimentum aliquam auctor duis
                accumsan cursus tristique pellentesque lorem. Eget cras proin.
              </div>
              <Link to="/" className="learnMore ">
                <span className="more">Register Now</span>
              </Link>
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