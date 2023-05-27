import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import "./customize.css";
import union from "../icons/Union.png";
import vector8 from "../icons/Vector 8.png";
import BG from "../icons/Group 1249.png";
import Consultants from "./consultants";
import Patientcomments from "./patientcomments";
import Footer from "../footer";
import gdep from "../icons/Group-dep.svg";
import ganx from "../icons/Group-Anx.svg";
import gfri from "../icons/Group-fri.svg";
import geat from "../icons/Group-eat.svg";
import gdis from "../icons/Group-dis.svg";
import gsol from "../icons/Group-sol.svg";
import grel from "../icons/Group-rel.svg";
import gadhd from "../icons/Group-adhd.svg";
import ok from "../icons/okVector.svg";
import gchpsy from "../icons/Rectangle-chpsy.svg";
import charticle from "../icons/charticle.svg";
import charticle2 from "../icons/charticle2.svg";


export default function Psychildren() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${union})`,
            height: `670px`,
          }}
          className=""
        >
            <Header />
            <Navbar />
         
        </div>
        <div className="kids">
          <div className="childpsy">
            <div className=" text-center">
              <h1 className="lets">Let's Enjoy!</h1>
              <h2 className="enjoy">
                Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
                volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a
                ut vitae felis convallis. Egestas enim diam ac nisi orci id
                tellus lobortis. Lacus in etiam rhoncus.
              </h2>
            </div>
            <div className="parta">
              <h1 className="psychservices text-center">
                Children / Teenagers Psychology Services
              </h1>
              <div>
                <div className="subjects">
                  <figure>
                    <img src={gdep} className="label" alt="depression" />
                    <figcaption className="text-center captionl">
                      Depression
                    </figcaption>
                  </figure>
                  <figure>
                    <img src={ganx} className="label" alt="depression" />
                    <figcaption className="text-center captionl">
                      Anxiety
                    </figcaption>
                  </figure>
                  <figure>
                    <img src={gfri} className="label" alt="depression" />
                    <figcaption className="text-center captionl">
                      Unhealty Eating
                    </figcaption>
                  </figure>
                  <figure>
                    <img src={geat} className="label" alt="depression" />
                    <figcaption className="text-center captionl">
                      Life transitions, Relationship Difficulties
                    </figcaption>
                  </figure>
                  <figure>
                    <img src={gdis} className="label" alt="depression" />
                    <figcaption className="text-center captionl">
                      Adjustment Issues
                    </figcaption>
                  </figure>
                  <figure>
                    <img src={gsol} className="label" alt="depression" />
                    <figcaption className="text-center captionl">
                      Adjustment Issues
                    </figcaption>
                  </figure>
                  <figure>
                    <img src={grel} className="label" alt="depression" />
                    <figcaption className="text-center captionl">
                      Adjustment Issues
                    </figcaption>
                  </figure>
                  <figure>
                    <img src={gadhd} className="label" alt="depression" />
                    <figcaption className="text-center captionl">
                      Adjustment Issues
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="partb">
              <div className="meetc">
                <div className="meetch">
                  <h2 className="meettitle">Children / Teenagers Psychology</h2>
                  <div className="meetcontent">
                    Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                    mollis sit tortor proin proin sagittis. Id nec suspendisse
                    lacus erat. Vivamus orci bibendum at purus elit. Vel
                    vehicula donec amet a dolor sollicitudin ut. Lectus cursus
                    ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque
                    egestas in nec luctus ornare amet. In pellentesque volutpat
                    urna ultrices vitae. Sed magna vitae placerat eu leo potenti
                    semper id. Sed elementum eget adipiscing nisl in vestibulum.
                    Volutpat. <br />
                    <img src={ok} className="ok" alt="ok vector" /> Lorem ipsum
                    dolor sit amet consectetur. Pretium rutrum nisi mollis sit
                    tortor proin proin sagittis.
                    <br />
                    <img src={ok} className="ok" alt="ok vector" /> Lorem ipsum
                    dolor sit amet consectetur.
                    <br />
                    <img src={ok} className="ok" alt="ok vector" /> Lorem ipsum
                    dolor sit amet consectetur. <br />
                    <img src={ok} className="ok" alt="ok vector" /> Lorem ipsum
                    dolor sit amet consectetur.
                  </div>
                </div>
                <img
                  src={gchpsy}
                  className="meetchph img-fluid"
                  alt="adults psychology"
                />
              </div>
            </div>
            <div className="partc">
              <Consultants
                heading="Children / Teenagers Psychology Consultants & Psychologists"
                color="#eaf6f6"
              />
            </div>
            <div className="partd">
              <div className="article">
                <div className="articlead">
                  <h2 className="articletitle">Children Psychology Article</h2>
                  <div className="articlecontent">
                    Lorem ipsum dolor sit amet consectetur. Id tincidunt amet ut
                    eget in mauris amet fermentum. Nulla in id gravida erat.
                    Volutpat magna viverra massa at diam fermentum. Venenatis
                    tortor feugiat accumsan amet pretium ac ac eu dictum.
                    Rhoncus quam nulla id cursus in sit neque. Risus id turpis
                    in sollicitudin nisi. Ac convallis sit dictum ac tristique
                    diam nulla. Ipsum tortor fermentum sociis non quam.
                    Tristique quis molestie adipiscing lacus viverra etiam at
                    aliquet. Volutpat ut nec sed et suspendisse nisi massa et.
                    Vitae dui convallis euismod malesuada praesent molestie.
                  </div>
                </div>
                <img
                  src={charticle}
                  className="articleph img-fluid"
                  alt="adults psychology"
                />
              </div>
            </div>
            <div className="parte">
              <div className="article2child">
                <img
                  src={charticle2}
                  className="article2ph"
                  alt="adults psychology"
                />
                <div className="article2ch">
                  <h2 className="article2title">Children Psychology Article</h2>
                  <div className="article2content">
                    Lorem ipsum dolor sit amet consectetur. Id tincidunt amet ut
                    eget in mauris amet fermentum. Nulla in id gravida erat.
                    Volutpat magna viverra massa at diam fermentum. Venenatis
                    tortor feugiat accumsan amet pretium ac ac eu dictum.
                    <br /> Rhoncus quam nulla id cursus in sit neque. Risus id
                    turpis in sollicitudin nisi. Ac convallis sit dictum ac
                    tristique diam nulla. Ipsum tortor fermentum sociis non
                    quam. Tristique quis molestie adipiscing lacus viverra etiam
                    at aliquet. Volutpat ut nec sed et suspendisse nisi massa
                    et. Vitae dui convallis euismod malesuada praesent molestie.
                  </div>
                </div>
              </div>
            </div>
            <div className="partf">
              <Patientcomments heading="What Our Patients Say About US" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}