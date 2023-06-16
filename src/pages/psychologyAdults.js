import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import back from "../icons/Group 1247 (1).png";
import depression from "../icons/Group 806.svg";
import anxiety from "../icons/Group 807.svg";
import unhealthyEat from "../icons/Group 808.svg";
import lifeDiffs from "../icons/Group 809.svg";
import issues from "../icons/Group 810.svg";
import meet from "../icons/Rectangle 67.png";
import article from "../icons/Group 936.png";
import article2ph from "../icons/Group 934.png";
import ok from "../icons/okVector.svg";
import Consultants from "./consultants";
import Patientcomments from "./patientcomments";
import Footer from "../footer";



export default function Psyadults() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url("${back}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "calc(130vh - 50px)",
          }}
        >
          <Header className="whatsapp" />
          <Navbar />
          <div className="happy">
            <h1 className="beHappy text-center">
              <span className="f">Get Help, Get Better</span>
              <br />
              <span className="s">You Deserve to be Happy</span>
            </h1>
            <div className="getHelp text-center">
              Lorem ipsum dolor sit amet consectetur. Amet velit convallis amet
              mi leo aliquet in vestibulum consectetur. Lectus magna eleifend
            </div>
          </div>
        </div>
        <div className="contain">
          <div className="adultspsy">
            <div className="part1">
              <h1 className="topic text-center">Adults Psychology Services</h1>
              <div className="subjects">
                <figure>
                  <img src={depression} className="label" alt="depression" />
                  <figcaption className="text-center captionl">
                    Depression
                  </figcaption>
                </figure>
                <figure>
                  <img src={anxiety} className="label" alt="depression" />
                  <figcaption className="text-center captionl">
                    Anxiety
                  </figcaption>
                </figure>
                <figure>
                  <img src={unhealthyEat} className="label" alt="depression" />
                  <figcaption className="text-center captionl">
                    Unhealty Eating
                  </figcaption>
                </figure>
                <figure>
                  <img src={lifeDiffs} className="label" alt="depression" />
                  <figcaption className="text-center captionl">
                    Life transitions, Relationship Difficulties
                  </figcaption>
                </figure>
                <figure>
                  <img src={issues} className="label" alt="depression" />
                  <figcaption className="text-center captionl">
                    Adjustment Issues
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="part2">
              <div className="meet">
                <div className="meetph">
                  <img
                    src={meet}
                    className="img-fluid"
                    alt="adults psychology"
                  />
                </div>
                <div className="meetad">
                  <h2 className="meettitle">Adults Psychology</h2>
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
              </div>
            </div>
            <div className="part3">
              <Consultants
                heading="Adults Psychology Consultants & Psychologists"
                color="#eaf6f6"
              />
            </div>
            <div className="part4">
              <div className="article">
                <div className="articlead">
                  <h2 className="articletitle">Adults Psychology Article</h2>
                  <div className="articlecontent">
                    Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                    mollis sit tortor proin proin sagittis. Id nec suspendisse
                    lacus erat. Vivamus orci bibendum at purus elit. Vel
                    vehicula donec amet a dolor sollicitudin ut. Lectus cursus
                    ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque
                    egestas in nec luctus ornare amet. In pellentesque volutpat
                    urna ultrices vitae. Sed magna vitae placerat eu leo potenti
                    semper id. Sed elementum eget adipiscing nisl in vestibulum.
                    Volutpat.In pellentesque volutpat urna ultrices vitae. Sed
                    magna vitae placerat eu leo potenti semper id. Sed
                    elementum.
                  </div>
                </div>
                <div className="articleph">
                  <img
                    src={article}
                    className="img-fluid"
                    alt="adults psychology"
                  />
                </div>
              </div>
            </div>
            <div className="part5">
              <div className="article2">
                <div className="article2ph">
                  <img
                    src={article2ph}
                    className="img-fluid"
                    alt="adults psychology"
                  />
                </div>
                <div className="article2ad">
                  <h2 className="article2title">Adults Psychology</h2>
                  <div className="article2content">
                    Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                    mollis sit tortor proin proin sagittis. Id nec suspendisse
                    lacus erat. Vivamus orci bibendum at purus elit. Vel
                    vehicula donec amet a dolor sollicitudin ut. Lectus cursus
                    ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque
                    egestas in nec luctus ornare amet. In pellentesque volutpat
                    urna ultrices vitae. Sed magna vitae placerat eu leo potenti
                    semper id. Sed elementum eget adipiscing nisl in vestibulum.
                    Volutpat.
                    <br />
                    <br />
                    In pellentesque volutpat urna ultrices vitae. Sed magna
                    vitae placerat eu leo potenti semper id. Sed elementum eget
                    adipiscing nisl in vestibulum. Volutpat.
                  </div>
                </div>
              </div>
            </div>
            <div className="part6">
              <Patientcomments heading="What Our Patients Say About US" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}