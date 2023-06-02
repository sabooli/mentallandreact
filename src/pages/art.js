import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import artback from "../icons/Rectangle 44-.png";
import artstu from "../icons/Group 1031.svg";
import artcou from "../icons/artcou.svg";
import artinst from "../icons/Group 1033.svg";
import madults from "../icons/Rectangle 83.svg";
import mchildren from "../icons/Rectangle 84.svg";
import arttherapy from "../icons/Group 1057.svg";
import musicrelax from "../icons/Group 1058.svg";
import dancing from "../icons/Group 909.svg";
import writing from "../icons/Rectangle 85.svg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";




export default function Art() {
    return (
      <div className="art">
        <div
          style={{
            backgroundImage: `url("${artback}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center center",
            height: "720px",
          }}
        >
          <Header />
          <Navbar />
          <div className="AH">
            <h1 className="AHheading text-center">arts & health</h1>
            <div className="AHwords text-center">
              Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
              volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
              vitae felis convallis. Egestas enim diam ac nisi orci id tellus
              lobortis. Lacus in etiam rhoncus.
            </div>
          </div>
          <div className="thumbnailring">
            <div className="ring">
              <span>dddddddddd</span>
            </div>
          </div>
        </div>
        <div className="parental">
          <div className="precendent">
            <figure>
              <div className="thumbnail">
                <LazyLoadImage
                  src={artstu}
                  alt="art instructors"
                  className="artinst img-fluid"
                />
                <span className="n1">+1000</span>
                <span className="t1">Art Students</span>
              </div>
            </figure>
            <figure>
              <div className="thumbnail">
                <LazyLoadImage
                  src={artcou}
                  alt="art courses"
                  className="artcou img-fluid"
                />
                <div className="ncaption">
                  <span className="n2">15</span>
                  <span className="t2">Art Courses</span>
                </div>
              </div>
            </figure>
            <figure>
              <div className="thumbnail">
                <LazyLoadImage
                  src={artinst}
                  alt="art instructors"
                  className="artinst img-fluid"
                />
                <span className="n3">20</span>
                <span className="t3">Art Instructors</span>
              </div>
            </figure>
          </div>
          <div>
            <h1 className="MADheading">Mental art department</h1>
            <div className="MADimages">
              <figure>
                <LazyLoadImage
                  src={madults}
                  className="madults img-fluid"
                  alt="Mental art department for adults"
                />
                <figcaption className="madwords">ADULTS</figcaption>
              </figure>
              <figure>
                <LazyLoadImage
                  src={mchildren}
                  className="mchildren img-fluid"
                  alt="Mental art department for children & teenagers"
                />
                <figcaption className="mchwords">
                  CHILDREN & TEENAGERS
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="arttherapy">
            <LazyLoadImage
              src={arttherapy}
              className="therapyimage img-fluid"
              alt="art therapy"
            />
            <div className="therapypass">
              <h2 className="therapyheading">knowing more about art therapy</h2>
              <div className="therapywords">
                Lorem ipsum dolor sit amet consectetur. Ut aliquam cursus ac
                cras massa turpis suspendisse est. Tincidunt sit cum aliquam
                enim ipsum at dolor sapien. Pulvinar gravida gravida viverra
                blandit ac massa nibh. Tortor viverra elementum varius amet. Leo
                varius id sed mattis. Imperdiet scelerisque amet commodo ornare
                mattis sem. <br /> Euismod at placerat ipsum arcu habitasse
                pretium nunc. Id donec massa fames malesuada viverra. Sed
                suspendisse nec ut sodales a amet facilisis mattis risus. Tortor
                aliquet turpis commodo ipsum et. Faucibus orci magna in proin
                penatibus.
              </div>
              <div className="link">
                <Link to="/" className="learnMore ">
                  <span className="more">Adults</span>
                </Link>
                <Link to="/" className="learnMore linkto">
                  <span className="more">Children & Teenagers</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="arttherapy">
            <div className="musicrelaxpass">
              <h2 className="therapyheading">Music & Relaxation</h2>
              <div className="therapywords">
                Lorem ipsum dolor sit amet consectetur. Ut aliquam cursus ac
                cras massa turpis suspendisse est. Tincidunt sit cum aliquam
                enim ipsum at dolor sapien. Pulvinar gravida gravida viverra
                blandit ac massa nibh. Tortor viverra elementum varius amet. Leo
                varius id sed mattis. Imperdiet scelerisque amet commodo ornare
                mattis sem. <br /> Euismod at placerat ipsum arcu habitasse
                pretium nunc. Id donec massa fames malesuada viverra. Sed
                suspendisse nec ut sodales a amet facilisis mattis risus. Tortor
                aliquet turpis commodo ipsum et. Faucibus orci magna in proin
                penatibus.
              </div>
              <div className="link">
                <Link to="/" className="learnMore ">
                  <span className="more">Adults</span>
                </Link>
                <Link to="/" className="learnMore linkto">
                  <span className="more">Children & Teenagers</span>
                </Link>
              </div>
            </div>
            <LazyLoadImage
              src={musicrelax}
              className="musicrelaximage img-fluid"
              alt="music therapy"
            />
          </div>
          <div className="arttherapy">
            <LazyLoadImage
              src={dancing}
              className="dancingimage img-fluid"
              alt="art therapy"
            />
            <div className="therapypass">
              <h2 className="therapyheading">health benefits of dancing</h2>
              <div className="therapywords">
                Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
                sit bibendum habitant integer a commodo. Malesuada bibendum
                libero sodales vitae interdum leo posuere. Rhoncus tincidunt
                sociis proin proin sit in tortor tincidunt. Sed semper malesuada
                eget faucibus suspendisse diam quam eleifend. Vestibulum egestas
                ultrices leo ut. Fusce porttitor pellentesque at consectetur
                bibendum turpis. Eu condimentum aliquam auctor duis.
              </div>
              <div className="link">
                <Link to="/" className="learnMore ">
                  <span className="more">Adults</span>
                </Link>
                <Link to="/" className="learnMore linkto">
                  <span className="more">Children & Teenagers</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="arttherapy">
            <div className="writingpass">
              <h2 className="therapyheading">
                relation between writing & getting calm
              </h2>
              <div className="therapywords">
                Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
                sit bibendum habitant integer a commodo. Malesuada bibendum
                libero sodales vitae interdum leo posuere. Rhoncus tincidunt
                sociis proin proin sit in tortor tincidunt. Sed semper malesuada
                eget faucibus suspendisse diam quam eleifend. Vestibulum egestas
                ultrices leo ut. <br />
                Fusce porttitor pellentesque at consectetur bibendum turpis. Eu
                condimentum aliquam auctor duis accumsan.
              </div>
              <div className="link">
                <Link to="/" className="learnMore ">
                  <span className="more">Adults</span>
                </Link>
                <Link to="/" className="learnMore linkto">
                  <span className="more">Children & Teenagers</span>
                </Link>
              </div>
            </div>
            <LazyLoadImage
              src={writing}
              className="writingimage img-fluid"
              alt="music therapy"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
}