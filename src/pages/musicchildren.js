import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import musicbg from "../icons/Group 1067 - .png";
import Gui from "../icons/Group 1127.svg";
import Pia from "../icons/Group 1128.svg";
import Si from "../icons/Group 1129.svg";
import Tru from "../icons/Group 1130.svg";
import Vio from "../icons/Group 1131.svg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Guitarad from "../icons/Group 1141.png";
import Pianoad from "../icons/Group 1142.png";
import Singad from "../icons/Group 1144.png";
import Trumpetch from "../icons/Group 1145.png";
import Violinad from "../icons/Rectangle 311.png";
import Patientcomments from "./patientcomments";

export default function Musicchildren() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("${musicbg}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
          height: "calc(130vh - 50px)",
        }}
      >
        <Header className="instagram" />
        <Navbar />
        <div className="musicforchildren">
          <h1 className="musicforchildrenheading">Enjoy the music</h1>
          <div className="musicforchildrenwords ">
            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
            volutpat quis in erat. Sit aenean eget nascetur mus non.
          </div>
        </div>
      </div>
      <div className="wholecontent">
        <div className="musicHall text-center">
          <img src={Gui} className="instrument" alt="Mentalland music course" />
          <img src={Pia} className="instrument" alt="Mentalland music course" />
          <img src={Si} className="instrument" alt="Mentalland music course" />
          <img src={Tru} className="instrument" alt="Mentalland music course" />
          <img src={Vio} className="instrument" alt="Mentalland music course" />
        </div>

        <div className="adpainting">
          <div className="adpaintingImg">
            <LazyLoadImage
              src={Guitarad}
              className="img-fluid"
              alt="Mentalland guitar course for adults"
            />
          </div>
          <div>
            <h2 className="adpaintingheading">Guitar course</h2>
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
              <span className="more">Register Now</span>
            </Link>
          </div>
        </div>
        <div className="admusic">
          <div>
            <h2 className="admusicheading">Piano Course</h2>
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
              <span className="more">Register Now</span>
            </Link>
          </div>
          <div className="admusicImg">
            <LazyLoadImage
              src={Pianoad}
              className="img-fluid"
              alt="Mentalland piano course for adults"
            />
          </div>
        </div>
        <div className="adwrite">
          <div className="adwritingImg">
            <LazyLoadImage
              src={Singad}
              className="img-fluid"
              alt="Mentalland singing course for adults"
            />
          </div>
          <div>
            <h2 className="adwritingheading">Singing course </h2>
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
              <span className="more">Register Now</span>
            </Link>
          </div>
        </div>
        <div className="addance">
          <div>
            <h2 className="addanceheading">Trumpet Course </h2>
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
              <span className="more">Register Now</span>
            </Link>
          </div>
          <div className="addanceImg">
            <LazyLoadImage
              src={Trumpetch}
              className="img-fluid"
              alt="Mentalland trumpet course for adults"
            />
          </div>
        </div>

        <div className="adwrite">
          <div className="adwritingImg">
            <LazyLoadImage
              src={Violinad}
              className="img-fluid"
              alt="Mentalland violin course for adults"
            />
          </div>
          <div>
            <h2 className="adwritingheading">Violin course </h2>
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
              <span className="more">Register Now</span>
            </Link>
          </div>
        </div>
        <div className="studentcomments">
          <Patientcomments heading="What Our Art Students Say About US" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
